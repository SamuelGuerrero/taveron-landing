import React from "react";

export const InfinityQuote = () => {
  return (
    <section className="relative h-[437px] w-full overflow-hidden bg-black text-white">
      <div
        aria-hidden
        className="pointer-events-none absolute h-[133px] w-[133px] rounded-full bg-[#C4A35A] opacity-30 blur-[72px]"
        style={{ left: 76, top: 23 }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute h-[272px] w-[272px] rounded-full bg-[#C4A35A] opacity-30 blur-[123.42px]"
        style={{ left: 1279, top: 90 }}
      />

      <p className="absolute top-1/2 left-1/2 w-[915px] -translate-x-1/2 -translate-y-1/2 text-center font-serif text-[64px] leading-[89px] font-semibold text-white italic">
        Todo fluye, todo responde,
        <br />
        <span className="text-[#C4A35A]">usando Infinite.</span>
      </p>
    </section>
  );
};
