import Image from "next/image";
import Link from "next/link";
import { Text } from "~/components/atoms";
import { Badge } from "~/components/molecules";

export const GuaranteedHero = () => {
  return (
    <div className="relative w-full">
      <section className="bg-blue-darker relative h-240.75 w-full overflow-hidden text-white">
        <Image
          src="/tarjetas/garantizada-hero.svg"
          alt=""
          fill
          priority
          className="object-cover"
          aria-hidden
        />

        <div className="absolute top-42.5 left-1/2 flex w-208.5 -translate-x-1/2 flex-col items-center gap-10">
          <div className="flex w-208.5 flex-col items-center gap-5">
            <Badge>✦ Tarjeta Garantizada</Badge>

            <Text
              as="h1"
              weight="bold"
              size={72}
              className="w-208.5 text-center leading-20.5"
            >
              Tu puerta al crédito empieza aquí
            </Text>

            <Text size={24} className="w-200.5 text-center leading-8">
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

      <section className="flex h-163 w-full items-center justify-center bg-[#EDEDED]">
        <Text
          weight="bold"
          size={54.155}
          className="w-294.75 text-center leading-16.5 text-[#003462]"
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

      <div className="pointer-events-none absolute top-155 left-1/2 z-10 -translate-x-1/2 select-none">
        <Image
          src="/hero/classic.svg"
          alt="Tarjeta Garantizada Taveron"
          width={523}
          height={523}
          priority
          className="animate-breathe h-130.75 w-130.75 max-w-none object-contain will-change-transform"
        />
      </div>
    </div>
  );
};
