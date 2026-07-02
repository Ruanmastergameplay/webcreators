import type { Metadata } from "next";
import { Bricolage_Grotesque } from "next/font/google";
import "./globals.css";

const bricolage = Bricolage_Grotesque({
  subsets: ["latin"],
  variable: "--font-bricolage",
  display: "swap"
});

export const metadata: Metadata = {
  title: "Ruan Garcia | Sites e automações para negócios",
  description:
    "Sites modernos, páginas de captura, formulários, WhatsApp e automações simples para pequenos negócios.",
  openGraph: {
    title: "Ruan Garcia | Sites e automações para negócios",
    description:
      "Presença digital com clareza, estética e função para pequenos negócios.",
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
