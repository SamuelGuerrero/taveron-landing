import {
  CardBenefits,
  ClassicBenefits,
  ClassicHero,
  ClassicSteps,
  FAQ,
  JoinTaveron,
} from "~/components/templates";

export default function TarjetaClasicaPage() {
  return (
    <main>
      <ClassicHero />
      <ClassicBenefits />
      <ClassicSteps />
      <CardBenefits />
      <JoinTaveron />
      <FAQ />
    </main>
  );
}
