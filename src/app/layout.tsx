import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "BookLayer – Transforme sua leitura em hábito",
  description:
    "Rastreie seu progresso, defina metas e organize sua biblioteca pessoal com o BookLayer.",
  openGraph: {
    title: "BookLayer – Transforme sua leitura em hábito",
    description:
      "Rastreie seu progresso, defina metas e organize sua biblioteca pessoal com o BookLayer.",
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
