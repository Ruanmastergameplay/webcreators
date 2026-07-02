import { ButtonLink } from "@/components/ButtonLink";
import { Reveal } from "@/components/Reveal";
import { serviceTracks } from "@/lib/content";

export function Services() {
  return (
    <section id="automacoes" className="bg-ink py-[clamp(84px,10vw,160px)] text-paper">
      <div className="page-container grid gap-9 min-[992px]:grid-cols-[minmax(260px,.36fr)_minmax(0,1fr)] min-[992px]:gap-[clamp(28px,5vw,80px)]">
        <aside className="self-start min-[992px]:sticky min-[992px]:top-[104px] min-[992px]:min-h-[calc(100vh-128px)]">
          <Reveal as="p" className="eyebrow mb-7">
            O que eu faco
          </Reveal>
          <Reveal as="h2" delay={1} className="title-l">
            Sites e solucoes digitais para negocios que querem sair do basico.
          </Reveal>
          <div className="mt-10 flex gap-2 overflow-x-auto pb-2 min-[992px]:grid">
            {serviceTracks.map((track) => (
              <a
                key={track.id}
                href={`#${track.id}`}
                className="flex min-h-[50px] shrink-0 items-center rounded-lg border border-white/[0.078] px-5 text-[12px] font-bold uppercase tracking-[0.145em] text-white/60 transition hover:bg-white/[0.055] hover:text-white"
              >
                {track.label}
              </a>
            ))}
          </div>
        </aside>

        <div className="grid gap-5">
          {serviceTracks.map((track) => (
            <Reveal
              key={track.id}
              id={track.id}
              className="group relative min-h-[430px] overflow-hidden rounded-[18px] border border-white/[0.078] bg-ink-2 p-[clamp(24px,3vw,48px)]"
            >
              <div className="absolute -bottom-1/2 left-1/3 h-[280px] w-[72%] rounded-full bg-orange/25 opacity-0 blur-3xl transition duration-300 group-hover:opacity-100" />
              <span className="relative font-bold uppercase tracking-[0.12em] text-orange">{track.label}</span>
              <h3 className="relative mb-5 mt-16 max-w-[760px] text-[clamp(30px,3vw,48px)] font-normal leading-[1.06] tracking-[-0.03em] min-[992px]:mt-24">
                {track.title}
              </h3>
              <p className="relative m-0 max-w-[780px] text-[17px] leading-relaxed text-white/70">{track.text}</p>
              <ul className="relative my-9 grid gap-x-6 gap-y-3 text-white/60 min-[720px]:grid-cols-2">
                {track.bullets.map((bullet) => (
                  <li key={bullet} className="border-t border-white/[0.078] pt-3">
                    {bullet}
                  </li>
                ))}
              </ul>
              <ButtonLink href="#contato" variant="ghost">
                {track.cta}
              </ButtonLink>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
