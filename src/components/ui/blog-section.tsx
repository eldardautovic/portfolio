import BlogPost from "./blog-post"
import {Post} from "@/sanity/sanity.types";
import {client} from "@/sanity/client";
import {SanityImageSource} from "@sanity/image-url/lib/types/types";
import imageUrlBuilder from "@sanity/image-url";

interface BlogSectionProps {
    posts: Post[]
}

const {projectId, dataset} = client.config();

const urlFor = (source: SanityImageSource) =>
    projectId && dataset
        ? imageUrlBuilder({projectId, dataset}).image(source)
        : null;


export default function BlogSection({
                                        posts
                                    }: BlogSectionProps) {
    return (
        <section aria-label="Blog section" aria-description="Blog section">
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 mt-4">
                {posts.length < 0 ?
                    <div
                        className="flex items-center justify-center rounded-lg h-48 border-2 border-slate-600 border-dashed bg-transparent">
                        <p className="text-slate-500 font-medium">Coming soon</p>
                    </div> :
                    posts.map((post) => (
                        <BlogPost
                            key={post._id}
                            title={post.title!}
                            imageUrl={urlFor(post.mainImage!)?.width(300).height(250).url() ?? ''}
                            imageAlt={post.title!}
                            publishDate={post.publishedAt!}
                            slug={post.slug?.current ?? ''}
                        />
                    ))
                }
            </div>
        </section>
    )
}

