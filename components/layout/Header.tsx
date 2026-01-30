'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';
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

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white shadow-md' : 'bg-white/95 backdrop-blur-sm'
      }`}
    >
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          {/* LOGO (somente imagem) */}
          <Link href="/" className="flex items-center">
            <img
              src="/design_sem_nome_(2).png"
              alt="Gobi & Júnior"
              className="h-14 w-auto"
            />
          </Link>

          {/* Menu desktop */}
          <div className="hidden lg:flex lg:items-center lg:space-x-8">
            {navigation.map((item) => {
              const isActive =
                pathname === item.href || pathname.startsWith(item.href + '/');

              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`text-sm font-medium transition-colors ${
                    isActive
                      ? 'text-[#0B4F8A]'
                      : 'text-gray-700 hover:text-[#0B4F8A]'
                  }`}
                >
                  {item.name}
                </Link>
              );
            })}
          </div>

          {/* CTA desktop */}
          <div className="hidden lg:flex lg:items-center">
            <Button asChild style={{ backgroundColor: brand.colors.orange }}>
              <Link href="/contactos#orcamento">Pedir Orçamento</Link>
            </Button>
          </div>

          {/* Botão menu mobile */}
          <button
            type="button"
            className="lg:hidden rounded-md p-2 text-gray-700"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? 'Fechar menu' : 'Abrir menu'}
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Menu mobile */}
        {mobileMenuOpen && (
          <div className="lg:hidden py-4 border-t border-gray-200">
            <div className="flex flex-col space-y-4">
              {navigation.map((item) => {
                const isActive =
                  pathname === item.href || pathname.startsWith(item.href + '/');

                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={`text-base font-medium ${
                      isActive ? 'text-[#0B4F8A]' : 'text-gray-700'
                    }`}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                );
              })}

              <Button
                asChild
                className="w-full"
                style={{ backgroundColor: brand.colors.orange }}
              >
                <Link href="/contactos#orcamento" onClick={() => setMobileMenuOpen(false)}>
                  Pedir Orçamento
                </Link>
              </Button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
