import './globals.css';

import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { WhatsAppButton } from '@/components/layout/WhatsAppButton';
import { Toaster } from '@/components/ui/toaster';
import { brand } from '@/lib/brand';

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  display: 'swap',
});

const BRAND_NAVY = brand.colors.navy;
const BRAND_NAVY_DARK = brand.colors.navyDark;
const BRAND_ORANGE = brand.colors.orange;

// helper simples: rgba sem depender de lib
function rgba(hex: string, alpha: number) {
  const h = hex.replace('#', '').trim();
  const full = h.length === 3 ? h.split('').map((c) => c + c).join('') : h;
  const r = parseInt(full.slice(0, 2), 16);
  const g = parseInt(full.slice(2, 4), 16);
  const b = parseInt(full.slice(4, 6), 16);
  return `rgba(${r}, ${g}, ${b}, ${alpha})`;
}

export const metadata: Metadata = {
  title: {
    default: `${brand.name} | ${brand.tagline}`,
    template: `%s | ${brand.name}`,
  },
  description:
    'Especialistas em instalações elétricas, pladur, tetos falsos e pintura. Soluções técnicas na construção com rigor, qualidade e cumprimento de prazos em Lisboa e arredores.',
  keywords: [
    'instalações elétricas',
    'eletricista',
    'quadros elétricos',
    'pladur',
    'tetos falsos',
    'pintura',
    'remodelação',
    'construção',
    'Lisboa',
    'obras',
  ],
  authors: [{ name: brand.name }],
  applicationName: brand.name,
  category: 'business',

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },

  openGraph: {
    type: 'website',
    locale: 'pt_PT',
    siteName: brand.name,
    title: `${brand.name} | ${brand.tagline}`,
    description:
      'Instalações elétricas, pladur, tetos falsos e pintura — execução com rigor, qualidade e cumprimento.',
  },

  twitter: {
    card: 'summary_large_image',
    title: `${brand.name} | ${brand.tagline}`,
    description:
      'Soluções técnicas na construção: elétrica, pladur, tetos falsos e pintura, com rigor e cumprimento.',
  },

  icons: {
    icon: [{ url: '/favicon.ico' }, { url: '/icon.png', type: 'image/png' }],
    apple: [{ url: '/apple-touch-icon.png' }],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt" suppressHydrationWarning className="scroll-smooth">
      <head>
        {/* Viewport compatível com qualquer versão do Next */}
        <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
        {/* Theme color (light/dark) */}
        <meta name="theme-color" media="(prefers-color-scheme: light)" content={BRAND_NAVY} />
        <meta name="theme-color" media="(prefers-color-scheme: dark)" content={BRAND_NAVY_DARK} />
      </head>

      <body
        style={
          {
            '--brand-navy': BRAND_NAVY,
            '--brand-navy-dark': BRAND_NAVY_DARK,
            '--brand-orange': BRAND_ORANGE,
          } as React.CSSProperties
        }
        className={[
          inter.className,
          'min-h-screen bg-slate-50 text-slate-900 antialiased',
          'selection:bg-[color:var(--brand-orange)] selection:text-slate-950',
        ].join(' ')}
      >
        <a
          href="#conteudo"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-lg focus:bg-white focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-slate-900 focus:shadow-lg"
        >
          Saltar para o conteúdo
        </a>

        <div className="relative flex min-h-screen flex-col">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-x-0 top-0 h-[560px]"
            style={{
              backgroundImage: `linear-gradient(to bottom, ${rgba(
                BRAND_NAVY,
                0.16
              )} 0%, ${rgba(BRAND_NAVY, 0.0)} 55%, transparent 100%)`,
            }}
          />

          <Header />

          <main id="conteudo" className="relative flex-1 pt-20">
            {children}
          </main>

          <Footer />

          <WhatsAppButton />
          <Toaster />
        </div>
      </body>
    </html>
  );
}
