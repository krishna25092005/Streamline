import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';
import { NextRequest, NextResponse } from 'next/server';
import { prisma } from './prisma';

const JWT_SECRET = process.env.JWT_SECRET || 'streamline_jwt_secret_fallback_key';
const JWT_REFRESH_SECRET = process.env.JWT_REFRESH_SECRET || 'streamline_jwt_refresh_secret_fallback_key';

export interface TokenPayload {
  userId: string;
  email: string;
}

export async function hashPassword(password: string): Promise<string> {
  return bcrypt.hash(password, 10);
}

export async function comparePassword(password: string, hash: string): Promise<boolean> {
  return bcrypt.compare(password, hash);
}

export function generateAccessToken(payload: TokenPayload): string {
  return jwt.sign(payload, JWT_SECRET, { expiresIn: '15m' });
}

export function generateRefreshToken(payload: TokenPayload): string {
  return jwt.sign(payload, JWT_REFRESH_SECRET, { expiresIn: '7d' });
}

export function verifyAccessToken(token: string): TokenPayload | null {
  try {
    return jwt.verify(token, JWT_SECRET) as TokenPayload;
  } catch {
    return null;
  }
}

export function verifyRefreshToken(token: string): TokenPayload | null {
  try {
    return jwt.verify(token, JWT_REFRESH_SECRET) as TokenPayload;
  } catch {
    return null;
  }
}

export async function getAuthUser(req: NextRequest): Promise<TokenPayload | null> {
  // Check Authorization header
  const authHeader = req.headers.get('authorization');
  let token: string | undefined;

  if (authHeader && authHeader.startsWith('Bearer ')) {
    token = authHeader.substring(7);
  } else {
    // Check cookies fallback
    token = req.cookies.get('accessToken')?.value;
  }

  if (!token) return null;

  return verifyAccessToken(token);
}

export function unauthorizedResponse(message = 'Unauthorized access'): NextResponse {
  return NextResponse.json(
    { success: false, error: { message, code: 'UNAUTHORIZED' } },
    { status: 401 }
  );
}

export function forbiddenResponse(message = 'Forbidden action'): NextResponse {
  return NextResponse.json(
    { success: false, error: { message, code: 'FORBIDDEN' } },
    { status: 403 }
  );
}

export function badRequestResponse(message: string, details?: unknown): NextResponse {
  return NextResponse.json(
    { success: false, error: { message, details, code: 'BAD_REQUEST' } },
    { status: 400 }
  );
}

export function errorResponse(message = 'Internal server error', status = 500): NextResponse {
  return NextResponse.json(
    { success: false, error: { message, code: 'INTERNAL_ERROR' } },
    { status }
  );
}
