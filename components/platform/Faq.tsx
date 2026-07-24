import React from "react";

export default function Faq() {
  const questions = [
    "What is Zoiko Loop?",
    "Does Zoiko Loop replace our billing system?",
    "What operators is this built for?",
    "How does data get into Zoiko Loop?",
    "Is Zoiko Loop a lender or credit bureau?",
  ];

  return (
    <section className="bg-slate-950 px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-4xl">
        {/* Heading */}
        <div className="text-center">
          <p className="text-xs font-bold uppercase tracking-[0.25em] text-slate-500">
            Frequently Asked
          </p>

          <h2 className="mt-4 text-3xl font-bold leading-tight text-slate-100 sm:text-4xl">
            Questions before you continue
          </h2>
        </div>

        {/* Questions */}
        <div className="mt-12 space-y-5">
          {questions.map((question, index) => (
            <div
              key={index}
              className="flex items-center justify-between rounded-xl border border-white/10 bg-gray-800 px-6 py-5"
            >
              <span className="text-base font-semibold text-slate-100">
                {question}
              </span>

              <span className="text-2xl font-bold text-teal-400">+</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
