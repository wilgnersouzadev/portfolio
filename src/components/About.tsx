"use client";

import { Lang, translations } from "@/lib/i18n";
import ScrollReveal from "./ScrollReveal";

interface AboutProps {
  lang: Lang;
}

export default function About({ lang }: AboutProps) {
  const t = translations[lang].about;

  return (
    <section id="about" className="py-24 px-6">
      <div className="max-w-3xl mx-auto">
        <ScrollReveal>
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-2">
            {t.title}
          </h2>
          <div className="w-12 h-0.5 bg-[#3b82f6] mb-10" />
        </ScrollReveal>

        <div className="space-y-5">
          <ScrollReveal delay={100}>
            <p className="text-[#aaa] leading-relaxed text-base sm:text-lg">
              {t.p1}
            </p>
          </ScrollReveal>

          <ScrollReveal delay={200}>
            <p className="text-[#aaa] leading-relaxed text-base sm:text-lg">
              {t.p2}
            </p>
          </ScrollReveal>

          <ScrollReveal delay={300}>
            <p className="text-[#aaa] leading-relaxed text-base sm:text-lg">
              {t.p3}
            </p>
          </ScrollReveal>
        </div>

        {/* Quick facts */}
        <ScrollReveal delay={400}>
          <div className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-4">
            {[
              { value: "4+", label: lang === "pt" ? "Anos de dev" : "Years dev" },
              { value: "6+", label: lang === "pt" ? "Empresas" : "Companies" },
              { value: "1", label: "SaaS" },
              { value: "10+", label: lang === "pt" ? "Projetos" : "Projects" },
            ].map((fact) => (
              <div
                key={fact.label}
                className="text-center p-4 rounded-lg border border-[#1a1a1a] bg-[#111]/50"
              >
                <div className="text-2xl font-bold text-[#3b82f6] font-mono">
                  {fact.value}
                </div>
                <div className="text-xs text-[#666] mt-1">{fact.label}</div>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
