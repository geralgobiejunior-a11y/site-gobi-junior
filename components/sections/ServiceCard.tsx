import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import { Card, CardContent } from "@/components/ui/card";
import { brand } from "@/lib/brand";

export type ServiceCardProps = {
  name: string;
  description: string;
  href: string;
  icon: string; // (mantive string porque teu data usa string)
  featured?: boolean; // ✅ agora existe
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

  return (
    <Link href={href} className="group block">
      <Card
        className={[
          "relative overflow-hidden rounded-2xl bg-white transition-all",
          "ring-1 ring-slate-200/70 hover:-translate-y-1 hover:shadow-xl",
          featured ? "shadow-md" : "shadow-sm",
        ].join(" ")}
      >
        {/* destaque top line (só se featured) */}
        {featured && (
          <div
            aria-hidden
            className="absolute left-0 right-0 top-0 h-[3px]"
            style={{
              background: `linear-gradient(90deg, ${ORANGE}, ${ORANGE}AA, ${NAVY}AA)`,
            }}
          />
        )}

        {/* glow sutil */}
        <div
          aria-hidden
          className="pointer-events-none absolute -top-24 right-[-120px] h-[260px] w-[260px] rounded-full blur-3xl opacity-40"
          style={{
            background: featured
              ? `radial-gradient(circle, ${ORANGE}33, transparent 60%)`
              : `radial-gradient(circle, ${NAVY}22, transparent 60%)`,
          }}
        />

        <CardContent className="p-6">
          {/* header */}
          <div className="flex items-start justify-between gap-4">
            <div className="min-w-0">
              <h3
                className="text-lg font-extrabold leading-snug"
                style={{ color: NAVY }}
              >
                <span
                  className="decoration-2 underline-offset-4 group-hover:underline"
                  style={{ textDecorationColor: `${ORANGE}AA` }}
                >
                  {name}
                </span>
              </h3>

              <p className="mt-2 text-sm text-slate-600">{description}</p>
            </div>

            {/* icon pill */}
            <div
              className="flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl ring-1"
              style={{
                backgroundColor: featured ? `${ORANGE}18` : `${NAVY}10`,
                borderColor: featured ? `${ORANGE}2A` : `${NAVY}22`,
                color: featured ? ORANGE : NAVY,
              }}
              aria-hidden
            >
              <span className="text-base font-extrabold">{icon}</span>
            </div>
          </div>

          {/* footer */}
          <div className="mt-5 flex items-center justify-between">
            <p className="text-xs text-slate-500">Ver detalhes do serviço</p>

            <div
              className="inline-flex items-center gap-2 text-sm font-extrabold"
              style={{ color: NAVY }}
            >
              <span className="transition-transform group-hover:translate-x-1">
                Ver serviço
              </span>
              <ArrowUpRight
                className="h-4 w-4 transition-transform group-hover:translate-x-1"
                style={{ color: ORANGE }}
              />
            </div>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
}
