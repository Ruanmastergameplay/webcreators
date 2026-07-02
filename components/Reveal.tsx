"use client";

import { useEffect, useRef } from "react";
import { cn } from "@/lib/utils";

type RevealProps = React.HTMLAttributes<HTMLElement> & {
  as?: React.ElementType;
  children: React.ReactNode;
  delay?: 1 | 2 | 3;
};

export function Reveal({ as: Tag = "div", children, className, delay, ...props }: RevealProps) {
  const ref = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          node.classList.add("is-visible");
          observer.unobserve(node);
        }
      },
      { threshold: 0.16 }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <Tag
      ref={ref as never}
      {...props}
      className={cn("reveal", delay === 1 && "delay-1", delay === 2 && "delay-2", delay === 3 && "delay-3", className)}
    >
      {children}
    </Tag>
  );
}
