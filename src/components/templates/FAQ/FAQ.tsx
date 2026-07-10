"use client";

import React, { useState } from "react";
import { Text } from "~/components/atoms";
import { Badge } from "~/components/molecules";

const PlusIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden>
    <path
      d="M12 5v14M5 12h14"
      stroke="#0056A3"
      strokeWidth="2.5"
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
    question: "¿Qué es Taveron?",
    answer:
      "Taveron es una fintech que ofrece tarjetas y soluciones financieras diseñadas para acompañar tus decisiones con flexibilidad, claridad y respaldo.",
  },
  {
    question: "¿Para quién es Taveron?",
    answer:
      "Taveron está pensado para personas y negocios que buscan control total sobre sus finanzas y acceso a herramientas modernas de pago.",
  },
  {
    question: "¿Taveron es un banco?",
    answer:
      "No, Taveron es una fintech que opera bajo alianzas con instituciones reguladas para ofrecer productos financieros seguros y confiables.",
  },
  {
    question: "¿Qué tipo de soluciones ofrece Taveron?",
    answer:
      "Ofrecemos tarjetas de crédito, débito y garantizadas, además de soluciones de pago digital y herramientas para vender en línea.",
  },
  {
    question: "¿Qué tipos de tarjetas ofrece Taveron?",
    answer:
      "Contamos con tres líneas: Clásica, Infinity y Garantizada — cada una diseñada para adaptarse a distintos perfiles y objetivos financieros.",
  },
  {
    question: "¿Qué soluciones de pago ofrece Taveron?",
    answer:
      "Aceptamos pagos con Apple Pay, Google Pay, tarjetas Visa y MasterCard, transferencias y wallets digitales, todo integrado en una sola plataforma.",
  },
  {
    question: "¿Puedo vender en línea con Taveron?",
    answer:
      "Sí. Ofrecemos herramientas de e-commerce con integraciones a los principales gateways de pago y soporte multi-canal.",
  },
  {
    question: "¿Es seguro operar con Taveron?",
    answer:
      "Sí. Usamos tokenización, 3D Secure y cifrado de extremo a extremo para proteger cada transacción, respaldados por estándares internacionales.",
  },
  {
    question: "¿Puedo usar más de un servicio de Taveron?",
    answer:
      "Por supuesto. Todos nuestros productos están conectados en una sola cuenta para que gestiones tarjetas, pagos y ventas desde un mismo lugar.",
  },
];

export const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  return (
    <section className="w-full bg-[#E6EEF6] py-16.25">
      <div className="mx-auto flex w-203 flex-col items-center gap-10">
        <div className="flex flex-col items-center gap-5">
          <Badge variant="outline">¿Necesitas más ayuda?</Badge>
          <Text
            as="h2"
            weight="bold"
            size={60}
            className="text-blue-darker w-147.75 text-center leading-[73px]"
          >
            Preguntas frecuentes
          </Text>
        </div>

        <div className="flex w-203 flex-col gap-5.5">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <button
                key={faq.question}
                type="button"
                onClick={() => toggle(index)}
                aria-expanded={isOpen}
                className="w-203 cursor-pointer rounded-[20px] bg-white px-7.5 py-3 text-left transition-shadow duration-300 hover:shadow-md"
              >
                <div className="flex items-center gap-4">
                  <Text
                    weight="bold"
                    size={20}
                    className="flex-1 leading-7 text-[#0F0F0F]"
                  >
                    {faq.question}
                  </Text>
                  <span
                    className={`inline-flex h-10 w-10 shrink-0 items-center justify-center transition-transform duration-300 ${
                      isOpen ? "rotate-45" : "rotate-0"
                    }`}
                  >
                    <PlusIcon className="h-6 w-6" />
                  </span>
                </div>

                <div
                  className={`grid transition-[grid-template-rows,margin,opacity] duration-300 ease-in-out ${
                    isOpen
                      ? "mt-2 grid-rows-[1fr] opacity-100"
                      : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="min-h-0 overflow-hidden">
                    <Text size={16} className="leading-6 text-[#0F0F0F]/70">
                      {faq.answer}
                    </Text>
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
