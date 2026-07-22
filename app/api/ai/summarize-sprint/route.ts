import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { getAuthUser, unauthorizedResponse } from '@/lib/auth';
import { callGeminiApi, cleanAiResponseText } from '@/lib/gemini';

export async function POST(req: NextRequest) {
  try {
    const authUser = await getAuthUser(req);
    if (!authUser) return unauthorizedResponse();

    const { projectId } = await req.json();
    if (!projectId) {
      return NextResponse.json({ success: false, error: { message: 'ProjectId required' } }, { status: 400 });
    }

    const project = await prisma.project.findUnique({
      where: { id: projectId },
      include: {
        tasks: {
          include: { assignee: true, subTasks: true },
        },
      },
    });

    if (!project) {
      return NextResponse.json({ success: false, error: { message: 'Project not found' } }, { status: 404 });
    }

    const total = project.tasks.length;
    const done = project.tasks.filter((t) => t.status === 'DONE').length;
    const inProgress = project.tasks.filter((t) => t.status === 'IN_PROGRESS').length;
    const todo = project.tasks.filter((t) => t.status === 'TODO').length;
    const urgent = project.tasks.filter((t) => t.priority === 'URGENT' && t.status !== 'DONE').length;

    const completionRate = total > 0 ? Math.round((done / total) * 100) : 0;

    const sprintStatsSummary = `Project Name: "${project.name}"
Description: ${project.description || 'N/A'}
Total Tasks: ${total}
Tasks Completed: ${done}
Tasks In-Progress: ${inProgress}
Backlog Tasks (To Do): ${todo}
Urgent Pending Tasks: ${urgent}
Sprint Completion Rate: ${completionRate}%`;

    const systemPrompt = `You are Streamline AI Executive Sprint Consultant.
Based on the provided real-time sprint stats, write a professional Executive Sprint Summary for project managers.
IMPORTANT: Provide plain text without markdown symbols like *, #, **, or backticks. Use bullet points (•) for lists.`;

    const realGeminiSummary = await callGeminiApi(sprintStatsSummary, systemPrompt);

    const fallbackSummary = `Sprint Executive Summary: ${project.name}
• Sprint Completion Rate: ${completionRate}% (${done}/${total} tasks finished)
• Active In-Flight Work: ${inProgress} tasks currently in progress
• Backlog Remaining: ${todo} tasks pending start
• Attention Required: ${urgent} urgent tasks pending resolution

Strategic AI Recommendations
1. Reallocate capacity to resolve the ${inProgress} active sprint tasks before introducing new backlog items.
2. Ensure team members log sub-task progress to maintain velocity tracking.`;

    const executiveSummary = realGeminiSummary ? cleanAiResponseText(realGeminiSummary) : fallbackSummary;

    return NextResponse.json({
      success: true,
      data: {
        summary: executiveSummary,
        completionRate,
        total,
        done,
        inProgress,
        todo,
        urgent,
        aiProvider: realGeminiSummary ? 'Google Gemini 2.5 Flash (Real-Time)' : 'Streamline Engine',
      },
    });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ success: false, error: { message: 'Server error' } }, { status: 500 });
  }
}
