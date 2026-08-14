import Link from "next/link";
import { ArrowLeft, Globe, Lock } from "lucide-react";

import { getTranslations, setRequestLocale } from "next-intl/server";

import { Footer } from "@/components/Footer";
import { LightboxImage } from "@/components/LightboxImage";
import { teleEduca } from "@/data/tele-educa";

export default async function TeleEducaPage({
    params,
}: {
    params: Promise<{ locale: string }>;
}) {
    const { locale } = await params;
    setRequestLocale(locale);
    const t = await getTranslations("TeleEducaPage");
    const tProjects = await getTranslations("Projects");

    return (
        <main className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-20 space-y-10">
            <Link
                href={`/${locale}#projects`}
                className="inline-flex items-center gap-2 text-sm font-medium text-text-muted-light dark:text-text-muted-dark hover:text-primary transition-colors"
            >
                <ArrowLeft className="w-4 h-4" />
                {t("backToPortfolio")}
            </Link>

            <header className="space-y-4">
                <p className="font-mono text-primary text-sm">{t("eyebrow")}</p>
                <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-text-main-light dark:text-text-main-dark">
                    Tele Educa MT
                </h1>
                <div className="flex flex-wrap items-center gap-3">
                    <span className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-background-light dark:bg-background-dark border border-border-light dark:border-border-dark text-text-muted-light dark:text-text-muted-dark font-bold text-[10px] tracking-wider uppercase">
                        <Lock className="w-3 h-3" />
                        {tProjects("restrictedAccess")}
                    </span>
                    <Link
                        href={teleEduca.demoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors font-bold text-xs tracking-wider"
                    >
                        <Globe className="w-3.5 h-3.5" />
                        {t("viewLiveDemo")}
                    </Link>
                </div>
                <div className="flex flex-wrap gap-2 pt-1">
                    {teleEduca.tags.map((tag) => (
                        <span
                            key={tag}
                            className="px-2 py-1 bg-background-light dark:bg-background-dark border border-border-light dark:border-border-dark rounded text-[10px] font-mono text-text-muted-light dark:text-text-muted-dark uppercase"
                        >
                            {tag}
                        </span>
                    ))}
                </div>
            </header>

            <div className="relative w-full aspect-video rounded-xl overflow-hidden border border-border-light dark:border-border-dark shadow-xl">
                <LightboxImage
                    src={teleEduca.gallery[0]}
                    alt="Tele Educa MT Interface"
                    sizes="(min-width: 768px) 768px, 100vw"
                    className="object-cover"
                    priority
                />
            </div>

            <section className="space-y-3">
                <h2 className="text-lg font-bold text-text-main-light dark:text-text-main-dark">
                    {t("challengeTitle")}
                </h2>
                <p className="text-sm leading-relaxed text-text-muted-light dark:text-text-muted-dark text-justify">
                    {t("challengeBody")}
                </p>
            </section>

            <section className="space-y-3">
                <h2 className="text-lg font-bold text-text-main-light dark:text-text-main-dark">
                    {t("buildTitle")}
                </h2>
                <p className="text-sm leading-relaxed text-text-muted-light dark:text-text-muted-dark text-justify">
                    {t("buildBody")}
                </p>
            </section>

            <section className="space-y-3">
                <h2 className="text-lg font-bold text-text-main-light dark:text-text-main-dark">
                    {t("resultTitle")}
                </h2>
                <p className="text-sm leading-relaxed text-text-muted-light dark:text-text-muted-dark text-justify">
                    {t("resultBody")}
                </p>
            </section>

            {teleEduca.gallery.length > 1 && (
                <section className="space-y-3">
                    <h2 className="text-lg font-bold text-text-main-light dark:text-text-main-dark">
                        {t("galleryTitle")}
                    </h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {teleEduca.gallery.slice(1).map((src, index) => (
                            <figure key={src} className="space-y-2">
                                <div className="relative aspect-video rounded-lg overflow-hidden border border-border-light dark:border-border-dark">
                                    <LightboxImage
                                        src={src}
                                        alt={t(`galleryCaption${index + 1}`)}
                                        caption={t(`galleryCaption${index + 1}`)}
                                        sizes="(min-width: 640px) 384px, 100vw"
                                        className="object-cover"
                                    />
                                </div>
                                <figcaption className="text-xs text-text-muted-light dark:text-text-muted-dark">
                                    {t(`galleryCaption${index + 1}`)}
                                </figcaption>
                            </figure>
                        ))}
                    </div>
                </section>
            )}

            <Footer />
        </main>
    );
}
