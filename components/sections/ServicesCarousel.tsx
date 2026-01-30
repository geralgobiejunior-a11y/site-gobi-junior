"use client";

import Link from "next/link";
import { useEffect, useMemo, useRef, useState } from "react";
import { ChevronLeft, ChevronRight, Sparkles } from "lucide-react";

import { Button } from "@/components/ui/button";
import { ServiceCard } from "@/components/sections/ServiceCard";
import { brand } from "@/lib/brand";
import type { Service } from "@/lib/data/services";

type Props = {
  title?: string;
  subtitle?: string;
  services: Service[];
  viewAllHref?: string;
};

export function ServicesCarousel({
  title = "Serviços",
  subtitle = "Serviços técnicos e acabamentos para obra e manutenção — com rigor, organização e cumprimento.",
  services,
  viewAllHref = "/servicos",
}: Props) {
  const NAVY = brand.colors.navy;
  const ORANGE = brand.colors.orange;

  const scrollerRef = useRef<HTMLDivElement | null>(null);

  // loop: duplicamos 3x e começamos no bloco do meio
  const tripled = useMemo(() => [...services, ...services, ...services], [services]);
  const baseLen = services.length;

  // índice “real” (0..baseLen-1) para dots
  const [activeRealIndex, setActiveRealIndex] = useState(0);

  // drag desktop
  const drag = useRef({
    active: false,
    startX: 0,
    startScrollLeft: 0,
    pointerId: -1,
  });

  // mede step (card + gap) com base no primeiro card
  function getStepPx() {
    const el = scrollerRef.current;
    if (!el) return 400;

    const first = el.querySelector<HTMLElement>("[data-card='1']");
    const cardW = first?.offsetWidth ?? 360;
    const gap = 24; // gap-6
    return cardW + gap;
  }

  // posiciona no “meio” (bloco B)
  function snapToMiddle(behavior: ScrollBehavior = "auto") {
    const el = scrollerRef.current;
    if (!el) return;

    const step = getStepPx();
    // inicio do bloco B
    const middleStartIndex = baseLen; // porque A=0..baseLen-1, B=baseLen..2*baseLen-1
    const target = middleStartIndex * step;
    el.scrollTo({ left: target, behavior });
  }

  // teleport se chegar perto dos extremos
function normalizeInfiniteScroll() {
  const el = scrollerRef.current;
  if (!el) return;

  const step = getStepPx();
  const blockSize = baseLen * step;

  // B começa em blockSize e termina em 2*blockSize
  const B_START = blockSize;
  const B_END = blockSize * 2;

  // margem para não brigar com snap (2 cards de folga)
  const MARGIN = step * 2;

  const x = el.scrollLeft;

  // Se entrou no A (antes do B), manda pra B mantendo a mesma “imagem”
  if (x < B_START - MARGIN) {
    const prev = el.style.scrollBehavior;
    el.style.scrollBehavior = "auto";
    el.scrollLeft = x + blockSize;
    el.style.scrollBehavior = prev;
    return;
  }

  // Se entrou no C (depois do B), manda pra B mantendo a mesma “imagem”
  if (x > B_END + MARGIN) {
    const prev = el.style.scrollBehavior;
    el.style.scrollBehavior = "auto";
    el.scrollLeft = x - blockSize;
    el.style.scrollBehavior = prev;
    return;
  }
}


  // atualiza dots (índice real)
  function updateActiveDot() {
    const el = scrollerRef.current;
    if (!el) return;

    const step = getStepPx();
    const approxIndex = Math.round(el.scrollLeft / step); // índice na lista tripla
    const real = ((approxIndex % baseLen) + baseLen) % baseLen;
    setActiveRealIndex(real);
  }

  function scrollByAmount(direction: "left" | "right") {
    const el = scrollerRef.current;
    if (!el) return;

    const amount = Math.max(320, Math.floor(el.clientWidth * 0.9));
    el.scrollBy({ left: direction === "left" ? -amount : amount, behavior: "smooth" });
  }

  function scrollToRealIndex(realIndex: number) {
    const el = scrollerRef.current;
    if (!el) return;

    const step = getStepPx();
    // sempre navega dentro do bloco do meio (B)
    const middleStartIndex = baseLen;
    const target = (middleStartIndex + realIndex) * step;

    el.scrollTo({ left: target, behavior: "smooth" });
  }

  function onPointerDown(e: React.PointerEvent<HTMLDivElement>) {
    const el = scrollerRef.current;
    if (!el) return;

    if (e.pointerType === "touch") return;

    drag.current.active = true;
    drag.current.pointerId = e.pointerId;
    drag.current.startX = e.clientX;
    drag.current.startScrollLeft = el.scrollLeft;

    el.setPointerCapture(e.pointerId);
    el.classList.add("dragging");
  }

  function onPointerMove(e: React.PointerEvent<HTMLDivElement>) {
    const el = scrollerRef.current;
    if (!el) return;
    if (!drag.current.active) return;

    const dx = e.clientX - drag.current.startX;
    el.scrollLeft = drag.current.startScrollLeft - dx;
  }

  function endDrag() {
    const el = scrollerRef.current;
    if (!el) return;

    drag.current.active = false;
    drag.current.pointerId = -1;
    el.classList.remove("dragging");

    // normaliza e atualiza dot
    normalizeInfiniteScroll();
    updateActiveDot();
  }

  useEffect(() => {
    // start no meio quando montar
    // (auto para não dar “pulo animado”)
    snapToMiddle("auto");
    updateActiveDot();

    const el = scrollerRef.current;
    if (!el) return;

    const onScroll = () => {
      normalizeInfiniteScroll();
      updateActiveDot();
    };

    el.addEventListener("scroll", onScroll, { passive: true });

    const ro = new ResizeObserver(() => {
      // se mudar largura do card, reposiciona no meio mantendo o dot
      snapToMiddle("auto");
      scrollToRealIndex(activeRealIndex);
    });
    ro.observe(el);

    return () => {
      el.removeEventListener("scroll", onScroll);
      ro.disconnect();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [baseLen]);

  return (
    <section className="relative bg-white py-16 lg:py-24">
      {/* fundo “designer” sutil */}
      <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
        <div
          className="absolute -top-24 left-1/2 h-[420px] w-[420px] -translate-x-1/2 rounded-full blur-3xl opacity-40"
          style={{ background: `radial-gradient(circle, ${ORANGE}33, transparent 60%)` }}
        />
        <div
          className="absolute -bottom-28 right-[-120px] h-[520px] w-[520px] rounded-full blur-3xl opacity-30"
          style={{ background: `radial-gradient(circle, ${NAVY}26, transparent 60%)` }}
        />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(15,23,42,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(15,23,42,0.05)_1px,transparent_1px)] bg-[size:28px_28px] opacity-[0.18]" />
      </div>

      {/* header */}
      <div className="relative mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 text-center">
        <div
          className="mx-auto inline-flex items-center gap-2 rounded-full px-4 py-2 text-xs font-extrabold ring-1 ring-slate-200/70"
          style={{ backgroundColor: "rgba(255,255,255,0.9)", color: NAVY }}
        >
          <Sparkles className="h-4 w-4" style={{ color: ORANGE }} />
          Seleção de serviços
        </div>

        <h2 className="mt-5 text-3xl font-extrabold tracking-tight sm:text-4xl" style={{ color: NAVY }}>
          {title}
        </h2>
        <p className="mt-3 text-lg text-slate-600">{subtitle}</p>
      </div>

      {/* full-bleed sem overflow do body */}
      <div className="relative mt-12">
        <div className="relative w-[100vw] mx-[calc(50%-50vw)] overflow-x-clip">
          {/* fades */}
          <div
            aria-hidden
            className="pointer-events-none absolute inset-y-0 left-0 w-16 sm:w-24 lg:w-32 z-10"
            style={{
              background: "linear-gradient(90deg, rgba(255,255,255,1), rgba(255,255,255,0))",
            }}
          />
          <div
            aria-hidden
            className="pointer-events-none absolute inset-y-0 right-0 w-16 sm:w-24 lg:w-32 z-10"
            style={{
              background: "linear-gradient(270deg, rgba(255,255,255,1), rgba(255,255,255,0))",
            }}
          />

          {/* setas (sempre disponíveis porque é infinito) */}
          <button
            type="button"
            onClick={() => scrollByAmount("left")}
            aria-label="Anterior"
            className="hidden lg:flex absolute left-6 top-1/2 z-20 -translate-y-1/2 items-center justify-center
                       h-12 w-12 rounded-full bg-white/90 shadow-lg ring-1 ring-slate-200/70 backdrop-blur
                       transition hover:shadow-xl"
          >
            <ChevronLeft className="h-5 w-5" style={{ color: NAVY }} />
          </button>

          <button
            type="button"
            onClick={() => scrollByAmount("right")}
            aria-label="Seguinte"
            className="hidden lg:flex absolute right-6 top-1/2 z-20 -translate-y-1/2 items-center justify-center
                       h-12 w-12 rounded-full bg-white/90 shadow-lg ring-1 ring-slate-200/70 backdrop-blur
                       transition hover:shadow-xl"
          >
            <ChevronRight className="h-5 w-5" style={{ color: NAVY }} />
          </button>

          {/* trilho infinito */}
          <div className="px-4 sm:px-6 lg:px-10">
            <div
              ref={scrollerRef}
              className="no-scrollbar flex gap-6 overflow-x-scroll overflow-y-hidden scroll-smooth snap-x snap-mandatory pb-2 cursor-grab select-none"
              style={{
                WebkitOverflowScrolling: "touch",
                scrollPaddingLeft: 24,
                scrollPaddingRight: 24,
                touchAction: "pan-y",
              }}
              onPointerDown={onPointerDown}
              onPointerMove={onPointerMove}
              onPointerUp={endDrag}
              onPointerCancel={endDrag}
              onPointerLeave={endDrag}
            >
              {tripled.map((service, idx) => (
                <div
                  key={`${service.slug}-${idx}`}
                  data-card={idx === 0 ? "1" : undefined}
                  className="snap-start shrink-0 w-[300px] sm:w-[360px] lg:w-[380px]"
                >
                  <ServiceCard
                    name={service.name}
                    description={service.shortDesc}
                    href={`/servicos/${service.slug}`}
                    icon={service.icon}
                    featured={service.category === "principal"}
                  />
                </div>
              ))}

              <div className="shrink-0 w-6 lg:w-12" />
            </div>

            {/* dots (agora em cima do índice real) */}
            <div className="mt-7 flex items-center justify-center gap-2">
              {services.slice(0, Math.min(services.length, 8)).map((_, i) => {
                const active = i === activeRealIndex;
                return (
                  <button
                    key={i}
                    type="button"
                    onClick={() => scrollToRealIndex(i)}
                    aria-label={`Ir para serviço ${i + 1}`}
                    className="h-2 rounded-full transition-all"
                    style={{
                      width: active ? 26 : 10,
                      backgroundColor: active ? ORANGE : "rgba(15,23,42,0.18)",
                    }}
                  />
                );
              })}
            </div>

            {/* CTA */}
            <div className="mt-10 flex items-center justify-center">
              <Button asChild variant="outline" size="lg" className="h-12 px-6 bg-white/80">
                <Link href={viewAllHref}>
                  Ver Todos os Serviços
                  <span
                    className="ml-2 inline-flex h-7 w-7 items-center justify-center rounded-full"
                    style={{ backgroundColor: `${ORANGE}22` }}
                  >
                    <ChevronRight className="h-4 w-4" style={{ color: ORANGE }} />
                  </span>
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
