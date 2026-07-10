import Image from "next/image";
import { Text } from "~/components/atoms";
import { DownloadCtaButton } from "~/components/molecules";

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

export const DownloadApp = () => {
  return (
    <section className="bg-blue-darker relative h-241.5 w-full overflow-hidden">
      <div
        aria-hidden
        className="bg-blue-normal h-120.6 w-120.6 pointer-events-none absolute top-104 left-[calc(50%-241.2px-341.8px)] rounded-full opacity-[0.59] blur-[90.4959px]"
      />
      <div
        aria-hidden
        className="bg-blue-normal h-120.6 w-120.6 pointer-events-none absolute top-104 left-[calc(50%-241.2px-10.1px)] rounded-full opacity-70 blur-[90.4959px]"
      />
      <div
        aria-hidden
        className="bg-blue-normal h-120.6 w-120.6 pointer-events-none absolute top-104 left-[calc(50%-241.2px+341.8px)] rounded-full opacity-30 blur-[90.4959px]"
      />

      <Image
        src="/people.svg"
        alt="Comunidad Taveron"
        width={1512}
        height={841}
        priority
        className="pointer-events-none absolute top-1/2 left-1/2 h-auto w-full max-w-none -translate-x-1/2 -translate-y-1/2 select-none"
      />

      <div className="absolute top-1/2 left-1/2 flex w-261.75 -translate-x-1/2 -translate-y-1/2 flex-col items-center gap-10 text-white">
        <div className="flex w-261.75 flex-col items-center gap-5">
          <Text
            as="h2"
            weight="bold"
            size={48}
            className="w-261.75 text-center leading-14.5"
          >
            Transformamos la manera en que usas tu dinero
          </Text>

          <Text size={18} className="w-206.75 text-center leading-6">
            Con Taveron puedes dar el primer paso hacia un mejor control
            financiero, de forma segura y acompañada. Descarga la app y conoce
            tu tarjeta garantizada.
          </Text>
        </div>

        <DownloadCtaButton
          className="w-58.5!"
          rightIcon={<ChevronRight className="text-blue-normal h-6 w-6" />}
        >
          Descargar ahora
        </DownloadCtaButton>
      </div>
    </section>
  );
};
