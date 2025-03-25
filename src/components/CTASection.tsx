'use client'

import {motion} from 'framer-motion';
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

const containerVariants = {
    hidden: {opacity: 0},
    visible: {
        opacity: 1,
        transition: {
            delayChildren: 0.2,
            staggerChildren: 0.1
        }
    }
};

const itemVariants = {
    hidden: {
        y: 50,
        opacity: 0
    },
    visible: {
        y: 0,
        opacity: 1,
        transition: {
            duration: 0.5,
            ease: "easeOut"
        }
    }
};

function CtaSection() {

    return (
        <motion.section
            className="w-full py-2"
            initial="hidden"
            animate="visible"
            variants={containerVariants}
        >
            <div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 auto-rows-auto w-full">
                    {bentoItems.map((item, index) => (
                        <motion.div
                            key={index + " Bento grid"}
                            variants={itemVariants}
                            className={item.className}
                        >
                            <CTAItem item={item} index={index}/>
                        </motion.div>
                    ))}
                </div>
            </div>
        </motion.section>
    );
}

export default CtaSection;