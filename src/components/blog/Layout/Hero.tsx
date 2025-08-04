import React from 'react'
import FeaturedPost from '../FeaturedPost/FeaturedPost'
import PostCard from '../FeaturedPost/PostCard'
import AuthorPage from '../Author/AuthorPage'
function Hero({post}: { post: any[] }) {
  return (
<div className="flex flex-col lg:flex-row gap-10 mb-16">
  {/* Left: Author Profile */}
  <div className="lg:w-1/5 w-full flex justify-center">
    <AuthorPage/>
  </div>

  {/* Center: Featured Post (60%) */}
  <div className="lg:w-3/5 w-full">
    <FeaturedPost post={post[0]} />
  </div>

  {/* Right: Editor's Pick */}
  <div className="lg:w-1/5 w-full">
    <h2 className="text-xl font-semibold mb-4 text-gray-300">My Picks</h2>
    <div className="flex flex-col gap-4">
      {post.slice(1, 4).map((p) => (
        <PostCard key={p.id} post={p} />
      ))}
    </div>
  </div>
</div>  )
}

export default Hero