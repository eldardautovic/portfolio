import React from "react";
import SectionHeader from "@/components/ui/section-header";
import TechnologiesItem from "@/components/TechnologiesItem";

export type Technology = {
    id: number;
    name: string;
    icon: string;
    type: string;
    className: string;
};

const technologies: Technology[] = [
    {id: 1, name: "Angular", icon: "angular", type: "front", className: "bg-red-500/30"},
    {id: 2, name: "React", icon: "react", type: "front", className: "bg-blue-500/30"},
    {id: 3, name: "Typescript", icon: "typescript", type: "front", className: "bg-blue-600/30"},
    {id: 4, name: "Node.js", icon: "nodejs", type: "back", className: "bg-green-500/30"},
    {id: 5, name: "C#", icon: "csharp", type: "back", className: "bg-purple-500/20"},
    {id: 7, name: "NextJS", icon: "nexjts", type: "back", className: "bg-gray-100/10"},
    {id: 8, name: "ASP.NET", icon: "net", type: "back", className: "bg-blue-800/30"},
    {id: 9, name: "HTML", icon: "html", type: "front", className: "bg-orange-500/30"},
    {id: 10, name: "CSS", icon: "css", type: "front", className: "bg-blue-400/30"},
    {id: 11, name: "Tailwind CSS", icon: "tailwind", type: "front", className: "bg-teal-500/20"},
    {id: 12, name: "Typescript", icon: "typescript", type: "back", className: "bg-blue-700/30"},
    {id: 13, name: "Git", icon: "git", type: "tools", className: "bg-orange-600/20"},
    {id: 14, name: "GitHub", icon: "github", type: "tools", className: "bg-gray-100/10"},
    {id: 15, name: "Visual Studio", icon: "visualstudio", type: "tools", className: "bg-purple-600/20"},
    {id: 16, name: "VS Code", icon: "vscode", type: "tools", className: "bg-blue-500/30"},
    {id: 17, name: "Figma", icon: "figma", type: "tools", className: "bg-pink-500/20"},
    {id: 18, name: "Flutter", icon: "flutter", type: "mobile", className: "bg-blue-400/20"},
    {id: 19, name: "Dart", icon: "dart", type: "mobile", className: "bg-blue-700/20"},
    {id: 20, name: "MSSQL", icon: "mssql", type: "database", className: "bg-red-600/20"},
    {id: 21, name: "MySQL", icon: "mysql", type: "database", className: "bg-blue-500/30"},
    {id: 22, name: "MongoDB", icon: "mongodb", type: "database", className: "bg-green-600/30"},
    {id: 23, name: "PostgreSQL", icon: "postgresql", type: "database", className: "bg-indigo-500/30"},
];

const categories = [
    {label: "Front-end", filter: "front"},
    {label: "Back-end", filter: "back"},
    {label: "Database", filter: "database"},
    {label: "Mobile", filter: "mobile"},
    {label: "Tools", filter: "tools"},
];

function Technologies() {
    return (
        <section className="mt-5">
            <SectionHeader title="Technologies"/>
            {categories.map(({label, filter}) => {
                const filteredTechnologies = technologies.filter((item) => item.type === filter);
                return (
                    filteredTechnologies.length > 0 && (
                        <div key={filter} className="mb-4">
                            <h4 className="scroll-m-20 text-md font-medium tracking-tight mt-2 text-slate-400">
                                {label}
                            </h4>
                            <div className="grid grid-cols-2 md:grid-cols-4 gap-2 mt-2">
                                {filteredTechnologies.map((item) => (
                                    <TechnologiesItem key={item.id} item={item}/>
                                ))}
                            </div>
                        </div>
                    )
                );
            })}
        </section>
    );
}

export default Technologies;