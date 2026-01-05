/**
 * Example: Secure form component dengan validation
 * @format
 */

'use client';

import { useState, FormEvent } from 'react';
import { sanitizeString, isValidEmail } from '@/lib/sanitize';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

interface FormData {
  name: string;
  email: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  message?: string;
}

export default function SecureForm() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    message: '',
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  /**
   * Validate form data
   */
  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    // Validate name
    const cleanName = sanitizeString(formData.name);
    if (!cleanName || cleanName.length < 2) {
      newErrors.name = 'Name must be at least 2 characters';
    } else if (cleanName.length > 50) {
      newErrors.name = 'Name is too long';
    }

    // Validate email
    if (!isValidEmail(formData.email)) {
      newErrors.email = 'Invalid email address';
    }

    // Validate message
    const cleanMessage = sanitizeString(formData.message);
    if (!cleanMessage || cleanMessage.length < 10) {
      newErrors.message = 'Message must be at least 10 characters';
    } else if (cleanMessage.length > 500) {
      newErrors.message = 'Message is too long';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  /**
   * Handle form submission
   */
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    // Validate
    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      // Sanitize data before sending
      const sanitizedData = {
        name: sanitizeString(formData.name),
        email: formData.email.trim(),
        message: sanitizeString(formData.message),
      };

      // Submit to API
      const response = await fetch('/api/example', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(sanitizedData),
      });

      if (!response.ok) {
        throw new Error('Submission failed');
      }

      // Success
      setSubmitStatus('success');
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      console.error('Form submission error:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  /**
   * Handle input change
   */
  const handleChange = (field: keyof FormData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    // Clear error when user starts typing
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: undefined }));
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 max-w-md mx-auto p-6">
      <div>
        <Label htmlFor="name">Name</Label>
        <Input
          id="name"
          type="text"
          value={formData.name}
          onChange={(e) => handleChange('name', e.target.value)}
          maxLength={50}
          required
          disabled={isSubmitting}
          aria-invalid={!!errors.name}
          aria-describedby={errors.name ? 'name-error' : undefined}
        />
        {errors.name && (
          <p id="name-error" className="text-red-500 text-sm mt-1">
            {errors.name}
          </p>
        )}
      </div>

      <div>
        <Label htmlFor="email">Email</Label>
        <Input
          id="email"
          type="email"
          value={formData.email}
          onChange={(e) => handleChange('email', e.target.value)}
          maxLength={100}
          required
          disabled={isSubmitting}
          aria-invalid={!!errors.email}
          aria-describedby={errors.email ? 'email-error' : undefined}
        />
        {errors.email && (
          <p id="email-error" className="text-red-500 text-sm mt-1">
            {errors.email}
          </p>
        )}
      </div>

      <div>
        <Label htmlFor="message">Message</Label>
        <textarea
          id="message"
          value={formData.message}
          onChange={(e) => handleChange('message', e.target.value)}
          maxLength={500}
          rows={4}
          required
          disabled={isSubmitting}
          aria-invalid={!!errors.message}
          aria-describedby={errors.message ? 'message-error' : undefined}
          className="w-full px-3 py-2 border rounded-md"
        />
        {errors.message && (
          <p id="message-error" className="text-red-500 text-sm mt-1">
            {errors.message}
          </p>
        )}
      </div>

      <Button type="submit" disabled={isSubmitting} className="w-full">
        {isSubmitting ? 'Submitting...' : 'Submit'}
      </Button>

      {submitStatus === 'success' && (
        <p className="text-green-500 text-center">Form submitted successfully!</p>
      )}
      {submitStatus === 'error' && (
        <p className="text-red-500 text-center">Submission failed. Please try again.</p>
      )}
    </form>
  );
}

