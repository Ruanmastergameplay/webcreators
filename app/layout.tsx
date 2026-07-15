import type { Metadata } from "next";
import { Bricolage_Grotesque } from "next/font/google";
import "./globals.css";

const bricolage = Bricolage_Grotesque({
  subsets: ["latin"],
  variable: "--font-bricolage",
  display: "swap"
});

export const metadata: Metadata = {
  title: "Webcreatorss",
  description:
    "Sites modernos, páginas de captura, formulários, WhatsApp e automações simples para pequenos negócios.",
  icons: {
    icon: "/images/favicon-webcreatorss.png",
    shortcut: "/images/favicon-webcreatorss.png",
    apple: "/images/favicon-webcreatorss.png"
  },
  openGraph: {
    title: "Webcreatorss",
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
