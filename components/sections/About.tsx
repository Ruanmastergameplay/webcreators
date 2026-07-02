import { Reveal } from "@/components/Reveal";

export function About() {
  return (
    <section className="bg-ink py-[clamp(84px,10vw,160px)] text-paper">
      <div className="page-container grid gap-9 min-[992px]:grid-cols-[minmax(260px,.8fr)_minmax(0,1fr)] min-[992px]:gap-[clamp(32px,6vw,96px)]">
        <Reveal>
          <div className="sticky top-[104px] flex min-h-[420px] flex-col justify-end rounded-[22px] border border-white/[0.078] bg-[radial-gradient(circle_at_48%_18%,rgba(255,122,0,.42),transparent_24%),linear-gradient(160deg,#1c282e,#080d10_64%)] p-[clamp(24px,3vw,44px)] min-[992px]:min-h-[560px]">
            <span className="font-bold uppercase tracking-[0.14em] text-white/60">Ruan Garcia</span>
            <strong className="mt-4 max-w-[520px] text-[clamp(34px,4vw,64px)] font-normal leading-[0.98] tracking-[-0.04em]">
              Design, tecnologia e função prática.
            </strong>
          </div>
        </Reveal>
        <Reveal delay={1} className="pt-4">
          <p className="eyebrow mb-7">Sobre mim</p>
          <h2 className="title-l">Eu construo sites com mentalidade de evolução.</h2>
          <div className="mt-8 grid gap-7">
            <p className="lead-text m-0">
              Sou estudante da área de tecnologia e estou construindo minha trajetória em desenvolvimento web, automações e
              soluções digitais com IA.
            </p>
            <p className="lead-text m-0">
              Meu foco é criar sites que não sejam apenas bonitos, mas claros, rápidos e úteis para negócios reais.
            </p>
            <p className="lead-text m-0">
              Um bom site precisa juntar três coisas: visual forte, estrutura simples e função prática.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
