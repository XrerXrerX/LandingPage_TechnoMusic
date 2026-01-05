/** @format */

import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

// Simple rate limiting store (untuk production gunakan Redis atau database)
const rateLimit = new Map<string, { count: number; resetTime: number }>();

export function middleware(request: NextRequest) {
  const response = NextResponse.next();

  // Basic rate limiting (100 requests per 15 menit per IP)
  const ip = request.ip || request.headers.get('x-forwarded-for') || 'unknown';
  const now = Date.now();
  const windowMs = 15 * 60 * 1000; // 15 menit
  const maxRequests = 100;

  const clientData = rateLimit.get(ip);
  
  if (clientData) {
    if (now < clientData.resetTime) {
      if (clientData.count >= maxRequests) {
        return NextResponse.json(
          { error: 'Too many requests' },
          { status: 429, headers: { 'Retry-After': String(Math.ceil((clientData.resetTime - now) / 1000)) } }
        );
      }
      clientData.count++;
    } else {
      rateLimit.set(ip, { count: 1, resetTime: now + windowMs });
    }
  } else {
    rateLimit.set(ip, { count: 1, resetTime: now + windowMs });
  }

  // Cleanup old entries (sederhana, untuk production gunakan scheduled job)
  if (Math.random() < 0.01) {
    for (const [key, value] of rateLimit.entries()) {
      if (now > value.resetTime) {
        rateLimit.delete(key);
      }
    }
  }

  // Additional security headers
  response.headers.set('X-DNS-Prefetch-Control', 'off');
  response.headers.set('X-Download-Options', 'noopen');
  response.headers.set('X-Permitted-Cross-Domain-Policies', 'none');
  
  return response;
}

// Apply middleware to all routes except static files
export const config = {
  matcher: [
    /*
     * Match all request paths except:
     * - _next/static (static files)
     * - _next/image (image optimization)
     * - favicon.ico, robots.txt, sitemap.xml
     * - public files (images, etc)
     */
    '/((?!_next/static|_next/image|favicon.ico|robots.txt|sitemap.xml|.*\\.(?:svg|png|jpg|jpeg|gif|webp|ico)$).*)',
  ],
};

