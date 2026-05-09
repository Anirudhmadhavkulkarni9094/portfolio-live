"use client";

import { useEffect, useState } from "react";
import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import { MoveRight, Calendar, Tag, ChevronRight, Search } from "lucide-react";
import Navbar from "@/components/Navbar/Navbar";

export default function BlogListingPage() {
  const [posts, setPosts] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get("/api/blogs")
      .then((res) => {
        setPosts(res.data || []);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setPosts([]);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#0f172a] text-white">
        <div className="flex flex-col items-center gap-4">
          <div className="w-12 h-12 border-4 border-primary border-t-transparent rounded-full animate-spin" />
          <p className="text-gray-400 font-bold uppercase tracking-widest text-xs">Loading Insights...</p>
        </div>
      </div>
    );
  }

  const featuredPost = posts[0];
  const remainingPosts = posts.slice(1);

  return (
    <div className="min-h-screen bg-[#0f172a]">
      <Navbar />
      
      <main className="relative z-10 max-w-7xl mx-auto px-6 py-24">
        {/* Header Section */}
        <div className="text-center mb-24">
          <h2 className="text-primary font-bold tracking-widest uppercase text-sm mb-4">Journal</h2>
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-8 tracking-tight">
            Digital <span className="text-gradient">Perspectives</span>
          </h1>
          <p className="text-gray-400 max-w-2xl mx-auto text-xl leading-relaxed">
            Exploring the intersection of design, engineering, and digital growth.
          </p>
        </div>

        {/* Featured Post */}
        {featuredPost && (
          <section className="mb-24">
            <Link href={`/blogs/${featuredPost.slug}`} className="group relative block">
              <div className="glass rounded-[3rem] overflow-hidden grid grid-cols-1 lg:grid-cols-2 gap-0 lg:gap-8 items-center border-white/5 hover:border-primary/20 transition-all duration-700 shadow-2xl">
                <div className="relative h-64 lg:h-[500px] overflow-hidden">
                  <Image
                    src={featuredPost.featured_image}
                    alt={featuredPost.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-1000"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-[#0f172a] to-transparent opacity-60 lg:block hidden" />
                </div>
                <div className="p-8 lg:p-16">
                  <div className="flex items-center gap-4 mb-6">
                    <span className="bg-primary text-white text-[10px] font-black uppercase tracking-[0.2em] px-4 py-1.5 rounded-full">
                      {featuredPost.category?.label || "Insight"}
                    </span>
                    <div className="flex items-center gap-2 text-gray-500 text-xs font-bold uppercase tracking-wider">
                      <Calendar className="w-4 h-4" />
                      {new Date(featuredPost.created_at).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
                    </div>
                  </div>
                  <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 group-hover:text-primary transition-colors leading-tight">
                    {featuredPost.title}
                  </h2>
                  <p className="text-gray-400 text-lg mb-10 line-clamp-3 leading-relaxed">
                    {featuredPost.content.replace(/<[^>]*>/g, '').slice(0, 200)}...
                  </p>
                  <div className="flex items-center gap-2 text-white font-bold uppercase tracking-widest text-sm">
                    Read Article <MoveRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
                  </div>
                </div>
              </div>
            </Link>
          </section>
        )}

        {/* Post Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {remainingPosts.map((post) => (
            <Link key={post.id} href={`/blogs/${post.slug}`} className="group flex flex-col">
              <div className="glass flex flex-col h-full rounded-[2.5rem] overflow-hidden border-white/5 hover:border-primary/20 transition-all duration-500 hover:-translate-y-3">
                <div className="relative h-56 overflow-hidden">
                  <Image
                    src={post.featured_image}
                    alt={post.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="glass bg-black/50 text-white text-[9px] font-black uppercase tracking-[0.2em] px-3 py-1.5 rounded-full border-white/10">
                      {post.category?.label || "Insight"}
                    </span>
                  </div>
                </div>
                <div className="p-8 flex flex-col flex-1">
                  <div className="flex items-center gap-2 text-gray-500 text-[10px] font-bold uppercase tracking-[0.1em] mb-4">
                    <Calendar className="w-3.5 h-3.5" />
                    {new Date(post.created_at).toLocaleDateString()}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4 group-hover:text-primary transition-colors leading-tight line-clamp-2">
                    {post.title}
                  </h3>
                  <div className="mt-auto pt-6 border-t border-white/5 flex items-center justify-between">
                    <div className="flex gap-2">
                      {post.tags?.slice(0, 1).map((tag: any) => (
                        <span key={tag.id} className="text-[10px] text-gray-500 font-bold uppercase tracking-widest">
                          #{tag.label}
                        </span>
                      ))}
                    </div>
                    <div className="text-white">
                      <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {posts.length === 0 && (
          <div className="text-center py-20 glass rounded-[3rem] border-white/5">
            <Search className="w-12 h-12 text-gray-700 mx-auto mb-6" />
            <p className="text-gray-400 font-bold uppercase tracking-widest text-sm">No articles found yet.</p>
          </div>
        )}
      </main>

      <footer className="py-24 border-t border-white/5 text-center">
        <p className="text-gray-500 text-sm font-medium">© {new Date().getFullYear()} Anirudh Kulkarni. All rights reserved.</p>
      </footer>
    </div>
  );
}
