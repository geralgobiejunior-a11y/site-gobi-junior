'use client';

import { useMemo, useState } from 'react';
import { Search, Filter } from 'lucide-react';

import { brand } from '@/lib/brand';
import ProjectCard from '@/components/sections/ProjectCard';
import { projects } from '@/lib/data/projects';

type Project = {
  title: string;
  location: string;
  // o teu data pode vir como category ou categories
  category?: string[] | string;
  categories?: string[] | string;
  slug: string;
  thumbnail: string;
};

function normalizeCategories(p: Project): string[] {
  const raw = p.categories ?? p.category;

  if (Array.isArray(raw)) return raw.filter(Boolean);
  if (typeof raw === 'string' && raw.trim()) return [raw.trim()];
  return [];
}

export default function ProjectsClient() {
  const NAVY = brand.colors.navy;
  const ORANGE = brand.colors.orange;

  const allProjects = (projects as unknown as Project[]) ?? [];

  const [query, setQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const categories = useMemo(() => {
    const set = new Set<string>();
    for (const p of allProjects) {
      for (const c of normalizeCategories(p)) set.add(c);
    }
    return ['all', ...Array.from(set).sort((a, b) => a.localeCompare(b, 'pt'))];
  }, [allProjects]);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();

    return allProjects.filter((p) => {
      const cats = normalizeCategories(p);

      const matchQuery =
        !q ||
        p.title?.toLowerCase().includes(q) ||
        p.location?.toLowerCase().includes(q) ||
        cats.some((c) => c.toLowerCase().includes(q));

      const matchCategory =
        selectedCategory === 'all' || cats.some((c) => c === selectedCategory);

      return matchQuery && matchCategory;
    });
  }, [allProjects, query, selectedCategory]);

  return (
    <section className="bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl">
            <h1
              className="text-3xl lg:text-4xl font-extrabold tracking-tight"
              style={{ color: NAVY }}
            >
              Obras
            </h1>
            <p className="mt-3 text-slate-600">
              Alguns projetos executados pela {brand.name}. Use a pesquisa e filtros para
              encontrar exemplos por especialidade.
            </p>
          </div>

          <div className="flex w-full flex-col gap-3 sm:flex-row lg:w-auto">
            <div className="relative w-full sm:w-[320px]">
              <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
              <input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Pesquisar por título, local ou categoria…"
                className="h-12 w-full rounded-2xl border border-slate-200 bg-white pl-10 pr-4 text-sm outline-none ring-0 transition focus:border-slate-300"
              />
            </div>

            <div className="relative w-full sm:w-[220px]">
              <Filter className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="h-12 w-full appearance-none rounded-2xl border border-slate-200 bg-white pl-10 pr-10 text-sm outline-none transition focus:border-slate-300"
              >
                {categories.map((c) => (
                  <option key={c} value={c}>
                    {c === 'all' ? 'Todas as categorias' : c}
                  </option>
                ))}
              </select>

              <div
                className="pointer-events-none absolute right-3 top-1/2 h-2 w-2 -translate-y-1/2 rotate-45 border-b-2 border-r-2"
                style={{ borderColor: `${NAVY}55` }}
              />
            </div>
          </div>
        </div>

        <div className="mt-6 flex items-center justify-between">
          <p className="text-sm text-slate-600">
            A mostrar{' '}
            <span className="font-bold" style={{ color: NAVY }}>
              {filtered.length}
            </span>{' '}
            de{' '}
            <span className="font-bold" style={{ color: NAVY }}>
              {allProjects.length}
            </span>{' '}
            projetos
          </p>

          <button
            type="button"
            onClick={() => {
              setQuery('');
              setSelectedCategory('all');
            }}
            className="text-sm font-extrabold transition hover:opacity-90"
            style={{ color: NAVY }}
          >
            Limpar filtros
          </button>
        </div>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filtered.map((project) => (
            <ProjectCard
              key={project.slug}
              title={project.title}
              location={project.location}
              categories={normalizeCategories(project)}
              slug={project.slug}
              thumbnail={project.thumbnail}
              NAVY={NAVY}
              ORANGE={ORANGE}
            />
          ))}
        </div>

        {filtered.length === 0 && (
          <div className="mt-12 rounded-3xl bg-slate-50 p-8 ring-1 ring-slate-200/70">
            <p className="text-base font-extrabold" style={{ color: NAVY }}>
              Nenhum projeto encontrado.
            </p>
            <p className="mt-2 text-sm text-slate-600">
              Tente outra pesquisa ou selecione “Todas as categorias”.
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
