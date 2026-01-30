import type { Metadata } from "next";
import Link from "next/link";
import {
  Award,
  Users,
  Shield,
  TrendingUp,
  Target,
  Eye,
  CheckCircle2,
  ArrowUpRight,
  ClipboardList,
  Clock,
} from "lucide-react";

import { Card, CardContent } from "@/components/ui/card";
import { CTASection } from "@/components/sections/CTASection";
import { brand } from "@/lib/brand";

export const metadata: Metadata = {
  title: "Sobre",
  description:
    "Conheça a Gobi & Júnior: soluções técnicas na construção com rigor, qualidade e execução organizada.",
};

export default function AboutPage() {
  const NAVY = brand.colors.navy;
  const ORANGE = brand.colors.orange;

  const values = [
    {
      icon: Award,
      title: "Qualidade",
      description: "Materiais adequados e execução técnica consistente em todos os projetos.",
    },
    {
      icon: Users,
      title: "Equipas qualificadas",
      description: "Técnicos com experiência em obra e processos bem definidos.",
    },
    {
      icon: Shield,
      title: "Segurança",
      description: "Boas práticas e coordenação em obra para reduzir riscos e retrabalho.",
    },
    {
      icon: ClipboardList,
      title: "Escopo claro",
      description: "Orçamentos detalhados e alinhamento do que será executado.",
    },
    {
      icon: Clock,
      title: "Prazos realistas",
      description: "Planeamento e comunicação para cumprir cronogramas com previsibilidade.",
    },
    {
      icon: Target,
      title: "Foco no cliente",
      description: "Transparência e compromisso com a entrega final.",
    },
  ];

  return (
    <>
      {/* HERO premium */}
      <section className="relative overflow-hidden">
        <div
          className="absolute inset-0"
          style={{
            background: `
              radial-gradient(900px 520px at 15% 0%, ${ORANGE}16 0%, transparent 58%),
              radial-gradient(900px 520px at 70% 10%, ${NAVY}20 0%, transparent 60%),
              linear-gradient(180deg, #ffffff 0%, #f8fafc 100%)
            `,
          }}
        />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14 lg:py-20">
          <div className="max-w-3xl">
            <span
              className="inline-flex items-center gap-2 rounded-full px-4 py-2 text-xs font-extrabold ring-1"
              style={{
                backgroundColor: `${NAVY}08`,
                color: NAVY,
                borderColor: `${NAVY}22`,
              }}
            >
              <CheckCircle2 className="h-4 w-4" style={{ color: ORANGE }} />
              Rigor técnico • Execução organizada • Relações de confiança
            </span>

            <h1
              className="mt-5 text-4xl lg:text-5xl font-extrabold tracking-tight"
              style={{ color: NAVY }}
            >
              Sobre a {brand.name}
            </h1>

            <p className="mt-4 text-lg text-slate-600">
              Somos uma equipa orientada a obra: escopo bem definido, coordenação com as especialidades e entrega com
              qualidade.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
              <Link
                href="/contactos#orcamento"
                className="inline-flex h-12 items-center justify-center rounded-2xl px-5 text-sm font-extrabold shadow-sm transition hover:opacity-95"
                style={{ backgroundColor: NAVY, color: "white" }}
              >
                Falar com a equipa <ArrowUpRight className="ml-2 h-4 w-4" />
              </Link>

              <p className="text-sm text-slate-500 sm:ml-auto">{brand.contact.address}</p>
            </div>
          </div>
        </div>
      </section>

      {/* QUEM SOMOS + FACTS */}
      <section className="py-14 lg:py-18 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            <div className="lg:col-span-7">
              <h2 className="text-3xl lg:text-4xl font-extrabold" style={{ color: NAVY }}>
                Quem somos
              </h2>

              <div className="mt-5 space-y-4 text-lg text-slate-700 leading-relaxed">
                <p>
                  A <strong>{brand.name}</strong> atua em serviços técnicos na construção, com foco em execução
                  organizada e qualidade.
                </p>

                <p>
                  Trabalhamos com <strong>subempreitada técnica</strong> e também com clientes residenciais e
                  comerciais, integrando-nos de forma eficiente em obra — com planeamento, coordenação e entrega.
                </p>

                <p>
                  A nossa abordagem prioriza: <strong>escopo claro</strong>, <strong>cumprimento de prazos</strong> e{" "}
                  <strong>acabamento</strong>.
                </p>
              </div>
            </div>

            {/* bloco premium (substitui o “GJ” placeholder) */}
            <div className="lg:col-span-5">
              <Card className="overflow-hidden border-white bg-white shadow-sm ring-1 ring-slate-200/70">
                <CardContent className="p-6">
                  <p className="text-sm font-extrabold" style={{ color: NAVY }}>
                    Em resumo
                  </p>

                  <div className="mt-4 space-y-3">
                    {[
                      "Execução organizada e acompanhamento em obra",
                      "Orçamento detalhado e alinhamento de escopo",
                      "Coordenação com outras especialidades",
                      "Foco em qualidade e acabamento",
                    ].map((t) => (
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
                  </div>

                  <div className="mt-6 grid grid-cols-2 gap-3">
                    <div className="rounded-2xl bg-slate-50 p-3 ring-1 ring-slate-200/70">
                      <p className="text-[11px] text-slate-500">Atuação</p>
                      <p className="text-sm font-extrabold" style={{ color: NAVY }}>
                        {brand.contact.address || "Lisboa e arredores"}
                      </p>
                    </div>
                    <div className="rounded-2xl bg-slate-50 p-3 ring-1 ring-slate-200/70">
                      <p className="text-[11px] text-slate-500">Modelo</p>
                      <p className="text-sm font-extrabold" style={{ color: NAVY }}>
                        Obra & Manutenção
                      </p>
                    </div>
                  </div>

                  <div className="mt-5">
                    <Link
                      href="/servicos"
                      className="inline-flex items-center text-sm font-extrabold transition hover:opacity-90"
                      style={{ color: NAVY }}
                    >
                      Ver serviços <ArrowUpRight className="ml-2 h-4 w-4" style={{ color: ORANGE }} />
                    </Link>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* POSICIONAMENTO (mais curto e com estrutura) */}
      <section className="py-14 lg:py-18 bg-slate-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h2 className="text-3xl lg:text-4xl font-extrabold" style={{ color: NAVY }}>
              Posicionamento
            </h2>
            <p className="mt-4 text-lg text-slate-700 leading-relaxed">
              Evoluímos de forma estruturada: consolidamos os serviços atuais com qualidade e processos, e expandimos as
              capacidades mantendo rigor e previsibilidade em obra.
            </p>
          </div>

          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { icon: Shield, t: "Rigor e segurança", d: "Boas práticas e coordenação para reduzir risco e retrabalho." },
              { icon: TrendingUp, t: "Crescimento estruturado", d: "Processos repetíveis e equipas em expansão." },
              { icon: Eye, t: "Visão de longo prazo", d: "Parcerias duradouras baseadas em entrega e confiança." },
            ].map((x) => (
              <div key={x.t} className="rounded-2xl bg-white p-6 ring-1 ring-slate-200/70">
                <div
                  className="flex h-11 w-11 items-center justify-center rounded-2xl ring-1"
                  style={{ borderColor: `${ORANGE}35`, backgroundColor: `${ORANGE}12` }}
                >
                  <x.icon className="h-5 w-5" style={{ color: ORANGE }} />
                </div>
                <p className="mt-4 text-base font-extrabold" style={{ color: NAVY }}>
                  {x.t}
                </p>
                <p className="mt-2 text-sm text-slate-600 leading-relaxed">{x.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* VALORES */}
      <section className="py-14 lg:py-18 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl lg:text-4xl font-extrabold" style={{ color: NAVY }}>
              Os nossos valores
            </h2>
            <p className="mt-3 text-lg text-slate-600">
              Princípios práticos que orientam a forma como trabalhamos em obra.
            </p>
          </div>

          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((v) => (
              <Card
                key={v.title}
                className="border-white bg-white shadow-sm ring-1 ring-slate-200/70 transition hover:shadow-md"
              >
                <CardContent className="p-6">
                  <div
                    className="flex h-12 w-12 items-center justify-center rounded-2xl ring-1"
                    style={{ borderColor: `${ORANGE}35`, backgroundColor: `${ORANGE}12` }}
                  >
                    <v.icon className="h-6 w-6" style={{ color: ORANGE }} />
                  </div>

                  <h3 className="mt-4 text-lg font-extrabold" style={{ color: NAVY }}>
                    {v.title}
                  </h3>
                  <p className="mt-2 text-sm text-slate-600 leading-relaxed">{v.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* MISSÃO + VISÃO (em cards premium, não faixa azul chapada) */}
      <section className="py-14 lg:py-18 bg-slate-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <Card className="border-white bg-white shadow-sm ring-1 ring-slate-200/70">
              <CardContent className="p-7">
                <p className="text-sm font-extrabold" style={{ color: NAVY }}>
                  Missão
                </p>
                <p className="mt-3 text-lg text-slate-700 leading-relaxed">
                  Fornecer soluções técnicas de excelência na construção, com rigor, qualidade e cumprimento de prazos,
                  construindo relações de confiança com clientes e parceiros.
                </p>
              </CardContent>
            </Card>

            <Card className="border-white bg-white shadow-sm ring-1 ring-slate-200/70">
              <CardContent className="p-7">
                <p className="text-sm font-extrabold" style={{ color: NAVY }}>
                  Visão
                </p>
                <p className="mt-3 text-lg text-slate-700 leading-relaxed">
                  Ser reconhecidos como referência em soluções técnicas especializadas, expandindo capacidades de forma
                  estruturada e sustentável, mantendo padrões elevados de qualidade e profissionalismo.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
