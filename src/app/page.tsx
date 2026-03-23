"use client";

import { useState } from "react";
import { Lang } from "@/lib/i18n";
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import TechStack from "@/components/TechStack";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  const [lang, setLang] = useState<Lang>("pt");

  return (
    <>
      <Navigation lang={lang} onLangChange={setLang} />
      <main>
        <Hero lang={lang} />
        <div className="max-w-6xl mx-auto">
          <div className="h-px bg-gradient-to-r from-transparent via-[#222] to-transparent" />
        </div>
        <About lang={lang} />
        <div className="max-w-6xl mx-auto">
          <div className="h-px bg-gradient-to-r from-transparent via-[#222] to-transparent" />
        </div>
        <TechStack lang={lang} />
        <div className="max-w-6xl mx-auto">
          <div className="h-px bg-gradient-to-r from-transparent via-[#222] to-transparent" />
        </div>
        <Experience lang={lang} />
        <div className="max-w-6xl mx-auto">
          <div className="h-px bg-gradient-to-r from-transparent via-[#222] to-transparent" />
        </div>
        <Projects lang={lang} />
        <div className="max-w-6xl mx-auto">
          <div className="h-px bg-gradient-to-r from-transparent via-[#222] to-transparent" />
        </div>
        <Contact lang={lang} />
      </main>
      <Footer lang={lang} />
    </>
  );
}
