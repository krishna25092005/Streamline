import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { forgotPasswordSchema } from '@/lib/validations';
import { badRequestResponse, errorResponse } from '@/lib/auth';
import { checkRateLimit } from '@/lib/rate-limit';
import crypto from 'crypto';

export async function POST(req: NextRequest) {
  const rateLimit = checkRateLimit(req, 5);
  if (!rateLimit.success && rateLimit.response) return rateLimit.response;

  try {
    const body = await req.json();
    const validated = forgotPasswordSchema.safeParse(body);

    if (!validated.success) {
      return badRequestResponse('Validation failed', validated.error.flatten().fieldErrors);
    }

    const { email } = validated.data;
    const user = await prisma.user.findUnique({ where: { email: email.toLowerCase() } });

    if (user) {
      const token = crypto.randomBytes(32).toString('hex');
      const expiresAt = new Date(Date.now() + 60 * 60 * 1000); // 1 hour

      await prisma.passwordResetToken.create({
        data: {
          token,
          userId: user.id,
          expiresAt,
        },
      });

      console.log(`📧 [MOCK EMAIL SERVICE] Password reset token for ${email}: ${token}`);
    }

    return NextResponse.json({
      success: true,
      message: 'If an account with that email exists, a password reset link has been dispatched.',
      // Returning mock token in development so full flow can be tested in postman/UI without SMTP
      mockResetToken: user ? 'demo-reset-token-sample' : undefined,
    });
  } catch (error) {
    console.error('Forgot password error:', error);
    return errorResponse('Failed to request password reset');
  }
}
