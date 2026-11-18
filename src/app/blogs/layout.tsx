import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Journal | Anirudh Kulkarni",
  description:
    "Notes on web development, technology, and lessons learned while building for the web by Anirudh Kulkarni.",
};

export default function BlogLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return children;
}
