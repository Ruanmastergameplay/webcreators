import { ButtonLink } from "@/components/ButtonLink";
import { Reveal } from "@/components/Reveal";
import { problemRows } from "@/lib/content";

export function Problems() {
  return (
    <section className="bg-paper pb-[clamp(82px,9vw,140px)] text-ink">
      <div className="page-container">
        <Reveal className="rounded-[28px] border border-ink/10 p-[clamp(24px,5vw,72px)]">
          <p className="eyebrow eyebrow-dark mb-7">Problemas que resolvo</p>
          <h2 className="title-l max-w-[900px]">Antes de comprar, seu cliente julga. Um site bem feito organiza essa percepção.</h2>
        </Reveal>

        <div className="mt-5 grid gap-4">
          {problemRows.map((row, index) => (
            <Reveal
              key={row.title}
              className="sticky top-[92px] grid gap-6 rounded-2xl border border-ink/10 bg-paper p-6 min-[992px]:grid-cols-[120px_minmax(260px,.65fr)_minmax(260px,.8fr)_auto] min-[992px]:items-center min-[992px]:p-8"
              style={{ zIndex: index + 1 } as React.CSSProperties}
            >
              <span className="font-bold uppercase tracking-[0.12em] text-orange">{row.number}</span>
              <h3 className="m-0 text-[clamp(26px,2.2vw,38px)] font-normal leading-[1.08] tracking-[-0.03em]">{row.title}</h3>
              <p className="m-0 text-lg leading-relaxed text-ink/65">{row.text}</p>
              <ButtonLink href="#contato" variant="white" className="border border-ink/10 max-[767px]:text-ink">
                {row.cta}
              </ButtonLink>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
