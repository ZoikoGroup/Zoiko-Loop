import {
  OperatorDemo,
  WhyOperatorsTrust,
  Session,
  Paths,
  NextSteps,
  SecurityScope,
  DemoFAQ,
  PilotCTA,
} from "@/components/book-a-demo";

export default function Page() {
  return (
    <main>
      <OperatorDemo />
      <WhyOperatorsTrust />
      <Session />
      <Paths />
      <NextSteps />
      <SecurityScope />
      <DemoFAQ />
      <PilotCTA />
    </main>
  );
}