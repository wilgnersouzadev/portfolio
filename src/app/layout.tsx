import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Wilgner Souza — Backend Developer",
  description:
    "Desenvolvedor Backend especializado em NestJS, TypeScript e arquiteturas escaláveis. +4 anos de experiência construindo APIs robustas e sistemas complexos.",
  keywords: [
    "Wilgner Souza",
    "Backend Developer",
    "NestJS",
    "TypeScript",
    "Node.js",
    "Manaus",
    "Desenvolvedor",
  ],
  authors: [{ name: "Wilgner Souza" }],
  openGraph: {
    title: "Wilgner Souza — Backend Developer",
    description:
      "Especializado em arquitetar APIs robustas e sistemas escaláveis.",
    type: "website",
    locale: "pt_BR",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={`${inter.variable} ${jetbrainsMono.variable}`}>
      <head>
        <link rel="icon" href="/portfolio/favicon.svg" type="image/svg+xml" />
      </head>
      <body className="font-[var(--font-inter)] antialiased">
        {children}
      </body>
    </html>
  );
}
