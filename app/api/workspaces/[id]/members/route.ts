import { NextRequest, NextResponse } from 'next/server';
import bcrypt from 'bcryptjs';
import { prisma } from '@/lib/prisma';
import { getAuthUser, unauthorizedResponse, forbiddenResponse, badRequestResponse, errorResponse } from '@/lib/auth';
import { getWorkspaceMember } from '@/lib/rbac';
import { addWorkspaceMemberSchema, updateWorkspaceMemberRoleSchema } from '@/lib/validations';

export async function GET(req: NextRequest, { params }: { params: { id: string } }) {
  try {
    const authUser = await getAuthUser(req);
    if (!authUser) return unauthorizedResponse();

    const member = await getWorkspaceMember(authUser.userId, params.id);
    if (!member) return forbiddenResponse('You are not a member of this workspace');

    const members = await prisma.workspaceMember.findMany({
      where: { workspaceId: params.id },
      include: {
        user: {
          select: {
            id: true,
            name: true,
            email: true,
            avatarUrl: true,
          },
        },
      },
      orderBy: { joinedAt: 'asc' },
    });

    return NextResponse.json({
      success: true,
      data: members.map((m) => ({
        id: m.id,
        userId: m.user.id,
        name: m.user.name,
        email: m.user.email,
        avatarUrl: m.user.avatarUrl,
        role: m.role,
        joinedAt: m.joinedAt,
      })),
    });
  } catch (error) {
    console.error('Get members error:', error);
    return errorResponse('Failed to fetch workspace members');
  }
}

export async function POST(req: NextRequest, { params }: { params: { id: string } }) {
  try {
    const authUser = await getAuthUser(req);
    if (!authUser) return unauthorizedResponse();

    const currentMember = await getWorkspaceMember(authUser.userId, params.id);
    if (!currentMember || currentMember.role !== 'ADMIN') {
      return forbiddenResponse('Only workspace Admins can invite new members');
    }

    const body = await req.json();
    const validated = addWorkspaceMemberSchema.safeParse(body);

    if (!validated.success) {
      return badRequestResponse('Validation failed', validated.error.flatten().fieldErrors);
    }

    const { email, role } = validated.data;

    let targetUser = await prisma.user.findUnique({
      where: { email: email.toLowerCase() },
    });

    if (!targetUser) {
      const nameFromEmail = email.split('@')[0].replace(/[\._]/g, ' ');
      const formattedName = nameFromEmail.charAt(0).toUpperCase() + nameFromEmail.slice(1);
      const hashedPassword = await bcrypt.hash('Streamline123!', 10);

      targetUser = await prisma.user.create({
        data: {
          name: formattedName,
          email: email.toLowerCase(),
          passwordHash: hashedPassword,
        },
      });
    }

    const existingMembership = await prisma.workspaceMember.findUnique({
      where: {
        workspaceId_userId: {
          workspaceId: params.id,
          userId: targetUser.id,
        },
      },
    });

    if (existingMembership) {
      return badRequestResponse('User is already a member of this workspace');
    }

    const newMember = await prisma.workspaceMember.create({
      data: {
        workspaceId: params.id,
        userId: targetUser.id,
        role,
      },
      include: {
        user: { select: { id: true, name: true, email: true, avatarUrl: true } },
      },
    });

    const origin = req.nextUrl.origin || 'http://localhost:3000';
    const inviteLink = `${origin}/signup?email=${encodeURIComponent(email.toLowerCase())}&workspaceId=${params.id}&role=${role}`;

    return NextResponse.json({
      success: true,
      data: {
        id: newMember.id,
        userId: newMember.user.id,
        name: newMember.user.name,
        email: newMember.user.email,
        avatarUrl: newMember.user.avatarUrl,
        role: newMember.role,
        joinedAt: newMember.joinedAt,
        inviteLink,
      },
    }, { status: 201 });
  } catch (error) {
    console.error('Add member error:', error);
    return errorResponse('Failed to add workspace member');
  }
}

export async function PATCH(req: NextRequest, { params }: { params: { id: string } }) {
  try {
    const authUser = await getAuthUser(req);
    if (!authUser) return unauthorizedResponse();

    const currentMember = await getWorkspaceMember(authUser.userId, params.id);
    if (!currentMember || currentMember.role !== 'ADMIN') {
      return forbiddenResponse('Only workspace Admins can update member roles');
    }

    const body = await req.json();
    const { targetUserId, role } = body;

    const validatedRole = updateWorkspaceMemberRoleSchema.safeParse({ role });
    if (!validatedRole.success) {
      return badRequestResponse('Invalid role specified');
    }

    const updated = await prisma.workspaceMember.update({
      where: {
        workspaceId_userId: {
          workspaceId: params.id,
          userId: targetUserId,
        },
      },
      data: { role: validatedRole.data.role },
    });

    return NextResponse.json({
      success: true,
      data: updated,
    });
  } catch (error) {
    console.error('Update role error:', error);
    return errorResponse('Failed to update member role');
  }
}

export async function DELETE(req: NextRequest, { params }: { params: { id: string } }) {
  try {
    const authUser = await getAuthUser(req);
    if (!authUser) return unauthorizedResponse();

    const currentMember = await getWorkspaceMember(authUser.userId, params.id);
    if (!currentMember || currentMember.role !== 'ADMIN') {
      return forbiddenResponse('Only workspace Admins can remove members');
    }

    const { searchParams } = new URL(req.url);
    const targetUserId = searchParams.get('userId');

    if (!targetUserId) {
      return badRequestResponse('userId parameter is required');
    }

    const workspace = await prisma.workspace.findUnique({
      where: { id: params.id },
      select: { ownerId: true },
    });

    if (workspace?.ownerId === targetUserId) {
      return badRequestResponse('Cannot remove the workspace owner');
    }

    await prisma.workspaceMember.delete({
      where: {
        workspaceId_userId: {
          workspaceId: params.id,
          userId: targetUserId,
        },
      },
    });

    return NextResponse.json({
      success: true,
      message: 'Member removed from workspace successfully',
    });
  } catch (error) {
    console.error('Remove member error:', error);
    return errorResponse('Failed to remove member');
  }
}
