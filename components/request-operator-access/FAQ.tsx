"use client";

import React, { useState } from "react";

export default function FAQ() {
  const questions = [
    "What is Zoiko Loop operator access?",
    "Who can request access?",
    "Does submitting a request guarantee approval?",
    "What is the difference between preview, sandbox, pilot, and production?",
    "Can I use live subscriber data in the sandbox?",
    "How is my role selected?",
    "I already have access. Should I submit this form?",
    "Can a consultant request access?",
    "What happens after I submit?",
    "What if access is not the right next step?",
  ];

  const [open, setOpen] = useState<number | null>(null);

  return (
    <section className="bg-slate-900 px-4 py-16">

      {/* Header */}
      <div className="mx-auto max-w-4xl text-center">

        <p className="text-xs font-bold uppercase tracking-widest text-slate-500">
          Frequently asked
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
          Access questions
        </h2>

      </div>



      {/* FAQ List */}
      <div
        className="
        mx-auto mt-10
        w-full
        max-w-[820px]
        space-y-4
        "
      >

        {questions.map((question, index) => (

          <div
            key={question}
            className="
            overflow-hidden
            rounded-xl
            border border-white/10
            bg-gray-800
            "
          >

            <button
              onClick={() =>
                setOpen(open === index ? null : index)
              }
              className="
              flex
              w-full
              items-center
              justify-between
              px-5
              py-5
              text-left
              "
            >

              <span
                className="
                text-sm
                font-bold
                leading-6
                text-slate-100
                sm:text-base
                "
              >
                {question}
              </span>


              <span
                className="
                ml-4
                text-xl
                font-bold
                leading-8
                text-teal-500
                "
              >
                {open === index ? "−" : "+"}
              </span>


            </button>


            {open === index && (
              <div
                className="
                border-t border-white/10
                px-5
                py-4
                text-sm
                leading-5
                text-gray-400
                "
              >
                More information about this access request will be reviewed
                based on eligibility, environment requirements, and security
                policies.
              </div>
            )}


          </div>

        ))}

      </div>

    </section>
  );
}