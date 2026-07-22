import { NextRequest, NextResponse } from 'next/server';

interface RateLimitRecord {
  count: number;
  resetTime: number;
}

const tracker = new Map<string, RateLimitRecord>();

/**
 * Basic in-memory rate limiter for auth endpoints
 * @param req NextRequest
 * @param limit max requests allowed in window
 * @param windowMs window size in milliseconds
 */
export function checkRateLimit(
  req: NextRequest,
  limit = 10,
  windowMs = 60 * 1000
): { success: boolean; response?: NextResponse } {
  const ip = req.headers.get('x-forwarded-for') || '127.0.0.1';
  const path = req.nextUrl.pathname;
  const key = `${ip}:${path}`;

  const now = Date.now();
  const record = tracker.get(key);

  if (!record || now > record.resetTime) {
    tracker.set(key, { count: 1, resetTime: now + windowMs });
    return { success: true };
  }

  if (record.count >= limit) {
    return {
      success: false,
      response: NextResponse.json(
        {
          success: false,
          error: {
            message: 'Too many requests. Please try again later.',
            code: 'RATE_LIMIT_EXCEEDED',
          },
        },
        { status: 429 }
      ),
    };
  }

  record.count += 1;
  return { success: true };
}
