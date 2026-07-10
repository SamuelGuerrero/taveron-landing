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
    <section className="bg-blue-darker relative h-275.75 w-full overflow-hidden text-white">
      <div
        aria-hidden
        className="bg-blue-normal h-120.6 w-120.6 pointer-events-none absolute top-69.75 left-[calc(50%-241.2px-341.8px)] rounded-full opacity-[0.59] blur-[90.4959px]"
      />
      <div
        aria-hidden
        className="bg-blue-normal h-120.6 w-120.6 pointer-events-none absolute top-69.75 left-[calc(50%-241.2px-10.1px)] rounded-full opacity-70 blur-[90.4959px]"
      />
      <div
        aria-hidden
        className="bg-blue-normal h-120.6 w-120.6 pointer-events-none absolute top-69.75 left-[calc(50%-241.2px+341.8px)] rounded-full opacity-30 blur-[90.4959px]"
      />

      <div className="absolute top-29.5 left-1/2 flex w-243.75 -translate-x-1/2 flex-col items-center gap-12.5">
        <div className="flex flex-col items-center gap-5">
          <Badge>Pasos para obtenerla</Badge>
          <Text
            as="h2"
            weight="bold"
            size={48}
            className="w-226.25 text-center leading-14.5"
          >
            Todo lo que necesitas, en solo unos pasos
          </Text>
        </div>

        <div className="flex w-243.75 items-center gap-15.5">
          <div className="shrink-0">
            <Image
              src="/tarjetas/classic-vertical.svg"
              alt="Tarjeta Clásica Taveron"
              width={363}
              height={595}
              priority
              className="h-148.75 w-90.75 object-contain"
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
