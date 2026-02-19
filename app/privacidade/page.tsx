import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowLeft,
  ShieldCheck,
  FileText,
  Users,
  Scale,
  Share2,
  Lock,
  Clock,
  BadgeCheck,
  Cookie,
  RefreshCw,
  Mail,
  Phone,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { brand } from "@/lib/brand";

export const metadata: Metadata = {
  title: "Política de Privacidade | Gobi & Júnior",
  description: "Política de privacidade e proteção de dados (RGPD) da Gobi & Júnior.",
};

const LAST_UPDATED = "19/02/2026"; // muda manualmente quando atualizar o texto

export default function PrivacyPage() {
  const NAVY = brand.colors.navy;
  const ORANGE = brand.colors.orange;

  const company = {
    name: "GOBI & JUNIOR, LDA",
    nif: "519159586",
  };

  const mail = brand.contact.email;
  const phone = brand.contact.phone;

  const mailHref = mail ? `mailto:${mail}` : "#";
  const phoneDigits = (phone || "").replace(/\D/g, "");
  const telHref = phoneDigits ? `tel:${phoneDigits}` : "#";

  return (
    <section className="bg-white py-10 lg:py-14">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        {/* Top bar */}
        <div className="flex items-center justify-between gap-4">
          <Button variant="ghost" asChild className="hover:bg-gray-100">
            <Link href="/">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Voltar ao Início
            </Link>
          </Button>

          <div className="hidden sm:flex items-center gap-2 rounded-full border border-gray-200 bg-white px-4 py-2 text-sm text-gray-700">
            <ShieldCheck className="h-4 w-4" style={{ color: ORANGE }} />
            <span className="font-semibold">RGPD • Privacidade</span>
            <span className="text-gray-400">Atualizado em {LAST_UPDATED}</span>
          </div>
        </div>

        {/* Main card (como Diâmetro) */}
        <div className="mt-6 rounded-3xl border border-gray-100 shadow-sm">
          <div className="p-6 sm:p-10">
            {/* mobile chip */}
            <div className="sm:hidden inline-flex items-center gap-2 rounded-full border border-gray-200 bg-white px-4 py-2 text-sm text-gray-700">
              <ShieldCheck className="h-4 w-4" style={{ color: ORANGE }} />
              <span className="font-semibold">RGPD • Privacidade</span>
              <span className="text-gray-400">Atualizado em {LAST_UPDATED}</span>
            </div>

            <h1 className="mt-4 text-4xl font-extrabold tracking-tight" style={{ color: NAVY }}>
              Política de Privacidade
            </h1>

            <p className="mt-3 max-w-3xl text-gray-600">
              Esta Política explica como tratamos dados pessoais quando utiliza o nosso website
              ou quando nos contacta para informações, orçamentos ou marcações.
            </p>

            {/* Cards topo */}
            <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-3">
              <InfoCard
                title="Responsável"
                value={`${company.name}\nNIF: ${company.nif}`}
                icon={<BadgeCheck className="h-5 w-5" />}
                accent={ORANGE}
              />
              <InfoCard
                title="Contacto"
                value={mail || "—"}
                icon={<Mail className="h-5 w-5" />}
                accent={ORANGE}
                href={mailHref}
              />
              <InfoCard
                title="Telefone"
                value={phone || "—"}
                icon={<Phone className="h-5 w-5" />}
                accent={ORANGE}
                href={telHref}
              />
            </div>

            {/* Divider */}
            <div className="mt-10 border-t border-gray-100 pt-10 space-y-10">
              <Section n="1" title="Âmbito" icon={<FileText className="h-5 w-5" />} accent={ORANGE}>
                <p className="text-gray-700">
                  Aplicamos esta Política ao tratamento de dados pessoais recolhidos através do website
                  (por exemplo, formulários) e de comunicações iniciadas pelo utilizador (email, telefone ou WhatsApp).
                </p>
              </Section>

              <Section
                n="2"
                title="Dados pessoais que podemos tratar"
                icon={<Users className="h-5 w-5" />}
                accent={ORANGE}
              >
                <ul className="mt-2 space-y-2 text-gray-700 list-disc pl-6">
                  <li><strong>Identificação e contacto:</strong> nome, email, telefone.</li>
                  <li><strong>Conteúdo da mensagem:</strong> pedido/orçamento e detalhes enviados.</li>
                  <li><strong>Dados técnicos:</strong> endereço IP, browser/dispositivo, páginas visitadas (quando aplicável).</li>
                </ul>
              </Section>

              <Section
                n="3"
                title="Finalidades e base legal"
                icon={<Scale className="h-5 w-5" />}
                accent={ORANGE}
              >
                <ul className="mt-2 space-y-2 text-gray-700 list-disc pl-6">
                  <li><strong>Resposta a contactos e orçamentos</strong> (diligências pré-contratuais / execução de contrato).</li>
                  <li><strong>Comunicação com o utilizador</strong> (interesse legítimo e/ou diligências pré-contratuais).</li>
                  <li><strong>Cumprimento de obrigações legais</strong> (quando aplicável).</li>
                  <li><strong>Segurança e melhoria do website</strong> (interesse legítimo).</li>
                </ul>
              </Section>

              <Section
                n="4"
                title="Partilha de dados"
                icon={<Share2 className="h-5 w-5" />}
                accent={ORANGE}
              >
                <p className="text-gray-700">
                  Não vendemos dados pessoais. Podemos partilhar dados com prestadores de serviços necessários
                  para a operação (ex.: alojamento, email/formulários), sob dever de confidencialidade,
                  ou quando exigido por lei/autoridade competente.
                </p>
              </Section>

              <Section n="5" title="Segurança" icon={<Lock className="h-5 w-5" />} accent={ORANGE}>
                <p className="text-gray-700">
                  Aplicamos medidas técnicas e organizativas adequadas para proteger os dados contra acesso não autorizado,
                  alteração, perda ou divulgação indevida.
                </p>
              </Section>

              <Section
                n="6"
                title="Prazo de conservação"
                icon={<Clock className="h-5 w-5" />}
                accent={ORANGE}
              >
                <p className="text-gray-700">
                  Conservamos os dados pelo tempo necessário às finalidades descritas e, quando aplicável, pelos prazos legais.
                  Pedidos de contacto/orçamento são mantidos pelo período necessário para gestão do pedido e histórico operacional.
                </p>
              </Section>

              <Section
                n="7"
                title="Direitos do titular dos dados"
                icon={<BadgeCheck className="h-5 w-5" />}
                accent={ORANGE}
              >
                <p className="text-gray-700">
                  Nos termos do RGPD, pode solicitar acesso, retificação, apagamento, limitação, oposição e portabilidade.
                  Para exercer direitos, contacte:{" "}
                  <a href={mailHref} className="font-semibold hover:underline" style={{ color: ORANGE }}>
                    {mail}
                  </a>.
                </p>
                <p className="mt-2 text-gray-700">
                  Pode também apresentar reclamação junto da <strong>CNPD</strong> (Comissão Nacional de Proteção de Dados).
                </p>
              </Section>

              <Section n="8" title="Cookies" icon={<Cookie className="h-5 w-5" />} accent={ORANGE}>
                <p className="text-gray-700">
                  O website pode utilizar cookies estritamente necessários ao funcionamento e, quando aplicável,
                  cookies de medição/estatística mediante consentimento. Pode gerir cookies nas definições do seu navegador.
                </p>
              </Section>

              <Section
                n="9"
                title="Alterações a esta Política"
                icon={<RefreshCw className="h-5 w-5" />}
                accent={ORANGE}
              >
                <p className="text-gray-700">
                  Podemos atualizar esta Política para refletir melhorias do serviço ou alterações legais.
                  A data “Atualizado em” indica a versão em vigor.
                </p>
              </Section>

              {/* CTA */}
              <div className="rounded-3xl border border-gray-100 bg-gray-50 p-6 sm:p-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <p className="text-lg font-extrabold" style={{ color: NAVY }}>
                    Precisa de esclarecer algo sobre privacidade?
                  </p>
                  <p className="text-gray-600">Responderemos com a maior brevidade possível.</p>
                </div>

                <div className="flex flex-col sm:flex-row gap-3">
                  <a
                    href={mailHref}
                    className="inline-flex h-11 items-center justify-center rounded-2xl px-5 text-sm font-extrabold text-white shadow-sm hover:opacity-95"
                    style={{ backgroundColor: NAVY }}
                  >
                    <Mail className="mr-2 h-4 w-4" />
                    Enviar email
                  </a>
                  <a
                    href={telHref}
                    className="inline-flex h-11 items-center justify-center rounded-2xl px-5 text-sm font-extrabold border border-gray-200 bg-white hover:bg-gray-50"
                  >
                    <Phone className="mr-2 h-4 w-4" style={{ color: ORANGE }} />
                    Ligar
                  </a>
                </div>
              </div>

              <div className="pt-2">
                <Link href="/contactos" className="text-sm font-semibold hover:underline" style={{ color: ORANGE }}>
                  Ver Contactos
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Pequeno rodapé discreto */}
        <p className="mt-6 text-xs text-gray-400">
          Documento informativo. Para casos específicos, poderá ser necessário aconselhamento jurídico.
        </p>
      </div>
    </section>
  );
}

function InfoCard({
  title,
  value,
  icon,
  accent,
  href,
}: {
  title: string;
  value: string;
  icon: React.ReactNode;
  accent: string;
  href?: string;
}) {
  const content = (
    <Card className="border border-gray-100 shadow-sm hover:shadow-md transition-shadow rounded-2xl">
      <CardContent className="p-5">
        <div className="flex items-start gap-3">
          <span
            className="mt-0.5 inline-flex h-10 w-10 items-center justify-center rounded-2xl"
            style={{ backgroundColor: `${accent}1A`, color: accent }}
          >
            {icon}
          </span>
          <div>
            <p className="text-sm font-extrabold text-gray-900">{title}</p>
            <p className="mt-1 text-sm text-gray-600 whitespace-pre-line break-words">{value}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );

  if (!href || href === "#") return content;

  return (
    <a href={href} className="block">
      {content}
    </a>
  );
}

function Section({
  n,
  title,
  icon,
  accent,
  children,
}: {
  n: string;
  title: string;
  icon: React.ReactNode;
  accent: string;
  children: React.ReactNode;
}) {
  return (
    <div className="space-y-3">
      <div className="flex items-center gap-3">
        <span
          className="inline-flex h-10 w-10 items-center justify-center rounded-2xl font-extrabold"
          style={{ backgroundColor: `${accent}1A`, color: accent }}
        >
          {n}
        </span>
        <h2 className="text-xl sm:text-2xl font-extrabold text-gray-900 flex items-center gap-2">
          <span style={{ color: accent }}>{icon}</span>
          {title}
        </h2>
      </div>
      <div>{children}</div>
    </div>
  );
}
