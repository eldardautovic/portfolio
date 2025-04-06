import React from 'react';
import {Project} from "@/sanity/sanity.types";

function ProjectsList({projects}: { projects: Project[] }) {
    return (
        <section aria-label="Blog section">
            <div className="flex flex-col gap-y-2 mt-4">
                {!projects.length ?
                    <div
                        className="flex items-center justify-center rounded-lg h-48 border-2 border-slate-600 border-dashed bg-transparent">
                        <p className="text-slate-500 font-medium">Coming soon</p>
                    </div> :
                    <h1>hi proje</h1>
                }
            </div>
        </section>
    );
}

export default ProjectsList;