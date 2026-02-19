"use client";

import Image from "next/image";
import { CheckCircle2, Shield, Clock, Users } from "lucide-react";

type WhyItem = {
  title: string;
  description: string;
};

type WhyChooseUsSectionProps = {
  NAVY: string;
  ORANGE: string;
  brandName: string;
  items: WhyItem[];
  imageSrc: string;
};

export function WhyChooseUsSection({
  NAVY,
  ORANGE,
  brandName,
  items,
  imageSrc,
}: WhyChooseUsSectionProps) {
  const safeItems = (items ?? []).slice(0, 6);

  const highlights = [
    { icon: Clock, label: "Cumprimento", value: "Prazos e planeamento" },
    { icon: Shield, label: "Conformidade", value: "Boas práticas + segurança" },
    { icon: Users, label: "Equipa", value: "Técnicos em campo" },
  ];

  return (
    <section className="relative pt-10 pb-16 sm:py-14 lg:py-24">
      {/* FUNDO */}
      <div
        className="absolute inset-0"
        style={{ background: `linear-gradient(180deg, #ffffff 0%, #f8fafc 100%)` }}
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* ========================================================= */}
        {/* MOBILE: SOMENTE O CARD DA IMAGEM */}
        {/* ========================================================= */}
        <div className="lg:hidden">
          <div className="relative overflow-hidden rounded-3xl bg-white shadow-xl ring-1 ring-slate-200/70">
            
            <div className="relative h-52 w-full">
              <Image
                src={imageSrc}
                alt="Equipa em obra"
                fill
                className="object-cover"
              />

              <div
                className="absolute inset-0"
                style={{
                  background:
                    "linear-gradient(90deg, rgba(2,6,23,0.10) 0%, transparent 40%, rgba(2,6,23,0.18) 100%)",
                }}
              />

              <div className="absolute left-4 top-4">
                <div
                  className="inline-flex items-center gap-2 rounded-full px-3 py-1.5 text-[11px] font-extrabold ring-1 backdrop-blur"
                  style={{
                    backgroundColor: "rgba(255,255,255,0.78)",
                    borderColor: "rgba(255,255,255,0.55)",
                    color: NAVY,
                  }}
                >
                  <CheckCircle2 className="h-4 w-4" style={{ color: ORANGE }} />
                  Equipa identificada • processos definidos
                </div>
              </div>
            </div>

            <div className="p-5">
              <p
                className="text-base font-extrabold leading-snug"
                style={{ color: NAVY }}
              >
                Planeamento e controlo de qualidade em obra
              </p>
              <p className="mt-2 text-sm text-slate-600">
                Prazos claros, execução técnica e entrega consistente.
              </p>
            </div>
          </div>
        </div>

        {/* ========================================================= */}
        {/* DESKTOP: LAYOUT COMPLETO */}
        {/* ========================================================= */}
        <div className="hidden lg:grid grid-cols-12 items-center gap-10">

          {/* TEXTO */}
          <div className="col-span-5">
            <div className="flex items-center gap-3">
              <div
                className="h-10 w-1.5 rounded-full"
                style={{ backgroundColor: ORANGE }}
              />
              <p className="text-sm font-bold text-slate-600">
                Diferenciais em obra
              </p>
            </div>

            <h2
              className="mt-4 text-3xl font-extrabold tracking-tight"
              style={{ color: NAVY }}
            >
              Porquê a {brandName}?
            </h2>

            <p className="mt-3 text-lg text-slate-600">
              Execução técnica, organização e compromisso com entrega —
              do planeamento à finalização, sem surpresas.
            </p>

            {/* HIGHLIGHTS */}
            <div className="mt-8 grid grid-cols-1 gap-3">
              {highlights.map((h, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-3 rounded-2xl bg-white px-4 py-3 shadow-sm ring-1 ring-slate-200/70"
                >
                  <div
                    className="flex h-10 w-10 items-center justify-center rounded-xl ring-1"
                    style={{
                      backgroundColor: `${ORANGE}14`,
                      borderColor: `${ORANGE}28`,
                    }}
                  >
                    <h.icon className="h-5 w-5" style={{ color: ORANGE }} />
                  </div>

                  <div>
                    <p className="text-xs font-bold text-slate-500">
                      {h.label}
                    </p>
                    <p
                      className="text-sm font-extrabold"
                      style={{ color: NAVY }}
                    >
                      {h.value}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* IMAGEM DESKTOP */}
          <div className="col-span-7">
            <div className="relative overflow-hidden rounded-3xl bg-white shadow-xl ring-1 ring-slate-200/70">
              <div className="relative aspect-[16/10] w-full">
                <Image
                  src={imageSrc}
                  alt="Equipa em obra"
                  fill
                  className="object-cover"
                />
              </div>

              <div className="p-6">
                <p className="text-sm font-bold text-slate-500">
                  Organização em obra
                </p>
                <p
                  className="mt-1 text-base font-extrabold"
                  style={{ color: NAVY }}
                >
                  Planeamento, execução e controlo de qualidade
                </p>
                <p className="mt-2 text-sm text-slate-600">
                  Processo claro para garantir prazos, qualidade e previsibilidade.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* ========================================================= */}
        {/* GRID DIFERENCIAIS — SOMENTE DESKTOP */}
        {/* ========================================================= */}
        <div className="hidden lg:block mt-16">
          <div className="grid grid-cols-3 gap-6">
            {safeItems.map((it, idx) => (
              <div
                key={idx}
                className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200/70"
              >
                <div className="flex items-start gap-4">
                  <div
                    className="flex h-11 w-11 items-center justify-center rounded-xl ring-1"
                    style={{
                      backgroundColor: `${ORANGE}14`,
                      borderColor: `${ORANGE}28`,
                    }}
                  >
                    <CheckCircle2
                      className="h-5 w-5"
                      style={{ color: ORANGE }}
                    />
                  </div>

                  <div>
                    <p
                      className="text-base font-extrabold"
                      style={{ color: NAVY }}
                    >
                      {it.title}
                    </p>
                    <p className="mt-2 text-sm text-slate-600">
                      {it.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10 rounded-3xl bg-white p-6 shadow-sm ring-1 ring-slate-200/70">
            <p className="text-sm text-slate-600">
              Resultado:{" "}
              <span className="font-extrabold" style={{ color: NAVY }}>
                menos retrabalho
              </span>
              ,{" "}
              <span className="font-extrabold" style={{ color: NAVY }}>
                mais previsibilidade
              </span>{" "}
              e{" "}
              <span className="font-extrabold" style={{ color: NAVY }}>
                entrega com padrão
              </span>
              .
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
