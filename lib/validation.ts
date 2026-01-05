/**
 * Validation schemas dan functions menggunakan Zod
 * @format
 */

import { z } from 'zod';
import { INPUT_LIMITS } from './constants';

/**
 * Email validation schema
 */
export const emailSchema = z
  .string()
  .email('Invalid email format')
  .max(INPUT_LIMITS.MAX_EMAIL_LENGTH, `Email too long (max ${INPUT_LIMITS.MAX_EMAIL_LENGTH} characters)`);

/**
 * Name validation schema
 */
export const nameSchema = z
  .string()
  .min(2, 'Name must be at least 2 characters')
  .max(INPUT_LIMITS.MAX_NAME_LENGTH, `Name too long (max ${INPUT_LIMITS.MAX_NAME_LENGTH} characters)`)
  .regex(/^[a-zA-Z\s'-]+$/, 'Name contains invalid characters');

/**
 * Search query validation schema
 */
export const searchQuerySchema = z
  .string()
  .max(INPUT_LIMITS.MAX_SEARCH_LENGTH, `Search query too long (max ${INPUT_LIMITS.MAX_SEARCH_LENGTH} characters)`)
  .regex(/^[a-zA-Z0-9\s-]*$/, 'Search query contains invalid characters');

/**
 * Comment validation schema
 */
export const commentSchema = z
  .string()
  .min(1, 'Comment cannot be empty')
  .max(INPUT_LIMITS.MAX_COMMENT_LENGTH, `Comment too long (max ${INPUT_LIMITS.MAX_COMMENT_LENGTH} characters)`);

/**
 * URL validation schema
 */
export const urlSchema = z
  .string()
  .url('Invalid URL format')
  .refine(
    (url) => {
      const parsed = new URL(url);
      return parsed.protocol === 'https:' || parsed.protocol === 'http:';
    },
    { message: 'Only HTTP and HTTPS protocols are allowed' }
  );

/**
 * Contact form validation schema
 */
export const contactFormSchema = z.object({
  name: nameSchema,
  email: emailSchema,
  message: commentSchema,
});

/**
 * Newsletter subscription schema
 */
export const newsletterSchema = z.object({
  email: emailSchema,
});

/**
 * Type exports
 */
export type ContactFormData = z.infer<typeof contactFormSchema>;
export type NewsletterData = z.infer<typeof newsletterSchema>;

