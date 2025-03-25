import React from 'react';
import SectionHeader from "@/components/ui/section-header";
import {Experience as ExperienceType} from "@/types/experience";
import ExperienceItem from "@/components/ExperienceItem";
import {Badge} from "@/components/ui/badge";

const experienceItems: ExperienceType[] = [
    {
        company: "Independent contractor",
        description:
            "I'm always open to independent contracting opportunities. If you're interested in collaborating," +
            " feel free to reach out and schedule a meeting — let’s explore how we can create something extraordinary together.",
        role: "Software Developer",
        from: "2024",
        to: "present",
        currently: true,
        open: true
    },
    {
        company: "LANACO",
        description:
            "Specializing in the development and maintenance of responsive and scalable web and mobile applications," +
            " I work with modern technologies like Angular and .NET. My role involves enhancing both new and legacy systems," +
            " ensuring seamless user experiences while providing ongoing maintenance and support. I also contribute to mobile app development," +
            " delivering solutions that meet client needs and optimize usability across different platforms.",
        role: "Software Developer",
        from: "2024",
        to: "present",
        currently: true,
    },
    {
        company: "BScript",
        role: "Front-end Developer",
        from: "2023",
        to: "2024",
    },
    {
        company: "CrewNew",
        role: "Front-end Developer",
        from: "2022",
        to: "2023",
    },
    {
        company: "Freelance",
        role: "Front-end Developer",
        from: "2020",
        to: "2022",
    }
];


const currentRoles = experienceItems.filter(item => item.currently);
const formerRoles = experienceItems.filter(item => !item.currently);

function Experience() {
    return (
        <section className="mt-5">
            <SectionHeader title="Experience"/>
            <div className="mt-4">
                {currentRoles.length > 0 && (
                    <>
                        <Badge className="text-xs mb-3 border-1 text-slate-200 border-slate-400 rounded-xl uppercase"
                               variant="outline">Current
                            Roles</Badge>
                        {currentRoles.map((item, index) => (
                            <ExperienceItem
                                key={`current-${index}`}
                                item={item}
                            />
                        ))}
                    </>
                )}

                {formerRoles.length > 0 && (
                    <>
                        <Badge
                            className="text-xs mb-3 border-1 text-slate-200 border-slate-400 rounded-xl uppercase font-bold"
                            variant="outline">Former
                            Roles</Badge>
                        {formerRoles.map((item, index) => (
                            <ExperienceItem
                                key={`former-${index}`}
                                item={item}
                            />
                        ))}
                    </>
                )}
            </div>
        </section>
    );
}

export default Experience;