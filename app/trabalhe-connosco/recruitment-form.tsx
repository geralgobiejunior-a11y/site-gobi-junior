"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import {
  Briefcase,
  Users,
  HardHat,
  BadgeCheck,
  MapPin,
  Phone,
  MessageCircle,
  ArrowUpRight,
  CheckCircle2,
  Shield,
  ClipboardList,
  Clock,
} from "lucide-react";

import { Card, CardContent } from "@/components/ui/card";

type Contacts = {
  phone: string;
  whatsapp: string; // pode vir com +351, espaços etc
  email: string;
  location: string;
};

type RoleOption =
  | "Eletricista"
  | "Canalizador"
  | "Pedreiro / Remodelação"
  | "Pintura"
  | "Pladur"
  | "Ajudante de obra"
  | "Encarregado"
  | "Outro";

export function RecruitmentForm({
  NAVY,
  ORANGE,
  contacts,
}: {
  NAVY: string;
  ORANGE: string;
  contacts: Contacts;
}) {
  // ====== PERFIS (curto e padronizado) ======
  const roles = [
    {
      icon: HardHat,
      title: "Eletricistas",
      desc: "Oficial / ajudante • obra • leitura básica de projeto é valorizada.",
    },
    {
      icon: HardHat,
      title: "Canalizadores",
      desc: "Redes prediais • montagem / reparação • autonomia é valorizada.",
    },
    {
      icon: HardHat,
      title: "Pedreiros / Remodelação",
      desc: "Alvenaria • acabamentos • ritmo e organização em obra.",
    },
    {
      icon: Users,
      title: "Ajudantes de obra",
      desc: "Apoio a equipas • limpeza e organização • vontade real de evoluir.",
    },
    {
      icon: ClipboardList,
      title: "Encarregados",
      desc: "Coordenação diária • gestão de equipa • interface com obra.",
    },
    {
      icon: Briefcase,
      title: "Outros perfis",
      desc: "Pintura • pladur • manutenção • multi-serviços. Candidate-se na mesma.",
    },
  ] as const;

  // ====== O QUE OFERECEMOS (sem prometer demais) ======
  const whatWeOffer = [
    "Condições alinhadas com clareza antes de começar",
    "Pagamento em dia (conforme combinado)",
    "Organização em obra e orientação clara",
    "Continuidade para quem entrega bem",
    "Foco em segurança, qualidade e acabamento",
  ];

  // ====== REQUISITOS (filtro firme) ======
  const requirements = [
    "Documentação regularizada para trabalhar em Portugal",
    "Responsabilidade e pontualidade (não negociável)",
    "Respeito por orientação em obra e trabalho em equipa",
    "Disponibilidade para Lisboa e arredores",
  ];

  // ====== PROCESSO (realista) ======
  const steps = [
    { step: "01", title: "Candidatura", desc: "Preenche o essencial e envia." },
    { step: "02", title: "Triagem", desc: "Entramos em contacto se o perfil encaixar." },
    { step: "03", title: "Teste / entrada", desc: "Quando aplicável, teste e início em obra." },
  ];

  // ====== LINKS ======
  const waNumber = useMemo(() => contacts.whatsapp.replace(/[^\d]/g, ""), [contacts.whatsapp]);
  const waBase = `https://wa.me/${waNumber}`;
  const telLink = `tel:${contacts.phone.replace(/\s/g, "")}`;

  // ====== FORM STATE ======
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [role, setRole] = useState<RoleOption | "">("");
  const [city, setCity] = useState("");
  const [experience, setExperience] = useState("");
  const [docsOk, setDocsOk] = useState(false);
  const [message, setMessage] = useState("");

  function FieldLabel({ children, required }: { children: React.ReactNode; required?: boolean }) {
    return (
      <p className="text-sm font-extrabold" style={{ color: NAVY }}>
        {children} {required ? <span style={{ color: ORANGE }}>*</span> : null}
      </p>
    );
  }

  // ====== VALIDATION ======
  const canSend =
    name.trim().length >= 2 &&
    phone.trim().length >= 6 &&
    role !== "" &&
    city.trim().length >= 2 &&
    docsOk;

  // ====== WHATSAPP MESSAGE (sem backend, 100% funcional) ======
  const waText = useMemo(() => {
    const parts = [
      "Candidatura — Gobi & Júnior",
      "",
      `Nome: ${name || "-"}`,
      `Telefone: ${phone || "-"}`,
      `Email: ${email || "-"}`,
      `Função: ${role || "-"}`,
      `Cidade: ${city || "-"}`,
      `Experiência: ${experience || "-"}`,
      `Docs regulares PT: ${docsOk ? "Sim" : "Não"}`,
      "",
      "Mensagem:",
      message?.trim() ? message.trim() : "-",
      "",
      "Anexo CV (se tiver).",
    ];

    return encodeURIComponent(parts.join("\n"));
  }, [name, phone, email, role, city, experience, docsOk, message]);

  const waLink = `${waBase}?text=${waText}`;

  return (
    <>
      {/* HERO (com filtro + foco) */}
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
              Recrutamento • Obra • Lisboa e arredores
            </span>

            <h1 className="mt-5 text-4xl lg:text-5xl font-extrabold tracking-tight" style={{ color: NAVY }}>
              Trabalhe Connosco
            </h1>

            <p className="mt-4 text-lg text-slate-600 leading-relaxed">
              Procuramos profissionais com <span className="font-semibold" style={{ color: NAVY }}>responsabilidade</span>,{" "}
              <span className="font-semibold" style={{ color: NAVY }}>organização</span> e compromisso com obra real.
              Se procura apenas “bicos” ou não cumpre horários, esta página não é para si.
            </p>

            <div className="mt-7 grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                "Orientação clara em obra",
                "Organização e padrão de execução",
                "Segurança e EPI",
                "Continuidade para quem entrega",
              ].map((t) => (
                <div key={t} className="flex items-start gap-3">
                  <span
                    className="mt-0.5 inline-flex h-8 w-8 items-center justify-center rounded-2xl ring-1"
                    style={{ borderColor: `${ORANGE}35`, backgroundColor: `${ORANGE}12` }}
                  >
                    <CheckCircle2 className="h-4 w-4" style={{ color: ORANGE }} />
                  </span>
                  <p className="text-sm text-slate-700">{t}</p>
                </div>
              ))}
            </div>

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
                    href={waBase}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <MessageCircle className="h-4 w-4" style={{ color: ORANGE }} />
                    WhatsApp
                  </a>
                </div>
              </div>
            </div>

            <p className="mt-4 text-xs text-slate-500">
              Nota: analisamos candidaturas e entramos em contacto apenas quando o perfil encaixa nas obras ativas.
            </p>
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
            <p className="mt-3 text-lg text-slate-600">
              Se encaixa em algum perfil, candidate-se. Se não encaixar, envie na mesma — mas com informação objetiva.
            </p>
          </div>

          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {roles.map((r) => (
              <Card
                key={r.title}
                className="border-white bg-white shadow-sm ring-1 ring-slate-200/70 transition hover:shadow-md"
              >
                <CardContent className="p-6">
                  <div
                    className="flex h-12 w-12 items-center justify-center rounded-2xl ring-1"
                    style={{ borderColor: `${ORANGE}35`, backgroundColor: `${ORANGE}12` }}
                  >
                    <r.icon className="h-6 w-6" style={{ color: ORANGE }} />
                  </div>
                  <h3 className="mt-4 text-lg font-extrabold" style={{ color: NAVY }}>
                    {r.title}
                  </h3>
                  <p className="mt-2 text-sm text-slate-600 leading-relaxed">{r.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* OFERTA + REQUISITOS + PROCESSO (bem organizado e sem repetição) */}
      <section className="py-14 lg:py-18 bg-slate-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            <div className="lg:col-span-6">
              <Card className="border-white bg-white shadow-sm ring-1 ring-slate-200/70">
                <CardContent className="p-7">
                  <div className="flex items-center gap-2">
                    <Shield className="h-4 w-4" style={{ color: ORANGE }} />
                    <p className="text-sm font-extrabold" style={{ color: NAVY }}>
                      O que oferecemos
                    </p>
                  </div>

                  <div className="mt-4 grid grid-cols-1 gap-3">
                    {whatWeOffer.map((t) => (
                      <div key={t} className="flex items-start gap-3 rounded-2xl bg-slate-50 p-3 ring-1 ring-slate-200/70">
                        <CheckCircle2 className="mt-0.5 h-5 w-5" style={{ color: ORANGE }} />
                        <p className="text-sm text-slate-700">{t}</p>
                      </div>
                    ))}
                  </div>

                  <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div className="rounded-2xl bg-white p-4 ring-1 ring-slate-200/70">
                      <div className="flex items-center gap-2">
                        <ClipboardList className="h-4 w-4" style={{ color: ORANGE }} />
                        <p className="text-sm font-extrabold" style={{ color: NAVY }}>Método</p>
                      </div>
                      <p className="mt-2 text-sm text-slate-600">Escopo, orientação e execução organizada.</p>
                    </div>
                    <div className="rounded-2xl bg-white p-4 ring-1 ring-slate-200/70">
                      <div className="flex items-center gap-2">
                        <Clock className="h-4 w-4" style={{ color: ORANGE }} />
                        <p className="text-sm font-extrabold" style={{ color: NAVY }}>Previsibilidade</p>
                      </div>
                      <p className="mt-2 text-sm text-slate-600">Planeamento e prazos alinhados com a obra.</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="lg:col-span-6">
              <Card className="border-white bg-white shadow-sm ring-1 ring-slate-200/70">
                <CardContent className="p-7">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4" style={{ color: ORANGE }} />
                    <p className="text-sm font-extrabold" style={{ color: NAVY }}>
                      Requisitos mínimos
                    </p>
                  </div>

                  <div className="mt-4 grid grid-cols-1 gap-3">
                    {requirements.map((t) => (
                      <div key={t} className="flex items-start gap-3 rounded-2xl bg-slate-50 p-3 ring-1 ring-slate-200/70">
                        <CheckCircle2 className="mt-0.5 h-5 w-5" style={{ color: ORANGE }} />
                        <p className="text-sm text-slate-700">{t}</p>
                      </div>
                    ))}
                  </div>

                  <p className="mt-4 text-xs text-slate-500">
                    Importante: faltas frequentes, atrasos e indisciplina em obra eliminam qualquer continuidade.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>

          <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
            {steps.map((x) => (
              <div key={x.step} className="rounded-3xl bg-white p-6 ring-1 ring-slate-200/70">
                <div className="flex items-center gap-3">
                  <div
                    className="flex h-10 w-10 items-center justify-center rounded-2xl font-extrabold ring-1"
                    style={{ color: NAVY, borderColor: `${NAVY}18`, backgroundColor: `${NAVY}06` }}
                  >
                    {x.step}
                  </div>
                  <p className="text-base font-extrabold" style={{ color: NAVY }}>
                    {x.title}
                  </p>
                </div>
                <p className="mt-3 text-sm text-slate-600 leading-relaxed">{x.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FORM (gera mensagem e envia pro WhatsApp com tudo preenchido) */}
      <section id="candidatura" className="py-14 lg:py-18 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            <div className="lg:col-span-5">
              <h2 className="text-3xl lg:text-4xl font-extrabold" style={{ color: NAVY }}>
                Enviar candidatura
              </h2>
              <p className="mt-3 text-lg text-slate-600 leading-relaxed">
                Preencha o essencial. Ao clicar, abrimos o WhatsApp com a candidatura já pronta.
              </p>

              <div className="mt-6 rounded-3xl bg-slate-50 p-6 ring-1 ring-slate-200/70">
                <p className="text-sm font-extrabold" style={{ color: NAVY }}>Dica</p>
                <p className="mt-2 text-sm text-slate-600 leading-relaxed">
                  Se tiver CV, envie como anexo no WhatsApp. Se não tiver, basta colocar experiência e disponibilidade.
                </p>
              </div>
            </div>

            <div className="lg:col-span-7">
              <Card className="border-white bg-white shadow-sm ring-1 ring-slate-200/70">
                <CardContent className="p-6 sm:p-7">
                  <form
                    className="grid grid-cols-1 sm:grid-cols-2 gap-4"
                    onSubmit={(e) => {
                      e.preventDefault();
                      if (!canSend) return;
                      window.open(waLink, "_blank", "noopener,noreferrer");
                    }}
                  >
                    <div>
                      <FieldLabel required>Nome</FieldLabel>
                      <input
                        required
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="mt-2 h-12 w-full rounded-2xl border border-slate-200 px-4 text-sm outline-none focus:ring-2"
                        style={{ borderColor: "rgb(226 232 240)", boxShadow: "none" }}
                        placeholder="Ex.: João Silva"
                      />
                    </div>

                    <div>
                      <FieldLabel required>Telefone</FieldLabel>
                      <input
                        required
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        className="mt-2 h-12 w-full rounded-2xl border border-slate-200 px-4 text-sm outline-none focus:ring-2"
                        placeholder="Ex.: +351 9xx xxx xxx"
                      />
                    </div>

                    <div>
                      <FieldLabel>Email</FieldLabel>
                      <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="mt-2 h-12 w-full rounded-2xl border border-slate-200 px-4 text-sm outline-none focus:ring-2"
                        placeholder="Ex.: nome@email.com"
                      />
                    </div>

                    <div>
                      <FieldLabel required>Função</FieldLabel>
                      <select
                        required
                        value={role}
                        onChange={(e) => setRole(e.target.value as RoleOption)}
                        className="mt-2 h-12 w-full rounded-2xl border border-slate-200 px-4 text-sm outline-none focus:ring-2"
                      >
                        <option value="" disabled>
                          Selecione…
                        </option>
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

                    <div>
                      <FieldLabel required>Cidade</FieldLabel>
                      <input
                        required
                        value={city}
                        onChange={(e) => setCity(e.target.value)}
                        className="mt-2 h-12 w-full rounded-2xl border border-slate-200 px-4 text-sm outline-none focus:ring-2"
                        placeholder="Ex.: Lisboa / Oeiras / Cascais"
                      />
                    </div>

                    <div>
                      <FieldLabel>Experiência (curto)</FieldLabel>
                      <input
                        value={experience}
                        onChange={(e) => setExperience(e.target.value)}
                        className="mt-2 h-12 w-full rounded-2xl border border-slate-200 px-4 text-sm outline-none focus:ring-2"
                        placeholder="Ex.: 3 anos em obra / 1 ano ajudante"
                      />
                    </div>

                    <div className="sm:col-span-2">
                      <label className="mt-1 flex items-start gap-3 rounded-2xl bg-slate-50 p-4 ring-1 ring-slate-200/70 cursor-pointer">
                        <input
                          type="checkbox"
                          checked={docsOk}
                          onChange={(e) => setDocsOk(e.target.checked)}
                          className="mt-1 h-4 w-4"
                        />
                        <div>
                          <p className="text-sm font-extrabold" style={{ color: NAVY }}>
                            Documentação regularizada para trabalhar em Portugal <span style={{ color: ORANGE }}>*</span>
                          </p>
                          <p className="mt-1 text-xs text-slate-600">
                            Sem isto, não conseguimos avançar para obra.
                          </p>
                        </div>
                      </label>
                    </div>

                    <div className="sm:col-span-2">
                      <FieldLabel>Mensagem (opcional)</FieldLabel>
                      <textarea
                        rows={4}
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        className="mt-2 w-full rounded-2xl border border-slate-200 px-4 py-3 text-sm outline-none focus:ring-2"
                        placeholder="Disponibilidade, se tem carta, ferramentas, últimas obras, etc."
                      />
                    </div>

                    <div className="sm:col-span-2 mt-2 flex flex-col gap-3 sm:flex-row sm:justify-between">
                      <button
                        type="submit"
                        disabled={!canSend}
                        className="inline-flex h-12 items-center justify-center rounded-2xl px-5 text-sm font-extrabold shadow-sm transition"
                        style={{
                          backgroundColor: NAVY,
                          color: "white",
                          opacity: canSend ? 1 : 0.55,
                          cursor: canSend ? "pointer" : "not-allowed",
                        }}
                        title={!canSend ? "Preencha Nome, Telefone, Função, Cidade e confirme Documentação." : "Enviar no WhatsApp"}
                      >
                        Enviar no WhatsApp <ArrowUpRight className="ml-2 h-4 w-4" />
                      </button>

                      <a
                        className="inline-flex h-12 items-center justify-center rounded-2xl px-5 text-sm font-extrabold ring-1"
                        style={{ color: NAVY, borderColor: `${NAVY}18`, backgroundColor: "white" }}
                        href={telLink}
                      >
                        Ligar <Phone className="ml-2 h-4 w-4" style={{ color: ORANGE }} />
                      </a>
                    </div>

                    <p className="sm:col-span-2 text-xs text-slate-500">
                      Ao enviar, o WhatsApp abre com a candidatura já formatada. Se tiver CV, anexe na conversa.
                    </p>
                  </form>
                </CardContent>
              </Card>

              <div className="mt-4 flex flex-wrap gap-2">
                <a
                  className="inline-flex items-center gap-2 rounded-2xl px-4 py-2 text-sm font-extrabold ring-1"
                  style={{ color: NAVY, borderColor: `${NAVY}18`, backgroundColor: "white" }}
                  href={telLink}
                >
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
