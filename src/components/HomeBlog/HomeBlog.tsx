"use client"
import React, { useEffect } from 'react';
import OrangeLayout from '../Layout/OrangeLayout';
import axios from 'axios';
import Image from 'next/image';
import Link from 'next/link';

function HomeBlog() {
    const [blogs, setBlogs] = React.useState([]);

    useEffect(() => {
        axios.get('/api/blogs')
            .then((res) => setBlogs(res.data.slice(0, 3)))
            .catch((err) => console.error(err));
    }, []);

    return (
        <OrangeLayout>
            <div className='min-h-screen flex flex-col items-center justify-start pt-20 px-4 md:px-0 text-white'>
                <div className='text-3xl md:text-4xl font-bold mb-10'>Top Blogs</div>

                <div className='w-full max-w-5xl grid grid-cols-1 md:grid-cols-3 gap-6'>
                    {blogs.length === 0 ? (
                        <div className='text-center text-lg col-span-3'>Loading blogs...</div>
                    ) : (
                        blogs.map((blog: any) => (
                            <div
                                key={blog.id}
                                className='bg-gradient-to-b from-orange-500 to-orange-600 rounded-xl shadow-md overflow-hidden flex flex-col transition-transform transform hover:scale-102 hover:shadow-lg duration-300'
                            >
                                {/* Featured Image */}
                                {blog.featured_image && (
                                    <div className='relative w-full h-40'>
                                        <Image
                                            src={blog.featured_image}
                                            alt={blog.title}
                                            fill
                                            className='object-cover rounded-t-xl'
                                        />
                                    </div>
                                )}

                                {/* Content */}
                                <div className='p-4 flex flex-col flex-1'>
                                    {/* Category */}
                                    {blog.category && (
                                        <div className='text-xs text-orange-100 font-semibold mb-1 uppercase tracking-wide'>
                                            {blog.category.label}
                                        </div>
                                    )}

                                    {/* Title */}
                                    <div className='text-lg font-semibold mb-2 hover:text-white/90 transition-colors duration-200'>
                                        {blog.title}
                                    </div>


                                    {/* Tags & Read More */}
                                    <div className='flex flex-wrap items-center justify-between gap-2 mt-auto'>
                                        <div className='flex flex-wrap gap-1'>
                                            {blog.tags && blog.tags.length > 0 && blog.tags.map((tag: any) => (
                                                <div
                                                    key={tag.id}
                                                    className='bg-white/20 text-white text-[10px] px-2 py-0.5 rounded-full'
                                                >
                                                    {tag.label}
                                                </div>
                                            ))}
                                        </div>

                                        <Link href={`/blogs/${blog.slug}`} className='text-xs text-white/90 hover:text-white font-medium transition-colors'>
                                            Read More &rarr;
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        ))
                    )}
                </div>
            </div>
        </OrangeLayout>
    );
}

export default HomeBlog;
