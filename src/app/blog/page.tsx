import {client} from "@/sanity/client";
import BlogSection from "@/components/ui/blog-section";
import {Post} from "@/sanity/sanity.types";

const POSTS_QUERY = `*[
  _type == "post"
  && defined(slug.current)
]|order(publishedAt desc)[0...12]`;

const options = {next: {revalidate: 30}};

async function Page() {
    const posts = await client.fetch<Post[]>(POSTS_QUERY, {}, options);

    return (
        <main className="min-h-[80vh]">
            <BlogSection posts={posts}/>
        </main>
    );
}

export default Page;