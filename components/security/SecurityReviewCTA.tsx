import React from "react";

export default function SecurityReviewCTA() {
  return (
    <section className="w-full bg-slate-900 px-4 py-16">
      <div
        className="
          mx-auto
          max-w-[1384px]
          h-72
          relative
          bg-gradient-to-br
          from-gray-900
          to-gray-900
          rounded-3xl
          border
          border-teal-500/30
        "
      >
        {/* Heading */}
        <h2
          className="
            absolute
            top-[57px]
            left-1/2
            -translate-x-1/2
            w-full
            text-center
            text-slate-100
            text-3xl
            font-bold
            font-['Segoe_UI']
            leading-10
          "
        >
          Ready for a deeper security conversation?
        </h2>

        {/* Description */}
        <p
          className="
            absolute
            top-[120.50px]
            left-1/2
            -translate-x-1/2
            w-[90%]
            text-center
            text-gray-400
            text-base
            font-normal
            font-['Segoe_UI']
            leading-6
          "
        >
          Request a review to receive evidence appropriate to your role, region,
          and evaluation stage — under a verified, NDA-aware process.
        </p>

        {/* Buttons */}
        <div
          className="
            absolute
            top-[167.51px]
            left-1/2
            -translate-x-1/2
            flex
            items-center
            gap-5
          "
        >
          <button
            type="button"
            className="
              h-12
              w-56
              rounded-[10px]
              bg-amber-500
              text-yellow-950
              text-base
              font-bold
              font-['Segoe_UI']
              transition
              hover:bg-amber-400
            "
          >
            Request a security review
          </button>

          <button
            type="button"
            className="
              h-12
              w-36
              rounded-[10px]
              border
              border-white/20
              text-slate-100
              text-base
              font-bold
              font-['Segoe_UI']
              transition
              hover:bg-white/10
            "
          >
            Book a Demo
          </button>
        </div>
      </div>
    </section>
  );
}