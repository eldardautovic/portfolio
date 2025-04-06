import React from 'react';
import Link from "next/link";
import SectionHeader from "@/components/ui/section-header";
import {client} from "@/sanity/client";
import {Project} from "@/sanity/sanity.types";
import ProjectsList from "@/components/ProjectsList";

const PROJECT_QUERY = `*[
  _type == "project"
  && defined(slug.current)
]|order(_createdAt asc)[0...12]{
  ...,
  "categories": categories[]-> {
    _type,
    title,
    "id": _id
  }
}`;


async function Page() {
    const projects = await client.fetch<Project[]>(PROJECT_QUERY, {}, {next: {revalidate: 30}});

    return (
        <section className="min-h-[80vh] py-12 md:py-16 lg:py-20">
            <div className="mb-8 text-slate-100">
                <h2 className="text-3xl font-bold tracking-tight text-white md:text-4xl"><span
                    className="text-cyan-300">My</span> projects</h2>
                <p className="leading-7 text-slate-400 text-md md:text-lg mt-2">
                    A glimpse into what I’ve been working on. Got something in mind? Let’s <Link
                    href="mailto:dautoviceldar20@gmail.com" target="_blank"><span
                    className="text-cyan-300 font-semibold hover:underline cursor-pointer">connect</span></Link> and
                    bring it to life.
                </p>
            </div>

            <SectionHeader title="Featured"/>

            <ProjectsList projects={projects}/>

        </section>
    );
}

export default Page;