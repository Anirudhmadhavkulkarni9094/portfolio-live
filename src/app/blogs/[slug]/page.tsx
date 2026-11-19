import type { Metadata } from "next";
import { notFound } from "next/navigation";
import PostClient from "@/components/blog/PostClient";
import { getPostBySlug, plainText } from "@/lib/posts";
import { SITE_NAME, SITE_URL } from "@/lib/site";

export const revalidate = 300;

type Props = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPostBySlug(slug);
  if (!post) return { title: "Article not found", robots: { index: false } };

  const description = plainText(post.content);
  return {
    title: post.title,
    description,
    alternates: { canonical: `/blogs/${post.slug}` },
    openGraph: {
      type: "article",
      title: post.title,
      description,
      url: `/blogs/${post.slug}`,
      publishedTime: post.created_at,
      authors: [SITE_NAME],
      ...(post.featured_image ? { images: [post.featured_image] } : {}),
    },
    twitter: {
      card: post.featured_image ? "summary_large_image" : "summary",
      title: post.title,
      description,
      ...(post.featured_image ? { images: [post.featured_image] } : {}),
    },
  };
}

export default async function Page({ params }: Props) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);
  if (!post) notFound();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: plainText(post.content),
    datePublished: post.created_at,
    url: `${SITE_URL}/blogs/${post.slug}`,
    mainEntityOfPage: `${SITE_URL}/blogs/${post.slug}`,
    ...(post.featured_image ? { image: post.featured_image } : {}),
    ...(post.tags?.length ? { keywords: post.tags.map((t) => t.label).join(", ") } : {}),
    ...(post.category?.label ? { articleSection: post.category.label } : {}),
    author: { "@type": "Person", name: SITE_NAME, url: SITE_URL },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }}
      />
      <PostClient initialPost={post} />
    </>
  );
}
