import post from "./mockdata.json";
import TwoCardLayout from "@/components/blog/Layout/TwoCardLayout";
import ThreeCardLayout from "@/components/blog/Layout/ThreeCardLayout";
import FourCardLayout from "@/components/blog/Layout/FourCardLayout";
import Hero from "@/components/blog/Layout/Hero";

export default function Page() {
  // Group posts by category.id
  const categorizedPosts: Record<string, any[]> = {};
  post.forEach((p) => {
    const key = p.category?.id || "uncategorized";
    if (!categorizedPosts[key]) categorizedPosts[key] = [];
    categorizedPosts[key].push(p);
  });

  return (
    <main className="min-h-screen px-4 py-10 space-y-16">
      {/* Top Section: Hero Banner */}
      <Hero post={post} />

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
          </section>
        );
      })}
    </main>
  );
}
