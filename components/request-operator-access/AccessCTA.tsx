import React from "react";

export default function AccessCTA() {
  return (
    <section className="w-full bg-slate-900 px-6 py-16 md:py-20">

      <div
        className="
          max-w-[1384px]
          mx-auto
          min-h-[288px]
          bg-gray-900
          rounded-3xl
          border
          border-teal-500/30
          flex
          flex-col
          items-center
          justify-center
          text-center
          px-6
          md:px-10
          py-12
        "
      >

        <h2
          className="
            max-w-[630px]
            text-slate-100
            text-2xl
            md:text-3xl
            font-bold
            font-['Segoe_UI']
            leading-10
          "
        >
          Request the access your role actually needs.
        </h2>


        <p
          className="
            max-w-[550px]
            mt-5
            text-gray-400
            text-sm
            md:text-base
            font-normal
            font-['Segoe_UI']
            leading-6
          "
        >
          Least-privilege by design. Verified before provisioning.
          Every decision recorded.
        </p>


        <button
          className="
            mt-8
            w-56
            h-12
            bg-amber-500
            rounded-[10px]
            text-yellow-950
            text-base
            font-bold
            font-['Segoe_UI']
            hover:bg-amber-400
            transition
          "
        >
          Request operator access
        </button>


      </div>

    </section>
  );
}