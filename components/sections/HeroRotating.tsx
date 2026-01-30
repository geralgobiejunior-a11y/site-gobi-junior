'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useEffect, useMemo, useRef, useState } from 'react';
import { ArrowRight } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { brand } from '@/lib/brand';

type HeroRotatingProps = {
  images?: string[];
  intervalMs?: number;
  /** 0..1 (quanto mais alto, mais escuro) */
  darkOverlay?: number;
  /** 0..1 (tinta/navy por cima) */
  navyWash?: number;
};

function hexToRgba(hex: string, alpha: number) {
  const clean = hex.replace('#', '').trim();
  const isShort = clean.length === 3;
  const full = isShort ? clean.split('').map((c) => c + c).join('') : clean;

  const r = parseInt(full.slice(0, 2), 16);
  const g = parseInt(full.slice(2, 4), 16);
  const b = parseInt(full.slice(4, 6), 16);

  return `rgba(${r}, ${g}, ${b}, ${alpha})`;
}

export function HeroRotating({
  images = ['/hero/1.webp', '/hero/2.webp', '/hero/3.webp'],
  intervalMs = 9000,
  // pode subir pra 0.55 se quiser mais contraste geral
  darkOverlay = 0.50,
  // mais baixo pra não “sujar” o texto
  navyWash = 0.22,
}: HeroRotatingProps) {
  const NAVY = brand.colors.navy;
  const ORANGE = brand.colors.orange;

  const list = useMemo(() => images.filter(Boolean), [images]);
  const [active, setActive] = useState(0);
  const [prev, setPrev] = useState<number | null>(null);
  const [fadeIn, setFadeIn] = useState(true);
  const timerRef = useRef<number | null>(null);

  const currentSrc = list[active % list.length];
  const prevSrc = prev === null ? null : list[prev % list.length];

  useEffect(() => {
    if (list.length <= 1) return;

    timerRef.current = window.setInterval(() => {
      setPrev(active);
      setFadeIn(false);

      window.setTimeout(() => {
        setActive((i) => (i + 1) % list.length);
        setFadeIn(true);
      }, 30);
    }, intervalMs);

    return () => {
      if (timerRef.current) window.clearInterval(timerRef.current);
    };
  }, [active, intervalMs, list.length]);

  const whatsappHref = `https://wa.me/${brand.contact.whatsapp
    .replace(/\+/g, '')
    .replace(/\s/g, '')}?text=${encodeURIComponent(brand.contact.whatsappMessage)}`;

  const navyA = hexToRgba(NAVY, navyWash);
  const navyB = hexToRgba(NAVY, Math.max(0, navyWash - 0.10));

  // overlay gradiente: mais escuro onde está o texto (esquerda)
  const left = Math.min(0.86, darkOverlay + 0.22);
  const mid = Math.min(0.70, darkOverlay + 0.10);
  const right = Math.max(0.18, darkOverlay - 0.18);

  return (
    <section className="relative overflow-hidden">
      {/* BACKGROUND (crossfade real) */}
      <div className="absolute inset-0">
        {prevSrc && (
          <Image src={prevSrc} alt="" fill sizes="100vw" className="object-cover" priority />
        )}

        <Image
          src={currentSrc}
          alt=""
          fill
          sizes="100vw"
          className={[
            'object-cover transition-opacity duration-[1200ms] ease-in-out',
            fadeIn ? 'opacity-100' : 'opacity-0',
          ].join(' ')}
          priority
        />

        {/* overlay preto em gradiente (legibilidade sem “tampar” a imagem) */}
        <div
          className="absolute inset-0"
          style={{
            background: `linear-gradient(90deg,
              rgba(0,0,0,${left}) 0%,
              rgba(0,0,0,${mid}) 45%,
              rgba(0,0,0,${right}) 100%
            )`,
          }}
          aria-hidden="true"
        />

        {/* wash navy sutil */}
        <div
          className="absolute inset-0"
          style={{
            background: `linear-gradient(135deg, ${navyA} 0%, ${navyB} 50%, rgba(0,0,0,0) 100%)`,
          }}
          aria-hidden="true"
        />

        {/* vinheta leve */}
        <div
          className="absolute inset-0"
          style={{
            background:
              'radial-gradient(1200px 600px at 20% 35%, rgba(0,0,0,0) 0%, rgba(0,0,0,0.22) 58%, rgba(0,0,0,0.38) 100%)',
          }}
          aria-hidden="true"
        />

        {/* pattern discreto */}
        <div
          className="absolute inset-0 opacity-[0.45]"
          style={{
            backgroundImage:
              'radial-gradient(circle at 1px 1px, rgba(255,255,255,0.08) 1px, transparent 0)',
            backgroundSize: '22px 22px',
          }}
          aria-hidden="true"
        />
      </div>

      {/* CONTEÚDO */}
      <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <div className="max-w-3xl">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm font-semibold text-white/90 ring-1 ring-white/15 backdrop-blur">
            <span className="h-2 w-2 rounded-full" style={{ backgroundColor: ORANGE }} />
            {brand.tagline}
          </div>

          <h1 className="text-4xl font-extrabold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl drop-shadow-[0_3px_18px_rgba(0,0,0,0.55)]">
            Soluções Técnicas na Construção, com Rigor e Cumprimento
          </h1>

          {/* ✅ sem retângulo, só cor + sombra */}
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/90 sm:text-xl drop-shadow-[0_2px_12px_rgba(0,0,0,0.70)]">
            Instalações elétricas e especialidades de acabamento para obras residenciais e comerciais.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
            <Button
              asChild
              size="lg"
              className="h-12 px-6 font-semibold shadow-lg"
              style={{ backgroundColor: ORANGE }}
            >
              <Link href="/contactos#orcamento">
                Pedir Orçamento <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>

            <Button
              asChild
              size="lg"
              variant="outline"
              className="h-12 border-white/25 bg-white text-slate-900 hover:bg-white/95"
            >
              <a href={whatsappHref} target="_blank" rel="noopener noreferrer">
                Falar no WhatsApp
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
