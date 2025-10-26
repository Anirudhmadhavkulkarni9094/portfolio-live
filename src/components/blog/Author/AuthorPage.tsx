import Image from 'next/image';
import React from 'react';

export default function AuthorCard() {
  return (
    <div className="w-72 h-96 max-w-sm p-4  rounded-2xl flex flex-col items-center gap-3">
      <Image
        src="/Profile.jpg"
        alt="profile"
        width={100}
        height={100}
        className="rounded-full border border-gray-300 shadow-sm"
      />
      <div className="text-xl font-semibold text-white">Anirudh Kulkarni</div>
      <div className='text-sm text-orange-500 text-center'>Published • 6 Articles</div>
      <div className="text-sm text-orange-500 text-center">
        Full Stack Developer | Blogger | Travel Enthusiast
      </div>
      <div className='text-sm text-gray-400 text-center'>
        Passionate about building innovative web solutions and sharing knowledge through blogging. Follow my journey!
      </div>
    </div>
  );
}
