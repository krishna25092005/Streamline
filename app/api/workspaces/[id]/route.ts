import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { getAuthUser, unauthorizedResponse, forbiddenResponse, badRequestResponse, errorResponse } from '@/lib/auth';
import { getWorkspaceMember } from '@/lib/rbac';
import { updateWorkspaceSchema } from '@/lib/validations';

export async function GET(req: NextRequest, { params }: { params: { id: string } }) {
  try {
    const authUser = await getAuthUser(req);
    if (!authUser) return unauthorizedResponse();

    const member = await getWorkspaceMember(authUser.userId, params.id);
    if (!member) return forbiddenResponse('You are not a member of this workspace');

    const workspace = await prisma.workspace.findUnique({
      where: { id: params.id },
      include: {
        owner: { select: { id: true, name: true, email: true, avatarUrl: true } },
        members: {
          include: {
            user: { select: { id: true, name: true, email: true, avatarUrl: true } },
          },
        },
        projects: {
          include: {
            _count: { select: { tasks: true, members: true } },
          },
        },
      },
    });

    if (!workspace) return badRequestResponse('Workspace not found');

    return NextResponse.json({
      success: true,
      data: {
        ...workspace,
        userRole: member.role,
      },
    });
  } catch (error) {
    console.error('Get workspace error:', error);
    return errorResponse('Failed to fetch workspace details');
  }
}

export async function PATCH(req: NextRequest, { params }: { params: { id: string } }) {
  try {
    const authUser = await getAuthUser(req);
    if (!authUser) return unauthorizedResponse();

    const member = await getWorkspaceMember(authUser.userId, params.id);
    if (!member || member.role !== 'ADMIN') {
      return forbiddenResponse('Only workspace Admins can modify workspace settings');
    }

    const body = await req.json();
    const validated = updateWorkspaceSchema.safeParse(body);

    if (!validated.success) {
      return badRequestResponse('Validation failed', validated.error.flatten().fieldErrors);
    }

    const updatedWorkspace = await prisma.workspace.update({
      where: { id: params.id },
      data: validated.data,
    });

    return NextResponse.json({
      success: true,
      data: updatedWorkspace,
    });
  } catch (error) {
    console.error('Update workspace error:', error);
    return errorResponse('Failed to update workspace');
  }
}

export async function DELETE(req: NextRequest, { params }: { params: { id: string } }) {
  try {
    const authUser = await getAuthUser(req);
    if (!authUser) return unauthorizedResponse();

    const workspace = await prisma.workspace.findUnique({
      where: { id: params.id },
      select: { ownerId: true },
    });

    if (!workspace) return badRequestResponse('Workspace not found');

    if (workspace.ownerId !== authUser.userId) {
      return forbiddenResponse('Only the workspace owner can delete the workspace');
    }

    await prisma.workspace.delete({
      where: { id: params.id },
    });

    return NextResponse.json({
      success: true,
      message: 'Workspace deleted successfully',
    });
  } catch (error) {
    console.error('Delete workspace error:', error);
    return errorResponse('Failed to delete workspace');
  }
}
