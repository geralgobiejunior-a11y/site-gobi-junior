import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import {
  ArrowLeft,
  MapPin,
  Calendar,
  Ruler,
  Clock,
  CheckCircle2,
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

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
  const project = projects.find((p) => p.slug === params.slug);
  if (!project) return { title: "Obra não encontrada" };

  return {
    title: `${project.title} | Gobi & Júnior`,
    description: project.description,
    openGraph: {
      title: project.title,
      description: project.description,
      images: [project.images[0]],
    },
  };
}

export default function ProjectPage({ params }: { params: Params }) {
  const project = projects.find((p) => p.slug === params.slug);
  if (!project) notFound();

  const heroImage = project.images[0];
  const gallery = project.images.slice(1);

  return (
    <>
      {/* HERO */}
      <section className="relative h-[65vh] min-h-[480px] overflow-hidden">
        <Image
          src={heroImage}
          alt={project.title}
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />

        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/80" />

        <div className="relative z-10 mx-auto max-w-7xl px-6 py-16 text-white">
          <Button
            variant="ghost"
            asChild
            className="text-white hover:bg-white/10 mb-6"
          >
            <Link href="/obras">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Voltar às Obras
            </Link>
          </Button>

          <div className="flex flex-wrap gap-2 mb-4">
            {project.category.map((cat) => (
              <Badge
                key={cat}
                className="text-white border-white/20"
                style={{ backgroundColor: "rgba(255,255,255,0.15)" }}
              >
                {cat}
              </Badge>
            ))}
          </div>

          <h1 className="text-4xl lg:text-6xl font-bold tracking-tight">
            {project.title}
          </h1>

          <div className="flex flex-wrap items-center gap-6 mt-6 text-white/85">
            <div className="flex items-center">
              <MapPin className="mr-2 h-5 w-5" />
              {project.location}
            </div>
            <div className="flex items-center">
              <Calendar className="mr-2 h-5 w-5" />
              {project.year}
            </div>
          </div>
        </div>
      </section>

      {/* CONTENT */}
      <section className="bg-white py-16">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* LEFT */}
            <div className="lg:col-span-2 space-y-12">
              {/* DESCRIPTION */}
              <div>
                <h2
                  className="text-3xl font-bold mb-4"
                  style={{ color: brand.colors.navy }}
                >
                  Descrição do Projeto
                </h2>
                <p className="text-gray-700 text-lg">
                  {project.description}
                </p>
              </div>

              {/* SCOPE */}
              <div>
                <h3
                  className="text-2xl font-bold mb-6"
                  style={{ color: brand.colors.navy }}
                >
                  Âmbito dos Trabalhos
                </h3>

                <ul className="space-y-4">
                  {project.scope.map((item, index) => (
                    <li key={index} className="flex items-start">
                      <CheckCircle2
                        className="h-6 w-6 mr-3 flex-shrink-0 mt-1"
                        style={{ color: brand.colors.orange }}
                      />
                      <span className="text-gray-800">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* RESULTS */}
              <div>
                <h3
                  className="text-2xl font-bold mb-6"
                  style={{ color: brand.colors.navy }}
                >
                  Resultados
                </h3>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {project.results.map((result, index) => (
                    <Card
                      key={index}
                      className="border border-gray-100 shadow-sm hover:shadow-md transition"
                    >
                      <CardContent className="p-5">
                        <p className="text-gray-800">{result}</p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>

              {/* GALLERY */}
              {gallery.length > 0 && (
                <div>
                  <h3
                    className="text-2xl font-bold mb-6"
                    style={{ color: brand.colors.navy }}
                  >
                    Galeria
                  </h3>

                  <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                    {gallery.map((img, i) => (
                      <div
                        key={i}
                        className="relative aspect-[4/3] rounded-xl overflow-hidden"
                      >
                        <Image
                          src={img}
                          alt={`${project.title} ${i + 1}`}
                          fill
                          className="object-cover"
                        />
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* RIGHT SIDEBAR */}
            <div>
              <Card className="sticky top-24 shadow-sm border border-gray-100">
                <CardContent className="p-6 space-y-6">
                  <h3
                    className="text-xl font-bold"
                    style={{ color: brand.colors.navy }}
                  >
                    Detalhes do Projeto
                  </h3>

                  <InfoRow icon={<Ruler />} label="Área" value={project.area} />
                  <InfoRow icon={<Clock />} label="Duração" value={project.duration} />
                  <InfoRow icon={<MapPin />} label="Localização" value={project.location} />
                  <InfoRow icon={<Calendar />} label="Ano" value={project.year} />

                  <Button
                    asChild
                    className="w-full"
                    size="lg"
                    style={{ backgroundColor: brand.colors.orange }}
                  >
                    <Link href="/contactos#orcamento">
                      Solicitar Orçamento
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

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
        className="h-9 w-9 flex items-center justify-center rounded-xl"
        style={{
          backgroundColor: `${brand.colors.orange}1A`,
          color: brand.colors.orange,
        }}
      >
        {icon}
      </div>
      <div>
        <p className="text-sm text-gray-500">{label}</p>
        <p className="font-semibold text-gray-900">{value}</p>
      </div>
    </div>
  );
}
