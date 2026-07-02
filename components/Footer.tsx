import Link from "next/link";
import { navItems } from "@/lib/content";

export function Footer() {
  return (
    <footer className="border-t border-white/[0.078] bg-ink py-9 text-white/60">
      <div className="page-container grid gap-7 min-[900px]:grid-cols-[minmax(240px,.8fr)_auto_minmax(220px,.6fr)]">
        <div>
          <strong className="mb-3 block text-paper">Ruan Garcia</strong>
          <p className="m-0 max-w-[520px] text-base leading-relaxed">
            Desenvolvimento web, sites e automações simples para negócios que querem parecer mais profissionais e vender melhor.
          </p>
        </div>
        <nav className="grid gap-2">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} className="transition hover:text-white">
              {item.label}
            </Link>
          ))}
        </nav>
        <p className="m-0 text-base leading-relaxed">Construindo presença digital com clareza, estética e função.</p>
      </div>
    </footer>
  );
}
