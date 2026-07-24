"use client";

import React from "react";

export default function IdentityForm() {
  return (
    <section className="min-h-screen bg-slate-900 px-4 py-16">
      <div
        className="
        mx-auto w-full max-w-[704px]
        rounded-2xl border border-white/10
        bg-slate-900
        p-6 sm:p-8
        shadow-[0px_20px_50px_rgba(0,0,0,0.35)]
      "
      >
        {/* Progress */}
        <div className="mb-8 flex items-center gap-4">
          <div className="h-1.5 flex-1 overflow-hidden rounded-md bg-gray-800">
            <div className="h-full w-1/4 rounded-md bg-teal-500" />
          </div>

          <span className="whitespace-nowrap text-xs text-slate-500">
            Step 1 of 4
          </span>
        </div>


        {/* Title */}
        <div className="mb-8">
          <h2 className="text-xl font-bold leading-9 text-slate-100">
            Your work identity
          </h2>

          <p className="mt-2 text-sm leading-5 text-gray-400">
            Use your professional details so we can verify the request and
            route it to the correct operator or Zoiko owner.
          </p>
        </div>


        <div className="space-y-6">


          {/* Work Email */}
          <div>
            <label className="text-sm font-bold text-slate-100">
              Work email <span className="text-amber-500">*</span>
            </label>

            <input
              type="email"
              className="
              mt-2 h-12 w-full rounded-lg
              border border-white/20
              bg-gray-900
              px-4 text-slate-100
              outline-none
              "
            />

            <p className="mt-2 text-xs leading-5 text-slate-500">
              We use this to verify your request and send service
              communications.
            </p>
          </div>



          {/* First Last Name */}
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">

            <div>
              <label className="text-sm font-bold text-slate-100">
                First name <span className="text-amber-500">*</span>
              </label>

              <input
                className="
                mt-2 h-12 w-full rounded-lg
                border border-white/20
                bg-gray-900 px-4
                text-slate-100
                "
              />
            </div>


            <div>
              <label className="text-sm font-bold text-slate-100">
                Last name <span className="text-amber-500">*</span>
              </label>

              <input
                className="
                mt-2 h-12 w-full rounded-lg
                border border-white/20
                bg-gray-900 px-4
                text-slate-100
                "
              />
            </div>

          </div>




          {/* Job Title */}
          <div>
            <label className="text-sm font-bold text-slate-100">
              Job title <span className="text-amber-500">*</span>
            </label>

            <input
              className="
              mt-2 h-12 w-full rounded-lg
              border border-white/20
              bg-gray-900 px-4
              text-slate-100
              "
            />
          </div>




          {/* Select Inputs */}
          <div>
            <label className="text-sm font-bold text-slate-100">
              Primary discipline <span className="text-amber-500">*</span>
            </label>

            <div
              className="
              mt-2 flex h-12 items-center
              rounded-lg border border-white/20
              bg-gray-900 px-4
              text-gray-400
              "
            >
              Select
            </div>
          </div>



          <div>
            <label className="text-sm font-bold text-slate-100">
              Country / region <span className="text-amber-500">*</span>
            </label>

            <div
              className="
              mt-2 flex h-12 items-center
              rounded-lg border border-white/20
              bg-gray-900 px-4
              text-gray-400
              "
            >
              Select
            </div>
          </div>




          {/* Phone */}
          <div>
            <label className="text-sm font-bold text-slate-100">
              Phone (optional)
            </label>

            <input
              placeholder="Used only if email delivery fails or you request a call."
              className="
              mt-2 h-12 w-full rounded-lg
              border border-white/20
              bg-gray-900
              px-4 text-sm
              text-slate-500
              placeholder:text-slate-500
              "
            />
          </div>





          {/* Button */}
          <button
            className="
            h-12 w-full rounded-[10px]
            bg-amber-500
            text-sm font-bold
            text-yellow-950
            transition
            hover:bg-amber-400
            "
          >
            Verify work email
          </button>




          {/* Footer */}
          <p
            className="
            text-center
            text-xs
            leading-5
            text-slate-500
            "
          >
            We use these details to process your access request and provide
            related service communications. Marketing preference is optional
            and separate.
          </p>


        </div>
      </div>
    </section>
  );
}