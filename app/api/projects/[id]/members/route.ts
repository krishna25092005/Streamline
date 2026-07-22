import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { getAuthUser, unauthorizedResponse, forbiddenResponse, badRequestResponse, errorResponse } from '@/lib/auth';
import { getWorkspaceMember } from '@/lib/rbac';

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
    if (!member || member.role !== 'ADMIN') {
      return forbiddenResponse('Only workspace Admins can add members to projects');
    }

    const body = await req.json();
    const { userId } = body;

    if (!userId) return badRequestResponse('userId is required');

    // Verify user is in workspace
    const targetWorkspaceMember = await getWorkspaceMember(userId, project.workspaceId);
    if (!targetWorkspaceMember) {
      return badRequestResponse('User must be a member of the workspace first');
    }

    const existingProjectMember = await prisma.projectMember.findUnique({
      where: {
        projectId_userId: {
          projectId: params.id,
          userId,
        },
      },
    });

    if (existingProjectMember) {
      return badRequestResponse('User is already assigned to this project');
    }

    const newPm = await prisma.projectMember.create({
      data: {
        projectId: params.id,
        userId,
      },
      include: {
        user: { select: { id: true, name: true, email: true, avatarUrl: true } },
      },
    });

    return NextResponse.json({
      success: true,
      data: newPm.user,
    }, { status: 201 });
  } catch (error) {
    console.error('Add project member error:', error);
    return errorResponse('Failed to add project member');
  }
}

export async function DELETE(req: NextRequest, { params }: { params: { id: string } }) {
  try {
    const authUser = await getAuthUser(req);
    if (!authUser) return unauthorizedResponse();

    const project = await prisma.project.findUnique({
      where: { id: params.id },
      select: { workspaceId: true },
    });

    if (!project) return badRequestResponse('Project not found');

    const member = await getWorkspaceMember(authUser.userId, project.workspaceId);
    if (!member || member.role !== 'ADMIN') {
      return forbiddenResponse('Only workspace Admins can remove project members');
    }

    const { searchParams } = new URL(req.url);
    const userId = searchParams.get('userId');

    if (!userId) return badRequestResponse('userId parameter is required');

    await prisma.projectMember.delete({
      where: {
        projectId_userId: {
          projectId: params.id,
          userId,
        },
      },
    });

    return NextResponse.json({
      success: true,
      message: 'Project member removed',
    });
  } catch (error) {
    console.error('Remove project member error:', error);
    return errorResponse('Failed to remove project member');
  }
}
