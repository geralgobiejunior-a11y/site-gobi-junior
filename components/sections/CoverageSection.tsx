"use client";

import React, { useMemo, useState } from "react";
import {
  MapPin,
  Timer,
  FileText,
  Navigation,
  CheckCircle2,
  ArrowUpRight,
} from "lucide-react";

import { brand } from "@/lib/brand";
import { Button } from "@/components/ui/button";

type Zone = {
  name: string;
  group: "Cobertura principal" | "Outras zonas";
};

export function CoverageSection() {
  const NAVY = brand.colors.navy;
  const ORANGE = brand.colors.orange;

  const zones: Zone[] = useMemo(
    () => [
      // Cobertura principal
      { name: "Lisboa", group: "Cobertura principal" },
      { name: "Cascais", group: "Cobertura principal" },
      { name: "Oeiras", group: "Cobertura principal" },
      { name: "Sintra", group: "Cobertura principal" },
      { name: "Amadora", group: "Cobertura principal" },
      { name: "Odivelas", group: "Cobertura principal" },
      { name: "Loures", group: "Cobertura principal" },

      // Outras zonas
      { name: "Almada", group: "Outras zonas" },
      { name: "Seixal", group: "Outras zonas" },
      { name: "Barreiro", group: "Outras zonas" },
      { name: "Montijo", group: "Outras zonas" },
      { name: "Vila Franca", group: "Outras zonas" },
      { name: "Mafra", group: "Outras zonas" },
    ],
    []
  );

  const mainZones = zones.filter((z) => z.group === "Cobertura principal");
  const otherZones = zones.filter((z) => z.group === "Outras zonas");

  const [selected, setSelected] = useState<string>("Lisboa");

  return (
    <section className="bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="py-14 sm:py-16">
          {/* Header */}
          <div className="mx-auto max-w-3xl text-center">
            <div
              className="mx-auto inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs font-semibold"
              style={{
                borderColor: `${ORANGE}33`,
                backgroundColor: `${ORANGE}0D`,
                color: NAVY,
              }}
            >
              <MapPin className="h-4 w-4" style={{ color: ORANGE }} />
              Áreas de atuação
            </div>

            <h2 className="mt-4 text-3xl font-black tracking-tight sm:text-4xl" style={{ color: NAVY }}>
              Cobertura em Lisboa e Grande Lisboa — com resposta rápida.
            </h2>

            <p className="mt-3 text-base leading-relaxed text-slate-600">
              Atuação focada em obra, manutenção e intervenções técnicas. Para outras zonas,
              avaliamos conforme o tipo de serviço e agenda.
            </p>
          </div>

          {/* Grid */}
          <div className="mt-10 grid gap-6 lg:grid-cols-12">
            {/* Left: copy + chips + CTAs */}
            <div className="lg:col-span-6">
              <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
                {/* Micro benefits */}
                <div className="grid gap-3 sm:grid-cols-2">
                  <div className="flex items-start gap-3">
                    <div
                      className="mt-0.5 flex h-10 w-10 items-center justify-center rounded-xl"
                      style={{ backgroundColor: `${ORANGE}14` }}
                    >
                      <Timer className="h-5 w-5" style={{ color: ORANGE }} />
                    </div>
                    <div className="min-w-0">
                      <p className="text-sm font-extrabold" style={{ color: NAVY }}>
                        Resposta em 24–72h
                      </p>
                      <p className="text-sm text-slate-600">
                        Alinhamento inicial rápido e objetivo.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div
                      className="mt-0.5 flex h-10 w-10 items-center justify-center rounded-xl"
                      style={{ backgroundColor: `${ORANGE}14` }}
                    >
                      <FileText className="h-5 w-5" style={{ color: ORANGE }} />
                    </div>
                    <div className="min-w-0">
                      <p className="text-sm font-extrabold" style={{ color: NAVY }}>
                        Escopo e prazos claros
                      </p>
                      <p className="text-sm text-slate-600">
                        Orçamento estruturado e alinhado à obra.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Coverage chips */}
                <div className="mt-7">
                  <p className="text-xs font-bold uppercase tracking-wide text-slate-500">
                    Cobertura principal
                  </p>

                  <div className="mt-3 flex flex-wrap gap-2">
                    {mainZones.map((z) => {
                      const active = selected === z.name;
                      return (
                        <button
                          key={z.name}
                          type="button"
                          onClick={() => setSelected(z.name)}
                          className="rounded-full border px-3 py-1.5 text-sm font-semibold transition"
                          style={{
                            borderColor: active ? `${ORANGE}55` : "rgba(148,163,184,0.45)",
                            backgroundColor: active ? `${ORANGE}12` : "white",
                            color: active ? NAVY : "rgb(51,65,85)",
                          }}
                        >
                          {z.name}
                        </button>
                      );
                    })}
                  </div>

                  <div className="mt-4 flex items-start gap-2 text-sm text-slate-600">
                    <CheckCircle2 className="mt-0.5 h-4 w-4" style={{ color: ORANGE }} />
                    <p className="leading-relaxed">
                      Outras zonas sob consulta (consoante tipo de serviço e agenda).
                    </p>
                  </div>

                  <div className="mt-3 flex flex-wrap gap-2">
                    {otherZones.map((z) => (
                      <span
                        key={z.name}
                        className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1.5 text-sm font-semibold text-slate-600"
                      >
                        {z.name}
                      </span>
                    ))}
                  </div>
                </div>

                {/* CTAs */}
                <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                  <Button
                    className="h-12 w-full rounded-xl text-base font-extrabold sm:w-auto"
                    style={{ backgroundColor: ORANGE, color: "white" }}
                    onClick={() => (window.location.href = "/contactos")}
                  >
                    Pedir orçamento <ArrowUpRight className="ml-2 h-5 w-5" />
                  </Button>

                  <Button
                    variant="outline"
                    className="h-12 w-full rounded-xl border-slate-200 text-base font-extrabold sm:w-auto"
                    style={{ color: NAVY }}
                    onClick={() => (window.location.href = "/contactos")}
                  >
                    Ver contactos
                  </Button>
                </div>
              </div>
            </div>

            {/* Right: premium "map" card */}
            <div className="lg:col-span-6">
              <div className="relative overflow-hidden rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
                {/* Soft background */}
                <div
                  className="pointer-events-none absolute inset-0 opacity-70"
                  style={{
                    background:
                      "radial-gradient(900px 380px at 80% 20%, rgba(249,115,22,0.10), transparent 55%), radial-gradient(800px 340px at 20% 85%, rgba(15,23,42,0.08), transparent 60%)",
                  }}
                />

                <div className="relative">
                  <div className="flex items-center justify-between gap-3">
                    <div className="flex items-center gap-2">
                      <Navigation className="h-5 w-5" style={{ color: ORANGE }} />
                      <p className="text-sm font-extrabold" style={{ color: NAVY }}>
                        Área Metropolitana de Lisboa
                      </p>
                    </div>

                    <span className="text-xs font-semibold text-slate-500">
                      Cobertura ilustrativa
                    </span>
                  </div>

                  {/* "Map" */}
                  <div className="mt-5 rounded-2xl border border-slate-200 bg-white/70 p-5">
                    <div className="relative mx-auto aspect-[16/10] w-full max-w-[520px] overflow-hidden rounded-2xl bg-slate-50">
                      {/* pseudo shape */}
                      <div className="absolute inset-0">
                        <svg
                          viewBox="0 0 600 380"
                          className="h-full w-full"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M310 40c70 30 90 80 85 125-6 52 32 75 28 120-4 52-48 75-105 82-62 8-125-16-150-60-22-39 0-78-10-120-12-50-22-95 20-130 38-32 82-42 132-17Z"
                            stroke="rgba(148,163,184,0.65)"
                            strokeWidth="6"
                          />
                        </svg>
                      </div>

                      {/* marker */}
                      <div className="absolute left-[48%] top-[52%] -translate-x-1/2 -translate-y-1/2">
                        <div className="relative">
                          <div
                            className="absolute -inset-6 rounded-full"
                            style={{ backgroundColor: `${ORANGE}18` }}
                          />
                          <div
                            className="flex items-center gap-2 rounded-full border px-3 py-2 shadow-sm"
                            style={{
                              borderColor: `${ORANGE}33`,
                              backgroundColor: "white",
                            }}
                          >
                            <span
                              className="h-2 w-2 rounded-full"
                              style={{ backgroundColor: ORANGE }}
                            />
                            <span className="text-xs font-extrabold" style={{ color: NAVY }}>
                              {selected} + arredores
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* footer small stats */}
                    <div className="mt-4 grid gap-3 sm:grid-cols-2">
                      <div className="rounded-xl border border-slate-200 bg-white px-4 py-3">
                        <p className="text-xs font-bold text-slate-500">Cobertura principal</p>
                        <p className="mt-1 text-sm font-extrabold" style={{ color: NAVY }}>
                          Lisboa e arredores
                        </p>
                      </div>
                      <div className="rounded-xl border border-slate-200 bg-white px-4 py-3">
                        <p className="text-xs font-bold text-slate-500">Outras zonas</p>
                        <p className="mt-1 text-sm font-extrabold" style={{ color: NAVY }}>
                          Sob consulta • resposta rápida
                        </p>
                      </div>
                    </div>
                  </div>

                  <p className="mt-4 text-xs text-slate-500">
                    *A confirmação final de deslocação depende do tipo de serviço e agenda.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Divider */}
          <div className="mt-14 h-px w-full bg-slate-200/70" />
        </div>
      </div>
    </section>
  );
}
