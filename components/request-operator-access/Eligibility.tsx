import React from "react";

const eligibilityCards = [
  {
    title: "Eligible / supported",
    text: (
      <>
        Authorized employees of operators and approved
        <br />
        telecom groups; contracted implementation teams;
        <br />
        sponsored operator partners.
      </>
    ),
    border: "outline-white/10",
  },
  {
    title: "Requires additional verification",
    text: (
      <>
        Consultants without a sponsor; free email domains; new
        <br />
        entities without a public website; cross-tenant or early
        <br />
        production requests.
      </>
    ),
    border: "outline-amber-500/30",
  },
  {
    title: "Not the right route",
    text: (
      <>
        Consumers seeking rewards; general job applicants;
        <br />
        unrelated vendors; existing users with sign-in problems;
        <br />
        requests for subscriber-level data.
      </>
    ),
    border: "outline-red-400",
  },
];

export default function Eligibility() {
  return (
    <section className="w-full bg-slate-900 py-[72px]">
      <div className="max-w-[1184px] mx-auto px-6">

        {/* Header */}
        <div className="text-center">
          <p
            className="
              text-slate-500
              text-xs
              font-bold
              font-['Segoe_UI']
              uppercase
              tracking-widest
              leading-5
            "
          >
            Who this is for
          </p>

          <h2
            className="
              mt-6
              text-slate-100
              text-4xl
              font-bold
              font-['Segoe_UI']
              leading-[52px]
            "
          >
            Eligibility guidance
          </h2>
        </div>


        {/* Cards */}
        <div
          className="
            mt-12
            grid
            grid-cols-1
            md:grid-cols-3
            gap-6
          "
        >
          {eligibilityCards.map((card) => (
            <div
              key={card.title}
              className={`
                h-36
                relative
                bg-gray-800
                rounded-xl
                outline
                outline-1
                outline-offset-[-1px]
                ${card.border}
              `}
            >
              <h3
                className="
                  absolute
                  left-[23px]
                  top-[26px]
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
                  top-[59px]
                  text-gray-400
                  text-sm
                  font-normal
                  font-['Segoe_UI']
                  leading-5
                "
              >
                {card.text}
              </p>
            </div>
          ))}
        </div>


        {/* Warning */}
        <div
          className="
            mt-8
            max-w-[820px]
            mx-auto
            h-auto
            min-h-24
            bg-gray-800
            rounded-xl
            outline
            outline-1
            outline-offset-[-1px]
            outline-red-400
            px-[21px]
            py-5
          "
        >
          <h3
            className="
              text-red-400
              text-sm
              font-bold
              font-['Segoe_UI']
              leading-5
            "
          >
            No sensitive data in the form
          </h3>

          <p
            className="
              mt-3
              text-gray-400
              text-xs
              font-normal
              font-['Segoe_UI']
              leading-5
            "
          >
            Do not request or submit API secrets, passwords, private keys,
            raw event files, subscriber identifiers, payment-card data,
            billing exports, or confidential architecture documents.
            Secure evidence requests occur only after a reviewer initiates them.
          </p>
        </div>

      </div>
    </section>
  );
}