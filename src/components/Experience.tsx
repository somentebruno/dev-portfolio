import Image from "next/image";
import { ChevronRight } from "lucide-react";

export function Experience() {
    return (
        <section id="experience" className="space-y-8">
            <div className="flex items-center gap-4 mb-8">
                <h3 className="text-xs font-bold tracking-widest text-text-muted-light dark:text-text-muted-dark uppercase">
                    Currently
                </h3>
                <div className="h-[1px] bg-border-light dark:border-border-dark flex-grow"></div>
            </div>
            <div className="bg-surface-light dark:bg-surface-dark border border-border-light dark:border-border-dark rounded-xl p-6 md:p-8 hover:border-primary/50 transition-colors group relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
                <div className="relative z-10">
                    <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                        <div>
                            <h3 className="text-xl md:text-2xl font-bold text-text-main-light dark:text-text-main-dark group-hover:text-primary transition-colors">
                                Senior Frontend Engineer
                            </h3>
                            <p className="text-sm font-mono text-text-muted-light dark:text-text-muted-dark mt-1">
                                2023 — PRESENT
                            </p>
                        </div>
                        <div className="flex items-center gap-2">
                            <span className="inline-flex items-center px-2.5 py-0.5 rounded text-xs font-medium bg-primary/10 text-primary">
                                TechFlow Inc.
                            </span>
                            <span className="text-xs text-text-muted-light dark:text-text-muted-dark">
                                Remote
                            </span>
                        </div>
                    </div>
                    <p className="text-text-muted-light dark:text-text-muted-dark mb-6 max-w-2xl">
                        Leading the frontend architecture migration to Next.js 14. Mentoring
                        junior developers and implementing a new design system focused on
                        accessibility and performance.
                    </p>
                    <div className="flex flex-wrap gap-3">
                        <span className="flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-background-light dark:bg-background-dark border border-border-light dark:border-border-dark text-xs font-medium text-text-main-light dark:text-text-main-dark">
                            <Image
                                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDs4hYAGFo2LDMDG75h7qJz7oi6xpzfP_zW_DBV8BxyVgKxBNSs5WjKb6ds4RDyNqRfsenjSgbgVWoGPIl1Mh96lxIoeGuGkWD-qhKUAjrJP5FuT34ttBJqVq8-4ehyP5F9Ksujj8rthmYeCuezofKM3gdX-V8_z2Jz1y_3kkRhr0nxU42DNAUSThjYzzh1bH_Bn9-LZT-K1i-k1eAf99dBN0lxJFMkRvQfq6PTen_q1wUKY9cFWJtF7iP98HuMb8cluA4FHsoaYlI"
                                alt="NextJS"
                                width={16}
                                height={16}
                                className="w-4 h-4 dark:invert"
                            />
                            Next.js
                        </span>
                        <span className="flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-background-light dark:bg-background-dark border border-border-light dark:border-border-dark text-xs font-medium text-text-main-light dark:text-text-main-dark">
                            <Image
                                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAynr6isTlt5u7bHprPYfS1D981Atl9YxEDCP46nQcIbN1gayB8fEe4LPEahtQGXM7BvKP7vArsSo_i-dzgQreWpuh1PrucPodRst2lXQubmdmLZpuNhyofxmVJkWgI1YUu3ZHv65JiF3d-aWVbQ87kWYQ71stJ9Y1wobUMgcqoRt0m7uOiRJHR0pFHIVLt2wzpfnRB3N9n25kT15Py2R49c5CM_AjPLjo5FYzNEr_lBLxVTGS9B5fFNWrcEZxeoDOnrXsgQBknjzw"
                                alt="TypeScript"
                                width={16}
                                height={16}
                                className="w-4 h-4"
                            />
                            TypeScript
                        </span>
                        <span className="flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-background-light dark:bg-background-dark border border-border-light dark:border-border-dark text-xs font-medium text-text-main-light dark:text-text-main-dark">
                            <Image
                                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDZd89vcbirutr6Zo8FKPZCuS-L20rOCWjmVr06EhHSv9iolJIpZbC4tDkV3_WYxgHg73iLgGL3IczTlbfsi3NqbhJUPAUl6zioQLAjfv-p0Nrc2VM4LK24YflviCWR4v-q9254zhrdY-uYhoBFEcJ9yp9fVM5l0JYVKv3Jq2FnHi-o6JclccmPCS-4ANitFlIGPAd82H_9HfUTG_MjKCaEdQwsuEnUyOCjL8UWt-bznoMsSjVfuQQV-CHwRJ8brtvWHUkZj43lax8"
                                alt="Tailwind"
                                width={16}
                                height={16}
                                className="w-4 h-4"
                            />
                            Tailwind
                        </span>
                    </div>
                </div>
            </div>
            <details className="group">
                <summary className="flex items-center gap-2 cursor-pointer text-sm font-medium text-text-muted-light dark:text-text-muted-dark hover:text-text-main-light dark:hover:text-text-main-dark transition-colors list-none select-none">
                    <ChevronRight className="transition-transform group-open:rotate-90 text-lg" />
                    Previous roles
                </summary>
                <div className="pl-7 mt-4 space-y-6 border-l border-border-light dark:border-border-dark ml-2">
                    <div className="pl-6 relative">
                        <div className="absolute -left-[5px] top-2 w-2.5 h-2.5 rounded-full bg-border-light dark:bg-border-dark"></div>
                        <h4 className="text-base font-semibold text-text-main-light dark:text-text-main-dark">
                            Software Developer
                        </h4>
                        <p className="text-xs text-text-muted-light dark:text-text-muted-dark mb-1">
                            Innovate Solutions • 2021 — 2023
                        </p>
                        <p className="text-sm text-text-muted-light dark:text-text-muted-dark">
                            Developed e-commerce platforms using React and Node.js.
                        </p>
                    </div>
                    <div className="pl-6 relative">
                        <div className="absolute -left-[5px] top-2 w-2.5 h-2.5 rounded-full bg-border-light dark:bg-border-dark"></div>
                        <h4 className="text-base font-semibold text-text-main-light dark:text-text-main-dark">
                            Junior Web Dev
                        </h4>
                        <p className="text-xs text-text-muted-light dark:text-text-muted-dark mb-1">
                            StartUp Hub • 2020 — 2021
                        </p>
                        <p className="text-sm text-text-muted-light dark:text-text-muted-dark">
                            Collaborated on UI implementation and bug fixing.
                        </p>
                    </div>
                </div>
            </details>
        </section>
    );
}
