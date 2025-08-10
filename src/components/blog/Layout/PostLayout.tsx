import React from 'react'

function PostLayout() {
  return (
    <div>
      <div className="max-w-3xl mx-auto px-4 py-10">
        <h1 className="text-4xl font-bold text-white mb-6">Blog Post Title</h1>
        <p className="text-gray-400 mb-4">Published on: July 27, 2025</p>
        <img
          src="https://ikkojorhyczyrmuabuzm.supabase.co/storage/v1/object/public/post-images/ai-cofounder-startup.jpg"
          alt="Featured Image"
          className="w-full h-auto rounded-lg mb-6"
        />
        <p className="text-white mb-6">
          AI co-founders are revolutionizing startups by autonomously ideating, prototyping, and scaling businesses with minimal human input.
        </p>
        <a
          href="/blogs/ai-cofounder-startup"
          className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-full font-medium transition"
        >
          Read Full Post →
        </a>
      </div>
    </div>
  )
}

export default PostLayout