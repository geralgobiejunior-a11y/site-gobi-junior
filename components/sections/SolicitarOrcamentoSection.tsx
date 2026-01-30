"use client";

import React, { useMemo, useState } from "react";
import { motion } from "framer-motion";
import {
  Phone,
  Mail,
  MapPin,
  Send,
  MessageCircle,
  ArrowUpRight,
  User,
  Building2,
  AtSign,
  ClipboardList,
  ShieldCheck,
  Clock,
  Sparkles,
  CheckCircle2,
  Wrench,
  Briefcase,
  BadgeCheck,
} from "lucide-react";

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

type Props = {
  NAVY: string;
  ORANGE: string;

  phone?: string;
  whatsapp?: string;
  email?: string;
  locationLabel?: string;
};

type TipoPedido = "Orçamento" | "Parceria" | "Recrutamento";

type TopicoOrcamento =
  | "Hidráulica"
  | "Elétrica"
  | "Manutenção"
  | "Pintura"
  | "Pladur"
  | "Remodelação"
  | "Outros";

type Profissao =
  | "Eletricista"
  | "Canalizador"
  | "Pintor"
  | "Pladurista"
  | "Manutenção"
  | "Pedreiro"
  | "Outro";

type Nivel = "Ajudante" | "Meio-Oficial" | "Oficial" | "Encarregado";

export function SolicitarOrcamentoSection({
  NAVY,
  ORANGE,
  phone = "+351 939 555 074",
  whatsapp = "+351939555074",
  email = "orcamentos@gobijunior.pt",
  locationLabel = "Lisboa • Grande Lisboa • Margem Sul",
}: Props) {
  const [tipo, setTipo] = useState<TipoPedido>("Orçamento");

  const [form, setForm] = useState({
    nome: "",
    email: "",
    telefone: "",
    empresa: "",
    // orçamento
    topico: "Hidráulica" as TopicoOrcamento,
    local: "",
    // recrutamento
    profissao: "Eletricista" as Profissao,
    nivel: "Oficial" as Nivel,
    experiencia: "", // opcional (texto curto)
    // comum (mensagem)
    mensagem: "",
  });

  const onChange =
    (key: keyof typeof form) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
      setForm((s) => ({ ...s, [key]: e.target.value }));
    };

  const requiredOk = useMemo(() => {
    const baseOk =
      form.nome.trim().length >= 2 &&
      form.email.trim().length >= 5 &&
      form.telefone.trim().length >= 6;

    if (!baseOk) return false;

    if (tipo === "Orçamento") {
      return form.mensagem.trim().length >= 15 && form.topico.trim().length > 0;
    }
    if (tipo === "Recrutamento") {
      return (
        form.mensagem.trim().length >= 15 &&
        form.profissao.trim().length > 0 &&
        form.nivel.trim().length > 0
      );
    }
    // Parceria
    return form.mensagem.trim().length >= 15;
  }, [tipo, form]);

  const mailto = useMemo(() => {
    const subject = encodeURIComponent(`${tipo} — Gobi & Júnior`);

    const extra =
      tipo === "Orçamento"
        ? `Tópico: ${form.topico}\n${form.local.trim() ? `Local: ${form.local}\n` : ""}`
        : tipo === "Recrutamento"
        ? `Profissão: ${form.profissao}\nNível: ${form.nivel}\n${
            form.experiencia.trim() ? `Experiência: ${form.experiencia}\n` : ""
          }`
        : "";

    const body = encodeURIComponent(
      `Tipo: ${tipo}\nNome: ${form.nome}\nEmail: ${form.email}\nTelefone: ${form.telefone}\n${
        form.empresa.trim() ? `Empresa: ${form.empresa}\n` : ""
      }\n${extra}\nMensagem:\n${form.mensagem}`
    );

    return `mailto:${email}?subject=${subject}&body=${body}`;
  }, [email, tipo, form]);

  const waLink = useMemo(() => {
    const number = whatsapp.replace(/\D/g, "");
    const extra =
      tipo === "Orçamento"
        ? `Tópico: ${form.topico}\n${form.local.trim() ? `Local: ${form.local}\n` : ""}`
        : tipo === "Recrutamento"
        ? `Profissão: ${form.profissao}\nNível: ${form.nivel}\n${
            form.experiencia.trim() ? `Experiência: ${form.experiencia}\n` : ""
          }`
        : "";

    const text = encodeURIComponent(
      `Olá! Gostaria de solicitar ${tipo}.\n\nNome: ${form.nome}\nEmail: ${form.email}\nTelefone: ${
        form.telefone
      }\n${form.empresa.trim() ? `Empresa: ${form.empresa}\n` : ""}\n${extra}\nMensagem:\n${form.mensagem}`
    );

    return `https://wa.me/${number}?text=${text}`;
  }, [whatsapp, tipo, form]);

  const callLink = useMemo(() => `tel:${phone.replace(/\s/g, "")}`, [phone]);

  const Segmented = () => (
    <div className="mt-6 flex w-full gap-2 rounded-2xl bg-slate-50 p-2 ring-1 ring-slate-200/70">
      {(["Orçamento", "Parceria", "Recrutamento"] as TipoPedido[]).map((t) => {
        const active = t === tipo;
        return (
          <button
            key={t}
            type="button"
            onClick={() => setTipo(t)}
            className={[
              "flex-1 rounded-xl px-3 py-2 text-sm font-extrabold transition",
              active ? "shadow-sm ring-1" : "hover:bg-white/70",
            ].join(" ")}
            style={
              active
                ? { backgroundColor: "white", color: NAVY, borderColor: `${NAVY}22` }
                : { color: "#334155" }
            }
          >
            {t}
          </button>
        );
      })}
    </div>
  );

  const Field = ({
    label,
    icon: Icon,
    placeholder,
    value,
    onChange,
    type = "text",
  }: {
    label: string;
    icon: any;
    placeholder: string;
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    type?: string;
  }) => (
    <div>
      <label className="text-sm font-semibold" style={{ color: NAVY }}>
        {label}
      </label>

      <div className="mt-2 relative">
        <div
          className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 flex h-9 w-9 items-center justify-center rounded-xl ring-1"
          style={{ backgroundColor: `${ORANGE}14`, borderColor: `${ORANGE}30` }}
        >
          <Icon className="h-4 w-4" style={{ color: ORANGE }} />
        </div>

        <input
          type={type}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          className="w-full rounded-2xl border border-slate-200 bg-white pl-14 pr-4 py-3 text-sm outline-none transition focus:border-slate-300 focus:ring-4 focus:ring-slate-100"
        />
      </div>
    </div>
  );

  const Select = ({
    label,
    icon: Icon,
    value,
    onChange,
    options,
  }: {
    label: string;
    icon: any;
    value: string;
    onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
    options: string[];
  }) => (
    <div>
      <label className="text-sm font-semibold" style={{ color: NAVY }}>
        {label}
      </label>

      <div className="mt-2 relative">
        <div
          className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 flex h-9 w-9 items-center justify-center rounded-xl ring-1"
          style={{ backgroundColor: `${ORANGE}14`, borderColor: `${ORANGE}30` }}
        >
          <Icon className="h-4 w-4" style={{ color: ORANGE }} />
        </div>

        <select
          value={value}
          onChange={onChange}
          className="w-full appearance-none rounded-2xl border border-slate-200 bg-white pl-14 pr-10 py-3 text-sm outline-none transition focus:border-slate-300 focus:ring-4 focus:ring-slate-100"
        >
          {options.map((o) => (
            <option key={o} value={o}>
              {o}
            </option>
          ))}
        </select>

        <div className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-slate-400">
          <ArrowUpRight className="h-4 w-4 rotate-90" />
        </div>
      </div>
    </div>
  );

  const InfoCard = ({
    title,
    icon: Icon,
    children,
    footer,
  }: {
    title: string;
    icon: any;
    children: React.ReactNode;
    footer?: React.ReactNode;
  }) => (
    <Card className="relative overflow-hidden border-white bg-white/90 shadow-sm ring-1 ring-slate-200/70 backdrop-blur">
      <div className="absolute left-0 top-0 h-full w-[3px]" style={{ backgroundColor: ORANGE }} />
      <CardContent className="p-6">
        <div className="flex items-start gap-4">
          <div
            className="flex h-12 w-12 items-center justify-center rounded-2xl ring-1"
            style={{ backgroundColor: `${ORANGE}18`, borderColor: `${ORANGE}35` }}
          >
            <Icon className="h-5 w-5" style={{ color: ORANGE }} />
          </div>
          <div className="min-w-0 flex-1">
            <p className="text-base font-extrabold" style={{ color: NAVY }}>
              {title}
            </p>
            <div className="mt-2 text-sm text-slate-700">{children}</div>
            {footer ? <div className="mt-4">{footer}</div> : null}
          </div>
        </div>
      </CardContent>
    </Card>
  );

  const messagePlaceholder =
    tipo === "Orçamento"
      ? "Descreva o serviço (o que é, onde é, e quando precisa). Se tiver fotos/plantas, diga que pode enviar por email."
      : tipo === "Recrutamento"
      ? "Conte rápido: onde mora, experiência real em obra, se tem curso, e quando pode começar."
      : "Explique a parceria: que serviço oferece, zona, capacidade e disponibilidade.";

  return (
    <section id="orcamento" className="relative overflow-hidden py-16 lg:py-24">
      <div
        className="absolute inset-0"
        style={{
          background: `
            radial-gradient(900px 520px at 50% 0%, ${NAVY}10 0%, transparent 60%),
            radial-gradient(900px 520px at 75% 30%, ${ORANGE}12 0%, transparent 58%),
            linear-gradient(180deg, #ffffff 0%, #f8fafc 100%)
          `,
        }}
      />
      <div className="pointer-events-none absolute inset-0 opacity-40">
        <div className="absolute inset-0 bg-grid-black/[0.035] bg-[length:22px_22px]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <div className="mx-auto mb-5 flex items-center justify-center gap-2">
            <span
              className="inline-flex items-center gap-2 rounded-full px-4 py-2 text-xs font-extrabold ring-1 backdrop-blur"
              style={{ backgroundColor: `${NAVY}08`, color: NAVY, borderColor: `${NAVY}22` }}
            >
              <Sparkles className="h-4 w-4" style={{ color: ORANGE }} />
              Simples • direto • sem fricção
            </span>
          </div>

          <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl" style={{ color: NAVY }}>
            Contacto
          </h2>
          <p className="mt-3 text-lg text-slate-600">
            Escolha o tipo de pedido e envie — respondemos com os próximos passos.
          </p>

          <div className="mx-auto mt-6 h-[3px] w-24 rounded-full bg-slate-200">
            <div className="h-[3px] w-10 rounded-full" style={{ backgroundColor: ORANGE }} />
          </div>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-8 lg:grid-cols-12">
          <motion.div
            className="lg:col-span-8"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.45, ease: "easeOut" }}
          >
            <Card className="relative overflow-hidden border-white bg-white/92 shadow-sm ring-1 ring-slate-200/70 backdrop-blur">
              <div
                className="absolute inset-x-0 top-0 h-24"
                style={{ background: `linear-gradient(90deg, ${NAVY}08 0%, ${ORANGE}10 55%, transparent 100%)` }}
              />
              <CardContent className="relative p-6 sm:p-8">
                <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                  <div>
                    <h3 className="text-xl font-extrabold" style={{ color: NAVY }}>
                      Solicitar contacto
                    </h3>
                    <p className="mt-1 text-sm text-slate-600">Resposta rápida em dia útil.</p>

                    <div className="mt-4 flex flex-wrap gap-2">
                      {[
                        { i: Clock, t: "Resposta rápida" },
                        { i: ShieldCheck, t: "Execução responsável" },
                        { i: ClipboardList, t: "Triagem clara" },
                      ].map((x, idx) => (
                        <span
                          key={idx}
                          className="inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-bold ring-1"
                          style={{ backgroundColor: "white", color: NAVY, borderColor: `${NAVY}18` }}
                        >
                          <x.i className="h-3.5 w-3.5" style={{ color: ORANGE }} />
                          {x.t}
                        </span>
                      ))}
                    </div>
                  </div>

                  <span
                    className="inline-flex w-fit items-center rounded-full px-3 py-1.5 text-xs font-extrabold ring-1"
                    style={{ backgroundColor: "white", color: NAVY, borderColor: `${NAVY}22` }}
                  >
                    GOBI & JÚNIOR
                  </span>
                </div>

                <Segmented />

                {/* Base */}
                <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <Field
                    label="Nome completo"
                    icon={User}
                    placeholder="Ex.: João Silva"
                    value={form.nome}
                    onChange={onChange("nome")}
                  />
                  <Field
                    label="Email"
                    icon={AtSign}
                    placeholder="email@empresa.pt"
                    value={form.email}
                    onChange={onChange("email")}
                    type="email"
                  />
                  <Field
                    label="Telefone"
                    icon={Phone}
                    placeholder="+351 ..."
                    value={form.telefone}
                    onChange={onChange("telefone")}
                  />
                  <Field
                    label="Empresa (opcional)"
                    icon={Building2}
                    placeholder="Nome da empresa"
                    value={form.empresa}
                    onChange={onChange("empresa")}
                  />
                </div>

                {/* Condicional: Orçamento */}
                {tipo === "Orçamento" ? (
                  <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
                    <Select
                      label="Tópico do serviço"
                      icon={Wrench}
                      value={form.topico}
                      onChange={onChange("topico")}
                      options={["Hidráulica", "Elétrica", "Manutenção", "Pintura", "Pladur", "Remodelação", "Outros"]}
                    />
                    <Field
                      label="Local (opcional)"
                      icon={MapPin}
                      placeholder="Ex.: Lisboa, Oeiras, Almada…"
                      value={form.local}
                      onChange={onChange("local")}
                    />
                  </div>
                ) : null}

                {/* Condicional: Recrutamento */}
                {tipo === "Recrutamento" ? (
                  <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
                    <Select
                      label="Profissão"
                      icon={Briefcase}
                      value={form.profissao}
                      onChange={onChange("profissao")}
                      options={["Eletricista", "Canalizador", "Pintor", "Pladurista", "Manutenção", "Pedreiro", "Outro"]}
                    />
                    <Select
                      label="Nível (na obra)"
                      icon={BadgeCheck}
                      value={form.nivel}
                      onChange={onChange("nivel")}
                      options={["Ajudante", "Meio-Oficial", "Oficial", "Encarregado"]}
                    />
                    <Field
                      label="Experiência (opcional)"
                      icon={CheckCircle2}
                      placeholder="Ex.: 3 anos / 6 meses"
                      value={form.experiencia}
                      onChange={onChange("experiencia")}
                    />
                  </div>
                ) : null}

                {/* Mensagem */}
                <div className="mt-6">
                  <label className="text-sm font-semibold" style={{ color: NAVY }}>
                    Mensagem
                  </label>

                  <div className="mt-2 relative">
                    <div
                      className="pointer-events-none absolute left-3 top-3 flex h-9 w-9 items-center justify-center rounded-xl ring-1"
                      style={{ backgroundColor: `${ORANGE}14`, borderColor: `${ORANGE}30` }}
                    >
                      <ClipboardList className="h-4 w-4" style={{ color: ORANGE }} />
                    </div>

                    <textarea
                      value={form.mensagem}
                      onChange={onChange("mensagem")}
                      placeholder={messagePlaceholder}
                      rows={6}
                      className="w-full resize-none rounded-2xl border border-slate-200 bg-white pl-14 pr-4 py-3 text-sm outline-none transition focus:border-slate-300 focus:ring-4 focus:ring-slate-100"
                    />
                  </div>

                  <div className="mt-3 flex flex-wrap gap-2 text-xs text-slate-500">
                    {tipo === "Orçamento"
                      ? ["O que é", "Onde é", "Quando precisa"].map((t, i) => (
                          <span
                            key={i}
                            className="inline-flex items-center gap-1 rounded-full bg-slate-50 px-3 py-1 ring-1 ring-slate-200/70"
                          >
                            <CheckCircle2 className="h-3.5 w-3.5" style={{ color: ORANGE }} />
                            {t}
                          </span>
                        ))
                      : tipo === "Recrutamento"
                      ? ["Onde mora", "Experiência real", "Disponibilidade"].map((t, i) => (
                          <span
                            key={i}
                            className="inline-flex items-center gap-1 rounded-full bg-slate-50 px-3 py-1 ring-1 ring-slate-200/70"
                          >
                            <CheckCircle2 className="h-3.5 w-3.5" style={{ color: ORANGE }} />
                            {t}
                          </span>
                        ))
                      : ["Serviço", "Zona", "Capacidade"].map((t, i) => (
                          <span
                            key={i}
                            className="inline-flex items-center gap-1 rounded-full bg-slate-50 px-3 py-1 ring-1 ring-slate-200/70"
                          >
                            <CheckCircle2 className="h-3.5 w-3.5" style={{ color: ORANGE }} />
                            {t}
                          </span>
                        ))}
                  </div>
                </div>

                {/* Ações */}
                <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:items-center">
                  <Button
                    asChild
                    disabled={!requiredOk}
                    className="h-12 rounded-2xl font-extrabold"
                    style={{ backgroundColor: NAVY }}
                  >
                    <a href={mailto}>
                      <Send className="mr-2 h-4 w-4" />
                      Enviar
                    </a>
                  </Button>

                  <Button
                    asChild
                    variant="outline"
                    className="h-12 rounded-2xl font-extrabold"
                    style={{ borderColor: `${NAVY}22`, color: NAVY, backgroundColor: "white" }}
                  >
                    <a href={waLink} target="_blank" rel="noreferrer">
                      <MessageCircle className="mr-2 h-4 w-4" />
                      WhatsApp
                    </a>
                  </Button>

                  {!requiredOk ? (
                    <span className="text-xs text-slate-500 sm:ml-auto">
                      Preencha nome, email, telefone e mensagem (mín. 15 caracteres).
                    </span>
                  ) : (
                    <span className="text-xs text-slate-500 sm:ml-auto">
                      Abre email/WhatsApp com os dados preenchidos.
                    </span>
                  )}
                </div>

                <p className="mt-4 text-xs text-slate-500">
                  Ao submeter, concorda em ser contactado para dar seguimento ao pedido.
                </p>
              </CardContent>
            </Card>
          </motion.div>

          {/* LATERAL */}
          <motion.aside
            className="lg:col-span-4"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.45, ease: "easeOut", delay: 0.05 }}
          >
            <div className="space-y-5">
              <InfoCard
                title="Telefone"
                icon={Phone}
                footer={
                  <div className="flex gap-3">
                    <Button
                      asChild
                      variant="outline"
                      className="h-10 rounded-2xl font-extrabold"
                      style={{ borderColor: `${NAVY}18`, color: NAVY, backgroundColor: "white" }}
                    >
                      <a href={callLink}>
                        Ligar <ArrowUpRight className="ml-1 h-4 w-4" />
                      </a>
                    </Button>

                    <Button asChild className="h-10 rounded-2xl font-extrabold" style={{ backgroundColor: NAVY }}>
                      <a href={waLink} target="_blank" rel="noreferrer">
                        WhatsApp <ArrowUpRight className="ml-1 h-4 w-4" />
                      </a>
                    </Button>
                  </div>
                }
              >
                <div className="font-semibold text-slate-900">{phone}</div>
                <div className="mt-2 text-xs text-slate-500">Bom para alinhar rápido.</div>
              </InfoCard>

              <InfoCard
                title="Email"
                icon={Mail}
                footer={
                  <Button
                    asChild
                    variant="outline"
                    className="h-10 w-full rounded-2xl font-extrabold"
                    style={{ borderColor: `${NAVY}18`, color: NAVY, backgroundColor: "white" }}
                  >
                    <a href={mailto}>
                      Enviar email <ArrowUpRight className="ml-1 h-4 w-4" />
                    </a>
                  </Button>
                }
              >
                <div className="break-all font-semibold text-slate-900">{email}</div>
                <div className="mt-2 text-xs text-slate-500">Ideal para anexos e fotos.</div>
              </InfoCard>

              <InfoCard title="Área de atuação" icon={MapPin}>
                <div className="font-semibold text-slate-900">{locationLabel}</div>
              </InfoCard>
            </div>
          </motion.aside>
        </div>
      </div>
    </section>
  );
}
