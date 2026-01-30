import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { CheckCircle2, ArrowLeft } from 'lucide-react';
import * as LucideIcons from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Badge } from '@/components/ui/badge';
import { CTASection } from '@/components/sections/CTASection';
import { services } from '@/lib/data/services';
import { brand } from '@/lib/brand';

export async function generateStaticParams() {
  return services.map((service) => ({
    slug: service.slug,
  }));
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const service = services.find((s) => s.slug === params.slug);

  if (!service) {
    return { title: 'Serviço não encontrado' };
  }

  return {
    title: service.name,
    description: service.fullDesc,
  };
}

export default function ServicePage({ params }: { params: { slug: string } }) {
  const service = services.find((s) => s.slug === params.slug);

  if (!service) {
    notFound();
  }

  const Icon = (LucideIcons as any)[service.icon] as React.ComponentType<{ className?: string }>;

  return (
    <>
      <section className="bg-gradient-to-br from-[#0B4F8A] to-[#084170] text-white py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Button variant="ghost" asChild className="text-white hover:text-gray-200 mb-6">
            <Link href="/servicos">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Voltar aos Serviços
            </Link>
          </Button>
          <div className="flex items-start space-x-6">
            <div
              className="w-16 h-16 rounded-xl flex items-center justify-center flex-shrink-0"
              style={{ backgroundColor: brand.colors.orange }}
            >
              {Icon && <Icon className="h-8 w-8 text-white" />}
            </div>
            <div>
              <Badge className="mb-4" variant={service.category === 'principal' ? 'default' : 'secondary'}>
                {service.category === 'principal' ? 'Serviço Principal' : 'Serviço Complementar'}
              </Badge>
              <h1 className="text-4xl lg:text-5xl font-bold mb-4">{service.name}</h1>
              <p className="text-xl text-gray-200 max-w-3xl">{service.fullDesc}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold mb-6" style={{ color: brand.colors.navy }}>
                Benefícios
              </h2>
              <ul className="space-y-4">
                {service.benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start">
                    <CheckCircle2 className="h-6 w-6 mr-3 flex-shrink-0 mt-0.5" style={{ color: brand.colors.orange }} />
                    <span className="text-gray-700">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="text-3xl font-bold mb-6" style={{ color: brand.colors.navy }}>
                O Que Inclui
              </h2>
              <div className="space-y-3">
                {service.whatIncludes.map((item, index) => (
                  <Card key={index} className="border-l-4" style={{ borderLeftColor: brand.colors.orange }}>
                    <CardContent className="p-4">
                      <p className="text-gray-700">{item}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-20 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-6" style={{ color: brand.colors.navy }}>
            Áreas de Aplicação
          </h2>
          <div className="flex flex-wrap gap-3">
            {service.areas.map((area) => (
              <Badge key={area} variant="outline" className="text-base px-4 py-2">
                {area}
              </Badge>
            ))}
          </div>
        </div>
      </section>

      {service.faq.length > 0 && (
        <section className="py-16 lg:py-20 bg-white">
          <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold mb-8" style={{ color: brand.colors.navy }}>
              Perguntas Frequentes
            </h2>
            <Accordion type="single" collapsible className="w-full">
              {service.faq.map((faq, index) => (
                <AccordionItem key={index} value={`faq-${index}`}>
                  <AccordionTrigger className="text-left font-semibold" style={{ color: brand.colors.navy }}>
                    {faq.q}
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-600">
                    {faq.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>
      )}

      <CTASection
        title={`Interessado em ${service.name}?`}
        description="Solicite um orçamento personalizado ou entre em contacto para esclarecimentos adicionais."
      />
    </>
  );
}
