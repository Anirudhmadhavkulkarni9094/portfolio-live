import type { Metadata } from "next";
import BlogsClient from "@/components/blog/BlogsClient";
import { getPublishedPosts } from "@/lib/posts";

export const revalidate = 300;

export const metadata: Metadata = {
  title: "Journal",
  description:
    "Notes on web development, technology, and lessons learned while building for the web by Anirudh Kulkarni.",
  alternates: { canonical: "/blogs" },
};

export default async function Page() {
  const posts = await getPublishedPosts();
  return <BlogsClient initialPosts={posts ?? undefined} />;
}
