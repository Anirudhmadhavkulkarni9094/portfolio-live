import React from 'react';

function TwoCardLayout({posts}: { posts: any[] }) {
  const twoPost = posts.slice(0, 2);

  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {twoPost.map((post: any) => (
          <div
            key={post.id}
            className=" rounded-2xl shadow-md overflow-hidden transition hover:shadow-lg"
          >
            <img
              src={post.featured_image}
              alt={post.title}
              className="w-full h-56 object-cover"
            />
            <div className="p-6">
              <h2 className="text-2xl font-semibold text-white mb-2">
                {post.title}
              </h2>
              <p className="text-sm text-gray-500 mb-4">
                Published on: {new Date(post.created_at).toLocaleDateString()}
              </p>
              <a
                href={`/blogs/${post.slug}`}
                className="inline-block bg-orange-500 hover:bg-orange-600 text-white px-5 py-2 rounded-full text-sm font-medium transition"
              >
                Read Full Post →
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TwoCardLayout;
