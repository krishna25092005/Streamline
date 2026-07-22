import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { getAuthUser, unauthorizedResponse, forbiddenResponse, badRequestResponse, errorResponse } from '@/lib/auth';
import { getWorkspaceMember } from '@/lib/rbac';
import { updateProjectSchema } from '@/lib/validations';

export async function GET(req: NextRequest, { params }: { params: { id: string } }) {
  try {
    const authUser = await getAuthUser(req);
    if (!authUser) return unauthorizedResponse();

    const project = await prisma.project.findUnique({
      where: { id: params.id },
      include: {
        workspace: { select: { id: true, name: true, ownerId: true } },
        createdBy: { select: { id: true, name: true, avatarUrl: true } },
        members: {
          include: {
            user: { select: { id: true, name: true, email: true, avatarUrl: true } },
          },
        },
      },
    });

    if (!project) return badRequestResponse('Project not found');

    const member = await getWorkspaceMember(authUser.userId, project.workspaceId);
    if (!member) return forbiddenResponse('You do not have access to this project');

    const workspaceMembers = await prisma.workspaceMember.findMany({
      where: { workspaceId: project.workspaceId },
      include: {
        user: { select: { id: true, name: true, email: true, avatarUrl: true } },
      },
    });

    return NextResponse.json({
      success: true,
      data: {
        id: project.id,
        name: project.name,
        description: project.description,
        workspaceId: project.workspaceId,
        createdBy: project.createdBy,
        members: workspaceMembers.map((m) => m.user),
        userWorkspaceRole: member.role,
        createdAt: project.createdAt,
        updatedAt: project.updatedAt,
      },
    });
  } catch (error) {
    console.error('Get project details error:', error);
    return errorResponse('Failed to fetch project');
  }
}

export async function PATCH(req: NextRequest, { params }: { params: { id: string } }) {
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
      return forbiddenResponse('Only workspace Admins can update project details');
    }

    const body = await req.json();
    const validated = updateProjectSchema.safeParse(body);

    if (!validated.success) {
      return badRequestResponse('Validation failed', validated.error.flatten().fieldErrors);
    }

    const updated = await prisma.project.update({
      where: { id: params.id },
      data: validated.data,
    });

    return NextResponse.json({
      success: true,
      data: updated,
    });
  } catch (error) {
    console.error('Update project error:', error);
    return errorResponse('Failed to update project');
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
      return forbiddenResponse('Only workspace Admins can delete projects');
    }

    await prisma.project.delete({
      where: { id: params.id },
    });

    return NextResponse.json({
      success: true,
      message: 'Project deleted successfully',
    });
  } catch (error) {
    console.error('Delete project error:', error);
    return errorResponse('Failed to delete project');
  }
}
