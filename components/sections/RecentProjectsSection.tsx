import Link from "next/link";
import { ArrowRight, Briefcase } from "lucide-react";

import ProjectCard from "@/components/sections/ProjectCard";

type Project = {
  slug: string;
  title: string;
  location: string;
  category: string[]; // aqui é o teu shape deste componente
  thumbnail: string;
};

type RecentProjectsSectionProps = {
  NAVY: string;
  ORANGE: string;
  projects: Project[];
};

export function RecentProjectsSection({
  NAVY,
  ORANGE,
  projects,
}: RecentProjectsSectionProps) {
  return (
    <section className="relative overflow-hidden py-16 lg:py-24">
      <div
        className="absolute inset-0"
        style={{
          background: `
            radial-gradient(900px 420px at 50% 0%, ${NAVY}14 0%, transparent 62%),
            radial-gradient(900px 420px at 50% 100%, ${ORANGE}14 0%, transparent 62%),
            linear-gradient(180deg, #ffffff 0%, #ffffff 45%, #f7f8fb 100%)
          `,
        }}
      />

      <div className="pointer-events-none absolute inset-0 opacity-30">
        <div className="absolute inset-0 bg-grid-black/[0.03] bg-[length:24px_24px]" />
      </div>

      <div
        className="pointer-events-none absolute left-0 right-0 top-0 h-24"
        style={{
          background: `linear-gradient(180deg, ${NAVY}08 0%, transparent 100%)`,
        }}
      />

      <div
        className="pointer-events-none absolute -top-28 left-1/2 h-[360px] w-[760px] -translate-x-1/2 rounded-full blur-3xl"
        style={{ backgroundColor: `${NAVY}10` }}
      />
      <div
        className="pointer-events-none absolute -bottom-28 left-1/2 h-[360px] w-[760px] -translate-x-1/2 rounded-full blur-3xl"
        style={{ backgroundColor: `${ORANGE}10` }}
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <div className="mb-4 flex items-center justify-center">
            <div
              className="inline-flex items-center gap-2 rounded-full px-4 py-2 text-xs font-extrabold ring-1 shadow-sm backdrop-blur-sm"
              style={{
                backgroundColor: `${NAVY}06`,
                color: NAVY,
                borderColor: `${NAVY}1f`,
              }}
            >
              <span
                className="flex h-6 w-6 items-center justify-center rounded-full"
                style={{ backgroundColor: `${ORANGE}22` }}
              >
                <Briefcase className="h-3.5 w-3.5" style={{ color: ORANGE }} />
              </span>
              Portfólio de obras executadas
            </div>
          </div>

          <h2
            className="text-3xl font-extrabold tracking-tight sm:text-4xl"
            style={{ color: NAVY }}
          >
            Obras Recentes
          </h2>

          <p className="mt-3 text-lg text-slate-600">
            Exemplos de trabalhos entregues com rigor técnico, organização e
            cumprimento.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.slice(0, 3).map((project) => (
            <ProjectCard
              key={project.slug}
              title={project.title}
              location={project.location}
              categories={project.category}
              slug={project.slug}
              thumbnail={project.thumbnail}
              NAVY={NAVY}
              ORANGE={ORANGE}
            />
          ))}
        </div>

        <div className="mt-12 flex flex-col items-center gap-3">
          <Link
            href="/obras"
            className="group inline-flex h-12 items-center justify-center rounded-xl px-7 font-extrabold shadow-sm ring-1 transition-all hover:-translate-y-[1px] hover:shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2"
            style={{
              borderColor: `${NAVY}1f`,
              background: `linear-gradient(180deg, ${ORANGE} 0%, ${ORANGE}cc 100%)`,
              color: "#0b1220",
              boxShadow: `0 10px 28px ${ORANGE}26`,
            }}
          >
            Ver Todas as Obras
            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>

          <p className="text-xs text-slate-500">
            Mais detalhes, fotos e especialidades em cada projeto.
          </p>
        </div>
      </div>
    </section>
  );
}
