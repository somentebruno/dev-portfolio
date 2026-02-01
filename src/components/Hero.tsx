import Image from "next/image";
import Link from "next/link";
import { Code } from "lucide-react";

import { useTranslations } from "next-intl";

export function Hero() {
    const t = useTranslations("Hero");

    return (
        <section
            id="about"
            className="flex flex-col md:flex-row items-center justify-between gap-12 py-12 md:py-20"
        >
            <div className="w-full md:w-1/2 space-y-6 order-2 md:order-1">
                <div className="space-y-2">
                    <p className="font-mono text-primary text-sm">{t("greeting")}</p>
                    <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-text-main-light dark:text-text-main-dark">
                        Bruno Lucas
                    </h1>
                    <h2 className="text-2xl md:text-3xl font-medium text-text-muted-light dark:text-text-muted-dark">
                        {t("role")}
                    </h2>
                </div>
                <p className="text-text-muted-light dark:text-text-muted-dark text-lg max-w-lg leading-relaxed text-justify">
                    {t("description")}
                </p>
                <div className="flex gap-4 pt-4">
                    <Link
                        href="#projects"
                        className="inline-flex items-center gap-2 px-6 py-3 bg-transparent border border-primary text-primary hover:bg-primary/10 rounded-lg transition-all font-medium"
                    >
                        <Code className="text-lg" />
                        {t("viewProjects")}
                    </Link>
                    <Link
                        href="#contact"
                        className="inline-flex items-center gap-2 px-6 py-3 text-text-muted-light dark:text-text-muted-dark hover:text-text-main-light dark:hover:text-text-main-dark transition-colors font-medium"
                    >
                        {t("contactMe")}
                    </Link>
                </div>
            </div>
            <div className="w-full md:w-1/2 flex justify-center md:justify-end order-1 md:order-2 relative">
                <div className="absolute inset-0 bg-primary/20 rounded-full blur-3xl transform translate-x-10 translate-y-10 -z-10"></div>
                <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-2xl overflow-hidden border-2 border-primary/30 shadow-2xl rotate-3 hover:rotate-0 transition-transform duration-500 hover:shadow-[0_0_10px_rgba(14,165,233,0.4)]">
                    <Image
                        src="/profile-smile.png"
                        alt="Bruno Lucas"
                        width={320}
                        height={320}
                        priority
                        className="w-full h-full object-cover filter grayscale hover:grayscale-0 transition-all duration-500"
                    />
                </div>
                <div
                    className="absolute -bottom-16 left-0 md:-left-6 bg-surface-light dark:bg-surface-dark p-4 rounded-lg shadow-xl border border-border-light dark:border-border-dark flex items-center gap-3 animate-bounce whitespace-nowrap z-30"
                    style={{ animationDuration: "3s" }}
                >
                    <span className="relative flex h-3 w-3">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
                    </span>
                    <span className="text-sm font-mono font-medium">{t("openToWork")}</span>
                </div>
            </div>
        </section>
    );
}
