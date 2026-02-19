'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import { Menu, X } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { brand } from '@/lib/brand';

const navigation = [
  { name: 'Início', href: '/' },
  { name: 'Serviços', href: '/servicos' },
  { name: 'Obras', href: '/obras' },
  { name: 'Sobre', href: '/sobre' },
  { name: 'Trabalhe Connosco', href: '/trabalhe-connosco' },
  { name: 'Contactos', href: '/contactos' },
];

export function Header() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isActive = (href: string) =>
    pathname === href || pathname.startsWith(href + '/');

  // lock scroll + ESC
  useEffect(() => {
    if (!mobileMenuOpen) return;

    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setMobileMenuOpen(false);
    };
    window.addEventListener('keydown', onKeyDown);

    return () => {
      document.body.style.overflow = prevOverflow;
      window.removeEventListener('keydown', onKeyDown);
    };
  }, [mobileMenuOpen]);

  const mobileDrawer =
    mounted && mobileMenuOpen
      ? createPortal(
          <div className="fixed inset-0 z-[9999] lg:hidden">
            {/* Backdrop */}
            <div
              className="absolute inset-0 bg-black/55 backdrop-blur-sm"
              onClick={() => setMobileMenuOpen(false)}
            />

            {/* Painel */}
            <div className="absolute right-0 top-0 z-[10000] h-full w-[86%] max-w-sm bg-white shadow-2xl overflow-y-auto">
              <div className="flex items-center justify-between border-b border-black/10 px-5 py-4">
                <img
                  src="/design_sem_nome_(2).png"
                  alt="Gobi & Júnior"
                  className="h-10 w-auto"
                />

                <button
                  type="button"
                  aria-label="Fechar menu"
                  onClick={() => setMobileMenuOpen(false)}
                  className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-black/10 bg-white"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>

              <div className="px-5 py-4">
                <div className="space-y-1">
                  {navigation.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className={`flex h-12 items-center justify-between rounded-xl px-3 text-[15px] font-medium transition ${
                        isActive(item.href)
                          ? 'bg-[#0B4F8A]/10 text-[#0B4F8A]'
                          : 'text-gray-800 hover:bg-black/5'
                      }`}
                    >
                      <span>{item.name}</span>
                      <span
                        className={`h-2 w-2 rounded-full ${
                          isActive(item.href) ? 'bg-[#0B4F8A]' : 'bg-black/15'
                        }`}
                      />
                    </Link>
                  ))}
                </div>

                <div className="mt-6 space-y-3">
                  <Button
                    asChild
                    className="w-full h-12 rounded-xl text-[15px] font-semibold"
                    style={{ backgroundColor: brand.colors.orange }}
                  >
                    <Link
                      href="/contactos#orcamento"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      Pedir Orçamento
                    </Link>
                  </Button>

                  <Link
                    href="/contactos"
                    onClick={() => setMobileMenuOpen(false)}
                    className="flex h-12 w-full items-center justify-center rounded-xl border border-black/15 bg-white text-[15px] font-semibold text-gray-800"
                  >
                    Contactos
                  </Link>

                  <p className="pt-1 text-xs text-black/50">
                    Resposta rápida em Lisboa e arredores.
                  </p>
                </div>
              </div>
            </div>
          </div>,
          document.body
        )
      : null;

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? 'bg-white shadow-md' : 'bg-white/95 backdrop-blur-sm'
        }`}
      >
        <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-20 items-center justify-between">
            <Link href="/" className="flex items-center">
              <img
                src="/design_sem_nome_(2).png"
                alt="Gobi & Júnior"
                className="h-14 w-auto"
              />
            </Link>

            <div className="hidden lg:flex lg:items-center lg:space-x-8">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`text-sm font-medium transition-colors ${
                    isActive(item.href)
                      ? 'text-[#0B4F8A]'
                      : 'text-gray-700 hover:text-[#0B4F8A]'
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </div>

            <div className="hidden lg:flex lg:items-center">
              <Button asChild style={{ backgroundColor: brand.colors.orange }}>
                <Link href="/contactos#orcamento">Pedir Orçamento</Link>
              </Button>
            </div>

            <button
              type="button"
              className="lg:hidden inline-flex h-10 w-10 items-center justify-center rounded-xl border border-black/10 bg-white text-gray-700"
              onClick={() => setMobileMenuOpen(true)}
              aria-label="Abrir menu"
              aria-expanded={mobileMenuOpen}
            >
              <Menu className="h-5 w-5" />
            </button>
          </div>
        </nav>
      </header>

      {mobileDrawer}
    </>
  );
}
