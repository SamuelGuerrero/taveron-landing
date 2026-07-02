import {
  CardBenefits,
  CardsCarousel,
  CardsShowcase,
  Hero,
} from "~/components/organisms";

export default function HomePage() {
  return (
    <main>
      <Hero />
      <CardsShowcase />
      <CardsCarousel />
      <CardBenefits />
    </main>
  );
}
