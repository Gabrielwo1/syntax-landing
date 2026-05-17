import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Mentoria Exatas — Matemática, Física e Química",
  description:
    "Mentoria online para estudantes do ensino fundamental e médio, com foco em matemática, física e química. Preparação para vestibulares seriados e colégio militar.",
  openGraph: {
    title: "Mentoria Exatas — Matemática, Física e Química",
    description:
      "Mentoria online para estudantes do ensino fundamental e médio, com foco em matemática, física e química.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
