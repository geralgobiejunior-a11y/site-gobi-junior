import type { Metadata } from "next";
import Link from "next/link";
import { Mail, Phone, MapPin, Clock, MessageCircle, ArrowUpRight } from "lucide-react";

import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ContactForm } from "@/components/forms/ContactForm";
import { brand } from "@/lib/brand";

export const metadata: Metadata = {
  title: "Contactos",
  description: "Entre em contacto para solicitar orçamento ou esclarecer dúvidas.",
};

function digitsOnly(s: string) {
  return (s || "").replace(/\D/g, "");
}

function safeText(v?: string, fallback = "—") {
  return v && v.trim().length > 0 ? v : fallback;
}

function cx(...parts: Array<string | false | null | undefined>) {
  return parts.filter(Boolean).join(" ");
}

function PillButton({
  href,
  label,
  icon: Icon,
  primary,
  external,
  disabled,
  NAVY,
  ORANGE,
}: {
  href: string;
  label: string;
  icon: any;
  primary?: boolean;
  external?: boolean;
  disabled?: boolean;
  NAVY: string;
  ORANGE: string;
}) {
  const base =
    "inline-flex h-11 items-center justify-center gap-2 rounded-2xl px-4 text-sm font-extrabold transition focus:outline-none focus:ring-2 focus:ring-slate-300 focus:ring-offset-2";

  if (disabled) {
    return (
      <span
        className={cx(base, "cursor-not-allowed opacity-50 ring-1")}
        style={{ backgroundColor: "white", color: NAVY, borderColor: `${NAVY}18` }}
        aria-disabled="true"
      >
        <Icon className="h-4 w-4" style={{ color: ORANGE }} />
        {label}
      </span>
    );
  }

  if (primary) {
    return (
      <a
        href={href}
        target={external ? "_blank" : undefined}
        rel={external ? "noreferrer" : undefined}
        className={cx(base, "shadow-sm hover:opacity-95")}
        style={{ backgroundColor: NAVY, color: "white" }}
      >
        <Icon className="h-4 w-4" style={{ color: "white" }} />
        {label}
      </a>
    );
  }

  return (
    <a
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noreferrer" : undefined}
      className={cx(base, "ring-1 hover:bg-white")}
      style={{ backgroundColor: "white", color: NAVY, borderColor: `${NAVY}18` }}
    >
      <Icon className="h-4 w-4" style={{ color: ORANGE }} />
      {label}
    </a>
  );
}

function InfoRow({
  icon: Icon,
  label,
  value,
  NAVY,
  ORANGE,
}: {
  icon: any;
  label: string;
  value: string;
  NAVY: string;
  ORANGE: string;
}) {
  return (
    <div className="flex items-start gap-3">
      <span
        className="flex h-10 w-10 items-center justify-center rounded-2xl ring-1"
        style={{ borderColor: `${ORANGE}30`, backgroundColor: `${ORANGE}10` }}
      >
        <Icon className="h-5 w-5" style={{ color: ORANGE }} />
      </span>
      <div className="min-w-0">
        <p className="text-[11px] font-extrabold tracking-widest text-slate-500">{label.toUpperCase()}</p>
        <p className="mt-1 text-sm font-extrabold" style={{ color: NAVY }}>
          {value}
        </p>
      </div>
    </div>
  );
}

export default function ContactPage() {
  const NAVY = brand.colors.navy;
  const ORANGE = brand.colors.orange;

  const phoneRaw = brand.contact.phone || "";
  const whatsappRaw = brand.contact.whatsapp || brand.contact.phone || "";
  const emailRaw = brand.contact.email || "";
  const addressRaw = brand.contact.address || "";
  const scheduleRaw = brand.contact.schedule || "";

  const phoneDigits = digitsOnly(phoneRaw);
  const whatsappDigits = digitsOnly(whatsappRaw);

  const hasPhone = Boolean(phoneDigits);
  const hasWhatsapp = Boolean(whatsappDigits);
  const hasEmail = Boolean(emailRaw && emailRaw.includes("@"));

  const telHref = hasPhone ? `tel:${phoneDigits}` : "";
  const mailHref = hasEmail ? `mailto:${emailRaw}` : "";

  const waText = encodeURIComponent(
    brand.contact.whatsappMessage ||
      "Olá! Gostaria de solicitar um orçamento.\n\nLocal: \nTipo de serviço: \nPrazo: \n(Se tiver, envie fotos/plantas.)"
  );
  const waHref = hasWhatsapp ? `https://wa.me/${whatsappDigits}?text=${waText}` : "";

  const areas = Array.isArray(brand.areas) ? brand.areas : [];

  return (
    <>
      {/* HERO minimal + premium spacing */}
      <section className="relative overflow-hidden">
        <div
          className="absolute inset-0"
          style={{
            background: `
              radial-gradient(900px 520px at 12% 0%, ${ORANGE}10 0%, transparent 58%),
              radial-gradient(900px 520px at 75% 10%, ${NAVY}12 0%, transparent 60%),
              linear-gradient(180deg, #ffffff 0%, #f8fafc 100%)
            `,
          }}
        />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-14 pb-10 lg:pt-16 lg:pb-12">
          <div className="max-w-3xl">
            <h1 className="text-4xl lg:text-5xl font-extrabold tracking-tight" style={{ color: NAVY }}>
              Contactos
            </h1>
            <p className="mt-3 text-lg text-slate-600 leading-relaxed">
              Pedido de orçamento com resposta clara: escopo, prazo e próximos passos.
            </p>

            <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center">
              <Link
                href="#orcamento"
                className="inline-flex h-12 items-center justify-center rounded-2xl px-6 text-sm font-extrabold shadow-sm transition hover:opacity-95 focus:outline-none focus:ring-2 focus:ring-slate-300 focus:ring-offset-2"
                style={{ backgroundColor: NAVY, color: "white" }}
              >
                Solicitar orçamento <ArrowUpRight className="ml-2 h-4 w-4" />
              </Link>

              <PillButton
                href={waHref}
                label="WhatsApp"
                icon={MessageCircle}
                external
                disabled={!hasWhatsapp}
                NAVY={NAVY}
                ORANGE={ORANGE}
              />
            </div>
          </div>
        </div>
      </section>

      {/* ONE PRIMARY CONTAINER (designer look) */}
      <section className="bg-white pb-12 lg:pb-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Card className="border-white bg-white shadow-sm ring-1 ring-slate-200/70 rounded-3xl">
            <CardContent className="p-5 sm:p-7 lg:p-10">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
                {/* LEFT: Form */}
                <div id="orcamento" className="lg:col-span-8 scroll-mt-24">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <h2 className="text-2xl font-extrabold" style={{ color: NAVY }}>
                        Solicitar orçamento
                      </h2>
                      <p className="mt-2 text-sm text-slate-600">
                        Se tiver fotos/plantas, anexe no formulário ou envie por WhatsApp.
                      </p>
                    </div>

                    <span
                      className="hidden sm:inline-flex h-9 items-center rounded-full px-3 text-xs font-extrabold ring-1"
                      style={{ backgroundColor: "white", color: NAVY, borderColor: `${NAVY}18` }}
                    >
                      ORÇAMENTO
                    </span>
                  </div>

                  <div className="mt-6">
                    <ContactForm />
                  </div>

                  <div className="mt-6 flex flex-wrap gap-2">
                    <PillButton
                      href={waHref}
                      label="Enviar no WhatsApp"
                      icon={MessageCircle}
                      primary
                      external
                      disabled={!hasWhatsapp}
                      NAVY={NAVY}
                      ORANGE={ORANGE}
                    />
                    <PillButton
                      href={telHref}
                      label="Ligar"
                      icon={Phone}
                      disabled={!hasPhone}
                      NAVY={NAVY}
                      ORANGE={ORANGE}
                    />
                    <PillButton
                      href={mailHref}
                      label="Email"
                      icon={Mail}
                      disabled={!hasEmail}
                      NAVY={NAVY}
                      ORANGE={ORANGE}
                    />
                  </div>
                </div>

                {/* RIGHT: Info panel */}
                <aside className="lg:col-span-4">
                  <div className="rounded-3xl bg-slate-50 p-5 ring-1 ring-slate-200/70">
                    <p className="text-sm font-extrabold" style={{ color: NAVY }}>
                      Informação
                    </p>
                    <p className="mt-1 text-sm text-slate-600">
                      Contactos e disponibilidade num só lugar.
                    </p>

                    <div className="mt-5 space-y-4">
                      <InfoRow
                        icon={MapPin}
                        label="Área"
                        value={safeText(addressRaw, "Lisboa e arredores")}
                        NAVY={NAVY}
                        ORANGE={ORANGE}
                      />
                      <InfoRow
                        icon={Clock}
                        label="Horário"
                        value={safeText(scheduleRaw, "Seg–Sex (horário comercial)")}
                        NAVY={NAVY}
                        ORANGE={ORANGE}
                      />
                      <InfoRow
                        icon={Phone}
                        label="Telefone"
                        value={safeText(phoneRaw)}
                        NAVY={NAVY}
                        ORANGE={ORANGE}
                      />
                      <InfoRow
                        icon={Mail}
                        label="Email"
                        value={safeText(emailRaw)}
                        NAVY={NAVY}
                        ORANGE={ORANGE}
                      />
                    </div>

                    {areas.length > 0 ? (
                      <>
                        <div className="my-5 h-px bg-slate-200/70" />
                        <p className="text-[11px] font-extrabold tracking-widest text-slate-500">
                          ZONAS
                        </p>
                        <div className="mt-3 flex flex-wrap gap-2">
                          {areas.slice(0, 10).map((a: string) => (
                            <Badge key={a} variant="secondary">
                              {a}
                            </Badge>
                          ))}
                        </div>
                      </>
                    ) : null}

                    <div className="my-5 h-px bg-slate-200/70" />
                    <p className="text-xs text-slate-600">
                      Para acelerar: localização, tipo de serviço, prazo e fotos/plantas.
                    </p>
                  </div>
                </aside>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </>
  );
}
