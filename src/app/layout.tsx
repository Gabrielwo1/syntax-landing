import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "FEVA – Conheça a mente que mora em você",
  description:
    "O FEVA é o seu espelho emocional. Reconheça padrões, quebre ciclos e aprenda a se entender de um jeito prático — sem julgamentos, sem complicação.",
  openGraph: {
    title: "FEVA – Conheça a mente que mora em você",
    description:
      "O FEVA é o seu espelho emocional. Reconheça padrões, quebre ciclos e aprenda a se entender de um jeito prático.",
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
      <body className="font-poppins">{children}</body>
    </html>
  );
}
