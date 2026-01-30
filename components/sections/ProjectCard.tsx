import Link from "next/link";
import Image from "next/image";
import { MapPin, ArrowRight } from "lucide-react";

import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export interface ProjectCardProps {
  title: string;
  location: string;
  categories: string[];
  slug: string;
  thumbnail: string;
  NAVY: string;
  ORANGE: string;
}

export default function ProjectCard({
  title,
  location,
  categories,
  slug,
  thumbnail,
  NAVY,
  ORANGE,
}: ProjectCardProps) {
  return (
    <Link href={`/obras/${slug}`} className="group block">
      <Card className="overflow-hidden rounded-2xl border-white bg-white shadow-sm ring-1 ring-slate-200/70 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
        <div className="relative h-56 overflow-hidden bg-slate-100">
          <Image
            src={thumbnail}
            alt={title}
            fill
            priority={false}
            className="object-cover transition-transform duration-500 group-hover:scale-[1.04]"
            sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
          />

          <div className="absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100 bg-black/10" />

          <div className="absolute left-4 top-4">
            <div
              className="inline-flex items-center gap-2 rounded-full px-3 py-1 text-[11px] font-extrabold ring-1 backdrop-blur"
              style={{
                backgroundColor: "rgba(255,255,255,0.78)",
                color: NAVY,
                borderColor: "rgba(15,23,42,0.10)",
              }}
            >
              <span
                className="h-2 w-2 rounded-full"
                style={{ backgroundColor: ORANGE }}
              />
              Projeto
            </div>
          </div>
        </div>

        <CardContent className="p-6">
          <h3
            className="text-lg font-extrabold leading-snug"
            style={{ color: NAVY }}
          >
            <span
              className="decoration-2 underline-offset-4 group-hover:underline"
              style={{ textDecorationColor: `${ORANGE}AA` }}
            >
              {title}
            </span>
          </h3>

          <div className="mt-3 flex items-center gap-2 text-sm text-slate-600">
            <div
              className="flex h-8 w-8 items-center justify-center rounded-xl"
              style={{ backgroundColor: `${ORANGE}18` }}
            >
              <MapPin className="h-4 w-4" style={{ color: ORANGE }} />
            </div>
            <span>{location}</span>
          </div>

          <div className="mt-4 flex flex-wrap gap-2">
            {categories.slice(0, 3).map((cat) => (
              <Badge
                key={cat}
                className="rounded-full text-[11px] font-semibold"
                style={{
                  backgroundColor: `${NAVY}10`,
                  color: NAVY,
                  border: `1px solid ${NAVY}20`,
                }}
              >
                {cat}
              </Badge>
            ))}

            {categories.length > 3 && (
              <Badge
                className="rounded-full text-[11px] font-semibold"
                style={{
                  backgroundColor: `${ORANGE}14`,
                  color: "#111827",
                  border: `1px solid ${ORANGE}2A`,
                }}
              >
                +{categories.length - 3}
              </Badge>
            )}
          </div>

          <div className="mt-5 flex items-center justify-between">
            <p className="text-xs text-slate-500">Ver detalhes do projeto</p>

            <div
              className="inline-flex items-center gap-2 text-sm font-extrabold"
              style={{ color: NAVY }}
            >
              <span className="transition-transform group-hover:translate-x-1">
                Ver projeto
              </span>
              <ArrowRight
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
