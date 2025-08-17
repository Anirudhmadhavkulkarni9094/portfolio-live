// src/app/all-post/[slug]/page.tsx
"use client";

import { useEffect, useState } from "react";
import { useParams, notFound, useRouter } from "next/navigation";
import Image from "next/image";
import { supabase } from "@/lib/supabaseClient";
import { MoveLeft, SendToBack, Share, Share2Icon } from "lucide-react";

type Post = {
  id: string;
  title: string;
  category: { id: string; label: string };
  tags: { id: string; label: string }[];
  featured_image: string;
  content: string;
  publish: boolean;
  slug: string;
  created_at: string;
};

export default function PostPreview() {
  const router = useRouter();
  const params = useParams();
  const slug = params.slug as string;

  const [post, setPost] = useState<Post | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchPost() {
      const { data, error } = await supabase
        .from("post_full_data")
        .select("*")
        .eq("slug", slug)
        .single<Post>();

      if (error || !data) {
        notFound(); // redirect to 404 if not found
        return;
      }

      setPost(data);
      setLoading(false);
    }

    if (slug) {
      fetchPost();
    }
  }, [slug]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center text-white">
        Loading...
      </div>
    );
  }

  if (!post) return null;

  const shareUrl = `https://anirudh-kulkarni.com/blogs/${post.slug}`;

  return (
    <div className="min-h-screen bg-[#0e0e0e] py-10 px-4 text-white">
 <button
      onClick={() => router.back()}
      className="text-white flex items-center gap-2 px-4 py-2 rounded-full bg-foreground/10 hover:bg-foreground/20 transition-colors duration-200 text-foreground"
      aria-label="Go Back"
    >
      <MoveLeft className="w-5 h-5" />
      <span className="hidden sm:inline">Go Back</span>
    </button>        {/* Header */}
      <article className="max-w-5xl mx-auto bg-[#1a1a1a] shadow-2xl rounded-3xl overflow-hidden border border-gray-800">
        <header className="p-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-2 leading-tight">
                {post.title}
              </h1>
              <div className="flex items-center justify-between gap-4 text-sm text-gray-400">
                <span>{new Date(post.created_at).toLocaleString()}</span>
                {post.category && (
                  <span className="bg-orange-500/20 text-orange-400 px-3 py-1 rounded-full text-xs font-medium border border-orange-500/50">
                    {post.category.label}
                  </span>
                )}
              </div>
            </div>

            {/* Share Button */}
            <button
            className="flex gap-2"
              onClick={async () => {
                if (navigator.share) {
                  try {
                    await navigator.share({
                      title: post.title,
                      url: shareUrl,
                    });
                  } catch (err) {
                    console.error("Share failed:", err);
                  }
                } else {
                  try {
                    await navigator.clipboard.writeText(shareUrl);
                    alert("Link copied to clipboard!");
                  } catch (err) {
                    console.error("Copy failed:", err);
                  }
                }
              }}
            >
              <Share2Icon/> Share
            </button>
          </div>
        </header>

        {/* Featured Image */}
        {post.featured_image && (
          <div className="relative aspect-video w-full">
            <Image
              src={post.featured_image}
              alt={post.title}
              fill
              className="object-cover brightness-90"
            />
          </div>
        )}

        {/* Content */}
        <section className="prose prose-lg prose-invert px-8 py-10">
          <div dangerouslySetInnerHTML={{ __html: post.content }} />
        </section>

        {/* Tags */}
        <footer className="px-8 pb-10 border-t border-gray-800">
          {post.tags?.length > 0 && (
            <div className="mt-6">
              <h3 className="text-sm text-gray-400 font-semibold mb-2">Tags:</h3>
              <div className="flex flex-wrap gap-2">
                {post.tags.map((tag) => (
                  <span
                    key={tag.id}
                    className="bg-gray-800 text-gray-300 px-3 py-1 rounded-full text-xs font-medium hover:bg-gray-700 transition"
                  >
                    #{tag.label}
                  </span>
                ))}
              </div>
            </div>
          )}

          {!post.publish && (
            <div className="mt-6 text-sm font-semibold text-yellow-400 bg-yellow-500/10 px-4 py-2 rounded-md border border-yellow-400/30">
              This post is in <strong>draft</strong> mode and not publicly visible.
            </div>
          )}
        </footer>
      </article>
    </div>
  );
}
