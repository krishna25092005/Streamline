import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { getAuthUser, unauthorizedResponse, badRequestResponse, errorResponse } from '@/lib/auth';
import { createWorkspaceSchema } from '@/lib/validations';

export async function GET(req: NextRequest) {
  try {
    const authUser = await getAuthUser(req);
    if (!authUser) return unauthorizedResponse();

    const memberships = await prisma.workspaceMember.findMany({
      where: { userId: authUser.userId },
      include: {
        workspace: {
          include: {
            _count: {
              select: {
                members: true,
                projects: true,
                tasks: true,
              },
            },
          },
        },
      },
      orderBy: { joinedAt: 'desc' },
    });

    const workspaces = memberships.map((m) => ({
      id: m.workspace.id,
      name: m.workspace.name,
      slug: m.workspace.slug,
      plan: m.workspace.plan,
      ownerId: m.workspace.ownerId,
      role: m.role,
      memberCount: m.workspace._count.members,
      projectCount: m.workspace._count.projects,
      taskCount: m.workspace._count.tasks,
      createdAt: m.workspace.createdAt,
    }));

    return NextResponse.json({
      success: true,
      data: workspaces,
    });
  } catch (error) {
    console.error('Get workspaces error:', error);
    return errorResponse('Failed to fetch workspaces');
  }
}

export async function POST(req: NextRequest) {
  try {
    const authUser = await getAuthUser(req);
    if (!authUser) return unauthorizedResponse();

    const body = await req.json();
    const validated = createWorkspaceSchema.safeParse(body);

    if (!validated.success) {
      return badRequestResponse('Validation failed', validated.error.flatten().fieldErrors);
    }

    const { name, slug } = validated.data;

    const existingSlug = await prisma.workspace.findUnique({
      where: { slug: slug.toLowerCase() },
    });

    if (existingSlug) {
      return badRequestResponse('Workspace URL slug is already taken');
    }

    const workspace = await prisma.workspace.create({
      data: {
        name,
        slug: slug.toLowerCase(),
        plan: 'FREE',
        ownerId: authUser.userId,
        members: {
          create: {
            userId: authUser.userId,
            role: 'ADMIN',
          },
        },
      },
    });

    return NextResponse.json({
      success: true,
      data: workspace,
    }, { status: 201 });
  } catch (error) {
    console.error('Create workspace error:', error);
    return errorResponse('Failed to create workspace');
  }
}
