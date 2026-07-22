import { NextRequest, NextResponse } from 'next/server';
import { getAuthUser, unauthorizedResponse } from '@/lib/auth';
import { callGeminiApi, cleanAiResponseText } from '@/lib/gemini';

export async function POST(req: NextRequest) {
  try {
    const authUser = await getAuthUser(req);
    if (!authUser) return unauthorizedResponse();

    const { messages, userQuery } = await req.json();

    const queryText = userQuery || (Array.isArray(messages) && messages.length > 0 ? messages[messages.length - 1].content : '');

    if (!queryText || typeof queryText !== 'string') {
      return NextResponse.json({ success: false, error: { message: 'Message content is required' } }, { status: 400 });
    }

    const systemPrompt = `You are Streamline AI, an expert SaaS project management consultant and task automation assistant.
You help software teams, project managers, and developers optimize their workflows, resolve sprint bottlenecks, breakdown user stories, write clear acceptance criteria, and answer questions about project execution.
CRITICAL FORMATTING RULE: Respond in clear, readable plain text WITHOUT using markdown symbols like *, #, **, or backticks. Use standard bullet points (•) for lists and plain text section headers.`;

    const conversationHistory = Array.isArray(messages)
      ? messages.map((m: any) => `${m.role === 'user' ? 'User' : 'Streamline AI'}: ${m.content}`).join('\n')
      : queryText;

    const geminiReply = await callGeminiApi(conversationHistory, systemPrompt);

    const fallbackReply = `I am Streamline AI Assistant. I can help you break down complex tasks, summarize sprint progress, predict SLA risk bottlenecks, and optimize team velocity. How can I assist your workflow today?`;

    const reply = geminiReply ? cleanAiResponseText(geminiReply) : fallbackReply;

    return NextResponse.json({
      success: true,
      data: {
        reply,
        aiProvider: geminiReply ? 'Google Gemini 2.5 Flash (Real-Time)' : 'Streamline AI Assistant',
      },
    });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ success: false, error: { message: 'AI Chatbot Error' } }, { status: 500 });
  }
}
