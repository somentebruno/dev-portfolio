"use client";

import { useLocale } from "next-intl";
import { useRouter } from "next/navigation";
import { useTransition } from "react";

export function LanguageSwitcher() {
    const locale = useLocale();
    const router = useRouter();
    const [isPending, startTransition] = useTransition();

    const toggleLanguage = () => {
        const nextLocale = locale === "en" ? "pt" : "en";
        startTransition(() => {
            // Typically you would use logic to preserve the path, 
            // but simple replacement works for this straightforward stucture
            // or using a library like `next-intl/navigation` Link/usePathname
            window.location.href = `/${nextLocale}`;
        });
    };

    return (
        <button
            onClick={toggleLanguage}
            disabled={isPending}
            className="px-3 py-1 rounded-md text-sm font-medium border border-border-light dark:border-border-dark hover:bg-surface-light dark:hover:bg-surface-dark transition-colors"
            aria-label="Switch language"
        >
            {locale === "en" ? "PT" : "EN"}
        </button>
    );
}
