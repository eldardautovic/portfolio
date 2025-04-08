import React from 'react';
import Link from "next/link";
import Image from "next/image";
import {PortableText} from "next-sanity";
import {Post} from "@/sanity/sanity.types";

function BlogDetails({post, postImageUrl}: { post: Post, postImageUrl: string | undefined | null }) {
    return (
        <>
            <Link href="/blog" className="hover:underline text-slate-100">
                ← Back to posts
            </Link>
            {postImageUrl && (
                <div className="w-full h-64 md:h-80 lg:h-96 rounded-xl overflow-hidden">
                    <Image
                        src={postImageUrl}
                        alt={post.title ?? ''}
                        className="w-full h-full object-cover"
                        width={1200}
                        height={675}
                        priority
                        quality={85}
                        placeholder="blur"
                        blurDataURL="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIwMCIgaGVpZ2h0PSI2NzUiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjMzMzMzMzIi8+PC9zdmc+"
                        loading="eager"
                    />
                </div>
            )}
            <h1 className="text-4xl font-black mb-2 text-slate-100">{post.title}</h1>
            <div className="prose prose-invert prose-slate !max-w-none">
                <p className="text-sm text-slate-400 leading-7">Published: {new Date(post.publishedAt ?? '').toLocaleDateString()}</p>
                <div className="text-slate-200 py-2">
                    {Array.isArray(post.body) && <PortableText value={post.body}/>}
                </div>
            </div>
        </>
    );
}

export default BlogDetails;