import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { getAuthUser, unauthorizedResponse, forbiddenResponse, errorResponse } from '@/lib/auth';
import { getWorkspaceMember } from '@/lib/rbac';

export async function GET(req: NextRequest, { params }: { params: { id: string } }) {
  try {
    const authUser = await getAuthUser(req);
    if (!authUser) return unauthorizedResponse();

    const member = await getWorkspaceMember(authUser.userId, params.id);
    if (!member) return forbiddenResponse('You are not a member of this workspace');

    const workspaceId = params.id;
    const now = new Date();

    // Fetch workspace tasks
    const tasks = await prisma.task.findMany({
      where: { workspaceId },
      include: {
        project: { select: { id: true, name: true } },
        assignee: { select: { id: true, name: true, avatarUrl: true, email: true } },
      },
    });

    const totalTasks = tasks.length;
    const todoCount = tasks.filter((t) => t.status === 'TODO').length;
    const inProgressCount = tasks.filter((t) => t.status === 'IN_PROGRESS').length;
    const doneCount = tasks.filter((t) => t.status === 'DONE').length;

    // Overdue tasks: dueDate < now and status != DONE
    const overdueTasks = tasks
      .filter((t) => t.dueDate && new Date(t.dueDate) < now && t.status !== 'DONE')
      .map((t) => ({
        id: t.id,
        title: t.title,
        status: t.status,
        priority: t.priority,
        dueDate: t.dueDate,
        projectName: t.project.name,
        projectId: t.project.id,
        assignee: t.assignee,
      }));

    // Status breakdown chart data
    const statusBreakdown = [
      { name: 'To Do', value: todoCount, color: '#94a3b8' },
      { name: 'In Progress', value: inProgressCount, color: '#0c8ce9' },
      { name: 'Done', value: doneCount, color: '#10b981' },
    ];

    // Priority breakdown chart data
    const priorityBreakdown = [
      { name: 'Low', count: tasks.filter((t) => t.priority === 'LOW').length },
      { name: 'Medium', count: tasks.filter((t) => t.priority === 'MEDIUM').length },
      { name: 'High', count: tasks.filter((t) => t.priority === 'HIGH').length },
      { name: 'Urgent', count: tasks.filter((t) => t.priority === 'URGENT').length },
    ];

    // Workload per user distribution
    const members = await prisma.workspaceMember.findMany({
      where: { workspaceId },
      include: {
        user: { select: { id: true, name: true, avatarUrl: true } },
      },
    });

    const userWorkloadMap = new Map<string, { id: string; name: string; avatarUrl: string | null; todo: number; inProgress: number; done: number; total: number }>();

    members.forEach((m) => {
      userWorkloadMap.set(m.user.id, {
        id: m.user.id,
        name: m.user.name,
        avatarUrl: m.user.avatarUrl,
        todo: 0,
        inProgress: 0,
        done: 0,
        total: 0,
      });
    });

    tasks.forEach((t) => {
      if (t.assigneeId && userWorkloadMap.has(t.assigneeId)) {
        const userStat = userWorkloadMap.get(t.assigneeId)!;
        userStat.total += 1;
        if (t.status === 'TODO') userStat.todo += 1;
        if (t.status === 'IN_PROGRESS') userStat.inProgress += 1;
        if (t.status === 'DONE') userStat.done += 1;
      }
    });

    const workloadDistribution = Array.from(userWorkloadMap.values());

    return NextResponse.json({
      success: true,
      data: {
        totalTasks,
        todoCount,
        inProgressCount,
        doneCount,
        overdueCount: overdueTasks.length,
        statusBreakdown,
        priorityBreakdown,
        workloadDistribution,
        overdueTasks,
      },
    });
  } catch (error) {
    console.error('Analytics error:', error);
    return errorResponse('Failed to fetch workspace analytics');
  }
}
