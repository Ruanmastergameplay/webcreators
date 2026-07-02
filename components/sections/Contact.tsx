import { ContactForm } from "@/components/ContactForm";
import { Reveal } from "@/components/Reveal";

export function Contact() {
  return (
    <section id="contato" className="rounded-t-section bg-ink py-[clamp(90px,10vw,160px)] text-paper">
      <div className="page-container grid gap-10 min-[992px]:grid-cols-[minmax(260px,.8fr)_minmax(0,1fr)] min-[992px]:gap-[clamp(32px,6vw,96px)]">
        <Reveal>
          <p className="eyebrow mb-7">Contato</p>
          <h2 className="title-l">Vamos criar uma presença digital mais forte para o seu negócio?</h2>
          <p className="lead-text mt-8">
            Me conte o que você precisa e eu te mostro o melhor caminho: uma página simples, um site mais completo ou uma
            automação para organizar seus contatos.
          </p>
        </Reveal>
        <Reveal delay={1}>
          <ContactForm />
        </Reveal>
      </div>
    </section>
  );
}
