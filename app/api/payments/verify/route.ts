import { NextRequest, NextResponse } from 'next/server';
import { getAuthUser, unauthorizedResponse } from '@/lib/auth';
import { verifyRazorpaySignature } from '@/lib/razorpay';
import { prisma } from '@/lib/prisma';

export async function POST(req: NextRequest) {
  try {
    const authUser = await getAuthUser(req);
    if (!authUser) return unauthorizedResponse();

    const {
      razorpay_order_id,
      razorpay_payment_id,
      razorpay_signature,
      workspaceId,
      plan,
    } = await req.json();

    if (!razorpay_order_id || !razorpay_payment_id || !razorpay_signature) {
      return NextResponse.json(
        { success: false, error: { message: 'Missing payment verification credentials' } },
        { status: 400 }
      );
    }

    const isValid = verifyRazorpaySignature(
      razorpay_order_id,
      razorpay_payment_id,
      razorpay_signature
    );

    if (!isValid) {
      return NextResponse.json(
        { success: false, error: { message: 'Payment signature verification failed!' } },
        { status: 400 }
      );
    }

    // Upgrade Workspace Subscription Plan in Database
    if (workspaceId && plan) {
      await prisma.workspace.update({
        where: { id: workspaceId },
        data: { plan },
      });
    }

    return NextResponse.json({
      success: true,
      data: {
        message: `Payment verified successfully! Workspace upgraded to ${plan || 'PRO'} plan.`,
        paymentId: razorpay_payment_id,
        orderId: razorpay_order_id,
      },
    });
  } catch (err: any) {
    console.error('Razorpay Payment Verification Error:', err);
    return NextResponse.json(
      { success: false, error: { message: err?.message || 'Payment verification failed' } },
      { status: 500 }
    );
  }
}
