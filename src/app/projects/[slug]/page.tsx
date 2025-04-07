import {client} from "@/sanity/client";
import {Project} from "@/sanity/sanity.types";
import ProjectDetails from "@/components/ProjectDetails";

const POST_QUERY = `*[_type == "project" && slug.current == $slug][0]{
  ...,
  "categories": categories[]-> {
    _type,
    title,
    "id": _id
  },
  "technologies": technologies[]-> {
    _type,
    title,
    image,
    "id": _id
  }
}`;


const PROJECTS_QUERY = `*[
  _type == "project"
  && defined(slug.current)
]|order(_createdAt desc)[0...12]{
  ...,
  "categories": categories[]-> {
    _type,
    title,
    "id": _id
  }
}`;


export async function generateStaticParams() {
    const projects = await client.fetch<Project[]>(PROJECTS_QUERY, {}, {next: {revalidate: 30}});

    return projects.map((project: Project) => ({
        slug: project.slug!.current,
    }))
}

export default async function PostPage({
                                           params,
                                       }: {
    params: Promise<{ slug: string }>;
}) {
    const project = await client.fetch<Project>(POST_QUERY, await params, {
        next: {revalidate: 30},
    });

    return (
        <main className="min-h-[80vh] py-12 md:py-16 lg:py-20 flex flex-col gap-4">
            <ProjectDetails project={project}/>
        </main>
    );
}