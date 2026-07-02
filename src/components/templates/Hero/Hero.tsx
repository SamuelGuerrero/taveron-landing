"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { Text } from "~/components/atoms";
import { Badge, Button } from "~/components/molecules";

const AUTO_ROTATE_MS = 10000;

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

interface HeroSlide {
  badge: string;
  title: string;
  subtitle: string;
  ctaLabel: string;
  ellipsesOffsets?: [string, string, string];
  backgroundSrc?: string;
  image: {
    src: string;
    alt: string;
    width: number;
    height: number;
    className: string;
  };
}

const slides: HeroSlide[] = [
  {
    badge: "Nosotros",
    title: "Libertad para moverte a tu ritmo",
    subtitle:
      "Soluciones pensadas para darte control, flexibilidad y confianza en cada paso de tu día.",
    ctaLabel: "Explorar tarjetas",
    ellipsesOffsets: [
      "calc(50%-329px-427px)",
      "calc(50%-329px+25.45px)",
      "calc(50%-329px+505.45px)",
    ],
    image: {
      src: "/hero/default.svg",
      alt: "Tarjetas Taveron",
      width: 742,
      height: 692,
      className: "top-19.5 left-[calc(50%-50px)] h-173 w-185.5",
    },
  },
  {
    badge: "Tarjeta Clásica",
    title: "Diseñada para empezar y seguir creciendo",
    subtitle:
      "Tarjeta Clásica Taveron, disfruta de tus compras con control y seguridad.",
    ctaLabel: "Conoce más",
    backgroundSrc: "/hero/backgrounds/classic.svg",
    image: {
      src: "/hero/classic.svg",
      alt: "Tarjeta Clásica Taveron",
      width: 651,
      height: 651,
      className: "top-[101px] left-[calc(50%+73px)] h-[651px] w-[651px]",
    },
  },
  {
    badge: "Tarjeta Garantizada",
    title: "Una tarjeta para comenzar, avanzar y crecer",
    subtitle: "Ideal para iniciar o reconstruir tu historial.",
    ctaLabel: "Conoce más",
    backgroundSrc: "/hero/backgrounds/guaranteed.svg",
    image: {
      src: "/hero/guaranteed.svg",
      alt: "Tarjeta Garantizada Taveron",
      width: 749,
      height: 709,
      className: "top-[86px] left-[calc(50%-34px)] h-[709px] w-[749px]",
    },
  },
];

const ELLIPSE_OPACITIES = [1, 0.7, 0.3];

export const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % slides.length);
    }, AUTO_ROTATE_MS);

    return () => clearInterval(timer);
  }, [currentIndex]);

  return (
    <section className="bg-blue-darker relative h-225 w-full overflow-hidden text-white">
      {slides.map((slide, index) => {
        const isActive = index === currentIndex;
        const fadeClasses = `pointer-events-none absolute inset-0 transition-opacity duration-700 ${isActive ? "opacity-100" : "opacity-0"}`;

        if (slide.backgroundSrc) {
          return (
            <Image
              key={`${slide.title}-bg`}
              src={slide.backgroundSrc}
              alt=""
              fill
              priority={index === 0}
              className={`${fadeClasses} object-cover`}
              aria-hidden
            />
          );
        }

        if (slide.ellipsesOffsets) {
          return (
            <div
              key={`${slide.title}-glow`}
              aria-hidden
              className={fadeClasses}
            >
              {slide.ellipsesOffsets.map((offset, i) => (
                <div
                  key={i}
                  className="bg-blue-normal absolute top-47.75 h-164.5 w-164.5 rounded-full blur-[123.439px]"
                  style={{ left: offset, opacity: ELLIPSE_OPACITIES[i] }}
                />
              ))}
            </div>
          );
        }

        return null;
      })}

      {slides.map((slide, index) => (
        <Image
          key={slide.image.src}
          src={slide.image.src}
          alt={slide.image.alt}
          width={slide.image.width}
          height={slide.image.height}
          priority={index === 0}
          className={`pointer-events-none absolute max-w-none select-none transition-opacity duration-700 ${slide.image.className} ${
            index === currentIndex ? "opacity-100" : "opacity-0"
          }`}
        />
      ))}

      {slides.map((slide, index) => (
        <div
          key={slide.title}
          aria-hidden={index !== currentIndex}
          className={`absolute top-49.25 left-28.75 flex w-180.5 flex-col gap-15 transition-opacity duration-700 ${
            index === currentIndex
              ? "opacity-100"
              : "pointer-events-none opacity-0"
          }`}
        >
          <div className="flex flex-col gap-5">
            <Badge>{slide.badge}</Badge>

            <Text as="h1" weight="bold" size={72} className="leading-20.5">
              {slide.title}
            </Text>

            <Text size={24} className="leading-8">
              {slide.subtitle}
            </Text>
          </div>

          <Button
            className="w-57.5!"
            rightIcon={<ChevronRight className="text-blue-normal h-6 w-6" />}
          >
            {slide.ctaLabel}
          </Button>
        </div>
      ))}

      <div className="bg-blue-darker/50 absolute bottom-[97.5px] left-1/2 flex h-11.25 -translate-x-1/2 items-center gap-2.5 rounded-[40px] px-6.25">
        {slides.map((_, index) => {
          const isActive = index === currentIndex;
          return (
            <button
              key={index}
              type="button"
              onClick={() => setCurrentIndex(index)}
              aria-label={`Ir al slide ${index + 1}`}
              aria-current={isActive}
              className={`h-3.75 cursor-pointer rounded-full bg-white transition-all duration-300 ${
                isActive ? "w-11.25" : "w-3.75"
              }`}
            />
          );
        })}
      </div>
    </section>
  );
};
