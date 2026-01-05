# Quick Security Guide 🔒

Panduan cepat untuk memelihara keamanan aplikasi Next.js Anda.

## 🚦 Quick Status Check

```bash
# Check for vulnerabilities (Jalankan setiap minggu)
npm run security:audit

# Fix vulnerabilities otomatis
npm run security:audit:fix

# Check outdated packages
npm outdated

# Update packages
npm update

# Type checking
npm run type-check

# Lint checking
npm run lint
```

## ✅ Security Features Active

- ✅ **Security Headers**: X-Frame-Options, CSP, HSTS, dll
- ✅ **Middleware Protection**: Request filtering active
- ✅ **Safe External Scripts**: Google AdSense loaded securely
- ✅ **Input Sanitization**: Utilities available di `lib/security.ts`
- ✅ **Image Optimization**: Next.js Image component
- ✅ **SEO Security**: robots.txt & sitemap configured
- ✅ **Legal Pages**: Privacy, Terms, Cookies ready

## 🔧 Common Tasks

### Adding New Environment Variable
1. Edit `.env.local` (local development)
2. Document in README.md
3. Add to production environment (Vercel/hosting)
4. Never commit `.env.local` to git

### Adding External Link
```tsx
// ❌ Bad
<a href="https://external.com">Link</a>

// ✅ Good
<a 
  href="https://external.com" 
  target="_blank" 
  rel="noopener noreferrer"
>
  Link
</a>
```

### Using Images
```tsx
// ❌ Bad
<img src="/image.jpg" alt="desc" />

// ✅ Good
import Image from "next/image";
<Image 
  src="/image.jpg" 
  alt="desc" 
  width={500} 
  height={300}
/>
```

### Sanitizing User Input
```tsx
import { sanitizeInput, isSuspiciousInput } from "@/lib/security";

const userInput = req.body.text;

// Check for malicious patterns
if (isSuspiciousInput(userInput)) {
  return res.status(400).json({ error: "Invalid input" });
}

// Sanitize
const clean = sanitizeInput(userInput);
```

### Validating URLs
```tsx
import { isValidUrl, isRelativeUrl } from "@/lib/security";

// For external URLs
if (!isValidUrl(url)) {
  throw new Error("Invalid URL");
}

// For internal navigation
if (isRelativeUrl(url)) {
  // Safe to use
}
```

## 🚨 Security Alerts

### DO ✅
- Use Next.js `Image` component
- Use Next.js `Script` component for external scripts
- Add `rel="noopener noreferrer"` to external links
- Sanitize all user inputs
- Run `npm audit` regularly
- Keep dependencies updated
- Use environment variables for secrets
- Enable ESLint and TypeScript checks

### DON'T ❌
- Don't commit `.env.local` files
- Don't use `dangerouslySetInnerHTML` without sanitization
- Don't disable ESLint or TypeScript errors
- Don't load external scripts without CSP consideration
- Don't skip security updates
- Don't hardcode secrets in code
- Don't use `target="_blank"` without `rel="noopener noreferrer"`

## 📋 Pre-Deployment Checklist

```
[ ] Run npm audit (no vulnerabilities)
[ ] Run npm run lint (no errors)
[ ] Run npm run type-check (no errors)
[ ] Test all pages load correctly
[ ] Verify external links work
[ ] Check images load properly
[ ] Test on mobile devices
[ ] Set environment variables in hosting
[ ] Update social media links
[ ] Test CSP doesn't block needed resources
[ ] Verify HTTPS is enabled
[ ] Test all forms (if any)
```

## 🔗 Quick Links

- [Full Security Documentation](./SECURITY.md)
- [Implementation Details](./SECURITY_IMPLEMENTATION.md)
- [README](./README.md)

## 🆘 Emergency Contacts

**Security Issues**: dikikiki.dk@gmail.com

## 📊 Weekly Security Routine

### Monday Morning (5 minutes)
```bash
npm audit
npm outdated
# Review and plan updates if needed
```

### Friday Afternoon (10 minutes)
```bash
npm update      # Update minor versions
npm audit fix   # Fix vulnerabilities
npm run build   # Test build
```

### Monthly (30 minutes)
- Review security headers with [SecurityHeaders.com](https://securityheaders.com/)
- Check CSP with [CSP Evaluator](https://csp-evaluator.withgoogle.com/)
- Review logs for suspicious activity
- Update major dependencies if available

## 🎯 Performance vs Security

Remember: Security features yang telah diimplementasikan sudah dioptimalkan untuk performa:

- ✅ Security headers: **No performance impact**
- ✅ Middleware: **Minimal impact** (~1-2ms)
- ✅ CSP: **No performance impact**
- ✅ Next.js Image: **Better performance** + security
- ✅ Script component: **Better performance** + security

## 🔍 Monitoring

### Check Security Headers
```bash
# Using curl
curl -I https://yourdomain.com

# Look for:
# - X-Frame-Options
# - X-Content-Type-Options
# - Content-Security-Policy
# - Strict-Transport-Security
```

### Test CSP
1. Open browser DevTools
2. Go to Console tab
3. Look for CSP violations
4. Adjust CSP in next.config.js if needed

---

**Keep This Guide Handy!** 📌

Updated: January 5, 2026

