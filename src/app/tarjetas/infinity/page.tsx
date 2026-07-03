import {
  InfinityBenefits,
  InfinityFAQ,
  InfinityHero,
  InfinityJoinTaveron,
  InfinityPrivileges,
  InfinityQuote,
  InfinityStatement,
} from "~/components/templates";

export default function TarjetaInfinityPage() {
  return (
    <main>
      <InfinityHero />
      <InfinityStatement />
      <InfinityPrivileges />
      <InfinityQuote />
      <InfinityBenefits />
      <InfinityFAQ />
      <InfinityJoinTaveron />
    </main>
  );
}
