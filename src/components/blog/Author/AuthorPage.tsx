import Image from 'next/image';
import React from 'react';

export default function AuthorCard({ articleCount }: { articleCount: number }) {
  return (
    <div className="flex items-center gap-4 rounded-3xl border border-white/[0.08] bg-white/[0.025] p-5 sm:p-6">
      <Image
        src="/Profile.jpg"
        alt="Anirudh Kulkarni"
        width={64}
        height={64}
        className="size-16 rounded-full border border-orange-200/20 object-cover"
      />
      <div className="min-w-0">
        <p className="text-xs font-medium uppercase tracking-[0.16em] text-stone-500">Written by</p>
        <p className="mt-1 font-semibold text-white">Anirudh Kulkarni</p>
        <p className="mt-1 text-xs leading-5 text-stone-400">
          Developer, blogger &amp; curious builder · {articleCount} {articleCount === 1 ? "article" : "articles"}
        </p>
      </div>
    </div>
  );
}
