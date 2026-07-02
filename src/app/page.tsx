import {
  CardBenefits,
  CardsCarousel,
  CardsShowcase,
  DownloadApp,
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
    </main>
  );
}
