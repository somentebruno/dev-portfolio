"use client";

import Image from "next/image";
import { ArrowUpRight, Search } from "lucide-react";
import { useState } from "react";

import { useTranslations } from "next-intl";

export function Projects() {
    const t = useTranslations("Projects");
    const [search, setSearch] = useState("");

    const projects = [
        {
            title: "TaskFlow Manager",
            description: t("project1Desc"),
            tags: ["React", "TypeScript", "Tailwind CSS", "State Management"],
            image: "/taskflow.png",
        },
    ];

    const filteredProjects = projects.filter((project) =>
        project.title.toLowerCase().includes(search.toLowerCase())
    );

    return (
        <section id="projects" className="space-y-8">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
                <h3 className="text-xs font-bold tracking-widest text-text-muted-light dark:text-text-muted-dark uppercase">
                    {t("recentProjects")}
                </h3>
                <div className="flex items-center gap-3">
                    <div className="relative group">
                        <input
                            type="text"
                            placeholder={t("filterPlaceholder")}
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                            className="bg-surface-light dark:bg-surface-dark border border-border-light dark:border-border-dark rounded-full px-4 py-1.5 text-sm text-text-main-light dark:text-text-main-dark focus:outline-none focus:ring-1 focus:ring-primary w-48 md:w-64 pl-10"
                        />
                        <Search className="absolute left-3 top-1.5 text-text-muted-light dark:text-text-muted-dark w-4 h-4 mt-0.5" />
                    </div>
                </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredProjects.map((project) => (
                    <div
                        key={project.title}
                        className="group bg-surface-light dark:bg-surface-dark border border-border-light dark:border-border-dark rounded-xl overflow-hidden hover:shadow-xl hover:border-primary/50 transition-all duration-300 flex flex-col h-full"
                    >
                        <div className="relative h-48 overflow-hidden bg-gray-200 dark:bg-gray-800">
                            <Image
                                src={project.image}
                                alt={`${project.title} Interface`}
                                width={400}
                                height={200}
                                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                            />
                            <div className="absolute top-3 right-3 bg-black/50 backdrop-blur-sm p-1.5 rounded-full opacity-0 group-hover:opacity-100 transition-opacity">
                                <ArrowUpRight className="text-white w-4 h-4" />
                            </div>
                        </div>
                        <div className="p-5 flex flex-col flex-grow">
                            <h4 className="text-lg font-bold text-text-main-light dark:text-text-main-dark mb-2 group-hover:text-primary transition-colors">
                                {project.title}
                            </h4>
                            <p className="text-sm text-text-muted-light dark:text-text-muted-dark mb-4 flex-grow text-justify">
                                {project.description}
                            </p>
                            <div className="flex flex-wrap gap-2 mt-auto">
                                {project.tags.map((tag) => (
                                    <span
                                        key={tag}
                                        className="px-2 py-1 bg-background-light dark:bg-background-dark border border-border-light dark:border-border-dark rounded text-[10px] font-mono text-text-muted-light dark:text-text-muted-dark uppercase"
                                    >
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
