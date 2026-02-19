// ✅ ATUALIZA: app/contactos/page.tsx
// (usa embedded para NÃO aparecer "Contacto" no meio da página)

import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight, MessageCircle } from "lucide-react";

import { brand } from "@/lib/brand";
import { SolicitarOrcamentoSection } from "@/components/sections/SolicitarOrcamentoSection";

export const metadata: Metadata = {
  title: "Contactos",
  description:
    "Entre em contacto com a Gobi & Júnior para solicitar orçamento ou esclarecer dúvidas.",
};

function digitsOnly(s: string) {
  return (s || "").replace(/\D/g, "");
}

export default function ContactPage() {
  const NAVY = brand.colors.navy;
  const ORANGE = brand.colors.orange;

  const phoneRaw = brand.contact.phone || "";
  const whatsappRaw = brand.contact.whatsapp || brand.contact.phone || "";
  const whatsappDigits = digitsOnly(whatsappRaw);

  const waHref = whatsappDigits ? `https://wa.me/${whatsappDigits}` : "";

  return (
    <>
      <section className="relative overflow-hidden py-20">
        <div
          className="absolute inset-0"
          style={{
            background: `
              radial-gradient(900px 520px at 10% 0%, ${ORANGE}08 0%, transparent 60%),
              radial-gradient(900px 520px at 80% 10%, ${NAVY}08 0%, transparent 60%),
              linear-gradient(180deg, #ffffff 0%, #f8fafc 100%)
            `,
          }}
        />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h1
            className="text-5xl font-extrabold tracking-tight"
            style={{ color: NAVY }}
          >
            Contactos
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-slate-600">
            Pedido de orçamento com resposta clara: escopo, prazo e próximos
            passos.
          </p>

          <div className="mt-8 flex gap-4">
            <Link
              href="#form"
              className="inline-flex h-12 items-center justify-center rounded-2xl px-6 text-sm font-extrabold text-white shadow-sm"
              style={{ backgroundColor: NAVY }}
            >
              Solicitar orçamento <ArrowUpRight className="ml-2 h-4 w-4" />
            </Link>

            {waHref ? (
              <a
                href={waHref}
                target="_blank"
                rel="noreferrer"
                className="inline-flex h-12 items-center justify-center rounded-2xl px-6 text-sm font-extrabold ring-1 bg-white"
                style={{ borderColor: `${NAVY}20`, color: NAVY }}
              >
                <MessageCircle className="mr-2 h-4 w-4" />
                WhatsApp
              </a>
            ) : null}
          </div>
        </div>
      </section>

      <section id="form" className="bg-white pb-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SolicitarOrcamentoSection
            NAVY={NAVY}
            ORANGE={ORANGE}
            phone={phoneRaw}
            whatsapp={whatsappRaw}
            email={brand.contact.email || "orcamentos@gobijunior.pt"}
            locationLabel="Lisboa • Grande Lisboa • Margem Sul"
            embedded
            embeddedPadding="pt-0"
          />
        </div>
      </section>
    </>
  );
}
