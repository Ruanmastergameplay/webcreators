"use client";

import { ArrowRight } from "lucide-react";

export function ContactForm() {
  function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const text = [
      "Oi, Ruan! Quero conversar sobre um site.",
      "",
      `Nome: ${form.get("name") ?? ""}`,
      `WhatsApp: ${form.get("phone") ?? ""}`,
      `Tipo de negócio: ${form.get("business") ?? ""}`,
      `Orçamento aproximado: ${form.get("budget") ?? ""}`,
      "",
      `O que preciso: ${form.get("message") ?? ""}`
    ].join("\n");

    window.open(`https://wa.me/?text=${encodeURIComponent(text)}`, "_blank", "noopener,noreferrer");
  }

  const inputClass =
    "w-full rounded-lg border border-white/[0.078] bg-white/[0.055] px-5 py-4 text-base normal-case tracking-normal text-paper outline-none transition placeholder:text-white/28 focus:border-orange/70";
  const labelClass = "grid gap-2 text-[13px] font-bold uppercase tracking-[0.12em] text-white/60";

  return (
    <form onSubmit={onSubmit} className="grid gap-4">
      <label className={labelClass}>
        Nome
        <input className={inputClass} name="name" type="text" placeholder="Seu nome" required />
      </label>
      <label className={labelClass}>
        WhatsApp
        <input className={inputClass} name="phone" type="tel" placeholder="(00) 00000-0000" required />
      </label>
      <label className={labelClass}>
        Tipo de negócio
        <input className={inputClass} name="business" type="text" placeholder="Academia, barbearia, clínica..." />
      </label>
      <label className={labelClass}>
        O que você precisa?
        <textarea className={inputClass} name="message" rows={4} placeholder="Me conte sua ideia" />
      </label>
      <label className={labelClass}>
        Orçamento aproximado
        <select className={inputClass} name="budget" defaultValue="Ainda não sei">
          <option className="text-ink" value="Ainda não sei">
            Ainda não sei
          </option>
          <option className="text-ink" value="Até R$ 500">
            Até R$ 500
          </option>
          <option className="text-ink" value="R$ 500 a R$ 1.500">
            R$ 500 a R$ 1.500
          </option>
          <option className="text-ink" value="Acima de R$ 1.500">
            Acima de R$ 1.500
          </option>
        </select>
      </label>
      <button className="group inline-flex min-h-[60px] w-full items-center justify-center gap-3 rounded-lg bg-orange px-8 text-[12px] font-bold uppercase tracking-[0.145em] text-white transition hover:-translate-y-0.5 hover:bg-[#dd6500]">
        Enviar mensagem
        <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
      </button>
      <small className="text-base leading-relaxed text-white/55">
        Responderei assim que possível com uma ideia inicial para o seu projeto.
      </small>
    </form>
  );
}
