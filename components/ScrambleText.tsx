"use client";

import { useEffect, useRef } from "react";

const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";

export function ScrambleText({ children, className }: { children: string; className?: string }) {
  const ref = useRef<HTMLParagraphElement | null>(null);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const run = () => {
      const original = children;
      let frame = 0;
      const totalFrames = 28;

      const tick = () => {
        const progress = frame / totalFrames;
        const visibleCount = Math.floor(original.length * progress);

        node.textContent = original
          .split("")
          .map((character, index) => {
            if (character === " " || index < visibleCount) return character;
            return alphabet[Math.floor(Math.random() * alphabet.length)];
          })
          .join("");

        frame += 1;
        if (frame <= totalFrames) requestAnimationFrame(tick);
        else node.textContent = original;
      };

      tick();
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          run();
          observer.unobserve(node);
        }
      },
      { threshold: 0.7 }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [children]);

  return (
    <p ref={ref} className={className}>
      {children}
    </p>
  );
}
