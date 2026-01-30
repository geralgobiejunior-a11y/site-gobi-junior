// app/servicos/page.tsx
import { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight, CheckCircle2, MessageCircle, ShieldCheck, Clock, ClipboardList } from "lucide-react";

import { ServiceCard } from "@/components/sections/ServiceCard";
import { CTASection } from "@/components/sections/CTASection";
import { brand } from "@/lib/brand";

export const metadata: Metadata = {
  title: "Serviços",
  description:
    "Serviços de construção e manutenção: elétrica, hidráulica/canalização, pladur, tetos falsos, pintura, colocação de piso e isolamento. Escopo claro, prazos realistas e execução organizada.",
};

type ServiceItem = {
  slug: string;
  name: string;
  shortDesc: string;
  icon: string; // ✅ nome do ícone do lucide-react (string)
};

type ServiceGroup = {
  title: string;
  subtitle: string;
  items: ServiceItem[];
};

export default function ServicesPage() {
  const NAVY = brand.colors.navy;
  const ORANGE = brand.colors.orange;

  const phoneDigits = (brand.contact.phone || "").replace(/\D/g, "");
  const waHref = phoneDigits ? `https://wa.me/${phoneDigits}` : "#";

  // ✅ ÍCONES: use nomes que existem no lucide-react com certeza
  // (evitei "Pipe" porque no teu print ele não existe na tua versão)
  const serviceGroups: ServiceGroup[] = [
    {
      title: "Elétrica",
      subtitle: "Instalação, modernização e manutenção com foco em segurança e acabamento limpo.",
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
      title: "Hidráulica / Canalização",
      subtitle: "Redes prediais e reparações com diagnóstico e execução organizada.",
      items: [
        {
          slug: "redes-agua-esgotos",
          name: "Redes de Água & Esgotos",
          shortDesc: "Instalação e ajustes em redes prediais (água fria/quente e esgotos).",
          icon: "Droplets", // ✅ corrigido (antes estava Pipe)
        },
        {
          slug: "reparacoes",
          name: "Reparações",
          shortDesc: "Fugas, entupimentos e substituições com solução definitiva (sem “remendos”).",
          icon: "Droplet", // ✅ existe e fica bem aqui
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
      title: "Pladur & Tetos Falsos",
      subtitle: "Divisórias, revestimentos e tetos com acabamento alinhado e integração de infraestruturas.",
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
      title: "Pintura",
      subtitle: "Preparação correta e acabamento profissional — interior e exterior.",
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
      title: "Pisos",
      subtitle: "Aplicação e acabamento com alinhamento, nível e detalhes bem feitos.",
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
      title: "Isolamentos",
      subtitle: "Conforto térmico e acústico com soluções aplicadas corretamente.",
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
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14 lg:py-20">
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
          </div>
        </div>
      </section>

      {/* CATÁLOGO */}
      <section className="py-14 lg:py-18 bg-white">
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
              className="inline-flex h-10 items-center justify-center rounded-2xl px-4 text-sm font-extrabold ring-1 transition hover:bg-slate-50"
              style={{ borderColor: `${NAVY}22`, color: NAVY, backgroundColor: "white" }}
            >
              Falar com a equipa <ArrowUpRight className="ml-2 h-4 w-4" />
            </Link>
          </div>

          <div className="space-y-12">
            {serviceGroups.map((group) => (
              <div key={group.title}>
                <div className="mb-6">
                  <h3 className="text-xl lg:text-2xl font-extrabold" style={{ color: NAVY }}>
                    {group.title}
                  </h3>
                  <p className="mt-2 text-sm lg:text-base text-slate-600 max-w-3xl">{group.subtitle}</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {group.items.map((service) => (
                    <ServiceCard
                      key={service.slug}
                      name={service.name}
                      description={service.shortDesc}
                      href={`/servicos/${service.slug}`}
                      icon={service.icon}
                    />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
