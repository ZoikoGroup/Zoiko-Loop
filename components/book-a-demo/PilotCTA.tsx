import React from "react";

export default function PilotCTA() {
  return (
    <section className="w-full px-4 md:px-8 py-16 bg-slate-950">

      <div
        className="
          w-full
          max-w-[1384px]
          mx-auto
          rounded-3xl
          border
          border-teal-500/30
          bg-gradient-to-r
          from-gray-900
          to-gray-900
          py-14
          px-6
          text-center
        "
      >

        <h2
          className="
            text-slate-100
            text-2xl
            md:text-3xl
            font-bold
            leading-10
            max-w-3xl
            mx-auto
          "
        >
          Close the loop between payment and retention.
        </h2>


        <p
          className="
            mt-5
            text-gray-400
            text-sm
            md:text-base
            leading-6
            max-w-5xl
            mx-auto
          "
        >
          Zoiko Loop is accepting operator pilot partners. Connect billing
          events, configure reward rules, and measure retention impact without
          replacing your billing system.
        </p>


        <div
          className="
            mt-10
            flex
            flex-col
            sm:flex-row
            justify-center
            items-center
            gap-4
          "
        >

          <button
            className="
              w-full
              sm:w-36
              h-12
              rounded-[10px]
              bg-amber-500
              text-yellow-950
              text-base
              font-bold
            "
          >
            Book a Demo
          </button>


          <button
            className="
              w-full
              sm:w-56
              h-12
              rounded-[10px]
              border
              border-white/20
              text-slate-100
              text-base
              font-bold
            "
          >
            Join the Pilot Program →
          </button>

        </div>


      </div>

    </section>
  );
}