import Image from 'next/image';
import Link from 'next/link';

export default function PostCard({ post }: { post: any }) {
  return (
    <div className="bg-[#1A1A1A] rounded-lg overflow-hidden shadow-md hover:shadow-lg transition">
      {/* <Image
        src={post.featured_image}
        alt={post.title}
        width={400}
        height={250}
        className="w-full h-56 object-cover"
      /> */}
      <div className="p-4">
        <h3 className="text-lg text-white font-semibold">{post.title}</h3>
       
        <Link href={`/blogs/${post.slug}`}>
          <button className="mt-4 text-sm bg-[#FF914D] hover:bg-orange-500 text-white py-2 px-4 rounded">
            Read More →
          </button>
        </Link>
      </div>
    </div>
  );
}
