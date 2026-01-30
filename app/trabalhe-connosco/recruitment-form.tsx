"use client";

import Link from "next/link";
import {
  Briefcase,
  Users,
  HardHat,
  BadgeCheck,
  ClipboardList,
  MapPin,
  Phone,
  MessageCircle,
  ArrowUpRight,
  CheckCircle2,
} from "lucide-react";

import { Card, CardContent } from "@/components/ui/card";

type Contacts = {
  phone: string;
  whatsapp: string;
  email: string;
  location: string;
};

export function RecruitmentForm({
  NAVY,
  ORANGE,
  contacts,
}: {
  NAVY: string;
  ORANGE: string;
  contacts: Contacts;
}) {
  const roles = [
    { icon: HardHat, title: "Eletricistas", desc: "Oficial / ajudante • experiência em obra • leitura básica de projetos (valorizado)." },
    { icon: HardHat, title: "Canalizadores", desc: "Redes prediais • montagem e reparação • autonomia em obra (valorizado)." },
    { icon: HardHat, title: "Pedreiros / Remodelação", desc: "Alvenaria • acabamentos • organização e ritmo de obra." },
    { icon: Users, title: "Ajudantes de obra", desc: "Apoio a equipas • limpeza e organização • vontade de aprender." },
    { icon: Users, title: "Encarregados", desc: "Coordenação • planeamento diário • gestão de equipa e comunicação com obra." },
    { icon: Briefcase, title: "Outros perfis", desc: "Pintura • pladur • manutenção • multi-serviços. Envie candidatura na mesma." },
  ];

  const whatWeOffer = [
    "Contrato de trabalho (conforme perfil e obra)",
    "Pagamento em dia e alinhamento claro de condições",
    "Continuidade de trabalho (obras em sequência)",
    "Organização em obra e comunicação direta",
    "Foco em segurança e qualidade",
  ];

  const requirements = [
    "Experiência na função (ou vontade real de aprender, no caso de ajudante)",
    "Documentação regularizada para trabalhar em Portugal",
    "Responsabilidade, pontualidade e espírito de equipa",
    "Disponibilidade para Lisboa e arredores",
  ];

  const steps = [
    { step: "01", title: "Envie candidatura", desc: "Preencha o formulário (leva 1 minuto)." },
    { step: "02", title: "Contacto rápido", desc: "Avaliamos e falamos consigo." },
    { step: "03", title: "Entrada em obra", desc: "Confirmação e início." },
  ];

  const waLink = `https://wa.me/${contacts.whatsapp.replace(/[^\d]/g, "")}`;
  const telLink = `tel:${contacts.phone.replace(/\s/g, "")}`;

  function FieldLabel({ children, required }: { children: React.ReactNode; required?: boolean }) {
    return (
      <p className="text-sm font-extrabold" style={{ color: NAVY }}>
        {children} {required ? <span style={{ color: ORANGE }}>*</span> : null}
      </p>
    );
  }

  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div
          className="absolute inset-0"
          style={{
            background: `
              radial-gradient(900px 520px at 15% 0%, ${ORANGE}18 0%, transparent 58%),
              radial-gradient(900px 520px at 70% 10%, ${NAVY}22 0%, transparent 60%),
              linear-gradient(180deg, #ffffff 0%, #f8fafc 100%)
            `,
          }}
        />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14 lg:py-20">
          <div className="max-w-3xl">
            <span
              className="inline-flex items-center gap-2 rounded-full px-4 py-2 text-xs font-extrabold ring-1"
              style={{ backgroundColor: `${NAVY}08`, color: NAVY, borderColor: `${NAVY}22` }}
            >
              <BadgeCheck className="h-4 w-4" style={{ color: ORANGE }} />
              Recrutamento • Colaboradores • Obra
            </span>

            <h1 className="mt-5 text-4xl lg:text-5xl font-extrabold tracking-tight" style={{ color: NAVY }}>
              Trabalhe Connosco
            </h1>

            <p className="mt-4 text-lg text-slate-600">
              Estamos a contratar colaboradores para obras em{" "}
              <span className="font-semibold" style={{ color: NAVY }}>
                Lisboa e arredores
              </span>
              . Envie a candidatura e falamos consigo rapidamente.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
              <a
                href="#candidatura"
                className="inline-flex h-12 items-center justify-center rounded-2xl px-5 text-sm font-extrabold shadow-sm transition hover:opacity-95"
                style={{ backgroundColor: NAVY, color: "white" }}
              >
                Candidatar-me <ArrowUpRight className="ml-2 h-4 w-4" />
              </a>

              <div className="flex flex-col gap-2 sm:ml-auto">
                <span className="inline-flex items-center gap-2 text-sm text-slate-600">
                  <MapPin className="h-4 w-4" style={{ color: ORANGE }} />
                  {contacts.location}
                </span>

                <div className="flex flex-wrap gap-2">
                  <a
                    className="inline-flex items-center gap-2 rounded-2xl px-4 py-2 text-sm font-extrabold ring-1 transition hover:opacity-90"
                    style={{ color: NAVY, borderColor: `${NAVY}18`, backgroundColor: "white" }}
                    href={telLink}
                  >
                    <Phone className="h-4 w-4" style={{ color: ORANGE }} />
                    Ligar
                  </a>

                  <a
                    className="inline-flex items-center gap-2 rounded-2xl px-4 py-2 text-sm font-extrabold ring-1 transition hover:opacity-90"
                    style={{ color: NAVY, borderColor: `${NAVY}18`, backgroundColor: "white" }}
                    href={waLink}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <MessageCircle className="h-4 w-4" style={{ color: ORANGE }} />
                    WhatsApp
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PERFIS */}
      <section className="py-14 lg:py-18 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h2 className="text-3xl lg:text-4xl font-extrabold" style={{ color: NAVY }}>
              Perfis que procuramos
            </h2>
            <p className="mt-3 text-lg text-slate-600">Se encaixa em algum perfil, candidate-se.</p>
          </div>

          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {roles.map((r) => (
              <Card key={r.title} className="border-white bg-white shadow-sm ring-1 ring-slate-200/70 transition hover:shadow-md">
                <CardContent className="p-6">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl ring-1" style={{ borderColor: `${ORANGE}35`, backgroundColor: `${ORANGE}12` }}>
                    <r.icon className="h-6 w-6" style={{ color: ORANGE }} />
                  </div>
                  <h3 className="mt-4 text-lg font-extrabold" style={{ color: NAVY }}>{r.title}</h3>
                  <p className="mt-2 text-sm text-slate-600 leading-relaxed">{r.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* OFERTA + REQUISITOS + PASSOS */}
      <section className="py-14 lg:py-18 bg-slate-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            <div className="lg:col-span-6">
              <Card className="border-white bg-white shadow-sm ring-1 ring-slate-200/70">
                <CardContent className="p-7">
                  <p className="text-sm font-extrabold" style={{ color: NAVY }}>O que oferecemos</p>
                  <div className="mt-4 grid grid-cols-1 gap-3">
                    {whatWeOffer.map((t) => (
                      <div key={t} className="flex items-start gap-3 rounded-2xl bg-slate-50 p-3 ring-1 ring-slate-200/70">
                        <CheckCircle2 className="mt-0.5 h-5 w-5" style={{ color: ORANGE }} />
                        <p className="text-sm text-slate-700">{t}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="lg:col-span-6">
              <Card className="border-white bg-white shadow-sm ring-1 ring-slate-200/70">
                <CardContent className="p-7">
                  <p className="text-sm font-extrabold" style={{ color: NAVY }}>Requisitos mínimos</p>
                  <div className="mt-4 grid grid-cols-1 gap-3">
                    {requirements.map((t) => (
                      <div key={t} className="flex items-start gap-3 rounded-2xl bg-slate-50 p-3 ring-1 ring-slate-200/70">
                        <CheckCircle2 className="mt-0.5 h-5 w-5" style={{ color: ORANGE }} />
                        <p className="text-sm text-slate-700">{t}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
            {steps.map((x) => (
              <div key={x.step} className="rounded-2xl bg-white p-6 ring-1 ring-slate-200/70">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-2xl font-extrabold ring-1" style={{ color: NAVY, borderColor: `${NAVY}18`, backgroundColor: `${NAVY}06` }}>
                    {x.step}
                  </div>
                  <p className="text-base font-extrabold" style={{ color: NAVY }}>{x.title}</p>
                </div>
                <p className="mt-3 text-sm text-slate-600 leading-relaxed">{x.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FORM */}
      <section id="candidatura" className="py-14 lg:py-18 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            <div className="lg:col-span-5">
              <h2 className="text-3xl lg:text-4xl font-extrabold" style={{ color: NAVY }}>
                Enviar candidatura
              </h2>
              <p className="mt-3 text-lg text-slate-600">
                Preencha o essencial. Depois, pode enviar no WhatsApp para acelerar.
              </p>
            </div>

            <div className="lg:col-span-7">
              <Card className="border-white bg-white shadow-sm ring-1 ring-slate-200/70">
                <CardContent className="p-6 sm:p-7">
                  <form className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <FieldLabel required>Nome</FieldLabel>
                      <input required className="mt-2 h-12 w-full rounded-2xl border border-slate-200 px-4 text-sm" placeholder="Ex.: João Silva" />
                    </div>

                    <div>
                      <FieldLabel required>Telefone</FieldLabel>
                      <input required className="mt-2 h-12 w-full rounded-2xl border border-slate-200 px-4 text-sm" placeholder="Ex.: +351 9xx xxx xxx" />
                    </div>

                    <div>
                      <FieldLabel>Email</FieldLabel>
                      <input type="email" className="mt-2 h-12 w-full rounded-2xl border border-slate-200 px-4 text-sm" placeholder="Ex.: nome@email.com" />
                    </div>

                    <div>
                      <FieldLabel required>Função</FieldLabel>
                      <select required defaultValue="" className="mt-2 h-12 w-full rounded-2xl border border-slate-200 px-4 text-sm">
                        <option value="" disabled>Selecione…</option>
                        <option>Eletricista</option>
                        <option>Canalizador</option>
                        <option>Pedreiro / Remodelação</option>
                        <option>Pintura</option>
                        <option>Pladur</option>
                        <option>Ajudante de obra</option>
                        <option>Encarregado</option>
                        <option>Outro</option>
                      </select>
                    </div>

                    <div className="sm:col-span-2">
                      <FieldLabel>Mensagem</FieldLabel>
                      <textarea rows={4} className="mt-2 w-full rounded-2xl border border-slate-200 px-4 py-3 text-sm" placeholder="Experiência, disponibilidade, se tem carta, etc." />
                    </div>

                    <div className="sm:col-span-2 mt-2 flex flex-col gap-3 sm:flex-row sm:justify-between">
                      <button
                        type="button"
                        className="inline-flex h-12 items-center justify-center rounded-2xl px-5 text-sm font-extrabold shadow-sm transition hover:opacity-95"
                        style={{ backgroundColor: NAVY, color: "white" }}
                        onClick={() => alert("Candidatura preparada ✅\n\nAgora envie no WhatsApp para confirmarmos rapidamente.")}
                      >
                        Preparar candidatura <ArrowUpRight className="ml-2 h-4 w-4" />
                      </button>

                      <a
                        className="inline-flex h-12 items-center justify-center rounded-2xl px-5 text-sm font-extrabold ring-1"
                        style={{ color: NAVY, borderColor: `${NAVY}18`, backgroundColor: "white" }}
                        href={waLink}
                        target="_blank"
                        rel="noreferrer"
                      >
                        Enviar no WhatsApp <MessageCircle className="ml-2 h-4 w-4" style={{ color: ORANGE }} />
                      </a>
                    </div>

                    <p className="sm:col-span-2 text-xs text-slate-500">
                      Se tiver CV, pode enviar no WhatsApp.
                    </p>
                  </form>
                </CardContent>
              </Card>

              <div className="mt-4 flex flex-wrap gap-2">
                <a className="inline-flex items-center gap-2 rounded-2xl px-4 py-2 text-sm font-extrabold ring-1" style={{ color: NAVY, borderColor: `${NAVY}18`, backgroundColor: "white" }} href={telLink}>
                  <Phone className="h-4 w-4" style={{ color: ORANGE }} /> {contacts.phone}
                </a>
                <span className="inline-flex items-center gap-2 text-sm text-slate-600">
                  <MapPin className="h-4 w-4" style={{ color: ORANGE }} /> {contacts.location}
                </span>
              </div>

              <div className="mt-6">
                <Link href="/contactos" className="inline-flex items-center text-sm font-extrabold" style={{ color: NAVY }}>
                  Ver página de contactos <ArrowUpRight className="ml-2 h-4 w-4" style={{ color: ORANGE }} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
