import React from "react";

export default function TrustBoundary() {
  return (
    <section className="relative w-full overflow-hidden bg-slate-900 py-16 lg:py-20">
      <div className="mx-auto w-full max-w-[1440px] px-5 sm:px-8 lg:px-0">

        {/* Section Label */}
        <div className="flex justify-center">
          <p
            className="
              text-center
              text-xs
              font-normal
              uppercase
              tracking-[2.8px]
              text-slate-500
            "
          >
            TRUST BOUNDARY
          </p>
        </div>

        {/* Heading */}
        <div className="mt-6 flex justify-center">
          <h2
            className="
              mx-auto
              mt-6
              w-full
              max-w-[700px]
              text-center
              text-[36px]
              font-normal
              leading-[52.7px]
              text-slate-100
            "
          >
            Every event passes through the same
            <br />
            trust flow
          </h2>
        </div>

        {/* Description */}
        <div className="mt-6 flex justify-center">
          <p
            className="
              w-full
              max-w-[569px]
              px-2
              text-center
              text-[15px]
              font-normal
              leading-7
              text-gray-400
              sm:text-base
              lg:px-0
            "
          >
            Regardless of source, events are validated before any reward action
            is considered.
          </p>
        </div>

        {/* Journey Card */}
        <div
          className="
            mx-auto
            mt-14
            w-full
            max-w-[900px]
            rounded-2xl
            border
            border-white/10
            bg-slate-900
            p-5
            lg:p-6
          "
        >
          {/* Card Title */}
          <p
            className="
              text-xs
              font-normal
              uppercase
              tracking-[1.8px]
              text-slate-500
            "
          >
            Illustrative Event Journey
          </p>

          {/* Journey Flow */}
          <div className="mt-7 flex flex-col items-center gap-4 lg:flex-row lg:items-center lg:justify-between lg:gap-0">

            {/* Source Event */}
            <div
              className="
                flex
                h-11
                w-32
                items-center
                justify-center
                rounded-[10px]
                border
                border-teal-500/30
                bg-teal-500/10
              "
            >
              <span className="text-center text-xs font-normal leading-5 text-slate-100">
                Source event
              </span>
            </div>

            {/* Arrow */}
            <span className="hidden text-lg text-slate-500 lg:block">
              →
            </span>

            {/* Signature */}
            <div
              className="
                flex
                h-11
                w-56
                items-center
                justify-center
                rounded-[10px]
                border
                border-white/10
                bg-gray-800
                px-4
              "
            >
              <span className="text-center text-xs font-normal leading-5 text-gray-400">
                Signature &amp; consent validated
              </span>
            </div>

            <span className="hidden text-lg text-slate-500 lg:block">
              →
            </span>

            {/* Canonical Mapping */}
            <div
              className="
                flex
                h-11
                w-40
                items-center
                justify-center
                rounded-[10px]
                border
                border-white/10
                bg-gray-800
                px-4
              "
            >
              <span className="text-center text-xs font-normal leading-5 text-gray-400">
                Canonical mapping
              </span>
            </div>

            <span className="hidden text-lg text-slate-500 lg:block">
              →
            </span>

            {/* Idempotency */}
            <div
              className="
                flex
                h-11
                w-40
                items-center
                justify-center
                rounded-[10px]
                border
                border-white/10
                bg-gray-800
                px-4
              "
            >
              <span className="text-center text-xs font-normal leading-5 text-gray-400">
                Idempotency check
              </span>
            </div>

            <span className="hidden text-lg text-slate-500 lg:block">
              →
            </span>

            {/* Reward */}
            <div
              className="
                flex
                h-11
                w-44
                items-center
                justify-center
                rounded-[10px]
                border
                border-white/10
                bg-gray-800
                px-4
              "
            >
              <span className="text-center text-xs font-normal leading-5 text-gray-400">
                Reward-eligible event
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}