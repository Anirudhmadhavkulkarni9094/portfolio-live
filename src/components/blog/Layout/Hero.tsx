import FeaturedPost from "../FeaturedPost/FeaturedPost";
import PostCard from "../FeaturedPost/PostCard";
import AuthorPage from "../Author/AuthorPage";
import type { BlogPost } from "../types";

function Hero({ post }: { post: BlogPost[] }) {
  return (
    <div className="grid gap-5 lg:grid-cols-[minmax(0,1.8fr)_minmax(17rem,0.8fr)]">
      <FeaturedPost post={post[0]} />
      <aside className="flex flex-col gap-5">
        <AuthorPage articleCount={post.length} />
        {post.length > 1 && (
          <div className="rounded-3xl border border-white/[0.08] bg-white/[0.025] p-5 sm:p-6">
            <div className="mb-4 flex items-center justify-between">
              <h2 className="text-sm font-semibold text-white">More to explore</h2>
              <span className="text-xs text-stone-500">LATEST</span>
            </div>
            <div className="space-y-4">
              {post.slice(1, 4).map((article) => (
                <PostCard key={article.id} post={article} compact />
              ))}
            </div>
          </div>
        )}
      </aside>
    </div>
  );
}

export default Hero;