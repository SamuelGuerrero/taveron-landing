import {
  CardBenefits,
  CardsCarousel,
  CardsShowcase,
  DownloadApp,
  FAQ,
  Hero,
} from "~/components/templates";

export default function HomePage() {
  return (
    <main>
      <Hero />
      <CardsShowcase />
      <CardsCarousel />
      <CardBenefits />
      <DownloadApp />
      <FAQ />
    </main>
  );
}
