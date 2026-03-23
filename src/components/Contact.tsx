"use client";

import { useState } from "react";
import { Lang, translations } from "@/lib/i18n";
import ScrollReveal from "./ScrollReveal";

interface ContactProps {
  lang: Lang;
}

const WHATSAPP_NUMBER = "5592992806495";

export default function Contact({ lang }: ContactProps) {
  const t = translations[lang].contact;
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const lines = [
      lang === "pt" ? "Olá Wilgner! Vi seu portfólio e gostaria de conversar." : "Hi Wilgner! I saw your portfolio and would like to chat.",
      "",
      `${t.name}: ${name}`,
      `${t.email}: ${email}`,
      "",
      `${t.message}:`,
      message,
    ];

    const text = encodeURIComponent(lines.join("\n"));
    window.location.href = `https://wa.me/${WHATSAPP_NUMBER}?text=${text}`;
  };

  return (
    <section id="contact" className="py-24 px-6">
      <div className="max-w-3xl mx-auto">
        <ScrollReveal>
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-2">
            {t.title}
          </h2>
          <div className="w-12 h-0.5 bg-[#3b82f6] mb-4" />
          <p className="text-[#888] text-lg mb-12">{t.subtitle}</p>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Contact form → WhatsApp */}
          <ScrollReveal delay={100}>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm text-[#888] mb-1.5 font-mono">
                  {t.name}
                </label>
                <input
                  id="name"
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-4 py-3 bg-[#111] border border-[#222] rounded-lg text-[#e5e5e5] text-sm placeholder-[#444] focus:border-[#3b82f6] focus:outline-none transition-colors"
                  placeholder="John Doe"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm text-[#888] mb-1.5 font-mono">
                  {t.email}
                </label>
                <input
                  id="email"
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-3 bg-[#111] border border-[#222] rounded-lg text-[#e5e5e5] text-sm placeholder-[#444] focus:border-[#3b82f6] focus:outline-none transition-colors"
                  placeholder="john@example.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm text-[#888] mb-1.5 font-mono">
                  {t.message}
                </label>
                <textarea
                  id="message"
                  rows={4}
                  required
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="w-full px-4 py-3 bg-[#111] border border-[#222] rounded-lg text-[#e5e5e5] text-sm placeholder-[#444] focus:border-[#3b82f6] focus:outline-none transition-colors resize-none"
                  placeholder={lang === "pt" ? "Conte-me sobre seu projeto..." : "Tell me about your project..."}
                />
              </div>

              <button
                type="submit"
                className="w-full py-3 bg-[#25d366] hover:bg-[#1da851] text-white text-sm font-medium rounded-lg transition-all hover:shadow-[0_0_30px_rgba(37,211,102,0.2)] active:scale-[0.98] flex items-center justify-center gap-2"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                {t.send}
              </button>
            </form>
          </ScrollReveal>

          {/* Direct contact */}
          <ScrollReveal delay={200}>
            <div>
              <p className="text-[#666] text-sm mb-6">{t.or}</p>

              <div className="space-y-4">
                {/* Email */}
                <a
                  href="mailto:wilgner.showtime@gmail.com"
                  className="flex items-center gap-3 p-3 rounded-lg border border-[#1a1a1a] hover:border-[#333] bg-[#111]/50 hover:bg-[#161616] transition-all group"
                >
                  <div className="w-10 h-10 rounded-lg bg-[#3b82f6]/10 flex items-center justify-center text-[#3b82f6]">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="2" y="4" width="20" height="16" rx="2" />
                      <path d="M22 7l-8.97 5.7a1.94 1.94 0 01-2.06 0L2 7" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-sm text-[#ccc] group-hover:text-white transition-colors">
                      wilgner.showtime@gmail.com
                    </div>
                    <div className="text-xs text-[#555]">Email</div>
                  </div>
                </a>

                {/* WhatsApp */}
                <a
                  href="https://wa.me/5592992806495"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-3 rounded-lg border border-[#1a1a1a] hover:border-[#333] bg-[#111]/50 hover:bg-[#161616] transition-all group"
                >
                  <div className="w-10 h-10 rounded-lg bg-[#25d366]/10 flex items-center justify-center text-[#25d366]">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-sm text-[#ccc] group-hover:text-white transition-colors">
                      +55 92 99280-6495
                    </div>
                    <div className="text-xs text-[#555]">WhatsApp</div>
                  </div>
                </a>

                {/* LinkedIn */}
                <a
                  href="https://linkedin.com/in/wilgnersouza-stw97"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-3 rounded-lg border border-[#1a1a1a] hover:border-[#333] bg-[#111]/50 hover:bg-[#161616] transition-all group"
                >
                  <div className="w-10 h-10 rounded-lg bg-[#0077b5]/10 flex items-center justify-center text-[#0077b5]">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-sm text-[#ccc] group-hover:text-white transition-colors">
                      /in/wilgnersouza-stw97
                    </div>
                    <div className="text-xs text-[#555]">LinkedIn</div>
                  </div>
                </a>

                {/* GitHub */}
                <a
                  href="https://github.com/wilgnersouzadev"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-3 rounded-lg border border-[#1a1a1a] hover:border-[#333] bg-[#111]/50 hover:bg-[#161616] transition-all group"
                >
                  <div className="w-10 h-10 rounded-lg bg-[#e5e5e5]/10 flex items-center justify-center text-[#e5e5e5]">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-sm text-[#ccc] group-hover:text-white transition-colors">
                      /wilgnersouzadev
                    </div>
                    <div className="text-xs text-[#555]">GitHub</div>
                  </div>
                </a>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>

    </section>
  );
}
