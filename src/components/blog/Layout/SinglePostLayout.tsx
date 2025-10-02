import React from "react";
import Image from "next/image";

export default function SinglepostsLayout({ posts }: { posts: any }) {
  console.log("Single Post:", posts);
    return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      {/* Featured Image */}
      {posts.featured_image && (
        <div className="rounded-2xl overflow-hidden shadow-lg mb-8">
          <Image
            src={posts.featured_image}
            alt={posts.title}
            width={1200}
            height={600}
            className="w-full h-96 object-cover"
          />
        </div>
      )}

      {/* Title & Meta */}
      <h1 className="text-4xl font-bold text-white mb-4">{posts.title}</h1>
      <p className="text-sm text-gray-400 mb-8">
        Published on: {new Date(posts.created_at).toLocaleDateString()}
      </p>
<div className="mt-auto">
            <a
              href={`/blogs/${posts.slug}`}
              className="inline-block bg-orange-500 hover:bg-orange-600 text-white px-5 py-2 rounded-full text-sm font-medium transition"
            >
              Read Full Post →
            </a>
          </div>
    </div>
  );
}
