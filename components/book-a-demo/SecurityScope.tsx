import React from "react";

export default function SecurityScope() {
  const cards = [
    {
      title: "Data requested",
      text: "We collect professional contact and operator-context information only to prepare and follow up on your request.",
    },
    {
      title: "Product data boundary",
      text: "Zoiko Loop receives payment outcomes and telecom events — not cardholder data — and does not replace your billing or identity system.",
    },
    {
      title: "Consent",
      text: "Subscriber-event consent is a product architecture concern. Demo-form consent covers only contact about this request and optional updates.",
    },
    {
      title: "Roadmap claims",
      text: "SOC 2 Type II and ISO 27001 remain roadmap items until achieved. PCI scope is minimized by architecture, not a certified exemption.",
      badge: "Roadmap",
    },
  ];

  return (
    <section className="w-full bg-slate-900 py-16">

      <div className="text-center px-4">

        <div className="text-slate-500 text-xs font-bold uppercase tracking-widest leading-5">
          Trust before submission
        </div>


        <h2 className="mt-6 text-slate-100 text-3xl md:text-4xl font-bold leading-tight">
          Security, privacy, and product scope
        </h2>

      </div>


      <div
        className="
          mt-14
          px-4 md:px-10 lg:px-[128px]
          grid
          grid-cols-1
          sm:grid-cols-2
          lg:grid-cols-4
          gap-5
        "
      >

        {cards.map((card) => (
          <div
            key={card.title}
            className="
              relative
              w-full
              h-44
              bg-gray-800
              rounded-xl
              outline outline-1 outline-offset-[-1px]
              outline-white/10
              p-5
            "
          >

            <h3
              className="
                text-slate-100
                text-sm
                font-bold
                leading-6
              "
            >
              {card.title}
            </h3>


            <p
              className="
                mt-4
                text-gray-400
                text-xs
                leading-5
              "
            >
              {card.text}
            </p>


            {card.badge && (
              <div
                className="
                  absolute
                  bottom-4
                  left-5
                  px-3
                  py-1
                  rounded-full
                  border
                  border-white/20
                  text-slate-500
                  text-[10px]
                  uppercase
                  tracking-wide
                "
              >
                {card.badge}
              </div>
            )}

          </div>
        ))}

      </div>


      <div className="mt-12 flex justify-center px-4">

        <button
          className="
            h-11
            px-6
            rounded-[10px]
            border
            border-white/20
            text-slate-100
            text-base
            font-bold
          "
        >
          Request security review
        </button>

      </div>


    </section>
  );
}