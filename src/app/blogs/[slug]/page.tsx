"use client";

import { useEffect, useState } from "react";
import { notFound, useParams } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { supabase } from "@/lib/supabaseClient";
import {
  ArrowLeft,
  ArrowUpRight,
  CalendarDays,
  Check,
  Clock3,
  Copy,
  Share2,
} from "lucide-react";

type Post = {
  id: string;
  title: string;
  category: { id: string; label: string } | null;
  tags: { id: string; label: string }[] | null;
  featured_image: string | null;
  content: string;
  publish: boolean;
  slug: string;
  created_at: string;
};

function formatDate(value: string) {
  const date = new Date(value);
  return Number.isNaN(date.getTime())
    ? null
    : new Intl.DateTimeFormat("en", {
        month: "long",
        day: "numeric",
        year: "numeric",
      }).format(date);
}

function estimateReadingTime(content: string) {
  const text = content.replace(/<[^>]*>/g, " ").replace(/&nbsp;/g, " ");
  const wordCount = text.trim().split(/\s+/).filter(Boolean).length;
  return Math.max(1, Math.ceil(wordCount / 220));
}

export default function BlogPostPage() {
  const params = useParams<{ slug: string }>();
  const slug = params.slug;
  const [post, setPost] = useState<Post | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [notFoundPost, setNotFoundPost] = useState(false);
  const [loadError, setLoadError] = useState<string | null>(null);
  const [shareMessage, setShareMessage] = useState("");

  useEffect(() => {
    let isActive = true;

    async function fetchPost() {
      setIsLoading(true);
      setNotFoundPost(false);
      setLoadError(null);
      setPost(null);

      const { data, error } = await supabase
        .from("post_full_data")
        .select("*")
        .eq("slug", slug)
        .single<Post>();

      if (!isActive) return;

      if (error) {
        if (error.code === "PGRST116") {
          setNotFoundPost(true);
        } else {
          console.error("Error fetching blog post:", error.message);
          setLoadError("We couldn’t load this article. Please try again.");
        }
        setIsLoading(false);
        return;
      }

      if (!data) {
        setNotFoundPost(true);
        setIsLoading(false);
        return;
      }

      setPost(data);
      setIsLoading(false);
    }

    if (slug) void fetchPost();

    return () => {
      isActive = false;
    };
  }, [slug]);

  useEffect(() => {
    if (!shareMessage) return;
    const timeout = window.setTimeout(() => setShareMessage(""), 3000);
    return () => window.clearTimeout(timeout);
  }, [shareMessage]);

  useEffect(() => {
    if (post) document.title = `${post.title} | Anirudh Kulkarni`;
  }, [post]);

  if (notFoundPost) notFound();

  async function sharePost() {
    if (!post) return;
    const url = window.location.href;

    if (navigator.share) {
      try {
        await navigator.share({ title: post.title, url });
        return;
      } catch (error) {
        if (error instanceof Error && error.name === "AbortError") return;
        console.error("Unable to share the article:", error);
      }
    }

    try {
      await navigator.clipboard.writeText(url);
      setShareMessage("Link copied");
    } catch (error) {
      console.error("Unable to copy the article link:", error);
      setShareMessage("Couldn’t copy link");
    }
  }

  if (isLoading) {
    return (
      <main className="min-h-screen bg-[#11100F] px-5 py-8 text-[#F5F1EC] sm:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="h-10 w-36 animate-pulse rounded-full bg-white/[0.06]" />
          <div className="mx-auto mt-20 max-w-3xl space-y-5">
            <div className="h-4 w-32 animate-pulse rounded bg-white/[0.06]" />
            <div className="h-14 w-full animate-pulse rounded-xl bg-white/[0.06]" />
            <div className="h-5 w-2/3 animate-pulse rounded bg-white/[0.06]" />
            <div className="mt-10 aspect-[16/8] animate-pulse rounded-3xl bg-white/[0.06]" />
          </div>
        </div>
      </main>
    );
  }

  if (loadError || !post) {
    return (
      <main className="flex min-h-screen flex-col items-center justify-center bg-[#11100F] px-5 text-center text-[#F5F1EC]">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-orange-300">Journal</p>
        <h1 className="mt-4 text-2xl font-semibold text-white">This story isn’t available right now.</h1>
        <p className="mt-2 max-w-md text-sm leading-6 text-stone-400">
          {loadError ?? "Please return to the journal and choose another article."}
        </p>
        <Link
          href="/blogs"
          className="mt-6 inline-flex items-center gap-2 rounded-full bg-orange-300 px-5 py-2.5 text-sm font-semibold text-[#21160F] transition hover:bg-orange-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-200"
        >
          <ArrowLeft size={16} aria-hidden="true" />
          Back to journal
        </Link>
      </main>
    );
  }

  const publishedDate = formatDate(post.created_at);
  const readingTime = estimateReadingTime(post.content);

  return (
    <main className="min-h-screen overflow-hidden bg-[#11100F] text-[#F5F1EC]">
      <div className="pointer-events-none absolute inset-x-0 top-0 -z-0 h-[34rem] bg-[radial-gradient(ellipse_at_top,rgba(255,145,77,0.12),transparent_65%)]" />
      <div className="relative">
        <header className="border-b border-white/[0.07]">
          <nav
            aria-label="Article navigation"
            className="mx-auto flex max-w-7xl items-center justify-between px-5 py-5 sm:px-8"
          >
            <Link href="/blogs" className="inline-flex items-center gap-2 text-sm text-stone-300 transition hover:text-orange-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-orange-300">
              <ArrowLeft size={16} aria-hidden="true" />
              <span>All articles</span>
            </Link>
            <Link href="/" className="text-sm font-semibold tracking-wide text-white transition hover:text-orange-200">
              ANIRUDH KULKARNI
              <span className="ml-2 hidden font-normal text-stone-500 sm:inline">/ JOURNAL</span>
            </Link>
          </nav>
        </header>

        <article className="mx-auto max-w-7xl px-5 pb-20 sm:px-8">
          <header className="mx-auto max-w-4xl pb-9 pt-12 sm:pb-12 sm:pt-20">
            <div className="mb-6 flex flex-wrap items-center gap-2">
              {post.category?.label && (
                <Link
                  href="/blogs"
                  className="rounded-full border border-orange-200/20 bg-orange-300/10 px-3 py-1.5 text-xs font-semibold uppercase tracking-wide text-orange-200 transition hover:bg-orange-300/15"
                >
                  {post.category.label}
                </Link>
              )}
            </div>

            <h1 className="text-3xl font-semibold leading-[1.12] tracking-tight text-white sm:text-5xl lg:text-6xl">
              {post.title}
            </h1>

            <div className="mt-7 flex flex-wrap items-center justify-between gap-4 border-t border-white/[0.08] pt-5">
              <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-stone-400">
                {publishedDate && (
                  <span className="inline-flex items-center gap-2">
                    <CalendarDays size={15} aria-hidden="true" className="text-orange-300" />
                    <time dateTime={post.created_at}>{publishedDate}</time>
                  </span>
                )}
                <span className="inline-flex items-center gap-2">
                  <Clock3 size={15} aria-hidden="true" className="text-orange-300" />
                  {readingTime} min read
                </span>
                <span>By Anirudh Kulkarni</span>
              </div>
              <button
                type="button"
                onClick={sharePost}
                className="inline-flex min-h-10 items-center gap-2 rounded-full border border-white/10 px-4 py-2 text-sm text-stone-300 transition hover:border-orange-200/30 hover:text-orange-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-300"
                aria-label="Share article"
              >
                {shareMessage === "Link copied" ? (
                  <Check size={15} aria-hidden="true" />
                ) : shareMessage === "Couldn’t copy link" ? (
                  <Copy size={15} aria-hidden="true" />
                ) : (
                  <Share2 size={15} aria-hidden="true" />
                )}
                {shareMessage || "Share"}
              </button>
            </div>
          </header>

          {post.featured_image && (
            <figure className="relative mx-auto aspect-[16/9] max-h-[38rem] overflow-hidden rounded-2xl border border-white/[0.08] bg-[#211C19] sm:rounded-3xl">
              <Image
                src={post.featured_image}
                alt={post.title}
                fill
                priority
                sizes="(max-width: 768px) 100vw, 1200px"
                className="object-cover"
              />
            </figure>
          )}

          <div className="mx-auto grid max-w-6xl grid-cols-1 gap-10 pt-10 sm:pt-14 lg:grid-cols-[minmax(0,1fr)_15rem] lg:gap-16">
            <section
              aria-label="Article content"
              className="blog-article-content mx-auto w-full max-w-3xl min-w-0"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />

            <aside className="h-fit rounded-2xl border border-white/[0.08] bg-white/[0.025] p-5 lg:sticky lg:top-8">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-orange-300">About the author</p>
              <p className="mt-3 font-semibold text-white">Anirudh Kulkarni</p>
              <p className="mt-2 text-sm leading-6 text-stone-400">
                Full-stack developer writing about technology, building products, and the ideas behind them.
              </p>
              <Link
                href="/blogs"
                className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-orange-200 transition hover:text-orange-100"
              >
                More articles <ArrowUpRight size={15} aria-hidden="true" />
              </Link>
            </aside>
          </div>

          {post.tags && post.tags.length > 0 && (
            <footer className="mx-auto mt-12 max-w-3xl border-t border-white/[0.08] pt-6 sm:mt-16">
              <h2 className="text-xs font-semibold uppercase tracking-[0.16em] text-stone-500">Filed under</h2>
              <div className="mt-3 flex flex-wrap gap-2">
                {post.tags.map((tag) => (
                  <span key={tag.id} className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1.5 text-xs text-stone-300">
                    #{tag.label}
                  </span>
                ))}
              </div>
            </footer>
          )}

          {!post.publish && (
            <div className="mx-auto mt-8 max-w-3xl rounded-xl border border-yellow-400/20 bg-yellow-500/[0.06] px-4 py-3 text-sm text-yellow-200">
              This article is in draft mode and is not publicly visible.
            </div>
          )}

          <div className="mx-auto mt-12 max-w-3xl border-t border-white/[0.08] pt-7">
            <Link
              href="/blogs"
              className="inline-flex items-center gap-2 text-sm font-medium text-stone-300 transition hover:text-orange-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-orange-300"
            >
              <ArrowLeft size={16} aria-hidden="true" />
              Back to all articles
            </Link>
          </div>
        </article>

        <footer className="border-t border-white/[0.07]">
          <div className="mx-auto flex max-w-7xl flex-col gap-3 px-5 py-8 text-sm text-stone-500 sm:flex-row sm:items-center sm:justify-between sm:px-8">
            <p>© {new Date().getFullYear()} Anirudh Kulkarni</p>
            <Link href="/" className="inline-flex items-center gap-1 transition hover:text-orange-200">
              Back to portfolio <ArrowUpRight size={14} aria-hidden="true" />
            </Link>
          </div>
        </footer>
      </div>
      <p className="sr-only" aria-live="polite">{shareMessage}</p>
    </main>
  );
}
