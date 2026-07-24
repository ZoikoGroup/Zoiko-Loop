import React from "react";

export default function Session() {
  const items = [
    {
      no: "1",
      title: "Business fit",
      text: "Payment punctuality, recharge rhythm, bundle renewal, inactivity, and retention use cases.",
    },
    {
      no: "2",
      title: "Event-to-reward flow",
      text: "Event ingestion, consent validation, rule evaluation, ledger posting, wallet update, and measurement.",
    },
    {
      no: "3",
      title: "Rules and governance",
      text: "Triggers, streaks, tiers, caps, approval workflow, reversals, fraud holds, and audit visibility.",
    },
    {
      no: "4",
      title: "Embedded experience",
      text: "Wallet balance, history, tier, next reward opportunity, and operator app embedding.",
    },
    {
      no: "5",
      title: "Reporting and economics",
      text: "Reward liability, campaign performance, retention cohorts, reconciliation, and measurement plan.",
    },
    {
      no: "6",
      title: "Integration and next steps",
      text: "Native or open integration route, pilot scope, stakeholders, and implementation discovery.",
    },
  ];

  return (
    <section className="w-full bg-slate-900 py-16">
      <div className="max-w-[1200px] mx-auto px-6">

        {/* Heading */}
        <div className="text-center">
          <div className="text-slate-500 text-xs font-bold uppercase tracking-widest leading-5">
            Your 30-minute session
          </div>

          <h2 className="mt-6 text-slate-100 text-3xl md:text-4xl font-bold leading-tight">
            From billing event to earned reward —
            <br className="hidden md:block" />
            tailored to you.
          </h2>

          <p className="mt-4 text-gray-400 text-sm md:text-base leading-6 max-w-3xl mx-auto">
            Your selections in Step 2 reorder this agenda so the walkthrough
            matches your role and objective.
          </p>
        </div>


        {/* Cards */}
        <div
          className="
            mt-16
            grid
            grid-cols-1
            lg:grid-cols-2
            gap-5
          "
        >
          {items.map((item) => (
            <div
              key={item.no}
              className="
                relative
                min-h-[112px]
                bg-gray-800
                rounded-xl
                outline
                outline-1
                outline-offset-[-1px]
                outline-white/10
                p-6
                pl-[73px]
              "
            >

              {/* Number */}
              <div
                className="
                  absolute
                  left-6
                  top-6
                  size-8
                  flex
                  items-center
                  justify-center
                  rounded-lg
                  bg-gray-800
                  text-teal-500
                  text-sm
                  font-bold
                "
              >
                {item.no}
              </div>


              {/* Content */}
              <h3 className="text-slate-100 text-base font-bold leading-6">
                {item.title}
              </h3>

              <p className="mt-2 text-gray-400 text-sm leading-5">
                {item.text}
              </p>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}