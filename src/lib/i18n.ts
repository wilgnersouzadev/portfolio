export type Lang = "pt" | "en";

export const translations = {
  pt: {
    nav: {
      about: "Sobre",
      stack: "Tech Stack",
      experience: "Experiencia",
      projects: "Projetos",
      contact: "Contato",
    },
    hero: {
      greeting: "> wilgner.souza",
      role: "> Backend Developer",
      location: "> Manaus, AM — Brasil",
      description: [
        "> Especializado em arquitetar APIs robustas e sistemas",
        "> escaláveis. +4 anos transformando requisitos complexos",
        "> em código limpo e performático.",
      ],
      cta1: "Ver Projetos",
      cta2: "Entrar em Contato",
    },
    about: {
      title: "Sobre mim",
      p1: "Desenvolvedor Backend de Manaus, Amazonas. Desde 2022 construindo soluções que escalam — de APIs RESTful a arquiteturas multi-tenant completas.",
      p2: "Meu foco está no ecossistema NestJS, TypeScript e Docker. Já construí um SaaS completo do zero: do design do banco de dados ao deploy em produção, passando por autenticação multi-tenant, pagamentos, PWA e notificações push.",
      p3: "Antes de migrar para desenvolvimento em 2022, acumulei experiência em TI desde 2015, o que me deu uma base sólida em infraestrutura e resolução de problemas. Atualmente cursando ADS na Anhanguera (2026-2028).",
    },
    stack: {
      title: "Tech Stack",
      backend: "Backend",
      frontend: "Frontend",
      database: "Database",
      devops: "DevOps",
      tools: "Ferramentas",
    },
    experience: {
      title: "Experiência",
      present: "presente",
      items: [
        {
          company: "Soft Live / Instituto Amazon Innovare",
          role: "Desenvolvedor Backend Pleno",
          period: "mai/2024 - presente",
          description:
            "Desenvolvimento de sistemas internos para gestão de campanhas e educação pública (SEMED).",
          tags: ["NestJS", "TypeScript", "PostgreSQL", "Docker"],
        },
        {
          company: "Service.fy",
          role: "Backend Dev / Co-fundador",
          period: "mar/2024 - abr/2025",
          description:
            "Co-fundei startup de gestão de serviços com arquitetura multi-tenant, PWA, push notifications e portal público.",
          tags: ["NestJS", "Next.js", "TypeORM", "PostgreSQL", "Docker", "Socket.io"],
        },
        {
          company: "DSG Technology",
          role: "Desenvolvedor FullStack Pleno",
          period: "mar/2023 - jan/2024",
          description:
            "Plataforma PIOM de medicina do trabalho: backend NestJS + frontend Vue.js.",
          tags: ["NestJS", "Vue.js", "TypeORM", "PostgreSQL", "Docker"],
        },
        {
          company: "USYS",
          role: "Desenvolvedor FullStack",
          period: "mar/2023 - out/2023",
          description:
            "APIs e sistema web para medicina do trabalho (Maxipas).",
          tags: ["NestJS", "React", "PostgreSQL"],
        },
        {
          company: "MB Labs",
          role: "Desenvolvedor Backend",
          period: "fev/2022 - mar/2023",
          description:
            "White-label Engagx: Raketo, Anbima Edu e mais. Testes E2E, CI/CD, AWS.",
          tags: ["NestJS", "TypeScript", "AWS", "Jest", "CI/CD", "GraphQL"],
        },
        {
          company: "Transire Eletrônicos",
          role: "Analista de Suporte Jr",
          period: "mai/2018 - out/2019",
          description:
            "Suporte ERP e manutenção de banco de dados.",
          tags: ["SQL", "ERP", "Suporte"],
        },
      ],
    },
    projects: {
      title: "Projetos",
      disclaimer:
        "Alguns projetos podem ter sido modificados após minha participação.",
      visit: "Visitar",
      items: [
        {
          title: "CRM Data Crazy",
          description: "Plataforma CRM completa para gestão de leads e relacionamento com clientes.",
          link: "https://datacrazy.io/",
        },
        {
          title: "Arco Pleno",
          description: "Plataforma educacional com gestão de conteúdos e acompanhamento de alunos.",
          link: "https://programapleno.com.br/",
        },
        {
          title: "Raketo",
          description: "Plataforma white-label para startups com gamificação e engajamento.",
          link: "https://www.raketo.com.br/",
        },
        {
          title: "Anbima Edu",
          description: "Plataforma de educação financeira com conteúdo interativo e certificações.",
          link: "https://www.anbima.com.br/",
        },
        {
          title: "Maxipas PIOM",
          description: "Sistema de medicina do trabalho com gestão de exames e laudos.",
          link: "https://maxipas.com.br/plataforma/",
        },
        {
          title: "Projetos Governamentais",
          description: "Sistemas internos para órgãos públicos de Manaus — gestão de campanhas, transporte urbano e educação municipal. Projetos internos.",
        },
      ],
    },
    contact: {
      title: "Contato",
      subtitle: "Tem um projeto em mente? Vamos conversar.",
      name: "Nome",
      email: "Email",
      message: "Mensagem",
      send: "Enviar via WhatsApp",
      or: "ou entre em contato diretamente",
    },
    footer: {
      built: "Desenvolvido por Wilgner Souza — 2026",
      tech: "Feito com Next.js + Tailwind CSS",
    },
  },
  en: {
    nav: {
      about: "About",
      stack: "Tech Stack",
      experience: "Experience",
      projects: "Projects",
      contact: "Contact",
    },
    hero: {
      greeting: "> wilgner.souza",
      role: "> Backend Developer",
      location: "> Manaus, AM — Brazil",
      description: [
        "> Specialized in architecting robust APIs and scalable",
        "> systems. 4+ years turning complex requirements",
        "> into clean, performant code.",
      ],
      cta1: "View Projects",
      cta2: "Get in Touch",
    },
    about: {
      title: "About me",
      p1: "Backend Developer from Manaus, Amazonas. Since 2022, building solutions that scale — from RESTful APIs to complete multi-tenant architectures.",
      p2: "My focus is on the NestJS ecosystem, TypeScript and Docker. I've built a complete SaaS from scratch: from database design to production deployment, including multi-tenant auth, payments, PWA and push notifications.",
      p3: "Before transitioning to development in 2022, I accumulated IT experience since 2015, which gave me a solid foundation in infrastructure and problem-solving. Currently pursuing a degree in Systems Analysis at Anhanguera (2026-2028).",
    },
    stack: {
      title: "Tech Stack",
      backend: "Backend",
      frontend: "Frontend",
      database: "Database",
      devops: "DevOps",
      tools: "Tools",
    },
    experience: {
      title: "Experience",
      present: "present",
      items: [
        {
          company: "Soft Live / Instituto Amazon Innovare",
          role: "Mid Level Backend Developer",
          period: "may/2024 - present",
          description:
            "Development of internal systems for campaign management and public education (SEMED).",
          tags: ["NestJS", "TypeScript", "PostgreSQL", "Docker"],
        },
        {
          company: "Service.fy",
          role: "Backend Dev / Co-founder",
          period: "mar/2024 - apr/2025",
          description:
            "Co-founded a service management startup with multi-tenant architecture, PWA, push notifications and public portal.",
          tags: ["NestJS", "Next.js", "TypeORM", "PostgreSQL", "Docker", "Socket.io"],
        },
        {
          company: "DSG Technology",
          role: "Mid Level FullStack Developer",
          period: "mar/2023 - jan/2024",
          description:
            "PIOM occupational health platform: NestJS backend + Vue.js frontend.",
          tags: ["NestJS", "Vue.js", "TypeORM", "PostgreSQL", "Docker"],
        },
        {
          company: "USYS",
          role: "FullStack Developer",
          period: "mar/2023 - oct/2023",
          description:
            "APIs and web system for occupational health (Maxipas).",
          tags: ["NestJS", "React", "PostgreSQL"],
        },
        {
          company: "MB Labs",
          role: "Backend Developer",
          period: "feb/2022 - mar/2023",
          description:
            "White-label Engagx: Raketo, Anbima Edu and more. E2E tests, CI/CD, AWS.",
          tags: ["NestJS", "TypeScript", "AWS", "Jest", "CI/CD", "GraphQL"],
        },
        {
          company: "Transire Eletrônicos",
          role: "Jr Support Analyst",
          period: "may/2018 - oct/2019",
          description:
            "ERP support and database maintenance.",
          tags: ["SQL", "ERP", "Support"],
        },
      ],
    },
    projects: {
      title: "Projects",
      disclaimer:
        "Some projects may have been modified after my involvement.",
      visit: "Visit",
      items: [
        {
          title: "CRM Data Crazy",
          description: "Complete CRM platform for lead management and customer relationships.",
          link: "https://datacrazy.io/",
        },
        {
          title: "Arco Pleno",
          description: "Educational platform with content management and student tracking.",
          link: "https://programapleno.com.br/",
        },
        {
          title: "Raketo",
          description: "White-label platform for startups with gamification and engagement.",
          link: "https://www.raketo.com.br/",
        },
        {
          title: "Anbima Edu",
          description: "Financial education platform with interactive content and certifications.",
          link: "https://www.anbima.com.br/",
        },
        {
          title: "Maxipas PIOM",
          description: "Occupational health system with exam and report management.",
          link: "https://maxipas.com.br/plataforma/",
        },
        {
          title: "Government Projects",
          description: "Internal systems for public agencies in Manaus — campaign management, urban transport and municipal education. Internal projects.",
        },
      ],
    },
    contact: {
      title: "Contact",
      subtitle: "Have a project in mind? Let's talk.",
      name: "Name",
      email: "Email",
      message: "Message",
      send: "Send via WhatsApp",
      or: "or reach out directly",
    },
    footer: {
      built: "Built by Wilgner Souza — 2026",
      tech: "Made with Next.js + Tailwind CSS",
    },
  },
} as const;
