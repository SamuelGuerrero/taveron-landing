import { type ReactNode } from "react";
import Image from "next/image";
import { Text } from "~/components/atoms";
import { Badge, StoreButtons } from "~/components/molecules";

interface UnderConstructionProps {
  badge?: string;
  title?: ReactNode;
  subtitle?: string;
}

export const UnderConstruction = ({
  badge = "✦ Estamos trabajando",
  title = (
    <>
      Esta sección está
      <br />
      en construcción
    </>
  ),
  subtitle = "Estamos mejorando esta sección para ofrecerte una mejor experiencia. Muy pronto estará disponible.",
}: UnderConstructionProps) => {
  return (
    <section className="bg-blue-darker relative flex min-h-screen w-full items-center justify-center overflow-hidden px-6 py-32 text-center text-white">
      <Image
        src="/construction/background.svg"
        alt=""
        fill
        priority
        aria-hidden
        className="pointer-events-none object-cover"
      />

      <div className="relative z-10 flex flex-col items-center gap-10">
        <Image
          src="/construction/icon.svg"
          alt=""
          width={288}
          height={152}
          priority
          aria-hidden
          className="h-38 w-72 object-contain"
        />

        <div className="flex flex-col items-center gap-5">
          <Badge variant="white" className="border-white">
            {badge}
          </Badge>

          <div className="flex flex-col items-center gap-2">
            <Text as="h1" weight="bold" size={72} className="leading-[82px]">
              {title}
            </Text>

            <Text size={24} className="max-w-201.5 leading-8">
              {subtitle}
            </Text>
          </div>

          <StoreButtons className="mt-5 justify-center" />
        </div>
      </div>
    </section>
  );
};
