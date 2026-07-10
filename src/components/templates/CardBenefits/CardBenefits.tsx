"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Text } from "~/components/atoms";
import { Badge } from "~/components/molecules";

interface Benefit {
  title: string;
  description?: string;
  icon: React.ReactNode;
}

const iconClass = "h-[30px] w-[30px] text-blue-normal";

const BagIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" className={iconClass} aria-hidden>
    <path
      d="M4 8h16l-1 12H5L4 8z"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinejoin="round"
    />
    <path
      d="M9 8V6a3 3 0 0 1 6 0v2"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
    />
  </svg>
);

const ShieldIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" className={iconClass} aria-hidden>
    <path
      d="M12 3l8 3v6c0 5-3.5 8-8 9-4.5-1-8-4-8-9V6l8-3z"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinejoin="round"
    />
    <path
      d="M9 12l2 2 4-4"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const CalendarIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" className={iconClass} aria-hidden>
    <rect
      x="4"
      y="5"
      width="16"
      height="15"
      rx="2"
      stroke="currentColor"
      strokeWidth="2"
    />
    <path
      d="M4 10h16M9 3v4M15 3v4M12 13v4M10 15h4"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
    />
  </svg>
);

const DiamondIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" className={iconClass} aria-hidden>
    <path
      d="M6 3h12l4 6-10 12L2 9l4-6z"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinejoin="round"
    />
    <path
      d="M2 9h20M12 3l-4 6 4 12M12 3l4 6-4 12"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinejoin="round"
    />
  </svg>
);

const PlusIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6" aria-hidden>
    <path
      d="M12 5v14M5 12h14"
      stroke="#E6EEF6"
      strokeWidth="2.5"
      strokeLinecap="round"
    />
  </svg>
);

const MinusIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6" aria-hidden>
    <path
      d="M5 12h14"
      stroke="#E6EEF6"
      strokeWidth="2.5"
      strokeLinecap="round"
    />
  </svg>
);

const benefits: Benefit[] = [
  {
    title: "Seguridad en cada transacción",
    description:
      "Compra con total tranquilidad, en línea y en el mundo físico. Tecnologías como tokenización y 3D Secure protegen cada pago digital, respaldados por una línea de crédito diseñada para darte control total de tus finanzas.",
    icon: <BagIcon />,
  },
  {
    title: "Protección de compras",
    description:
      "Cobertura ante daños, robo o fraude en las compras que realices con tu tarjeta.",
    icon: <ShieldIcon />,
  },
  {
    title: "Asistencia inmediata, cuando más la necesitas",
    description:
      "Atención 24/7 desde cualquier parte del mundo. Reporta, consulta o resuelve en minutos.",
    icon: <CalendarIcon />,
  },
  {
    title: "Acceso a efectivo sin fronteras",
    description:
      "Dispón de efectivo en cajeros compatibles alrededor del mundo, sin trámites adicionales.",
    icon: <DiamondIcon />,
  },
  {
    title: "Recompensas que crecen contigo",
    description:
      "Acumula beneficios en cada compra y canjéalos por experiencias, productos o cashback.",
    icon: <DiamondIcon />,
  },
];

export const CardBenefits = () => {
  const [expandedIndex, setExpandedIndex] = useState(0);

  return (
    <section className="relative h-[986px] w-full overflow-hidden bg-white">
      <div className="absolute top-20 left-1/2 flex w-[652px] -translate-x-1/2 flex-col items-center gap-2.5">
        <Badge variant="outline">Nuestros beneficios</Badge>
        <Text
          as="h2"
          weight="bold"
          size={48}
          className="text-blue-darker w-[652px] text-center leading-[58px]"
        >
          Tu tarjeta, con ventajas reales
        </Text>
      </div>

      <div className="absolute top-[232px] left-1/2 flex w-[1235px] -translate-x-1/2 items-start gap-20">
        <div className="flex w-[587px] flex-col gap-2.5">
          {benefits.map((benefit, index) => {
            const isExpanded = index === expandedIndex;
            return (
              <button
                key={benefit.title}
                type="button"
                onClick={() => setExpandedIndex(index)}
                aria-expanded={isExpanded}
                className="flex w-[587px] cursor-pointer items-center gap-2.5 rounded-[20px] bg-[#002749] px-5 py-[30px] text-left transition-colors duration-300 hover:bg-[#003462]"
              >
                <div className="flex flex-1 items-start gap-5">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-[10px] bg-[#E6EEF6]">
                    {benefit.icon}
                  </div>
                  <div className="flex flex-col">
                    <Text
                      weight="bold"
                      size={20}
                      className="leading-7 text-white"
                    >
                      {benefit.title}
                    </Text>
                    <div
                      className={`grid transition-[grid-template-rows,opacity,margin] duration-300 ease-in-out ${
                        isExpanded
                          ? "mt-2.5 grid-rows-[1fr] opacity-100"
                          : "grid-rows-[0fr] opacity-0"
                      }`}
                    >
                      <div className="min-h-0 overflow-hidden">
                        <Text size={18} className="leading-6 text-white">
                          {benefit.description}
                        </Text>
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

        <div className="relative h-[664px] w-[568px] shrink-0">
          <Image
            src="/traveler.svg"
            alt="Viajero cruzando un puente colgante"
            fill
            className="rounded-[17px] object-cover"
          />
        </div>
      </div>
    </section>
  );
};
