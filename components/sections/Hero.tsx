import { ButtonLink } from "@/components/ButtonLink";
import { Reveal } from "@/components/Reveal";
import { ScrambleText } from "@/components/ScrambleText";

export function Hero() {
  return (
    <section id="top" className="overflow-hidden rounded-b-section bg-ink pb-[clamp(88px,10.41vw,150px)] pt-[108px] text-paper min-[768px]:pt-[clamp(112px,14.16vw,204px)]">
      <div className="page-container">
        <ScrambleText className="eyebrow mb-7">Desenvolvimento web para pequenos negócios</ScrambleText>

        <div className="grid items-end gap-8 min-[992px]:grid-cols-[minmax(0,1fr)_minmax(220px,360px)] min-[992px]:gap-[clamp(24px,4vw,72px)]">
          <Reveal as="h1" className="title-xl">
            Sites modernos para negócios que querem parecer maiores, vender melhor e organizar seus clientes.
          </Reveal>
          <Reveal as="p" delay={1} className="m-0 text-[22px] leading-[1.35] tracking-[-0.03em] text-white/70 min-[992px]:mb-2">
            Páginas de captura &bull; Sites institucionais &bull; Formulários &bull; WhatsApp &bull; Automações com IA
          </Reveal>
        </div>

        <Reveal delay={2} className="mt-9 flex gap-3 max-[767px]:grid">
          <ButtonLink href="#contato">Quero meu site</ButtonLink>
          <ButtonLink href="#projetos" variant="soft">
            Ver projetos
          </ButtonLink>
        </Reveal>

        <div className="mt-16 grid items-start gap-8 min-[992px]:mt-[clamp(70px,9vw,130px)] min-[992px]:grid-cols-[minmax(0,1.18fr)_minmax(300px,.82fr)] min-[992px]:gap-[clamp(24px,4.4vw,72px)]">
          <Reveal delay={3}>
            <div className="sticky top-[108px] min-h-[520px] overflow-hidden rounded-3xl border border-white/[0.078] bg-[radial-gradient(circle_at_72%_14%,rgba(255,122,0,.42),transparent_26%),linear-gradient(135deg,#111b20,#070b0d_62%)] shadow-glow max-[991px]:static min-[992px]:min-h-[clamp(360px,41vw,590px)]">
              <div className="flex h-[50px] items-center gap-2 border-b border-white/[0.078] px-5 text-white/55">
                <span className="h-2.5 w-2.5 rounded-full bg-white/25" />
                <span className="h-2.5 w-2.5 rounded-full bg-white/25" />
                <span className="h-2.5 w-2.5 rounded-full bg-white/25" />
                <small className="ml-3 text-xs font-bold uppercase tracking-[0.14em]">webcreatorss.dev</small>
              </div>
              <div className="grid min-h-[470px] gap-6 p-6 min-[720px]:grid-cols-[1fr_minmax(180px,.58fr)] min-[992px]:p-[clamp(22px,3.2vw,48px)]">
                <div className="self-end">
                  <span className="mb-4 inline-flex text-[13px] font-bold uppercase tracking-[0.14em] text-white/60">
                    Site pronto para converter
                  </span>
                  <strong className="block max-w-[520px] text-[34px] font-normal leading-[0.98] tracking-[-0.04em] min-[992px]:text-[clamp(32px,4.1vw,66px)]">
                    Clareza, confiança e contato em um só lugar.
                  </strong>
                  <button className="mt-7 min-h-[52px] rounded-lg bg-orange px-5 text-sm font-bold uppercase tracking-[0.08em] text-white">
                    Chamar no WhatsApp
                  </button>
                </div>
                <div className="self-start rounded-[18px] border border-white/[0.078] bg-white/[0.08] p-6 backdrop-blur-md">
                  <i className="not-italic font-bold text-orange">01</i>
                  <b className="mt-16 block text-2xl font-medium">Contatos captados</b>
                  <p className="mt-3 text-base leading-relaxed text-white/65">
                    Nome, WhatsApp e interesse organizados para atendimento.
                  </p>
                </div>
              </div>
            </div>
          </Reveal>

          <Reveal delay={2} className="border-t border-white/[0.078] pt-5">
            <p className="lead-text m-0">
              Crio páginas rápidas, bonitas e funcionais para pequenos negócios que precisam de uma presença digital mais
              profissional, com foco em clareza, design, WhatsApp, captação de contatos e automações simples.
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
