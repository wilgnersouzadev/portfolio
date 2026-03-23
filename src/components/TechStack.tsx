"use client";

import { Lang, translations } from "@/lib/i18n";
import ScrollReveal from "./ScrollReveal";

interface TechStackProps {
  lang: Lang;
}

const categories = [
  {
    key: "backend" as const,
    items: ["Node.js", "TypeScript", "NestJS", "Express", "Prisma", "TypeORM", "GraphQL"],
    color: "#3b82f6",
  },
  {
    key: "frontend" as const,
    items: ["React.js", "Next.js", "Vue.js", "Tailwind CSS"],
    color: "#8b5cf6",
  },
  {
    key: "database" as const,
    items: ["PostgreSQL", "SQLite", "Oracle"],
    color: "#f59e0b",
  },
  {
    key: "devops" as const,
    items: ["Docker", "AWS S3", "AWS SQS", "AWS ECS", "AWS Lambda", "CI/CD", "Git/GitFlow"],
    color: "#10b981",
  },
  {
    key: "tools" as const,
    items: ["Jira", "Bitbucket", "SonarQube", "Keycloak", "Socket.io", "MinIO"],
    color: "#ef4444",
  },
];

export default function TechStack({ lang }: TechStackProps) {
  const t = translations[lang].stack;

  return (
    <section id="stack" className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <ScrollReveal>
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-2">
            {t.title}
          </h2>
          <div className="w-12 h-0.5 bg-[#3b82f6] mb-12" />
        </ScrollReveal>

        <div className="space-y-8">
          {categories.map((cat, catIdx) => (
            <ScrollReveal key={cat.key} delay={catIdx * 100}>
              <div>
                <h3
                  className="text-sm font-mono uppercase tracking-wider mb-3"
                  style={{ color: cat.color }}
                >
                  {t[cat.key]}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {cat.items.map((item) => (
                    <span
                      key={item}
                      className="px-3 py-1.5 text-sm rounded-md border transition-all duration-300 hover:scale-105 cursor-default"
                      style={{
                        borderColor: `${cat.color}25`,
                        backgroundColor: `${cat.color}08`,
                        color: cat.color,
                      }}
                      onMouseEnter={(e) => {
                        const el = e.currentTarget;
                        el.style.borderColor = `${cat.color}50`;
                        el.style.backgroundColor = `${cat.color}15`;
                        el.style.boxShadow = `0 0 20px ${cat.color}10`;
                      }}
                      onMouseLeave={(e) => {
                        const el = e.currentTarget;
                        el.style.borderColor = `${cat.color}25`;
                        el.style.backgroundColor = `${cat.color}08`;
                        el.style.boxShadow = "none";
                      }}
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
