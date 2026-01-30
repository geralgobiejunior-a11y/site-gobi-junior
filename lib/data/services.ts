export interface Service {
  slug: string;
  name: string;
  shortDesc: string;
  fullDesc: string;
  category: 'principal' | 'complementar';
  icon: string;
  benefits: string[];
  whatIncludes: string[];
  areas: string[];
  faq: { q: string; a: string }[];
}

export const services: Service[] = [
  {
    slug: 'instalacoes-eletricas',
    name: 'Instalações Elétricas',
    shortDesc: 'Execução completa de instalações elétricas em obras residenciais e comerciais.',
    fullDesc: 'Serviço especializado de instalações elétricas, com equipas técnicas certificadas e experiência consolidada. Garantimos o cumprimento rigoroso das normas de segurança e qualidade, desde o projeto à conclusão.',
    category: 'principal',
    icon: 'Zap',
    benefits: [
      'Equipas técnicas certificadas',
      'Cumprimento das normas de segurança (RTIEBT)',
      'Materiais de qualidade certificada',
      'Testes e ensaios completos',
      'Documentação técnica organizada',
      'Pós-obra e assistência técnica'
    ],
    whatIncludes: [
      'Quadros elétricos e distribuição',
      'Cablagem e tubagens',
      'Iluminação interior e exterior',
      'Tomadas e pontos de força',
      'Sistemas de deteção (fumos, incêndio)',
      'Ligação de equipamentos AVAC',
      'Testes e certificações'
    ],
    areas: ['Residencial', 'Comercial', 'Serviços', 'Reabilitação'],
    faq: [
      {
        q: 'Quais as certificações da equipa?',
        a: 'A nossa equipa técnica possui certificações ITED/ITUR e formação contínua em normas RTIEBT, garantindo total conformidade legal e técnica.'
      },
      {
        q: 'Fornece documentação técnica?',
        a: 'Sim, entregamos toda a documentação técnica obrigatória: esquemas elétricos, certificados de conformidade e relatórios de ensaio.'
      },
      {
        q: 'Trabalham em coordenação com outros especialistas?',
        a: 'Sim, a nossa experiência em subempreitada permite total integração com outras equipas na obra.'
      }
    ]
  },
  {
    slug: 'pladur-tetos-falsos',
    name: 'Pladur e Tetos Falsos',
    shortDesc: 'Execução de divisórias, revestimentos e tetos falsos em gesso cartonado.',
    fullDesc: 'Especialistas na aplicação de sistemas de gesso cartonado (Pladur, Knauf), com soluções técnicas para divisórias, tetos falsos registáveis e revestimentos. Ideal para obras de acabamento e reabilitação.',
    category: 'principal',
    icon: 'Layers',
    benefits: [
      'Execução rápida e limpa',
      'Soluções acústicas e térmicas',
      'Tetos técnicos registáveis',
      'Acabamentos perfeitos',
      'Integração com iluminação e AVAC',
      'Flexibilidade de design'
    ],
    whatIncludes: [
      'Tetos falsos em gesso cartonado',
      'Tetos técnicos registáveis',
      'Divisórias interiores',
      'Revestimentos de paredes',
      'Isolamento acústico integrado',
      'Sancas e iluminação indirecta',
      'Tratamento de juntas e acabamentos'
    ],
    areas: ['Residencial', 'Comercial', 'Escritórios', 'Lojas'],
    faq: [
      {
        q: 'Que marcas de gesso cartonado utilizam?',
        a: 'Trabalhamos com marcas de referência como Pladur e Knauf, garantindo durabilidade e certificações técnicas.'
      },
      {
        q: 'É possível integrar iluminação LED nos tetos?',
        a: 'Sim, planeamos e integramos todo o tipo de iluminação, incluindo LED embutido e iluminação indirecta.'
      },
      {
        q: 'Os tetos são registáveis para manutenção?',
        a: 'Oferecemos tanto tetos fixos como sistemas registáveis, conforme a necessidade de acesso a instalações técnicas.'
      }
    ]
  },
  {
    slug: 'pintura',
    name: 'Pintura',
    shortDesc: 'Pintura interior e exterior com preparação rigorosa e acabamentos premium.',
    fullDesc: 'Serviço completo de pintura com preparação técnica das superfícies, aplicação de primários e acabamentos de alta qualidade. Garantimos uniformidade, durabilidade e prazos cumpridos.',
    category: 'principal',
    icon: 'Paintbrush',
    benefits: [
      'Preparação técnica das superfícies',
      'Tintas de qualidade certificada',
      'Acabamentos uniformes e duradouros',
      'Proteção de espaços e limpeza',
      'Consultoria de cores',
      'Garantia de trabalho'
    ],
    whatIncludes: [
      'Preparação e lixagem de superfícies',
      'Aplicação de primários',
      'Pintura interior (paredes e tetos)',
      'Pintura exterior (fachadas)',
      'Pinturas especiais (epoxi, lavável)',
      'Retoques e acabamentos finais',
      'Limpeza e proteção de espaços'
    ],
    areas: ['Residencial', 'Comercial', 'Exterior', 'Reabilitação'],
    faq: [
      {
        q: 'Que marcas de tinta utilizam?',
        a: 'Trabalhamos com marcas premium como CIN, Robbialac e Dyrup, selecionadas conforme o tipo de superfície e ambiente.'
      },
      {
        q: 'Incluem a preparação das paredes?',
        a: 'Sim, a preparação é fundamental: lixagem, correção de imperfeições, primários e massas quando necessário.'
      },
      {
        q: 'Quanto tempo demora a secar?',
        a: 'Depende do produto, mas geralmente 24-48h para secagem completa. Planeamos as fases para não atrasar a obra.'
      }
    ]
  },
  {
    slug: 'pavimentos',
    name: 'Pavimentos',
    shortDesc: 'Aplicação de pavimentos flutuantes, vinílicos e cerâmicos.',
    fullDesc: 'Instalação técnica de pavimentos com preparação adequada das bases, garantindo nivelamento e durabilidade. Oferecemos soluções para diferentes ambientes e orçamentos.',
    category: 'complementar',
    icon: 'Square',
    benefits: [
      'Nivelamento e preparação de bases',
      'Variedade de materiais',
      'Instalação certificada',
      'Acabamentos perfeitos'
    ],
    whatIncludes: [
      'Preparação e nivelamento de bases',
      'Pavimento flutuante (AC4, AC5)',
      'Pavimento vinílico (LVT, SPC)',
      'Rodapés e perfis de transição',
      'Isolamentos acústicos'
    ],
    areas: ['Residencial', 'Comercial'],
    faq: [
      {
        q: 'Incluem o nivelamento do pavimento existente?',
        a: 'Sim, avaliamos a base e executamos nivelamento quando necessário para garantir o correto assentamento.'
      },
      {
        q: 'Que tipo de pavimentos instalam?',
        a: 'Flutuante (madeira, laminado), vinílico (LVT, SPC) e apoio técnico na aplicação de cerâmicos.'
      }
    ]
  },
  {
    slug: 'revestimentos-ceramicos',
    name: 'Revestimentos Cerâmicos',
    shortDesc: 'Aplicação de azulejos e mosaicos em casas de banho e cozinhas.',
    fullDesc: 'Execução técnica de revestimentos cerâmicos com preparação de suportes, impermeabilização e acabamentos de qualidade. Experiência em casas de banho e cozinhas.',
    category: 'complementar',
    icon: 'Grid3x3',
    benefits: [
      'Preparação e impermeabilização',
      'Aplicação técnica certificada',
      'Juntas e acabamentos perfeitos',
      'Materiais de qualidade'
    ],
    whatIncludes: [
      'Impermeabilização de bases',
      'Aplicação de azulejos e mosaicos',
      'Revestimentos de parede e chão',
      'Juntas e acabamentos',
      'Cortes e furações técnicas'
    ],
    areas: ['Casas de banho', 'Cozinhas', 'Zonas húmidas'],
    faq: [
      {
        q: 'Fazem a impermeabilização prévia?',
        a: 'Sim, é fundamental e está incluída. Aplicamos sistemas certificados para evitar infiltrações.'
      },
      {
        q: 'Trabalham com materiais fornecidos pelo cliente?',
        a: 'Sim, podemos aplicar materiais fornecidos, desde que cumpram as especificações técnicas adequadas.'
      }
    ]
  },
  {
    slug: 'isolamento-termico-acustico',
    name: 'Isolamento Térmico e Acústico',
    shortDesc: 'Aplicação de isolamentos em paredes, tetos e pavimentos.',
    fullDesc: 'Soluções de isolamento térmico e acústico integradas com outros trabalhos de acabamento, melhorando o conforto e eficiência energética dos espaços.',
    category: 'complementar',
    icon: 'Waves',
    benefits: [
      'Melhoria de conforto térmico',
      'Redução de ruído',
      'Eficiência energética',
      'Integração com outros sistemas'
    ],
    whatIncludes: [
      'Isolamento de paredes interiores',
      'Isolamento de tetos falsos',
      'Isolamento acústico de pavimentos',
      'Materiais certificados (lã de rocha, XPS, EPS)',
      'Integração com pladur e revestimentos'
    ],
    areas: ['Residencial', 'Comercial', 'Reabilitação'],
    faq: [
      {
        q: 'Que materiais de isolamento utilizam?',
        a: 'Lã de rocha, XPS, EPS e outros materiais certificados, conforme a aplicação e requisitos térmicos/acústicos.'
      }
    ]
  },
  {
    slug: 'impermeabilizacoes-leves',
    name: 'Impermeabilizações Leves',
    shortDesc: 'Impermeabilização de casas de banho, varandas e zonas húmidas.',
    fullDesc: 'Aplicação técnica de sistemas de impermeabilização em zonas interiores húmidas, prevenindo infiltrações e garantindo durabilidade dos revestimentos.',
    category: 'complementar',
    icon: 'Droplets',
    benefits: [
      'Prevenção de infiltrações',
      'Sistemas certificados',
      'Garantia de aplicação',
      'Preparação técnica de suportes'
    ],
    whatIncludes: [
      'Impermeabilização de casas de banho',
      'Impermeabilização de varandas',
      'Tratamento de bases',
      'Testes de estanquidade',
      'Preparação para revestimento final'
    ],
    areas: ['Casas de banho', 'Cozinhas', 'Varandas', 'Lavandarias'],
    faq: [
      {
        q: 'É obrigatória a impermeabilização antes do azulejo?',
        a: 'Sim, em zonas húmidas é obrigatória por norma técnica e fundamental para evitar problemas futuros.'
      }
    ]
  },
  {
    slug: 'manutencao-tecnica',
    name: 'Manutenção Técnica',
    shortDesc: 'Assistência e pequenas intervenções em instalações elétricas e acabamentos.',
    fullDesc: 'Serviço de manutenção e assistência técnica para resolução de problemas pontuais, melhorias e pequenas intervenções em instalações elétricas e acabamentos.',
    category: 'complementar',
    icon: 'Wrench',
    benefits: [
      'Resposta rápida',
      'Técnicos qualificados',
      'Diagnóstico rigoroso',
      'Soluções eficazes'
    ],
    whatIncludes: [
      'Diagnóstico de avarias elétricas',
      'Reparações e melhorias',
      'Substituição de componentes',
      'Pequenas intervenções de acabamento',
      'Assistência pós-obra'
    ],
    areas: ['Residencial', 'Comercial'],
    faq: [
      {
        q: 'Têm serviço de urgência?',
        a: 'Para clientes de obras realizadas, oferecemos assistência prioritária. Contacte-nos para avaliarmos a situação.'
      }
    ]
  }
];

export const mainServices = services.filter(s => s.category === 'principal');
export const complementaryServices = services.filter(s => s.category === 'complementar');
