"use client";

import React, { useState } from "react";

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

export const InfinityHero = () => {
  const [email, setEmail] = useState("");

  return (
    <section className="relative h-[989px] w-full overflow-hidden bg-black text-white">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage:
            "radial-gradient(ellipse 70% 55% at 50% 35%, rgba(196,163,90,0.18) 0%, rgba(196,163,90,0.05) 40%, rgba(0,0,0,0) 70%)",
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "linear-gradient(180deg, rgba(0,0,0,0) 65%, rgba(0,0,0,0.8) 90%, #000 100%)",
        }}
      />

      <div className="absolute top-[228px] left-1/2 flex w-[1121px] -translate-x-1/2 flex-col items-center gap-10">
        <div className="inline-flex items-center justify-center rounded-[70px] border border-[#C4A35A] bg-[#C4A35A]/10 px-5 py-1.25">
          <span className="font-serif text-[16px] leading-6 font-bold tracking-[0.01em] text-[#C4A35A]">
            Tarjeta Infiniti
          </span>
        </div>

        <h1 className="text-center font-serif text-[96px] font-bold text-[#C4A35A]">
          El nivel correcto
        </h1>

        <h1 className="-mt-25 text-center font-serif text-[96px] font-bold text-white">
          para tu forma de vivir
        </h1>

        <p className="w-[606px] text-center font-serif text-[24px] leading-8 font-normal text-white">
          Diseñada para quienes se mueven con criterio, viajan con respaldo y
          consumen con inteligencia.
        </p>

        <form
          className="relative flex h-[70px] w-[543px] items-center rounded-[15px] border border-[#C4A35A] bg-[#0F0F0F] p-[5px]"
          onSubmit={(e) => e.preventDefault()}
        >
          <label
            htmlFor="infinity-email"
            className="flex h-full flex-1 flex-col justify-center pl-[14px]"
          >
            <span className="text-xs font-bold text-[#60656A]">
              Correo electrónico
            </span>
            <input
              id="infinity-email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="micorreo@mimail.com"
              className="w-full bg-transparent text-base font-bold text-white placeholder:text-white/40 focus:outline-none"
            />
          </label>
          <button
            type="submit"
            className="flex h-[60px] w-[196px] shrink-0 cursor-pointer items-center justify-center gap-1 rounded-[15px] bg-[#C4A35A] text-white transition-opacity hover:opacity-90"
          >
            <span className="text-sm font-bold">Solicitar invitación</span>
            <ChevronRight className="h-5 w-5" />
          </button>
        </form>
      </div>

      <div className="absolute bottom-[90px] left-1/2 flex -translate-x-1/2 flex-col items-center gap-3">
        <span className="font-serif text-sm font-semibold text-[#C4A35A] italic">
          Scroll down
        </span>
        <div className="h-[66px] w-px bg-[#C4A35A]" />
      </div>
    </section>
  );
};
