import React from "react";

const cards = [
  {
    title: "Verified operator relationship",
    description: (
      <>
        Requests are reviewed against
        <br />
        organization, domain, sponsor,
        <br />
        contract, or pilot context.
      </>
    ),
  },
  {
    title: "Least-privilege provisioning",
    description: (
      <>
        Approved users receive only the
        <br />
        tenant, environment, modules, and role
        <br />
        required for their work.
      </>
    ),
  },
  {
    title: "Synthetic sandbox data",
    description: (
      <>
        Do not send live subscriber, payment-
        <br />
        card, credential, or customer-master
        <br />
        data to a sandbox.
      </>
    ),
  },
  {
    title: "Audit-recorded decisions",
    description: (
      <>
        Submission, review, approval, role
        <br />
        assignment, invitation, and revocation
        <br />
        events are recorded.
      </>
    ),
  },
];

export default function AccessCards() {
  return (
    <section className="w-full bg-slate-950">
      <div className="max-w-[1184px] mx-auto px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {cards.map((card) => (
            <div
              key={card.title}
              className="
                w-full
                h-36
                relative
                bg-gray-800
                rounded-xl
                outline
                outline-1
                outline-offset-[-1px]
                outline-white/10
              "
            >
              <h3
                className="
                  absolute
                  left-[23px]
                  top-[23px]
                  text-slate-100
                  text-base
                  font-bold
                  font-['Segoe_UI']
                  leading-6
                "
              >
                {card.title}
              </h3>

              <p
                className="
                  absolute
                  left-[23px]
                  top-[57.80px]
                  text-gray-400
                  text-sm
                  font-normal
                  font-['Segoe_UI']
                  leading-5
                "
              >
                {card.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}