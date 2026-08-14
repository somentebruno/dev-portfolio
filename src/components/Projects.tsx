"use client";

import Image from "next/image";
import Link from "next/link";
import { Search, Globe, Code, ChevronDown, ChevronUp, Lock, X, ArrowRight } from "lucide-react";
import { useState } from "react";

import { useTranslations } from "next-intl";

export function Projects() {
    const t = useTranslations("Projects");
    const [search, setSearch] = useState("");
    const [showAll, setShowAll] = useState(false);
    const [showFeaturedModal, setShowFeaturedModal] = useState(false);

    const featuredProject = {
        title: "Tele Educa MT",
        shortDescription: t("projectTeleEducaShortDesc"),
        fullDescription: t("projectTeleEducaDesc"),
        tags: ["Next.js", "TypeScript", "PostgreSQL", "Multi-tenant", "Jitsi/WebRTC"],
        gallery: ["/tele-educa.png"],
    };

    const projects = [
        {
            title: "TaskFlow Manager",
            description: t("project1Desc"),
            tags: ["React", "TypeScript", "Tailwind CSS", "State Management"],
            image: "/taskflow.png",
            link: "https://todo.brunolucasdev.com",
            repo: "https://github.com/somentebruno/to-do-list-app",
        },
        {
            title: "DevLinks",
            description: t("project2Desc"),
            tags: ["HTML5", "CSS3", "JavaScript", "DOM Manipulation"],
            image: "/devlinks-v3.png",
            link: "https://somentebruno.github.io/projeto-dev-links/",
            repo: "https://github.com/somentebruno/projeto-dev-links",
        },
        {
            title: "Móveis Customizados",
            description: t("project3Desc"),
            tags: ["HTML5", "CSS3", "Figma", "Git"],
            image: "/moveis-customizados-v2.png",
            link: "https://somentebruno.github.io/projeto-moveis-customizados/",
            repo: "https://github.com/somentebruno/projeto-moveis-customizados",
        },
        {
            title: "Treine Me",
            description: t("project4Desc"),
            tags: ["HTML5", "CSS3"],
            image: "/treineme-v2.png",
            link: "https://somentebruno.github.io/projeto-treine-me/",
            repo: "https://github.com/somentebruno/projeto-treine-me",
        },
        {
            title: "Jogo da Adivinhação",
            description: t("project5Desc"),
            tags: ["HTML5", "CSS3", "JavaScript"],
            image: "/jogo-advinhacao.png",
            link: "https://somentebruno.github.io/jogo-advinhacao/",
            repo: "https://github.com/somentebruno/jogo-advinhacao",
        },
    ];

    const filteredProjects = projects.filter((project) =>
        project.title.toLowerCase().includes(search.toLowerCase())
    );

    const displayedProjects = showAll ? filteredProjects : filteredProjects.slice(0, 3);

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
            <div className="group relative grid md:grid-cols-2 bg-surface-light dark:bg-surface-dark border border-border-light dark:border-border-dark rounded-xl overflow-hidden hover:shadow-xl hover:border-primary/50 transition-all duration-300 mb-8">
                <div className="relative h-56 md:h-full overflow-hidden bg-gray-200 dark:bg-gray-800">
                    <Image
                        src={featuredProject.gallery[0]}
                        alt={`${featuredProject.title} Interface`}
                        width={800}
                        height={450}
                        className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                    />
                    <span className="absolute top-4 left-4 flex items-center gap-2 px-3 py-1.5 rounded-full bg-black/60 text-white/90 font-bold text-[10px] tracking-wider uppercase">
                        <Lock className="w-3 h-3" />
                        {t("restrictedAccess")}
                    </span>
                </div>
                <div className="p-6 md:p-8 flex flex-col justify-center gap-4">
                    <span className="font-mono text-primary text-xs uppercase tracking-widest">
                        {t("featuredLabel")}
                    </span>
                    <h4 className="text-2xl font-bold text-text-main-light dark:text-text-main-dark">
                        {featuredProject.title}
                    </h4>
                    <p className="text-sm text-text-muted-light dark:text-text-muted-dark text-justify">
                        {featuredProject.shortDescription}
                    </p>
                    <div className="flex flex-wrap gap-2">
                        {featuredProject.tags.map((tag) => (
                            <span
                                key={tag}
                                className="px-2 py-1 bg-background-light dark:bg-background-dark border border-border-light dark:border-border-dark rounded text-[10px] font-mono text-text-muted-light dark:text-text-muted-dark uppercase"
                            >
                                {tag}
                            </span>
                        ))}
                    </div>
                    <button
                        onClick={() => setShowFeaturedModal(true)}
                        className="group/btn inline-flex items-center gap-2 self-start mt-2 px-5 py-2.5 rounded-full bg-primary text-white font-bold text-xs tracking-wider hover:bg-primary/90 transition-colors cursor-pointer"
                    >
                        {t("learnMore")}
                        <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                    </button>
                </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {displayedProjects.map((project) => (
                    <div
                        key={project.title}
                        className="group bg-surface-light dark:bg-surface-dark border border-border-light dark:border-border-dark rounded-xl overflow-hidden hover:shadow-xl hover:border-primary/50 transition-all duration-300 flex flex-col h-full"
                    >
                        <div className="relative h-48 overflow-hidden bg-gray-200 dark:bg-gray-800 group">
                            <Image
                                src={project.image}
                                alt={`${project.title} Interface`}
                                width={400}
                                height={200}
                                className="w-full h-full object-cover transform group-hover:scale-110 group-hover:blur-sm transition-all duration-500"
                            />
                            <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                                {project.link && (
                                    <Link
                                        href={project.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center gap-2 px-5 py-2 rounded-full border border-primary text-white bg-transparent hover:bg-primary transition-colors font-bold text-xs tracking-wider"
                                    >
                                        <Globe className="w-4 h-4" />
                                        DEMO
                                    </Link>
                                )}
                                {project.repo && (
                                    <Link
                                        href={project.repo}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center gap-2 px-5 py-2 rounded-full border border-primary text-white bg-transparent hover:bg-primary transition-colors font-bold text-xs tracking-wider"
                                    >
                                        <Code className="w-4 h-4" />
                                        CODE
                                    </Link>
                                )}
                                {!project.link && !project.repo && (
                                    <span className="flex items-center gap-2 px-5 py-2 rounded-full border border-white/30 text-white/80 font-bold text-xs tracking-wider">
                                        <Lock className="w-4 h-4" />
                                        {t("restrictedAccess")}
                                    </span>
                                )}
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
            {filteredProjects.length > 3 && (
                <div className="flex justify-center mt-8">
                    <button
                        onClick={() => setShowAll(!showAll)}
                        className="flex items-center gap-2 group text-text-muted-light dark:text-text-muted-dark hover:text-primary dark:hover:text-primary transition-colors text-sm font-medium cursor-pointer"
                    >
                        {showAll ? (
                            <>
                                {t("showLess")}
                                <ChevronUp className="w-4 h-4 group-hover:-translate-y-1 transition-transform" />
                            </>
                        ) : (
                            <>
                                {t("showMore")}
                                <ChevronDown className="w-4 h-4 group-hover:translate-y-1 transition-transform" />
                            </>
                        )}
                    </button>
                </div>
            )}
            {showFeaturedModal && (
                <div
                    className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70"
                    onClick={() => setShowFeaturedModal(false)}
                >
                    <div
                        className="relative w-full max-w-2xl max-h-[85vh] overflow-y-auto bg-surface-light dark:bg-surface-dark border border-border-light dark:border-border-dark rounded-xl p-6 md:p-8"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <button
                            onClick={() => setShowFeaturedModal(false)}
                            aria-label={t("close")}
                            className="absolute top-4 right-4 text-text-muted-light dark:text-text-muted-dark hover:text-primary transition-colors cursor-pointer"
                        >
                            <X className="w-5 h-5" />
                        </button>
                        <span className="flex items-center gap-2 w-fit px-3 py-1.5 rounded-full bg-background-light dark:bg-background-dark border border-border-light dark:border-border-dark text-text-muted-light dark:text-text-muted-dark font-bold text-[10px] tracking-wider uppercase mb-4">
                            <Lock className="w-3 h-3" />
                            {t("restrictedAccess")}
                        </span>
                        <h3 className="text-2xl font-bold text-text-main-light dark:text-text-main-dark mb-4 pr-8">
                            {featuredProject.title}
                        </h3>
                        <p className="text-sm text-text-muted-light dark:text-text-muted-dark leading-relaxed text-justify mb-6">
                            {featuredProject.fullDescription}
                        </p>
                        <div className="flex flex-wrap gap-2 mb-6">
                            {featuredProject.tags.map((tag) => (
                                <span
                                    key={tag}
                                    className="px-2 py-1 bg-background-light dark:bg-background-dark border border-border-light dark:border-border-dark rounded text-[10px] font-mono text-text-muted-light dark:text-text-muted-dark uppercase"
                                >
                                    {tag}
                                </span>
                            ))}
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                            {featuredProject.gallery.map((src) => (
                                <div key={src} className="relative h-40 rounded-lg overflow-hidden border border-border-light dark:border-border-dark">
                                    <Image
                                        src={src}
                                        alt={`${featuredProject.title} screenshot`}
                                        width={400}
                                        height={220}
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            )}
        </section>
    );
}
