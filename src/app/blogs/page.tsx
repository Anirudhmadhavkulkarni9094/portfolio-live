"use client";

import TwoCardLayout from "@/components/blog/Layout/TwoCardLayout";
import ThreeCardLayout from "@/components/blog/Layout/ThreeCardLayout";
import FourCardLayout from "@/components/blog/Layout/FourCardLayout";
import Hero from "@/components/blog/Layout/Hero";
import { useEffect, useState } from "react";
import axios from "axios";

export default function Page() {
  const [posts, setPosts] = useState<any[]>([]);

  useEffect(() => {
    axios
      .get("/api/blogs")
      .then((res) => {
        console.log(res.data);
        setPosts(res.data || []);
      })
      .catch((err) => {
        console.error(err);
        setPosts([]);
      });
  }, []); // ✅ run only once on mount

  // Group posts by category.id
  const categorizedPosts: Record<string, any[]> = {};
  posts.forEach((p: any) => {
    const key = p.category?.id || "uncategorized";
    if (!categorizedPosts[key]) categorizedPosts[key] = [];
    categorizedPosts[key].push(p);
  });

  return (
    <main className="min-h-screen px-4 py-10 space-y-16">
      {/* Top Section: Hero Banner */}
      {posts.length > 0 && <Hero post={posts} />}
      {/* Categorized Sections */}
      {Object.entries(categorizedPosts).map(([categoryId, posts]) => {
        const categoryLabel = posts[0]?.category?.label || categoryId;

        return (
          <section key={categoryId}>
            <h2 className="text-3xl hover:underline font-bold mb-6 capitalize text-orange-500 text-center">
              {categoryLabel}
            </h2>

            {posts.length === 2 && <TwoCardLayout posts={posts} />}
            {posts.length === 3 && <ThreeCardLayout posts={posts} />}
            {posts.length >= 4 && <FourCardLayout posts={posts.slice(0, 4)} />}
            {posts.length === 1 && (
              <div className="max-w-xl mx-auto">
                <TwoCardLayout posts={posts} /> {/* reuse layout for single */}
              </div>
            )}
          </section>
        );
      })}
    </main>
  );
}
