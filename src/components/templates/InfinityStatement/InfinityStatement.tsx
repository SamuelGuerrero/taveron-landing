import Image from "next/image";

export const InfinityStatement = () => {
  return (
    <section className="relative h-235.75 w-full overflow-visible bg-black text-white">
      <div
        aria-hidden
        className="pointer-events-none absolute h-33.25 w-33.25 rounded-full bg-[#C4A35A] blur-[127px]"
        style={{ left: 76, top: 173 }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute h-76 w-76 rounded-full bg-[#C4A35A] opacity-65 blur-[72px]"
        style={{ left: 1341, top: 727 }}
      />

      <Image
        src="/cards/dark.svg"
        alt="Tarjeta Infinity"
        width={574}
        height={574}
        priority
        className="pointer-events-none absolute -top-26.75 left-1/2 z-10 h-143.5 w-143.5 max-w-none -translate-x-1/2 select-none"
      />

      <p className="absolute top-130 left-1/2 w-228.75 -translate-x-1/2 text-center font-serif text-[64px] leading-20.5 font-semibold text-white italic">
        Diseñada para quienes se mueven con{" "}
        <span className="text-[#C4A35A]">criterio</span>, viajan con{" "}
        <span className="text-[#C4A35A]">respaldo</span> y consumen con{" "}
        <span className="text-[#C4A35A]">inteligencia</span>.
      </p>
    </section>
  );
};
