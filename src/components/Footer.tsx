import Link from "next/link";
import Image from "next/image"; // Added for Album Cover
import { Github, Linkedin, Mail, RefreshCw, Disc } from "lucide-react"; // Using Lucide icons to replace Material Icons

import { useTranslations } from "next-intl";

export function Footer() {
  const t = useTranslations("Footer");

  return (
    <footer
      id="contact"
      className="pt-12 border-t border-border-light dark:border-border-dark"
    >
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-8 pb-12">
        <div className="space-y-4">
          <h3 className="text-xl font-bold text-text-main-light dark:text-text-main-dark">
            {t("connect")}
          </h3>
          <div className="flex gap-4">
            <Link
              href="https://github.com/somentebruno"
              className="p-2 bg-surface-light dark:bg-surface-dark border border-border-light dark:border-border-dark rounded-lg text-text-muted-light dark:text-text-muted-dark hover:text-primary hover:border-primary transition-all"
            >
              <Github className="w-5 h-5" />
              <span className="sr-only">GitHub</span>
            </Link>
            <Link
              href="https://www.linkedin.com/in/blsf/"
              className="p-2 bg-surface-light dark:bg-surface-dark border border-border-light dark:border-border-dark rounded-lg text-text-muted-light dark:text-text-muted-dark hover:text-primary hover:border-primary transition-all"
            >
              <Linkedin className="w-5 h-5" />
              <span className="sr-only">LinkedIn</span>
            </Link>
            <Link
              href="mailto:brunolucasdev@gmail.com"
              className="p-2 bg-surface-light dark:bg-surface-dark border border-border-light dark:border-border-dark rounded-lg text-text-muted-light dark:text-text-muted-dark hover:text-primary hover:border-primary transition-all"
            >
              <Mail className="w-5 h-5" />
              <span className="sr-only">Email</span>
            </Link>
          </div>
        </div>
        <div className="w-full md:w-auto bg-surface-light dark:bg-surface-dark border border-border-light dark:border-border-dark rounded-lg p-4 flex items-center gap-4 max-w-sm">
          <div className="relative w-12 h-12 rounded bg-gray-700 flex-shrink-0 overflow-hidden">
            <Image
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBZ_4V1O_LxIvpw82pipmQmNpBNL_R9VY-d7ytAFH43MPDKd69OjCl9-AIFZgAIHqhbLxIS_WXUSDba80ZxNaJZgT4Q7LtInGUBZKRrhxNJ5cwgaZVrpLy8plGhGHCYK-riBEGg1uR_vaAUyfRz187q4Aj1_TzDnAWZochxGYnwnN_eRYy1YoBBrdgZnynszq3ppOolvcW1wHH2J2ZsAuiJLxq1AdgfvPuv_RwFA-qMOkxdHn0ldWvNn6kB9DDg0YzlN4aWwL5duK8"
              alt="Album Cover"
              width={48}
              height={48}
              className="w-full h-full object-cover animate-pulse"
            />
            <div className="absolute inset-0 flex items-center justify-center bg-black/30">
              <Disc className="text-white w-4 h-4" />
            </div>
          </div>
          <div className="flex-grow min-w-0">
            <p className="text-xs text-primary font-bold uppercase mb-0.5">
              Last Played
            </p>
            <p className="text-sm font-medium text-text-main-light dark:text-text-main-dark truncate">
              Bohemian Rhapsody
            </p>
            <p className="text-xs text-text-muted-light dark:text-text-muted-dark truncate">
              Queen • A Night at the Opera
            </p>
          </div>
          <button className="text-text-muted-light dark:text-text-muted-dark hover:text-primary transition-colors">
            <RefreshCw className="w-5 h-5" />
          </button>
        </div>
      </div>
      <div className="text-center pb-8 text-xs text-text-muted-light dark:text-text-muted-dark font-mono">
        <p>{t("designedBy")}</p>
      </div>
    </footer>
  );
}
