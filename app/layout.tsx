import type { Metadata } from "next";
import { Bricolage_Grotesque } from "next/font/google";
import "./globals.css";

const bricolage = Bricolage_Grotesque({
  subsets: ["latin"],
  variable: "--font-bricolage",
  display: "swap"
});

export const metadata: Metadata = {
  title: "Ruan Garcia | Sites e automacoes para negocios",
  description:
    "Sites modernos, landing pages, formularios, WhatsApp e automacoes simples para pequenos negocios.",
  openGraph: {
    title: "Ruan Garcia | Sites e automacoes para negocios",
    description:
      "Presenca digital com clareza, estetica e funcao para pequenos negocios.",
    type: "website"
  }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR" className="scroll-smooth">
      <body className={`${bricolage.variable} bg-ink font-sans text-paper antialiased`}>
        {children}
      </body>
    </html>
  );
}
