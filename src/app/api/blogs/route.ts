import { supabase } from '@/lib/supabaseClient';
import { NextRequest, NextResponse } from 'next/server';

export async function GET() {
  const { data, error } = await supabase
    .from('post_full_data') // <-- use the view
    .select('*')
    .eq("publish", true);

  if (error) {
    console.error('Error fetching posts:', error.message);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  return NextResponse.json(data);
}