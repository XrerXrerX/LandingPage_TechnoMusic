/** @format */

/**
 * Security utility functions for the application
 */

/**
 * Sanitize string input to prevent XSS attacks
 * @param input - The string to sanitize
 * @returns Sanitized string
 */
export function sanitizeInput(input: string): string {
  if (!input) return '';
  
  return input
    .replace(/[<>]/g, '') // Remove < and > to prevent HTML injection
    .trim();
}

/**
 * Validate URL to prevent open redirect vulnerabilities
 * @param url - URL to validate
 * @param allowedDomains - Array of allowed domains (optional)
 * @returns boolean indicating if URL is safe
 */
export function isValidUrl(url: string, allowedDomains?: string[]): boolean {
  try {
    const parsedUrl = new URL(url);
    
    // Only allow http and https protocols
    if (!['http:', 'https:'].includes(parsedUrl.protocol)) {
      return false;
    }
    
    // If allowedDomains is provided, check against it
    if (allowedDomains && allowedDomains.length > 0) {
      return allowedDomains.some(domain => 
        parsedUrl.hostname === domain || 
        parsedUrl.hostname.endsWith(`.${domain}`)
      );
    }
    
    return true;
  } catch {
    return false;
  }
}

/**
 * Check if a URL is a relative path (safe for internal navigation)
 * @param url - URL to check
 * @returns boolean indicating if URL is a relative path
 */
export function isRelativeUrl(url: string): boolean {
  return url.startsWith('/') && !url.startsWith('//');
}

/**
 * Validate email format
 * @param email - Email to validate
 * @returns boolean indicating if email is valid
 */
export function isValidEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

/**
 * Rate limiter for client-side actions
 */
export class RateLimiter {
  private attempts: Map<string, number[]> = new Map();
  private maxAttempts: number;
  private windowMs: number;

  constructor(maxAttempts: number = 5, windowMs: number = 60000) {
    this.maxAttempts = maxAttempts;
    this.windowMs = windowMs;
  }

  /**
   * Check if action is allowed
   * @param key - Unique identifier for the action
   * @returns boolean indicating if action is allowed
   */
  isAllowed(key: string): boolean {
    const now = Date.now();
    const attempts = this.attempts.get(key) || [];
    
    // Filter out old attempts outside the window
    const recentAttempts = attempts.filter(time => now - time < this.windowMs);
    
    if (recentAttempts.length >= this.maxAttempts) {
      return false;
    }
    
    // Add current attempt
    recentAttempts.push(now);
    this.attempts.set(key, recentAttempts);
    
    return true;
  }

  /**
   * Reset attempts for a key
   * @param key - Unique identifier to reset
   */
  reset(key: string): void {
    this.attempts.delete(key);
  }
}

/**
 * Generate a random nonce for CSP
 * @returns Random nonce string
 */
export function generateNonce(): string {
  if (typeof window !== 'undefined' && window.crypto) {
    const array = new Uint8Array(16);
    window.crypto.getRandomValues(array);
    return Array.from(array, byte => byte.toString(16).padStart(2, '0')).join('');
  }
  // Fallback for server-side
  return Math.random().toString(36).substring(2, 15) + 
         Math.random().toString(36).substring(2, 15);
}

/**
 * Escape HTML entities to prevent XSS
 * @param text - Text to escape
 * @returns Escaped text
 */
export function escapeHtml(text: string): string {
  const map: Record<string, string> = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#x27;',
    '/': '&#x2F;',
  };
  
  return text.replace(/[&<>"'/]/g, char => map[char]);
}

/**
 * Check if string contains suspicious patterns
 * @param input - String to check
 * @returns boolean indicating if input is suspicious
 */
export function isSuspiciousInput(input: string): boolean {
  const suspiciousPatterns = [
    /<script/i,
    /javascript:/i,
    /on\w+\s*=/i, // Event handlers like onclick=
    /<iframe/i,
    /eval\(/i,
    /expression\(/i,
  ];
  
  return suspiciousPatterns.some(pattern => pattern.test(input));
}

