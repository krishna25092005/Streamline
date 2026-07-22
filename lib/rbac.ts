import { prisma } from './prisma';

export interface WorkspaceMemberInfo {
  id: string;
  workspaceId: string;
  userId: string;
  role: 'ADMIN' | 'MEMBER';
}

/**
 * Ensures strict multi-tenant isolation:
 * Checks if user belongs to the requested workspace and returns their member role.
 */
export async function getWorkspaceMember(
  userId: string,
  workspaceId: string
): Promise<WorkspaceMemberInfo | null> {
  const member = await prisma.workspaceMember.findUnique({
    where: {
      workspaceId_userId: {
        workspaceId,
        userId,
      },
    },
  });

  if (!member) return null;

  return {
    id: member.id,
    workspaceId: member.workspaceId,
    userId: member.userId,
    role: member.role as 'ADMIN' | 'MEMBER',
  };
}

/**
 * Checks if user is an Admin in the specified workspace
 */
export async function isWorkspaceAdmin(userId: string, workspaceId: string): Promise<boolean> {
  const member = await getWorkspaceMember(userId, workspaceId);
  return member?.role === 'ADMIN';
}

/**
 * Verifies if user is a member of the project
 */
export async function isProjectMember(userId: string, projectId: string): Promise<boolean> {
  const pm = await prisma.projectMember.findUnique({
    where: {
      projectId_userId: {
        projectId,
        userId,
      },
    },
  });
  return !!pm;
}

/**
 * Enforces SaaS subscription plan limits
 * Example: FREE plan allows max 3 projects
 */
export async function checkProjectPlanLimit(workspaceId: string): Promise<{ allowed: boolean; currentCount: number; maxAllowed: number }> {
  const workspace = await prisma.workspace.findUnique({
    where: { id: workspaceId },
    select: { plan: true, _count: { select: { projects: true } } },
  });

  if (!workspace) return { allowed: false, currentCount: 0, maxAllowed: 0 };

  const currentCount = workspace._count.projects;
  let maxAllowed = 3; // FREE plan limit

  if (workspace.plan === 'PRO') maxAllowed = 15;
  if (workspace.plan === 'ENTERPRISE') maxAllowed = 99999;

  return {
    allowed: currentCount < maxAllowed,
    currentCount,
    maxAllowed,
  };
}
