"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  CheckCircle2,
  ClipboardList,
  HardHat,
  Wrench,
  MessagesSquare,
  Shield,
  MapPin,
} from "lucide-react";

import { CTASection } from "@/components/sections/CTASection";
import { brand } from "@/lib/brand";

const ease = [0.22, 1, 0.36, 1] as const;

const V = {
  page: {
    hidden: {},
    show: { transition: { staggerChildren: 0.08 } },
  },
  in: {
    hidden: { opacity: 0, y: 16 },
    show: { opacity: 1, y: 0, transition: { duration: 0.55, ease } },
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
      className="inline-flex items-center gap-2 rounded-full px-4 py-2 text-xs font-extrabold ring-1"
      style={{ backgroundColor: `${navy}08`, color: navy, borderColor: `${navy}22` }}
    >
      <Icon className="h-4 w-4" style={{ color: accent }} />
      {text}
    </span>
  );
}

function FeatureCard({
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
    <div className="rounded-3xl bg-white p-6 ring-1 ring-slate-200/70 shadow-sm transition hover:shadow-md">
      <div
        className="flex h-11 w-11 items-center justify-center rounded-2xl ring-1"
        style={{ borderColor: `${accent}35`, backgroundColor: `${accent}12` }}
      >
        <Icon className="h-5 w-5" style={{ color: accent }} />
      </div>

      <p className="mt-4 text-base font-extrabold" style={{ color: navy }}>
        {title}
      </p>
      <p className="mt-2 text-sm text-slate-600 leading-relaxed">{desc}</p>
    </div>
  );
}

function Step({
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
    <div className="relative rounded-3xl bg-white p-6 ring-1 ring-slate-200/70 shadow-sm">
      <div className="flex items-start gap-4">
        <div
          className="flex h-11 w-11 items-center justify-center rounded-2xl ring-1 text-sm font-extrabold"
          style={{ borderColor: `${accent}35`, backgroundColor: `${accent}12`, color: navy }}
        >
          {n}
        </div>

        <div className="flex-1">
          <p className="text-base font-extrabold" style={{ color: navy }}>
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

  // imagens no /public
  const imgColete = "/Design%20sem%20nome%20(22).png";
  const imgCascaisBay = "/obras/CascaisBay.JPG";

  /**
   * COPY: curto, direto e consistente.
   * Nada de "valores" genéricos; tudo vira promessa operacional.
   */
  const bullets = [
    "Execução técnica em obra e manutenção",
    "Escopo claro antes de começar",
    "Coordenação com especialidades e fiscalização",
    "Entrega com qualidade e acabamento",
  ];

  return (
    <>
      {/* HERO — foco: o que fazemos + prova visual + CTA */}
      <section className="relative overflow-hidden bg-white">
        {/* fundo premium clean (sem exagero) */}
        <div
          className="absolute inset-0"
          style={{
            background: `
              radial-gradient(1000px 600px at 10% 0%, ${ORANGE}18 0%, transparent 60%),
              radial-gradient(1000px 600px at 85% 10%, ${NAVY}18 0%, transparent 62%),
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
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* texto */}
            <div className="lg:col-span-6">
              <motion.div variants={V.in}>
                <Pill
                  icon={CheckCircle2}
                  text="Execução técnica • Organização em obra • Clareza de escopo"
                  accent={ORANGE}
                  navy={NAVY}
                />
              </motion.div>

              <motion.h1
                variants={V.in}
                className="mt-5 text-4xl lg:text-5xl font-extrabold tracking-tight"
                style={{ color: NAVY }}
              >
                Sobre a {brand.name}
              </motion.h1>

              <motion.p variants={V.in} className="mt-4 text-lg text-slate-600 leading-relaxed">
                Somos uma equipa de construção orientada a execução: planeamos, coordenamos e entregamos com
                previsibilidade. Menos ruído. Mais obra feita.
              </motion.p>

              {/* bullets = foco no que importa */}
              <motion.div variants={V.in} className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3">
                {bullets.map((t) => (
                  <div key={t} className="flex items-start gap-3">
                    <span
                      className="mt-0.5 inline-flex h-8 w-8 items-center justify-center rounded-2xl ring-1"
                      style={{ borderColor: `${ORANGE}35`, backgroundColor: `${ORANGE}12` }}
                    >
                      <CheckCircle2 className="h-4 w-4" style={{ color: ORANGE }} />
                    </span>
                    <p className="text-sm text-slate-700">{t}</p>
                  </div>
                ))}
              </motion.div>

              {/* CTAs */}
              <motion.div variants={V.in} className="mt-8 flex flex-col gap-3 sm:flex-row">
                <motion.div whileHover={{ y: -2 }} whileTap={{ scale: 0.98 }}>
                  <Link
                    href="/contactos#orcamento"
                    className="inline-flex h-12 items-center justify-center rounded-2xl px-6 text-sm font-extrabold shadow-sm transition hover:opacity-95"
                    style={{ backgroundColor: NAVY, color: "white" }}
                  >
                    Pedir orçamento <ArrowUpRight className="ml-2 h-4 w-4" />
                  </Link>
                </motion.div>

                <motion.div whileHover={{ y: -2 }} whileTap={{ scale: 0.98 }}>
                  <Link
                    href="/servicos"
                    className="inline-flex h-12 items-center justify-center rounded-2xl px-6 text-sm font-extrabold ring-1 bg-white/70 backdrop-blur transition"
                    style={{ color: NAVY, borderColor: `${NAVY}22` }}
                  >
                    Ver serviços <ArrowUpRight className="ml-2 h-4 w-4" style={{ color: ORANGE }} />
                  </Link>
                </motion.div>
              </motion.div>

              <motion.div variants={V.in} className="mt-5 inline-flex items-center gap-2 text-sm text-slate-500">
                <MapPin className="h-4 w-4" style={{ color: ORANGE }} />
                {brand.contact.address || "Lisboa e arredores"}
              </motion.div>
            </div>

            {/* imagem = prova (sem firula) */}
            <motion.div variants={V.in} className="lg:col-span-6">
              <div className="relative overflow-hidden rounded-3xl ring-1 ring-slate-200/70 shadow-[0_14px_42px_rgba(15,23,42,.12)]">
                <Image
                  src={imgColete}
                  alt="Gobi & Júnior em obra — colete com logo"
                  width={1400}
                  height={1000}
                  priority
                  className="h-[270px] sm:h-[340px] lg:h-[440px] w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/35 via-transparent to-transparent" />

                {/* etiqueta discreta */}
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="rounded-2xl bg-white/85 backdrop-blur px-4 py-3 ring-1 ring-white/60">
                    <p className="text-sm font-extrabold" style={{ color: NAVY }}>
                      Execução organizada em obra
                    </p>
                    <p className="mt-1 text-xs text-slate-600">
                      Identidade em campo, EPI, método e acompanhamento.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* O QUE ENTREGAMOS — 3 pilares (simples e forte) */}
      <section className="bg-white py-14 lg:py-18">
        <motion.div
          variants={V.page}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"
        >
          <motion.div variants={V.in} className="max-w-3xl">
            <h2 className="text-3xl lg:text-4xl font-extrabold tracking-tight" style={{ color: NAVY }}>
              O que entregamos
            </h2>
            <p className="mt-3 text-lg text-slate-600 leading-relaxed">
              Não prometemos “perfeição”. Prometemos organização, clareza e execução bem feita.
            </p>
          </motion.div>

          <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
            <motion.div variants={V.in}>
              <FeatureCard
                icon={ClipboardList}
                title="Escopo claro"
                desc="Alinhamos o executável antes de começar — para evitar surpresas, extras e retrabalho."
                navy={NAVY}
                accent={ORANGE}
              />
            </motion.div>

            <motion.div variants={V.in}>
              <FeatureCard
                icon={Wrench}
                title="Execução técnica"
                desc="Equipa orientada a obra, com método e padrão de acabamento."
                navy={NAVY}
                accent={ORANGE}
              />
            </motion.div>

            <motion.div variants={V.in}>
              <FeatureCard
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

      {/* COMO TRABALHAMOS — 4 passos (sem duplicar conteúdo) */}
      <section className="bg-slate-50 py-14 lg:py-18">
        <motion.div
          variants={V.page}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"
        >
          <motion.div variants={V.in} className="max-w-3xl">
            <h2 className="text-3xl lg:text-4xl font-extrabold tracking-tight" style={{ color: NAVY }}>
              Como trabalhamos
            </h2>
            <p className="mt-3 text-lg text-slate-600 leading-relaxed">
              Processo simples para garantir previsibilidade — do orçamento à entrega.
            </p>
          </motion.div>

          <div className="mt-10 grid grid-cols-1 lg:grid-cols-2 gap-6">
            <motion.div variants={V.in}>
              <Step n={1} title="Levantamento & proposta" desc="Entendemos o pedido e entregamos orçamento claro." navy={NAVY} accent={ORANGE} />
            </motion.div>
            <motion.div variants={V.in}>
              <Step n={2} title="Planeamento" desc="Alinhamos datas, acessos, materiais e interface com a obra." navy={NAVY} accent={ORANGE} />
            </motion.div>
            <motion.div variants={V.in}>
              <Step n={3} title="Execução" desc="Equipa em campo com organização, método e foco em qualidade." navy={NAVY} accent={ORANGE} />
            </motion.div>
            <motion.div variants={V.in}>
              <Step n={4} title="Fecho & validação" desc="Revisão final e entrega com padrão de acabamento." navy={NAVY} accent={ORANGE} />
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* PROVA VISUAL (1 bloco) — usa Cascais Bay sem inventar números */}
      <section className="bg-white py-14 lg:py-18">
        <motion.div
          variants={V.page}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"
        >
          <motion.div variants={V.in} className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-6">
              <h2 className="text-3xl lg:text-4xl font-extrabold tracking-tight" style={{ color: NAVY }}>
                Obra real, sem conversa
              </h2>
              <p className="mt-3 text-lg text-slate-600 leading-relaxed">
                Preferimos mostrar contexto de obra do que encher a página com promessa vaga.
              </p>

              <div className="mt-6 rounded-3xl bg-slate-50 p-6 ring-1 ring-slate-200/70">
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
                    className="inline-flex h-11 items-center justify-center rounded-2xl px-5 text-sm font-extrabold ring-1 bg-white transition hover:shadow-sm"
                    style={{ color: NAVY, borderColor: `${NAVY}22` }}
                  >
                    Ver obras <ArrowUpRight className="ml-2 h-4 w-4" style={{ color: ORANGE }} />
                  </Link>

                  <Link
                    href="/contactos#orcamento"
                    className="inline-flex h-11 items-center justify-center rounded-2xl px-5 text-sm font-extrabold shadow-sm transition hover:opacity-95"
                    style={{ backgroundColor: NAVY, color: "white" }}
                  >
                    Pedir orçamento <ArrowUpRight className="ml-2 h-4 w-4" />
                  </Link>
                </div>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="relative overflow-hidden rounded-3xl ring-1 ring-slate-200/70 shadow-[0_14px_42px_rgba(15,23,42,.12)]">
                <Image
                  src={imgCascaisBay}
                  alt="Cascais Bay — contexto real de obra"
                  width={1600}
                  height={900}
                  className="h-[260px] sm:h-[340px] lg:h-[420px] w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/30 via-transparent to-transparent" />
              </div>
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* CTA final (mantém teu componente) */}
      <CTASection
        title="Quer um orçamento com escopo claro?"
        subtitle="Envia o pedido — respondemos com clareza de execução, prazos e organização."
      />
    </>
  );
}
