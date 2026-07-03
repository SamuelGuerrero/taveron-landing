import React from "react";
import Image from "next/image";

export const InfinityStatement = () => {
  return (
    <section className="relative h-[943px] w-full overflow-visible bg-black text-white">
      <div
        aria-hidden
        className="pointer-events-none absolute h-[133px] w-[133px] rounded-full bg-[#C4A35A] blur-[127px]"
        style={{ left: 76, top: 173 }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute h-[304px] w-[304px] rounded-full bg-[#C4A35A] opacity-65 blur-[72px]"
        style={{ left: 1341, top: 727 }}
      />

      <Image
        src="/cards/dark.svg"
        alt="Tarjeta Infinity"
        width={574}
        height={574}
        priority
        className="pointer-events-none absolute -top-[107px] left-1/2 z-10 h-[574px] w-[574px] max-w-none -translate-x-1/2 select-none"
      />

      <p className="absolute top-[520px] left-1/2 w-[915px] -translate-x-1/2 text-center font-serif text-[64px] leading-[82px] font-semibold text-white italic">
        Diseñada para quienes se mueven con{" "}
        <span className="text-[#C4A35A]">criterio</span>, viajan con{" "}
        <span className="text-[#C4A35A]">respaldo</span> y consumen con{" "}
        <span className="text-[#C4A35A]">inteligencia</span>.
      </p>
    </section>
  );
};
