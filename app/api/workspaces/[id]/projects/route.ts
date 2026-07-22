import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { getAuthUser, unauthorizedResponse, forbiddenResponse, badRequestResponse, errorResponse } from '@/lib/auth';
import { getWorkspaceMember, checkProjectPlanLimit } from '@/lib/rbac';
import { createProjectSchema } from '@/lib/validations';

export async function GET(req: NextRequest, { params }: { params: { id: string } }) {
  try {
    const authUser = await getAuthUser(req);
    if (!authUser) return unauthorizedResponse();

    const member = await getWorkspaceMember(authUser.userId, params.id);
    if (!member) return forbiddenResponse('You are not a member of this workspace');

    const projects = await prisma.project.findMany({
      where: { workspaceId: params.id },
      include: {
        createdBy: { select: { id: true, name: true, avatarUrl: true } },
        members: {
          include: {
            user: { select: { id: true, name: true, email: true, avatarUrl: true } },
          },
        },
        _count: { select: { tasks: true } },
      },
      orderBy: { createdAt: 'desc' },
    });

    return NextResponse.json({
      success: true,
      data: projects.map((p) => ({
        id: p.id,
        name: p.name,
        description: p.description,
        workspaceId: p.workspaceId,
        createdBy: p.createdBy,
        members: p.members.map((m) => m.user),
        taskCount: p._count.tasks,
        createdAt: p.createdAt,
        updatedAt: p.updatedAt,
      })),
    });
  } catch (error) {
    console.error('Get projects error:', error);
    return errorResponse('Failed to fetch projects');
  }
}

export async function POST(req: NextRequest, { params }: { params: { id: string } }) {
  try {
    const authUser = await getAuthUser(req);
    if (!authUser) return unauthorizedResponse();

    const member = await getWorkspaceMember(authUser.userId, params.id);
    if (!member || member.role !== 'ADMIN') {
      return forbiddenResponse('Only workspace Admins can create projects');
    }

    // Check SaaS plan limit!
    const limitCheck = await checkProjectPlanLimit(params.id);
    if (!limitCheck.allowed) {
      return badRequestResponse(
        `Project limit reached for your workspace plan. (Current: ${limitCheck.currentCount}/${limitCheck.maxAllowed} projects). Please upgrade to PRO for more projects!`
      );
    }

    const body = await req.json();
    const validated = createProjectSchema.safeParse(body);

    if (!validated.success) {
      return badRequestResponse('Validation failed', validated.error.flatten().fieldErrors);
    }

    const { name, description } = validated.data;

    const project = await prisma.project.create({
      data: {
        name,
        description,
        workspaceId: params.id,
        createdById: authUser.userId,
        members: {
          create: {
            userId: authUser.userId,
          },
        },
      },
      include: {
        createdBy: { select: { id: true, name: true, avatarUrl: true } },
        members: {
          include: {
            user: { select: { id: true, name: true, email: true, avatarUrl: true } },
          },
        },
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
        members: project.members.map((m) => m.user),
        createdAt: project.createdAt,
      },
    }, { status: 201 });
  } catch (error) {
    console.error('Create project error:', error);
    return errorResponse('Failed to create project');
  }
}
