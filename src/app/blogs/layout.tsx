import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog | Anirudh Kulkarni - Insights on Web Development & Design",
  description: "Read the latest articles on Next.js, React, SaaS growth, and modern engineering practices by Anirudh Kulkarni.",
  openGraph: {
    title: "Blog | Anirudh Kulkarni",
    description: "Insights on modern web development and design.",
    type: "website",
  }
};

export default function BlogLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
