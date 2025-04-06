import Image from "next/image"
import {Project} from "@/sanity/sanity.types";
import {client} from "@/sanity/client";
import type {SanityImageSource} from "@sanity/image-url/lib/types/types";
import imageUrlBuilder from "@sanity/image-url";
import {cn} from "@/lib/utils";
import Link from "next/link";

interface GridItemProps {
    project: Project
    index: number
}

const {projectId, dataset} = client.config();
const urlFor = (source: SanityImageSource) =>
    projectId && dataset
        ? imageUrlBuilder({projectId, dataset}).image(source)
        : null;

export function ProjectItem({project, index}: GridItemProps) {

    // Request higher quality images from Sanity
    const projectBgImageUrl = project.bgImage
        ? urlFor(project.bgImage)?.width(800).height(450).quality(90).url()
        : null;
    const projectMainImageUrl = project.mainImage
        ? urlFor(project.mainImage)?.width(600).height(700).quality(100).url()
        : null;
    const projectLogoImageUrl = project.logoImage
        ? urlFor(project.logoImage)?.width(200).height(150).quality(90).url()
        : null;

    return (
        <Link href={`/projects/${project.slug?.current}`}>
            <div
                className="relative group overflow-hidden rounded-lg shadow-lg transition-all duration-300 hover:shadow-xl h-full cursor-pointer"
                style={{backgroundColor: project.bgColor?.hex ?? 'white'}}
            >
                <div className="absolute inset-0 z-0 opacity-20">
                    {projectBgImageUrl && (
                        <Image
                            src={projectBgImageUrl}
                            alt=""
                            fill
                            className="object-cover"
                            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                            priority={true}
                            quality={90}
                        />
                    )}
                </div>

                <div
                    className="absolute inset-0 bg-black opacity-0 transition-opacity duration-300 group-hover:opacity-20 z-10"></div>
                <div
                    className={cn("relative z-20 py-4 px-6 flex-col md:flex-row flex justify-evenly md:justify-between md:gap-5 h-[37.5rem] md:h-[35.625rem]", {"!flex-col !justify-evenly": index % 3 === 1 || index % 3 === 2})}>
                    <div
                        className={cn("flex flex-col w-full md:w-1/3", {"!w-full": index % 3 === 1 || index % 3 === 2})}>
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

                        <p className="text-sm text-slate-200 mb-4 text-center md:text-left">{project.description}</p>

                        <div className="flex flex-wrap gap-2 justify-center md:justify-start">
                            {project.categories && project.categories.map((category) => (
                                <span key={category.title + " Category" + " " + category._ref}
                                      className="px-3 py-1 text-slate-200 border-2 border-slate-200 text-xs rounded font-semibold">
                                    {category.title}
                                </span>
                            ))}
                        </div>
                    </div>
                    <div className="flex justify-center">
                        <Image
                            src={projectMainImageUrl || "/placeholder.svg"}
                            alt={project.title ?? ''}
                            width={600}
                            height={400}
                            className="object-contain"
                            quality={100}
                            priority={true}
                        />
                    </div>
                </div>
            </div>
        </Link>
    )
}