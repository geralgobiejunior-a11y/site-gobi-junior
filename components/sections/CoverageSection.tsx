import Link from "next/link";
import { MapPin, Clock, BadgeCheck, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { brand } from "@/lib/brand";

type Props = {
  title?: string;
  subtitle?: string;
  areas?: string[];
  responseLabel?: string;
  ctaHref?: string;
  ctaText?: string;
};

export function CoverageSection({
  title = "Lisboa e arredores, com resposta rápida.",
  subtitle = "Cobertura focada para garantir execução com rigor e prazos reais. Se a sua zona não estiver listada, avaliamos caso a caso.",
  areas = ["Lisboa", "Cascais", "Oeiras", "Sintra", "Amadora", "Odivelas", "Loures"],
  responseLabel = "Resposta em 24–72h",
  ctaHref = "/contactos#orcamento",
  ctaText = "Pedir orçamento",
}: Props) {
  const NAVY = brand.colors.navy;
  const ORANGE = brand.colors.orange;

  return (
    <section className="bg-white py-16 lg:py-24" id="areas">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:items-center">
          {/* LEFT */}
          <div className="lg:col-span-5">
            <div className="inline-flex items-center gap-2 rounded-full bg-slate-50 px-4 py-2 text-sm font-semibold ring-1 ring-slate-200">
              <span className="h-2 w-2 rounded-full" style={{ backgroundColor: ORANGE }} />
              <span style={{ color: NAVY }}>Áreas de atuação</span>
            </div>

            <h2 className="mt-5 text-3xl font-extrabold tracking-tight sm:text-4xl" style={{ color: NAVY }}>
              {title}
            </h2>

            <p className="mt-4 text-base leading-relaxed text-slate-600">
              {subtitle}
            </p>

            {/* Badges */}
            <div className="mt-6 flex flex-wrap items-center gap-3">
              <span className="inline-flex items-center gap-2 rounded-full bg-slate-50 px-4 py-2 text-sm font-semibold ring-1 ring-slate-200">
                <Clock className="h-4 w-4" style={{ color: ORANGE }} />
                <span className="text-slate-700">{responseLabel}</span>
              </span>

              <span className="inline-flex items-center gap-2 rounded-full bg-slate-50 px-4 py-2 text-sm font-semibold ring-1 ring-slate-200">
                <BadgeCheck className="h-4 w-4" style={{ color: ORANGE }} />
                <span className="text-slate-700">Orçamento com escopo claro</span>
              </span>
            </div>

            {/* Areas list */}
            <div className="mt-6">
              <p className="text-sm font-semibold text-slate-700">Cobertura principal</p>
              <div className="mt-3 flex flex-wrap gap-2">
                {areas.map((a) => (
                  <span
                    key={a}
                    className="rounded-full bg-white px-3 py-2 text-sm font-semibold ring-1 ring-slate-200 transition hover:-translate-y-[1px] hover:shadow-sm"
                    style={{ color: NAVY }}
                  >
                    {a}
                  </span>
                ))}
              </div>

              <p className="mt-4 text-sm text-slate-500">
                Outras zonas sob consulta (consoante tipo de serviço e agenda).
              </p>
            </div>

            {/* CTA */}
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button
                asChild
                size="lg"
                className="h-12 px-6 font-semibold shadow-sm"
                style={{ backgroundColor: ORANGE }}
              >
                <Link href={ctaHref}>
                  {ctaText} <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>

              <Button
                asChild
                size="lg"
                variant="outline"
                className="h-12 px-6 border-slate-200 bg-white text-slate-900 hover:bg-slate-50"
              >
                <Link href="/contactos">Ver contactos</Link>
              </Button>
            </div>
          </div>

          {/* RIGHT (Mapa ilustrativo) */}
          <div className="lg:col-span-7">
            <Card className="relative overflow-hidden rounded-3xl border-slate-200 bg-white shadow-sm">
              {/* Top line */}
              <div className="flex items-center justify-between px-6 py-4">
                <div className="flex items-center gap-2">
                  <MapPin className="h-4 w-4" style={{ color: ORANGE }} />
                  <p className="text-sm font-semibold" style={{ color: NAVY }}>
                    Área Metropolitana de Lisboa
                  </p>
                </div>
                <p className="text-xs text-slate-500">Mapa ilustrativo</p>
              </div>

              {/* Map frame */}
              <div className="relative px-6 pb-6">
                <div className="relative rounded-2xl bg-slate-50 p-6 ring-1 ring-slate-200">
                  {/* glow suave */}
                  <div
                    className="pointer-events-none absolute -left-10 -top-10 h-40 w-40 rounded-full blur-3xl"
                    style={{ backgroundColor: `${ORANGE}22` }}
                  />
                  <div
                    className="pointer-events-none absolute -right-10 -bottom-10 h-40 w-40 rounded-full blur-3xl"
                    style={{ backgroundColor: `${NAVY}12` }}
                  />

                  {/* SVG Portugal + pin Lisboa */}
                  <div className="relative mx-auto flex max-w-[520px] items-center justify-center">
                    <svg
                      viewBox="0 0 360 560"
                      className="h-[360px] w-auto sm:h-[420px]"
                      role="img"
                      aria-label="Mapa ilustrativo de Portugal com Lisboa destacada"
                    >
                      {/* silhueta simplificada */}
                      <path
                        d="M188 22
                           C166 28 158 45 152 63
                           C144 86 130 100 118 116
                           C104 136 112 160 124 178
                           C134 194 120 216 106 236
                           C92 258 98 282 112 304
                           C126 326 116 346 102 366
                           C88 388 92 410 108 432
                           C122 452 114 476 102 496
                           C90 516 96 536 116 548
                           C140 562 170 554 192 540
                           C214 526 228 508 234 486
                           C240 464 254 446 266 430
                           C282 410 278 388 264 370
                           C252 354 262 332 274 314
                           C288 294 282 270 270 252
                           C256 234 266 214 278 196
                           C294 174 292 150 278 130
                           C266 112 254 94 248 72
                           C242 50 228 30 208 24
                           C202 22 196 20 188 22 Z"
                        fill="url(#ptFill)"
                        stroke="#cbd5e1"
                        strokeWidth="4"
                      />

                      {/* Lisboa highlight (ponto no “meio-oeste”) */}
                      <g>
                        {/* halo */}
                        <circle cx="150" cy="300" r="28" fill={ORANGE} opacity="0.18" />
                        <circle cx="150" cy="300" r="16" fill={ORANGE} opacity="0.28" />
                        {/* ponto */}
                        <circle cx="150" cy="300" r="7" fill={ORANGE} />
                        {/* label */}
                        <g transform="translate(165 286)">
                          <rect
                            x="0"
                            y="0"
                            rx="12"
                            ry="12"
                            width="130"
                            height="34"
                            fill="#0f172a"
                            opacity="0.92"
                          />
                          <text
                            x="14"
                            y="22"
                            fontSize="14"
                            fontWeight="700"
                            fill="#ffffff"
                            style={{ fontFamily: "ui-sans-serif, system-ui" }}
                          >
                            Lisboa + arredores
                          </text>
                        </g>
                      </g>

                      <defs>
                        <linearGradient id="ptFill" x1="0" x2="0" y1="0" y2="1">
                          <stop offset="0%" stopColor="#e2e8f0" />
                          <stop offset="100%" stopColor="#f8fafc" />
                        </linearGradient>
                      </defs>
                    </svg>
                  </div>

                  {/* Legend footer */}
                  <div className="mt-4 flex flex-col gap-2 rounded-xl bg-white px-4 py-3 ring-1 ring-slate-200 sm:flex-row sm:items-center sm:justify-between">
                    <p className="text-sm font-semibold text-slate-700">
                      Cobertura principal: <span style={{ color: NAVY }}>Lisboa e arredores</span>
                    </p>
                    <p className="text-sm text-slate-500">
                      Outras zonas sob consulta • resposta rápida
                    </p>
                  </div>
                </div>

                <p className="mt-3 text-xs text-slate-400">
                  *Confirmação final de deslocação depende do tipo de serviço e agenda.
                </p>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
