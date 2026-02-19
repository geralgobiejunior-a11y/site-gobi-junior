// ✅ ATUALIZA: components/sections/SolicitarOrcamentoSection.tsx
// (remove "Contacto" duplicado quando usado dentro da página)

"use client";

import React, { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Send, MessageCircle } from "lucide-react";

type Props = {
  NAVY: string;
  ORANGE: string;
  phone?: string;
  whatsapp?: string;
  email?: string;
  locationLabel?: string;

  /** ✅ quando true: NÃO renderiza título/hero interno nem o background da section */
  embedded?: boolean;
  /** ✅ quando embedded: ajusta padding */
  embeddedPadding?: string;
};

type TipoPedido = "Orçamento" | "Recrutamento";

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

const FORMSPREE_ENDPOINT = "https://formspree.io/f/xaqdqygm";

export function SolicitarOrcamentoSection({
  NAVY,
  ORANGE,
  phone = "+351 936 178 415",
  whatsapp = "+351936178415",
  email = "orcamentos@gobijunior.pt",
  locationLabel = "Lisboa • Grande Lisboa • Margem Sul",
  embedded = false,
  embeddedPadding = "p-0",
}: Props) {
  const [tipo, setTipo] = useState<TipoPedido>("Orçamento");

  const [form, setForm] = useState({
    nome: "",
    email: "",
    telefone: "",
    mensagem: "",
    empresa: "",
    topico: "Hidráulica" as TopicoOrcamento,
    local: "",
    profissao: "Eletricista" as Profissao,
    nivel: "Oficial" as Nivel,
    experiencia: "",
  });

  const [sending, setSending] = useState(false);
  const [sentOk, setSentOk] = useState<null | boolean>(null);

  const onChange =
    (key: keyof typeof form) =>
    (
      e: React.ChangeEvent<
        HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
      >
    ) => {
      setForm((s) => ({ ...s, [key]: e.target.value }));
      if (sentOk !== null) setSentOk(null);
    };

  const requiredOk = useMemo(() => {
    const baseOk =
      form.nome.trim().length >= 2 &&
      form.email.trim().length >= 5 &&
      form.telefone.trim().length >= 6 &&
      form.mensagem.trim().length >= 15;

    if (!baseOk) return false;

    if (tipo === "Orçamento") return form.topico.trim().length > 0;
    return form.profissao.trim().length > 0 && form.nivel.trim().length > 0;
  }, [tipo, form]);

  const waLink = useMemo(() => {
    const number = whatsapp.replace(/\D/g, "");

    const extra =
      tipo === "Orçamento"
        ? `Tópico: ${form.topico}\n${
            form.local.trim() ? `Local: ${form.local}\n` : ""
          }${form.empresa.trim() ? `Empresa: ${form.empresa}\n` : ""}`
        : `Profissão: ${form.profissao}\nNível: ${form.nivel}\n${
            form.experiencia.trim()
              ? `Experiência: ${form.experiencia}\n`
              : ""
          }`;

    const text = encodeURIComponent(
      `Olá! Gostaria de solicitar ${tipo}.\n\nNome: ${form.nome}\nEmail: ${form.email}\nTelefone: ${form.telefone}\n\n${extra}\nMensagem:\n${form.mensagem}`
    );

    return `https://wa.me/${number}?text=${text}`;
  }, [whatsapp, tipo, form]);

  const callLink = useMemo(() => `tel:${phone.replace(/\s/g, "")}`, [phone]);

  const mailtoLink = useMemo(() => {
    const subject = encodeURIComponent(`Contacto — ${tipo}`);
    const extra =
      tipo === "Orçamento"
        ? `Tópico: ${form.topico}\n${
            form.local.trim() ? `Local: ${form.local}\n` : ""
          }${form.empresa.trim() ? `Empresa: ${form.empresa}\n` : ""}`
        : `Profissão: ${form.profissao}\nNível: ${form.nivel}\n${
            form.experiencia.trim()
              ? `Experiência: ${form.experiencia}\n`
              : ""
          }`;

    const body = encodeURIComponent(
      `Olá!\n\nQuero solicitar ${tipo}.\n\nNome: ${form.nome}\nEmail: ${form.email}\nTelefone: ${form.telefone}\n\n${extra}\nMensagem:\n${form.mensagem}\n`
    );

    return `mailto:${email}?subject=${subject}&body=${body}`;
  }, [email, tipo, form]);

  const submitFormspree = async () => {
    if (!requiredOk || sending) return;

    setSending(true);
    setSentOk(null);

    try {
      const payload = {
        tipo,
        nome: form.nome,
        email: form.email,
        telefone: form.telefone,
        mensagem: form.mensagem,
        empresa: tipo === "Orçamento" ? form.empresa : undefined,
        topico: tipo === "Orçamento" ? form.topico : undefined,
        local: tipo === "Orçamento" ? form.local : undefined,
        profissao: tipo === "Recrutamento" ? form.profissao : undefined,
        nivel: tipo === "Recrutamento" ? form.nivel : undefined,
        experiencia: tipo === "Recrutamento" ? form.experiencia : undefined,
      };

      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(payload),
      });

      if (!res.ok) throw new Error("Formspree error");

      setSentOk(true);
      setForm({
        nome: "",
        email: "",
        telefone: "",
        mensagem: "",
        empresa: "",
        topico: "Hidráulica",
        local: "",
        profissao: "Eletricista",
        nivel: "Oficial",
        experiencia: "",
      });
    } catch {
      setSentOk(false);
    } finally {
      setSending(false);
    }
  };

  const messagePlaceholder =
    tipo === "Orçamento"
      ? "Descreva o seu pedido (tipo de obra, localização, prazos, etc.)"
      : "Conte rapidamente: zona, experiência real em obra e disponibilidade.";

  const Segmented = () => (
    <div className="mt-5 flex w-full rounded-2xl bg-slate-50 p-1.5 ring-1 ring-slate-200">
      {(["Orçamento", "Recrutamento"] as TipoPedido[]).map((t) => {
        const active = t === tipo;
        return (
          <button
            key={t}
            type="button"
            onClick={() => setTipo(t)}
            className="flex-1 rounded-xl px-3 py-2 text-sm font-extrabold transition"
            style={{
              backgroundColor: active ? NAVY : "transparent",
              color: active ? "white" : "#0f172a",
            }}
          >
            {t}
          </button>
        );
      })}
    </div>
  );

  const Field = ({
    label,
    placeholder,
    value,
    onChange,
    type = "text",
  }: {
    label: string;
    placeholder: string;
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    type?: string;
  }) => (
    <div>
      <label className="text-sm font-bold" style={{ color: NAVY }}>
        {label}
      </label>
      <input
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="mt-2 w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm outline-none transition focus:border-slate-300 focus:ring-4 focus:ring-slate-100"
      />
    </div>
  );

  const Select = ({
    label,
    value,
    onChange,
    options,
  }: {
    label: string;
    value: string;
    onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
    options: string[];
  }) => (
    <div>
      <label className="text-sm font-bold" style={{ color: NAVY }}>
        {label}
      </label>
      <select
        value={value}
        onChange={onChange}
        className="mt-2 w-full appearance-none rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm outline-none transition focus:border-slate-300 focus:ring-4 focus:ring-slate-100"
      >
        {options.map((o) => (
          <option key={o} value={o}>
            {o}
          </option>
        ))}
      </select>
    </div>
  );

  const SideCard = ({
    title,
    icon: Icon,
    children,
    actions,
  }: {
    title: string;
    icon: any;
    children: React.ReactNode;
    actions?: React.ReactNode;
  }) => (
    <div className="group relative overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition hover:shadow-md">
      <div
        className="absolute left-0 top-0 h-full w-[4px]"
        style={{ backgroundColor: ORANGE }}
      />
      <div
        className="pointer-events-none absolute -top-16 right-[-110px] h-56 w-56 rounded-full opacity-0 blur-3xl transition group-hover:opacity-30"
        style={{ backgroundColor: ORANGE }}
      />
      <div className="flex min-h-[164px] flex-col p-6">
        <div className="flex items-start gap-4">
          <div
            className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl shadow-sm"
            style={{ backgroundColor: ORANGE }}
          >
            <Icon className="h-5 w-5 text-white" />
          </div>

          <div className="min-w-0 flex-1">
            <div className="flex items-center gap-2">
              <p className="text-base font-extrabold" style={{ color: NAVY }}>
                {title}
              </p>
              <span
                className="mt-1 inline-block h-[3px] w-8 rounded-full"
                style={{ backgroundColor: ORANGE }}
              />
            </div>
            <div className="mt-2 text-sm text-slate-600">{children}</div>
          </div>
        </div>

        {actions ? <div className="mt-auto pt-4">{actions}</div> : null}
      </div>
    </div>
  );

  const content = (
    <div className="relative overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
      <div
        className="absolute inset-x-0 top-0 h-24"
        style={{
          background: `linear-gradient(90deg, ${NAVY}10 0%, ${ORANGE}12 55%, transparent 100%)`,
        }}
      />
      <div className="relative p-6 sm:p-8">
        {/* ✅ SEM "Contacto" aqui quando embedded */}
        <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
          <div>
            <h3 className="text-2xl font-extrabold" style={{ color: NAVY }}>
              Solicitar contacto
            </h3>
            <p className="mt-1 text-sm text-slate-600">
              Resposta rápida em horário comercial.
            </p>
          </div>

          <span
            className="inline-flex w-fit items-center rounded-full px-3 py-1.5 text-xs font-extrabold ring-1"
            style={{
              backgroundColor: "white",
              color: NAVY,
              borderColor: `${NAVY}22`,
            }}
          >
            ORÇAMENTOS / PARCERIAS
          </span>
        </div>

        <Segmented />

        <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
          <Field
            label="Nome completo"
            placeholder="Ex.: João Silva"
            value={form.nome}
            onChange={onChange("nome")}
          />
          <Field
            label="Email"
            placeholder="email@empresa.pt"
            value={form.email}
            onChange={onChange("email")}
            type="email"
          />
          <Field
            label="Telefone"
            placeholder="+351 ..."
            value={form.telefone}
            onChange={onChange("telefone")}
          />

          {tipo === "Orçamento" ? (
            <Field
              label="Empresa (opcional)"
              placeholder="Nome da empresa"
              value={form.empresa}
              onChange={onChange("empresa")}
            />
          ) : (
            <div className="hidden sm:block" />
          )}
        </div>

        {tipo === "Orçamento" ? (
          <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
            <Select
              label="Tópico do serviço"
              value={form.topico}
              onChange={onChange("topico")}
              options={[
                "Hidráulica",
                "Elétrica",
                "Manutenção",
                "Pintura",
                "Pladur",
                "Remodelação",
                "Outros",
              ]}
            />
            <Field
              label="Local (opcional)"
              placeholder="Ex.: Lisboa, Oeiras, Almada…"
              value={form.local}
              onChange={onChange("local")}
            />
          </div>
        ) : (
          <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
            <Select
              label="Profissão"
              value={form.profissao}
              onChange={onChange("profissao")}
              options={[
                "Eletricista",
                "Canalizador",
                "Pintor",
                "Pladurista",
                "Manutenção",
                "Pedreiro",
                "Outro",
              ]}
            />
            <Select
              label="Nível (na obra)"
              value={form.nivel}
              onChange={onChange("nivel")}
              options={["Ajudante", "Meio-Oficial", "Oficial", "Encarregado"]}
            />
            <Field
              label="Experiência (opcional)"
              placeholder="Ex.: 3 anos / 6 meses"
              value={form.experiencia}
              onChange={onChange("experiencia")}
            />
          </div>
        )}

        <div className="mt-6">
          <label className="text-sm font-bold" style={{ color: NAVY }}>
            Mensagem
          </label>
          <div className="mt-2 relative">
            <div
              className="pointer-events-none absolute left-3 top-3 flex h-9 w-9 items-center justify-center rounded-xl"
              style={{ backgroundColor: `${ORANGE}22` }}
            >
              <Mail className="h-4 w-4" style={{ color: ORANGE }} />
            </div>

            <textarea
              value={form.mensagem}
              onChange={onChange("mensagem")}
              placeholder={messagePlaceholder}
              rows={6}
              className="w-full resize-none rounded-2xl border border-slate-200 bg-white pl-14 pr-4 py-3 text-sm outline-none transition focus:border-slate-300 focus:ring-4 focus:ring-slate-100"
            />
          </div>
        </div>

        <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:items-center">
          <button
            onClick={submitFormspree}
            disabled={!requiredOk || sending}
            className="inline-flex h-12 items-center justify-center rounded-2xl px-6 text-sm font-extrabold text-white transition disabled:opacity-50"
            style={{ backgroundColor: NAVY }}
          >
            <Send className="mr-2 h-4 w-4" />
            {sending ? "A enviar..." : "Enviar mensagem"}
          </button>

          <a
            href={waLink}
            target="_blank"
            rel="noreferrer"
            className="inline-flex h-12 items-center justify-center rounded-2xl border px-6 text-sm font-extrabold transition hover:bg-slate-50"
            style={{ borderColor: `${NAVY}30`, color: NAVY }}
          >
            <MessageCircle className="mr-2 h-4 w-4" />
            WhatsApp
          </a>

          <span className="text-xs text-slate-500 sm:ml-auto">
            {!requiredOk
              ? "Preencha nome, email, telefone e mensagem (mín. 15 caracteres)."
              : "Envia direto (sem depender do email do cliente)."}
          </span>
        </div>

        {sentOk === true ? (
          <div className="mt-4 rounded-2xl bg-emerald-50 p-4 text-sm font-semibold text-emerald-800 ring-1 ring-emerald-200">
            Pedido enviado com sucesso. Vamos responder em dia útil.
          </div>
        ) : null}

        {sentOk === false ? (
          <div className="mt-4 rounded-2xl bg-rose-50 p-4 text-sm font-semibold text-rose-800 ring-1 ring-rose-200">
            Não foi possível enviar agora. Tente novamente ou use WhatsApp.
          </div>
        ) : null}

        <p className="mt-4 text-xs text-slate-500">
          Ao submeter, concorda em ser contactado para dar seguimento ao pedido.
        </p>
      </div>
    </div>
  );

  // ✅ embedded = NÃO cria section nem background, só entrega o bloco
  if (embedded) {
    return <div className={embeddedPadding}>{content}</div>;
  }

  return (
    <section className="relative overflow-hidden py-16 lg:py-24">
      <div
        className="absolute inset-0"
        style={{
          background: `
            radial-gradient(900px 520px at 50% 0%, ${NAVY}10 0%, transparent 60%),
            radial-gradient(900px 520px at 75% 30%, ${ORANGE}10 0%, transparent 58%),
            linear-gradient(180deg, #ffffff 0%, #f8fafc 100%)
          `,
        }}
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {!embedded ? (
          <>
            <div className="mx-auto max-w-3xl text-center">
              <h2
                className="text-3xl font-extrabold tracking-tight sm:text-4xl"
                style={{ color: NAVY }}
              >
                Contacto
              </h2>
              <div className="mt-4 flex justify-center">
                <div className="relative h-[4px] w-28 rounded-full bg-slate-200">
                  <div
                    className="absolute left-1/2 top-0 h-[4px] w-14 -translate-x-1/2 rounded-full"
                    style={{ backgroundColor: ORANGE }}
                  />
                </div>
              </div>
              <p className="mt-6 text-lg text-slate-600">
                Entre em contacto para orçamentos, parcerias ou esclarecimentos.
              </p>
            </div>
          </>
        ) : null}

        <div className="mt-12 grid grid-cols-1 gap-8 lg:grid-cols-12">
          <motion.div className="lg:col-span-7">{content}</motion.div>

          <motion.aside className="lg:col-span-5">
            <div className="space-y-6">
              <SideCard
                title="Telefone"
                icon={Phone}
                actions={
                  <div className="flex gap-3">
                    <a
                      href={callLink}
                      className="flex-1 rounded-2xl border px-4 py-2 text-center text-sm font-extrabold transition hover:bg-slate-50"
                      style={{ borderColor: `${NAVY}30`, color: NAVY }}
                    >
                      Ligar
                    </a>
                    <a
                      href={waLink}
                      target="_blank"
                      rel="noreferrer"
                      className="flex-1 rounded-2xl px-4 py-2 text-center text-sm font-extrabold text-white transition"
                      style={{ backgroundColor: NAVY }}
                    >
                      WhatsApp
                    </a>
                  </div>
                }
              >
                <div className="mt-1 font-extrabold text-slate-900">{phone}</div>
                <div className="mt-2 text-xs text-slate-500">
                  Atendimento em horário comercial.
                </div>
              </SideCard>

              <SideCard
                title="Email"
                icon={Mail}
                actions={
                  <a
                    href={mailtoLink}
                    className="inline-flex w-full items-center justify-center rounded-2xl border px-4 py-2 text-center text-sm font-extrabold transition hover:bg-slate-50"
                    style={{ borderColor: `${NAVY}30`, color: NAVY }}
                  >
                    Enviar email
                  </a>
                }
              >
                <div className="mt-1 break-all font-extrabold text-slate-900">
                  {email}
                </div>
                <div className="mt-2 text-xs text-slate-500">
                  Ideal para pedidos com anexos ou documentação.
                </div>
              </SideCard>

              <SideCard title="Área de atuação" icon={MapPin}>
                <div className="mt-1 font-extrabold text-slate-900">
                  {locationLabel}
                </div>
                <div className="mt-2 text-xs text-slate-500">
                  Se estiver fora da zona, avaliamos caso a caso.
                </div>
              </SideCard>
            </div>
          </motion.aside>
        </div>
      </div>
    </section>
  );
}
