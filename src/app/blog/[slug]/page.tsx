import imageUrlBuilder from "@sanity/image-url";
import type {SanityImageSource} from "@sanity/image-url/lib/types/types";
import {client} from "@/sanity/client";
import {Post} from "@/sanity/sanity.types";
import BlogDetails from "@/components/BlogDetails";
import {Metadata} from "next";

const POST_QUERY = `*[_type == "post" && slug.current == $slug][0]`;

const POSTS_QUERY = `*[
  _type == "post"
  && defined(slug.current)
]|order(publishedAt desc)[0...12]`;

const {projectId, dataset} = client.config();
const urlFor = (source: SanityImageSource) =>
    projectId && dataset
        ? imageUrlBuilder({projectId, dataset}).image(source)
        : null;

const options = {next: {revalidate: 30}};

export async function generateStaticParams() {
    const posts = await client.fetch<Post[]>(POSTS_QUERY, {}, {next: {revalidate: 30}});

    return posts.map((post: Post) => ({
        slug: post.slug!.current,
    }))
}

export async function generateMetadata(
    {params}: { params: Promise<{ slug: string }> },
): Promise<Metadata> {
    const {slug} = await params

    const post = await client.fetch<Post>(POST_QUERY, {slug}, options);

    return {
        title: post.title,
    }
}

export default async function PostPage({
                                           params,
                                       }: {
    params: Promise<{ slug: string }>;
}) {
    const post = await client.fetch<Post>(POST_QUERY, await params, options);
    const postImageUrl = post.mainImage
        ? urlFor(post.mainImage)?.width(550).height(310).url()
        : null;

    return (
        <section className="min-h-[80vh] py-12 md:py-16 lg:py-20 flex flex-col gap-4">
            <BlogDetails post={post} postImageUrl={postImageUrl}/>
        </section>
    );
}