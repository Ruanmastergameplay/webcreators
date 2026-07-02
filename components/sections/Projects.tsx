import { Reveal } from "@/components/Reveal";
import { projectCards } from "@/lib/content";
import { cn } from "@/lib/utils";

export function Projects() {
  return (
    <section id="projetos" className="bg-paper py-[clamp(82px,9vw,140px)] text-ink">
      <div className="page-container grid items-start gap-8 min-[992px]:grid-cols-[minmax(180px,.34fr)_minmax(0,1fr)] min-[992px]:gap-[clamp(24px,5vw,80px)]">
        <Reveal as="p" className="eyebrow eyebrow-dark">
          Projetos e demonstrações
        </Reveal>
        <Reveal as="h2" delay={1} className="title-l">
          Soluções criadas para mostrar como design, estrutura e tecnologia mudam a percepção de um negócio.
        </Reveal>
      </div>

      <div className="page-container mt-[clamp(42px,5.5vw,84px)] grid gap-5">
        {projectCards.map((project) => (
          <Reveal
            key={project.title}
            className="grid gap-8 border-t border-ink/10 py-7 last:border-b min-[992px]:grid-cols-[minmax(0,1fr)_minmax(300px,.78fr)] min-[992px]:gap-[clamp(24px,4vw,72px)]"
          >
            <div
              className={cn(
                "relative flex min-h-[420px] flex-col justify-end overflow-hidden rounded-[20px] bg-gradient-to-br p-[clamp(22px,3vw,42px)] text-paper min-[992px]:sticky min-[992px]:top-[104px] min-[992px]:min-h-[clamp(300px,38vw,520px)]",
                project.tone
              )}
            >
              <div className="absolute inset-5 rounded-[14px] border border-white/15" />
              <div className="absolute bottom-7 right-7 aspect-[.75] w-[34%] rounded-[18px] bg-white/15 backdrop-blur-md" />
              <span className="relative z-[1] text-[13px] font-bold uppercase tracking-[0.16em] text-white/70">{project.title}</span>
              <strong className="relative z-[1] mt-4 max-w-[620px] text-[clamp(34px,4vw,64px)] font-normal leading-[0.98] tracking-[-0.04em]">
                {project.visualTitle}
              </strong>
            </div>

            <div className="self-center py-4">
              <p className="m-0 text-[12px] font-bold uppercase tracking-[0.145em] text-ink/50">
                {project.type} &bull; {project.stack}
              </p>
              <h3 className="mb-5 mt-6 text-[clamp(28px,2.6vw,42px)] font-normal leading-[1.08] tracking-[-0.03em]">
                {project.title}
              </h3>
              <p className="m-0 text-[17px] leading-relaxed text-ink/65">{project.text}</p>
              <dl className="mt-8 grid gap-3">
                <div className="border-t border-ink/10 pt-4">
                  <dt className="text-[12px] font-bold uppercase tracking-[0.12em] text-ink/45">Objetivo</dt>
                  <dd className="m-0 mt-2 text-lg">{project.goal}</dd>
                </div>
                <div className="border-t border-ink/10 pt-4">
                  <dt className="text-[12px] font-bold uppercase tracking-[0.12em] text-ink/45">Resultado esperado</dt>
                  <dd className="m-0 mt-2 text-lg">{project.result}</dd>
                </div>
              </dl>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
