import React from "react";

export default function DemoFAQ() {
  const questions = [
    "What will I see in a Zoiko Loop demo?",
    "Who is the demo for?",
    "Do I need ZoikoNex to use Zoiko Loop?",
    "Is Zoiko Loop a billing or payment platform?",
    "How long is the demo?",
    "Will I receive pricing in the demo?",
    "Can technical and security stakeholders join?",
    "What information should I prepare?",
  ];

  return (
    <section className="w-full bg-slate-950 py-16">

      <div className="text-center px-4">

        <div className="text-slate-500 text-xs font-bold uppercase tracking-widest leading-5">
          Frequently asked
        </div>

        <h2 className="mt-6 text-slate-100 text-3xl md:text-4xl font-bold leading-tight">
          Questions before you book
        </h2>

      </div>


      <div
        className="
          mt-14
          mx-auto
          px-4
          w-full
          max-w-[820px]
          space-y-4
        "
      >

        {questions.map((question) => (
          <div
            key={question}
            className="
              w-full
              h-16
              bg-gray-800
              rounded-xl
              outline
              outline-1
              outline-offset-[-1px]
              outline-white/10
              flex
              items-center
              justify-between
              px-5
            "
          >

            <h3
              className="
                text-slate-100
                text-sm
                md:text-base
                font-bold
                leading-6
              "
            >
              {question}
            </h3>


            <span
              className="
                text-teal-500
                text-xl
                font-bold
                leading-8
              "
            >
              +
            </span>


          </div>
        ))}

      </div>

    </section>
  );
}