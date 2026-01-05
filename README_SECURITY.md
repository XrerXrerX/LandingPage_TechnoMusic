# 🔒 Panduan Keamanan Next.js - TechnoBeats

## 📋 Daftar Isi
1. [Security Features yang Diterapkan](#security-features)
2. [Setup Environment Variables](#environment-variables)
3. [Security Headers](#security-headers)
4. [Rate Limiting](#rate-limiting)
5. [Input Sanitization](#input-sanitization)
6. [Best Practices](#best-practices)
7. [Testing Security](#testing-security)

---

## 🛡️ Security Features yang Diterapkan {#security-features}

### 1. **Security Headers** (next.config.js)
- ✅ **X-Frame-Options: DENY** - Mencegah clickjacking
- ✅ **X-Content-Type-Options: nosniff** - Mencegah MIME sniffing
- ✅ **Strict-Transport-Security** - Memaksa HTTPS
- ✅ **Content-Security-Policy** - Membatasi sumber konten
- ✅ **Permissions-Policy** - Menonaktifkan fitur browser yang tidak perlu
- ✅ **Referrer-Policy** - Kontrol informasi referrer

### 2. **Rate Limiting** (middleware.ts)
- ✅ 100 requests per 15 menit per IP
- ✅ Automatic cleanup untuk memory management
- ✅ HTTP 429 response untuk exceeded limits

### 3. **Input Sanitization** (lib/sanitize.ts)
- ✅ XSS prevention
- ✅ URL validation
- ✅ Email validation
- ✅ Search query sanitization

### 4. **Image Security**
- ✅ Whitelist domain untuk remote images
- ✅ Batasan ukuran image
- ✅ Device-specific optimization

### 5. **Environment Variables**
- ✅ Secrets tidak di-commit ke git
- ✅ Example file untuk reference
- ✅ Proper prefix untuk public variables

---

## 🔑 Setup Environment Variables {#environment-variables}

### Development
1. Buat file `.env.local` (sudah di-ignore oleh git):
```bash
cp .env.local.example .env.local
```

2. Edit `.env.local` dengan values Anda:
```env
NODE_ENV=development
NEXT_PUBLIC_APP_URL=http://localhost:3000
NEXT_PUBLIC_ADSENSE_ID=ca-pub-your-id-here
```

### Production
Set environment variables di hosting platform Anda (Vercel, Netlify, dll):
```env
NODE_ENV=production
NEXT_PUBLIC_APP_URL=https://yourdomain.com
NEXT_PUBLIC_ADSENSE_ID=ca-pub-your-id-here
```

⚠️ **PENTING**: 
- Jangan commit `.env.local` ke git
- Gunakan `NEXT_PUBLIC_` prefix untuk variables yang perlu diakses di client
- Variables tanpa prefix hanya tersedia di server-side

---

## 🔐 Security Headers Explained {#security-headers}

### Content Security Policy (CSP)
Membatasi dari mana konten bisa dimuat:

```javascript
"default-src 'self'" // Hanya dari domain sendiri
"script-src 'self' 'unsafe-inline' https://trusted-cdn.com" // Script sources
"img-src 'self' data: https:" // Image sources
"frame-ancestors 'none'" // Tidak bisa di-iframe
```

### Strict Transport Security (HSTS)
```javascript
"max-age=31536000; includeSubDomains"
// Memaksa HTTPS selama 1 tahun
```

### X-Frame-Options
```javascript
"DENY" // Tidak bisa di-iframe sama sekali
"SAMEORIGIN" // Hanya bisa di-iframe oleh domain sendiri
```

---

## ⏱️ Rate Limiting {#rate-limiting}

### Current Implementation
- **Window**: 15 menit
- **Max Requests**: 100 per IP
- **Storage**: In-memory Map (untuk production gunakan Redis)

### Upgrade untuk Production

```typescript
// Gunakan Redis untuk distributed rate limiting
import { Redis } from '@upstash/redis'

const redis = Redis.fromEnv()

async function checkRateLimit(ip: string) {
  const key = `rate-limit:${ip}`
  const count = await redis.incr(key)
  
  if (count === 1) {
    await redis.expire(key, 900) // 15 minutes
  }
  
  return count <= 100
}
```

---

## 🧹 Input Sanitization {#input-sanitization}

### Menggunakan Sanitization Functions

```typescript
import { sanitizeString, sanitizeUrl, sanitizeSearchQuery } from '@/lib/sanitize'

// Sanitize user input
const cleanName = sanitizeString(userInput)

// Validate URL
const safeUrl = sanitizeUrl(userUrl)

// Sanitize search
const cleanQuery = sanitizeSearchQuery(searchTerm)
```

### Contoh Penggunaan dalam Form

```typescript
'use client'

import { sanitizeString } from '@/lib/sanitize'

function ContactForm() {
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    
    const formData = new FormData(e.target)
    const name = sanitizeString(formData.get('name') as string)
    const email = formData.get('email') as string
    
    // Validate dan sanitize sebelum submit
    if (!isValidEmail(email)) {
      alert('Invalid email')
      return
    }
    
    // Submit clean data
  }
  
  return <form onSubmit={handleSubmit}>...</form>
}
```

---

## ✅ Best Practices {#best-practices}

### 1. Dependencies
```bash
# Check vulnerabilities
npm run security:audit

# Fix vulnerabilities
npm run security:audit:fix

# Check outdated packages
npm outdated
```

### 2. Code Quality
```bash
# Type checking
npm run type-check

# Linting
npm run lint
npm run lint:fix
```

### 3. Before Deployment
- [ ] Run `npm audit` dan fix semua issues
- [ ] Update dependencies ke versi terbaru
- [ ] Test semua security headers
- [ ] Verify environment variables
- [ ] Enable HTTPS dengan valid SSL
- [ ] Setup monitoring dan logging

### 4. Regular Maintenance
- **Weekly**: Check `npm audit`
- **Monthly**: Update dependencies
- **Quarterly**: Review security headers dan CSP
- **Yearly**: Full security audit

---

## 🧪 Testing Security {#testing-security}

### 1. Test Security Headers
Gunakan online tools:
- https://securityheaders.com
- https://observatory.mozilla.org

### 2. Test CSP
```bash
# Check CSP violations di browser console
# Look for CSP errors
```

### 3. Test Rate Limiting
```bash
# Test dengan curl atau Postman
for i in {1..101}; do
  curl http://localhost:3000/
done
# Request ke-101 harus return 429
```

### 4. Test XSS Prevention
```javascript
// Try injecting script
const malicious = '<script>alert("XSS")</script>'
const safe = sanitizeString(malicious)
console.log(safe) // Should be empty or cleaned
```

---

## 🚨 Security Checklist untuk Production

### Pre-Deployment
- [ ] All dependencies updated dan no vulnerabilities
- [ ] Environment variables properly set
- [ ] HTTPS enabled dengan valid certificate
- [ ] Security headers tested
- [ ] Rate limiting configured
- [ ] Input validation implemented
- [ ] Error handling doesn't leak sensitive info
- [ ] Logging configured (no sensitive data logged)

### Post-Deployment
- [ ] Test all security headers online
- [ ] Monitor error logs
- [ ] Setup alerts untuk suspicious activity
- [ ] Regular security audits scheduled
- [ ] Backup strategy implemented

### Monitoring
- [ ] Setup error tracking (Sentry, LogRocket, dll)
- [ ] Monitor rate limiting effectiveness
- [ ] Track failed authentication attempts
- [ ] Alert on unusual traffic patterns

---

## 📚 Resources

### Documentation
- [Next.js Security](https://nextjs.org/docs/advanced-features/security-headers)
- [OWASP Top 10](https://owasp.org/www-project-top-ten/)
- [MDN Security](https://developer.mozilla.org/en-US/docs/Web/Security)

### Tools
- [Security Headers Scanner](https://securityheaders.com)
- [Mozilla Observatory](https://observatory.mozilla.org)
- [npm audit](https://docs.npmjs.com/cli/v8/commands/npm-audit)

### Best Practices
- [Next.js Security Best Practices](https://nextjs.org/docs/pages/building-your-application/configuring/security-headers)
- [React Security Best Practices](https://react.dev/learn/security)

---

## 🆘 Troubleshooting

### CSP Blocking Resources
Jika CSP memblok resource yang valid:
1. Check browser console untuk CSP violations
2. Add domain ke whitelist di `next.config.js`
3. Test ulang

### Rate Limiting False Positives
Jika legitimate users kena rate limit:
1. Increase limit di `middleware.ts`
2. Implement user-based rate limiting (bukan IP-based)
3. Gunakan Redis untuk distributed rate limiting

### HTTPS Issues
Untuk development dengan HTTPS:
```bash
# Generate self-signed certificate
openssl req -x509 -out localhost.crt -keyout localhost.key \
  -newkey rsa:2048 -nodes -sha256 \
  -subj '/CN=localhost' -extensions EXT -config <( \
   printf "[dn]\nCN=localhost\n[req]\ndistinguished_name = dn\n[EXT]\nsubjectAltName=DNS:localhost\nkeyUsage=digitalSignature\nextendedKeyUsage=serverAuth")
```

---

## 📞 Support

Untuk security issues:
- **Email**: security@yourdomain.com
- **Urgent**: Buat private security advisory di GitHub

**JANGAN** buat public issue untuk security vulnerabilities!

---

**Last Updated**: January 2026
**Version**: 1.0.0

