import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowLeft,
  FileText,
  BadgeCheck,
  Mail,
  Phone,
  ShieldCheck,
  Building2,
  Globe,
  Gavel,
  Copyright,
  Link2,
  RefreshCw,
  Scale,
  Wallet,
  Wrench,
  ClipboardList,
  AlertTriangle,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { brand } from "@/lib/brand";

export const metadata: Metadata = {
  title: "Termos e Condições | Gobi & Júnior",
  description: "Termos e condições de utilização do website e prestação de serviços da Gobi & Júnior.",
};

const LAST_UPDATED = "19/02/2026"; // muda manualmente quando atualizar

export default function TermsPage() {
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
            <span className="font-semibold">Termos • Condições</span>
            <span className="text-gray-400">Atualizado em {LAST_UPDATED}</span>
          </div>
        </div>

        {/* Main card */}
        <div className="mt-6 rounded-3xl border border-gray-100 shadow-sm">
          <div className="p-6 sm:p-10">
            {/* mobile chip */}
            <div className="sm:hidden inline-flex items-center gap-2 rounded-full border border-gray-200 bg-white px-4 py-2 text-sm text-gray-700">
              <ShieldCheck className="h-4 w-4" style={{ color: ORANGE }} />
              <span className="font-semibold">Termos • Condições</span>
              <span className="text-gray-400">Atualizado em {LAST_UPDATED}</span>
            </div>

            <h1 className="mt-4 text-4xl font-extrabold tracking-tight" style={{ color: NAVY }}>
              Termos e Condições
            </h1>

            <p className="mt-3 max-w-3xl text-gray-600">
              Ao aceder e utilizar este website, o utilizador concorda com os presentes Termos e Condições.
              Se não concordar, deve abster-se de utilizar o website.
            </p>

            {/* Cards topo */}
            <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-3">
              <InfoCard
                title="Entidade"
                value={`${company.name}\nNIF: ${company.nif}`}
                icon={<Building2 className="h-5 w-5" />}
                accent={ORANGE}
              />
              <InfoCard
                title="Email"
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
              <Section n="1" title="Identificação do operador" icon={<BadgeCheck className="h-5 w-5" />} accent={ORANGE}>
                <p className="text-gray-700">
                  O website é operado por <strong>{company.name}</strong>, NIF <strong>{company.nif}</strong>.
                </p>
              </Section>

              <Section n="2" title="Objeto do website" icon={<Globe className="h-5 w-5" />} accent={ORANGE}>
                <p className="text-gray-700">
                  O website tem como objetivo apresentar os serviços da empresa e disponibilizar canais de contacto
                  para pedidos de informação, orçamentos e agendamentos.
                </p>
              </Section>

              <Section n="3" title="Utilização do website" icon={<FileText className="h-5 w-5" />} accent={ORANGE}>
                <p className="text-gray-700">
                  O utilizador compromete-se a utilizar o website de forma lícita e responsável. É proibida qualquer tentativa
                  de acesso não autorizado, interferência, exploração de vulnerabilidades ou utilização do website para fins
                  fraudulentos ou que possam prejudicar terceiros.
                </p>
              </Section>

              <Section n="4" title="Serviços e orçamentos" icon={<ClipboardList className="h-5 w-5" />} accent={ORANGE}>
                <p className="text-gray-700">
                  As informações apresentadas no website têm caráter informativo. Os serviços são prestados mediante proposta/orçamento,
                  definindo âmbito, prazo e condições aplicáveis. A disponibilidade e prazos podem variar conforme o projeto.
                </p>
              </Section>

              <Section n="5" title="Condições de pagamento" icon={<Wallet className="h-5 w-5" />} accent={ORANGE}>
                <p className="text-gray-700">
                  As condições de pagamento são definidas em proposta ou acordo com o cliente. O incumprimento de prazos de pagamento
                  pode implicar a suspensão dos trabalhos e/ou custos adicionais previstos em proposta/contrato.
                </p>
              </Section>

              <Section n="6" title="Propriedade intelectual" icon={<Copyright className="h-5 w-5" />} accent={ORANGE}>
                <p className="text-gray-700">
                  A marca, logótipo, textos, imagens e o design do website são propriedade da empresa ou utilizados sob autorização/licença.
                  É proibida a reprodução, distribuição ou alteração sem autorização prévia, salvo quando permitido por lei.
                </p>
              </Section>

              <Section n="7" title="Ligações para sites de terceiros" icon={<Link2 className="h-5 w-5" />} accent={ORANGE}>
                <p className="text-gray-700">
                  O website pode incluir ligações para websites de terceiros. A empresa não controla esses conteúdos e não assume
                  responsabilidade por políticas, práticas ou informações disponibilizadas nesses sites.
                </p>
              </Section>

              <Section n="8" title="Privacidade e dados pessoais" icon={<Scale className="h-5 w-5" />} accent={ORANGE}>
                <p className="text-gray-700">
                  O tratamento de dados pessoais é regulado pela nossa{" "}
                  <Link href="/privacidade" className="font-semibold hover:underline" style={{ color: ORANGE }}>
                    Política de Privacidade
                  </Link>
                  , disponível no website.
                </p>
              </Section>

              <Section n="9" title="Garantias e limitações" icon={<Wrench className="h-5 w-5" />} accent={ORANGE}>
                <p className="text-gray-700">
                  Os trabalhos e fornecimentos seguem os termos acordados em proposta/contrato e a legislação aplicável.
                  Não nos responsabilizamos por atrasos decorrentes de factos não imputáveis à empresa (ex.: terceiros, fornecimentos,
                  condições de obra, força maior) ou por danos em estruturas pré-existentes com patologias não identificadas.
                </p>
              </Section>

              <Section n="10" title="Alterações aos Termos" icon={<RefreshCw className="h-5 w-5" />} accent={ORANGE}>
                <p className="text-gray-700">
                  Podemos atualizar estes Termos e Condições a qualquer momento. A data de “Atualizado em” indica a versão em vigor.
                </p>
              </Section>

              <Section n="11" title="Lei aplicável e foro" icon={<Gavel className="h-5 w-5" />} accent={ORANGE}>
                <p className="text-gray-700">
                  Aplica-se a lei portuguesa. Em caso de litígio, e sem prejuízo de outros meios legalmente previstos,
                  é competente o foro legalmente determinado.
                </p>
              </Section>

              {/* CTA */}
              <div className="rounded-3xl border border-gray-100 bg-gray-50 p-6 sm:p-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <p className="text-lg font-extrabold" style={{ color: NAVY }}>
                    Questões sobre estes Termos?
                  </p>
                  <p className="text-gray-600">Contacte-nos e esclarecemos rapidamente.</p>
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

              <div className="pt-2 text-xs text-gray-400 flex items-start gap-2">
                <AlertTriangle className="h-4 w-4 mt-0.5" />
                <p>
                  Nota: Este texto é uma base prática para website institucional. Para contextos com requisitos específicos,
                  recomenda-se revisão jurídica.
                </p>
              </div>
            </div>
          </div>
        </div>

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
