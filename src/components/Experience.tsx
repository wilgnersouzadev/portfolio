"use client";

import { Lang, translations } from "@/lib/i18n";
import ScrollReveal from "./ScrollReveal";

interface ExperienceProps {
  lang: Lang;
}

export default function Experience({ lang }: ExperienceProps) {
  const t = translations[lang].experience;

  return (
    <section id="experience" className="py-24 px-6">
      <div className="max-w-3xl mx-auto">
        <ScrollReveal>
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-2">
            {t.title}
          </h2>
          <div className="w-12 h-0.5 bg-[#3b82f6] mb-12" />
        </ScrollReveal>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-[7px] sm:left-[11px] top-2 bottom-2 w-px timeline-line" />

          <div className="space-y-10">
            {t.items.map((item, i) => (
              <ScrollReveal key={i} delay={i * 80}>
                <div className="relative pl-8 sm:pl-10 group">
                  {/* Dot */}
                  <div className="absolute left-0 sm:left-1 top-1.5 w-[15px] h-[15px] sm:w-[17px] sm:h-[17px] rounded-full border-2 border-[#3b82f6] bg-[#0a0a0a] group-hover:bg-[#3b82f6] transition-colors duration-300 z-10" />

                  {/* Content */}
                  <div className="pb-2">
                    <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-3 mb-1">
                      <h3 className="text-white font-semibold text-base">
                        {item.company}
                      </h3>
                    </div>

                    <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-3 mb-2">
                      <span className="text-[#3b82f6] text-sm font-mono">
                        {item.role}
                      </span>
                      <span className="hidden sm:inline text-[#333]">|</span>
                      <span className="text-[#666] text-sm font-mono">
                        {item.period}
                      </span>
                    </div>

                    <p className="text-[#999] text-sm leading-relaxed mb-3">
                      {item.description}
                    </p>

                    <div className="flex flex-wrap gap-1.5">
                      {item.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2 py-0.5 text-xs rounded bg-[#1a1a1a] text-[#666] border border-[#222] font-mono"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
