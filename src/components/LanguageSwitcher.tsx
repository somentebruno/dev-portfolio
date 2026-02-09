"use client";

import { useLocale } from "next-intl";
import { useRouter } from "next/navigation";
import { useTransition } from "react";

export function LanguageSwitcher() {
    const locale = useLocale();
    const router = useRouter();
    const [isPending, startTransition] = useTransition();

    const switchLanguage = (nextLocale: string) => {
        if (locale === nextLocale) return;
        startTransition(() => {
            window.location.href = `/${nextLocale}`;
        });
    };

    return (
        <div className="flex items-center gap-1 bg-surface-light dark:bg-surface-dark rounded-full border border-border-light dark:border-border-dark p-1">
            <button
                onClick={() => switchLanguage("pt")}
                disabled={isPending}
                className={`px-3 py-1 rounded-full text-xs font-bold transition-all duration-300 ${locale === "pt"
                        ? "bg-sky-700 text-white dark:bg-sky-400 dark:text-slate-900 shadow-md transform scale-105"
                        : "text-slate-500 dark:text-slate-400 hover:text-sky-700 dark:hover:text-sky-400 cursor-pointer hover:bg-sky-100/50 dark:hover:bg-slate-800/50"
                    }`}
                aria-label="Switch to Portuguese"
            >
                pt-br
            </button>
            <button
                onClick={() => switchLanguage("en")}
                disabled={isPending}
                className={`px-3 py-1 rounded-full text-xs font-bold transition-all duration-300 ${locale === "en"
                        ? "bg-sky-700 text-white dark:bg-sky-400 dark:text-slate-900 shadow-md transform scale-105"
                        : "text-slate-500 dark:text-slate-400 hover:text-sky-700 dark:hover:text-sky-400 cursor-pointer hover:bg-sky-100/50 dark:hover:bg-slate-800/50"
                    }`}
                aria-label="Switch to English"
            >
                en-us
            </button>
        </div>
    );
}
