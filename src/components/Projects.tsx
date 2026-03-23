"use client";

import { Lang, translations } from "@/lib/i18n";
import ScrollReveal from "./ScrollReveal";

interface ProjectsProps {
  lang: Lang;
}

const projectColors = [
  "from-blue-500/10 to-purple-500/10",
  "from-emerald-500/10 to-cyan-500/10",
  "from-orange-500/10 to-red-500/10",
  "from-violet-500/10 to-pink-500/10",
  "from-cyan-500/10 to-blue-500/10",
  "from-rose-500/10 to-orange-500/10",
];

const projectIcons = [
  // CRM - chart icon
  <svg key="crm" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M3 3v18h18" /><path d="M18.7 8l-5.1 5.2-2.8-2.7L7 14.3" /></svg>,
  // Education - book icon
  <svg key="edu" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M2 3h6a4 4 0 014 4v14a3 3 0 00-3-3H2z" /><path d="M22 3h-6a4 4 0 00-4 4v14a3 3 0 013-3h7z" /></svg>,
  // Rocket - startup
  <svg key="rocket" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 00-2.91-.09z" /><path d="M12 15l-3-3a22 22 0 012-3.95A12.88 12.88 0 0122 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 01-4 2z" /><path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0" /><path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5" /></svg>,
  // Finance - dollar icon
  <svg key="finance" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><path d="M16 8h-6a2 2 0 100 4h4a2 2 0 010 4H8" /><path d="M12 18V6" /></svg>,
  // Health - heart pulse
  <svg key="health" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M19.5 12.572l-7.5 7.428-7.5-7.428A5 5 0 1112 6.006a5 5 0 017.5 6.572" /><path d="M4 12h4l2-4 4 8 2-4h4" /></svg>,
  // People - users
  <svg key="people" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 00-3-3.87" /><path d="M16 3.13a4 4 0 010 7.75" /></svg>,
];

export default function Projects({ lang }: ProjectsProps) {
  const t = translations[lang].projects;

  return (
    <section id="projects" className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <ScrollReveal>
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-2">
            {t.title}
          </h2>
          <div className="w-12 h-0.5 bg-[#3b82f6] mb-12" />
        </ScrollReveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {t.items.map((project, i) => {
            const hasLink = "link" in project && project.link;
            const Wrapper = hasLink ? "a" : "div";
            const wrapperProps = hasLink
              ? { href: (project as { link: string }).link, target: "_blank" as const, rel: "noopener noreferrer" }
              : {};

            return (
              <ScrollReveal key={i} delay={i * 80} variant="scale">
                <Wrapper {...wrapperProps} className="group block h-full">
                  <div className="card-shine h-full rounded-xl border border-[#1a1a1a] bg-[#111]/60 p-6 transition-all duration-300 hover:border-[#333] hover:bg-[#161616] hover:-translate-y-1 hover:shadow-[0_8px_30px_rgba(0,0,0,0.4)]">
                    <div
                      className={`w-14 h-14 rounded-lg bg-gradient-to-br ${projectColors[i % projectColors.length]} flex items-center justify-center mb-4 text-[#888] group-hover:text-[#ccc] transition-colors`}
                    >
                      {projectIcons[i % projectIcons.length]}
                    </div>

                    <h3 className="text-white font-semibold text-base mb-2 group-hover:text-[#3b82f6] transition-colors">
                      {project.title}
                    </h3>

                    <p className="text-[#777] text-sm leading-relaxed mb-4">
                      {project.description}
                    </p>

                    {hasLink ? (
                      <div className="flex items-center gap-1.5 text-[#555] text-xs group-hover:text-[#3b82f6] transition-colors">
                        <span>{t.visit}</span>
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="transition-transform group-hover:translate-x-0.5">
                          <path d="M7 17L17 7" />
                          <path d="M7 7h10v10" />
                        </svg>
                      </div>
                    ) : (
                      <div className="flex items-center gap-1.5 text-[#555] text-xs">
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
                          <path d="M7 11V7a5 5 0 0110 0v4" />
                        </svg>
                        <span>{lang === "pt" ? "Projeto interno" : "Internal project"}</span>
                      </div>
                    )}
                  </div>
                </Wrapper>
              </ScrollReveal>
            );
          })}
        </div>

        <ScrollReveal delay={500}>
          <p className="text-center text-[#555] text-xs mt-8 italic">
            {t.disclaimer}
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
}
