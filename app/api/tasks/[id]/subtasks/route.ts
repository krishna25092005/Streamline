import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { getAuthUser, unauthorizedResponse } from '@/lib/auth';

export async function GET(req: NextRequest, { params }: { params: { id: string } }) {
  try {
    const authUser = await getAuthUser(req);
    if (!authUser) return unauthorizedResponse();

    const subTasks = await prisma.subTask.findMany({
      where: { taskId: params.id },
      orderBy: { createdAt: 'asc' },
    });

    return NextResponse.json({ success: true, data: subTasks });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ success: false, error: { message: 'Server error' } }, { status: 500 });
  }
}

export async function POST(req: NextRequest, { params }: { params: { id: string } }) {
  try {
    const authUser = await getAuthUser(req);
    if (!authUser) return unauthorizedResponse();

    const { title } = await req.json();
    if (!title || typeof title !== 'string') {
      return NextResponse.json({ success: false, error: { message: 'Title is required' } }, { status: 400 });
    }

    const subTask = await prisma.subTask.create({
      data: {
        taskId: params.id,
        title: title.trim(),
        completed: false,
      },
    });

    return NextResponse.json({ success: true, data: subTask }, { status: 201 });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ success: false, error: { message: 'Server error' } }, { status: 500 });
  }
}
