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
    year: "2024",
    category: ["Elétrica", "Pladur", "Pintura"],
    featured: true,
    thumbnail: "/obras/Garridas1867.JPG",
    images: ["/obras/Garridas1867.JPG"],
    description:
      "Execução de trabalhos técnicos e acabamentos com coordenação em obra e foco em prazos e qualidade.",
    scope: [
      "Instalações elétricas e pontos",
      "Ajustes e acabamentos em obra",
      "Coordenação com outras especialidades",
      "Entrega organizada e validações finais",
    ],
    area: "—",
    duration: "—",
    results: [
      "Cumprimento de prazos acordados",
      "Execução técnica com rigor",
      "Organização em obra",
      "Cliente satisfeito",
    ],
  },
  {
    slug: "cascais-bay",
    title: "Cascais Bay",
    location: "Cascais",
    year: "2024",
    category: ["Elétrica", "Remodelação"],
    featured: true,
    thumbnail: "/obras/CascaisBay.JPG",
    images: ["/obras/CascaisBay.JPG"],
    description:
      "Intervenção com foco em qualidade de execução, organização e integração com o restante planeamento da obra.",
    scope: [
      "Trabalhos elétricos e validações",
      "Ajustes de instalação e acabamentos",
      "Coordenação com equipas em obra",
      "Controlo de qualidade por etapas",
    ],
    area: "—",
    duration: "—",
    results: [
      "Execução consistente e limpa",
      "Conformidade e boas práticas",
      "Comunicação clara em obra",
      "Entrega sem retrabalho",
    ],
  },
  {
    slug: "kings-college-cascais",
    title: "King’s College School, Cascais",
    location: "Cascais",
    year: "2024",
    category: ["Elétrica", "Manutenção"],
    featured: true,
    thumbnail: "/obras/KingsCollege.JPG",
    images: ["/obras/KingsCollege.JPG"],
    description:
      "Serviço técnico com foco em segurança, cumprimento e qualidade — com acompanhamento e controlo em obra.",
    scope: [
      "Trabalhos elétricos e suporte técnico",
      "Verificações e melhorias",
      "Organização e segurança em obra",
      "Fecho e validação final",
    ],
    area: "—",
    duration: "—",
    results: [
      "Maior segurança e fiabilidade",
      "Trabalho organizado",
      "Cumprimento do planeado",
      "Resultado final consistente",
    ],
  },
];

export const featuredProjects = projects.filter((p) => p.featured);
