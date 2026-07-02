import { Reveal } from "@/components/Reveal";
import { processRows } from "@/lib/content";

export function Process() {
  return (
    <section id="processo" className="bg-paper pb-[clamp(82px,9vw,140px)] text-ink">
      <div className="page-container grid items-start gap-8 min-[992px]:grid-cols-[minmax(180px,.34fr)_minmax(0,1fr)] min-[992px]:gap-[clamp(24px,5vw,80px)]">
        <Reveal as="p" className="eyebrow eyebrow-dark">
          Meu processo
        </Reveal>
        <Reveal as="h2" delay={1} className="title-l">
          Um processo simples, direto e sem enrolação.
        </Reveal>
      </div>

      <div className="page-container mt-[clamp(42px,5.5vw,84px)] border-t border-ink/10">
        {processRows.map(([number, title, text]) => (
          <Reveal
            key={number}
            className="grid gap-3 border-b border-ink/10 py-7 min-[900px]:grid-cols-[90px_minmax(220px,.5fr)_minmax(0,1fr)] min-[900px]:gap-6"
          >
            <span className="font-bold uppercase tracking-[0.12em] text-orange">{number}</span>
            <h3 className="m-0 text-[28px] font-normal tracking-[-0.03em]">{title}</h3>
            <p className="m-0 text-[17px] leading-relaxed text-ink/65">{text}</p>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
