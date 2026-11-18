import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, CalendarDays, Sparkles } from "lucide-react";
import type { BlogPost } from "../types";

function formatDate(value?: string | null) {
  if (!value) return null;
  const date = new Date(value);
  return Number.isNaN(date.getTime())
    ? null
    : new Intl.DateTimeFormat("en", { month: "long", day: "numeric", year: "numeric" }).format(date);
}

const FeaturedPost = ({ post }: { post: BlogPost }) => {
  const date = formatDate(post.created_at);

  return (
    <article className="group relative flex min-h-[27rem] overflow-hidden rounded-3xl border border-white/10 bg-[#211C19] sm:min-h-[34rem]">
      {post.featured_image ? (
        <Image
          src={post.featured_image}
          alt=""
          fill
          priority
          sizes="(max-width: 1024px) 100vw, 65vw"
          className="object-cover transition duration-700 group-hover:scale-[1.03]"
        />
      ) : (
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_70%_20%,rgba(255,145,77,0.2),transparent_55%)]" />
      )}
      <div className="absolute inset-0 bg-gradient-to-t from-[#100E0D] via-[#100E0D]/55 to-[#100E0D]/5" />
      <div className="relative mt-auto max-w-3xl p-6 sm:p-10">
        <div className="mb-5 flex flex-wrap items-center gap-2">
          <span className="inline-flex items-center gap-1.5 rounded-full border border-orange-200/20 bg-orange-300/10 px-3 py-1.5 text-xs font-semibold uppercase tracking-wide text-orange-200">
            <Sparkles size={13} aria-hidden="true" />
            Featured story
          </span>
          {post.category?.label && (
            <span className="rounded-full border border-white/15 bg-black/20 px-3 py-1.5 text-xs text-white/80">
              {post.category.label}
            </span>
          )}
        </div>
        <h2 className="max-w-2xl text-3xl font-semibold leading-tight tracking-tight text-white sm:text-5xl">
          {post.title}
        </h2>
        {post.excerpt && (
          <p className="mt-4 line-clamp-3 max-w-2xl text-sm leading-6 text-stone-300 sm:text-base sm:leading-7">
            {post.excerpt}
          </p>
        )}
        <div className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-3">
          {date && (
            <span className="inline-flex items-center gap-2 text-sm text-stone-300">
              <CalendarDays size={15} aria-hidden="true" />
              {date}
            </span>
          )}
          <Link
            href={`/blogs/${post.slug}`}
            className="inline-flex items-center gap-2 rounded-full bg-orange-300 px-5 py-2.5 text-sm font-semibold text-[#21160F] transition hover:bg-orange-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-200"
          >
            Read the story <ArrowUpRight size={16} aria-hidden="true" />
          </Link>
        </div>
      </div>
    </article>
  );
};

export default FeaturedPost;
