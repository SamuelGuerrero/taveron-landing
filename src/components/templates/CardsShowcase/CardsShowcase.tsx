import Image from "next/image";
import { Text } from "~/components/atoms";

export const CardsShowcase = () => {
  return (
    <section className="relative h-260 w-full overflow-hidden bg-white">
      <div className="absolute inset-0">
        <Image
          src="/Taveron-cards-collection.svg"
          alt="Colección de tarjetas Taveron"
          fill
          className="object-cover"
        />
      </div>

      <div className="absolute top-13.5 left-1/2 flex w-214.75 -translate-x-1/2 flex-col items-center gap-10">
        <div className="flex w-214.75 flex-col items-center gap-5">
          <Text
            as="h2"
            weight="bold"
            size={60}
            className="w-183 text-center leading-18.25 text-[#003462]"
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
            className="w-214.75 text-center leading-7 text-[#0F0F0F]"
          >
            Elige la que mejor se adapte a tus necesidades y disfruta de
            seguridad, recompensas y control total.
          </Text>
        </div>
      </div>
    </section>
  );
};
