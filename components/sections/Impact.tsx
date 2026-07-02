import { Reveal } from "@/components/Reveal";
import { impactCards } from "@/lib/content";

export function Impact() {
  return (
    <section id="sites" className="bg-paper py-[clamp(82px,9vw,140px)] text-ink">
      <div className="page-container grid items-start gap-8 min-[992px]:grid-cols-[minmax(180px,.34fr)_minmax(0,1fr)] min-[992px]:gap-[clamp(24px,5vw,80px)]">
        <Reveal as="p" className="eyebrow eyebrow-dark">
          O site precisa resolver
        </Reveal>
        <Reveal as="h2" delay={1} className="title-l">
          Design bonito é só o começo. O site precisa resolver um problema.
        </Reveal>
      </div>

      <div className="page-container mt-[clamp(42px,5.5vw,84px)] grid border-l border-t border-ink/10 min-[720px]:grid-cols-2 min-[1180px]:grid-cols-4">
        {impactCards.map((card, index) => (
          <Reveal
            key={card.title}
            delay={index === 0 ? undefined : index === 1 ? 1 : index === 2 ? 2 : 3}
            className="min-h-[230px] border-b border-r border-ink/10 p-[clamp(22px,2.2vw,34px)] min-[1180px]:min-h-[290px]"
          >
            <span className="font-bold uppercase tracking-[0.12em] text-orange">{card.number}</span>
            <h3 className="mb-4 mt-14 text-3xl font-normal tracking-[-0.03em] min-[1180px]:mt-20">{card.title}</h3>
            <p className="m-0 text-[17px] leading-relaxed text-ink/65">{card.text}</p>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
