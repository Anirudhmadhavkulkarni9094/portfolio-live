import React from 'react';
import Image from 'next/image';

export default function ThreeCardLayout({posts}: { posts: any[] }) {
  const slicedPosts = posts.slice(0, 3);

  return (
    <div className="max-w-6xl mx-auto px-4 py-12 flex flex-col md:flex-row gap-8">
      {/* Left: Featured Post */}
      <div className="flex-1 rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition flex flex-col">
        <Image
          src={slicedPosts[0].featured_image}
          alt={slicedPosts[0].title}
          width={800}
          height={400}
          className="w-full h-64 object-cover"
        />
        <div className="p-6 flex flex-col flex-1">
          <h2 className="text-2xl font-semibold text-white mb-2">
            {slicedPosts[0].title}
          </h2>
          <p className="text-sm text-gray-400 mb-4">
            Published on: {new Date(slicedPosts[0].created_at).toLocaleDateString()}
          </p>
          <div className="mt-auto">
            <a
              href={`/blogs/${slicedPosts[0].slug}`}
              className="inline-block bg-orange-500 hover:bg-orange-600 text-white px-5 py-2 rounded-full text-sm font-medium transition"
            >
              Read Full Post →
            </a>
          </div>
        </div>
      </div>

      {/* Right: Two stacked cards */}
      <div className="flex flex-col gap-8 flex-1">
        {slicedPosts.slice(1).map((post) => (
          <div
            key={post.id}
            className=" rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition flex flex-col flex-1"
          >
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
    </div>
  );
}
