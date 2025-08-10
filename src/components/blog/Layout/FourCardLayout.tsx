import React from 'react';
import Image from 'next/image';

export default function FourCardLayout({ posts }: { posts: any[] }) {
  const slicedPosts = posts.slice(0, 4);

  return (
    <div className="max-w-7xl mx-auto px-4 py-12 grid grid-cols-1 sm:grid-cols-2 gap-8">
      {slicedPosts.map((post) => (
        <div
          key={post.id}
          className=" rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition flex flex-col"
        >
          <Image
            src={post.featured_image}
            alt={post.title}
            width={800}
            height={400}
            className="w-full h-52 object-cover"
          />
          <div className="p-6 flex flex-col flex-1">
            <h2 className="text-xl font-semibold text-white mb-2">{post.title}</h2>
            <p className="text-sm text-gray-400 mb-4">
              Published on: {new Date(post.created_at).toLocaleDateString()}
            </p>
            <div className="mt-auto">
              <a
                href={`/blogs/${post.slug}`}
                className="inline-block bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-full text-sm font-medium transition"
              >
                Read Full Post →
              </a>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
