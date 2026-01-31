"use client";

import { useTheme } from "next-themes";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";
import { LanguageSwitcher } from "./LanguageSwitcher";

import { useTranslations } from "next-intl";

export function Navbar() {
    const t = useTranslations("Navbar");
    const { theme, setTheme } = useTheme();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    return (
        <nav className="fixed top-0 w-full z-50 bg-background-light/80 dark:bg-background-dark/80 backdrop-blur-md border-b border-border-light dark:border-border-dark">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    <div className="flex-shrink-0 flex items-center gap-2">
                        <span className="font-mono text-primary font-bold text-lg">
                            {"{ dev_portfolio }"}
                        </span>
                    </div>
                    <div className="hidden md:flex items-center space-x-8">
                        <Link
                            href="#about"
                            className="text-sm font-medium text-text-muted-light dark:text-text-muted-dark hover:text-primary dark:hover:text-primary transition-colors"
                        >
                            {t("about")}
                        </Link>
                        <Link
                            href="#experience"
                            className="text-sm font-medium text-text-muted-light dark:text-text-muted-dark hover:text-primary dark:hover:text-primary transition-colors"
                        >
                            {t("experience")}
                        </Link>
                        <Link
                            href="#projects"
                            className="text-sm font-medium text-text-muted-light dark:text-text-muted-dark hover:text-primary dark:hover:text-primary transition-colors"
                        >
                            {t("projects")}
                        </Link>
                        <Link
                            href="#contact"
                            className="text-sm font-medium text-text-muted-light dark:text-text-muted-dark hover:text-primary dark:hover:text-primary transition-colors"
                        >
                            {t("contact")}
                        </Link>
                    </div>
                    <div className="flex items-center gap-4">
                        <button
                            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                            className="p-2 rounded-full hover:bg-surface-light dark:hover:bg-surface-dark transition-colors text-text-muted-light dark:text-text-muted-dark"
                            aria-label="Toggle theme"
                        >
                            {mounted && theme === "dark" ? (
                                <Sun className="w-5 h-5" />
                            ) : (
                                <Moon className="w-5 h-5" />
                            )}
                        </button>
                        <LanguageSwitcher />
                        <Link
                            href="#"
                            className="bg-primary text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-sky-600 transition-colors shadow-lg shadow-sky-500/20"
                        >
                            {t("resume")}
                        </Link>
                    </div>
                </div>
            </div>
        </nav>
    );
}
