// app/servicos/page.tsx
import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowUpRight,
  CheckCircle2,
  MessageCircle,
  ShieldCheck,
  Clock,
  ClipboardList,
  Zap,
  Droplets,
  Layers,
  Paintbrush,
  Wrench,
  PlugZap,
  Lightbulb,
  Droplet,
  Construction,
  Grid3X3,
  Ruler,
  Thermometer,
  Volume2,
  Shield,
} from "lucide-react";

import { ServiceCard } from "@/components/sections/ServiceCard";
import { brand } from "@/lib/brand";

export const metadata: Metadata = {
  title: "Serviços",
  description:
    "Serviços de construção e manutenção: elétrica, hidráulica/canalização, pladur, tetos falsos, pintura, colocação de piso e isolamento. Escopo claro, prazos realistas e execução organizada.",
};

// Mapa de ícones (garante que as strings usadas existem)
const iconMap = {
  Zap,
  PlugZap,
  Lightbulb,
  Wrench,
  Droplets,
  Droplet,
  Layers,
  Construction,
  Paintbrush,
  Grid3X3,
  Ruler,
  Thermometer,
  Volume2,
  Shield,
} as const;

type IconKey = keyof typeof iconMap;

type ServiceItem = {
  slug: string;
  name: string;
  shortDesc: string;
  icon: IconKey;
};

type ServiceGroup = {
  id: string;
  title: string;
  subtitle: string;
  items: ServiceItem[];
  featuredSlug?: string;
};

export default function ServicesPage() {
  const NAVY = brand.colors.navy;
  const ORANGE = brand.colors.orange;

  const phoneDigits = (brand.contact.phone || "").replace(/\D/g, "");
  const waHref = phoneDigits ? `https://wa.me/${phoneDigits}` : "#";

  const serviceGroups: ServiceGroup[] = [
    {
      id: "eletrica",
      title: "Elétrica",
      subtitle: "Instalação, modernização e manutenção com foco em segurança e acabamento limpo.",
      featuredSlug: "instalacao-eletrica",
      items: [
        {
          slug: "instalacao-eletrica",
          name: "Instalação Elétrica",
          shortDesc: "Novas instalações e remodelações. Planeamento, execução e conformidade em obra.",
          icon: "Zap",
        },
        {
          slug: "quadros-disjuntores",
          name: "Quadros & Disjuntores",
          shortDesc: "Montagem/atualização de quadros, proteção e organização de circuitos.",
          icon: "PlugZap",
        },
        {
          slug: "iluminacao",
          name: "Iluminação",
          shortDesc: "Pontos de luz, iluminação embutida e soluções funcionais para cada ambiente.",
          icon: "Lightbulb",
        },
        {
          slug: "manutencao-eletrica",
          name: "Manutenção Elétrica",
          shortDesc: "Avarias, correções e melhorias — com diagnóstico e intervenção objetiva.",
          icon: "Wrench",
        },
      ],
    },
    {
      id: "hidraulica",
      title: "Hidráulica / Canalização",
      subtitle: "Redes prediais e reparações com diagnóstico e execução organizada.",
      featuredSlug: "reparacoes",
      items: [
        {
          slug: "redes-agua-esgotos",
          name: "Redes de Água & Esgotos",
          shortDesc: "Instalação e ajustes em redes prediais (água fria/quente e esgotos).",
          icon: "Droplets",
        },
        {
          slug: "reparacoes",
          name: "Reparações",
          shortDesc: "Fugas, entupimentos e substituições com solução definitiva (sem “remendos”).",
          icon: "Droplet",
        },
        {
          slug: "manutencao-hidraulica",
          name: "Manutenção",
          shortDesc: "Manutenção preventiva e correções para reduzir avarias e retrabalho.",
          icon: "Wrench",
        },
      ],
    },
    {
      id: "pladur",
      title: "Pladur & Tetos Falsos",
      subtitle: "Divisórias, revestimentos e tetos com acabamento alinhado e integração de infraestruturas.",
      featuredSlug: "tetos-falsos",
      items: [
        {
          slug: "pladur",
          name: "Pladur (Divisórias/Revestimentos)",
          shortDesc: "Divisórias e revestimentos com estrutura correta e acabamento pronto para pintura.",
          icon: "Layers",
        },
        {
          slug: "tetos-falsos",
          name: "Tetos Falsos",
          shortDesc: "Soluções técnicas e estéticas, com preparação para iluminação embutida.",
          icon: "Construction",
        },
      ],
    },
    {
      id: "pintura",
      title: "Pintura",
      subtitle: "Preparação correta e acabamento profissional — interior e exterior.",
      featuredSlug: "pintura-interior",
      items: [
        {
          slug: "pintura-interior",
          name: "Pintura Interior",
          shortDesc: "Preparação (massa, lixagem, primário) e acabamento uniforme.",
          icon: "Paintbrush",
        },
        {
          slug: "pintura-exterior",
          name: "Pintura Exterior",
          shortDesc: "Tratamento e pintura com foco em durabilidade e resistência.",
          icon: "Paintbrush",
        },
      ],
    },
    {
      id: "manutencao",
      title: "Manutenção",
      subtitle: "Pequenas correções e intervenções rápidas para manter o espaço a funcionar como deve.",
      featuredSlug: "manutencao-eletrica",
      items: [
        {
          slug: "manutencao-eletrica",
          name: "Manutenção Elétrica",
          shortDesc: "Avarias, correções e melhorias — com diagnóstico e intervenção objetiva.",
          icon: "Wrench",
        },
        {
          slug: "manutencao-hidraulica",
          name: "Manutenção Hidráulica",
          shortDesc: "Manutenção preventiva e correções para reduzir avarias e retrabalho.",
          icon: "Wrench",
        },
        {
          slug: "reparacoes",
          name: "Reparações (Canalização)",
          shortDesc: "Fugas, entupimentos e substituições com solução definitiva (sem “remendos”).",
          icon: "Droplet",
        },
      ],
    },
    {
      id: "pisos",
      title: "Pisos",
      subtitle: "Aplicação e acabamento com alinhamento, nível e detalhes bem feitos.",
      featuredSlug: "colocacao-de-piso",
      items: [
        {
          slug: "colocacao-de-piso",
          name: "Colocação de Piso",
          shortDesc: "Flutuante/vinílico/cerâmico (conforme o projeto) + rodapés e acabamentos.",
          icon: "Grid3X3",
        },
        {
          slug: "preparacao-de-base",
          name: "Preparação de Base",
          shortDesc: "Regularização, alinhamento e preparação para um acabamento final correto.",
          icon: "Ruler",
        },
      ],
    },
    {
      id: "isolamentos",
      title: "Isolamentos",
      subtitle: "Conforto térmico e acústico com soluções aplicadas corretamente.",
      featuredSlug: "isolamento-termico",
      items: [
        {
          slug: "isolamento-termico",
          name: "Isolamento Térmico",
          shortDesc: "Reduz perdas de calor e melhora a eficiência do espaço.",
          icon: "Thermometer",
        },
        {
          slug: "isolamento-acustico",
          name: "Isolamento Acústico",
          shortDesc: "Redução de ruído com materiais e montagem adequados (especialmente em pladur).",
          icon: "Volume2",
        },
        {
          slug: "isolamento-geral",
          name: "Isolamento (Geral)",
          shortDesc: "Avaliação do caso e aplicação da solução mais adequada ao objetivo do cliente.",
          icon: "Shield",
        },
      ],
    },
  ];

  const quickNav = [
    { id: "eletrica", label: "Elétrica", Icon: Zap },
    { id: "hidraulica", label: "Hidráulica", Icon: Droplets },
    { id: "pladur", label: "Pladur", Icon: Layers },
    { id: "pintura", label: "Pintura", Icon: Paintbrush },
    { id: "manutencao", label: "Manutenção", Icon: Wrench },
  ];

  const groupIconById: Record<string, React.ComponentType<{ className?: string }>> = {
    eletrica: Zap,
    hidraulica: Droplets,
    pladur: Layers,
    pintura: Paintbrush,
    manutencao: Wrench,
    pisos: ClipboardList,
    isolamentos: ShieldCheck as any,
  };

  const ctaCopyByGroup: Record<string, { q: string; btn: string }> = {
    eletrica: { q: "Precisa de instalação elétrica, correção ou manutenção?", btn: "Pedir orçamento elétrico" },
    hidraulica: { q: "Fugas, redes de água/esgotos ou reparações?", btn: "Pedir orçamento hidráulico" },
    pladur: { q: "Divisórias, revestimentos ou tetos falsos?", btn: "Pedir orçamento de pladur" },
    pintura: { q: "Pintura interior/exterior com preparação correta?", btn: "Pedir orçamento de pintura" },
    manutencao: { q: "Uma intervenção rápida para resolver e deixar pronto?", btn: "Falar sobre manutenção" },
    pisos: { q: "Colocação de piso ou preparação de base?", btn: "Pedir orçamento de pisos" },
    isolamentos: { q: "Conforto térmico ou acústico no espaço?", btn: "Pedir orçamento de isolamento" },
  };

  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div
          className="absolute inset-0"
          style={{
            background: `
              radial-gradient(900px 520px at 15% 0%, ${ORANGE}18 0%, transparent 58%),
              radial-gradient(900px 520px at 70% 10%, ${NAVY}22 0%, transparent 60%),
              linear-gradient(180deg, #ffffff 0%, #f8fafc 100%)
            `,
          }}
        />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
          <div className="max-w-3xl">
            <span
              className="inline-flex items-center gap-2 rounded-full px-4 py-2 text-xs font-extrabold ring-1"
              style={{ backgroundColor: `${NAVY}08`, color: NAVY, borderColor: `${NAVY}22` }}
            >
              <CheckCircle2 className="h-4 w-4" style={{ color: ORANGE }} />
              Escopo claro • Execução organizada • Prazos realistas
            </span>

            <h1 className="mt-5 text-4xl lg:text-5xl font-extrabold tracking-tight" style={{ color: NAVY }}>
              Serviços de Construção e Manutenção
            </h1>

            <p className="mt-4 text-lg text-slate-600">
              Elétrica, hidráulica/canalização, pladur, tetos falsos, pintura, pisos e isolamentos — com planeamento e
              entrega organizada.
            </p>

            <div className="mt-6 flex flex-wrap gap-2">
              {[
                { i: Clock, t: "Resposta rápida" },
                { i: ShieldCheck, t: "Segurança em obra" },
                { i: ClipboardList, t: "Orçamento detalhado" },
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

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
              <Link
                href="/contactos#orcamento"
                className="inline-flex h-12 items-center justify-center rounded-2xl px-5 text-sm font-extrabold shadow-sm transition hover:opacity-95"
                style={{ backgroundColor: NAVY, color: "white" }}
              >
                Pedir orçamento <ArrowUpRight className="ml-2 h-4 w-4" />
              </Link>

              <a
                href={waHref}
                target="_blank"
                rel="noreferrer"
                className="inline-flex h-12 items-center justify-center rounded-2xl px-5 text-sm font-extrabold ring-1 transition hover:bg-white"
                style={{ borderColor: `${NAVY}22`, color: NAVY, backgroundColor: "white" }}
              >
                <MessageCircle className="mr-2 h-4 w-4" style={{ color: ORANGE }} />
                WhatsApp
              </a>

              <p className="text-sm text-slate-500 sm:ml-auto">{brand.contact.address}</p>
            </div>

            {/* Quick nav */}
            <div className="mt-10">
              <div className="rounded-3xl p-5 sm:p-6 ring-1" style={{ backgroundColor: "white", borderColor: `${NAVY}18` }}>
                <h2 className="text-base sm:text-lg font-extrabold" style={{ color: NAVY }}>
                  O que você precisa agora?
                </h2>
                <p className="mt-1 text-sm text-slate-600">Escolha uma categoria e vá direto ao ponto.</p>

                {/* mobile horizontal */}
                <div className="mt-4 -mx-1 sm:hidden">
                  <div className="flex gap-3 overflow-x-auto px-1 pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
                    {quickNav.map(({ id, label, Icon }) => (
                      <a
                        key={id}
                        href={`#${id}`}
                        className="inline-flex shrink-0 items-center justify-center gap-2 rounded-2xl px-4 py-3 text-sm font-extrabold ring-1"
                        style={{ backgroundColor: `${NAVY}04`, color: NAVY, borderColor: `${NAVY}18` }}
                      >
                        <Icon className="h-4 w-4" style={{ color: ORANGE }} />
                        {label}
                      </a>
                    ))}
                  </div>
                </div>

                {/* desktop grid */}
                <div className="mt-4 hidden sm:grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3">
                  {quickNav.map(({ id, label, Icon }) => (
                    <a
                      key={id}
                      href={`#${id}`}
                      className="inline-flex items-center justify-center gap-2 rounded-2xl px-4 py-3 text-sm font-extrabold ring-1 transition hover:opacity-95"
                      style={{ backgroundColor: `${NAVY}04`, color: NAVY, borderColor: `${NAVY}18` }}
                    >
                      <Icon className="h-4 w-4" style={{ color: ORANGE }} />
                      {label}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CATÁLOGO */}
      <section className="py-12 lg:py-18 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-10 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
            <div className="max-w-3xl">
              <h2 className="text-3xl lg:text-4xl font-extrabold" style={{ color: NAVY }}>
                Catálogo de serviços
              </h2>
              <p className="mt-3 text-lg text-slate-600">
                Organizado por tipo de trabalho para facilitar o pedido de orçamento.
              </p>
            </div>

            <Link
              href="/contactos#orcamento"
              className="inline-flex h-10 w-fit items-center justify-center rounded-2xl px-4 text-sm font-extrabold ring-1 transition hover:bg-slate-50"
              style={{ borderColor: `${NAVY}22`, color: NAVY, backgroundColor: "white" }}
            >
              Falar com a equipa <ArrowUpRight className="ml-2 h-4 w-4" />
            </Link>
          </div>

          <div className="space-y-14">
            {serviceGroups.map((group) => {
              const TitleIcon = groupIconById[group.id] ?? ClipboardList;
              const cta = ctaCopyByGroup[group.id];

              return (
                <div key={group.id} id={group.id} className="scroll-mt-32">
                  <div className="mb-6 flex items-start gap-3">
                    <div
                      className="mt-0.5 flex h-10 w-10 items-center justify-center rounded-2xl ring-1"
                      style={{ backgroundColor: `${ORANGE}14`, borderColor: `${ORANGE}22` }}
                      aria-hidden
                    >
                      {/* ✅ sem style para não quebrar no build */}
                      <TitleIcon className="h-5 w-5 text-orange-500" />
                    </div>

                    <div className="min-w-0">
                      <h3 className="text-xl lg:text-2xl font-extrabold" style={{ color: NAVY }}>
                        {group.title}
                      </h3>
                      <p className="mt-1 text-sm lg:text-base text-slate-600 max-w-3xl">{group.subtitle}</p>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                    {group.items.map((service) => {
                      const isFeatured = group.featuredSlug === service.slug;
                      return (
                        <ServiceCard
                          key={service.slug}
                          name={service.name}
                          description={service.shortDesc}
                          href={`/servicos/${service.slug}`}
                          icon={service.icon}
                          featured={!!isFeatured}
                        />
                      );
                    })}
                  </div>

                  {/* CTA por seção */}
                  <div className="mt-8">
                    <div
                      className="rounded-3xl p-5 sm:p-6 ring-1 flex flex-col gap-4 md:flex-row md:items-center md:justify-between"
                      style={{ backgroundColor: `${NAVY}04`, borderColor: `${NAVY}14` }}
                    >
                      <div className="min-w-0">
                        <p className="text-sm font-extrabold" style={{ color: NAVY }}>
                          {cta?.q ?? "Quer avançar com este tipo de serviço?"}
                        </p>
                        <p className="mt-1 text-sm text-slate-600">
                          Envie local da obra + o que precisa (e fotos, se tiver). Respondemos com um orçamento claro.
                        </p>
                      </div>

                      <div className="flex flex-col sm:flex-row gap-3">
                        <Link
                          href="/contactos#orcamento"
                          className="inline-flex h-11 items-center justify-center rounded-2xl px-5 text-sm font-extrabold shadow-sm transition hover:opacity-95"
                          style={{ backgroundColor: NAVY, color: "white" }}
                        >
                          {cta?.btn ?? "Pedir orçamento"} <ArrowUpRight className="ml-2 h-4 w-4" />
                        </Link>

                        <a
                          href={waHref}
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex h-11 items-center justify-center rounded-2xl px-5 text-sm font-extrabold ring-1 transition hover:bg-white"
                          style={{ borderColor: `${NAVY}22`, color: NAVY, backgroundColor: "white" }}
                        >
                          <MessageCircle className="mr-2 h-4 w-4" style={{ color: ORANGE }} />
                          WhatsApp
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* CTA FINAL */}
          <div id="cta-final" className="scroll-mt-28 mt-16">
            <div
              className="rounded-3xl p-6 sm:p-10 ring-1 text-center"
              style={{ borderColor: `${NAVY}14`, backgroundColor: `${NAVY}04` }}
            >
              <h2 className="text-2xl sm:text-4xl font-extrabold" style={{ color: NAVY }}>
                Pronto para começar o seu projeto?
              </h2>

              <p className="mt-3 text-base sm:text-lg text-slate-600 max-w-3xl mx-auto">
                Solicite um orçamento sem compromisso. A nossa equipa técnica analisa as suas necessidades e responde com clareza.
              </p>

              <div className="mt-7 flex flex-col sm:flex-row items-center justify-center gap-3">
                <Link
                  href="/contactos#orcamento"
                  className="inline-flex h-12 items-center justify-center rounded-2xl px-6 text-sm font-extrabold shadow-sm transition hover:opacity-95"
                  style={{ backgroundColor: NAVY, color: "white" }}
                >
                  Pedir orçamento <ArrowUpRight className="ml-2 h-4 w-4" />
                </Link>

                <a
                  href={waHref}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex h-12 items-center justify-center rounded-2xl px-6 text-sm font-extrabold ring-1 transition hover:bg-white"
                  style={{ borderColor: `${NAVY}22`, color: NAVY, backgroundColor: "white" }}
                >
                  <MessageCircle className="mr-2 h-4 w-4" style={{ color: ORANGE }} />
                  Falar no WhatsApp
                </a>
              </div>

              <p className="mt-4 text-xs text-slate-500">
                Lisboa e arredores • Resposta rápida • Orçamento detalhado
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
