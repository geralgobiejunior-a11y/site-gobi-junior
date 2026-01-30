import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { MessageCircle, Mail } from 'lucide-react';
import { brand } from '@/lib/brand';

interface CTASectionProps {
  title?: string;
  description?: string;
  primaryText?: string;
  primaryHref?: string;
  secondaryText?: string;
  variant?: 'default' | 'dark';
}

export function CTASection({
  title = 'Pronto para começar o seu projeto?',
  description = 'Solicite um orçamento sem compromisso. A nossa equipa técnica está disponível para analisar as suas necessidades.',
  primaryText = 'Pedir Orçamento',
  primaryHref = '/contactos#orcamento',
  secondaryText = 'Falar no WhatsApp',
  variant = 'default'
}: CTASectionProps) {
  const whatsappUrl = `https://wa.me/${brand.contact.whatsapp.replace(/\+/g, '').replace(/\s/g, '')}?text=${encodeURIComponent(brand.contact.whatsappMessage)}`;

  const bgColor = variant === 'dark' ? 'bg-[#0B4F8A]' : 'bg-gray-50';
  const textColor = variant === 'dark' ? 'text-white' : 'text-[#111827]';
  const descColor = variant === 'dark' ? 'text-gray-200' : 'text-gray-600';

  return (
    <section className={`${bgColor} py-16 lg:py-20`}>
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
        <h2 className={`text-3xl lg:text-4xl font-bold mb-4 ${textColor}`}>
          {title}
        </h2>
        <p className={`text-lg mb-8 ${descColor}`}>
          {description}
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button asChild size="lg" style={{ backgroundColor: brand.colors.orange }}>
            <Link href={primaryHref}>
              <Mail className="mr-2 h-5 w-5" />
              {primaryText}
            </Link>
          </Button>
          <Button asChild size="lg" variant="outline" className={variant === 'dark' ? 'bg-white text-[#0B4F8A] hover:bg-gray-100' : ''}>
            <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
              <MessageCircle className="mr-2 h-5 w-5" />
              {secondaryText}
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
