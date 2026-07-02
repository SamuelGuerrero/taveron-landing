import React from "react";
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

export const CardsCarousel = () => {
  return (
    <section className="relative h-[1040px] w-full overflow-hidden bg-[#0F0F0F] text-white">
      <div
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
      />

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
          className="absolute top-[52px] left-1/2 z-20 -translate-x-1/2 bg-clip-text text-[36px] leading-10 font-bold text-transparent"
          style={{
            backgroundImage:
              "linear-gradient(180deg, #FFFFFF 20%, rgba(255,255,255,0) 130%)",
          }}
        >
          Infinite
        </span>

        <Image
          src="/cards/classic.svg"
          alt="Tarjeta Clásica"
          width={397}
          height={243}
          className="absolute top-[calc(50%-97.75px)] left-[calc(50%-587px)]"
        />

        <Image
          src="/cards/business.svg"
          alt="Tarjeta Empresarial"
          width={395}
          height={242}
          className="absolute top-[calc(50%-97.79px)] left-[calc(50%+191px)]"
        />

        <Image
          src="/cards/infinity.svg"
          alt="Tarjeta Infinity"
          width={588}
          height={360}
          priority
          className="absolute top-[calc(50%-179.76px)] left-[calc(50%-291px)] z-10"
        />
      </div>

      <button
        type="button"
        aria-label="Anterior"
        className="absolute top-[615px] left-16 z-30 flex h-10 w-10 -translate-y-1/2 cursor-pointer items-center justify-center rounded-[10px] bg-[#EBF2F6]"
      >
        <ChevronLeft className="text-blue-normal" />
      </button>

      <button
        type="button"
        aria-label="Siguiente"
        className="absolute top-[615px] right-16 z-30 flex h-10 w-10 -translate-y-1/2 cursor-pointer items-center justify-center rounded-[10px] bg-[#EBF2F6]"
      >
        <ChevronRight className="text-blue-normal" />
      </button>

      <div className="absolute bottom-[70px] left-1/2 -translate-x-1/2">
        <Button
          className="w-[200px]! border border-blue-normal"
          rightIcon={<ChevronRight className="h-6 w-6 text-blue-normal" />}
        >
          Solicitar tarjeta
        </Button>
      </div>
    </section>
  );
};
