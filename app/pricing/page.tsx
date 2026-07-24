import {
  PricingHero,
  Paths,
  Drivers,
  Matrix,
  Cards,
  ScopeBuilder,
  Process,
  Scope,
  FAQ,
  Ready,
} from "@/components/pricing";

export default function Page() {
  return (
    <main>
      <PricingHero />
      <Paths />
      <Drivers />
      <Matrix />
      <Cards />
      <ScopeBuilder />
      <Process />
      <Scope />
      <FAQ />
      <Ready />
    </main>
  );
}