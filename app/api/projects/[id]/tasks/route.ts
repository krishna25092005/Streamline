import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { getAuthUser, unauthorizedResponse, forbiddenResponse, badRequestResponse, errorResponse } from '@/lib/auth';
import { getWorkspaceMember } from '@/lib/rbac';
import { createTaskSchema } from '@/lib/validations';

export async function GET(req: NextRequest, { params }: { params: { id: string } }) {
  try {
    const authUser = await getAuthUser(req);
    if (!authUser) return unauthorizedResponse();

    const project = await prisma.project.findUnique({
      where: { id: params.id },
      select: { workspaceId: true },
    });

    if (!project) return badRequestResponse('Project not found');

    const member = await getWorkspaceMember(authUser.userId, project.workspaceId);
    if (!member) return forbiddenResponse('You do not have access to this project tasks');

    const taskWhereCondition = member.role === 'ADMIN'
      ? { projectId: params.id }
      : {
          projectId: params.id,
          OR: [
            { assigneeId: authUser.userId },
            { createdById: authUser.userId },
            { assignee: { email: authUser.email.toLowerCase() } },
          ],
        };

    const tasks = await prisma.task.findMany({
      where: taskWhereCondition,
      include: {
        assignee: { select: { id: true, name: true, email: true, avatarUrl: true } },
        createdBy: { select: { id: true, name: true, avatarUrl: true } },
        subTasks: { select: { id: true, taskId: true, title: true, completed: true } },
        _count: { select: { comments: true, activityLogs: true } },
      },
      orderBy: { createdAt: 'desc' },
    });

    return NextResponse.json({
      success: true,
      data: tasks.map((t) => ({
        id: t.id,
        title: t.title,
        description: t.description,
        priority: t.priority,
        status: t.status,
        dueDate: t.dueDate,
        projectId: t.projectId,
        workspaceId: t.workspaceId,
        assignee: t.assignee,
        createdBy: t.createdBy,
        subTasks: t.subTasks,
        commentCount: t._count.comments,
        activityCount: t._count.activityLogs,
        createdAt: t.createdAt,
        updatedAt: t.updatedAt,
      })),
    });
  } catch (error) {
    console.error('Get tasks error:', error);
    return errorResponse('Failed to fetch tasks');
  }
}

export async function POST(req: NextRequest, { params }: { params: { id: string } }) {
  try {
    const authUser = await getAuthUser(req);
    if (!authUser) return unauthorizedResponse();

    const project = await prisma.project.findUnique({
      where: { id: params.id },
      select: { workspaceId: true },
    });

    if (!project) return badRequestResponse('Project not found');

    const member = await getWorkspaceMember(authUser.userId, project.workspaceId);
    if (!member) return forbiddenResponse('You are not a member of this workspace');
    if (member.role !== 'ADMIN') {
      return forbiddenResponse('Only Workspace Admins can create new tasks');
    }

    const body = await req.json();
    const validated = createTaskSchema.safeParse({ ...body, projectId: params.id });

    if (!validated.success) {
      return badRequestResponse('Validation failed', validated.error.flatten().fieldErrors);
    }

    const { title, description, priority, status, dueDate, assigneeId } = validated.data;

    const task = await prisma.task.create({
      data: {
        title,
        description,
        priority,
        status,
        dueDate: dueDate ? new Date(dueDate) : null,
        projectId: params.id,
        workspaceId: project.workspaceId,
        assigneeId: assigneeId || null,
        createdById: authUser.userId,
      },
      include: {
        assignee: { select: { id: true, name: true, email: true, avatarUrl: true } },
        createdBy: { select: { id: true, name: true, avatarUrl: true } },
      },
    });

    // Record creation in activity log
    await prisma.taskActivityLog.create({
      data: {
        taskId: task.id,
        userId: authUser.userId,
        action: 'CREATED',
        newState: status,
      },
    });

    return NextResponse.json({
      success: true,
      data: task,
    }, { status: 201 });
  } catch (error) {
    console.error('Create task error:', error);
    return errorResponse('Failed to create task');
  }
}
