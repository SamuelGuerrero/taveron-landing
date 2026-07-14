import Image from "next/image";

interface Step {
  number: number;
  title: string;
  description: string;
}

const steps: Step[] = [
  {
    number: 1,
    title: "Solicita tu invitación",
    description:
      "Completa un breve formulario con tus datos básicos y perfil financiero. Nuestro equipo evaluará tu elegibilidad para enviarte una invitación exclusiva.",
  },
  {
    number: 2,
    title: "Recibe tu acceso exclusivo",
    description:
      "Si cumples con los criterios, recibirás una invitación personalizada por correo o SMS para iniciar tu registro prioritario.",
  },
  {
    number: 3,
    title: "Regístrate y verifica tu identidad",
    description:
      "Crea tu cuenta en minutos y valida tu identidad con tu identificación oficial y datos personales, de forma segura y confidencial.",
  },
  {
    number: 4,
    title: "Activa tu tarjeta premium",
    description:
      "Confirma tus beneficios, activa tu tarjeta digital o física y comienza a disfrutar de una experiencia financiera diseñada para ti.",
  },
];

export const InfinityPrivileges = () => {
  return (
    <section className="relative h-275.75 w-full overflow-hidden bg-black text-white">
      <div
        aria-hidden
        className="pointer-events-none absolute h-76.5 w-76.5 rounded-full bg-[#C4A35A] opacity-[0.25] blur-[68.4539px]"
        style={{ left: "calc(50% - 153px - 288px - 71px)", top: 342 }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute h-76.5 w-76.5 rounded-full bg-[#C4A35A] opacity-20 blur-[68.4539px]"
        style={{ left: "calc(50% - 153px - 77px - 71px)", top: 342 }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute h-76.5 w-76.5 rounded-full bg-[#C4A35A] opacity-[0.18] blur-[68.4539px]"
        style={{ left: "calc(50% - 153px + 146px - 71px)", top: 342 }}
      />

      <div className="absolute top-1/2 left-1/2 flex w-243.75 -translate-x-1/2 -translate-y-1/2 flex-col items-center gap-12.5">
        <div className="flex flex-col items-center gap-5">
          <div className="inline-flex items-center justify-center rounded-[70px] border border-[#C4A35A] bg-[#C4A35A]/10 px-5 py-1.25">
            <span className="font-serif text-[16px] leading-6 font-bold tracking-[0.01em] text-[#C4A35A]">
              Privilegios
            </span>
          </div>
          <h2 className="w-141.5 text-center font-serif text-[48px] leading-14.5 font-bold text-[#C4A35A]">
            Cada beneficio,
            <br />
            cuidadosamente seleccionado.
          </h2>
        </div>

        <div className="flex w-243.75 items-center gap-15.5">
          <div className="shrink-0">
            <Image
              src="/tarjetas/infinity-vertical.svg"
              alt="Tarjeta Infinity Taveron"
              width={341}
              height={595}
              priority
              className="animate-breathe h-148.75 w-85.25 object-contain will-change-transform"
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
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#C4A35A]">
                  <span className="font-sans text-base font-normal text-white italic">
                    {step.number}
                  </span>
                </div>
                <div className="flex flex-col gap-2.5">
                  <h3 className="font-serif text-[24px] leading-8 font-bold text-white">
                    {step.title}
                  </h3>
                  <p className="font-serif text-[18px] leading-6 font-normal text-white">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div
        aria-hidden
        className="pointer-events-none absolute h-76 w-76 rounded-full bg-[#C4A35A] opacity-65 blur-[72px]"
        style={{ left: 1341, top: -215 }}
      />
    </section>
  );
};
