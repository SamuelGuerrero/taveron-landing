import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Text } from "~/components/atoms";
import { Badge } from "~/components/molecules";

interface Step {
  number: number;
  title: string;
  description: string;
}

const steps: Step[] = [
  {
    number: 1,
    title: "Descarga la app Taveron",
    description:
      "Encuéntranos en App Store y Google Play y comienza tu registro desde tu celular, cuando tú quieras.",
  },
  {
    number: 2,
    title: "Regístrate",
    description:
      "Crea tu cuenta en minutos usando tu correo electrónico y número de teléfono de forma segura.",
  },
  {
    number: 3,
    title: "Verifica tu identidad",
    description:
      "Valida tu información fácilmente con tu INE o pasaporte para proteger tu cuenta y tus operaciones.",
  },
  {
    number: 4,
    title: "Conoce tu crédito",
    description:
      "Te mostramos tu línea de crédito disponible de forma clara y transparente, sin letras pequeñas.",
  },
];

export const ClassicSteps = () => {
  return (
    <section className="relative h-[1103px] w-full overflow-hidden bg-blue-darker text-white">
      <div
        aria-hidden
        className="pointer-events-none absolute top-[279px] left-[calc(50%-241.2px-341.8px)] h-[482.4px] w-[482.4px] rounded-full bg-blue-normal opacity-[0.59] blur-[90.4959px]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute top-[279px] left-[calc(50%-241.2px-10.1px)] h-[482.4px] w-[482.4px] rounded-full bg-blue-normal opacity-70 blur-[90.4959px]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute top-[279px] left-[calc(50%-241.2px+341.8px)] h-[482.4px] w-[482.4px] rounded-full bg-blue-normal opacity-30 blur-[90.4959px]"
      />

      <div className="absolute top-[118px] left-1/2 flex w-[975px] -translate-x-1/2 flex-col items-center gap-[50px]">
        <div className="flex flex-col items-center gap-5">
          <Badge>Pasos para obtenerla</Badge>
          <Text
            as="h2"
            weight="bold"
            size={48}
            className="w-[905px] text-center leading-[58px]"
          >
            Todo lo que necesitas, en solo unos pasos
          </Text>
        </div>

        <div className="flex w-[975px] items-center gap-[62px]">
          <div className="flex-shrink-0">
            <Image
              src="/tarjetas/classic-vertical.svg"
              alt="Tarjeta Clásica Taveron"
              width={363}
              height={595}
              priority
              className="h-[595px] w-[363px] object-contain"
            />
          </div>

          <div className="flex flex-1 flex-col gap-5">
            {steps.map((step) => (
              <div
                key={step.number}
                className="flex w-full items-start gap-2.5 rounded-[20px] border border-white/10 p-5"
                style={{
                  background:
                    "linear-gradient(90deg, rgba(255,255,255,0) 0%, rgba(255,255,255,0.05) 100%)",
                }}
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#F0F7F9]">
                  <Text weight="bold" size={20} className="text-blue-darker">
                    {step.number}
                  </Text>
                </div>
                <div className="flex flex-col gap-2.5">
                  <Text weight="bold" size={24} className="leading-8">
                    {step.title}
                  </Text>
                  <Text size={16} className="leading-6 tracking-[0.01em]">
                    {step.description}
                  </Text>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="flex items-center gap-2.5">
          <Link href="#" aria-label="Descargar en App Store">
            <Image
              src="/badges/apple.svg"
              alt="App Store"
              width={182}
              height={60}
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
