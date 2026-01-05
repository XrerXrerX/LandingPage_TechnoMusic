/** @format */

import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_APP_URL || 'https://yourdomain.com';
  
  const routes = [
    '',
    '/about',
    '/artists',
    '/equipment',
    '/festivals',
    '/guides',
    '/privacy',
    '/terms',
    '/cookies',
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === '' ? 'daily' : 'weekly',
    priority: route === '' ? 1.0 : 0.8,
  }));
}

