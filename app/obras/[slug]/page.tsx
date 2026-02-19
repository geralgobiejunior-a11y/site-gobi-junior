// app/obras/[slug]/page.tsx
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import React from "react";
import {
  ArrowLeft,
  MapPin,
  Calendar,
  Ruler,
  Clock,
  CheckCircle2,
  ArrowUpRight,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CTASection } from "@/components/sections/CTASection";
import { projects } from "@/lib/data/projects";
import { brand } from "@/lib/brand";

type Params = { slug: string };

export async function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Params;
}): Promise<Metadata> {
  const project = projects.find((p) => p.slug === params.slug);
  if (!project) return { title: "Obra não encontrada" };

  const ogImage = project.images?.[0];

  return {
    title: `${project.title} | Gobi & Júnior`,
    description: project.description,
    openGraph: {
      title: project.title,
      description: project.description,
      images: ogImage ? [ogImage] : undefined,
    },
  };
}

export default function ProjectPage({ params }: { params: Params }) {
  const project = projects.find((p) => p.slug === params.slug);
  if (!project) notFound();

  const heroImage = project.images?.[0];
  const gallery = project.images?.slice(1) ?? [];
  const hasHero = Boolean(heroImage);

  // --- Descrição organizada
  const rawDesc = (project.description ?? "").trim();
  const paragraphs = splitIntoParagraphs(rawDesc);
  const isWallOfText = rawDesc.length > 260 && paragraphs.length === 1;

  const summary = buildSummary(rawDesc);
  const keyPoints = buildKeyPoints(project);

  return (
    <>
      {/* HERO */}
      <section className="relative h-[52vh] min-h-[360px] md:h-[58vh] md:min-h-[440px] overflow-hidden">
        {hasHero && (
          <Image
            src={heroImage as string}
            alt={project.title}
            fill
            priority
            className="object-cover"
            sizes="100vw"
          />
        )}

        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/45 to-black/85" />
        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 py-10 md:py-12 text-white">
          <Button
            variant="ghost"
            asChild
            className="text-white/90 hover:text-white hover:bg-white/10 mb-4 px-2"
          >
            <Link href="/obras" aria-label="Voltar às Obras">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Voltar às Obras
            </Link>
          </Button>

          <div className="flex flex-wrap gap-2 mb-3">
            {project.category.map((cat) => (
              <Badge
                key={cat}
                className="text-white border-white/15"
                style={{ backgroundColor: "rgba(255,255,255,0.14)" }}
              >
                {cat}
              </Badge>
            ))}
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
            {project.title}
          </h1>

          <div className="flex flex-wrap items-center gap-4 mt-4 text-white/85">
            <div className="flex items-center">
              <MapPin className="mr-2 h-5 w-5" />
              {project.location}
            </div>
            <div className="flex items-center">
              <Calendar className="mr-2 h-5 w-5" />
              {project.year}
            </div>
          </div>

          {/* (REMOVIDO) CTA do hero — evita duplicação */}
        </div>
      </section>

      {/* CONTENT
          pb maior porque agora tem CTA fixo no rodapé no mobile
      */}
      <section className="bg-white pt-10 md:pt-14 pb-32 md:pb-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-10">
            {/* SIDEBAR (desktop) */}
            <aside className="order-1 lg:order-2 lg:pl-2">
              <Card className="lg:sticky lg:top-24 shadow-sm border border-gray-100">
                <CardContent className="p-5 md:p-6 space-y-6">
                  <h2
                    className="text-lg md:text-xl font-bold"
                    style={{ color: brand.colors.navy }}
                  >
                    Detalhes do Projeto
                  </h2>

                  <div className="space-y-4">
                    <InfoRow icon={<Ruler className="h-5 w-5" />} label="Área" value={project.area} />
                    <InfoRow icon={<Clock className="h-5 w-5" />} label="Duração" value={project.duration} />
                    <InfoRow icon={<MapPin className="h-5 w-5" />} label="Localização" value={project.location} />
                    <InfoRow icon={<Calendar className="h-5 w-5" />} label="Ano" value={project.year} />
                  </div>

                  {/* CTA só no desktop aqui */}
                  <div className="hidden lg:block pt-2 space-y-3">
                    <Button
                      asChild
                      className="w-full"
                      size="lg"
                      style={{ backgroundColor: brand.colors.orange }}
                    >
                      <Link href="/contactos#orcamento">
                        Solicitar Orçamento <ArrowUpRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>

                    <Button asChild variant="outline" className="w-full" size="lg">
                      <Link href="/obras">Ver outras obras</Link>
                    </Button>
                  </div>

                  <div className="rounded-2xl border border-gray-100 bg-gray-50 p-4">
                    <p className="text-sm text-gray-600 leading-relaxed">
                      Precisa de uma equipa com rigor, prazos e boa execução? Fale
                      connosco e respondemos rápido.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </aside>

            {/* LEFT CONTENT */}
            <div className="order-2 lg:order-1 lg:col-span-2 space-y-10 md:space-y-12">
              {/* DESCRIÇÃO (organizada) */}
              <section aria-labelledby="descricao">
                <h2
                  id="descricao"
                  className="text-2xl md:text-3xl font-bold mb-3 md:mb-4"
                  style={{ color: brand.colors.navy }}
                >
                  Descrição do Projeto
                </h2>

                {/* Resumo */}
                {summary && (
                  <div className="rounded-2xl border border-gray-100 bg-gray-50 p-4 md:p-5 mb-5">
                    <p className="text-gray-800 font-medium leading-relaxed">
                      {summary}
                    </p>
                  </div>
                )}

                {/* Se for “paredão”, mostra pontos-chave antes */}
                {isWallOfText && keyPoints.length > 0 && (
                  <div className="mb-6">
                    <h3
                      className="text-lg font-bold mb-3"
                      style={{ color: brand.colors.navy }}
                    >
                      Pontos-chave
                    </h3>
                    <ul className="space-y-2">
                      {keyPoints.map((p, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <CheckCircle2
                            className="h-5 w-5 flex-shrink-0 mt-0.5"
                            style={{ color: brand.colors.orange }}
                            aria-hidden="true"
                          />
                          <span className="text-gray-800 leading-relaxed">{p}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Texto em parágrafos */}
                <div className="space-y-4">
                  {paragraphs.map((p, idx) => (
                    <p
                      key={idx}
                      className="text-gray-700 text-base md:text-lg leading-relaxed"
                    >
                      {p}
                    </p>
                  ))}
                </div>
              </section>

              {/* SCOPE */}
              <section aria-labelledby="ambito">
                <h3
                  id="ambito"
                  className="text-xl md:text-2xl font-bold mb-5 md:mb-6"
                  style={{ color: brand.colors.navy }}
                >
                  Âmbito dos Trabalhos
                </h3>

                <ul className="space-y-4">
                  {project.scope.map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle2
                        className="h-6 w-6 flex-shrink-0 mt-0.5"
                        style={{ color: brand.colors.orange }}
                        aria-hidden="true"
                      />
                      <span className="text-gray-800 leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </section>

              {/* RESULTS */}
              <section aria-labelledby="resultados">
                <h3
                  id="resultados"
                  className="text-xl md:text-2xl font-bold mb-5 md:mb-6"
                  style={{ color: brand.colors.navy }}
                >
                  Resultados
                </h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {project.results.map((result, index) => (
                    <Card
                      key={index}
                      className="border border-gray-100 shadow-sm hover:shadow-md transition"
                    >
                      <CardContent className="p-5">
                        <p className="text-gray-800 leading-relaxed">{result}</p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </section>

              {/* GALLERY */}
              {gallery.length > 0 && (
                <section aria-labelledby="galeria">
                  <div className="flex items-end justify-between gap-4 mb-5 md:mb-6">
                    <h3
                      id="galeria"
                      className="text-xl md:text-2xl font-bold"
                      style={{ color: brand.colors.navy }}
                    >
                      Galeria
                    </h3>
                    <p className="text-sm text-gray-500">
                      {gallery.length} foto{gallery.length > 1 ? "s" : ""}
                    </p>
                  </div>

                  <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
                    {gallery.map((img, i) => (
                      <div
                        key={i}
                        className="relative aspect-[4/3] rounded-2xl overflow-hidden border border-gray-100 bg-gray-50"
                      >
                        <Image
                          src={img}
                          alt={`${project.title} — imagem ${i + 1}`}
                          fill
                          className="object-cover"
                          sizes="(max-width: 768px) 50vw, 33vw"
                        />
                      </div>
                    ))}
                  </div>
                </section>
              )}
            </div>
          </div>
        </div>

        {/* CTA FIXO NO MOBILE (1 CTA só) */}
        <div className="lg:hidden fixed inset-x-0 bottom-0 z-50">
          <div className="border-t border-gray-200 bg-white/92 backdrop-blur supports-[backdrop-filter]:bg-white/70">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 py-3 flex gap-3">
              <Button
                asChild
                className="flex-1"
                size="lg"
                style={{ backgroundColor: brand.colors.orange }}
              >
                <Link href="/contactos#orcamento">
                  Pedir orçamento <ArrowUpRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="shrink-0">
                <Link href="/obras">Obras</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* CTASection pode ficar (sem botão competindo). Se ela já tiver botão interno,
          você pode ajustar o componente ou trocar o texto pra não repetir o CTA.
      */}
      <CTASection
        title="Gostou deste projeto?"
        description="Podemos realizar algo semelhante para si. Entre em contacto para discutirmos as suas necessidades."
      />
    </>
  );
}

function InfoRow({
  icon,
  label,
  value,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
}) {
  return (
    <div className="flex items-start gap-3">
      <div
        className="h-10 w-10 flex items-center justify-center rounded-2xl"
        style={{
          backgroundColor: `${brand.colors.orange}1A`,
          color: brand.colors.orange,
        }}
        aria-hidden="true"
      >
        {icon}
      </div>

      <div className="min-w-0">
        <p className="text-sm text-gray-500">{label}</p>
        <p className="font-semibold text-gray-900 leading-snug break-words">
          {value}
        </p>
      </div>
    </div>
  );
}

/** Se o texto não tiver quebras, tenta criar parágrafos de forma segura */
function splitIntoParagraphs(text: string) {
  if (!text) return [];
  const cleaned = text.replace(/\s+/g, " ").trim();

  // Se já tem quebras “de verdade”, respeita
  const hard = text
    .split(/\n{2,}/g)
    .map((p) => p.trim())
    .filter(Boolean);
  if (hard.length > 1) return hard;

  // Sem quebras: devolve 1 parágrafo (e usamos “Pontos-chave” + resumo pra organizar)
  return [cleaned];
}

/** Resumo curto (primeiras ~180–220 chars) sem cortar palavra no meio */
function buildSummary(text: string) {
  if (!text) return "";
  const t = text.replace(/\s+/g, " ").trim();
  if (t.length <= 220) return t;

  const cut = t.slice(0, 210);
  const lastSpace = cut.lastIndexOf(" ");
  return `${cut.slice(0, Math.max(120, lastSpace))}…`;
}

/** Pontos-chave baseado no que você já tem no projeto (sem inventar) */
function buildKeyPoints(project: any) {
  const points: string[] = [];
  if (project.location) points.push(`Local: ${project.location}.`);
  if (project.area) points.push(`Área: ${project.area}.`);
  if (project.duration) points.push(`Duração: ${project.duration}.`);
  if (Array.isArray(project.scope) && project.scope.length > 0) {
    points.push(`Âmbito: ${project.scope[0]}.`);
  }
  return points.slice(0, 3);
}
