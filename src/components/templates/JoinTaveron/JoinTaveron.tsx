import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Text } from "~/components/atoms";
import { Badge } from "~/components/molecules";

export const JoinTaveron = () => {
  return (
    <section className="relative h-[567px] w-full overflow-hidden bg-blue-darker">
      <Image
        src="/tarjetas/join-hero.svg"
        alt=""
        fill
        priority
        className="object-cover object-right"
        aria-hidden
      />

      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "linear-gradient(58.86deg, #000000 14.26%, rgba(0,0,0,0) 79.96%)",
          mixBlendMode: "multiply",
          opacity: 0.6,
        }}
      />

      <div className="absolute top-1/2 left-[115px] flex w-[666px] -translate-y-1/2 flex-col gap-[50px] text-white">
        <div className="flex flex-col gap-5">
          <Badge>Únete a Taveron</Badge>
          <Text
            as="h2"
            weight="bold"
            size={60}
            className="w-[666px] leading-[73px]"
          >
            Una app simplemente maravillosa
          </Text>
          <Text size={24} className="w-[606px] leading-8">
            Accede a la mejor experiencia financiera y maneja tus finanzas como
            nunca antes lo habías hecho.
          </Text>
        </div>

        <div className="flex items-center gap-2.5">
          <Link href="#" aria-label="Descargar en App Store">
            <Image
              src="/badges/apple.svg"
              alt="App Store"
              width={182}
              height={61}
            />
          </Link>
          <Link href="#" aria-label="Descargar en Google Play">
            <Image
              src="/badges/google-play.svg"
              alt="Google Play"
              width={195}
              height={60}
            />
          </Link>
        </div>
      </div>
    </section>
  );
};
