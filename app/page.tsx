import { Clock, Users, CheckCircle2, ShieldCheck, ClipboardCheck } from "lucide-react";

import { brand } from "@/lib/brand";

import { HeroRotating } from "@/components/sections/HeroRotating";
import { B2BAuthoritySection } from "@/components/sections/B2BAuthoritySection";
import { ServicesCarousel } from "@/components/sections/ServicesCarousel";
import { RecentProjectsSection } from "@/components/sections/RecentProjectsSection";
import { ProcessStepsSection } from "@/components/sections/ProcessStepsSection";
import { WhyChooseUsSection } from "@/components/sections/WhyChooseUsSection";
import { SolicitarOrcamentoSection } from "@/components/sections/SolicitarOrcamentoSection";

import { services as allServices } from "@/lib/data/services";
import { featuredProjects } from "@/lib/data/projects";

export default function HomePage() {
  const NAVY = brand.colors.navy;
  const ORANGE = brand.colors.orange;

  const processSteps = [
    { number: "01", title: "Levantamento e alinhamento", description: "Percebemos o contexto, validamos necessidades e pontos críticos." },
    { number: "02", title: "Proposta e planeamento", description: "Escopo claro, prazos definidos e plano de execução realista." },
    { number: "03", title: "Execução em campo", description: "Equipa coordenada, produtividade e foco em conformidade." },
    { number: "04", title: "Controlo e validações", description: "Verificações durante a execução para reduzir retrabalho." },
    { number: "05", title: "Entrega e suporte", description: "Entrega organizada e assistência pós-obra quando necessário." },
  ];

  const whyChooseUs = [
    { icon: Clock, title: "Prazos e planeamento", description: "Compromisso com prazos, frentes bem definidas e entrega consistente." },
    { icon: CheckCircle2, title: "Qualidade técnica", description: "Execução com boas práticas e validações durante a obra." },
    { icon: Users, title: "Equipa em campo", description: "Técnicos experientes, coordenação e foco em produtividade." },
    { icon: ShieldCheck, title: "Conformidade", description: "Organização, segurança operacional e comunicação profissional." },
    { icon: ClipboardCheck, title: "Escopo claro", description: "Orçamento estruturado, alinhamento e transparência nas fases." },
    { icon: CheckCircle2, title: "Pós-obra", description: "Suporte após entrega para ajustes e continuidade do serviço." },
  ];

  return (
    <>
      <HeroRotating images={["/hero/1.webp", "/hero/2.webp", "/hero/3.webp"]} intervalMs={9000} />

      {/* B2B: agora com CTA "Ver obras" + "Falar com equipa técnica" */}
      <B2BAuthoritySection
        NAVY={NAVY}
        ORANGE={ORANGE}
        worksHref="/obras"
        contactHref="/contactos"
      />

      <ServicesCarousel
        services={allServices}
        title="Serviços"
        subtitle="Serviços técnicos e especialidades para obra e manutenção — com rigor, organização e cumprimento."
        viewAllHref="/servicos"
      />

      <RecentProjectsSection NAVY={NAVY} ORANGE={ORANGE} projects={featuredProjects} />

      <ProcessStepsSection NAVY={NAVY} ORANGE={ORANGE} steps={processSteps} />

      <WhyChooseUsSection
        NAVY={NAVY}
        ORANGE={ORANGE}
        brandName={brand.name}
        items={whyChooseUs.map(({ title, description }) => ({ title, description }))}
        imageSrc="/sections/como-trabalhamos.png"
      />

      {/* CTA comercial já existe no Hero — aqui fica ok manter o formulário/contatos */}
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
