import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Text } from "~/components/atoms";
import { Badge } from "~/components/molecules";

export const ClassicHero = () => {
  return (
    <section className="bg-blue-darker relative h-225 w-full overflow-hidden text-white">
      <Image
        src="/tarjetas/clasica-hero.svg"
        alt=""
        fill
        priority
        className="pointer-events-none object-cover"
        aria-hidden
      />

      <Image
        src="/hero/classic.svg"
        alt="Tarjeta Clásica Taveron"
        width={651}
        height={651}
        priority
        className="pointer-events-none absolute top-25.25 left-[calc(50%+73px)] h-162.75 w-162.75 max-w-none select-none"
      />

      <div className="absolute top-49.25 left-28.75 flex w-170.25 flex-col gap-15">
        <div className="flex flex-col gap-5">
          <Badge>Tarjeta Clásica</Badge>

          <Text as="h1" weight="bold" size={72} className="leading-[82px]">
            Diseñada para empezar y seguir creciendo
          </Text>

          <Text size={24} className="w-142.5 leading-8">
            Utiliza tu tarjeta Clásica Taveron en millones de comercios y
            cajeros alrededor del mundo.
          </Text>
        </div>

        <div className="flex items-center gap-4">
          <Link href="#" aria-label="Descargar en App Store">
            <Image
              src="/badges/apple.svg"
              alt="App Store"
              width={163}
              height={54}
            />
          </Link>
          <Link href="#" aria-label="Descargar en Google Play">
            <Image
              src="/badges/google-play.svg"
              alt="Google Play"
              width={163}
              height={50}
            />
          </Link>
        </div>
      </div>
    </section>
  );
};
