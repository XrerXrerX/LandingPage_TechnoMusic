# 🚀 Deployment Security Checklist

## Pre-Deployment

### 1. Code Quality & Security
- [ ] Run `npm run type-check` - No TypeScript errors
- [ ] Run `npm run lint` - No linting errors
- [ ] Run `npm run security:audit` - No critical/high vulnerabilities
- [ ] All dependencies updated to latest stable versions
- [ ] Remove all console.logs and debug code
- [ ] Remove unused dependencies

### 2. Environment Variables
- [ ] `.env.local` tidak di-commit ke git
- [ ] All production environment variables set di hosting platform
- [ ] `NEXT_PUBLIC_APP_URL` set ke production URL
- [ ] `NODE_ENV=production` set
- [ ] API keys dan secrets aman
- [ ] No hardcoded secrets dalam code

### 3. Security Configuration
- [ ] Security headers configured di `next.config.js`
- [ ] CSP (Content Security Policy) tested dan working
- [ ] Rate limiting enabled di middleware
- [ ] HTTPS/SSL certificate valid
- [ ] CORS configured properly (jika ada API)
- [ ] Input validation implemented di semua forms

### 4. Performance
- [ ] Images optimized
- [ ] Unused CSS removed
- [ ] Bundle size checked (`npm run build`)
- [ ] Lazy loading implemented untuk heavy components
- [ ] Caching strategy configured

### 5. Testing
- [ ] All pages load correctly
- [ ] All forms submit correctly
- [ ] Mobile responsive tested
- [ ] Cross-browser testing done
- [ ] Security headers tested di https://securityheaders.com
- [ ] Lighthouse audit score > 90

## Deployment Steps

### Vercel Deployment
```bash
# 1. Install Vercel CLI
npm i -g vercel

# 2. Login
vercel login

# 3. Deploy
vercel --prod

# 4. Set environment variables
vercel env add NEXT_PUBLIC_APP_URL
vercel env add NEXT_PUBLIC_ADSENSE_ID
```

### Netlify Deployment
```bash
# 1. Install Netlify CLI
npm i -g netlify-cli

# 2. Login
netlify login

# 3. Deploy
netlify deploy --prod

# 4. Set environment variables di Netlify dashboard
```

### Docker Deployment
```dockerfile
# Dockerfile
FROM node:18-alpine AS base

# Install dependencies only when needed
FROM base AS deps
RUN apk add --no-cache libc6-compat
WORKDIR /app

COPY package*.json ./
RUN npm ci

# Build the app
FROM base AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .

ENV NEXT_TELEMETRY_DISABLED 1
RUN npm run build

# Production image
FROM base AS runner
WORKDIR /app

ENV NODE_ENV production
ENV NEXT_TELEMETRY_DISABLED 1

RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

COPY --from=builder /app/public ./public
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

USER nextjs

EXPOSE 3000

ENV PORT 3000

CMD ["node", "server.js"]
```

## Post-Deployment

### 1. Verification
- [ ] Site accessible via HTTPS
- [ ] All pages loading correctly
- [ ] Forms working
- [ ] Images loading
- [ ] No console errors
- [ ] Analytics tracking working (jika ada)
- [ ] AdSense showing (jika configured)

### 2. Security Testing
- [ ] Test security headers: https://securityheaders.com
- [ ] Test SSL: https://www.ssllabs.com/ssltest/
- [ ] Test CSP violations di browser console
- [ ] Test rate limiting
- [ ] Test XSS prevention

### 3. Performance Testing
- [ ] Lighthouse audit: https://pagespeed.web.dev/
- [ ] GTmetrix: https://gtmetrix.com/
- [ ] WebPageTest: https://www.webpagetest.org/
- [ ] Core Web Vitals passing

### 4. Monitoring Setup
- [ ] Error tracking setup (Sentry, LogRocket, dll)
- [ ] Analytics setup (Google Analytics, Plausible, dll)
- [ ] Uptime monitoring (UptimeRobot, Pingdom, dll)
- [ ] Performance monitoring
- [ ] Log aggregation configured

### 5. SEO
- [ ] Sitemap.xml generated
- [ ] Robots.txt configured
- [ ] Meta tags correct
- [ ] Open Graph tags set
- [ ] Schema markup added (jika applicable)
- [ ] Google Search Console verified

## Maintenance Schedule

### Daily
- [ ] Check error logs
- [ ] Monitor uptime
- [ ] Check performance metrics

### Weekly
- [ ] Review analytics
- [ ] Check for npm security advisories
- [ ] Review rate limiting logs

### Monthly
- [ ] Update dependencies
- [ ] Run security audit
- [ ] Review and optimize performance
- [ ] Check SSL certificate expiry

### Quarterly
- [ ] Full security audit
- [ ] Review and update CSP
- [ ] Performance optimization review
- [ ] Backup verification

## Rollback Plan

Jika terjadi masalah setelah deployment:

### Vercel
```bash
# Rollback ke deployment sebelumnya
vercel rollback
```

### Netlify
```bash
# Rollback via dashboard atau CLI
netlify rollback
```

### Manual Rollback
1. Revert git commit
2. Redeploy versi sebelumnya
3. Verify rollback successful
4. Investigate issue
5. Fix dan redeploy

## Emergency Contacts

- **DevOps Lead**: [email/phone]
- **Security Team**: [email/phone]
- **Hosting Support**: [support link]

## Notes

- Always test di staging environment dulu
- Keep backup dari production database (jika ada)
- Document semua changes
- Inform team sebelum deployment
- Schedule deployment saat low traffic

---

**Last Updated**: January 2026

