import { type Metadata } from "next";
import { UnderConstruction } from "~/components/templates";

export const metadata: Metadata = {
  title: "Soporte — Taveron",
};

export default function SoportePage() {
  return (
    <UnderConstruction
      badge="✦ En mantenimiento"
      title={
        <>
          Estamos en
          <br />
          mantenimiento
        </>
      }
      subtitle="Estamos realizando mejoras en el sitio. Vuelve pronto para una mejor experiencia."
    />
  );
}
