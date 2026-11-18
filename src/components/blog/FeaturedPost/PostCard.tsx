import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, CalendarDays } from "lucide-react";
import type { BlogPost } from "../types";

function formatDate(value?: string | null) {
  if (!value) return null;
  const date = new Date(value);
  return Number.isNaN(date.getTime())
    ? null
    : new Intl.DateTimeFormat("en", { month: "short", day: "numeric", year: "numeric" }).format(date);
}

export default function PostCard({
  post,
  compact = false,
}: {
  post: BlogPost;
  compact?: boolean;
}) {
  const date = formatDate(post.created_at);

  if (compact) {
    return (
      <article className="group flex gap-3">
        <Link
          href={`/blogs/${post.slug}`}
          aria-label={`Read ${post.title}`}
          className="relative h-[4.5rem] w-[5.5rem] shrink-0 overflow-hidden rounded-xl bg-[#30251F] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-300"
        >
          {post.featured_image && (
            <Image
              src={post.featured_image}
              alt=""
              fill
              sizes="88px"
              className="object-cover transition duration-300 group-hover:scale-105"
            />
          )}
        </Link>
        <div className="min-w-0 py-0.5">
          {post.category?.label && (
            <p className="mb-1 truncate text-[10px] font-semibold uppercase tracking-[0.15em] text-orange-300">
              {post.category.label}
            </p>
          )}
          <Link
            href={`/blogs/${post.slug}`}
            className="line-clamp-2 text-sm font-medium leading-5 text-stone-200 transition group-hover:text-orange-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-orange-300"
          >
            {post.title}
          </Link>
          {date && <p className="mt-1.5 text-xs text-stone-500">{date}</p>}
        </div>
      </article>
    );
  }

  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-white/[0.08] bg-white/[0.025] transition duration-300 hover:-translate-y-1 hover:border-orange-200/25 hover:bg-white/[0.045]">
      <Link
        href={`/blogs/${post.slug}`}
        aria-label={`Read ${post.title}`}
        className="relative block aspect-[16/10] overflow-hidden bg-[radial-gradient(ellipse_at_70%_30%,rgba(255,145,77,0.18),transparent_60%)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-inset focus-visible:outline-orange-300"
      >
        {post.featured_image && (
          <Image
            src={post.featured_image}
            alt=""
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            className="object-cover transition duration-500 group-hover:scale-[1.04]"
          />
        )}
        <span className="absolute inset-0 bg-gradient-to-t from-black/25 to-transparent" />
      </Link>
      <div className="flex flex-1 flex-col p-5">
        <div className="mb-3 flex flex-wrap items-center justify-between gap-2">
          {post.category?.label ? (
            <span className="rounded-full bg-orange-300/10 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.13em] text-orange-200">
              {post.category.label}
            </span>
          ) : <span />}
          {date && (
            <span className="inline-flex items-center gap-1.5 text-xs text-stone-500">
              <CalendarDays size={13} aria-hidden="true" />
              {date}
            </span>
          )}
        </div>
        <h3 className="text-lg font-semibold leading-snug text-white">
          <Link
            href={`/blogs/${post.slug}`}
            className="transition group-hover:text-orange-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-orange-300"
          >
            {post.title}
          </Link>
        </h3>
        {post.excerpt && (
          <p className="mt-2 line-clamp-3 text-sm leading-6 text-stone-400">{post.excerpt}</p>
        )}
        <div className="mt-auto flex items-center justify-between gap-3 pt-5">
          {post.tags?.[0] ? (
            <span className="truncate text-xs text-stone-500">#{post.tags[0].label}</span>
          ) : <span />}
          <Link
            href={`/blogs/${post.slug}`}
            className="inline-flex shrink-0 items-center gap-1.5 text-sm font-medium text-orange-200 transition hover:text-orange-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-orange-300"
          >
            Read article <ArrowUpRight size={15} aria-hidden="true" />
          </Link>
        </div>
      </div>
    </article>
  );
}
