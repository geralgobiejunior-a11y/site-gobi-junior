'use client';

import Link from 'next/link';
import { MapPin, Clock, ShieldCheck, ArrowRight } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { brand } from '@/lib/brand';

export function AreasMapSection() {
  const NAVY = brand.colors.navy;
  const ORANGE = brand.colors.orange;

  const areas = [
    { id: 'lisboa', name: 'Lisboa', short: 'Cobertura principal e resposta rápida' },
    { id: 'oeiras', name: 'Oeiras', short: 'Intervenções técnicas em obra' },
    { id: 'cascais', name: 'Cascais', short: 'Atuação rápida em obra' },
    { id: 'sintra', name: 'Sintra', short: 'Execução com rigor e prazos reais' },
    { id: 'amadora', name: 'Amadora', short: 'Equipa por marcação' },
    { id: 'odivelas', name: 'Odivelas', short: 'Cobertura em zonas limítrofes' },
    { id: 'loures', name: 'Loures', short: 'Resposta rápida (conforme agenda)' },
  ];

  const selected = areas[0]; // mantém simples (sem pins)

  return (
    <section className="bg-white py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:items-stretch">
          {/* ESQUERDA */}
          <div className="lg:col-span-5">
            <div className="inline-flex items-center gap-2 rounded-full bg-slate-100 px-4 py-2 text-sm font-semibold text-slate-700">
              <span className="h-2 w-2 rounded-full" style={{ backgroundColor: ORANGE }} />
              Áreas de atuação
            </div>

            <h2 className="mt-4 text-4xl font-extrabold leading-tight tracking-tight" style={{ color: NAVY }}>
              Lisboa e arredores, com resposta rápida.
            </h2>

            <p className="mt-4 max-w-xl text-base leading-relaxed text-slate-600">
              Cobertura focada para garantir execução com rigor e prazos reais. Outras zonas sob consulta,
              conforme tipo de serviço e agenda.
            </p>

            {/* pills (visual) */}
            <div className="mt-6 flex flex-wrap gap-2">
              {areas.map((a, i) => {
                const isActive = i === 0;
                return (
                  <span
                    key={a.id}
                    className={[
                      'rounded-full px-4 py-2 text-sm font-semibold ring-1 ring-slate-200',
                      isActive ? 'shadow-md' : 'bg-white',
                    ].join(' ')}
                    style={{
                      backgroundColor: isActive ? NAVY : 'white',
                      color: isActive ? 'white' : '#0f172a',
                    }}
                  >
                    {a.name}
                  </span>
                );
              })}
            </div>

            {/* card */}
            <Card className="mt-8 border-white shadow-sm ring-1 ring-slate-200/70">
              <CardContent className="p-6">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="text-sm font-semibold text-slate-500">Zona selecionada</p>
                    <p className="mt-1 text-2xl font-extrabold" style={{ color: NAVY }}>
                      {selected.name}
                    </p>
                    <p className="mt-2 text-sm text-slate-600">{selected.short}</p>
                  </div>

                  <div
                    className="inline-flex items-center gap-2 rounded-full px-3 py-2 text-sm font-semibold"
                    style={{ backgroundColor: `${NAVY}10`, color: NAVY }}
                  >
                    <Clock className="h-4 w-4" />
                    Resposta 24–72h
                  </div>
                </div>

                <div className="mt-6 grid gap-3">
                  <div className="flex items-start gap-3">
                    <div className="mt-0.5 rounded-xl bg-slate-100 p-2">
                      <MapPin className="h-4 w-4" style={{ color: ORANGE }} />
                    </div>
                    <div>
                      <p className="text-sm font-bold text-slate-800">Cobertura principal</p>
                      <p className="text-sm text-slate-600">Lisboa e concelhos limítrofes</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="mt-0.5 rounded-xl bg-slate-100 p-2">
                      <ShieldCheck className="h-4 w-4" style={{ color: ORANGE }} />
                    </div>
                    <div>
                      <p className="text-sm font-bold text-slate-800">Execução com rigor</p>
                      <p className="text-sm text-slate-600">Visita técnica + escopo claro antes de iniciar</p>
                    </div>
                  </div>
                </div>

                <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                  <Button asChild className="h-12 px-6 font-semibold shadow-lg" style={{ backgroundColor: ORANGE }}>
                    <Link href="/contactos#orcamento">
                      Pedir orçamento <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>

                  <p className="text-sm text-slate-500">Dica: envie fotos do local para agilizar.</p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* DIREITA (MAPA) */}
          <div className="lg:col-span-7">
            <div className="relative flex h-full flex-col overflow-hidden rounded-3xl border border-slate-200 bg-gradient-to-b from-white to-slate-50 p-6 shadow-sm">
              {/* glows decorativos (laranja + navy) */}
              <div
                className="pointer-events-none absolute -top-24 -right-24 h-[420px] w-[420px] rounded-full blur-3xl"
                style={{ backgroundColor: `${ORANGE}1A` }}
              />
              <div
                className="pointer-events-none absolute -bottom-28 -left-24 h-[520px] w-[520px] rounded-full blur-3xl"
                style={{ backgroundColor: `${NAVY}14` }}
              />

              {/* vinheta suave (premium) */}
              <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_0%,rgba(245,166,35,0.08),transparent_45%),radial-gradient(circle_at_80%_100%,rgba(11,79,138,0.08),transparent_45%)]" />

              {/* ÁREA DO MAPA */}
              <div className="relative flex-1 overflow-hidden rounded-2xl bg-white/60 p-3 ring-1 ring-slate-200/70">
                <div className="relative h-full">
                  <div className="mx-auto flex h-full w-full items-center justify-center">
                    <div className="relative w-full">
                      <div className="relative w-full" style={{ aspectRatio: '4 / 3' }}>
                        <img
                          src="/maps/portugal.png"
                          alt="Mapa de cobertura"
                          draggable={false}
                          className="absolute inset-0 h-full w-full select-none object-contain"
                        />
                      </div>
                    </div>
                  </div>

                  {/* badge */}
                  <div className="mt-4 flex flex-wrap items-center justify-between gap-3">
                    <div className="inline-flex items-center gap-2 rounded-full bg-white px-3 py-2 text-xs font-semibold text-slate-700 ring-1 ring-slate-200">
                      <span className="h-2 w-2 rounded-full" style={{ backgroundColor: ORANGE }} />
                      Cobertura em Lisboa e arredores
                    </div>
                    <div className="text-xs text-slate-500">Resposta rápida • conforme agenda</div>
                  </div>
                </div>
              </div>

              {/* BARRA INFERIOR */}
              <div className="mt-6 rounded-2xl bg-white p-4 ring-1 ring-slate-200">
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <div className="text-sm font-semibold text-slate-700">
                    Cobertura principal:{' '}
                    <span className="font-extrabold" style={{ color: NAVY }}>
                      Lisboa e arredores
                    </span>
                  </div>
                  <div className="text-sm text-slate-500">Outras zonas sob consulta • resposta rápida</div>
                </div>
              </div>
            </div>

            <p className="mt-3 text-xs text-slate-500">
              *Confirmação final de deslocação depende do tipo de serviço e agenda.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
