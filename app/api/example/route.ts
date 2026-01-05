/**
 * Example API route dengan security best practices
 * @format
 */

import { NextRequest, NextResponse } from 'next/server';
import { sanitizeObject } from '@/lib/sanitize';

// Allowed HTTP methods
const ALLOWED_METHODS = ['GET', 'POST'];

/**
 * GET handler
 */
export async function GET(request: NextRequest) {
  try {
    // Get query parameters
    const searchParams = request.nextUrl.searchParams;
    const query = searchParams.get('query');

    // Validate input
    if (query && query.length > 100) {
      return NextResponse.json(
        { error: 'Query too long' },
        { status: 400 }
      );
    }

    // Your logic here
    const data = {
      message: 'Success',
      query: query || null,
    };

    return NextResponse.json(data, {
      status: 200,
      headers: {
        'Cache-Control': 'public, s-maxage=60, stale-while-revalidate=30',
      },
    });
  } catch (error) {
    // Don't leak error details to client
    console.error('API Error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

/**
 * POST handler
 */
export async function POST(request: NextRequest) {
  try {
    // Parse and validate content type
    const contentType = request.headers.get('content-type');
    if (!contentType?.includes('application/json')) {
      return NextResponse.json(
        { error: 'Content-Type must be application/json' },
        { status: 415 }
      );
    }

    // Parse body with size limit check
    const body = await request.json();

    // Sanitize input
    const sanitizedBody = sanitizeObject(body);

    // Validate required fields
    if (!sanitizedBody.name || !sanitizedBody.email) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Your logic here
    const result = {
      message: 'Data received',
      data: sanitizedBody,
    };

    return NextResponse.json(result, { status: 201 });
  } catch (error) {
    console.error('API Error:', error);
    
    // Handle specific errors
    if (error instanceof SyntaxError) {
      return NextResponse.json(
        { error: 'Invalid JSON' },
        { status: 400 }
      );
    }

    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

/**
 * Handle unsupported methods
 */
export async function OPTIONS() {
  return new NextResponse(null, {
    status: 204,
    headers: {
      'Allow': ALLOWED_METHODS.join(', '),
    },
  });
}

