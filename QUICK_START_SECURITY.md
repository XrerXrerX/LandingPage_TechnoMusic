# ⚡ Quick Start - Security Setup

## 🎯 Setup dalam 5 Menit

### 1. Clone & Install
```bash
npm install
```

### 2. Setup Environment Variables
```bash
# Buat file .env.local
NEXT_PUBLIC_APP_URL=http://localhost:3000
NEXT_PUBLIC_ADSENSE_ID=ca-pub-your-id-here
```

### 3. Run Development
```bash
npm run dev
```

### 4. Verify Security
```bash
# Check dependencies
npm run security:audit

# Type check
npm run type-check

# Lint
npm run lint
```

---

## 🔒 Security Features (Sudah Aktif!)

✅ **Security Headers** - Otomatis di semua pages
✅ **Rate Limiting** - 100 req/15min per IP
✅ **Input Sanitization** - Functions tersedia di `lib/sanitize.ts`
✅ **CSP** - Content Security Policy configured
✅ **HTTPS Enforcement** - Via HSTS header

---

## 📝 Cara Menggunakan

### Sanitize User Input
```typescript
import { sanitizeString } from '@/lib/sanitize'

const cleanInput = sanitizeString(userInput)
```

### Validate dengan Zod
```typescript
import { emailSchema } from '@/lib/validation'

const result = emailSchema.safeParse(email)
if (!result.success) {
  console.error(result.error)
}
```

### Secure API Route
```typescript
// app/api/your-route/route.ts
import { sanitizeObject } from '@/lib/sanitize'

export async function POST(request: NextRequest) {
  const body = await request.json()
  const clean = sanitizeObject(body)
  // ... your logic
}
```

---

## 🚀 Deploy ke Production

### Vercel (Recommended)
```bash
vercel --prod
```

### Environment Variables (Production)
Set di hosting dashboard:
- `NODE_ENV=production`
- `NEXT_PUBLIC_APP_URL=https://yourdomain.com`
- `NEXT_PUBLIC_ADSENSE_ID=ca-pub-xxx`

---

## ✅ Pre-Deploy Checklist

```bash
# 1. Check security
npm run security:audit

# 2. Type check
npm run type-check

# 3. Lint
npm run lint

# 4. Build test
npm run build

# 5. Test locally
npm start
```

---

## 🆘 Common Issues

### CSP Blocking Resources?
Edit `next.config.js` → tambah domain ke CSP whitelist

### Rate Limit Too Strict?
Edit `middleware.ts` → ubah `maxRequests` atau `windowMs`

### Images Not Loading?
Edit `next.config.js` → tambah domain ke `remotePatterns`

---

## 📚 Full Documentation

- **Security Guide**: `README_SECURITY.md`
- **Deployment**: `DEPLOYMENT_CHECKLIST.md`
- **Security Policy**: `SECURITY.md`

---

## 🎓 Best Practices

1. **Always sanitize user input**
   ```typescript
   const clean = sanitizeString(userInput)
   ```

2. **Validate with schemas**
   ```typescript
   const result = schema.safeParse(data)
   ```

3. **Use environment variables**
   ```typescript
   process.env.NEXT_PUBLIC_API_URL
   ```

4. **Never commit secrets**
   - Use `.env.local` (git-ignored)
   - Never hardcode API keys

5. **Keep dependencies updated**
   ```bash
   npm run security:audit
   npm update
   ```

---

## 🔗 Quick Links

- [Security Headers Test](https://securityheaders.com)
- [SSL Test](https://www.ssllabs.com/ssltest/)
- [Lighthouse](https://pagespeed.web.dev/)
- [npm audit docs](https://docs.npmjs.com/cli/v8/commands/npm-audit)

---

**Need Help?** Check `README_SECURITY.md` untuk detailed guide!

