# Security Policy

## Keamanan Best Practices yang Diterapkan

### 1. Security Headers
- **X-Frame-Options**: DENY - mencegah clickjacking
- **X-Content-Type-Options**: nosniff - mencegah MIME type sniffing
- **Strict-Transport-Security**: Memaksa HTTPS
- **Content-Security-Policy**: Membatasi sumber konten yang diizinkan
- **Permissions-Policy**: Menonaktifkan fitur browser yang tidak diperlukan

### 2. Rate Limiting
- Middleware mencakup rate limiting sederhana
- Limit: 100 requests per 15 menit per IP
- Untuk production, gunakan solusi seperti Redis

### 3. Image Security
- Hanya domain tertentu yang diizinkan untuk remote images
- Batasan ukuran image untuk mencegah abuse

### 4. Content Security Policy
- Menghilangkan `unsafe-eval` untuk mencegah code injection
- Membatasi sumber script, style, dan resource lainnya
- Frame ancestors diset ke 'none' untuk keamanan maksimal

### 5. Environment Variables
- Gunakan `.env.local` untuk secrets (tidak di-commit ke git)
- Contoh ada di `.env.example`
- Prefix `NEXT_PUBLIC_` untuk variable yang exposed ke client

## Reporting Security Issues

Jika Anda menemukan vulnerability:
1. **JANGAN** buat public issue
2. Email langsung ke: security@yourdomain.com
3. Berikan detail lengkap tentang vulnerability

## Security Checklist untuk Production

- [ ] Update semua dependencies ke versi terbaru
- [ ] Jalankan `npm audit` dan fix semua vulnerabilities
- [ ] Set environment variables dengan aman
- [ ] Enable HTTPS dengan SSL certificate valid
- [ ] Setup proper rate limiting dengan Redis/database
- [ ] Enable logging dan monitoring
- [ ] Backup database secara regular
- [ ] Implement proper authentication jika diperlukan
- [ ] Review dan update CSP sesuai kebutuhan
- [ ] Test security headers dengan https://securityheaders.com
- [ ] Enable firewall dan DDoS protection

## Maintenance

- Update dependencies minimal setiap bulan
- Review security headers setiap 3 bulan
- Audit code untuk vulnerabilities setiap 6 bulan
- Monitor security advisories untuk packages yang digunakan
