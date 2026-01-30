import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { ArrowLeft, MapPin, Calendar, Ruler, Clock, CheckCircle2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { CTASection } from '@/components/sections/CTASection';
import { projects } from '@/lib/data/projects';
import { brand } from '@/lib/brand';

export async function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const project = projects.find((p) => p.slug === params.slug);

  if (!project) {
    return { title: 'Obra não encontrada' };
  }

  return {
    title: project.title,
    description: project.description,
  };
}

export default function ProjectPage({ params }: { params: { slug: string } }) {
  const project = projects.find((p) => p.slug === params.slug);

  if (!project) {
    notFound();
  }

  return (
    <>
      <section className="bg-gradient-to-br from-[#0B4F8A] to-[#084170] text-white py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Button variant="ghost" asChild className="text-white hover:text-gray-200 mb-6">
            <Link href="/obras">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Voltar às Obras
            </Link>
          </Button>
          <div>
            <div className="flex flex-wrap gap-2 mb-4">
              {project.category.map((cat) => (
                <Badge key={cat} style={{ backgroundColor: brand.colors.orange }}>
                  {cat}
                </Badge>
              ))}
            </div>
            <h1 className="text-4xl lg:text-5xl font-bold mb-4">{project.title}</h1>
            <div className="flex flex-wrap items-center gap-6 text-gray-200">
              <div className="flex items-center">
                <MapPin className="h-5 w-5 mr-2" />
                {project.location}
              </div>
              <div className="flex items-center">
                <Calendar className="h-5 w-5 mr-2" />
                {project.year}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <div className="relative h-96 bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl overflow-hidden mb-8">
                <div className="absolute inset-0 flex items-center justify-center text-gray-400">
                  <div className="text-center">
                    <div className="text-8xl font-bold opacity-20">GJ</div>
                  </div>
                </div>
              </div>

              <h2 className="text-3xl font-bold mb-4" style={{ color: brand.colors.navy }}>
                Descrição do Projeto
              </h2>
              <p className="text-lg text-gray-700 mb-8">{project.description}</p>

              <h3 className="text-2xl font-bold mb-4" style={{ color: brand.colors.navy }}>
                Âmbito dos Trabalhos
              </h3>
              <ul className="space-y-3 mb-8">
                {project.scope.map((item, index) => (
                  <li key={index} className="flex items-start">
                    <CheckCircle2 className="h-6 w-6 mr-3 flex-shrink-0 mt-0.5" style={{ color: brand.colors.orange }} />
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>

              <h3 className="text-2xl font-bold mb-4" style={{ color: brand.colors.navy }}>
                Resultados
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {project.results.map((result, index) => (
                  <Card key={index} className="border-l-4" style={{ borderLeftColor: brand.colors.orange }}>
                    <CardContent className="p-4">
                      <p className="text-gray-700">{result}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            <div className="lg:col-span-1">
              <Card className="sticky top-24">
                <CardContent className="p-6 space-y-6">
                  <div>
                    <h3 className="text-xl font-bold mb-4" style={{ color: brand.colors.navy }}>
                      Detalhes do Projeto
                    </h3>
                  </div>

                  <div className="space-y-4">
                    <div className="flex items-start">
                      <Ruler className="h-5 w-5 mr-3 flex-shrink-0 mt-0.5" style={{ color: brand.colors.orange }} />
                      <div>
                        <p className="text-sm text-gray-600">Área</p>
                        <p className="font-semibold">{project.area}</p>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <Clock className="h-5 w-5 mr-3 flex-shrink-0 mt-0.5" style={{ color: brand.colors.orange }} />
                      <div>
                        <p className="text-sm text-gray-600">Duração</p>
                        <p className="font-semibold">{project.duration}</p>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <MapPin className="h-5 w-5 mr-3 flex-shrink-0 mt-0.5" style={{ color: brand.colors.orange }} />
                      <div>
                        <p className="text-sm text-gray-600">Localização</p>
                        <p className="font-semibold">{project.location}</p>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <Calendar className="h-5 w-5 mr-3 flex-shrink-0 mt-0.5" style={{ color: brand.colors.orange }} />
                      <div>
                        <p className="text-sm text-gray-600">Ano</p>
                        <p className="font-semibold">{project.year}</p>
                      </div>
                    </div>
                  </div>

                  <div className="pt-6 border-t">
                    <Button asChild className="w-full" size="lg" style={{ backgroundColor: brand.colors.orange }}>
                      <Link href="/contactos#orcamento">
                        Solicitar Orçamento
                      </Link>
                    </Button>
                  </div>
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
