import BlogPost from "./blog-post"
import {Post} from "@/sanity/sanity.types";
import {client} from "@/sanity/client";
import {SanityImageSource} from "@sanity/image-url/lib/types/types";
import imageUrlBuilder from "@sanity/image-url";
import SectionHeader from "@/components/ui/section-header";

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
        <section className="py-12 md:py-16 lg:py-20 ">
            <div>
                <div className="mb-8 text-slate-100">
                    <h2 className="text-3xl font-bold tracking-tight text-white md:text-4xl"><span
                        className="text-cyan-300">Blog</span> overview</h2>
                    <p className="leading-7 text-slate-400 text-md md:text-lg mt-2">
                        Just me sharing my take on web development. Got thoughts? Let’s connect on <span
                        className="text-cyan-300 font-semibold hover:underline cursor-pointer">LinkedIn</span>!
                    </p>
                </div>

                <SectionHeader title="All posts"/>


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
            </div>
        </section>
    )
}

