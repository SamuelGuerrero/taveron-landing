import {
  FAQ,
  GuaranteedAdvantages,
  GuaranteedHero,
  GuaranteedProducts,
  GuaranteedSteps,
} from "~/components/templates";

export default function TarjetaGarantizadaPage() {
  return (
    <main>
      <GuaranteedHero />
      <GuaranteedSteps />
      <GuaranteedAdvantages />
      <GuaranteedProducts />
      <FAQ />
    </main>
  );
}
