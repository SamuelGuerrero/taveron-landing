import Image from "next/image";
import { STORE_LINKS } from "~/config/download";

interface StoreButtonsProps {
  className?: string;
}

export const StoreButtons = ({ className }: StoreButtonsProps) => (
  <div className={`flex flex-wrap items-center gap-3 ${className ?? ""}`}>
    <a
      href={STORE_LINKS.appStore}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Descargar en App Store"
      className="transition-transform hover:scale-[1.04]"
    >
      <Image
        src="/badges/apple.svg"
        alt="Descargar en App Store"
        width={163}
        height={55}
        className="h-12 w-auto"
      />
    </a>
    <a
      href={STORE_LINKS.googlePlay}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Disponible en Google Play"
      className="transition-transform hover:scale-[1.04]"
    >
      <Image
        src="/badges/google-play.svg"
        alt="Disponible en Google Play"
        width={163}
        height={51}
        className="h-12 w-auto"
      />
    </a>
  </div>
);
