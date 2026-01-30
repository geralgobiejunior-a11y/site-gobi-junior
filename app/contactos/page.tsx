import type { Metadata } from "next";
import Link from "next/link";
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  MessageCircle,
  ArrowUpRight,
  CheckCircle2,
  ClipboardList,
  ShieldCheck,
} from "lucide-react";

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

export default function ContactPage() {
  const NAVY = brand.colors.navy;
  const ORANGE = brand.colors.orange;

  const phoneDigits = digitsOnly(brand.contact.phone || "");
  const whatsappDigits = digitsOnly(brand.contact.whatsapp || brand.contact.phone || "");

  const telHref = phoneDigits ? `tel:${phoneDigits}` : "#";
  const mailHref = brand.contact.email ? `mailto:${brand.contact.email}` : "#";

  const waText = encodeURIComponent(brand.contact.whatsappMessage || "Olá! Gostaria de solicitar um orçamento.");
  const waHref = whatsappDigits ? `https://wa.me/${whatsappDigits}?text=${waText}` : "#";

  return (
    <>
      {/* HERO premium */}
      <section className="relative overflow-hidden">
        <div
          className="absolute inset-0"
          style={{
            background: `
              radial-gradient(900px 520px at 15% 0%, ${ORANGE}16 0%, transparent 58%),
              radial-gradient(900px 520px at 70% 10%, ${NAVY}20 0%, transparent 60%),
              linear-gradient(180deg, #ffffff 0%, #f8fafc 100%)
            `,
          }}
        />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14 lg:py-20">
          <div className="max-w-3xl">
            <span
              className="inline-flex items-center gap-2 rounded-full px-4 py-2 text-xs font-extrabold ring-1"
              style={{
                backgroundColor: `${NAVY}08`,
                color: NAVY,
                borderColor: `${NAVY}22`,
              }}
            >
              <CheckCircle2 className="h-4 w-4" style={{ color: ORANGE }} />
              Resposta rápida • Escopo claro • Execução organizada
            </span>

            <h1 className="mt-5 text-4xl lg:text-5xl font-extrabold tracking-tight" style={{ color: NAVY }}>
              Contactos
            </h1>

            <p className="mt-4 text-lg text-slate-600">
              Fale connosco para orçamento, dúvidas ou alinhamento de escopo. Respondemos com clareza e próximos passos.
            </p>

            {/* CTA */}
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
              <Link
                href="#orcamento"
                className="inline-flex h-12 items-center justify-center rounded-2xl px-5 text-sm font-extrabold shadow-sm transition hover:opacity-95"
                style={{ backgroundColor: NAVY, color: "white" }}
              >
                Solicitar orçamento <ArrowUpRight className="ml-2 h-4 w-4" />
              </Link>

              <a
                href={waHref}
                target="_blank"
                rel="noreferrer"
                className="inline-flex h-12 items-center justify-center rounded-2xl px-5 text-sm font-extrabold ring-1 transition hover:bg-white"
                style={{ borderColor: `${NAVY}22`, color: NAVY, backgroundColor: "white" }}
              >
                <MessageCircle className="mr-2 h-4 w-4" style={{ color: ORANGE }} />
                WhatsApp
              </a>

              <p className="text-sm text-slate-500 sm:ml-auto">{brand.contact.address}</p>
            </div>

            {/* micro trust */}
            <div className="mt-6 flex flex-wrap gap-2">
              {[
                { i: ClipboardList, t: "Orçamento detalhado" },
                { i: ShieldCheck, t: "Execução responsável" },
              ].map((x, idx) => (
                <span
                  key={idx}
                  className="inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-bold ring-1"
                  style={{
                    backgroundColor: "white",
                    color: NAVY,
                    borderColor: `${NAVY}18`,
                  }}
                >
                  <x.i className="h-3.5 w-3.5" style={{ color: ORANGE }} />
                  {x.t}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT BAR (compacta, premium) */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 -mt-6 pb-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              {
                icon: Phone,
                title: "Telefone",
                value: brand.contact.phone,
                href: telHref,
              },
              {
                icon: Mail,
                title: "Email",
                value: brand.contact.email,
                href: mailHref,
              },
              {
                icon: MessageCircle,
                title: "WhatsApp",
                value: brand.contact.phone,
                href: waHref,
                external: true,
              },
            ].map((x) => (
              <Card key={x.title} className="border-white bg-white shadow-sm ring-1 ring-slate-200/70">
                <CardContent className="p-5">
                  <div className="flex items-center gap-3">
                    <div
                      className="flex h-11 w-11 items-center justify-center rounded-2xl ring-1"
                      style={{ borderColor: `${ORANGE}35`, backgroundColor: `${ORANGE}12` }}
                    >
                      <x.icon className="h-5 w-5" style={{ color: ORANGE }} />
                    </div>

                    <div className="min-w-0">
                      <p className="text-xs font-extrabold tracking-widest text-slate-500">{x.title.toUpperCase()}</p>
                      <a
                        href={x.href}
                        target={x.external ? "_blank" : undefined}
                        rel={x.external ? "noreferrer" : undefined}
                        className="block truncate text-sm font-extrabold transition hover:opacity-90"
                        style={{ color: NAVY }}
                      >
                        {x.value}
                      </a>
                    </div>

                    <ArrowUpRight className="ml-auto h-4 w-4 text-slate-400" />
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* MAIN */}
      <section className="py-10 lg:py-14 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            {/* LEFT */}
            <div className="lg:col-span-5 space-y-5">
              <Card className="border-white bg-white shadow-sm ring-1 ring-slate-200/70">
                <CardContent className="p-6">
                  <div className="flex items-start gap-3">
                    <div
                      className="flex h-11 w-11 items-center justify-center rounded-2xl ring-1"
                      style={{ borderColor: `${ORANGE}35`, backgroundColor: `${ORANGE}12` }}
                    >
                      <MapPin className="h-5 w-5" style={{ color: ORANGE }} />
                    </div>

                    <div className="min-w-0">
                      <p className="text-sm font-extrabold" style={{ color: NAVY }}>
                        Área de atuação
                      </p>
                      <p className="mt-1 text-sm text-slate-600">{brand.contact.address}</p>

                      {Array.isArray(brand.areas) && brand.areas.length > 0 ? (
                        <div className="mt-4 flex flex-wrap gap-2">
                          {brand.areas.map((area: string) => (
                            <Badge key={area} variant="secondary">
                              {area}
                            </Badge>
                          ))}
                        </div>
                      ) : null}
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-white bg-white shadow-sm ring-1 ring-slate-200/70">
                <CardContent className="p-6">
                  <div className="flex items-start gap-3">
                    <div
                      className="flex h-11 w-11 items-center justify-center rounded-2xl ring-1"
                      style={{ borderColor: `${ORANGE}35`, backgroundColor: `${ORANGE}12` }}
                    >
                      <Clock className="h-5 w-5" style={{ color: ORANGE }} />
                    </div>

                    <div className="min-w-0">
                      <p className="text-sm font-extrabold" style={{ color: NAVY }}>
                        Horário
                      </p>
                      <p className="mt-1 text-sm text-slate-600">{brand.contact.schedule}</p>

                      <p className="mt-3 text-xs text-slate-500">
                        Para urgências e alinhamento rápido de escopo, use WhatsApp.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* “o que ajuda a responder rápido” */}
              <Card className="border-white bg-white shadow-sm ring-1 ring-slate-200/70">
                <CardContent className="p-6">
                  <p className="text-sm font-extrabold" style={{ color: NAVY }}>
                    Para agilizar o orçamento
                  </p>
                  <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {["Localização", "Tipo de serviço", "Prazo desejado", "Fotos/plantas (se houver)"].map((t) => (
                      <div
                        key={t}
                        className="flex items-start gap-3 rounded-2xl bg-slate-50 p-3 ring-1 ring-slate-200/70"
                      >
                        <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0" style={{ color: ORANGE }} />
                        <p className="text-sm text-slate-700">{t}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* RIGHT (FORM) */}
            <div id="orcamento" className="lg:col-span-7 scroll-mt-24">
              <Card className="border-white bg-white shadow-sm ring-1 ring-slate-200/70">
                <CardContent className="p-7 sm:p-8">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <h2 className="text-2xl font-extrabold" style={{ color: NAVY }}>
                        Solicitar orçamento
                      </h2>
                      <p className="mt-2 text-sm text-slate-600">
                        Preencha o formulário — respondemos com escopo, próximos passos e alinhamento de prazos.
                      </p>
                    </div>

                    <span
                      className="hidden sm:inline-flex h-9 items-center rounded-full px-3 text-xs font-extrabold ring-1"
                      style={{ backgroundColor: "white", color: NAVY, borderColor: `${NAVY}22` }}
                    >
                      CONTACTO / ORÇAMENTO
                    </span>
                  </div>

                  <div className="mt-6">
                    <ContactForm />
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* COMO FUNCIONA (premium, sem bolão gigante) */}
      <section className="py-12 lg:py-16 bg-slate-50">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold" style={{ color: NAVY }}>
              Como funciona
            </h2>
            <p className="mt-3 text-lg text-slate-600">
              Processo simples para alinhar escopo, prazo e execução.
            </p>
          </div>

          <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { n: "1", t: "Contacto", d: "Formulário, telefone ou WhatsApp para triagem inicial." },
              { n: "2", t: "Escopo", d: "Se necessário, visita técnica para definir o que será executado." },
              { n: "3", t: "Proposta", d: "Orçamento detalhado com prazo e próximos passos." },
            ].map((x) => (
              <div key={x.n} className="rounded-2xl bg-white p-6 ring-1 ring-slate-200/70">
                <div className="flex items-center gap-3">
                  <div
                    className="flex h-10 w-10 items-center justify-center rounded-2xl font-extrabold ring-1"
                    style={{
                      color: NAVY,
                      borderColor: `${NAVY}18`,
                      backgroundColor: `${NAVY}06`,
                    }}
                  >
                    {x.n}
                  </div>
                  <p className="text-base font-extrabold" style={{ color: NAVY }}>
                    {x.t}
                  </p>
                </div>
                <p className="mt-3 text-sm text-slate-600 leading-relaxed">{x.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
