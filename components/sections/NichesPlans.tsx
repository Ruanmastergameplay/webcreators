import { Reveal } from "@/components/Reveal";
import { niches, plans } from "@/lib/content";

export function NichesPlans() {
  return (
    <section className="bg-paper py-[clamp(82px,9vw,140px)] text-ink">
      <div className="page-container grid gap-14 min-[992px]:grid-cols-[.85fr_1fr] min-[992px]:gap-[clamp(32px,6vw,96px)]">
        <Reveal>
          <p className="eyebrow eyebrow-dark mb-7">Para quem eu crio sites</p>
          <h2 className="title-l">Negócios que dependem de confiança, contato e boa apresentação.</h2>
          <div className="mt-10 flex flex-wrap gap-2">
            {niches.map((niche) => (
              <span key={niche} className="rounded-full border border-ink/10 px-4 py-2 text-sm font-bold uppercase tracking-[0.1em] text-ink/65">
                {niche}
              </span>
            ))}
          </div>
        </Reveal>

        <div className="grid gap-4">
          {plans.map((plan, index) => (
            <Reveal key={plan.title} delay={index === 1 ? 1 : index === 2 ? 2 : undefined} className="rounded-2xl border border-ink/10 p-6">
              <span className="font-bold uppercase tracking-[0.12em] text-orange">0{index + 1}</span>
              <h3 className="mb-3 mt-10 text-3xl font-normal tracking-[-0.03em]">{plan.title}</h3>
              <p className="m-0 text-[17px] leading-relaxed text-ink/65">{plan.text}</p>
              <ul className="mt-7 grid gap-2 text-ink/70">
                {plan.items.map((item) => (
                  <li key={item} className="border-t border-ink/10 pt-3">
                    {item}
                  </li>
                ))}
              </ul>
              <p className="mt-7 text-[12px] font-bold uppercase tracking-[0.145em] text-ink/50">A partir de: sob consulta</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
