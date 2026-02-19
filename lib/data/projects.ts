export interface Project {
  slug: string;
  title: string;
  location: string;
  year: string;
  category: string[];
  featured: boolean;
  thumbnail: string;
  images: string[];
  description: string;
  scope: string[];
  area: string;
  duration: string;
  results: string[];
}

export const projects: Project[] = [
  {
    slug: "garridas-1867",
    title: "Garridas 1867",
    location: "Lisboa",
    year: "2025 – Em execução",
    category: ["Hidráulica", "Infraestruturas"],
    featured: true,
    thumbnail: "/obras/Garridas1867.JPG",
    images: ["/obras/Garridas1867.JPG"],
    description:
      "Empreendimento residencial de grande dimensão localizado em Lisboa, inserido num projeto urbano de elevada exigência técnica. A nossa equipa é responsável pela execução integral das infraestruturas hidráulicas, assegurando sistemas de abastecimento de água, redes de esgoto, drenagens, instalação de aparelhos sanitários, torneiras, sistemas de bombagem e todos os equipamentos associados. O projeto encontra-se atualmente em execução, com foco rigoroso na qualidade técnica, coordenação em obra e cumprimento dos prazos estabelecidos.",
    scope: [
      "Instalação completa de redes de água fria e quente",
      "Execução de redes de esgoto e drenagem",
      "Montagem de sanitas, lavatórios, pias e torneiras",
      "Instalação de sistemas de bombagem e reforço de pressão",
      "Testes de estanquidade e validações técnicas",
      "Coordenação com restantes especialidades em obra"
    ],
    area: "Empreendimento residencial de larga escala",
    duration: "06/08/2025 – 25/05/2027 (em execução)",
    results: [
      "Infraestrutura hidráulica robusta e segura",
      "Execução técnica conforme normas regulamentares",
      "Integração eficiente com planeamento geral da obra",
      "Elevado padrão de organização e controlo em obra"
    ],
  },

  {
    slug: "cascais-bay",
    title: "Cascais Bay",
    location: "Cascais",
    year: "2024 – Em execução",
    category: ["Hidráulica", "Infraestruturas"],
    featured: true,
    thumbnail: "/obras/CascaisBay.JPG",
    images: ["/obras/CascaisBay.JPG"],
    description:
      "Projeto residencial situado em Cascais, numa zona de elevada valorização urbana. A intervenção da nossa equipa contempla toda a componente hidráulica do empreendimento, incluindo sistemas completos de abastecimento de água, redes de esgoto, instalação de equipamentos sanitários, torneiras, sistemas de bombagem e máquinas associadas à rede hidráulica. O projeto está em execução, garantindo elevados padrões de qualidade, organização técnica e cumprimento rigoroso das normas de construção.",
    scope: [
      "Execução de redes hidráulicas completas",
      "Instalação de sistemas de escoamento e drenagem",
      "Montagem de sanitas, pias, torneiras e acessórios sanitários",
      "Instalação e parametrização de bombas de água",
      "Ensaios técnicos e controlo de qualidade",
      "Acompanhamento contínuo em coordenação com direção de obra"
    ],
    area: "Complexo residencial multifração",
    duration: "07/05/2024 – 31/03/2026 (em execução)",
    results: [
      "Sistemas hidráulicos eficientes e duráveis",
      "Conformidade com normas técnicas e de segurança",
      "Organização e controlo rigoroso em obra",
      "Execução alinhada com o planeamento geral do empreendimento"
    ],
  },

  {
    slug: "kings-college-cascais",
    title: "King’s College School, Cascais",
    location: "Cascais",
    year: "2023 – Concluído",
    category: ["Hidráulica", "Infraestruturas"],
    featured: true,
    thumbnail: "/obras/KingsCollege.JPG",
    images: ["/obras/KingsCollege.JPG"],
    description:
      "Campus escolar internacional de elevada dimensão e exigência técnica, inserido num projeto educativo de referência em Cascais. A nossa equipa executou integralmente a infraestrutura hidráulica do complexo, incluindo redes de abastecimento de água, sistemas de esgoto, drenagens, instalação de aparelhos sanitários, torneiras, equipamentos técnicos e sistemas de bombagem. O projeto foi concluído com sucesso, assegurando qualidade, funcionalidade e conformidade total com os requisitos técnicos e regulamentares.",
    scope: [
      "Execução de redes de água fria e quente em edifícios escolares",
      "Instalação de redes de esgoto e drenagem",
      "Montagem de equipamentos sanitários completos",
      "Instalação de sistemas de bombagem e reforço hidráulico",
      "Testes finais e validações técnicas",
      "Entrega técnica organizada e documentada"
    ],
    area: "Campus escolar internacional",
    duration: "27/04/2023 – 01/09/2023 (concluído)",
    results: [
      "Infraestrutura hidráulica plenamente operacional",
      "Entrega dentro do prazo estabelecido",
      "Elevado padrão técnico e de segurança",
      "Projeto finalizado com validação e conformidade total"
    ],
  },
];

export const featuredProjects = projects.filter((p) => p.featured);
