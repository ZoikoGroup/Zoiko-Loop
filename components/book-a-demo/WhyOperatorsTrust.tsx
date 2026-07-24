import React from "react";

export default function WhyOperatorsTrust() {
  const cards = [
    {
      title: "Built for telecom operators",
      text: (
        <>
          MNOs, MVNOs, prepaid operators,
          <br />
          enablement platforms, and multi-
          <br />
          market groups. MVNE/MVNA included.
        </>
      ),
    },
    {
      title: "Works with your existing stack",
      text: (
        <>
          ZoikoNex native event stream,
          <br />
          webhook API, SFTP batch, top-up
          <br />
          networks, and payment gateway
          <br />
          events.
        </>
      ),
      link: "Explore integration paths →",
    },
    {
      title: "Double-entry reward ledger",
      text: (
        <>
          Issuance, redemption, expiry, reversal,
          <br />
          breakage, partner funding, and
          <br />
          operator liability remain auditable.
        </>
      ),
      link: "What this means →",
    },
    {
      title: (
        <>
          Consent-led and
          <br />
          pseudonymized
        </>
      ),
      text: (
        <>
          Event consent and tenant-scoped
          <br />
          subscriber references are treated as
          <br />
          architecture, not marketing
          <br />
          checkboxes.
        </>
      ),
    },
  ];

  return (
    <section className="w-full bg-slate-950 py-16">
      <div className="max-w-[1240px] mx-auto px-6">
        {/* Heading */}
        <div className="text-center text-slate-500 text-xs font-bold uppercase tracking-widest leading-5 mb-8">
          Why operators trust the fit
        </div>

        {/* Cards */}
        <div
          className="
            grid 
            grid-cols-1 
            sm:grid-cols-2 
            lg:grid-cols-4 
            gap-5
          "
        >
          {cards.map((card, index) => (
            <div
              key={index}
              className="
                min-h-[192px]
                bg-gray-800
                rounded-xl
                outline
                outline-1
                outline-offset-[-1px]
                outline-white/10
                p-6
              "
            >
              <h3 className="text-slate-100 text-base font-bold font-['Segoe_UI'] leading-6">
                {card.title}
              </h3>

              <p className="mt-3 text-gray-400 text-sm font-normal font-['Segoe_UI'] leading-5">
                {card.text}
              </p>

              {card.link && (
                <div className="mt-5 text-teal-500 text-xs font-normal font-['Segoe_UI'] underline leading-5">
                  {card.link}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}