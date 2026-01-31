import Image from "next/image";
import { ChevronRight } from "lucide-react";

import { useTranslations } from "next-intl";

export function Experience() {
    const t = useTranslations("Experience");

    return (
        <section id="experience" className="space-y-8">
            <div className="flex items-center gap-4 mb-8">
                <h3 className="text-xs font-bold tracking-widest text-text-muted-light dark:text-text-muted-dark uppercase">
                    {t("featured")}
                </h3>
                <div className="h-[1px] bg-border-light dark:border-border-dark flex-grow"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Estágio (Current) */}
                <div className="bg-surface-light dark:bg-surface-dark border border-border-light dark:border-border-dark rounded-xl p-6 hover:border-primary/50 transition-colors group relative overflow-hidden flex flex-col h-full">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
                    <div className="relative z-10 flex-grow">
                        <div className="mb-4">
                            <h3 className="text-lg md:text-xl font-bold text-text-main-light dark:text-text-main-dark group-hover:text-primary transition-colors">
                                {t("seniorRole")}
                            </h3>
                            <p className="text-xs font-mono text-text-muted-light dark:text-text-muted-dark mt-1 uppercase">
                                NOV/2025 — {t("present")}
                            </p>
                            <div className="mt-2 text-xs text-primary font-medium bg-primary/10 inline-block px-2 py-1 rounded">
                                Saúde Digital MT | SES-MT
                            </div>
                        </div>
                        <p className="text-sm text-text-muted-light dark:text-text-muted-dark mb-6 text-justify">
                            {t("seniorDesc")}
                        </p>
                    </div>
                    <div className="flex flex-wrap gap-2 relative z-10 mt-auto">
                        <span className="px-2 py-1 text-[10px] rounded bg-background-light dark:bg-background-dark border border-border-light dark:border-border-dark text-text-main-light dark:text-text-main-dark font-medium">
                            {t("tag1")}
                        </span>
                        <span className="px-2 py-1 text-[10px] rounded bg-background-light dark:bg-background-dark border border-border-light dark:border-border-dark text-text-main-light dark:text-text-main-dark font-medium">
                            {t("tag2")}
                        </span>
                        <span className="px-2 py-1 text-[10px] rounded bg-background-light dark:bg-background-dark border border-border-light dark:border-border-dark text-text-main-light dark:text-text-main-dark font-medium">
                            {t("tag3")}
                        </span>
                    </div>
                </div>

                {/* Programador (Featured Previous - Role 1) */}
                <div className="bg-surface-light dark:bg-surface-dark border border-border-light dark:border-border-dark rounded-xl p-6 hover:border-primary/50 transition-colors group relative overflow-hidden flex flex-col h-full">
                    <div className="relative z-10 flex-grow">
                        <div className="mb-4">
                            <h3 className="text-lg md:text-xl font-bold text-text-main-light dark:text-text-main-dark group-hover:text-primary transition-colors">
                                {t("role1")}
                            </h3>
                            <p className="text-xs font-mono text-text-muted-light dark:text-text-muted-dark mt-1 uppercase">
                                JAN/2025 — JUL/2025
                            </p>
                            <div className="mt-2 text-xs text-text-muted-light dark:text-text-muted-dark font-medium inline-block">
                                Conselho da Comunidade de Execução Penal de Cuiabá
                            </div>
                        </div>
                        <p className="text-sm text-text-muted-light dark:text-text-muted-dark mb-6 text-justify">
                            {t("desc1")}
                        </p>
                    </div>
                    <div className="flex flex-wrap gap-2 relative z-10 mt-auto">
                        <span className="px-2 py-1 text-[10px] rounded bg-background-light dark:bg-background-dark border border-border-light dark:border-border-dark text-text-main-light dark:text-text-main-dark font-medium">
                            {t("tagRole1_1")}
                        </span>
                        <span className="px-2 py-1 text-[10px] rounded bg-background-light dark:bg-background-dark border border-border-light dark:border-border-dark text-text-main-light dark:text-text-main-dark font-medium">
                            {t("tagRole1_2")}
                        </span>
                        <span className="px-2 py-1 text-[10px] rounded bg-background-light dark:bg-background-dark border border-border-light dark:border-border-dark text-text-main-light dark:text-text-main-dark font-medium">
                            {t("tagRole1_3")}
                        </span>
                    </div>
                </div>
            </div>

            <details className="group">
                <summary className="flex items-center gap-2 cursor-pointer text-sm font-medium text-text-muted-light dark:text-text-muted-dark hover:text-text-main-light dark:hover:text-text-main-dark transition-colors list-none select-none">
                    <ChevronRight className="transition-transform group-open:rotate-90 text-lg" />
                    {t("previousRoles")}
                </summary>
                <div className="pl-7 mt-4 space-y-6 border-l border-border-light dark:border-border-dark ml-2">
                    <div className="pl-6 relative">
                        <div className="absolute -left-[5px] top-2 w-2.5 h-2.5 rounded-full bg-border-light dark:bg-border-dark"></div>
                        <h4 className="text-base font-semibold text-text-main-light dark:text-text-main-dark">
                            {t("role2")}
                        </h4>
                        <p className="text-xs text-text-muted-light dark:text-text-muted-dark mb-1">
                            Conselho da Comunidade de Execução Penal de Cuiabá • JAN/2022 — DEZ/2024
                        </p>
                        <p className="text-sm text-text-muted-light dark:text-text-muted-dark mb-4 text-justify">
                            {t("desc2")}
                        </p>
                        <div className="flex flex-wrap gap-2">
                            <span className="px-2 py-1 text-[10px] rounded bg-surface-light dark:bg-surface-dark border border-border-light dark:border-border-dark text-text-muted-light dark:text-text-muted-dark">
                                {t("tagRole2_1")}
                            </span>
                            <span className="px-2 py-1 text-[10px] rounded bg-surface-light dark:bg-surface-dark border border-border-light dark:border-border-dark text-text-muted-light dark:text-text-muted-dark">
                                {t("tagRole2_2")}
                            </span>
                            <span className="px-2 py-1 text-[10px] rounded bg-surface-light dark:bg-surface-dark border border-border-light dark:border-border-dark text-text-muted-light dark:text-text-muted-dark">
                                {t("tagRole2_3")}
                            </span>
                            <span className="px-2 py-1 text-[10px] rounded bg-surface-light dark:bg-surface-dark border border-border-light dark:border-border-dark text-text-muted-light dark:text-text-muted-dark">
                                {t("tagRole2_4")}
                            </span>
                        </div>
                    </div>
                </div>
            </details>
        </section>
    );
}
