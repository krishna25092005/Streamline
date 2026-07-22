import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { signupSchema } from '@/lib/validations';
import { hashPassword, generateAccessToken, generateRefreshToken, badRequestResponse, errorResponse } from '@/lib/auth';
import { checkRateLimit } from '@/lib/rate-limit';

export async function POST(req: NextRequest) {
  const rateLimit = checkRateLimit(req, 10);
  if (!rateLimit.success && rateLimit.response) return rateLimit.response;

  try {
    const body = await req.json();
    const validated = signupSchema.safeParse(body);

    if (!validated.success) {
      return badRequestResponse('Validation failed', validated.error.flatten().fieldErrors);
    }

    const { name, email, password } = validated.data;
    const { workspaceId, role: inviteRole } = body;

    const existingUser = await prisma.user.findUnique({
      where: { email: email.toLowerCase() },
    });

    if (existingUser) {
      return badRequestResponse('User with this email already exists');
    }

    const passwordHash = await hashPassword(password);

    // Create user and a default workspace for them
    const user = await prisma.user.create({
      data: {
        name,
        email: email.toLowerCase(),
        passwordHash,
      },
    });

    const slug = `${name.toLowerCase().replace(/[^a-z0-9]/g, '-')}-workspace-${Math.floor(1000 + Math.random() * 9000)}`;

    const workspace = await prisma.workspace.create({
      data: {
        name: `${name}'s Workspace`,
        slug,
        plan: 'FREE',
        ownerId: user.id,
        members: {
          create: {
            userId: user.id,
            role: 'ADMIN',
          },
        },
      },
    });

    let activeWorkspaceId = workspace.id;

    // If user registered via an invitation link to an existing workspace
    if (workspaceId) {
      const targetWs = await prisma.workspace.findUnique({ where: { id: workspaceId } });
      if (targetWs) {
        const existingMem = await prisma.workspaceMember.findUnique({
          where: { workspaceId_userId: { workspaceId, userId: user.id } },
        });

        if (!existingMem) {
          await prisma.workspaceMember.create({
            data: {
              workspaceId,
              userId: user.id,
              role: inviteRole === 'ADMIN' ? 'ADMIN' : 'MEMBER',
            },
          });
        }
        activeWorkspaceId = workspaceId;
      }
    }

    const tokenPayload = { userId: user.id, email: user.email };
    const accessToken = generateAccessToken(tokenPayload);
    const refreshToken = generateRefreshToken(tokenPayload);

    // Save refresh token in DB
    await prisma.refreshToken.create({
      data: {
        token: refreshToken,
        userId: user.id,
        expiresAt: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000),
      },
    });

    const response = NextResponse.json({
      success: true,
      data: {
        user: {
          id: user.id,
          name: user.name,
          email: user.email,
          avatarUrl: user.avatarUrl,
        },
        defaultWorkspaceId: activeWorkspaceId,
        accessToken,
        refreshToken,
      },
    });

    response.cookies.set('accessToken', accessToken, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'lax',
      path: '/',
      maxAge: 15 * 60,
    });

    return response;
  } catch (error) {
    console.error('Signup error:', error);
    return errorResponse('Failed to create account');
  }
}
