"use client";

import { useEffect, useState } from "react";
import { useParams, notFound, useRouter } from "next/navigation";
import Image from "next/image";
import { supabase } from "@/lib/supabaseClient";
import { MoveLeft, Calendar, Share2, Clock, ChevronLeft } from "lucide-react";
import Navbar from "@/components/Navbar/Navbar";
import Link from "next/link";

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

export default function ArticlePage() {
  const router = useRouter();
  const params = useParams();
  const slug = params.slug as string;

  const [post, setPost] = useState<Post | null>(null);
  const [loading, setLoading] = useState(true);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    async function fetchPost() {
      const { data, error } = await supabase
        .from("post_full_data")
        .select("*")
        .eq("slug", slug)
        .single<Post>();

      if (error || !data) {
        notFound();
        return;
      }

      setPost(data);
      setLoading(false);
    }

    if (slug) {
      fetchPost();
    }

    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (window.scrollY / totalHeight) * 100;
      setScrollProgress(progress);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [slug]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#0f172a] text-white">
        <div className="w-12 h-12 border-4 border-primary border-t-transparent rounded-full animate-spin" />
      </div>
    );
  }

  if (!post) return null;

  const shareUrl = typeof window !== 'undefined' ? `${window.location.origin}/blogs/${post.slug}` : '';

  return (
    <div className="min-h-screen bg-[#0f172a] text-white selection:bg-primary/30 selection:text-primary">
      <Navbar />
      
      {/* Scroll Progress Bar */}
      <div className="fixed top-0 left-0 w-full h-1 z-[60]">
        <div 
          className="h-full bg-primary transition-all duration-150" 
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      <main className="relative pt-32 pb-24 px-6">
        {/* Navigation & Back Button */}
        <div className="max-w-4xl mx-auto mb-12">
          <Link 
            href="/blogs"
            className="group inline-flex items-center gap-2 text-gray-500 hover:text-white font-bold uppercase tracking-widest text-xs transition-colors"
          >
            <ChevronLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            Back to Journal
          </Link>
        </div>

        <article className="max-w-4xl mx-auto">
          {/* Header Section */}
          <header className="mb-16">
            <div className="flex items-center gap-4 mb-8">
              <span className="bg-primary text-white text-[10px] font-black uppercase tracking-[0.2em] px-4 py-1.5 rounded-full">
                {post.category?.label || "Insight"}
              </span>
              <div className="flex items-center gap-2 text-gray-500 text-xs font-bold uppercase tracking-wider">
                <Calendar className="w-4 h-4" />
                {new Date(post.created_at).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
              </div>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold mb-8 leading-[1.1] tracking-tight">
              {post.title}
            </h1>

            <div className="flex flex-wrap items-center justify-between gap-6 py-8 border-y border-white/5">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-slate-800 border border-white/10 flex items-center justify-center text-primary overflow-hidden">
                  <Image src="/Profile.jpg" alt="Anirudh" width={48} height={48} />
                </div>
                <div>
                  <p className="text-white font-bold text-sm tracking-wide">Anirudh Kulkarni</p>
                  <p className="text-gray-500 text-xs font-bold uppercase tracking-widest">Full Stack Developer</p>
                </div>
              </div>
              
              <button 
                onClick={async () => {
                  if (navigator.share) {
                    await navigator.share({ title: post.title, url: shareUrl });
                  } else {
                    await navigator.clipboard.writeText(shareUrl);
                    alert("Link copied!");
                  }
                }}
                className="glass flex items-center gap-3 px-6 py-3 rounded-2xl hover:bg-white/5 transition-all group"
              >
                <Share2 className="w-4 h-4 text-gray-400 group-hover:text-primary transition-colors" />
                <span className="text-xs font-bold uppercase tracking-widest">Share Article</span>
              </button>
            </div>
          </header>

          {/* Featured Image */}
          {post.featured_image && (
            <div className="relative aspect-[16/9] rounded-[3rem] overflow-hidden mb-16 shadow-2xl border border-white/5">
              <Image
                src={post.featured_image}
                alt={post.title}
                fill
                className="object-cover"
                priority
              />
            </div>
          )}

          {/* Content Section */}
          <div className="glass rounded-[3rem] p-8 md:p-16 border-white/5">
            <section className="prose prose-lg prose-invert prose-primary max-w-none prose-headings:font-bold prose-headings:tracking-tight prose-a:text-primary prose-strong:text-white prose-img:rounded-3xl">
              <div dangerouslySetInnerHTML={{ __html: post.content }} />
            </section>

            {/* Tags Footer */}
            {post.tags?.length > 0 && (
              <div className="mt-16 pt-12 border-t border-white/5">
                <div className="flex flex-wrap gap-3">
                  {post.tags.map((tag) => (
                    <span
                      key={tag.id}
                      className="glass bg-white/5 text-gray-400 px-4 py-2 rounded-xl text-xs font-bold uppercase tracking-widest hover:text-white transition-colors border-white/5"
                    >
                      #{tag.label}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Draft Warning */}
          {!post.publish && (
            <div className="mt-12 flex items-center gap-4 bg-amber-500/10 border border-amber-500/20 p-6 rounded-[2rem] text-amber-500">
              <div className="w-10 h-10 rounded-full bg-amber-500/20 flex items-center justify-center flex-shrink-0">
                <Clock className="w-5 h-5" />
              </div>
              <div>
                <p className="font-bold uppercase tracking-widest text-xs mb-1">Draft Mode</p>
                <p className="text-sm opacity-80">This post is currently in draft mode and not publicly visible.</p>
              </div>
            </div>
          )}
        </article>
      </main>

      {/* Footer */}
      <footer className="py-24 border-t border-white/5 text-center">
        <p className="text-gray-500 text-sm font-medium">© {new Date().getFullYear()} Anirudh Kulkarni. All rights reserved.</p>
      </footer>
    </div>
  );
}
