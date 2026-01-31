import { useTranslations } from "next-intl";

const technologies = [
    {
        name: "TypeScript",
        iconClass: "devicon-typescript-plain colored",
    },
    {
        name: "Next.js",
        iconClass: "devicon-nextjs-plain text-black dark:text-white",
    },
    {
        name: "Tailwind CSS",
        iconClass: "devicon-tailwindcss-original",
    },
    {
        name: "Node.js",
        iconClass: "devicon-nodejs-plain-wordmark colored",
    },
    {
        name: "Git / GitHub",
        iconClass: "devicon-github-original text-black dark:text-white",
    },
];

export function Technologies() {
    const t = useTranslations("Technologies");

    return (
        <section className="space-y-6">
            <h3 className="text-xs font-bold tracking-widest text-text-muted-light dark:text-text-muted-dark uppercase">
                {t("title")}
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
                {technologies.map((tech) => (
                    <div
                        key={tech.name}
                        className="flex flex-col items-center justify-center p-4 rounded-xl bg-surface-light dark:bg-surface-dark border border-border-light dark:border-border-dark hover:border-primary/50 transition-colors group h-24"
                    >
                        <i className={`${tech.iconClass} text-4xl mb-2 group-hover:scale-110 transition-transform`}></i>
                        <span className="text-xs font-medium text-text-muted-light dark:text-text-muted-dark group-hover:text-primary mt-2">
                            {tech.name}
                        </span>
                    </div>
                ))}
            </div>
        </section>
    );
}
