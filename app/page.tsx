import {
  Clock,
  Users,
  CheckCircle2,
  MapPin,
  FileText,
  Wrench,
} from "lucide-react";

import { HeroRotating } from "@/components/sections/HeroRotating";
import { AreasMapSection } from "@/components/sections/AreasMapSection";

// ✅ carousel premium de serviços
import { ServicesCarousel } from "@/components/sections/ServicesCarousel";
import { services as allServices } from "@/lib/data/services";

// ✅ secção extraída (obras)
import { RecentProjectsSection } from "@/components/sections/RecentProjectsSection";

// ✅ processo premium (animação)
import { ProcessStepsSection } from "@/components/sections/ProcessStepsSection";

// ✅ Porquê (com foto + layout premium)
import { WhyChooseUsSection } from "@/components/sections/WhyChooseUsSection";

// ✅ NOVO: Orçamento separado
import { SolicitarOrcamentoSection } from "@/components/sections/SolicitarOrcamentoSection";

import { featuredProjects } from "@/lib/data/projects";
import { brand } from "@/lib/brand";

export default function HomePage() {
  const NAVY = brand.colors.navy;
  const ORANGE = brand.colors.orange;

  const whyChooseUs = [
    {
      icon: Clock,
      title: "Cumprimento de Prazos",
      description: "Planeamento rigoroso, equipas coordenadas e entregas pontuais.",
    },
    {
      icon: CheckCircle2,
      title: "Qualidade e Conformidade",
      description: "Materiais certificados e execução técnica com boas práticas.",
    },
    {
      icon: Users,
      title: "Equipas Qualificadas",
      description: "Técnicos experientes e foco no detalhe em obra.",
    },
    {
      icon: CheckCircle2,
      title: "Organização em Obra",
      description: "Coordenação, limpeza e comunicação clara com responsáveis.",
    },
    {
      icon: CheckCircle2,
      title: "Transparência",
      description: "Orçamentos detalhados e alinhamento em todas as fases.",
    },
    {
      icon: CheckCircle2,
      title: "Assistência Pós-Obra",
      description: "Suporte após entrega para garantir tranquilidade.",
    },
  ];

  const processSteps = [
    {
      number: "01",
      title: "Análise e Visita Técnica",
      description: "Percebemos o contexto, medimos e validamos necessidades no local.",
    },
    {
      number: "02",
      title: "Proposta e Planeamento",
      description: "Orçamento claro, escopo definido e cronograma realista.",
    },
    {
      number: "03",
      title: "Execução e Coordenação",
      description: "Trabalho técnico com coordenação em obra e foco no cumprimento.",
    },
    {
      number: "04",
      title: "Controlo de Qualidade",
      description:
        "Verificações durante a execução para garantir consistência e durabilidade.",
    },
    {
      number: "05",
      title: "Entrega e Pós-Obra",
      description: "Entrega organizada e assistência para ajustes e manutenção.",
    },
  ];

  const trustItems = [
    { icon: MapPin, title: "Lisboa e arredores", desc: "Atuação rápida em obra" },
    { icon: FileText, title: "Orçamento estruturado", desc: "Escopo e prazos claros" },
    { icon: Wrench, title: "Pós-obra", desc: "Assistência quando precisa" },
  ];

  return (
    <>
      {/* HERO (rotativo com crossfade) */}
      <HeroRotating
        images={["/hero/1.webp", "/hero/2.webp", "/hero/3.webp"]}
        intervalMs={9000}
      />

      {/* TRUST STRIP */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-4 py-10 sm:grid-cols-3">
            {trustItems.map((item, idx) => (
              <div
                key={idx}
                className="flex items-center gap-4 rounded-2xl bg-white px-5 py-4 shadow-sm ring-1 ring-slate-200/70 transition-all hover:-translate-y-[1px] hover:shadow-md"
              >
                <div
                  className="flex h-11 w-11 items-center justify-center rounded-xl"
                  style={{ backgroundColor: `${ORANGE}22` }}
                >
                  <item.icon className="h-5 w-5" style={{ color: ORANGE }} />
                </div>
                <div>
                  <p className="text-sm font-extrabold" style={{ color: NAVY }}>
                    {item.title}
                  </p>
                  <p className="text-xs text-slate-600">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="h-px w-full bg-slate-200/70" />
        </div>
      </section>

      {/* ÁREAS DE ATUAÇÃO */}
      <AreasMapSection />

      {/* SERVIÇOS (CAROUSEL) */}
      <ServicesCarousel
        services={allServices}
        title="Serviços"
        subtitle="Serviços técnicos e acabamentos para obra e manutenção — com rigor, organização e cumprimento."
        viewAllHref="/servicos"
      />

      {/* OBRAS RECENTES */}
      <RecentProjectsSection
        NAVY={NAVY}
        ORANGE={ORANGE}
        projects={featuredProjects}
      />

      {/* PROCESSO */}
      <ProcessStepsSection NAVY={NAVY} ORANGE={ORANGE} steps={processSteps} />

      {/* PORQUÊ */}
      <WhyChooseUsSection
        NAVY={NAVY}
        ORANGE={ORANGE}
        brandName={brand.name}
        items={whyChooseUs.map(({ title, description }) => ({ title, description }))}
        imageSrc="/sections/como-trabalhamos.png"
      />

      <SolicitarOrcamentoSection
  NAVY={NAVY}
  ORANGE={ORANGE}
  phone="+351 9xx xxx xxx"
  whatsapp="+3519xxxxxxxx"
  email="orcamentos@gobijunior.pt"
  locationLabel="Lisboa • Grande Lisboa • Margem Sul"
/>

    </>
  );
}
