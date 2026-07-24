"use client";

import React from "react";

export default function Routes() {
  const cards = [
    {
      title: "Not ready for access",
      description: (
        <>
          See the product and ask questions in a guided session
          <br className="hidden sm:block" />
          first.
        </>
      ),
      button: "Book a demo",
    },
    {
      title: "Technical evaluation",
      description: (
        <>
          Discuss your stack and integration path before
          <br className="hidden sm:block" />
          requesting a sandbox.
        </>
      ),
      button: "Explore integrations",
    },
    {
      title: "Existing user",
      description: (
        <>
          Sign in, recover your account, or ask your workspace
          <br className="hidden sm:block" />
          administrator to resend an invitation.
        </>
      ),
      button: "Sign in",
    },
  ];

  return (
    <section className="min-h-[384px] bg-slate-900 px-4 py-16">

      {/* Heading */}
      <div className="mx-auto max-w-4xl text-center">

        <p className="text-xs font-bold uppercase tracking-widest text-slate-500">
          Not the right form?
        </p>

        <h2
          className="
          mt-5
          text-3xl
          font-bold
          leading-[52px]
          text-slate-100
          sm:text-4xl
          "
        >
          Alternate high-intent routes
        </h2>

      </div>



      {/* Cards */}
      <div
        className="
        mx-auto mt-10
        grid max-w-[1184px]
        grid-cols-1
        gap-6
        md:grid-cols-2
        lg:grid-cols-3
        "
      >

        {cards.map((card) => (
          <div
            key={card.title}
            className="
            h-44
            rounded-xl
            border border-white/10
            bg-gray-800
            p-6
            "
          >

            <h3
              className="
              text-base
              font-bold
              leading-6
              text-slate-100
              "
            >
              {card.title}
            </h3>


            <p
              className="
              mt-3
              text-sm
              leading-5
              text-gray-400
              "
            >
              {card.description}
            </p>



            <button
              className="
              mt-5
              h-10
              w-full
              rounded-lg
              border border-white/20
              text-xs
              font-bold
              text-slate-100
              transition
              hover:bg-white/5
              "
            >
              {card.button}
            </button>


          </div>
        ))}

      </div>

    </section>
  );
}