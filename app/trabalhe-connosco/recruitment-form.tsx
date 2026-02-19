"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  BadgeCheck,
  CheckCircle2,
  ClipboardList,
  Clock,
  HardHat,
  MapPin,
  MessageCircle,
  Phone,
  Shield,
  Users,
  Briefcase,
  ChevronDown,
} from "lucide-react";

import { Card, CardContent } from "@/components/ui/card";

type Contacts = {
  phone: string;
  whatsapp: string;
  email: string;
  location: string;
};

const ease = [0.22, 1, 0.36, 1] as const;

const V = {
  page: { hidden: {}, show: { transition: { staggerChildren: 0.06 } } },
  in: {
    hidden: { opacity: 0, y: 12 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5, ease } },
  },
};

type RoleKey =
  | "Eletricista"
  | "Canalizador"
  | "Pedreiro / Remodelação"
  | "Pladur"
  | "Pintura"
  | "Ajudante de obra"
  | "Encarregado"
  | "Outro";

export function RecruitmentForm({
  NAVY,
  ORANGE,
  contacts,
}: {
  NAVY: string;
  ORANGE: string;
  contacts: Contacts;
}) {
  const waNumber = useMemo(
    () => (contacts.whatsapp || "").replace(/[^\d]/g, ""),
    [contacts.whatsapp]
  );
  const waBase = waNumber ? `https://wa.me/${waNumber}` : "#";
  const telLink = `tel:${(contacts.phone || "").replace(/\s/g, "")}`;

  const roles = [
    {
      key: "Eletricista" as const,
      icon: HardHat,
      title: "Eletricista",
      desc: "Instalação, manutenção, remodelação.",
      bullets: ["Acabamento limpo", "Assiduidade e responsabilidade"],
    },
    {
      key: "Canalizador" as const,
      icon: HardHat,
      title: "Canalizador",
      desc: "Redes prediais, reparação, montagem.",
      bullets: ["Diagnóstico e solução", "Trabalho limpo e organizado"],
    },
    {
      key: "Pedreiro / Remodelação" as const,
      icon: HardHat,
      title: "Pedreiro / Remodelação",
      desc: "Alvenaria, reboco, acabamentos.",
      bullets: ["Alinhamento e prumo", "Ritmo e disciplina em obra"],
    },
    {
      key: "Pladur" as const,
      icon: Briefcase,
      title: "Pladur",
      desc: "Divisórias e revestimentos.",
      bullets: ["Estrutura correta", "Juntas e detalhe bem feitos"],
    },
    {
      key: "Pintura" as const,
      icon: Briefcase,
      title: "Pintura",
      desc: "Interior/exterior, preparação e acabamento.",
      bullets: ["Preparação bem feita", "Recortes e uniformidade"],
    },
    {
      key: "Ajudante de obra" as const,
      icon: Users,
      title: "Ajudante de obra",
      desc: "Apoio às equipas e organização.",
      bullets: ["Vontade de evoluir", "Obra limpa e funcional"],
    },
    {
      key: "Encarregado" as const,
      icon: ClipboardList,
      title: "Encarregado",
      desc: "Coordenação e frentes de trabalho.",
      bullets: ["Gestão de equipa", "Padrão, segurança e produtividade"],
    },
    {
      key: "Outro" as const,
      icon: Briefcase,
      title: "Outro",
      desc: "Multi-serviços/manutenção.",
      bullets: ["Descreva o que faz", "Zona e disponibilidade"],
    },
  ] as const;

  const requirements = [
    "Documentação para trabalhar em Portugal",
    "Assiduidade e pontualidade",
    "Trabalho em equipa e respeito em obra",
    "Disponibilidade: Lisboa e arredores",
  ];

  const offer = [
    "Condições claras antes de iniciar",
    "Pagamento em dia (conforme combinado)",
    "Organização e orientação em obra",
    "Continuidade para quem entrega",
    "Crescimento por desempenho e responsabilidade",
    "Valorização de quem mantém padrão e qualidade",
  ];

  const steps = [
    { step: "01", title: "Mensagem", desc: "Função + cidade + disponibilidade." },
    { step: "02", title: "Triagem", desc: "Respondemos se encaixar nas obras." },
    { step: "03", title: "Entrada", desc: "Quando aplicável: teste e início." },
  ];

  const [openRole, setOpenRole] = useState<RoleKey>("Eletricista");

  function SoftItem({ text }: { text: string }) {
    return (
      <div className="flex items-start gap-3 rounded-2xl bg-slate-50 p-2.5 sm:p-3 ring-1 ring-slate-200/70">
        <CheckCircle2 className="mt-0.5 h-5 w-5" style={{ color: ORANGE }} />
        <p className="text-[13px] sm:text-sm text-slate-700 leading-snug">{text}</p>
      </div>
    );
  }

  function RoleCard({
    r,
    active,
    onToggle,
  }: {
    r: (typeof roles)[number];
    active: boolean;
    onToggle: () => void;
  }) {
    const Icon = r.icon;

    return (
      <div
        className="rounded-2xl border bg-white transition-all duration-300"
        style={{
          borderColor: active ? `${ORANGE}55` : "rgba(226,232,240,0.9)",
        }}
      >
        <button type="button" onClick={onToggle} className="w-full text-left">
          <div className="p-4 sm:p-6">
            <div className="flex items-center gap-4">
              <span
                className="inline-flex h-10 w-10 items-center justify-center rounded-xl"
                style={{ backgroundColor: `${ORANGE}12`, color: ORANGE }}
              >
                <Icon className="h-5 w-5" />
              </span>

              <div className="flex-1 min-w-0">
                <p className="text-sm sm:text-base font-extrabold" style={{ color: NAVY }}>
                  {r.title}
                </p>
                <p className="mt-1 text-xs sm:text-sm text-slate-600">{r.desc}</p>
              </div>

              <ChevronDown
                className={`h-5 w-5 transition-transform duration-300 ${active ? "rotate-180" : ""}`}
                style={{ color: NAVY }}
              />
            </div>
          </div>
        </button>

        <div
          className={`overflow-hidden transition-all duration-300 ${
            active ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="px-4 sm:px-6 pb-4 sm:pb-6">
            <div className="rounded-xl bg-slate-50 p-4 border border-slate-200">
              <p className="text-xs font-semibold mb-3" style={{ color: NAVY }}>
                O que valorizamos
              </p>

              <div className="space-y-2">
                {r.bullets.map((b) => (
                  <div key={b} className="flex items-center gap-2 text-xs sm:text-sm text-slate-700">
                    <CheckCircle2 className="h-4 w-4" style={{ color: ORANGE }} />
                    {b}
                  </div>
                ))}
              </div>

              <p className="mt-4 text-[11px] sm:text-xs text-slate-500">
                Envie: função + cidade + disponibilidade.
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <>
      {/* HERO — curto e direto */}
      <section className="relative overflow-hidden bg-white">
        <div
          className="absolute inset-0"
          style={{
            background: `
              radial-gradient(900px 520px at 15% 0%, ${ORANGE}18 0%, transparent 58%),
              radial-gradient(900px 520px at 70% 10%, ${NAVY}18 0%, transparent 60%),
              linear-gradient(180deg, #ffffff 0%, #f8fafc 100%)
            `,
          }}
        />

        <motion.div
          variants={V.page}
          initial="hidden"
          animate="show"
          className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 lg:py-16"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            <div className="lg:col-span-7">
              <motion.span
                variants={V.in}
                className="inline-flex items-center gap-2 rounded-full px-4 py-2 text-xs font-extrabold ring-1"
                style={{ backgroundColor: `${NAVY}08`, color: NAVY, borderColor: `${NAVY}22` }}
              >
                <BadgeCheck className="h-4 w-4" style={{ color: ORANGE }} />
                Recrutamento • Lisboa e arredores
              </motion.span>

              <motion.h1
                variants={V.in}
                className="mt-5 text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight"
                style={{ color: NAVY }}
              >
                Trabalhe Connosco
              </motion.h1>

              <motion.p variants={V.in} className="mt-4 text-lg text-slate-600 leading-relaxed">
                Procuramos pessoas com{" "}
                <span className="font-semibold" style={{ color: NAVY }}>
                  assiduidade
                </span>
                ,{" "}
                <span className="font-semibold" style={{ color: NAVY }}>
                  responsabilidade
                </span>{" "}
                e foco em obra bem feita.
              </motion.p>

              <motion.div
                variants={V.in}
                className="mt-7 grid grid-cols-1 gap-3 sm:flex sm:flex-row sm:items-center"
              >
                <Link
                  href="/contactos"
                  className="inline-flex h-12 items-center justify-center rounded-2xl px-6 text-sm font-extrabold shadow-sm transition hover:opacity-95"
                  style={{ backgroundColor: NAVY, color: "white" }}
                >
                  Candidatar-se <ArrowUpRight className="ml-2 h-4 w-4" />
                </Link>

                <a
                  href="#perfis"
                  className="inline-flex h-12 items-center justify-center rounded-2xl px-6 text-sm font-extrabold ring-1 bg-white transition hover:bg-white/80"
                  style={{ color: NAVY, borderColor: `${NAVY}22` }}
                >
                  Ver perfis <ArrowUpRight className="ml-2 h-4 w-4" style={{ color: ORANGE }} />
                </a>

                <div className="sm:ml-auto flex flex-col gap-2">
                  <span className="inline-flex items-center gap-2 text-sm text-slate-600">
                    <MapPin className="h-4 w-4" style={{ color: ORANGE }} />
                    {contacts.location}
                  </span>

                  <div className="grid grid-cols-2 gap-2 sm:flex sm:flex-wrap sm:gap-2">
                    <a
                      href={telLink}
                      className="inline-flex h-11 items-center justify-center rounded-2xl px-4 text-sm font-extrabold ring-1 transition"
                      style={{ color: NAVY, borderColor: `${NAVY}18`, backgroundColor: "white" }}
                    >
                      <Phone className="mr-2 h-4 w-4" style={{ color: ORANGE }} />
                      Ligar
                    </a>

                    <a
                      href={waBase}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex h-11 items-center justify-center rounded-2xl px-4 text-sm font-extrabold ring-1 transition"
                      style={{ color: NAVY, borderColor: `${NAVY}18`, backgroundColor: "white" }}
                    >
                      <MessageCircle className="mr-2 h-4 w-4" style={{ color: ORANGE }} />
                      WhatsApp
                    </a>
                  </div>
                </div>
              </motion.div>

              <motion.p variants={V.in} className="mt-4 text-xs text-slate-500">
                Respondemos conforme necessidade de obra.
              </motion.p>
            </div>

            {/* requisitos — enxuto */}
            <div className="lg:col-span-5">
              <motion.div variants={V.in}>
                <Card className="border-white bg-white shadow-sm ring-1 ring-slate-200/70">
                  <CardContent className="p-6 sm:p-7">
                    <div className="flex items-center gap-2">
                      <Shield className="h-4 w-4" style={{ color: ORANGE }} />
                      <p className="text-sm font-extrabold" style={{ color: NAVY }}>
                        Requisitos mínimos
                      </p>
                    </div>

                    <div className="mt-4 grid grid-cols-1 gap-3">
                      {requirements.map((t) => (
                        <SoftItem key={t} text={t} />
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* PERFIS — MOBILE SEM ESPAÇOS ESTRANHOS */}
      <section id="perfis" className="py-12 lg:py-16 bg-white">
        <motion.div
          variants={V.page}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8"
        >
          <motion.div variants={V.in} className="max-w-2xl">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold" style={{ color: NAVY }}>
              Perfis
            </h2>
            <p className="mt-2 text-sm sm:text-lg text-slate-600">
              Toque num perfil para ver o essencial.
            </p>
          </motion.div>

          <div className="mt-6 space-y-3 sm:space-y-4 lg:space-y-0 lg:grid lg:grid-cols-2 lg:gap-4">
            {roles.map((r) => (
              <motion.div key={r.key} variants={V.in}>
                <RoleCard
                  r={r}
                  active={openRole === r.key}
                  onToggle={() => setOpenRole(openRole === r.key ? "Eletricista" : r.key)}
                />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* OFERTA + PROCESSO (compacto) */}
      <section className="py-12 lg:py-16 bg-slate-50">
        <motion.div
          variants={V.page}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            <motion.div variants={V.in} className="lg:col-span-6">
              <Card className="border-white bg-white shadow-sm ring-1 ring-slate-200/70">
                <CardContent className="p-6 sm:p-7">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4" style={{ color: ORANGE }} />
                    <p className="text-sm font-extrabold" style={{ color: NAVY }}>
                      O que oferecemos
                    </p>
                  </div>

                  <div className="mt-4 grid grid-cols-1 gap-3">
                    {offer.map((t) => (
                      <SoftItem key={t} text={t} />
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div variants={V.in} className="lg:col-span-6">
              <Card className="border-white bg-white shadow-sm ring-1 ring-slate-200/70">
                <CardContent className="p-6 sm:p-7">
                  <div className="flex items-center gap-2">
                    <Clock className="h-4 w-4" style={{ color: ORANGE }} />
                    <p className="text-sm font-extrabold" style={{ color: NAVY }}>
                      Como funciona
                    </p>
                  </div>

                  <div className="mt-4 grid grid-cols-1 gap-3">
                    {steps.map((x) => (
                      <div key={x.step} className="rounded-2xl bg-slate-50 p-4 ring-1 ring-slate-200/70">
                        <div className="flex items-center gap-3">
                          <div
                            className="flex h-9 w-9 items-center justify-center rounded-2xl font-extrabold ring-1"
                            style={{
                              color: NAVY,
                              borderColor: `${NAVY}18`,
                              backgroundColor: `${NAVY}06`,
                            }}
                          >
                            {x.step}
                          </div>
                          <p className="text-sm font-extrabold" style={{ color: NAVY }}>
                            {x.title}
                          </p>
                        </div>
                        <p className="mt-2 text-sm text-slate-600">{x.desc}</p>
                      </div>
                    ))}
                  </div>

                  <p className="mt-3 text-xs text-slate-500">
                    Envie: função + cidade + disponibilidade (e experiência curta, se tiver).
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* CTA FINAL (1 só) */}
      <section className="bg-white py-12 lg:py-16">
        <motion.div
          variants={V.page}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"
        >
          <motion.div
            variants={V.in}
            className="rounded-3xl p-6 sm:p-10 ring-1 text-center"
            style={{ borderColor: `${NAVY}14`, backgroundColor: `${NAVY}04` }}
          >
            <p
              className="inline-flex items-center justify-center gap-2 rounded-full px-4 py-2 text-xs font-extrabold ring-1"
              style={{ backgroundColor: "white", color: NAVY, borderColor: `${NAVY}18` }}
            >
              <ClipboardList className="h-4 w-4" style={{ color: ORANGE }} />
              Candidatura via Contactos
            </p>

            <h2 className="mt-4 text-2xl sm:text-4xl font-extrabold" style={{ color: NAVY }}>
              Vamos falar?
            </h2>

            <p className="mt-3 text-base sm:text-lg text-slate-600 max-w-3xl mx-auto">
              A forma mais rápida é enviar os dados objetivos na página de contactos.
            </p>

            <div className="mt-7 flex flex-col sm:flex-row items-center justify-center gap-3">
              <Link
                href="/contactos"
                className="inline-flex h-12 items-center justify-center rounded-2xl px-6 text-sm font-extrabold shadow-sm transition hover:opacity-95"
                style={{ backgroundColor: NAVY, color: "white" }}
              >
                Candidatar-se <ArrowUpRight className="ml-2 h-4 w-4" />
              </Link>

              <a
                href={telLink}
                className="inline-flex h-12 items-center justify-center rounded-2xl px-6 text-sm font-extrabold ring-1 bg-white transition hover:bg-white/80"
                style={{ borderColor: `${NAVY}22`, color: NAVY }}
              >
                <Phone className="mr-2 h-4 w-4" style={{ color: ORANGE }} />
                Ligar
              </a>

              <a
                href={waBase}
                target="_blank"
                rel="noreferrer"
                className="inline-flex h-12 items-center justify-center rounded-2xl px-6 text-sm font-extrabold ring-1 bg-white transition hover:bg-white/80"
                style={{ borderColor: `${NAVY}22`, color: NAVY }}
              >
                <MessageCircle className="mr-2 h-4 w-4" style={{ color: ORANGE }} />
                WhatsApp
              </a>
            </div>

            <p className="mt-4 text-xs text-slate-500">{contacts.location}</p>
          </motion.div>
        </motion.div>
      </section>
    </>
  );
}
