import { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { brand } from '@/lib/brand';

export const metadata: Metadata = {
  title: 'Política de Privacidade',
  description: 'Política de privacidade e proteção de dados da Gobi & Júnior.',
};

export default function PrivacyPage() {
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
            Política de Privacidade
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
                1. Introdução
              </h2>
              <p>
                A <strong>{brand.name}</strong> respeita a privacidade dos seus clientes e visitantes do website. Esta Política de Privacidade explica como recolhemos, utilizamos e protegemos os seus dados pessoais, em conformidade com o Regulamento Geral de Proteção de Dados (RGPD).
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4" style={{ color: brand.colors.navy }}>
                2. Dados Recolhidos
              </h2>
              <p>Podemos recolher os seguintes dados pessoais:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Nome completo</li>
                <li>Endereço de email</li>
                <li>Número de telefone</li>
                <li>Localidade</li>
                <li>Informações sobre o projeto pretendido</li>
                <li>Ficheiros anexados (plantas, fotografias, etc.)</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4" style={{ color: brand.colors.navy }}>
                3. Finalidade do Tratamento
              </h2>
              <p>Os dados pessoais recolhidos são utilizados para:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Responder a pedidos de informação e orçamento</li>
                <li>Agendar visitas técnicas</li>
                <li>Preparar propostas comerciais</li>
                <li>Executar e acompanhar projetos contratados</li>
                <li>Comunicar informações relevantes sobre os serviços</li>
                <li>Cumprir obrigações legais e contratuais</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4" style={{ color: brand.colors.navy }}>
                4. Base Legal
              </h2>
              <p>
                O tratamento dos seus dados pessoais tem como base legal:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>O seu consentimento expresso</li>
                <li>A execução de contrato ou diligências pré-contratuais</li>
                <li>O cumprimento de obrigações legais</li>
                <li>Interesses legítimos da empresa</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4" style={{ color: brand.colors.navy }}>
                5. Partilha de Dados
              </h2>
              <p>
                Os seus dados pessoais não serão vendidos, cedidos ou partilhados com terceiros, exceto:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Quando necessário para a execução do serviço contratado</li>
                <li>Com prestadores de serviços que nos auxiliam (sob confidencialidade)</li>
                <li>Quando exigido por lei ou autoridade competente</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4" style={{ color: brand.colors.navy }}>
                6. Segurança dos Dados
              </h2>
              <p>
                Implementamos medidas técnicas e organizativas adequadas para proteger os seus dados pessoais contra acesso não autorizado, perda, destruição ou alteração. O acesso aos dados é restrito a colaboradores autorizados.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4" style={{ color: brand.colors.navy }}>
                7. Retenção de Dados
              </h2>
              <p>
                Os dados pessoais serão conservados apenas pelo período necessário para as finalidades indicadas, respeitando os prazos legais aplicáveis. Após este período, os dados serão eliminados de forma segura.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4" style={{ color: brand.colors.navy }}>
                8. Direitos do Titular
              </h2>
              <p>Nos termos do RGPD, tem o direito de:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Aceder aos seus dados pessoais</li>
                <li>Retificar dados incorretos ou desatualizados</li>
                <li>Apagar os seus dados ("direito ao esquecimento")</li>
                <li>Limitar o tratamento dos seus dados</li>
                <li>Opor-se ao tratamento dos seus dados</li>
                <li>Solicitar a portabilidade dos dados</li>
                <li>Retirar o consentimento a qualquer momento</li>
              </ul>
              <p className="mt-4">
                Para exercer estes direitos, contacte-nos através de <a href={`mailto:${brand.contact.email}`} className="text-[#F5A623] hover:underline">{brand.contact.email}</a>
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4" style={{ color: brand.colors.navy }}>
                9. Cookies
              </h2>
              <p>
                O nosso website pode utilizar cookies para melhorar a experiência de navegação. Os cookies são pequenos ficheiros armazenados no seu dispositivo que nos ajudam a compreender como o site é utilizado.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4" style={{ color: brand.colors.navy }}>
                10. Alterações à Política
              </h2>
              <p>
                Reservamo-nos o direito de atualizar esta Política de Privacidade. Quaisquer alterações serão publicadas nesta página com a data de atualização.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4" style={{ color: brand.colors.navy }}>
                11. Contactos
              </h2>
              <p>
                Para questões relacionadas com a proteção de dados pessoais, contacte-nos:
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
