import { useTranslations } from "next-intl";
import { GraduationCap } from "lucide-react";

export function Education() {
    const t = useTranslations("Education");

    const items = ["postgrad", "grad"] as const;

    return (
        <section id="education" className="space-y-8">
            <div className="flex items-center gap-4 mb-8">
                <h3 className="text-xs font-bold tracking-widest text-text-muted-light dark:text-text-muted-dark uppercase">
                    {t("title")}
                </h3>
                <div className="h-[1px] bg-border-light dark:border-border-dark flex-grow"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {items.map((key) => (
                    <div key={key} className="bg-surface-light dark:bg-surface-dark border border-border-light dark:border-border-dark rounded-xl p-6 hover:border-primary/50 transition-colors group relative overflow-hidden flex flex-col h-full">
                        <div className="relative z-10 flex-grow">
                            <div className="flex flex-col gap-4 mb-4">
                                <div className="flex items-start gap-4">
                                    <div className="p-3 bg-primary/10 rounded-lg text-primary shrink-0">
                                        <GraduationCap size={24} />
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-bold text-text-main-light dark:text-text-main-dark group-hover:text-primary transition-colors">
                                            {t(`items.${key}.degree`)}
                                        </h3>
                                        <p className="text-sm font-medium text-text-muted-light dark:text-text-muted-dark mt-1">
                                            {t(`items.${key}.university`)}
                                        </p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-2 text-xs font-mono text-text-muted-light dark:text-text-muted-dark uppercase bg-background-light dark:bg-background-dark px-3 py-1.5 rounded-full border border-border-light dark:border-border-dark self-start mt-auto">
                                    {t(`items.${key}.year`)}
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
