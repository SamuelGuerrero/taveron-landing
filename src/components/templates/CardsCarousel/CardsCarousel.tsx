"use client";

import React, { useRef, useState } from "react";
import Image from "next/image";
import { Text } from "~/components/atoms";
import { Badge, Button } from "~/components/molecules";

const ChevronRight = ({ className }: { className?: string }) => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    className={className}
    aria-hidden
  >
    <path
      d="M9 6l6 6-6 6"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const ChevronLeft = ({ className }: { className?: string }) => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    className={className}
    aria-hidden
  >
    <path
      d="M15 6l-6 6 6 6"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

interface CarouselCard {
  name: string;
  src: string;
  alt: string;
  width: number;
  height: number;
}

const cards: CarouselCard[] = [
  {
    name: "Infinite",
    src: "/cards/infinity-card.png",
    alt: "Tarjeta Infinity",
    width: 2054,
    height: 1256,
  },
  {
    name: "Empresarial",
    src: "/cards/empresarial-card.png",
    alt: "Tarjeta Empresarial",
    width: 1027,
    height: 628,
  },
  {
    name: "Clásica",
    src: "/cards/clasica-card.png",
    alt: "Tarjeta Clásica",
    width: 632,
    height: 388,
  },
];

type CardPosition = "active" | "prev" | "next" | "hidden";

// Coverflow transforms — replicated from the production carousel.
const positionStyles: Record<CardPosition, React.CSSProperties> = {
  active: {
    transform: "translate(-50%, -50%) scale(1)",
    opacity: 1,
    zIndex: 30,
  },
  prev: {
    transform:
      "translate(-50%, -50%) scale(0.85) translate(-60%) translateZ(-100px)",
    opacity: 0.6,
    zIndex: 20,
  },
  next: {
    transform:
      "translate(-50%, -50%) scale(0.85) translate(60%) translateZ(-100px)",
    opacity: 0.6,
    zIndex: 20,
  },
  hidden: {
    transform: "translate(-50%, -50%) scale(0.7) translateZ(-200px)",
    opacity: 0,
    zIndex: 10,
    pointerEvents: "none",
  },
};

// Hover variants — replicated from the production carousel (desktop).
const positionStylesHover: Record<CardPosition, React.CSSProperties> = {
  active: {
    transform: "translate(-50%, -50%) scale(1.02)",
    opacity: 1,
    zIndex: 30,
  },
  prev: {
    transform:
      "translate(-50%, -50%) scale(0.88) translate(-60%) translateZ(-100px)",
    opacity: 0.8,
    zIndex: 20,
  },
  next: {
    transform:
      "translate(-50%, -50%) scale(0.88) translate(60%) translateZ(-100px)",
    opacity: 0.8,
    zIndex: 20,
  },
  hidden: {
    transform: "translate(-50%, -50%) scale(0.7) translateZ(-200px)",
    opacity: 0,
    zIndex: 10,
    pointerEvents: "none",
  },
};

const TRANSITION = "all 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94)";

export const CardsCarousel = () => {
  const [index, setIndex] = useState(0);
  const [nameOpacity, setNameOpacity] = useState(1);
  const [hovered, setHovered] = useState<number | null>(null);
  const locked = useRef(false);
  const touchStartX = useRef(0);

  const change = (nextIndex: number) => {
    if (locked.current || nextIndex === index) return;
    locked.current = true;
    setNameOpacity(0);
    setIndex(nextIndex);
    window.setTimeout(() => setNameOpacity(1), 150);
    window.setTimeout(() => {
      locked.current = false;
    }, 500);
  };

  const goPrev = () => change((index - 1 + cards.length) % cards.length);
  const goNext = () => change((index + 1) % cards.length);

  const getPosition = (i: number): CardPosition => {
    if (i === index) return "active";
    if (i === (index - 1 + cards.length) % cards.length) return "prev";
    if (i === (index + 1) % cards.length) return "next";
    return "hidden";
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowLeft") goPrev();
    if (e.key === "ArrowRight") goNext();
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.changedTouches[0]?.screenX ?? 0;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    const delta = (e.changedTouches[0]?.screenX ?? 0) - touchStartX.current;
    if (delta < -50) goNext();
    if (delta > 50) goPrev();
  };

  return (
    <section className="relative h-[1040px] w-full overflow-hidden bg-[#0F0F0F] text-white">
      {/* <div
        aria-hidden
        className="pointer-events-none absolute top-[327px] left-[calc(50%-329px-329px)] h-[658px] w-[658px] rounded-full bg-[#2E2E2E] blur-[123.439px]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute top-[327px] left-[calc(50%-329px+123.45px)] h-[658px] w-[658px] rounded-full bg-[#2E2E2E] opacity-70 blur-[123.439px]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute top-[327px] left-[calc(50%-329px+603.45px)] h-[658px] w-[658px] rounded-full bg-[#2E2E2E] opacity-30 blur-[123.439px]"
      /> */}

      <div className="absolute top-[128px] left-1/2 flex w-[1162px] -translate-x-1/2 flex-col items-center gap-10">
        <Badge>Tarjetas de crédito</Badge>

        <div className="flex w-[1162px] flex-col items-center gap-5">
          <Text
            as="h2"
            weight="bold"
            size={48}
            className="w-[1162px] text-center leading-[58px] text-white"
          >
            Tarjetas que se adaptan a tu forma de vivir y trabajar
          </Text>

          <Text
            size={18}
            className="w-[807px] text-center leading-6 text-white"
          >
            En Taveron diseñamos soluciones que acompañan tus decisiones con
            flexibilidad, claridad y respaldo.
          </Text>
        </div>
      </div>

      <div className="absolute top-[319px] left-1/2 h-[592px] w-[1408px] -translate-x-1/2">
        <span
          className="absolute top-[52px] left-1/2 z-20 -translate-x-1/2 bg-clip-text text-[36px] leading-10 font-bold text-transparent transition-opacity duration-300"
          style={{
            backgroundImage:
              "linear-gradient(180deg, #FFFFFF 20%, rgba(255,255,255,0) 130%)",
            opacity: nameOpacity,
          }}
        >
          {cards[index]?.name}
        </span>

        <div
          className="absolute inset-0 outline-none"
          tabIndex={0}
          role="group"
          aria-label="Carrusel de tarjetas"
          onKeyDown={handleKeyDown}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          {cards.map((card, i) => {
            const position = getPosition(i);
            const styleSet =
              hovered === i
                ? positionStylesHover[position]
                : positionStyles[position];
            return (
              <div
                key={card.name}
                role="button"
                tabIndex={0}
                aria-label={`Tarjeta ${card.name}`}
                onClick={() => change(i)}
                onMouseEnter={() => setHovered(i)}
                onMouseLeave={() => setHovered(null)}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    change(i);
                  }
                }}
                className="absolute top-1/2 left-1/2 cursor-pointer will-change-transform"
                style={{ transition: TRANSITION, ...styleSet }}
              >
                <Image
                  src={card.src}
                  alt={card.alt}
                  width={card.width}
                  height={card.height}
                  priority={i === 0}
                  draggable={false}
                  className="pointer-events-none h-auto w-[440px] select-none"
                />
              </div>
            );
          })}
        </div>
      </div>

      <button
        type="button"
        aria-label="Anterior"
        onClick={goPrev}
        className="absolute top-[615px] left-16 z-30 flex h-10 w-10 -translate-y-1/2 cursor-pointer items-center justify-center rounded-[10px] bg-[#EBF2F6] transition-transform hover:scale-105"
      >
        <ChevronLeft className="text-blue-normal" />
      </button>

      <button
        type="button"
        aria-label="Siguiente"
        onClick={goNext}
        className="absolute top-[615px] right-16 z-30 flex h-10 w-10 -translate-y-1/2 cursor-pointer items-center justify-center rounded-[10px] bg-[#EBF2F6] transition-transform hover:scale-105"
      >
        <ChevronRight className="text-blue-normal" />
      </button>

      <div className="absolute bottom-[70px] left-1/2 -translate-x-1/2">
        <Button
          className="border-blue-normal w-[200px]! border"
          rightIcon={<ChevronRight className="text-blue-normal h-6 w-6" />}
        >
          Solicitar tarjeta
        </Button>
      </div>
    </section>
  );
};
