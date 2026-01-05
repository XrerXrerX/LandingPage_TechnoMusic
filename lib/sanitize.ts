/**
 * Utility functions untuk sanitasi input dan mencegah XSS
 * @format
 */

/**
 * Sanitize string untuk mencegah XSS
 * Menghapus HTML tags dan karakter berbahaya
 */
export function sanitizeString(str: string): string {
  if (!str) return '';
  
  return str
    .replace(/[<>]/g, '') // Remove < and >
    .replace(/javascript:/gi, '') // Remove javascript: protocol
    .replace(/on\w+=/gi, '') // Remove event handlers like onclick=
    .trim();
}

/**
 * Sanitize URL untuk mencegah javascript: dan data: URLs
 */
export function sanitizeUrl(url: string): string {
  if (!url) return '';
  
  const trimmedUrl = url.trim().toLowerCase();
  
  // Block dangerous protocols
  const dangerousProtocols = ['javascript:', 'data:', 'vbscript:', 'file:'];
  
  for (const protocol of dangerousProtocols) {
    if (trimmedUrl.startsWith(protocol)) {
      return '';
    }
  }
  
  return url.trim();
}

/**
 * Validate email format
 */
export function isValidEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

/**
 * Sanitize object untuk API requests
 * Recursively clean all string values
 */
export function sanitizeObject<T extends Record<string, any>>(obj: T): T {
  const sanitized = { ...obj };
  
  for (const key in sanitized) {
    if (typeof sanitized[key] === 'string') {
      sanitized[key] = sanitizeString(sanitized[key]) as any;
    } else if (typeof sanitized[key] === 'object' && sanitized[key] !== null) {
      sanitized[key] = sanitizeObject(sanitized[key]);
    }
  }
  
  return sanitized;
}

/**
 * Validate dan sanitize search query
 */
export function sanitizeSearchQuery(query: string): string {
  if (!query) return '';
  
  return query
    .replace(/[<>]/g, '')
    .replace(/[^\w\s-]/g, '') // Only allow alphanumeric, spaces, and hyphens
    .trim()
    .slice(0, 100); // Limit length
}

