import React from "react";

const firstRow = [
  {
    title: "MVNOs & Challenger Operators",
    description:
      "Pilot-led differentiation and rapid deployment for challenger brands.",
    button: "Explore MVNOs",
  },
  {
    title: "MNOs",
    description:
      "Scale, governance, and multi-program orchestration across brands and markets.",
    button: "Explore MNOs",
  },
  {
    title: "Prepaid Operators",
    description:
      "Top-up rhythm, bundle renewal, and reactivation programs.",
    button: "Explore Prepaid Operators",
  },
  {
    title: "Family Plans",
    description:
      "Household-level rewards with member-respecting fairness controls.",
    button: "Explore Family Plans",
  },
];

const secondRow = [
  {
    title: "Diaspora Top-Up",
    description:
      "Sender-recipient loyalty and repeat cross-border recharge.",
    button: "Explore Diaspora Top-Up",
  },
  {
    title: "Enterprise Telecom Groups",
    description:
      "Multi-market governance and dedicated deployment options.",
    button: "Explore Enterprise Groups",
  },
];

type CardProps = {
  title: string;
  description: string;
  button: string;
};

function Card({ title, description, button }: CardProps) {
  return (
    <div className="flex h-full flex-col rounded-xl border border-white/10 bg-[#1F2937] p-6">
      <h3 className="text-base font-bold text-white">
        {title}
      </h3>

      <p className="mt-3 flex-1 text-sm leading-7 text-gray-400">
        {description}
      </p>

      <button className="mt-6 flex h-11 w-full items-center justify-center rounded-lg border border-white/20 text-sm font-semibold text-white transition hover:bg-white/10">
        {button}
      </button>
    </div>
  );
}

export default function FindYourSolution() {
  return (
    <section className="bg-[#020817] py-20">
      <div className="mx-auto max-w-7xl px-6">
        {/* Heading */}
        <div className="text-center">
          <p className="text-xs font-bold uppercase tracking-[0.3em] text-slate-500">
            SIX OPERATOR CONTEXTS, ONE PLATFORM
          </p>

          <h2 className="mt-4 text-4xl font-bold text-white md:text-5xl">
            Find your solution
          </h2>
        </div>

        {/* First Row */}
        <div className="mt-16 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {firstRow.map((item) => (
            <Card key={item.title} {...item} />
          ))}
        </div>

        {/* Second Row */}
        <div className="mx-auto mt-6 grid max-w-[620px] gap-6 md:grid-cols-2">
          {secondRow.map((item) => (
            <Card key={item.title} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
}