'use client'

import {Code, Github, Palette} from "lucide-react";
import {BentoGridItemProps} from "@/types/bentoGrid";
import CTAItem from "@/components/CTAItem";

const bentoItems: BentoGridItemProps[] = [
    {
        title: "Code Wizardry",
        description: "Turning caffeine into code since 2020. Full-stack developer with a passion for clean architecture.",
        icon: <Code className="h-6 w-6"/>,
        className: "md:col-span-1 md:row-span-1",
    },
    {
        title: "Tech Stack Virtuoso",
        description: "Demonstrating adaptability across diverse tech-stacks.",
        icon: <Palette className="h-6 w-6"/>,
        className: "md:col-span-1 md:row-span-1",
    },
    {
        title: "Open Source",
        description: "Contributing to the community one commit at a time.",
        icon: <Github className="h-6 w-6"/>,
        className: "md:col-span-2 md:row-span-1",
        objectFit: "contain"
    },
];

function CtaSection() {

    return (
        <section className="w-full py-2">
            <div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 auto-rows-auto w-full">
                    {bentoItems.map((item, index) => (
                        <CTAItem key={index + " Bento grid"} item={item} index={index}/>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default CtaSection;