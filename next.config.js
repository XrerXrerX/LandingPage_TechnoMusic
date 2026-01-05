/**
 * @format
 * @type {import('next').NextConfig}
 */

const nextConfig = {
  // Enable ESLint during builds for security
  eslint: {
    ignoreDuringBuilds: false,
  },
  
  // Optimize images - only allow specific trusted domains
  images: { 
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
      {
        protocol: 'https',
        hostname: 'cdn.example.com',
      },
    ],
    // Limit image sizes to prevent abuse
    deviceSizes: [640, 750, 828, 1080, 1200],
    imageSizes: [16, 32, 48, 64, 96],
  },

  // Security Headers
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          // Prevent clickjacking attacks
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          // Prevent MIME type sniffing
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          // Referrer Policy
          {
            key: 'Referrer-Policy',
            value: 'strict-origin-when-cross-origin',
          },
          // Permissions Policy (restrict unnecessary features)
          {
            key: 'Permissions-Policy',
            value: 'camera=(), microphone=(), geolocation=(), interest-cohort=(), payment=(), usb=()',
          },
          // Strict Transport Security (HTTPS only) - hanya untuk production
          {
            key: 'Strict-Transport-Security',
            value: 'max-age=31536000; includeSubDomains',
          },
          // Content Security Policy - lebih ketat, tanpa unsafe-eval
          {
            key: 'Content-Security-Policy',
            value: [
              "default-src 'self'",
              "script-src 'self' 'unsafe-inline' https://pagead2.googlesyndication.com https://*.google.com https://*.gstatic.com",
              "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
              "img-src 'self' data: https://images.unsplash.com https://cdn.example.com https://*.google.com https://*.googlesyndication.com",
              "font-src 'self' data: https://fonts.gstatic.com",
              "connect-src 'self' https://*.google.com https://*.googlesyndication.com",
              "frame-src https://*.google.com https://*.googlesyndication.com",
              "object-src 'none'",
              "base-uri 'self'",
              "form-action 'self'",
              "frame-ancestors 'none'",
              "upgrade-insecure-requests",
            ].join('; '),
          },
        ],
      },
    ];
  },

  // Disable powered by header
  poweredByHeader: false,

  // Enable React strict mode for better error handling
  reactStrictMode: true,

  // Compression for better performance
  compress: true,

  // Prevent dynamic code evaluation
  experimental: {
    serverActions: {
      bodySizeLimit: '2mb',
    },
  },
};

module.exports = nextConfig;
