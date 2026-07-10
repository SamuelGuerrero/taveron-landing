"use client";

import { useState } from "react";

const gold = "#C4A35A";

const PlusIcon = ({ isOpen }: { isOpen: boolean }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    className={`h-6 w-6 transition-transform duration-300 ${
      isOpen ? "rotate-45" : "rotate-0"
    }`}
    aria-hidden
  >
    <path
      d="M12 5v14M5 12h14"
      stroke={gold}
      strokeWidth="2"
      strokeLinecap="round"
    />
  </svg>
);

interface FaqItem {
  question: string;
  answer: string;
}

const faqs: FaqItem[] = [
  {
    question: "¿Qué necesito para solicitar una tarjeta de crédito clásica?",
    answer:
      "Necesitas una identificación oficial vigente, datos de contacto y completar la solicitud para que evaluemos tu perfil financiero.",
  },
  {
    question: "¿Tiene costo anual o comisiones?",
    answer:
      "Las condiciones dependen del producto aprobado y se muestran con claridad antes de activar tu tarjeta.",
  },
  {
    question: "¿Cuánto crédito me pueden otorgar?",
    answer:
      "La línea se define según tu perfil, historial y capacidad de pago. Te compartimos el monto disponible durante el proceso de aprobación.",
  },
  {
    question: "¿Puedo usarla en compras en línea y en el extranjero?",
    answer:
      "Sí. Puedes usar tu tarjeta Taveron para compras digitales, pagos presenciales y transacciones internacionales donde sea aceptada.",
  },
  {
    question: "¿Qué pasa si no pago el total de mi saldo?",
    answer:
      "Puedes cubrir al menos el pago mínimo, pero el saldo pendiente puede generar intereses conforme a los términos de tu tarjeta.",
  },
  {
    question: "¿Cómo controlo mis gastos y movimientos?",
    answer:
      "Desde la app puedes revisar movimientos, consultar saldos, recibir notificaciones y dar seguimiento a tus pagos.",
  },
];

export const InfinityFAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  return (
    <section className="relative h-218.75 w-full bg-black text-white">
      <div
        aria-hidden
        className="pointer-events-none absolute z-50 h-83.5 w-83.5 rounded-full bg-[#C4A35A] opacity-20 blur-[128px]"
        style={{ left: -87, top: 592 }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute h-128.75 w-128.75 rounded-full bg-[#C4A35A] opacity-20 blur-[150px]"
        style={{ right: -178, top: 94 }}
      />

      <div className="absolute top-21.25 left-1/2 flex w-200 -translate-x-1/2 flex-col items-center">
        <div className="inline-flex h-8.5 items-center justify-center rounded-[70px] border border-[#C4A35A] bg-[#C4A35A]/10 px-5">
          <span className="font-serif text-[16px] leading-6 font-bold tracking-[0.01em] text-[#C4A35A]">
            ¿Necesitas más ayuda?
          </span>
        </div>

        <h2 className="mt-6.5 text-center font-serif text-[48px] leading-14.5 font-bold text-[#C4A35A]">
          Preguntas frecuentes
        </h2>

        <div className="mt-12 flex w-203 flex-col gap-5.5">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <button
                key={faq.question}
                type="button"
                onClick={() => toggle(index)}
                aria-expanded={isOpen}
                className="group relative w-203 cursor-pointer overflow-hidden rounded-[10px] border border-[#C4A35A]/90 bg-black px-7.5 py-4.75 text-left transition-colors duration-300 hover:border-[#C4A35A]"
              >
                <span
                  aria-hidden
                  className="pointer-events-none absolute inset-0 bg-[linear-gradient(90deg,rgba(196,163,90,0)_0%,rgba(196,163,90,0.08)_100%)] opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                />
                <div className="relative flex items-center gap-6">
                  <h3 className="flex-1 font-serif text-[20px] leading-7 font-bold text-white">
                    {faq.question}
                  </h3>
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center">
                    <PlusIcon isOpen={isOpen} />
                  </span>
                </div>

                <div
                  className={`relative grid transition-[grid-template-rows,margin,opacity] duration-300 ease-in-out ${
                    isOpen
                      ? "mt-3 grid-rows-[1fr] opacity-100"
                      : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="min-h-0 overflow-hidden">
                    <p className="max-w-167.5 font-serif text-[18px] leading-6 text-white/75">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
};
