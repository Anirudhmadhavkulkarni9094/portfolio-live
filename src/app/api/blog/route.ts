// app/api/proxy/category/route.ts

import { NextResponse } from 'next/server';

export async function GET() {
  try {
    const response = await fetch('https://custom-cms-next.vercel.app/api/posts/category');

    if (!response.ok) {
      return NextResponse.json(
        { message: 'Failed to fetch categories', status: response.status },
        { status: response.status }
      );
    }

    const data = await response.json();
    return NextResponse.json(data);
  } catch (error: any) {
    console.error('Proxy Error:', error);
    return NextResponse.json(
      { message: 'Internal Server Error', error: error.message },
      { status: 500 }
    );
  }
}
