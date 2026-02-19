"use client";

import { useMemo, useRef } from "react";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { CheckCircle2, Sparkles } from "lucide-react";

import { Card, CardContent } from "@/components/ui/card";

type Step = {
  number: string;
  title: string;
  description: string;
};

type ProcessStepsSectionProps = {
  NAVY: string;
  ORANGE: string;
  steps: Step[];
  title?: string;
  subtitle?: string;
};

export function ProcessStepsSection({
  NAVY,
  ORANGE,
  steps,
  title = "Como Trabalhamos",
  subtitle = "Processo estruturado para garantir qualidade, transparência e cumprimento.",
}: ProcessStepsSectionProps) {
  const ref = useRef<HTMLDivElement | null>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  // Progress bar (linha) com scroll — sutil (desktop)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.85", "end 0.35"],
  });

  const lineScale = useTransform(scrollYProgress, [0, 1], [0.12, 1]);

  const items = useMemo(
    () =>
      steps.map((s, idx) => ({
        ...s,
        idx,
      })),
    [steps]
  );

  return (
    <section ref={ref} className="relative overflow-hidden py-14 lg:py-20">
      {/* FUNDO (contraste elegante) */}
      <div
        className="absolute inset-0"
        style={{
          background: `
            radial-gradient(900px 420px at 20% 10%, ${ORANGE}14 0%, transparent 60%),
            radial-gradient(900px 420px at 80% 0%, ${NAVY}14 0%, transparent 60%),
            linear-gradient(180deg, #ffffff 0%, #f8fafc 100%)
          `,
        }}
      />

      {/* grid subtil */}
      <div className="pointer-events-none absolute inset-0 opacity-35">
        <div className="absolute inset-0 bg-grid-black/[0.035] bg-[length:22px_22px]" />
      </div>

      {/* blobs suaves */}
      <div
        className="pointer-events-none absolute -top-28 left-1/2 h-[380px] w-[760px] -translate-x-1/2 rounded-full blur-3xl"
        style={{ backgroundColor: `${NAVY}10` }}
      />
      <div
        className="pointer-events-none absolute -bottom-28 left-1/2 h-[380px] w-[760px] -translate-x-1/2 rounded-full blur-3xl"
        style={{ backgroundColor: `${ORANGE}10` }}
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* HEADER */}
        <div className="mx-auto max-w-3xl text-center">
          <div className="mb-3 flex items-center justify-center">
            <div
              className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-extrabold ring-1 backdrop-blur-sm"
              style={{
                backgroundColor: `${NAVY}08`,
                color: NAVY,
                borderColor: `${NAVY}1f`,
              }}
            >
              <Sparkles className="h-4 w-4" style={{ color: ORANGE }} />
              Processo claro. Entrega consistente.
            </div>
          </div>

          <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl" style={{ color: NAVY }}>
            {title}
          </h2>

          <p className="mt-3 text-lg text-slate-600">{subtitle}</p>
        </div>

        {/* MOBILE (nova versão premium / leve) */}
        <div className="mt-10 lg:hidden">
          <Card className="border-white bg-white/80 shadow-sm ring-1 ring-slate-200/70 backdrop-blur-sm">
            <div
              className="h-1 w-full"
              style={{ background: `linear-gradient(90deg, ${ORANGE} 0%, ${NAVY} 100%)` }}
            />
            <CardContent className="p-6">
              {/* Linha vertical */}
              <div className="relative">
                {/* trilho */}
                <div
                  aria-hidden
                  className="absolute left-[18px] top-2 bottom-2 w-px rounded-full"
                  style={{ backgroundColor: "rgba(15,23,42,0.14)" }}
                />
                <motion.div
                  aria-hidden
                  className="absolute left-[18px] top-2 w-px rounded-full"
                  style={{
                    background: `linear-gradient(180deg, ${ORANGE} 0%, ${NAVY} 100%)`,
                    transformOrigin: "top",
                    scaleY: lineScale,
                    height: "calc(100% - 16px)",
                  }}
                />

                <div className="space-y-6">
                  {items.map((step) => (
                    <motion.div
                      key={step.number}
                      initial={{ opacity: 0, y: 10 }}
                      animate={inView ? { opacity: 1, y: 0 } : undefined}
                      transition={{ duration: 0.45, delay: 0.05 * step.idx, ease: "easeOut" }}
                      className="relative pl-10"
                    >
                      {/* bullet */}
                      <div className="absolute left-0 top-1.5">
                        <div
                          className="flex h-9 w-9 items-center justify-center rounded-2xl ring-1 shadow-sm"
                          style={{ backgroundColor: "#fff", borderColor: `${NAVY}1f` }}
                        >
                          <div
                            className="flex h-7 w-7 items-center justify-center rounded-xl text-[11px] font-extrabold"
                            style={{ backgroundColor: `${NAVY}10`, color: NAVY }}
                          >
                            {step.number}
                          </div>
                        </div>
                      </div>

                      {/* conteúdo compacto */}
                      <div className="flex items-start justify-between gap-3">
                        <div className="min-w-0">
                          <h3 className="text-sm font-extrabold leading-snug" style={{ color: NAVY }}>
                            {step.title}
                          </h3>
                          <p className="mt-1 text-sm leading-relaxed text-slate-600">
                            {step.description}
                          </p>
                        </div>

                        <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0" style={{ color: ORANGE }} />
                      </div>

                      {/* divisor sutil */}
                      {step.idx !== items.length - 1 && (
                        <div
                          className="mt-5 h-px w-full"
                          style={{ backgroundColor: "rgba(15,23,42,0.08)" }}
                        />
                      )}
                    </motion.div>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* DESKTOP (mantém como estava) */}
        <div className="mt-12 hidden lg:block">
          {/* Linha conectora (desktop) */}
          <div className="relative">
            <div className="absolute left-0 right-0 top-6 h-px rounded-full bg-slate-200" />
            <motion.div
              className="absolute left-0 top-6 h-px rounded-full"
              style={{
                background: `linear-gradient(90deg, ${ORANGE} 0%, ${NAVY} 100%)`,
                transformOrigin: "left",
                scaleX: lineScale,
              }}
            />
          </div>

          <div className="grid grid-cols-5 gap-5">
            {items.map((step) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 14 }}
                animate={inView ? { opacity: 1, y: 0 } : undefined}
                transition={{ duration: 0.55, delay: 0.06 * step.idx, ease: "easeOut" }}
                className="relative"
              >
                {/* Nodo (desktop) */}
                <div className="flex items-center justify-center">
                  <div
                    className="relative z-10 flex h-12 w-12 items-center justify-center rounded-2xl ring-1 shadow-sm"
                    style={{
                      backgroundColor: "#fff",
                      borderColor: `${NAVY}1f`,
                    }}
                  >
                    <div
                      className="flex h-9 w-9 items-center justify-center rounded-xl text-xs font-extrabold"
                      style={{ backgroundColor: `${NAVY}10`, color: NAVY }}
                    >
                      {step.number}
                    </div>
                  </div>
                </div>

                <Card className="mt-0 border-white bg-white/80 shadow-sm ring-1 ring-slate-200/70 backdrop-blur-sm transition-all hover:-translate-y-[2px] hover:shadow-xl">
                  <div
                    className="h-1 w-full"
                    style={{ background: `linear-gradient(90deg, ${ORANGE} 0%, ${NAVY} 100%)` }}
                  />

                  <CardContent className="p-6">
                    <h3 className="text-base font-extrabold leading-snug" style={{ color: NAVY }}>
                      {step.title}
                    </h3>

                    <p className="mt-2 text-sm leading-relaxed text-slate-600">{step.description}</p>

                    <div className="mt-5 flex items-center gap-2 text-xs font-semibold text-slate-500">
                      <span
                        className="inline-flex h-1.5 w-1.5 rounded-full"
                        style={{ backgroundColor: ORANGE }}
                      />
                      {step.idx < steps.length - 1 ? "Próximo passo" : "Fecho & pós-obra"}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
