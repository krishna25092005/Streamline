import Razorpay from 'razorpay';
import crypto from 'crypto';

export function getRazorpayInstance() {
  const key_id = process.env.RAZORPAY_KEY_ID || 'rzp_test_TGgxLLNb4O1mL6';
  const key_secret = process.env.RAZORPAY_KEY_SECRET || '5Q0NJzdEpHyr9Iu0rwve1PRv';

  return new Razorpay({
    key_id,
    key_secret,
  });
}

/**
 * Creates a Razorpay Order
 * @param amountInRupees Amount in INR (e.g. 29 for PRO, 99 for ENTERPRISE)
 * @param receipt Unique receipt ID
 * @param notes Custom metadata key-value pairs
 */
export async function createRazorpayOrder(
  amountInRupees: number,
  receipt: string,
  notes: Record<string, string> = {}
) {
  const instance = getRazorpayInstance();
  const amountInPaisa = Math.round(amountInRupees * 100);

  const options = {
    amount: amountInPaisa,
    currency: 'INR',
    receipt,
    notes,
  };

  const order = await instance.orders.create(options);
  return order;
}

/**
 * Verifies Razorpay Payment Signature
 * HMAC SHA256 (order_id + "|" + payment_id, secret) == signature
 */
export function verifyRazorpaySignature(
  orderId: string,
  paymentId: string,
  signature: string
): boolean {
  const secret = process.env.RAZORPAY_KEY_SECRET || '5Q0NJzdEpHyr9Iu0rwve1PRv';
  const generatedSignature = crypto
    .createHmac('sha256', secret)
    .update(`${orderId}|${paymentId}`)
    .digest('hex');

  return generatedSignature === signature;
}
