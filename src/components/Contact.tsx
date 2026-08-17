import Link from "next/link";
import { Mail, Github, Linkedin, MessageCircle, Send } from "lucide-react";

import { useTranslations } from "next-intl";

const contactItems = [
    {
        key: "email",
        icon: Mail,
        value: "brunolucasdev@gmail.com",
        href: "mailto:brunolucasdev@gmail.com",
    },
    {
        key: "github",
        icon: Github,
        value: "@somentebruno",
        href: "https://github.com/somentebruno",
    },
    {
        key: "linkedin",
        icon: Linkedin,
        value: "/in/blsf",
        href: "https://www.linkedin.com/in/blsf/",
    },
    {
        key: "whatsapp",
        icon: MessageCircle,
        value: "+55 (65) 9 8122-8869",
        href: "https://wa.me/5565981228869",
    },
];

export function Contact() {
    const t = useTranslations("Contact");

    return (
        <section id="contact" className="text-center space-y-4">
            <p className="font-mono text-primary text-sm">// {t("eyebrow")}</p>
            <h2 className="text-3xl md:text-4xl font-bold text-text-main-light dark:text-text-main-dark">
                {t("titleNormal")} <span className="text-primary">{t("titleHighlight")}</span>?
            </h2>
            <p className="text-text-muted-light dark:text-text-muted-dark max-w-xl mx-auto">
                {t("description")}
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-8 max-w-2xl mx-auto">
                {contactItems.map(({ key, icon: Icon, value, href }) => (
                    <Link
                        key={key}
                        href={href}
                        target={key !== "email" ? "_blank" : undefined}
                        rel={key !== "email" ? "noopener noreferrer" : undefined}
                        className="flex items-center gap-4 p-4 bg-surface-light dark:bg-surface-dark border border-border-light dark:border-border-dark rounded-xl hover:border-primary/50 transition-colors text-left"
                    >
                        <div className="p-3 rounded-lg bg-primary/10 text-primary flex-shrink-0">
                            <Icon className="w-5 h-5" />
                        </div>
                        <div className="min-w-0">
                            <p className="text-xs text-text-muted-light dark:text-text-muted-dark">
                                {t(`${key}Label`)}
                            </p>
                            <p className="text-sm font-mono font-medium text-text-main-light dark:text-text-main-dark truncate">
                                {value}
                            </p>
                        </div>
                    </Link>
                ))}
            </div>

            <div className="pt-4">
                <Link
                    href="mailto:brunolucasdev@gmail.com"
                    className="inline-flex items-center gap-2 px-8 py-3 bg-primary text-white rounded-lg font-medium hover:bg-sky-600 transition-colors shadow-lg shadow-primary/30"
                >
                    <Send className="w-4 h-4" />
                    {t("sendMessage")}
                </Link>
            </div>
        </section>
    );
}
