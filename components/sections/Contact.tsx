import { ContactForm } from "@/components/ContactForm";
import { Reveal } from "@/components/Reveal";

export function Contact() {
  return (
    <section id="contato" className="rounded-t-section bg-ink py-[clamp(90px,10vw,160px)] text-paper">
      <div className="page-container grid gap-10 min-[992px]:grid-cols-[minmax(260px,.8fr)_minmax(0,1fr)] min-[992px]:gap-[clamp(32px,6vw,96px)]">
        <Reveal>
          <p className="eyebrow mb-7">Contato</p>
          <h2 className="title-l">Vamos criar uma presenca digital mais forte para o seu negocio?</h2>
          <p className="lead-text mt-8">
            Me conte o que voce precisa e eu te mostro o melhor caminho: uma pagina simples, um site mais completo ou uma
            automacao para organizar seus contatos.
          </p>
        </Reveal>
        <Reveal delay={1}>
          <ContactForm />
        </Reveal>
      </div>
    </section>
  );
}
