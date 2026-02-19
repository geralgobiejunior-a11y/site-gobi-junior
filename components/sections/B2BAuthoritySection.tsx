"use client";

import React from "react";
import {
  ClipboardCheck,
  HardHat,
  ShieldCheck,
  Users,
  ArrowUpRight,
  CheckCircle2,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { brand } from "@/lib/brand";

type Props = {
  NAVY?: string;
  ORANGE?: string;

  /** Onde vai quando clicar em "Falar com equipa técnica" */
  contactHref?: string; // "/contactos"

  /** Onde vai quando clicar em "Ver obras" */
  worksHref?: string; // "/obras"

  eyebrow?: string;
  title?: string;
  subtitle?: string;

  bullets?: string[];

  note?: string;
};

export function B2BAuthoritySection({
  NAVY,
  ORANGE,
  contactHref = "/contactos",
  worksHref = "/obras",
  eyebrow = "Estrutura para obra • comunicação profissional",
  title = "Execução técnica estruturada para obras e subempreitadas.",
  subtitle = "Entrega consistente, coordenação em obra e foco em qualidade — do alinhamento à conclusão.",
  bullets = [
    "Execução conforme projeto e caderno de encargos",
    "Coordenação em obra e comunicação objetiva com responsáveis",
    "Verificações em campo para reduzir retrabalho",
  ],
  note = "Atuação principal em Lisboa e Grande Lisboa. Outras zonas sob consulta conforme tipo de serviço e agenda.",
}: Props) {
  const navy = NAVY ?? brand.colors.navy;
  const orange = ORANGE ?? brand.colors.orange;

  const cards = [
    {
      icon: ClipboardCheck,
      title: "Execução conforme escopo",
      desc: "Trabalho alinhado com projeto, medições e requisitos definidos.",
    },
    {
      icon: Users,
      title: "Equipas em campo",
      desc: "Técnicos experientes e coordenação para produtividade em obra.",
    },
    {
      icon: ShieldCheck,
      title: "Qualidade & conformidade",
      desc: "Boas práticas, verificações durante a execução e entrega consistente.",
    },
    {
      icon: HardHat,
      title: "Organização em obra",
      desc: "Planeamento, frentes de trabalho claras e interface com responsáveis.",
    },
  ];

  return (
    <section className="bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="py-10 sm:py-14 lg:py-16">
          <div className="grid gap-8 lg:grid-cols-12 lg:items-start">
            {/* LEFT */}
            <div className="lg:col-span-5">
              <div
                className="inline-flex items-center gap-2 rounded-full border px-3 py-1 text-[11px] font-semibold"
                style={{
                  borderColor: `${orange}33`,
                  backgroundColor: `${orange}0D`,
                  color: navy,
                }}
              >
                <span className="h-2 w-2 rounded-full" style={{ backgroundColor: orange }} />
                {eyebrow}
              </div>

              <h2
                className="mt-3 text-[28px] font-black leading-tight tracking-tight sm:mt-4 sm:text-4xl"
                style={{ color: navy }}
              >
                {title}
              </h2>

              <p className="mt-3 text-[15px] leading-relaxed text-slate-600 sm:text-base">
                {subtitle}
              </p>

              {/* Proof bullets (mobile: 2; desktop: 3) */}
              <div className="mt-5 space-y-2">
                {bullets.slice(0, 2).map((b, i) => (
                  <div key={i} className="flex items-start gap-2">
                    <CheckCircle2 className="mt-0.5 h-4 w-4" style={{ color: orange }} />
                    <p className="text-[14px] leading-relaxed text-slate-700">{b}</p>
                  </div>
                ))}

                <div className="hidden sm:block">
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="mt-0.5 h-4 w-4" style={{ color: orange }} />
                    <p className="text-[14px] leading-relaxed text-slate-700">
                      {bullets[2]}
                    </p>
                  </div>
                </div>
              </div>

              {/* CTAs — SEM repetir "orçamento" */}
              <div className="mt-6 grid gap-3 sm:flex sm:flex-row sm:items-center">
                <Button
                  className="h-12 w-full rounded-xl text-base font-extrabold sm:w-auto"
                  style={{ backgroundColor: orange, color: "white" }}
                  onClick={() => (window.location.href = worksHref)}
                >
                  Ver obras <ArrowUpRight className="ml-2 h-5 w-5" />
                </Button>

                <Button
                  variant="outline"
                  className="h-12 w-full rounded-xl border-slate-200 text-base font-extrabold sm:w-auto"
                  style={{ color: navy }}
                  onClick={() => (window.location.href = contactHref)}
                >
                  Falar com equipa técnica
                </Button>
              </div>

              {/* Nota (desktop) */}
              <div className="mt-6 hidden sm:block">
                <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                  <p className="text-xs font-semibold text-slate-600">{note}</p>
                </div>
              </div>
            </div>

            {/* RIGHT */}
            <div className="lg:col-span-7">
              {/* Mobile: 2 cards compactos + nota */}
              <div className="grid gap-3 sm:hidden">
                {cards.slice(0, 2).map((c, idx) => (
                  <div
                    key={idx}
                    className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm"
                  >
                    <div
                      className="flex h-10 w-10 items-center justify-center rounded-xl"
                      style={{ backgroundColor: `${orange}14` }}
                    >
                      <c.icon className="h-5 w-5" style={{ color: orange }} />
                    </div>

                    <p className="mt-3 text-[15px] font-extrabold" style={{ color: navy }}>
                      {c.title}
                    </p>
                    <p className="mt-1 text-[14px] leading-relaxed text-slate-600">
                      {c.desc}
                    </p>
                  </div>
                ))}

                <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                  <p className="text-[12px] font-semibold text-slate-600">{note}</p>
                </div>
              </div>

              {/* Desktop/Tablet: 4 cards */}
              <div className="hidden sm:grid sm:grid-cols-2 sm:gap-4">
                {cards.map((c, idx) => (
                  <div
                    key={idx}
                    className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition-all hover:-translate-y-[1px] hover:shadow-md"
                  >
                    <div
                      className="flex h-11 w-11 items-center justify-center rounded-2xl"
                      style={{ backgroundColor: `${orange}14` }}
                    >
                      <c.icon className="h-5 w-5" style={{ color: orange }} />
                    </div>

                    <p className="mt-4 text-base font-extrabold" style={{ color: navy }}>
                      {c.title}
                    </p>
                    <p className="mt-1 text-sm leading-relaxed text-slate-600">{c.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-10 h-px w-full bg-slate-200/70" />
        </div>
      </div>
    </section>
  );
}
