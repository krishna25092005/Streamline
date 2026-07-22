import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { getAuthUser, unauthorizedResponse } from '@/lib/auth';
import { callGeminiApi, cleanAiResponseText } from '@/lib/gemini';

export async function POST(req: NextRequest) {
  try {
    const authUser = await getAuthUser(req);
    if (!authUser) return unauthorizedResponse();

    const body = await req.json();
    const { projectId, workspaceId } = body;

    if (!projectId && !workspaceId) {
      return NextResponse.json({ success: false, error: { message: 'ProjectId or WorkspaceId required' } }, { status: 400 });
    }

    const tasks = await prisma.task.findMany({
      where: projectId ? { projectId } : { workspaceId },
      include: { subTasks: true, assignee: true },
    });

    const taskDataPrompt = tasks.map((t) => ({
      title: t.title,
      status: t.status,
      priority: t.priority,
      dueDate: t.dueDate ? t.dueDate.toISOString() : 'None',
      subTaskProgress: `${t.subTasks.filter((s) => s.completed).length}/${t.subTasks.length}`,
    }));

    const systemPrompt = `You are Streamline AI SLA & Risk Analyst.
Analyze the following project task list and generate a brief SLA risk diagnostic summary with bullet points highlighting potential bottlenecks.
IMPORTANT: Provide plain text without markdown symbols like *, #, **, or backticks. Use bullet points (•) for lists.`;

    const realGeminiRisk = await callGeminiApi(JSON.stringify(taskDataPrompt), systemPrompt);

    const now = new Date();
    const insights = tasks.map((t) => {
      let riskLevel: 'LOW' | 'MEDIUM' | 'HIGH' | 'CRITICAL' = 'LOW';
      let reason = 'Task on schedule.';

      if (t.status !== 'DONE') {
        if (t.dueDate && new Date(t.dueDate) < now) {
          riskLevel = 'CRITICAL';
          reason = 'Past due date! High SLA breach risk.';
        } else if (t.priority === 'URGENT') {
          riskLevel = 'HIGH';
          reason = 'Urgent priority pending resolution.';
        } else if (t.subTasks.length > 0) {
          const completedSub = t.subTasks.filter((s) => s.completed).length;
          const ratio = completedSub / t.subTasks.length;
          if (ratio < 0.3) {
            riskLevel = 'MEDIUM';
            reason = `Low sub-task progress (${completedSub}/${t.subTasks.length}).`;
          }
        }
      }

      return {
        taskId: t.id,
        title: t.title,
        status: t.status,
        riskLevel,
        reason,
      };
    });

    const fallbackRiskText = `SLA Risk Audit Overview
• Total Analyzed Tasks: ${tasks.length}
• High & Critical Risks Detected: ${insights.filter((i) => i.riskLevel === 'CRITICAL' || i.riskLevel === 'HIGH').length}
• Recommendation: Prioritize urgent tasks with pending deadlines before starting new backlog items.`;

    return NextResponse.json({
      success: true,
      data: {
        totalAnalyzed: tasks.length,
        criticalRisks: insights.filter((i) => i.riskLevel === 'CRITICAL').length,
        highRisks: insights.filter((i) => i.riskLevel === 'HIGH').length,
        insights,
        geminiRiskAnalysis: realGeminiRisk ? cleanAiResponseText(realGeminiRisk) : fallbackRiskText,
        aiProvider: realGeminiRisk ? 'Google Gemini 2.5 Flash (Real-Time)' : 'Streamline Engine',
      },
    });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ success: false, error: { message: 'Server error' } }, { status: 500 });
  }
}
