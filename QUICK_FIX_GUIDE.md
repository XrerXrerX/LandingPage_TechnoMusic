# 🚀 Quick Security Fix Guide

## ⚡ Langkah Cepat (30 Menit)

### Step 1: Update Next.js (CRITICAL - 10 menit)

```bash
# Backup dulu
git add .
git commit -m "Pre-security-update backup"

# Update Next.js dan React ke versi terbaru
npm install next@latest react@latest react-dom@latest

# Update dependencies lainnya
npm update

# Check vulnerabilities
npm audit fix

# Test build
npm run build
```

### Step 2: Verify Update

```bash
# Check versi
npm list next react react-dom

# Expected output:
# next@14.2.35+ atau next@15.x
# react@18.x
# react-dom@18.x
```

### Step 3: Test Aplikasi

```bash
# Run development server
npm run dev

# Test di browser:
# ✓ http://localhost:3000 - homepage load
# ✓ All pages accessible
# ✓ No console errors
# ✓ Forms working
```

### Step 4: Commit Changes

```bash
git add .
git commit -m "Security: Update Next.js to latest version (CVE fixes)"
```

---

## 🔧 Optional Improvements (1-2 jam)

### Fix 1: Implement Nonce-based CSP (Advanced)

**File: middleware.ts**

Ganti seluruh file dengan:

```typescript
/** @format */

import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

// Rate limiting store
const rateLimit = new Map<string, { count: number; resetTime: number }>();

export function middleware(request: NextRequest) {
  // Generate nonce for CSP
  const nonce = Buffer.from(crypto.randomUUID()).toString('base64');
  
  // Content Security Policy dengan nonce
  const cspHeader = `
    default-src 'self';
    script-src 'self' 'nonce-${nonce}' 'strict-dynamic' https://pagead2.googlesyndication.com https://*.google.com https://*.gstatic.com;
    style-src 'self' 'nonce-${nonce}' https://fonts.googleapis.com;
    img-src 'self' blob: data: https://images.unsplash.com https://*.google.com https://*.googlesyndication.com;
    font-src 'self' data: https://fonts.gstatic.com;
    connect-src 'self' https://*.google.com https://*.googlesyndication.com;
    frame-src https://*.google.com https://*.googlesyndication.com;
    object-src 'none';
    base-uri 'self';
    form-action 'self';
    frame-ancestors 'none';
    upgrade-insecure-requests;
  `.replace(/\s{2,}/g, ' ').trim();

  // Rate limiting
  const ip = request.ip || request.headers.get('x-forwarded-for') || 'unknown';
  const now = Date.now();
  const windowMs = 15 * 60 * 1000;
  const maxRequests = 100;

  const clientData = rateLimit.get(ip);
  
  if (clientData) {
    if (now < clientData.resetTime) {
      if (clientData.count >= maxRequests) {
        return NextResponse.json(
          { error: 'Too many requests' },
          { 
            status: 429, 
            headers: { 
              'Retry-After': String(Math.ceil((clientData.resetTime - now) / 1000)),
              'Content-Security-Policy': cspHeader,
            } 
          }
        );
      }
      clientData.count++;
    } else {
      rateLimit.set(ip, { count: 1, resetTime: now + windowMs });
    }
  } else {
    rateLimit.set(ip, { count: 1, resetTime: now + windowMs });
  }

  // Cleanup old entries
  if (Math.random() < 0.01) {
    for (const [key, value] of rateLimit.entries()) {
      if (now > value.resetTime) {
        rateLimit.delete(key);
      }
    }
  }

  // Create response with headers
  const requestHeaders = new Headers(request.headers);
  requestHeaders.set('x-nonce', nonce);

  const response = NextResponse.next({
    request: {
      headers: requestHeaders,
    },
  });

  // Set security headers
  response.headers.set('Content-Security-Policy', cspHeader);
  response.headers.set('X-DNS-Prefetch-Control', 'off');
  response.headers.set('X-Download-Options', 'noopen');
  response.headers.set('X-Permitted-Cross-Domain-Policies', 'none');
  
  return response;
}

export const config = {
  matcher: [
    '/((?!_next/static|_next/image|favicon.ico|robots.txt|sitemap.xml|.*\\.(?:svg|png|jpg|jpeg|gif|webp|ico)$).*)',
  ],
};
```

**File: app/layout.tsx**

Update Script component untuk menggunakan nonce:

```typescript
import { headers } from 'next/headers';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const nonce = headers().get('x-nonce') || undefined;

  return (
    <html lang="en">
      <head>
        <meta httpEquiv="x-dns-prefetch-control" content="off" />
      </head>
      <body className={`${inter.className} bg-gray-900 text-white`}>
        <Navigation />
        <main className="min-h-screen">{children}</main>
        <Footer />
        
        {process.env.NEXT_PUBLIC_ADSENSE_ID && (
          <Script
            id="google-adsense"
            async
            src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${process.env.NEXT_PUBLIC_ADSENSE_ID}`}
            crossOrigin="anonymous"
            strategy="afterInteractive"
            nonce={nonce}
          />
        )}
      </body>
    </html>
  );
}
```

**File: next.config.js**

Hapus CSP dari headers (sekarang di middleware):

```javascript
async headers() {
  return [
    {
      source: '/:path*',
      headers: [
        {
          key: 'X-Frame-Options',
          value: 'DENY',
        },
        {
          key: 'X-Content-Type-Options',
          value: 'nosniff',
        },
        {
          key: 'Referrer-Policy',
          value: 'strict-origin-when-cross-origin',
        },
        {
          key: 'Permissions-Policy',
          value: 'camera=(), microphone=(), geolocation=(), interest-cohort=(), payment=(), usb=()',
        },
        {
          key: 'Strict-Transport-Security',
          value: 'max-age=31536000; includeSubDomains',
        },
        // CSP moved to middleware for nonce support
      ],
    },
  ];
},
```

---

## 📊 Verification Commands

```bash
# 1. Check npm audit
npm audit

# Expected: 0 vulnerabilities

# 2. Type check
npm run type-check

# Expected: No errors

# 3. Lint
npm run lint

# Expected: No errors

# 4. Build test
npm run build

# Expected: Build successful
```

---

## 🎯 Expected Results

### Before Fixes:
- Next.js: 13.5.1 (vulnerable to CVE-2025-29927, CVE-2025-55182, CVE-2025-66478)
- CSP: Using 'unsafe-inline' (XSS risk)
- Security Score: 7/10

### After Fixes:
- Next.js: 14.2.35+ or 15.x ✅
- CSP: Nonce-based (No 'unsafe-inline') ✅
- Security Score: 9/10 ✅

---

## 🔍 Test Security Headers

Setelah deploy, test dengan:

1. **Security Headers**: https://securityheaders.com
   - Target: A+ grade

2. **Mozilla Observatory**: https://observatory.mozilla.org
   - Target: A+ grade

3. **CSP Evaluator**: https://csp-evaluator.withgoogle.com
   - Target: No errors

4. **SSL Test** (production): https://www.ssllabs.com/ssltest/
   - Target: A+ grade

---

## ⚠️ Troubleshooting

### Issue: Build errors after update

```bash
# Clear cache and reinstall
rm -rf .next node_modules package-lock.json
npm install
npm run build
```

### Issue: TypeScript errors

```bash
# Update TypeScript
npm install -D typescript@latest @types/react@latest @types/node@latest

# Check
npm run type-check
```

### Issue: CSP violations in console

1. Open browser console (F12)
2. Look for CSP errors
3. Add missing domains to CSP in middleware.ts

### Issue: AdSense not loading

1. Check .env.local has NEXT_PUBLIC_ADSENSE_ID
2. Check nonce is passed to Script component
3. Check CSP allows AdSense domains

---

## 📞 Need Help?

- Next.js Docs: https://nextjs.org/docs
- Security Guide: https://nextjs.org/docs/app/building-your-application/configuring/security
- Report Issues: GitHub Issues

---

**Last Updated:** January 5, 2026
**Estimated Time:** 30 minutes - 2 hours
**Difficulty:** ⭐⭐⭐ Medium

