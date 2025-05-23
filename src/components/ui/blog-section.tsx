import BlogPost from "./blog-post"
import {Post} from "@/sanity/sanity.types";

interface BlogSectionProps {
    posts: Post[]
}

export default function BlogSection({
                                        posts
                                    }: BlogSectionProps) {
    return (
        <section aria-label="Blog section">
            <div className="flex flex-col gap-y-2 mt-4">
                {!posts.length ?
                    <div
                        className="flex items-center justify-center rounded-lg h-48 border-2 border-slate-600 border-dashed bg-transparent">
                        <p className="text-slate-500 font-medium">Coming soon</p>
                    </div> :
                    posts.map((post) => (
                        <BlogPost
                            key={post._id}
                            title={post.title!}
                            publishDate={post.publishedAt!}
                            slug={post.slug?.current ?? ''}
                        />
                    ))
                }
            </div>
        </section>
    )
}

