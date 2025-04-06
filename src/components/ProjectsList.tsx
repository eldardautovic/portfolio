import React from 'react';
import {Project} from "@/sanity/sanity.types";
import {ProjectItem} from "@/components/ProjectItem";

function ProjectsList({projects}: { projects: Project[] }) {
    return (
        <section aria-label="Blog section">
            <div className="flex flex-col gap-y-2 mt-4">
                {!projects.length ?
                    <div
                        className="flex items-center justify-center rounded-lg h-48 border-2 border-slate-600 border-dashed bg-transparent">
                        <p className="text-slate-500 font-medium">Coming soon</p>
                    </div> :
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {projects.map((item: Project, index: number) => (
                            <div
                                key={item.title + " Project" + item._id}
                                className={`${index === 0 || index === 3 || (index > 3 && (index - 3) % 4 === 0) ? "col-span-1 sm:col-span-2" : "col-span-1"}`}
                            >
                                <ProjectItem project={item} index={index}/>
                            </div>
                        ))}
                    </div>
                }
            </div>
        </section>
    );
}

export default ProjectsList;