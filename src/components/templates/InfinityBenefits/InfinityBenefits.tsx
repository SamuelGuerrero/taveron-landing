"use client";

import { useState, type ReactNode } from "react";
import Image from "next/image";

const goldStroke = "#C4A35A";

const BagIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" className="h-7.5 w-7.5" aria-hidden>
    <path
      d="M4 8h16l-1 12H5L4 8z"
      stroke={goldStroke}
      strokeWidth="2"
      strokeLinejoin="round"
    />
    <path
      d="M9 8V6a3 3 0 0 1 6 0v2"
      stroke={goldStroke}
      strokeWidth="2"
      strokeLinecap="round"
    />
  </svg>
);

const ShieldIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" className="h-7.5 w-7.5" aria-hidden>
    <path
      d="M12 3l8 3v6c0 5-3.5 8-8 9-4.5-1-8-4-8-9V6l8-3z"
      stroke={goldStroke}
      strokeWidth="2"
      strokeLinejoin="round"
    />
    <path
      d="M9 12l2 2 4-4"
      stroke={goldStroke}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const CalendarIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" className="h-7.5 w-7.5" aria-hidden>
    <rect
      x="4"
      y="5"
      width="16"
      height="15"
      rx="2"
      stroke={goldStroke}
      strokeWidth="2"
    />
    <path
      d="M4 10h16M9 3v4M15 3v4M12 13v4M10 15h4"
      stroke={goldStroke}
      strokeWidth="2"
      strokeLinecap="round"
    />
  </svg>
);

const DiamondIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" className="h-7.5 w-7.5" aria-hidden>
    <path
      d="M6 3h12l4 6-10 12L2 9l4-6z"
      stroke={goldStroke}
      strokeWidth="2"
      strokeLinejoin="round"
    />
    <path
      d="M2 9h20M12 3l-4 6 4 12M12 3l4 6-4 12"
      stroke={goldStroke}
      strokeWidth="2"
      strokeLinejoin="round"
    />
  </svg>
);

const PlusIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6" aria-hidden>
    <path
      d="M12 5v14M5 12h14"
      stroke={goldStroke}
      strokeWidth="2.5"
      strokeLinecap="round"
    />
  </svg>
);

const MinusIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6" aria-hidden>
    <path
      d="M5 12h14"
      stroke={goldStroke}
      strokeWidth="2.5"
      strokeLinecap="round"
    />
  </svg>
);

const CreditScoreIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6" aria-hidden>
    <rect x="2" y="6" width="20" height="14" rx="2" fill="#C4A35A" />
    <path d="M2 10h20" stroke="white" strokeWidth="1.5" />
    <path
      d="M6 15h4M14 15h4"
      stroke="white"
      strokeWidth="1.5"
      strokeLinecap="round"
    />
  </svg>
);

interface Benefit {
  title: string;
  description: string;
  icon: ReactNode;
}

const benefits: Benefit[] = [
  {
    title: "Cashback",
    description:
      "Cada compra suma hasta 35% de cashback en comercios seleccionados. Porque pagar con Taveron, genera beneficio.",
    icon: <BagIcon />,
  },
  {
    title: "Protección de precios",
    description:
      "Si el precio baja después de tu compra, te devolvemos la diferencia en el mismo comercio afiliado.",
    icon: <ShieldIcon />,
  },
  {
    title: "Emergencia médica internacional",
    description:
      "Cobertura médica ante emergencias en cualquier parte del mundo, sin trámites adicionales.",
    icon: <CalendarIcon />,
  },
  {
    title: "Digital Consigne",
    description:
      "Servicio exclusivo de consigne y protección de tus activos digitales de alto valor.",
    icon: <DiamondIcon />,
  },
];

export const InfinityBenefits = () => {
  const [expandedIndex, setExpandedIndex] = useState(0);

  return (
    <section className="relative h-243.75 w-full overflow-hidden bg-black text-white">
      <div className="absolute top-20 left-1/2 flex w-139.5 -translate-x-1/2 flex-col items-center gap-2.5">
        <div className="inline-flex items-center justify-center rounded-[70px] border border-[#C4A35A] bg-[#C4A35A]/10 px-5 py-1.25">
          <span className="font-serif text-[16px] leading-6 font-bold tracking-[0.01em] text-[#C4A35A]">
            Nuestros Beneficios
          </span>
        </div>
        <h2 className="w-139.5 text-center font-serif text-[48px] leading-14.5 font-bold text-[#C4A35A]">
          Tu tarjeta, <span className="text-white">con ventajas reales</span>
        </h2>
      </div>

      <div className="absolute top-58 left-1/2 flex w-293.75 -translate-x-1/2 items-start gap-5">
        <div className="flex w-146.75 flex-col gap-5">
          {benefits.map((benefit, index) => {
            const isExpanded = index === expandedIndex;
            return (
              <button
                key={benefit.title}
                type="button"
                onClick={() => setExpandedIndex(index)}
                aria-expanded={isExpanded}
                className="flex w-146.75 cursor-pointer items-center gap-2.5 rounded-[20px] border border-[#535353] bg-[#0F0F0F] px-5 py-7.5 text-left transition-colors duration-300 hover:border-[#C4A35A]/40"
              >
                <div className="flex flex-1 items-start gap-5">
                  <div className="flex h-15 w-15 shrink-0 items-center justify-center rounded-[15px] bg-white/5">
                    {benefit.icon}
                  </div>
                  <div className="flex flex-col">
                    <h3 className="font-serif text-[25px] leading-8 font-bold text-[#C4A35A]">
                      {benefit.title}
                    </h3>
                    <div
                      className={`grid transition-[grid-template-rows,opacity,margin] duration-300 ease-in-out ${
                        isExpanded
                          ? "mt-2.5 grid-rows-[1fr] opacity-100"
                          : "grid-rows-[0fr] opacity-0"
                      }`}
                    >
                      <div className="min-h-0 overflow-hidden">
                        <p className="font-serif text-[18px] leading-6 font-normal text-white">
                          {benefit.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <span
                  aria-hidden
                  className="relative flex h-10 w-10 shrink-0 items-center justify-center rounded-full"
                >
                  <span
                    className={`absolute transition-opacity duration-200 ${isExpanded ? "opacity-0" : "opacity-100"}`}
                  >
                    <PlusIcon />
                  </span>
                  <span
                    className={`absolute transition-opacity duration-200 ${isExpanded ? "opacity-100" : "opacity-0"}`}
                  >
                    <MinusIcon />
                  </span>
                </span>
              </button>
            );
          })}
        </div>

        <div className="relative h-166 w-142 shrink-0">
          <Image
            src="/tarjetas/infinity-benefits.svg"
            alt="Estilo de vida Infinity"
            fill
            className="rounded-[17px] object-cover"
          />

          <div className="absolute bottom-16 left-18.5 flex w-105 items-center gap-2 rounded-xl bg-black/40 p-3 backdrop-blur-md">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-white">
              <CreditScoreIcon />
            </div>
            <div className="flex flex-1 flex-col gap-1">
              <p className="text-base leading-6 font-bold text-white">
                Compra aprobada para tu viaje a Europa, disfruta tu destino
              </p>
              <p className="text-sm leading-5 font-bold text-white">
                14 Enero, 2026
              </p>
            </div>
            <div className="h-3 w-3 shrink-0 rounded-full bg-[#C4A35A]" />
          </div>
        </div>
      </div>
    </section>
  );
};
