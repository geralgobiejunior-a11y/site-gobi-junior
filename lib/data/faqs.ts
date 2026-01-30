export interface FAQ {
  id: string;
  question: string;
  answer: string;
  category: string;
}

export const faqs: FAQ[] = [
  {
    id: '1',
    question: 'Que tipo de obras realizam?',
    answer: 'Especializamo-nos em instalações elétricas, pladur/tetos falsos e pintura, com serviços complementares de pavimentos, revestimentos, isolamento e impermeabilização. Atuamos principalmente em subempreitada técnica para obras residenciais e comerciais.',
    category: 'geral'
  },
  {
    id: '2',
    question: 'Trabalham em que zonas?',
    answer: 'Atuamos em Lisboa e concelhos limítrofes: Cascais, Sintra, Oeiras, Loures, Odivelas e Amadora. Para projetos de maior dimensão, podemos avaliar outras localizações.',
    category: 'geral'
  },
  {
    id: '3',
    question: 'Como funciona o processo de orçamento?',
    answer: 'Após o primeiro contacto, agendamos uma visita técnica ao local (quando aplicável) para analisar o trabalho. Elaboramos uma proposta detalhada com âmbito, prazos e valor. Esclarecemos todas as dúvidas antes de iniciar.',
    category: 'geral'
  },
  {
    id: '4',
    question: 'Fornecem materiais ou só mão de obra?',
    answer: 'Podemos trabalhar em ambos os formatos: fornecimento e aplicação de materiais, ou apenas mão de obra com materiais fornecidos pelo cliente/empreiteiro geral. Indicamos sempre as especificações técnicas necessárias.',
    category: 'orcamento'
  },
  {
    id: '5',
    question: 'Quanto tempo demora um projeto?',
    answer: 'Depende da dimensão e complexidade. Uma instalação elétrica residencial (120m²) leva cerca de 2-3 semanas. Tetos falsos e pintura de apartamento: 1-2 semanas. Fornecemos sempre cronograma detalhado na proposta.',
    category: 'prazo'
  },
  {
    id: '6',
    question: 'Garantem os trabalhos executados?',
    answer: 'Sim. Todos os trabalhos têm garantia de execução. Na parte elétrica, entregamos certificados de conformidade. Oferecemos ainda assistência pós-obra para qualquer ajuste necessário.',
    category: 'garantia'
  },
  {
    id: '7',
    question: 'Trabalham ao fim de semana?',
    answer: 'O nosso horário normal é de segunda a sexta, mas podemos avaliar trabalhos ao sábado conforme a disponibilidade da equipa e as características do projeto.',
    category: 'prazo'
  },
  {
    id: '8',
    question: 'Fazem obras de raiz ou só remodelações?',
    answer: 'Executamos ambos: obras novas (geralmente em subempreitada) e remodelações/reabilitações. A nossa experiência permite-nos adaptar a qualquer cenário.',
    category: 'geral'
  }
];
