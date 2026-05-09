import { Metadata } from "next";
import { supabase } from "@/lib/supabaseClient";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  
  const { data: post } = await supabase
    .from("post_full_data")
    .select("title, description, content")
    .eq("slug", slug)
    .single();

  if (!post) {
    return {
      title: "Post Not Found",
    };
  }

  return {
    title: `${post.title} | Anirudh Kulkarni`,
    description: post.content.replace(/<[^>]*>/g, "").slice(0, 160),
    openGraph: {
      title: post.title,
      description: post.content.replace(/<[^>]*>/g, "").slice(0, 160),
      type: "article",
    }
  };
}

export default function ArticleLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
