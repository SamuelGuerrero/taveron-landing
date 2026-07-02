import React from "react";
import Image from "next/image";
import { Text } from "~/components/atoms";

export const CardsShowcase = () => {
  return (
    <section className="relative h-[1040px] w-full overflow-hidden bg-white">
      <div className="absolute top-[calc(50%-520px)] right-[-12.5%] left-[-12.43%] h-[1060px]">
        <Image
          src="/Taveron-cards-collection.svg"
          alt="Colección de tarjetas Taveron"
          fill
          className="object-contain"
        />
      </div>

      <div className="absolute top-[54px] left-1/2 flex w-[859px] -translate-x-1/2 flex-col items-center gap-10">
        <div className="flex w-[859px] flex-col items-center gap-5">
          <Text
            as="h2"
            weight="bold"
            size={60}
            className="w-[732px] text-center leading-[73px] text-[#003462]"
          >
            Taveron impulsa tu
            <br />
            <span
              className="animate-fluido bg-clip-text text-transparent"
              style={{
                backgroundImage:
                  "linear-gradient(-45deg, #22D3B7, #3B82E0, #B0A8E8, #3B82E0, #22D3B7)",
                backgroundSize: "300% 300%",
              }}
            >
              crecimiento sin límites
            </span>
          </Text>

          <Text
            size={20}
            className="w-[859px] text-center leading-7 text-[#0F0F0F]"
          >
            Elige la que mejor se adapte a tus necesidades y disfruta de
            seguridad, recompensas y control total.
          </Text>
        </div>
      </div>
    </section>
  );
};
