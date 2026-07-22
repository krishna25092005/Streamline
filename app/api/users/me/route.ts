import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { getAuthUser, unauthorizedResponse, badRequestResponse, comparePassword, hashPassword, errorResponse } from '@/lib/auth';
import { updateProfileSchema } from '@/lib/validations';

export async function GET(req: NextRequest) {
  try {
    const authUser = await getAuthUser(req);
    if (!authUser) return unauthorizedResponse();

    const user = await prisma.user.findUnique({
      where: { id: authUser.userId },
      select: {
        id: true,
        name: true,
        email: true,
        avatarUrl: true,
        createdAt: true,
        workspaceMemberships: {
          include: {
            workspace: {
              select: { id: true, name: true, slug: true, plan: true },
            },
          },
        },
      },
    });

    if (!user) return badRequestResponse('User not found');

    return NextResponse.json({
      success: true,
      data: {
        id: user.id,
        name: user.name,
        email: user.email,
        avatarUrl: user.avatarUrl,
        createdAt: user.createdAt,
        workspaces: user.workspaceMemberships.map((m) => ({
          id: m.workspace.id,
          name: m.workspace.name,
          slug: m.workspace.slug,
          plan: m.workspace.plan,
          role: m.role,
        })),
      },
    });
  } catch (error) {
    console.error('Get profile error:', error);
    return errorResponse('Failed to fetch profile');
  }
}

export async function PATCH(req: NextRequest) {
  try {
    const authUser = await getAuthUser(req);
    if (!authUser) return unauthorizedResponse();

    const body = await req.json();
    const validated = updateProfileSchema.safeParse(body);

    if (!validated.success) {
      return badRequestResponse('Validation failed', validated.error.flatten().fieldErrors);
    }

    const { name, avatarUrl, currentPassword, newPassword } = validated.data;
    const updateData: Record<string, unknown> = {};

    if (name) updateData.name = name;
    if (avatarUrl !== undefined) updateData.avatarUrl = avatarUrl;

    if (newPassword) {
      if (!currentPassword) {
        return badRequestResponse('Current password is required to change password');
      }

      const currentUser = await prisma.user.findUnique({
        where: { id: authUser.userId },
        select: { passwordHash: true },
      });

      if (!currentUser) return badRequestResponse('User not found');

      const isValid = await comparePassword(currentPassword, currentUser.passwordHash);
      if (!isValid) {
        return badRequestResponse('Current password is incorrect');
      }

      updateData.passwordHash = await hashPassword(newPassword);
    }

    const updatedUser = await prisma.user.update({
      where: { id: authUser.userId },
      data: updateData,
      select: {
        id: true,
        name: true,
        email: true,
        avatarUrl: true,
        createdAt: true,
      },
    });

    return NextResponse.json({
      success: true,
      data: updatedUser,
    });
  } catch (error) {
    console.error('Update profile error:', error);
    return errorResponse('Failed to update profile');
  }
}
