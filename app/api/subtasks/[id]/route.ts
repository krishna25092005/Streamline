import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { getAuthUser, unauthorizedResponse } from '@/lib/auth';

export async function PATCH(req: NextRequest, { params }: { params: { id: string } }) {
  try {
    const authUser = await getAuthUser(req);
    if (!authUser) return unauthorizedResponse();

    const body = await req.json();
    const { completed, title } = body;

    const dataToUpdate: any = {};
    if (typeof completed === 'boolean') dataToUpdate.completed = completed;
    if (typeof title === 'string' && title.trim()) dataToUpdate.title = title.trim();

    const updated = await prisma.subTask.update({
      where: { id: params.id },
      data: dataToUpdate,
    });

    return NextResponse.json({ success: true, data: updated });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ success: false, error: { message: 'Server error' } }, { status: 500 });
  }
}

export async function DELETE(req: NextRequest, { params }: { params: { id: string } }) {
  try {
    const authUser = await getAuthUser(req);
    if (!authUser) return unauthorizedResponse();

    await prisma.subTask.delete({
      where: { id: params.id },
    });

    return NextResponse.json({ success: true, data: { message: 'Subtask deleted' } });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ success: false, error: { message: 'Server error' } }, { status: 500 });
  }
}
