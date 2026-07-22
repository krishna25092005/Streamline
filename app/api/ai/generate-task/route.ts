import { NextRequest, NextResponse } from 'next/server';
import { getAuthUser, unauthorizedResponse } from '@/lib/auth';
import { callGeminiApi, cleanAiResponseText } from '@/lib/gemini';

export async function POST(req: NextRequest) {
  try {
    const authUser = await getAuthUser(req);
    if (!authUser) return unauthorizedResponse();

    const { prompt } = await req.json();
    if (!prompt || typeof prompt !== 'string') {
      return NextResponse.json({ success: false, error: { message: 'Prompt is required' } }, { status: 400 });
    }

    const cleanPrompt = prompt.trim();
    const systemPrompt = `You are Streamline AI Task Breakdown Engine.
The user wants to create a task based on: "${cleanPrompt}".

Respond strictly with a JSON object in the following format (no markdown symbols like *, #, **, or backticks in strings):
{
  "title": "Clear concise task title",
  "description": "Plain text description with Task Objective and Acceptance Criteria bullet points",
  "priority": "LOW" | "MEDIUM" | "HIGH" | "URGENT",
  "subTasks": ["subtask 1", "subtask 2", "subtask 3"]
}`;

    const geminiResult = await callGeminiApi(cleanPrompt, systemPrompt);

    if (geminiResult) {
      try {
        const jsonString = geminiResult.replace(/```json/g, '').replace(/```/g, '').trim();
        const parsed = JSON.parse(jsonString);

        return NextResponse.json({
          success: true,
          data: {
            title: cleanAiResponseText(parsed.title || cleanPrompt),
            description: cleanAiResponseText(parsed.description || `Task Objective\nImplement ${cleanPrompt}`),
            priority: parsed.priority || 'HIGH',
            subTasks: Array.isArray(parsed.subTasks) ? parsed.subTasks.map((s: string) => cleanAiResponseText(s)) : [],
            aiProvider: 'Google Gemini 2.5 Flash (Real-Time)',
          },
        });
      } catch (e) {
        console.warn('Failed to parse Gemini JSON output, using structured fallback:', e);
      }
    }

    // Fallback if API key rate limit or parse error
    const title = cleanPrompt.charAt(0).toUpperCase() + cleanPrompt.slice(1);
    const description = `Task Objective\nExecute implementation for "${title}" ensuring robust performance, code quality, and security compliance.\n\nAcceptance Criteria\n• Code logic reviewed and covered by unit/integration tests.\n• Edge cases handled gracefully without runtime exceptions.\n• Verified theme compatibility in both Light & Dark modes.`;

    const subTasks = [
      `Initial architecture setup for ${title}`,
      `Implement core module logic & API integration`,
      `Unit test validation & theme verification`,
      `Final PR code review & deployment check`,
    ];

    return NextResponse.json({
      success: true,
      data: {
        title,
        description,
        priority: 'MEDIUM',
        subTasks,
        aiProvider: 'Streamline Smart AI Engine',
      },
    });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ success: false, error: { message: 'AI Task Generator Error' } }, { status: 500 });
  }
}
