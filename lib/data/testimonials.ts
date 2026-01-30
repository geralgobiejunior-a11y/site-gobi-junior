export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company?: string;
  text: string;
  rating: number;
  project?: string;
}

export const testimonials: Testimonial[] = [
  {
    id: '1',
    name: 'Carlos Mendes',
    role: 'Proprietário',
    text: 'Excelente trabalho na instalação elétrica da nossa moradia. Equipa profissional, cumprimento de prazos e total disponibilidade para esclarecimentos. Recomendo sem reservas.',
    rating: 5,
    project: 'Moradia em Cascais'
  },
  {
    id: '2',
    name: 'Ana Silva',
    role: 'Gestora de Facilities',
    company: 'Empresa XYZ',
    text: 'Contratámos a Gobi & Júnior para a remodelação dos nossos escritórios. O resultado superou as expectativas: organização, limpeza e coordenação impecável com as outras equipas.',
    rating: 5,
    project: 'Escritórios em Lisboa'
  },
  {
    id: '3',
    name: 'João Pereira',
    role: 'Arquiteto',
    text: 'Trabalho com a Gobi & Júnior em vários projetos. A capacidade técnica, rigor e cumprimento de prazos fazem deles um parceiro de confiança. A documentação técnica é sempre entregue completa e organizada.',
    rating: 5
  },
  {
    id: '4',
    name: 'Mariana Costa',
    role: 'Proprietária',
    text: 'Remodelação completa do nosso apartamento. Desde a parte elétrica à pintura, tudo foi executado com qualidade. Destaco a limpeza no final de cada dia de trabalho e o respeito pelos prazos.',
    rating: 5,
    project: 'Apartamento em Oeiras'
  },
  {
    id: '5',
    name: 'Ricardo Fonseca',
    role: 'Empreiteiro',
    text: 'Subcontrato a Gobi & Júnior para a parte elétrica e pladur das minhas obras. Confiança total na execução, zero surpresas e sempre disponíveis para resolver qualquer imprevisto.',
    rating: 5
  },
  {
    id: '6',
    name: 'Sofia Rodrigues',
    role: 'Proprietária de Loja',
    text: 'Adaptaram o espaço da nossa loja com profissionalismo e atenção aos detalhes. A iluminação ficou exatamente como queríamos e o prazo foi cumprido para conseguirmos abrir a tempo.',
    rating: 5,
    project: 'Loja em Sintra'
  }
];
