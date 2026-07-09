import React from "react";
import { type Metadata } from "next";
import { Logo, Text } from "~/components/atoms";
import { StoreButtons } from "~/components/molecules/StoreButtons/StoreButtons";

export const metadata: Metadata = {
  title: "Descarga la app de Taveron",
  description:
    "Descarga la app de Taveron desde App Store o Google Play y solicita tu tarjeta.",
};

export default function DescargarPage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-10 bg-blue-darker px-6 py-24 text-center text-white">
      <Logo className="text-white" />

      <div className="flex max-w-[560px] flex-col items-center gap-5">
        <Text as="h1" weight="bold" size={48} className="leading-tight">
          Descarga la app de Taveron
        </Text>
        <Text size={18} className="text-white/80">
          Da el primer paso hacia un mejor control financiero. Descarga la app,
          solicita tu tarjeta y empieza a crecer con Taveron.
        </Text>
      </div>

      <StoreButtons className="justify-center" />
    </main>
  );
}
