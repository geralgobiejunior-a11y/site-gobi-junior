// components/sections/ServiceCard.tsx
"use client";

import React from "react";
import Link from "next/link";
import * as LucideIcons from "lucide-react";
import { ArrowUpRight, HelpCircle } from "lucide-react";

import { Card, CardContent } from "@/components/ui/card";
import { brand } from "@/lib/brand";

export type ServiceCardProps = {
  name: string;
  description: string;
  icon: string;
  featured?: boolean;
};

export function ServiceCard({ name, description, icon, featured = false }: ServiceCardProps) {
  const NAVY = brand.colors.navy;
  const ORANGE = brand.colors.orange;

  const Icon = (LucideIcons as any)[icon] as
    | React.ComponentType<{ className?: string; style?: React.CSSProperties }>
    | undefined;

  return (
    <div className="group relative">
      {/* ✅ BORDA GRADIENT (fica ATRÁS do card no hover) */}
      <div
        aria-hidden
        className="pointer-events-none absolute -inset-[1px] -z-10 rounded-3xl opacity-0 transition-opacity duration-200 group-hover:opacity-100"
        style={{
          background: `linear-gradient(135deg, ${ORANGE}CC 0%, rgba(11,79,138,0.25) 55%, rgba(11,79,138,0.12) 100%)`,
        }}
      />

      <Card
        className={[
          "relative z-10 overflow-hidden rounded-3xl bg-white",
          "ring-1 ring-slate-200/70",
          "transition-all duration-200 ease-out",
          "group-hover:-translate-y-[4px]",
          "group-hover:shadow-[0_20px_55px_-28px_rgba(2,6,23,0.45)]",
        ].join(" ")}
      >
        {/* ✅ LINHA TOP (sempre visível, acima de tudo) */}
        <div
          aria-hidden
          className="absolute inset-x-0 top-0 z-20 h-[3px] origin-left transition-transform duration-200 group-hover:scale-x-[1.06]"
          style={{
            opacity: featured ? 1 : 0.65,
            background: `linear-gradient(90deg, ${ORANGE}, ${ORANGE}AA, rgba(11,79,138,0.35))`,
          }}
        />

        <CardContent className="p-6 sm:p-7">
          {/* Badge + ícone */}
          <div className="mb-4 flex items-start justify-between gap-3">
            {featured ? (
              <span
                className="inline-flex items-center rounded-full px-3 py-1 text-[11px] font-extrabold ring-1"
                style={{
                  backgroundColor: "rgba(11,79,138,0.06)",
                  color: NAVY,
                  borderColor: "rgba(11,79,138,0.18)",
                }}
              >
                Mais solicitado
              </span>
            ) : (
              <span className="h-6" />
            )}

            {/* ícone pill */}
            <div
              className={[
                "flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl ring-1",
                "transition-all duration-200 ease-out",
                "group-hover:scale-[1.06]",
              ].join(" ")}
              style={{
                backgroundColor: "rgba(11,79,138,0.05)",
                borderColor: "rgba(11,79,138,0.18)",
              }}
              aria-hidden
            >
              {Icon ? (
                <Icon
                  className="h-6 w-6 transition-transform duration-200 group-hover:-rotate-[3deg]"
                  style={{ color: ORANGE }}
                />
              ) : (
                <HelpCircle
                  className="h-6 w-6 transition-transform duration-200 group-hover:-rotate-[3deg]"
                  style={{ color: ORANGE }}
                />
              )}
            </div>
          </div>

          {/* título */}
          <h3 className="text-xl font-extrabold leading-snug tracking-tight" style={{ color: NAVY }}>
            {name}
          </h3>

          {/* descrição (clamp sem plugin) */}
          <p
            className="mt-2 text-sm leading-relaxed text-slate-600"
            style={{
              display: "-webkit-box",
              WebkitLineClamp: 3,
              WebkitBoxOrient: "vertical" as any,
              overflow: "hidden",
            }}
          >
            {description}
          </p>

          {/* ✅ ÚNICA ação: Pedir orçamento */}
          <div className="mt-6 flex items-center justify-end">
            <Link
              href="/contactos#orcamento"
              className={[
                "inline-flex h-11 items-center justify-center rounded-full px-5 text-sm font-extrabold ring-1",
                "transition-all duration-200 ease-out",
                "group-hover:shadow-[0_10px_25px_-18px_rgba(2,6,23,0.35)]",
              ].join(" ")}
              style={{
                borderColor: "rgba(11,79,138,0.22)",
                color: NAVY,
                backgroundColor: "white",
              }}
            >
              Pedir orçamento
              <ArrowUpRight
                className="ml-2 h-4 w-4 transition-transform duration-200 group-hover:translate-x-[2px] group-hover:-translate-y-[1px]"
                style={{ color: ORANGE }}
              />
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

