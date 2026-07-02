import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

type ButtonLinkProps = {
  href: string;
  children: React.ReactNode;
  variant?: "orange" | "soft" | "white" | "ghost";
  className?: string;
};

const variants = {
  orange: "bg-orange text-white hover:bg-[#dd6500]",
  soft: "bg-white/[0.078] text-white hover:bg-white hover:text-ink",
  white: "bg-paper text-ink hover:bg-orange hover:text-white",
  ghost: "border border-white/[0.078] bg-transparent text-white/70 hover:bg-white/[0.055] hover:text-white"
};

export function ButtonLink({ href, children, variant = "orange", className }: ButtonLinkProps) {
  return (
    <Link
      href={href}
      className={cn(
        "group inline-flex min-h-[60px] items-center justify-center gap-3 rounded-lg px-8 text-[12px] font-bold uppercase leading-none tracking-[0.145em] transition duration-300 hover:-translate-y-0.5 max-[767px]:w-full",
        variants[variant],
        className
      )}
    >
      <span>{children}</span>
      <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
    </Link>
  );
}
