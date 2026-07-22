import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { getAuthUser, unauthorizedResponse, forbiddenResponse, badRequestResponse, errorResponse } from '@/lib/auth';
import { getWorkspaceMember } from '@/lib/rbac';
import { updateTaskSchema } from '@/lib/validations';

export async function GET(req: NextRequest, { params }: { params: { id: string } }) {
  try {
    const authUser = await getAuthUser(req);
    if (!authUser) return unauthorizedResponse();

    const task = await prisma.task.findUnique({
      where: { id: params.id },
      include: {
        assignee: { select: { id: true, name: true, email: true, avatarUrl: true } },
        createdBy: { select: { id: true, name: true, email: true, avatarUrl: true } },
        project: { select: { id: true, name: true } },
        comments: {
          include: {
            author: { select: { id: true, name: true, avatarUrl: true } },
          },
          orderBy: { createdAt: 'asc' },
        },
        activityLogs: {
          include: {
            user: { select: { id: true, name: true, avatarUrl: true } },
          },
          orderBy: { createdAt: 'desc' },
        },
      },
    });

    if (!task) return badRequestResponse('Task not found');

    const member = await getWorkspaceMember(authUser.userId, task.workspaceId);
    if (!member) return forbiddenResponse('You do not have access to this task');

    if (member.role !== 'ADMIN') {
      const isAssignee = task.assigneeId === authUser.userId || (task.assignee?.email && task.assignee.email.toLowerCase() === authUser.email.toLowerCase());
      const isCreator = task.createdById === authUser.userId;
      if (!isAssignee && !isCreator) {
        return forbiddenResponse('RBAC Access Denied: Members can only view details of tasks assigned to them');
      }
    }

    return NextResponse.json({
      success: true,
      data: task,
    });
  } catch (error) {
    console.error('Get task error:', error);
    return errorResponse('Failed to fetch task details');
  }
}

export async function PATCH(req: NextRequest, { params }: { params: { id: string } }) {
  try {
    const authUser = await getAuthUser(req);
    if (!authUser) return unauthorizedResponse();

    const existingTask = await prisma.task.findUnique({
      where: { id: params.id },
      include: {
        assignee: { select: { name: true, email: true } },
      },
    });

    if (!existingTask) return badRequestResponse('Task not found');

    const member = await getWorkspaceMember(authUser.userId, existingTask.workspaceId);
    if (!member) return forbiddenResponse('You are not a member of this workspace');

    // Strict RBAC Enforcement (Requirement #5):
    // Admin can update any task.
    // Regular Member can only update tasks assigned to them or created by them.
    const isAssignee = existingTask.assigneeId === authUser.userId || (existingTask.assignee?.email && existingTask.assignee.email.toLowerCase() === authUser.email.toLowerCase());
    const isCreator = existingTask.createdById === authUser.userId;
    const isAdmin = member.role === 'ADMIN';

    if (!isAdmin && !isAssignee && !isCreator) {
      return forbiddenResponse(
        'RBAC Permission Denied: Members can only update status/details on tasks assigned to them or created by them.'
      );
    }

    const body = await req.json();
    const validated = updateTaskSchema.safeParse(body);

    if (!validated.success) {
      return badRequestResponse('Validation failed', validated.error.flatten().fieldErrors);
    }

    const updateData = validated.data;
    const activityLogsToCreate: { action: string; previousState?: string; newState?: string }[] = [];

    // Track status change
    if (updateData.status && updateData.status !== existingTask.status) {
      activityLogsToCreate.push({
        action: 'STATUS_CHANGE',
        previousState: existingTask.status,
        newState: updateData.status,
      });
    }

    // Track priority change
    if (updateData.priority && updateData.priority !== existingTask.priority) {
      activityLogsToCreate.push({
        action: 'PRIORITY_CHANGE',
        previousState: existingTask.priority,
        newState: updateData.priority,
      });
    }

    // Track assignee change
    if (updateData.assigneeId !== undefined && updateData.assigneeId !== existingTask.assigneeId) {
      let newAssigneeName = 'Unassigned';
      if (updateData.assigneeId) {
        const newAssigneeUser = await prisma.user.findUnique({
          where: { id: updateData.assigneeId },
          select: { name: true },
        });
        if (newAssigneeUser) newAssigneeName = newAssigneeUser.name;
      }
      activityLogsToCreate.push({
        action: 'REASSIGNED',
        previousState: existingTask.assignee?.name || 'Unassigned',
        newState: newAssigneeName,
      });
    }

    // Prepare Prisma update payload
    const prismaUpdate: Record<string, unknown> = {};
    if (updateData.title !== undefined) prismaUpdate.title = updateData.title;
    if (updateData.description !== undefined) prismaUpdate.description = updateData.description;
    if (updateData.priority !== undefined) prismaUpdate.priority = updateData.priority;
    if (updateData.status !== undefined) prismaUpdate.status = updateData.status;
    if (updateData.dueDate !== undefined) {
      prismaUpdate.dueDate = updateData.dueDate ? new Date(updateData.dueDate) : null;
    }
    if (updateData.assigneeId !== undefined) {
      prismaUpdate.assigneeId = updateData.assigneeId || null;
    }

    const updatedTask = await prisma.task.update({
      where: { id: params.id },
      data: prismaUpdate,
      include: {
        assignee: { select: { id: true, name: true, email: true, avatarUrl: true } },
        createdBy: { select: { id: true, name: true, avatarUrl: true } },
      },
    });

    // Create activity logs in DB
    for (const log of activityLogsToCreate) {
      await prisma.taskActivityLog.create({
        data: {
          taskId: params.id,
          userId: authUser.userId,
          action: log.action,
          previousState: log.previousState,
          newState: log.newState,
        },
      });
    }

    return NextResponse.json({
      success: true,
      data: updatedTask,
    });
  } catch (error) {
    console.error('Update task error:', error);
    return errorResponse('Failed to update task');
  }
}

export async function DELETE(req: NextRequest, { params }: { params: { id: string } }) {
  try {
    const authUser = await getAuthUser(req);
    if (!authUser) return unauthorizedResponse();

    const task = await prisma.task.findUnique({
      where: { id: params.id },
      select: { workspaceId: true, createdById: true },
    });

    if (!task) return badRequestResponse('Task not found');

    const member = await getWorkspaceMember(authUser.userId, task.workspaceId);
    if (!member) return forbiddenResponse('You are not a member of this workspace');

    const isAdmin = member.role === 'ADMIN';
    const isCreator = task.createdById === authUser.userId;

    if (!isAdmin && !isCreator) {
      return forbiddenResponse('Only workspace Admins or task creators can delete tasks');
    }

    await prisma.task.delete({
      where: { id: params.id },
    });

    return NextResponse.json({
      success: true,
      message: 'Task deleted successfully',
    });
  } catch (error) {
    console.error('Delete task error:', error);
    return errorResponse('Failed to delete task');
  }
}
