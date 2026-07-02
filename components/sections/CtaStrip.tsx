import { ButtonLink } from "@/components/ButtonLink";
import { Reveal } from "@/components/Reveal";

export function CtaStrip() {
  return (
    <section className="bg-paper py-[clamp(82px,9vw,140px)] text-ink">
      <div className="page-container">
        <Reveal className="grid items-center gap-7 rounded-3xl border border-ink/10 p-[clamp(28px,4vw,58px)] min-[1100px]:grid-cols-[minmax(0,1fr)_minmax(260px,.54fr)_auto]">
          <h2 className="m-0 text-[clamp(32px,3vw,48px)] font-normal leading-[1.05] tracking-[-0.03em]">
            Seu negocio ainda parece menor do que realmente e?
          </h2>
          <p className="m-0 text-[20px] leading-snug tracking-[-0.03em] text-ink/70">
            Um site bem feito pode transformar a forma como o seu servico e percebido.
          </p>
          <ButtonLink href="#contato">Quero melhorar minha presenca online</ButtonLink>
        </Reveal>
      </div>
    </section>
  );
}
