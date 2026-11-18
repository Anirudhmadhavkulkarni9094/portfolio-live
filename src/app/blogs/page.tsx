"use client";

import Link from "next/link";
import { ArrowLeft, ArrowUpRight, BookOpen, RotateCw, Search, X } from "lucide-react";
import { useEffect, useMemo, useState } from "react";
import Hero from "@/components/blog/Layout/Hero";
import PostCard from "@/components/blog/FeaturedPost/PostCard";
import type { BlogPost } from "@/components/blog/types";

export default function Page() {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [retryCount, setRetryCount] = useState(0);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [sortOrder, setSortOrder] = useState<"newest" | "oldest">("newest");

  useEffect(() => {
    const controller = new AbortController();

    async function fetchPosts() {
      setIsLoading(true);
      setError(null);

      try {
        const response = await fetch("/api/blogs", { signal: controller.signal });
        if (!response.ok) {
          throw new Error("We couldn't load the articles. Please try again.");
        }

        const data: unknown = await response.json();
        if (!Array.isArray(data)) {
          throw new Error("The article list returned an unexpected response.");
        }

        setPosts(data as BlogPost[]);
      } catch (fetchError) {
        if (controller.signal.aborted) return;
        setError(
          fetchError instanceof Error
            ? fetchError.message
            : "Something went wrong while loading the articles."
        );
      } finally {
        if (!controller.signal.aborted) setIsLoading(false);
      }
    }

    void fetchPosts();
    return () => controller.abort();
  }, [retryCount]);

  const categories = useMemo(() => {
    const groups = new Map<string, { label: string; posts: BlogPost[] }>();

    for (const post of posts) {
      const key = post.category?.id ?? "uncategorized";
      const group = groups.get(key);
      if (group) {
        group.posts.push(post);
      } else {
        groups.set(key, {
          label: post.category?.label ?? "More articles",
          posts: [post],
        });
      }
    }

    return Array.from(groups.entries()).map(([key, group], index) => ({
      key,
      id: `category-${index}`,
      ...group,
    }));
  }, [posts]);

  const filteredCategories = useMemo(() => {
    const query = searchQuery.trim().toLocaleLowerCase();

    return categories
      .filter((category) => selectedCategory === "all" || category.key === selectedCategory)
      .map((category) => ({
        ...category,
        posts: category.posts
          .filter((post) => {
            if (!query) return true;
            const searchableText = [
              post.title,
              post.excerpt,
              post.category?.label,
              ...(post.tags ?? []).map((tag) => tag.label),
            ]
              .filter(Boolean)
              .join(" ")
              .toLocaleLowerCase();

            return searchableText.includes(query);
          })
          .sort((a, b) => {
            const aDate = a.created_at ? new Date(a.created_at).getTime() : 0;
            const bDate = b.created_at ? new Date(b.created_at).getTime() : 0;
            return sortOrder === "newest" ? bDate - aDate : aDate - bDate;
          }),
      }))
      .filter((category) => category.posts.length > 0);
  }, [categories, searchQuery, selectedCategory, sortOrder]);

  const visiblePostCount = filteredCategories.reduce(
    (count, category) => count + category.posts.length,
    0
  );

  return (
    <main className="min-h-screen overflow-hidden bg-[#11100F] text-[#F5F1EC]">
      <div className="pointer-events-none absolute inset-x-0 top-0 -z-0 h-[34rem] bg-[radial-gradient(ellipse_at_top,rgba(255,145,77,0.12),transparent_65%)]" />
      <div className="relative">
        <header className="border-b border-white/[0.07]">
          <nav
            aria-label="Main navigation"
            className="mx-auto flex max-w-7xl items-center justify-between px-5 py-5 sm:px-8"
          >
            <Link href="/" className="group flex items-center gap-3" aria-label="Anirudh Kulkarni home">
              <span className="grid size-10 place-items-center rounded-xl border border-orange-300/20 bg-orange-300/10 text-sm font-bold tracking-wide text-orange-200">
                AK
              </span>
              <span className="text-sm font-semibold tracking-wide text-white">
                ANIRUDH KULKARNI
                <span className="ml-2 hidden font-normal text-stone-500 sm:inline">/ JOURNAL</span>
              </span>
            </Link>
            <Link
              href="/"
              className="inline-flex items-center gap-2 rounded-full border border-white/10 px-4 py-2 text-sm text-stone-300 transition hover:border-orange-300/40 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-orange-300"
            >
              <ArrowLeft size={15} aria-hidden="true" />
              Portfolio
            </Link>
          </nav>
        </header>

        <section className="mx-auto max-w-7xl px-5 pb-10 pt-16 sm:px-8 sm:pt-24">
          <div className="max-w-3xl">
            <p className="mb-5 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.24em] text-orange-300">
              <span className="h-px w-8 bg-orange-300" />
              Notes from the journey
            </p>
            <h1 className="max-w-2xl text-4xl font-semibold leading-[1.08] tracking-tight text-white sm:text-6xl">
              Ideas, lessons
              <br className="hidden sm:block" /> &amp; things I&apos;m{" "}
              <span className="font-serif italic text-orange-300">learning.</span>
            </h1>
            <p className="mt-6 max-w-xl text-base leading-7 text-stone-400 sm:text-lg">
              Thoughts on building for the web, exploring technology, and the lessons worth sharing along the way.
            </p>
          </div>

          {categories.length > 0 && (
            <nav aria-label="Article categories" className="mt-10 flex flex-wrap gap-2">
              {categories.map((category) => (
                <a
                  key={category.key}
                  href={`#${category.id}`}
                  className="rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-sm text-stone-300 transition hover:border-orange-300/40 hover:bg-orange-300/10 hover:text-orange-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-300"
                >
                  {category.label}
                  <span className="ml-2 text-xs text-stone-500">{category.posts.length}</span>
                </a>
              ))}
            </nav>
          )}
        </section>

        {isLoading ? (
          <section aria-label="Loading articles" className="mx-auto max-w-7xl px-5 pb-16 sm:px-8">
            <div className="grid gap-5 lg:grid-cols-[1.7fr_0.8fr]">
              <div className="h-[26rem] animate-pulse rounded-3xl border border-white/[0.06] bg-white/[0.04]" />
              <div className="h-[26rem] animate-pulse rounded-3xl border border-white/[0.06] bg-white/[0.04]" />
            </div>
          </section>
        ) : error ? (
          <section className="mx-auto max-w-7xl px-5 pb-16 sm:px-8">
            <div role="alert" className="rounded-3xl border border-red-300/20 bg-red-300/[0.06] px-6 py-10 text-center">
              <p className="text-lg font-medium text-white">Articles are taking a break.</p>
              <p className="mx-auto mt-2 max-w-lg text-sm leading-6 text-stone-400">{error}</p>
              <button
                type="button"
                onClick={() => setRetryCount((count) => count + 1)}
                className="mt-6 inline-flex items-center gap-2 rounded-full bg-orange-300 px-5 py-2.5 text-sm font-semibold text-[#21160F] transition hover:bg-orange-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-200"
              >
                <RotateCw size={15} aria-hidden="true" />
                Try again
              </button>
            </div>
          </section>
        ) : posts.length === 0 ? (
          <section className="mx-auto max-w-7xl px-5 pb-16 sm:px-8">
            <div className="rounded-3xl border border-white/[0.07] bg-white/[0.025] px-6 py-16 text-center">
              <BookOpen className="mx-auto text-orange-300" size={28} aria-hidden="true" />
              <h2 className="mt-4 text-xl font-semibold text-white">The first story is on its way.</h2>
              <p className="mt-2 text-sm text-stone-400">Check back soon for new notes and articles.</p>
            </div>
          </section>
        ) : (
          <>
            <section aria-label="Featured articles" className="mx-auto max-w-7xl px-5 pb-16 sm:px-8">
              <Hero post={posts} />
            </section>

            <div className="mx-auto max-w-7xl px-5 pb-24 sm:px-8">
              <section aria-labelledby="browse-articles" className="border-t border-white/[0.08] py-10 sm:py-12">
                <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
                  <div>
                    <p className="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-orange-300">
                      Find something interesting
                    </p>
                    <h2 id="browse-articles" className="text-2xl font-semibold tracking-tight text-white sm:text-3xl">
                      Browse all articles
                    </h2>
                  </div>
                  <div className="flex flex-col gap-3 sm:flex-row">
                    <div className="relative block sm:w-80">
                      <Search
                        size={17}
                        aria-hidden="true"
                        className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-stone-500"
                      />
                      <label className="sr-only" htmlFor="article-search">Search articles</label>
                      <input
                        id="article-search"
                        type="search"
                        value={searchQuery}
                        onChange={(event) => setSearchQuery(event.target.value)}
                        placeholder="Search articles or topics..."
                        className="h-11 w-full rounded-full border border-white/10 bg-white/[0.035] py-2 pl-11 pr-10 text-sm text-white outline-none transition placeholder:text-stone-500 focus:border-orange-300/50 focus:ring-2 focus:ring-orange-300/15"
                      />
                      {searchQuery && (
                        <button
                          type="button"
                          aria-label="Clear search"
                          onClick={() => setSearchQuery("")}
                          className="absolute right-3 top-1/2 grid size-6 -translate-y-1/2 place-items-center rounded-full text-stone-400 transition hover:bg-white/10 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-orange-300"
                        >
                          <X size={14} aria-hidden="true" />
                        </button>
                      )}
                    </div>
                    <label className="sr-only" htmlFor="article-sort">Sort articles</label>
                    <select
                      id="article-sort"
                      value={sortOrder}
                      onChange={(event) => setSortOrder(event.target.value as "newest" | "oldest")}
                      className="h-11 rounded-full border border-white/10 bg-[#191716] px-4 text-sm text-stone-300 outline-none transition focus:border-orange-300/50 focus:ring-2 focus:ring-orange-300/15"
                    >
                      <option value="newest">Newest first</option>
                      <option value="oldest">Oldest first</option>
                    </select>
                  </div>
                </div>

                <div className="mt-6 flex flex-wrap gap-2" role="group" aria-label="Filter by category">
                  <button
                    type="button"
                    aria-pressed={selectedCategory === "all"}
                    onClick={() => setSelectedCategory("all")}
                    className={`rounded-full border px-4 py-2 text-sm transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-300 ${
                      selectedCategory === "all"
                        ? "border-orange-200/40 bg-orange-300/15 text-orange-100"
                        : "border-white/10 bg-white/[0.025] text-stone-400 hover:border-white/20 hover:text-white"
                    }`}
                  >
                    All topics
                    <span className="ml-2 text-xs opacity-70">{posts.length}</span>
                  </button>
                  {categories.map((category) => (
                    <button
                      key={category.key}
                      type="button"
                      aria-pressed={selectedCategory === category.key}
                      onClick={() => setSelectedCategory(category.key)}
                      className={`rounded-full border px-4 py-2 text-sm transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-300 ${
                        selectedCategory === category.key
                          ? "border-orange-200/40 bg-orange-300/15 text-orange-100"
                          : "border-white/10 bg-white/[0.025] text-stone-400 hover:border-white/20 hover:text-white"
                      }`}
                    >
                      {category.label}
                      <span className="ml-2 text-xs opacity-70">{category.posts.length}</span>
                    </button>
                  ))}
                </div>
                <p className="mt-4 text-xs text-stone-500" aria-live="polite">
                  Showing {visiblePostCount} of {posts.length} {posts.length === 1 ? "article" : "articles"}
                </p>
              </section>

              {filteredCategories.length === 0 ? (
                <div className="rounded-2xl border border-white/[0.08] bg-white/[0.025] px-6 py-14 text-center">
                  <Search className="mx-auto text-orange-300" size={24} aria-hidden="true" />
                  <h3 className="mt-4 text-lg font-semibold text-white">No articles found</h3>
                  <p className="mt-2 text-sm text-stone-400">
                    Try another search term or choose a different topic.
                  </p>
                  <button
                    type="button"
                    onClick={() => {
                      setSearchQuery("");
                      setSelectedCategory("all");
                    }}
                    className="mt-5 text-sm font-medium text-orange-200 underline decoration-orange-200/30 underline-offset-4 transition hover:text-orange-100"
                  >
                    Clear filters
                  </button>
                </div>
              ) : filteredCategories.map((category, index) => (
                <section
                  key={category.key}
                  id={category.id}
                  className="scroll-mt-8 border-t border-white/[0.08] py-12 sm:py-16"
                >
                  <div className="mb-7 flex flex-wrap items-end justify-between gap-4">
                    <div>
                      <p className="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-orange-300">
                        Collection {String(index + 1).padStart(2, "0")}
                      </p>
                      <h2 className="text-2xl font-semibold tracking-tight text-white sm:text-3xl">
                        {category.label}
                      </h2>
                    </div>
                    <span className="text-sm text-stone-500">
                      {category.posts.length} {category.posts.length === 1 ? "article" : "articles"}
                    </span>
                  </div>
                  <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                    {category.posts.map((post) => (
                      <PostCard key={post.id} post={post} />
                    ))}
                  </div>
                </section>
              ))}
            </div>
          </>
        )}

        <footer className="border-t border-white/[0.07]">
          <div className="mx-auto flex max-w-7xl flex-col gap-3 px-5 py-8 text-sm text-stone-500 sm:flex-row sm:items-center sm:justify-between sm:px-8">
            <p>© {new Date().getFullYear()} Anirudh Kulkarni</p>
            <Link href="/" className="inline-flex items-center gap-1 transition hover:text-orange-200">
              Back to portfolio <ArrowUpRight size={14} aria-hidden="true" />
            </Link>
          </div>
        </footer>
      </div>
    </main>
  );
}
