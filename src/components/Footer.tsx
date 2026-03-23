"use client";

import { Lang, translations } from "@/lib/i18n";

interface FooterProps {
  lang: Lang;
}

export default function Footer({ lang }: FooterProps) {
  const t = translations[lang].footer;

  return (
    <footer className="border-t border-[#1a1a1a] py-8 px-6">
      <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3">
        <p className="text-[#555] text-sm">{t.built}</p>
        <p className="text-[#444] text-xs font-mono">{t.tech}</p>
      </div>
    </footer>
  );
}
