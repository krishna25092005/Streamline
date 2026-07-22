import { NextRequest, NextResponse } from 'next/server';
import { getAuthUser, unauthorizedResponse } from '@/lib/auth';
import { createRazorpayOrder } from '@/lib/razorpay';

export async function POST(req: NextRequest) {
  try {
    const authUser = await getAuthUser(req);
    if (!authUser) return unauthorizedResponse();

    const { plan, workspaceId } = await req.json();

    if (!plan || !['PRO', 'ENTERPRISE'].includes(plan)) {
      return NextResponse.json(
        { success: false, error: { message: 'Invalid plan selected (Must be PRO or ENTERPRISE)' } },
        { status: 400 }
      );
    }

    // Pricing tiers in INR: PRO = 29 USD (~2499 INR), ENTERPRISE = 99 USD (~7999 INR)
    // Or simplified INR pricing: PRO = 2499 INR, ENTERPRISE = 7999 INR
    const amountInRupees = plan === 'ENTERPRISE' ? 7999 : 2499;
    const shortWsId = (workspaceId || 'default').slice(-8);
    const receipt = `rcpt_${shortWsId}_${Date.now()}`.slice(0, 40);

    const order = await createRazorpayOrder(amountInRupees, receipt, {
      workspaceId: workspaceId || '',
      plan,
      userId: authUser.userId,
    });

    return NextResponse.json({
      success: true,
      data: {
        orderId: order.id,
        amount: order.amount,
        currency: order.currency,
        keyId: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID || 'rzp_test_TGgxLLNb4O1mL6',
        plan,
      },
    });
  } catch (err: any) {
    console.error('Razorpay Create Order Error:', err);
    return NextResponse.json(
      { success: false, error: { message: err?.message || 'Failed to create payment order' } },
      { status: 500 }
    );
  }
}
