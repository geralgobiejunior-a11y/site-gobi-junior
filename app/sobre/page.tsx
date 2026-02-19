"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  CheckCircle2,
  ClipboardList,
  Wrench,
  MessagesSquare,
  Shield,
  MapPin,
  ChevronDown,
} from "lucide-react";

import { CTASection } from "@/components/sections/CTASection";
import { brand } from "@/lib/brand";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const ease = [0.22, 1, 0.36, 1] as const;

const V = {
  page: {
    hidden: {},
    show: { transition: { staggerChildren: 0.06 } },
  },
  in: {
    hidden: { opacity: 0, y: 14 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5, ease } },
  },
};

function Pill({
  icon: Icon,
  text,
  accent,
  navy,
}: {
  icon: any;
  text: string;
  accent: string;
  navy: string;
}) {
  return (
    <span
      className="inline-flex max-w-full items-center gap-2 rounded-full px-3 py-2 text-[11px] sm:text-xs font-extrabold ring-1"
      style={{
        backgroundColor: `${navy}08`,
        color: navy,
        borderColor: `${navy}22`,
      }}
    >
      <Icon className="h-4 w-4 shrink-0" style={{ color: accent }} />
      <span className="truncate sm:whitespace-nowrap">{text}</span>
    </span>
  );
}

function MiniBullet({
  text,
  accent,
}: {
  text: string;
  accent: string;
}) {
  return (
    <div className="flex items-start gap-3">
      <span
        className="mt-0.5 inline-flex h-7 w-7 items-center justify-center rounded-2xl ring-1"
        style={{ borderColor: `${accent}35`, backgroundColor: `${accent}12` }}
        aria-hidden
      >
        <CheckCircle2 className="h-4 w-4" style={{ color: accent }} />
      </span>
      <p className="text-sm text-slate-700 leading-snug">{text}</p>
    </div>
  );
}

function CompactCard({
  icon: Icon,
  title,
  desc,
  navy,
  accent,
}: {
  icon: any;
  title: string;
  desc: string;
  navy: string;
  accent: string;
}) {
  return (
    <div className="rounded-3xl bg-white p-5 ring-1 ring-slate-200/70 shadow-sm">
      <div
        className="flex h-10 w-10 items-center justify-center rounded-2xl ring-1"
        style={{ borderColor: `${accent}35`, backgroundColor: `${accent}12` }}
      >
        <Icon className="h-5 w-5" style={{ color: accent }} />
      </div>

      <p className="mt-4 text-sm font-extrabold" style={{ color: navy }}>
        {title}
      </p>
      <p className="mt-2 text-sm text-slate-600 leading-relaxed">{desc}</p>
    </div>
  );
}

function StepCard({
  n,
  title,
  desc,
  navy,
  accent,
}: {
  n: number;
  title: string;
  desc: string;
  navy: string;
  accent: string;
}) {
  return (
    <div className="relative rounded-3xl bg-white p-5 ring-1 ring-slate-200/70 shadow-sm">
      <div className="flex items-start gap-4">
        <div
          className="flex h-10 w-10 items-center justify-center rounded-2xl ring-1 text-sm font-extrabold"
          style={{
            borderColor: `${accent}35`,
            backgroundColor: `${accent}12`,
            color: navy,
          }}
        >
          {n}
        </div>

        <div className="flex-1 min-w-0">
          <p className="text-sm font-extrabold" style={{ color: navy }}>
            {title}
          </p>
          <p className="mt-2 text-sm text-slate-600 leading-relaxed">{desc}</p>
        </div>
      </div>
    </div>
  );
}

export default function AboutPageClient() {
  const NAVY = brand.colors.navy;
  const ORANGE = brand.colors.orange;

  const imgColete = "/Design%20sem%20nome%20(22).png";
  const imgCascaisBay = "/obras/CascaisBay.JPG";

  const bullets = [
    "Execução técnica em obra e manutenção",
    "Escopo claro antes de começar",
    "Coordenação com especialidades e fiscalização",
    "Entrega com qualidade e acabamento",
  ];

  const steps = [
    {
      n: 1,
      t: "Levantamento & proposta",
      d: "Entendemos o pedido e entregamos orçamento claro.",
    },
    {
      n: 2,
      t: "Planeamento",
      d: "Alinhamos datas, acessos, materiais e interface com a obra.",
    },
    {
      n: 3,
      t: "Execução",
      d: "Equipa em campo com organização, método e foco em qualidade.",
    },
    {
      n: 4,
      t: "Fecho & validação",
      d: "Revisão final e entrega com padrão de acabamento.",
    },
  ];

  return (
    <>
      {/* HERO (mais curto e mais objetivo) */}
      <section className="relative overflow-hidden bg-white">
        <div
          className="absolute inset-0"
          style={{
            background: `
              radial-gradient(900px 520px at 12% 0%, ${ORANGE}16 0%, transparent 60%),
              radial-gradient(900px 520px at 86% 10%, ${NAVY}16 0%, transparent 62%),
              linear-gradient(180deg, #ffffff 0%, #f8fafc 100%)
            `,
          }}
          aria-hidden
        />

        <motion.div
          variants={V.page}
          initial="hidden"
          animate="show"
          className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10 lg:py-14"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* IMAGEM primeiro no mobile (melhor “hook” visual) */}
            <motion.div variants={V.in} className="order-1 lg:order-2 lg:col-span-6">
              <div className="relative overflow-hidden rounded-3xl ring-1 ring-slate-200/70 shadow-[0_12px_36px_rgba(15,23,42,.10)]">
                <Image
                  src={imgColete}
                  alt="Gobi & Júnior em obra"
                  width={1400}
                  height={1000}
                  priority
                  className="h-[220px] sm:h-[280px] lg:h-[380px] w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/30 via-transparent to-transparent" />

             {/* badge no TOPO (não tapa a logo do colete) */}
<div className="absolute top-4 left-4">
  <div className="inline-flex items-center gap-2 rounded-full bg-white/85 backdrop-blur px-3 py-2 ring-1 ring-white/60 shadow-sm">
    <span className="h-2 w-2 rounded-full" style={{ backgroundColor: ORANGE }} />
    <p className="text-xs font-extrabold" style={{ color: NAVY }}>
      Execução organizada em obra
    </p>
  </div>
</div>

              </div>
            </motion.div>

            {/* TEXTO */}
            <div className="order-2 lg:order-1 lg:col-span-6">
              <motion.div variants={V.in}>
                <Pill
                  icon={CheckCircle2}
                  text="Execução técnica • Organização em obra • Escopo claro"
                  accent={ORANGE}
                  navy={NAVY}
                />
              </motion.div>

              <motion.h1
                variants={V.in}
                className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight"
                style={{ color: NAVY }}
              >
                Sobre a {brand.name}
              </motion.h1>

              <motion.p
                variants={V.in}
                className="mt-3 text-base sm:text-lg text-slate-600 leading-relaxed"
              >
                Somos uma equipa orientada à execução: planeamos, coordenamos e entregamos
                com previsibilidade. Menos ruído. Mais obra feita.
              </motion.p>

              <motion.div
                variants={V.in}
                className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3"
              >
                {bullets.map((t) => (
                  <MiniBullet key={t} text={t} accent={ORANGE} />
                ))}
              </motion.div>

              <motion.div variants={V.in} className="mt-7 flex flex-col sm:flex-row gap-3">
                <Link
                  href="/contactos#orcamento"
                  className="inline-flex h-12 w-full sm:w-auto items-center justify-center rounded-2xl px-6 text-sm font-extrabold shadow-sm transition hover:opacity-95"
                  style={{ backgroundColor: NAVY, color: "white" }}
                >
                  Pedir orçamento <ArrowUpRight className="ml-2 h-4 w-4" />
                </Link>

                <Link
                  href="/servicos"
                  className="inline-flex h-12 w-full sm:w-auto items-center justify-center rounded-2xl px-6 text-sm font-extrabold ring-1 bg-white transition hover:bg-slate-50"
                  style={{ color: NAVY, borderColor: `${NAVY}22` }}
                >
                  Ver serviços <ArrowUpRight className="ml-2 h-4 w-4" style={{ color: ORANGE }} />
                </Link>
              </motion.div>

              <motion.div variants={V.in} className="mt-4 inline-flex items-center gap-2 text-sm text-slate-500">
                <MapPin className="h-4 w-4" style={{ color: ORANGE }} />
                {brand.contact.address || "Lisboa e arredores"}
              </motion.div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* O QUE ENTREGAMOS (mais compacto) */}
      <section className="bg-white py-12 lg:py-14">
        <motion.div
          variants={V.page}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"
        >
          <motion.div variants={V.in} className="max-w-3xl">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight" style={{ color: NAVY }}>
              O que entregamos
            </h2>
            <p className="mt-2 text-base sm:text-lg text-slate-600 leading-relaxed">
              Prometemos organização, clareza e execução bem feita.
            </p>
          </motion.div>

          <div className="mt-7 grid grid-cols-1 md:grid-cols-3 gap-5">
            <motion.div variants={V.in}>
              <CompactCard
                icon={ClipboardList}
                title="Escopo claro"
                desc="Alinhamos o executável antes de começar — evitando surpresas, extras e retrabalho."
                navy={NAVY}
                accent={ORANGE}
              />
            </motion.div>

            <motion.div variants={V.in}>
              <CompactCard
                icon={Wrench}
                title="Execução técnica"
                desc="Método em campo, padrão de acabamento e foco em entrega."
                navy={NAVY}
                accent={ORANGE}
              />
            </motion.div>

            <motion.div variants={V.in}>
              <CompactCard
                icon={MessagesSquare}
                title="Comunicação objetiva"
                desc="Atualizações claras e coordenação com outras especialidades e fiscalização."
                navy={NAVY}
                accent={ORANGE}
              />
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* COMO TRABALHAMOS (mobile = accordion; desktop = grid) */}
      <section className="bg-slate-50 py-12 lg:py-14">
        <motion.div
          variants={V.page}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"
        >
          <motion.div variants={V.in} className="max-w-3xl">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight" style={{ color: NAVY }}>
              Como trabalhamos
            </h2>
            <p className="mt-2 text-base sm:text-lg text-slate-600 leading-relaxed">
              Processo simples para garantir previsibilidade — do orçamento à entrega.
            </p>
          </motion.div>

          {/* Mobile */}
          <div className="mt-7 lg:hidden">
            <Accordion type="single" collapsible className="w-full space-y-3">
              {steps.map((s) => (
                <AccordionItem
                  key={s.n}
                  value={`step-${s.n}`}
                  className="rounded-3xl border border-slate-200/70 bg-white overflow-hidden"
                >
                  <AccordionTrigger className="px-5 py-4 hover:no-underline">
                    <div className="flex items-center gap-3 text-left">
                      <div
                        className="flex h-9 w-9 items-center justify-center rounded-2xl ring-1 text-sm font-extrabold"
                        style={{
                          borderColor: `${ORANGE}35`,
                          backgroundColor: `${ORANGE}12`,
                          color: NAVY,
                        }}
                      >
                        {s.n}
                      </div>
                      <div className="min-w-0">
                        <p className="text-sm font-extrabold" style={{ color: NAVY }}>
                          {s.t}
                        </p>
                        <p className="mt-1 text-sm text-slate-600 line-clamp-1">{s.d}</p>
                      </div>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="px-5 pb-5">
                    <p className="text-sm text-slate-600 leading-relaxed">{s.d}</p>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>

          {/* Desktop */}
          <div className="mt-7 hidden lg:grid grid-cols-2 gap-5">
            {steps.map((s) => (
              <motion.div key={s.n} variants={V.in}>
                <StepCard n={s.n} title={s.t} desc={s.d} navy={NAVY} accent={ORANGE} />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* OBRA REAL (enxuto + bem hierarquizado) */}
      <section className="bg-white py-12 lg:py-14">
        <motion.div
          variants={V.page}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"
        >
          <motion.div variants={V.in} className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            <div className="lg:col-span-6">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight" style={{ color: NAVY }}>
                Obra real, sem conversa
              </h2>
              <p className="mt-2 text-base sm:text-lg text-slate-600 leading-relaxed">
                Preferimos mostrar contexto de obra do que promessas vagas.
              </p>

              <div className="mt-6 rounded-3xl bg-slate-50 p-5 ring-1 ring-slate-200/70">
                <div className="flex items-start gap-3">
                  <span
                    className="mt-0.5 inline-flex h-10 w-10 items-center justify-center rounded-2xl ring-1"
                    style={{ borderColor: `${ORANGE}35`, backgroundColor: `${ORANGE}12` }}
                  >
                    <Shield className="h-5 w-5" style={{ color: ORANGE }} />
                  </span>
                  <div>
                    <p className="text-sm font-extrabold" style={{ color: NAVY }}>
                      Padrão de execução
                    </p>
                    <p className="mt-1 text-sm text-slate-600 leading-relaxed">
                      EPI, organização e coordenação para reduzir risco, paragens e retrabalho.
                    </p>
                  </div>
                </div>

                <div className="mt-5 flex flex-col sm:flex-row gap-3">
                  <Link
                    href="/obras"
                    className="inline-flex h-11 w-full sm:w-auto items-center justify-center rounded-2xl px-5 text-sm font-extrabold ring-1 bg-white transition hover:bg-slate-50"
                    style={{ color: NAVY, borderColor: `${NAVY}22` }}
                  >
                    Ver obras <ArrowUpRight className="ml-2 h-4 w-4" style={{ color: ORANGE }} />
                  </Link>

                  <Link
                    href="/contactos#orcamento"
                    className="inline-flex h-11 w-full sm:w-auto items-center justify-center rounded-2xl px-5 text-sm font-extrabold shadow-sm transition hover:opacity-95"
                    style={{ backgroundColor: NAVY, color: "white" }}
                  >
                    Pedir orçamento <ArrowUpRight className="ml-2 h-4 w-4" />
                  </Link>
                </div>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="relative overflow-hidden rounded-3xl ring-1 ring-slate-200/70 shadow-[0_12px_36px_rgba(15,23,42,.10)]">
                <Image
                  src={imgCascaisBay}
                  alt="Contexto real de obra"
                  width={1600}
                  height={900}
                  className="h-[220px] sm:h-[300px] lg:h-[380px] w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/25 via-transparent to-transparent" />
              </div>
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* CTA final */}
      <CTASection
        title="Quer um orçamento com escopo claro?"
        description="Envia o pedido — respondemos com clareza de execução, prazos e organização."
      />
    </>
  );
}
