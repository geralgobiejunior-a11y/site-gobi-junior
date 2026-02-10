import Link from "next/link";
import * as LucideIcons from "lucide-react";
import { ArrowUpRight, HelpCircle } from "lucide-react";

import { Card, CardContent } from "@/components/ui/card";
import { brand } from "@/lib/brand";

export type ServiceCardProps = {
  name: string;
  description: string;
  href: string;
  icon: string;
  featured?: boolean;
};

export function ServiceCard({
  name,
  description,
  href,
  icon,
  featured = false,
}: ServiceCardProps) {
  const NAVY = brand.colors.navy;
  const ORANGE = brand.colors.orange;

  const Icon = (LucideIcons as any)[icon] as React.ComponentType<{ className?: string }>;

  return (
    <Card
      className={[
        "relative overflow-hidden rounded-3xl bg-white transition-all",
        "ring-1 ring-slate-200/70 hover:-translate-y-1 hover:shadow-xl",
      ].join(" ")}
      style={{
        borderColor: featured ? `${ORANGE}55` : `${NAVY}12`,
      }}
    >
      {/* ✅ highlight arredondado no topo (featured) */}
      {featured && (
        <div
          aria-hidden
          className="absolute inset-x-0 top-0 h-[3px] rounded-t-3xl"
          style={{ background: `linear-gradient(90deg, ${ORANGE}, ${ORANGE}AA, ${NAVY}AA)` }}
        />
      )}

      <CardContent className="p-6">
        {/* ✅ badge dentro do layout (não flutua) */}
        {featured && (
          <div className="mb-3">
            <span
              className="inline-flex items-center rounded-full px-3 py-1 text-[11px] font-extrabold ring-1"
              style={{ backgroundColor: `${NAVY}10`, color: NAVY, borderColor: `${NAVY}18` }}
            >
              Mais solicitado
            </span>
          </div>
        )}

        {/* header */}
        <div className="flex items-start justify-between gap-4">
          <div className="min-w-0">
            <h3 className="text-lg font-extrabold leading-snug" style={{ color: NAVY }}>
              {name}
            </h3>
            <p className="mt-2 text-sm text-slate-600 leading-relaxed">{description}</p>
          </div>

          {/* icon pill */}
          <div
            className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl ring-1"
            style={{
              backgroundColor: `${NAVY}06`,
              borderColor: `${NAVY}14`,
            }}
            aria-hidden
          >
            {Icon ? (
              <Icon className="h-6 w-6" style={{ color: ORANGE }} />
            ) : (
              <HelpCircle className="h-6 w-6" style={{ color: ORANGE }} />
            )}
          </div>
        </div>

        {/* actions */}
        <div className="mt-6 flex items-center justify-between gap-4">
          <Link
            href={href}
            className="text-xs font-bold underline underline-offset-4 text-slate-500 hover:text-slate-700"
          >
            Ver detalhes
          </Link>

          <Link
            href="/contactos#orcamento"
            className="inline-flex h-10 items-center justify-center rounded-2xl px-4 text-sm font-extrabold ring-1 transition hover:bg-slate-50"
            style={{ borderColor: `${NAVY}18`, color: NAVY, backgroundColor: "white" }}
          >
            Pedir orçamento <ArrowUpRight className="ml-2 h-4 w-4" style={{ color: ORANGE }} />
          </Link>
        </div>
      </CardContent>
    </Card>
  );
}
