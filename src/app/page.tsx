import {
  CardBenefits,
  CardsCarousel,
  CardsShowcase,
  DownloadApp,
  FAQ,
  Hero,
} from "~/components/organisms";

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
