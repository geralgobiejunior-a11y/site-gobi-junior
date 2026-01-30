import { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { brand } from '@/lib/brand';

export const metadata: Metadata = {
  title: 'Termos e Condições',
  description: 'Termos e condições de utilização do website e serviços da Gobi & Júnior.',
};

export default function TermsPage() {
  return (
    <>
      <section className="bg-gradient-to-br from-[#0B4F8A] to-[#084170] text-white py-16 lg:py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <Button variant="ghost" asChild className="text-white hover:text-gray-200 mb-6">
            <Link href="/">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Voltar ao Início
            </Link>
          </Button>
          <h1 className="text-4xl lg:text-5xl font-bold mb-4">
            Termos e Condições
          </h1>
          <p className="text-lg text-gray-200">
            Última atualização: {new Date().toLocaleDateString('pt-PT')}
          </p>
        </div>
      </section>

      <section className="py-16 lg:py-20 bg-white">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 prose prose-lg max-w-none">
          <div className="space-y-8 text-gray-700">
            <div>
              <h2 className="text-2xl font-bold mb-4" style={{ color: brand.colors.navy }}>
                1. Objeto
              </h2>
              <p>
                Os presentes Termos e Condições regulam a utilização do website da <strong>{brand.name}</strong> e a prestação de serviços técnicos na área da construção.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4" style={{ color: brand.colors.navy }}>
                2. Serviços Prestados
              </h2>
              <p>
                A {brand.name} presta serviços especializados de:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Instalações elétricas</li>
                <li>Pladur e tetos falsos</li>
                <li>Pintura</li>
                <li>Outros serviços complementares na área da construção</li>
              </ul>
              <p className="mt-4">
                Os serviços são prestados mediante proposta aceite pelo cliente, que define o âmbito, prazo e valor dos trabalhos.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4" style={{ color: brand.colors.navy }}>
                3. Orçamentos e Propostas
              </h2>
              <p>
                Os orçamentos fornecidos são válidos por 30 dias, salvo indicação em contrário. A proposta detalhada inclui:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Descrição dos trabalhos a executar</li>
                <li>Materiais a aplicar (quando aplicável)</li>
                <li>Prazo estimado de execução</li>
                <li>Valor total e condições de pagamento</li>
                <li>Condições específicas do projeto</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4" style={{ color: brand.colors.navy }}>
                4. Aceitação da Proposta
              </h2>
              <p>
                A aceitação da proposta comercial pelo cliente constitui a formalização do contrato. O início dos trabalhos fica sujeito ao cumprimento das condições acordadas, nomeadamente:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Assinatura da proposta ou confirmação por escrito</li>
                <li>Pagamento de sinal, quando aplicável</li>
                <li>Disponibilização das condições de trabalho no local</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4" style={{ color: brand.colors.navy }}>
                5. Execução dos Trabalhos
              </h2>
              <p>
                A {brand.name} compromete-se a:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Executar os trabalhos com qualidade técnica e profissionalismo</li>
                <li>Cumprir os prazos acordados, salvo situações de força maior</li>
                <li>Utilizar materiais de qualidade certificada</li>
                <li>Cumprir todas as normas técnicas e de segurança aplicáveis</li>
                <li>Manter a organização e limpeza do espaço de trabalho</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4" style={{ color: brand.colors.navy }}>
                6. Obrigações do Cliente
              </h2>
              <p>
                O cliente compromete-se a:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Garantir o acesso ao local de trabalho</li>
                <li>Assegurar condições básicas de trabalho (água, eletricidade)</li>
                <li>Fornecer informações completas e corretas sobre o projeto</li>
                <li>Efetuar os pagamentos nos prazos acordados</li>
                <li>Comunicar atempadamente qualquer alteração desejada</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4" style={{ color: brand.colors.navy }}>
                7. Condições de Pagamento
              </h2>
              <p>
                As condições de pagamento são definidas na proposta comercial. Regra geral:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Sinal: percentagem acordada no início dos trabalhos</li>
                <li>Faseamento: conforme evolução dos trabalhos</li>
                <li>Pagamento final: após conclusão e verificação dos trabalhos</li>
              </ul>
              <p className="mt-4">
                O não cumprimento dos prazos de pagamento pode resultar na suspensão dos trabalhos.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4" style={{ color: brand.colors.navy }}>
                8. Alterações ao Projeto
              </h2>
              <p>
                Quaisquer alterações ao projeto inicial devem ser comunicadas por escrito e estão sujeitas a reavaliação de prazo e valor. Trabalhos adicionais não contemplados na proposta inicial serão orçamentados separadamente.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4" style={{ color: brand.colors.navy }}>
                9. Garantias
              </h2>
              <p>
                Os trabalhos executados beneficiam de garantia de execução, nos termos legais aplicáveis. As instalações elétricas são acompanhadas de certificação de conformidade.
              </p>
              <p className="mt-4">
                A garantia não cobre:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Danos resultantes de uso inadequado</li>
                <li>Alterações efetuadas por terceiros</li>
                <li>Desgaste natural dos materiais</li>
                <li>Falta de manutenção adequada</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4" style={{ color: brand.colors.navy }}>
                10. Responsabilidades
              </h2>
              <p>
                A {brand.name} possui seguro de responsabilidade civil adequado à sua atividade. A empresa não se responsabiliza por:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Danos em estruturas pré-existentes com patologias não identificadas</li>
                <li>Atrasos causados por condições não imputáveis à empresa</li>
                <li>Prejuízos indiretos ou lucros cessantes</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4" style={{ color: brand.colors.navy }}>
                11. Rescisão
              </h2>
              <p>
                O contrato pode ser rescindido por acordo entre as partes. Em caso de rescisão unilateral:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Pelo cliente: pagamento dos trabalhos já executados e materiais adquiridos</li>
                <li>Pela empresa: apenas em situações de incumprimento grave pelo cliente</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4" style={{ color: brand.colors.navy }}>
                12. Propriedade Intelectual
              </h2>
              <p>
                Todos os conteúdos do website (textos, imagens, logotipos) são propriedade da {brand.name} e estão protegidos por direitos de autor. A reprodução não autorizada é proibida.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4" style={{ color: brand.colors.navy }}>
                13. Resolução de Litígios
              </h2>
              <p>
                Para resolução de eventuais litígios, as partes comprometem-se a privilegiar o diálogo e a negociação. Na impossibilidade de acordo, aplicar-se-á a lei portuguesa e serão competentes os tribunais da comarca de Lisboa.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4" style={{ color: brand.colors.navy }}>
                14. Contactos
              </h2>
              <p>
                Para questões relacionadas com estes Termos e Condições:
              </p>
              <ul className="list-none space-y-2 mt-4">
                <li><strong>Email:</strong> <a href={`mailto:${brand.contact.email}`} className="text-[#F5A623] hover:underline">{brand.contact.email}</a></li>
                <li><strong>Telefone:</strong> {brand.contact.phone}</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
