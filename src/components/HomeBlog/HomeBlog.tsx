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
            <div className='py-20 px-4 md:px-0 text-white'>
                <div className="text-center mb-16">
                  <h2 className="text-primary font-bold tracking-widest uppercase text-sm mb-4">Journal</h2>
                  <h3 className="text-4xl md:text-5xl font-bold">Latest <span className="text-gradient">Insights</span></h3>
                </div>

                <div className='w-full max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8'>
                    {blogs.length === 0 ? (
                        <div className='text-center text-lg col-span-3 py-20 text-gray-500'>Loading insights...</div>
                    ) : (
                        blogs.map((blog: any) => (
                            <div
                                key={blog.id}
                                className='glass group relative overflow-hidden rounded-[2rem] flex flex-col hover:-translate-y-2 transition-all duration-500'
                            >
                                {/* Featured Image */}
                                {blog.featured_image && (
                                    <div className='relative w-full h-48 overflow-hidden'>
                                        <Image
                                            src={blog.featured_image}
                                            alt={blog.title}
                                            fill
                                            className='object-cover group-hover:scale-110 transition-transform duration-700'
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-[#0f172a] to-transparent opacity-60" />
                                    </div>
                                )}

                                {/* Content */}
                                <div className='p-6 flex flex-col flex-1 relative z-10'>
                                    {/* Category */}
                                    {blog.category && (
                                        <div className='text-[10px] text-primary font-bold mb-3 uppercase tracking-[0.2em]'>
                                            {blog.category.label}
                                        </div>
                                    )}

                                    {/* Title */}
                                    <h4 className='text-xl font-bold mb-4 group-hover:text-primary transition-colors duration-300 line-clamp-2 leading-tight'>
                                        {blog.title}
                                    </h4>

                                    {/* Tags & Read More */}
                                    <div className='mt-auto pt-6 border-t border-white/5 flex items-center justify-between gap-4'>
                                        <div className='flex flex-wrap gap-2'>
                                            {blog.tags && blog.tags.length > 0 && blog.tags.slice(0, 2).map((tag: any) => (
                                                <span
                                                    key={tag.id}
                                                    className='text-[10px] text-gray-500 font-bold uppercase tracking-wider'
                                                >
                                                    #{tag.label}
                                                </span>
                                            ))}
                                        </div>

                                        <Link href={`/blogs/${blog.slug}`} className='group/read flex items-center gap-2 text-xs font-bold text-white uppercase tracking-widest'>
                                            Read 
                                            <svg className="w-4 h-4 group-hover/read:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                            </svg>
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
