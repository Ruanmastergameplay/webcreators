"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { navItems } from "@/lib/content";
import { cn } from "@/lib/utils";

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 grid min-h-[76px] grid-cols-[auto_1fr_auto] items-center gap-8 border-b border-transparent px-3 text-paper backdrop-blur-[18px] transition min-[1180px]:px-[2.222vw]",
        isScrolled ? "border-white/[0.078] bg-ink/95" : "bg-ink/85",
        "max-[1100px]:min-h-[84px] max-[1100px]:grid-cols-[auto_auto] max-[1100px]:justify-between"
      )}
    >
      <Link href="#top" className="relative z-[2] inline-flex items-center gap-3 text-sm font-bold uppercase tracking-[0.12em]">
        <Image
          src="/images/logo-webcreatorss.png"
          alt="Logo da Webcreatorss"
          width={42}
          height={42}
          priority
          className="h-[42px] w-[42px] object-contain"
        />
        <span>Webcreatorss</span>
      </Link>

      <nav
        className={cn(
          "relative z-[2] justify-self-center text-[13px] font-bold uppercase tracking-[0.12em] text-white/70",
          "flex items-center gap-[clamp(18px,2.1vw,32px)]",
          "max-[1100px]:fixed max-[1100px]:inset-0 max-[1100px]:z-[1] max-[1100px]:flex-col max-[1100px]:items-start max-[1100px]:justify-center max-[1100px]:bg-ink max-[1100px]:px-3 max-[1100px]:text-paper max-[1100px]:transition",
          isOpen
            ? "max-[1100px]:visible max-[1100px]:translate-y-0 max-[1100px]:opacity-100"
            : "max-[1100px]:invisible max-[1100px]:-translate-y-3 max-[1100px]:opacity-0"
        )}
      >
        {navItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            onClick={() => setIsOpen(false)}
            className="transition hover:text-white max-[1100px]:text-[clamp(36px,10vw,70px)] max-[1100px]:font-normal max-[1100px]:normal-case max-[1100px]:leading-none max-[1100px]:tracking-[-0.04em]"
          >
            {item.label}
          </Link>
        ))}
      </nav>

      <Link
        href="#contato"
        className="relative z-[2] inline-flex min-h-[48px] items-center justify-center rounded-lg bg-paper px-6 text-[13px] font-bold uppercase tracking-[0.12em] text-ink transition hover:bg-orange hover:text-white max-[1100px]:hidden"
      >
        Quero um site
      </Link>

      <button
        type="button"
        aria-label={isOpen ? "Fechar menu" : "Abrir menu"}
        aria-expanded={isOpen}
        onClick={() => setIsOpen((value) => !value)}
        className="relative z-[2] hidden h-[58px] w-[58px] place-items-center gap-1.5 rounded-full border border-white/[0.078] bg-white/[0.06] max-[1100px]:grid"
      >
        <span className={cn("h-0.5 w-6 bg-paper transition", isOpen && "translate-y-1 rotate-45")} />
        <span className={cn("h-0.5 w-6 bg-paper transition", isOpen && "-translate-y-1 -rotate-45")} />
      </button>
    </header>
  );
}
