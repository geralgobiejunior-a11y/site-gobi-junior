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
  imageSrc: string; // ex: "/sections/como-trabalhamos.png"
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
    <section className="relative py-16 lg:py-24">
      {/* Fundo limpo e institucional */}
      <div
        className="absolute inset-0"
        style={{
          background: `linear-gradient(180deg, #ffffff 0%, #f8fafc 100%)`,
        }}
      />

      {/* “faixa” suave para dar profundidade */}
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-40"
        style={{
          background: `radial-gradient(900px 260px at 18% 30%, ${ORANGE}12 0%, transparent 60%)`,
        }}
      />
      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 h-40"
        style={{
          background: `radial-gradient(900px 260px at 82% 70%, ${NAVY}12 0%, transparent 60%)`,
        }}
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* TOPO: texto + imagem */}
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:items-center">
          {/* TEXTO */}
          <div className="lg:col-span-5">
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
              className="mt-4 text-3xl font-extrabold tracking-tight sm:text-4xl"
              style={{ color: NAVY }}
            >
              Porquê a {brandName}?
            </h2>

            <p className="mt-3 text-lg text-slate-600">
              Execução técnica, organização e compromisso com entrega — do planeamento à
              finalização, sem surpresas.
            </p>

            {/* Highlights (mini credibilidade) */}
            <div className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-3 lg:grid-cols-1">
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

                  <div className="min-w-0">
                    <p className="text-xs font-bold text-slate-500">{h.label}</p>
                    <p className="truncate text-sm font-extrabold" style={{ color: NAVY }}>
                      {h.value}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* IMAGEM */}
          <div className="lg:col-span-7">
            <div className="relative overflow-hidden rounded-3xl bg-white shadow-xl ring-1 ring-slate-200/70">
              <div className="relative aspect-[16/10] w-full">
                <Image
                  src={imageSrc}
                  alt="Equipa em obra"
                  fill
                  className="object-cover"
                  priority={false}
                />

                {/* Overlay institucional (leve) */}
                <div
                  className="absolute inset-0"
                  style={{
                    background:
                      "linear-gradient(90deg, rgba(2,6,23,0.10) 0%, transparent 40%, rgba(2,6,23,0.18) 100%)",
                  }}
                />

                {/* Selo discreto */}
                <div className="absolute left-5 top-5">
                  <div
                    className="inline-flex items-center gap-2 rounded-full px-4 py-2 text-xs font-extrabold ring-1 backdrop-blur"
                    style={{
                      backgroundColor: "rgba(255,255,255,0.75)",
                      borderColor: "rgba(255,255,255,0.55)",
                      color: NAVY,
                    }}
                  >
                    <CheckCircle2 className="h-4 w-4" style={{ color: ORANGE }} />
                    Equipa identificada • processos definidos
                  </div>
                </div>
              </div>

              {/* legenda forte */}
              <div className="p-6">
                <p className="text-sm font-bold text-slate-500">
                  Organização em obra
                </p>
                <p className="mt-1 text-base font-extrabold" style={{ color: NAVY }}>
                  Planeamento, execução e controlo de qualidade
                </p>
                <p className="mt-2 text-sm text-slate-600">
                  Metodologia clara para garantir consistência, durabilidade e cumprimento de prazos.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* DIVISOR */}
        <div className="mt-12 h-px w-full bg-slate-200/70" />

        {/* GRID: 2x3 diferenciais (cara institucional) */}
        <div className="mt-12">
          <div className="mx-auto max-w-3xl text-center">
            <h3 className="text-2xl font-extrabold" style={{ color: NAVY }}>
              O que você ganha na prática
            </h3>
            <p className="mt-2 text-slate-600">
              Diferenciais focados em obra, com execução e comunicação profissional.
            </p>
          </div>

          <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {safeItems.map((it, idx) => (
              <div
                key={idx}
                className="group rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200/70 transition-all hover:-translate-y-[1px] hover:shadow-md"
              >
                <div className="flex items-start gap-4">
                  <div
                    className="mt-0.5 flex h-11 w-11 shrink-0 items-center justify-center rounded-xl ring-1"
                    style={{
                      backgroundColor: `${ORANGE}14`,
                      borderColor: `${ORANGE}28`,
                    }}
                  >
                    <CheckCircle2 className="h-5 w-5" style={{ color: ORANGE }} />
                  </div>

                  <div className="min-w-0">
                    <p className="text-base font-extrabold" style={{ color: NAVY }}>
                      {it.title}
                    </p>
                    <p className="mt-2 text-sm leading-relaxed text-slate-600">
                      {it.description}
                    </p>

                    {/* detalhe de acabamento */}
                    <div
                      className="mt-5 h-1 w-10 rounded-full opacity-60 transition-all group-hover:w-16"
                      style={{ backgroundColor: `${ORANGE}` }}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Fecho curto (sem exagero) */}
        <div className="mt-12 rounded-3xl bg-white p-6 shadow-sm ring-1 ring-slate-200/70">
          <p className="text-sm text-slate-600">
            Resultado: <span className="font-extrabold" style={{ color: NAVY }}>menos retrabalho</span>,
            <span className="font-extrabold" style={{ color: NAVY }}> mais previsibilidade</span> e
            <span className="font-extrabold" style={{ color: NAVY }}> entrega com padrão</span>.
          </p>
        </div>
      </div>
    </section>
  );
}
