import Image from "next/image";
import Link from "next/link";

export const InfinityJoinTaveron = () => {
  return (
    <section className="relative h-141.75 w-full overflow-hidden bg-black text-white">
      <div
        aria-hidden
        className="pointer-events-none absolute top-1/2 left-1/2 h-80.25 w-80.25 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#C4A35A] opacity-30 blur-[123.42px]"
      />

      <div className="absolute top-1/2 left-1/2 isolate flex w-243.75 -translate-x-1/2 -translate-y-1/2 flex-col items-center gap-12.5">
        <div className="z-0 flex w-166.5 flex-col items-center gap-5">
          <div className="inline-flex h-8.5 items-center justify-center rounded-[70px] border border-[#C4A35A] bg-[#C4A35A]/10 px-5">
            <span className="font-serif text-[16px] leading-6 font-bold tracking-[0.01em] text-[#C4A35A]">
              Únete a Taveron
            </span>
          </div>

          <h2 className="w-166.5 text-center font-serif text-[48px] leading-14.5 font-bold text-white">
            Una app
            <br />
            <span className="text-[#C4A35A]">simplemente maravillosa</span>
          </h2>

          <p className="w-151.5 text-center font-serif text-[24px] leading-8 font-normal text-white">
            Accede a la mejor experiencia financiera y maneja tus finanzas como
            nunca antes lo habías hecho.
          </p>
        </div>

        <div className="h-15.145 w-96.6775 z-10 flex items-start gap-2.5">
          <Link href="#" aria-label="Descargar en App Store">
            <Image
              src="/badges/apple.svg"
              alt="App Store"
              width={182}
              height={61}
              className="h-15.145 w-45.435"
            />
          </Link>
          <Link href="#" aria-label="Descargar en Google Play">
            <Image
              src="/badges/google-play.svg"
              alt="Google Play"
              width={195}
              height={60}
              className="h-15.0525 w-48.7425"
            />
          </Link>
        </div>
      </div>
    </section>
  );
};
