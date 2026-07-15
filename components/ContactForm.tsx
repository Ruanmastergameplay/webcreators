"use client";

import { ArrowRight } from "lucide-react";
import { useState } from "react";

const whatsappBaseUrl = "https://wa.me/5548991054565";

export function ContactForm() {
  const [budgetUnknown, setBudgetUnknown] = useState(false);

  function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const budget = budgetUnknown ? "Ainda não sei" : String(form.get("budget") ?? "").trim();
    const text = [
      "Olá, vim pelo site e gostaria de solicitar um orçamento.",
      "",
      `Nome: ${form.get("name") ?? ""}`,
      `E-mail: ${form.get("email") ?? ""}`,
      `Telefone: ${form.get("phone") ?? ""}`,
      `Empresa: ${form.get("business") ?? ""}`,
      `Tipo de negócio: ${form.get("businessType") ?? ""}`,
      `Orçamento estimado: ${budget || "Não informado"}`,
      `Mensagem: ${form.get("message") ?? ""}`
    ].join("\n");

    window.open(`${whatsappBaseUrl}?text=${encodeURIComponent(text)}`, "_blank", "noopener,noreferrer");
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
        E-mail
        <input className={inputClass} name="email" type="email" placeholder="seuemail@exemplo.com" />
      </label>
      <label className={labelClass}>
        Telefone
        <input className={inputClass} name="phone" type="tel" placeholder="(00) 00000-0000" required />
      </label>
      <label className={labelClass}>
        Empresa
        <input className={inputClass} name="business" type="text" placeholder="Nome da empresa" />
      </label>
      <label className={labelClass}>
        Tipo de negócio
        <input className={inputClass} name="businessType" type="text" placeholder="Academia, barbearia, clínica..." />
      </label>
      <label className={labelClass}>
        O que você precisa?
        <textarea className={inputClass} name="message" rows={4} placeholder="Me conte sua ideia" />
      </label>
      <label className={labelClass}>
        Orçamento estimado
        <input
          className={inputClass}
          name="budget"
          type="text"
          inputMode="decimal"
          disabled={budgetUnknown}
          placeholder="Digite seu orçamento estimado"
        />
        <label className="flex min-h-[48px] cursor-pointer items-center gap-3 rounded-lg border border-white/[0.078] bg-white/[0.04] px-4 text-sm normal-case tracking-normal text-white/70 transition hover:bg-white/[0.06]">
          <input
            name="budgetUnknown"
            type="checkbox"
            checked={budgetUnknown}
            onChange={(event) => setBudgetUnknown(event.target.checked)}
            className="h-4 w-4 accent-orange"
          />
          Ainda não sei
        </label>
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
