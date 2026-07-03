import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Text } from "~/components/atoms";
import { Badge } from "~/components/molecules";

export const GuaranteedHero = () => {
  return (
    <div className="relative w-full">
      <section className="relative h-[963px] w-full overflow-hidden bg-blue-darker text-white">
        <Image
          src="/tarjetas/garantizada-hero.svg"
          alt=""
          fill
          priority
          className="object-cover"
          aria-hidden
        />

        <div className="absolute top-[170px] left-1/2 flex w-[834px] -translate-x-1/2 flex-col items-center gap-10">
          <div className="flex w-[834px] flex-col items-center gap-5">
            <Badge>✦ Tarjeta Garantizada</Badge>

            <Text
              as="h1"
              weight="bold"
              size={72}
              className="w-[834px] text-center leading-[82px]"
            >
              Tu puerta al crédito empieza aquí
            </Text>

            <Text size={24} className="w-[802px] text-center leading-8">
              La tarjeta garantizada Taveron te permite acceder a crédito
              dejando un depósito como respaldo. Ideal para iniciar o
              reconstruir tu historial.
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

      <section className="flex h-[652px] w-full items-center justify-center bg-[#EDEDED]">
        <Text
          weight="bold"
          size={54.155}
          className="w-[1179px] text-center leading-[66px] text-[#003462]"
        >
          Con Taveron puedes dar el primer paso hacia un mejor control
          financiero, de forma segura y acompañada.{" "}
          <span
            className="animate-fluido bg-clip-text text-transparent"
            style={{
              backgroundImage:
                "linear-gradient(-45deg, #22D3B7, #3B82E0, #B0A8E8, #3B82E0, #22D3B7)",
              backgroundSize: "300% 300%",
            }}
          >
            Descarga la app y conoce tu tarjeta garantizada.
          </span>
        </Text>
      </section>

      <Image
        src="/hero/classic.svg"
        alt="Tarjeta Garantizada Taveron"
        width={523}
        height={523}
        priority
        className="pointer-events-none absolute top-[620px] left-1/2 z-10 h-[523px] w-[523px] max-w-none -translate-x-1/2 select-none"
      />
    </div>
  );
};
