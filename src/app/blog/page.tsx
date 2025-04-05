import {client} from "@/sanity/client";
import BlogSection from "@/components/ui/blog-section";
import {Post} from "@/sanity/sanity.types";
import SectionHeader from "@/components/ui/section-header";
import Link from "next/link";

const POSTS_QUERY = `*[
  _type == "post"
  && defined(slug.current)
]|order(publishedAt desc)[0...12]`;

async function Page() {
    const posts = await client.fetch<Post[]>(POSTS_QUERY, {}, {next: {revalidate: 30}});

    return (
        <section className="min-h-[80vh] py-12 md:py-16 lg:py-20 ">
            <div className="mb-8 text-slate-100">
                <h2 className="text-3xl font-bold tracking-tight text-white md:text-4xl"><span
                    className="text-cyan-300">Blog</span> overview</h2>
                <p className="leading-7 text-slate-400 text-md md:text-lg mt-2">
                    Just me sharing my take on web development. Got thoughts? Let’s connect on <Link
                    href="https://www.linkedin.com/in/eldardautovic/" target="_blank"><span
                    className="text-cyan-300 font-semibold hover:underline cursor-pointer">LinkedIn</span></Link>!
                </p>
            </div>

            <SectionHeader title="All posts"/>

            <BlogSection posts={posts}/>
        </section>
    );
}

export default Page;