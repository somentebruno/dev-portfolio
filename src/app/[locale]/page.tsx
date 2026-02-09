import Image from "next/image";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Experience } from "@/components/Experience";
import { Education } from "@/components/Education";
import { Projects } from "@/components/Projects";
import { Technologies } from "@/components/Technologies";
import { Footer } from "@/components/Footer";

import { setRequestLocale } from "next-intl/server";

export default async function Home({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  return (
    <>
      <Navbar />
      <main className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-12 space-y-24">
        <Hero />
        <Education />
        <Experience />
        <Projects />
        <Technologies />
        <Footer />
      </main>
    </>
  );
}
