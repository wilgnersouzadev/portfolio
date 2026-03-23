"use client";

import { useState, useEffect } from "react";
import { Lang, translations } from "@/lib/i18n";

interface NavigationProps {
  lang: Lang;
  onLangChange: (lang: Lang) => void;
}

export default function Navigation({ lang, onLangChange }: NavigationProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const t = translations[lang].nav;

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const links = [
    { href: "#about", label: t.about },
    { href: "#stack", label: t.stack },
    { href: "#experience", label: t.experience },
    { href: "#projects", label: t.projects },
    { href: "#contact", label: t.contact },
  ];

  const handleClick = (href: string) => {
    setMobileOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "nav-blur bg-[#0a0a0a]/80 border-b border-[#222]"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <a
          href="#"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
          className="font-mono text-sm text-[#4ade80] hover:text-[#22c55e] transition-colors"
        >
          ~/wilgner
        </a>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <button
              key={link.href}
              onClick={() => handleClick(link.href)}
              className="text-sm text-[#888] hover:text-[#e5e5e5] transition-colors link-underline"
            >
              {link.label}
            </button>
          ))}

          {/* Language toggle */}
          <button
            onClick={() => onLangChange(lang === "pt" ? "en" : "pt")}
            className="ml-2 text-xs font-mono px-3 py-1.5 rounded border border-[#333] text-[#888] hover:text-[#e5e5e5] hover:border-[#555] transition-all"
          >
            {lang === "pt" ? "EN" : "PT"}
          </button>
        </div>

        {/* Mobile hamburger */}
        <div className="flex items-center gap-3 md:hidden">
          <button
            onClick={() => onLangChange(lang === "pt" ? "en" : "pt")}
            className="text-xs font-mono px-2 py-1 rounded border border-[#333] text-[#888]"
          >
            {lang === "pt" ? "EN" : "PT"}
          </button>
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="text-[#888] hover:text-[#e5e5e5] transition-colors"
            aria-label="Menu"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              {mobileOpen ? (
                <path d="M6 6l12 12M6 18L18 6" />
              ) : (
                <path d="M4 8h16M4 16h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden nav-blur bg-[#0a0a0a]/95 border-b border-[#222]">
          <div className="px-6 py-4 flex flex-col gap-4">
            {links.map((link) => (
              <button
                key={link.href}
                onClick={() => handleClick(link.href)}
                className="text-sm text-[#888] hover:text-[#e5e5e5] transition-colors text-left"
              >
                {link.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
