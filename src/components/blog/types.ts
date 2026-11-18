export type BlogTag = {
  id: string;
  label: string;
};

export type BlogCategory = {
  id: string;
  label: string;
};

export type BlogPost = {
  id: string;
  title: string;
  slug: string;
  featured_image?: string | null;
  excerpt?: string | null;
  created_at?: string | null;
  category?: BlogCategory | null;
  tags?: BlogTag[] | null;
};
