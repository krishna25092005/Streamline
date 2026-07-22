import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { getAuthUser, errorResponse } from '@/lib/auth';

export async function POST(req: NextRequest) {
  try {
    const user = await getAuthUser(req);
    if (user) {
      // Revoke user's refresh tokens
      await prisma.refreshToken.updateMany({
        where: { userId: user.userId },
        data: { revoked: true },
      });
    }

    const response = NextResponse.json({
      success: true,
      message: 'Logged out successfully',
    });

    response.cookies.delete('accessToken');
    return response;
  } catch (error) {
    console.error('Logout error:', error);
    return errorResponse('Failed to logout');
  }
}
