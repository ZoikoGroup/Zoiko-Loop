import React from "react";

import {
  TelecomHero,
  FindYourSolution,
  OutcomeFramework,
  TelecomFAQ,
  TelecomCTA,
} from "@/components/solutions";

export default function Page() {
  return (
    <main>
      <TelecomHero />
      <FindYourSolution />
      <OutcomeFramework />
      <TelecomFAQ />
      <TelecomCTA />
    </main>
  );
}
