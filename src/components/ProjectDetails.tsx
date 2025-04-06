import React from 'react';
import Link from "next/link";
import {PortableText} from "next-sanity";
import {Project} from "@/sanity/sanity.types";
import {client} from "@/sanity/client";
import type {SanityImageSource} from "@sanity/image-url/lib/types/types";
import imageUrlBuilder from "@sanity/image-url";
import {cn} from "@/lib/utils";
import Image from "next/image";
import {Button} from "@/components/ui/button";

const {projectId, dataset} = client.config();
const urlFor = (source: SanityImageSource) =>
    projectId && dataset
        ? imageUrlBuilder({projectId, dataset}).image(source)
        : null;


function BlogDetails({project}: { project: Project }) {
    // Request higher quality images from Sanity
    const projectBgImageUrl = project.bgImage
        ? urlFor(project.bgImage)?.width(800).height(450).quality(90).url()
        : null;
    const projectMainImageUrl = project.mainImage
        ? urlFor(project.mainImage)?.width(448).height(448).quality(100).url()
        : null;
    const projectLogoImageUrl = project.logoImage
        ? urlFor(project.logoImage)?.width(200).height(150).quality(90).url()
        : null;
    return (
        <>
            <Link href="/projects" className="hover:underline text-slate-100">
                ← Back to projects
            </Link>
            <div
                className="w-full h-[45.5rem] md:h-[33.625rem] flex rounded-md flex-col md:flex-row justify-between p-5 items-center"
                style={{backgroundColor: project.bgColor?.hex ?? 'white'}}
            >
                <div
                    className={cn("flex flex-col w-full md:w-1/3 gap-y-5")}>
                    <div className="flex flex-wrap gap-2 justify-start">
                        {project.categories && project.categories.map((category) => (
                            <span key={category.title + " Category" + " " + category._ref}
                                  className="px-3 py-1 text-slate-200 border-2 border-slate-200 text-xs rounded font-semibold">
                                    {category.title}
                                </span>
                        ))}
                    </div>
                    <div className="w-40 h-16 relative">
                        <Image
                            src={projectLogoImageUrl || "/placeholder.svg"}
                            alt={`${project.title} logo`}
                            fill
                            className="object-contain"
                            sizes="144px"
                            quality={90}
                        />
                    </div>

                    <p className="text-sm text-slate-200 mb-4 text-left">{project.description}</p>

                    <div>
                        <h2 className="scroll-m-20 text-lg font-semibold tracking-tight first:mt-0 mb-2">
                            Technologies:
                        </h2>
                        <div className="flex flex-wrap gap-2 justify-start">
                            {project.technologies && project.technologies.map((technology) => (
                                <div key={"Technology: " + technology.title} className="bg-slate-900/40 p-1 rounded">

                                    <div className="flex justify-center h-8 w-8 relative ">
                                        <Image
                                            src={urlFor(technology.image!)?.width(32).height(32).quality(100).url() || "/placeholder.svg"}
                                            alt={project.title ?? ''}
                                            fill
                                            quality={100}
                                            priority={true}
                                        />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <Button asChild size="sm" className="w-fit">
                        <Link href={project.repoUrl ?? ""} target="_blank">View repo</Link>
                    </Button>

                </div>
                <div className="flex justify-center h-[35rem] md:h-[29rem] relative w-full">
                    <Image
                        src={projectMainImageUrl || "/placeholder.svg"}
                        alt={project.title ?? ''}
                        fill
                        quality={100}
                        priority={true}
                    />
                </div>
            </div>

            <div className="prose prose-invert prose-slate">
                <div className="text-slate-200 py-2">
                    {Array.isArray(project.body) && <PortableText value={project.body}/>}
                </div>
            </div>
        </>
    );
}

export default BlogDetails;