/**
 * Application constants
 * @format
 */

// Security constants
export const RATE_LIMIT = {
  WINDOW_MS: 15 * 60 * 1000, // 15 minutes
  MAX_REQUESTS: 100,
} as const;

export const INPUT_LIMITS = {
  MAX_SEARCH_LENGTH: 100,
  MAX_COMMENT_LENGTH: 500,
  MAX_NAME_LENGTH: 50,
  MAX_EMAIL_LENGTH: 100,
} as const;

// Allowed image domains for security
export const ALLOWED_IMAGE_DOMAINS = [
  'images.unsplash.com',
  'cdn.example.com',
] as const;

// API endpoints
export const API_ENDPOINTS = {
  // Add your API endpoints here
} as const;

