import Image from "next/image";
import { Text } from "~/components/atoms";
import { Badge, Button } from "~/components/molecules";

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

export const Hero = () => {
  return (
    <section className="bg-blue-darker relative h-225 w-full overflow-hidden text-white">
      <div
        aria-hidden
        className="bg-blue-normal pointer-events-none absolute top-47.75 left-[calc(50%-329px-427px)] h-164.5 w-164.5 rounded-full blur-[123.439px]"
      />
      <div
        aria-hidden
        className="bg-blue-normal pointer-events-none absolute top-47.75 left-[calc(50%-329px+25.45px)] h-164.5 w-164.5 rounded-full opacity-70 blur-[123.439px]"
      />
      <div
        aria-hidden
        className="bg-blue-normal pointer-events-none absolute top-47.75 left-[calc(50%-329px+505.45px)] h-164.5 w-164.5 rounded-full opacity-30 blur-[123.439px]"
      />

      <Image
        src="/Taveron-cards.svg"
        alt="Tarjetas Taveron"
        width={742}
        height={692}
        priority
        className="pointer-events-none absolute top-19.5 left-[calc(50%-50px)] h-173 w-185.5 max-w-none select-none"
      />

      <div className="absolute top-49.25 left-28.75 flex w-180.5 flex-col gap-15">
        <div className="flex flex-col gap-5">
          <Badge>Nosotros</Badge>

          <Text as="h1" weight="bold" size={72} className="leading-20.5">
            Libertad para moverte a tu ritmo
          </Text>

          <Text size={24} className="leading-8">
            Soluciones pensadas para darte control, flexibilidad y confianza en
            cada paso de tu día.
          </Text>
        </div>

        <Button
          className="w-57.5!"
          rightIcon={<ChevronRight className="text-blue-normal h-6 w-6" />}
        >
          Explorar tarjetas
        </Button>
      </div>

      <div className="bg-blue-darker/50 absolute bottom-[97.5px] left-1/2 flex h-11.25 -translate-x-1/2 items-center gap-2.5 rounded-[40px] px-6.25">
        <div className="h-3.75 w-11.25 rounded-full bg-white" />
        <div className="h-3.75 w-3.75 rounded-full bg-white" />
        <div className="h-3.75 w-3.75 rounded-full bg-white" />
      </div>
    </section>
  );
};
