import { supabase } from "@/lib/supabaseClient";
import type { Post } from "@/components/blog/PostClient";
import type { BlogPost } from "@/components/blog/types";

export async function getPublishedPosts(): Promise<BlogPost[] | null> {
  const { data, error } = await supabase
    .from("post_full_data")
    .select("*")
    .eq("publish", true);
  if (error || !Array.isArray(data)) return null;
  return data as BlogPost[];
}

export async function getPostBySlug(slug: string): Promise<Post | null> {
  const { data, error } = await supabase
    .from("post_full_data")
    .select("*")
    .eq("slug", slug)
    .eq("publish", true)
    .maybeSingle<Post>();
  if (error) return null;
  return data;
}

export function plainText(html: string, max = 160) {
  const text = html
    .replace(/<[^>]*>/g, " ")
    .replace(/&nbsp;/g, " ")
    .replace(/&amp;/g, "&")
    .replace(/\s+/g, " ")
    .trim();
  return text.length > max ? `${text.slice(0, max - 1).trimEnd()}…` : text;
}
