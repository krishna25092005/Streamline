import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { getAuthUser, unauthorizedResponse, forbiddenResponse, badRequestResponse, errorResponse } from '@/lib/auth';
import { getWorkspaceMember } from '@/lib/rbac';
import { createTaskCommentSchema } from '@/lib/validations';

export async function GET(req: NextRequest, { params }: { params: { id: string } }) {
  try {
    const authUser = await getAuthUser(req);
    if (!authUser) return unauthorizedResponse();

    const task = await prisma.task.findUnique({
      where: { id: params.id },
      select: { workspaceId: true },
    });

    if (!task) return badRequestResponse('Task not found');

    const member = await getWorkspaceMember(authUser.userId, task.workspaceId);
    if (!member) return forbiddenResponse('You are not a member of this workspace');

    const comments = await prisma.taskComment.findMany({
      where: { taskId: params.id },
      include: {
        author: { select: { id: true, name: true, avatarUrl: true } },
      },
      orderBy: { createdAt: 'asc' },
    });

    return NextResponse.json({
      success: true,
      data: comments,
    });
  } catch (error) {
    console.error('Get task comments error:', error);
    return errorResponse('Failed to fetch comments');
  }
}

export async function POST(req: NextRequest, { params }: { params: { id: string } }) {
  try {
    const authUser = await getAuthUser(req);
    if (!authUser) return unauthorizedResponse();

    const task = await prisma.task.findUnique({
      where: { id: params.id },
      select: { workspaceId: true },
    });

    if (!task) return badRequestResponse('Task not found');

    const member = await getWorkspaceMember(authUser.userId, task.workspaceId);
    if (!member) return forbiddenResponse('You are not a member of this workspace');

    const body = await req.json();
    const validated = createTaskCommentSchema.safeParse(body);

    if (!validated.success) {
      return badRequestResponse('Validation failed', validated.error.flatten().fieldErrors);
    }

    const { content } = validated.data;

    const comment = await prisma.taskComment.create({
      data: {
        taskId: params.id,
        authorId: authUser.userId,
        content,
      },
      include: {
        author: { select: { id: true, name: true, avatarUrl: true } },
      },
    });

    // Record activity log
    await prisma.taskActivityLog.create({
      data: {
        taskId: params.id,
        userId: authUser.userId,
        action: 'COMMENTED',
        newState: content.substring(0, 50) + (content.length > 50 ? '...' : ''),
      },
    });

    return NextResponse.json({
      success: true,
      data: comment,
    }, { status: 201 });
  } catch (error) {
    console.error('Add task comment error:', error);
    return errorResponse('Failed to add comment');
  }
}
