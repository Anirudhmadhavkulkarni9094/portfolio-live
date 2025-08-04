// components/FeaturedPost.tsx
'use client';

import { Star } from 'lucide-react';
import Image from 'next/image';

type Tag = {
  id: string;
  label: string;
};

type Post = {
  id: string;
  title: string;
  slug: string;
  featured_image: string;
  tags: Tag[];
};

type FeaturedPostProps = {
  post: Post;
};

const FeaturedPost = ({ post }: any) => {
  return (
    <section className="py-10 px-4 rounded-xl ">
      <h1 className="text-3xl text-orange-400 font-bold mb-6 text-center">Featured Post of the Week</h1>

      <div className="flex flex-col justify-center items-center gap-4">
        <Image
          src={post.featured_image}
          alt={post.title}
          width={500}
          height={300}
          className="rounded-lg border-2 border-orange-400"
        />

        <h2 className="text-white text-2xl font-semibold text-left">{post.title}</h2>
        <p className='text-white text-sm font-semibold text-left'>{post.excerpt}</p>
        
          </div>
          <div className='flex flex-col gap-2 mt-4'>

        <div className="flex flex-wrap gap-2">
          {post.tags.map((tag:any) => (
            <span
            key={tag.id}
            className="text-sm text-white bg-gray-700 px-4 py-1 rounded-2xl"
            >
              #{tag.label}
            </span>
          ))}
        </div>

        <a
          href={`/blogs/${post.slug}`}
          className="bg-orange-500 w-fit hover:bg-orange-600 transition text-white px-6 py-2 rounded-full font-medium mt-4"
          >
          Read More →
        </a>
          </div>
    </section>
  );
};

export default FeaturedPost;
