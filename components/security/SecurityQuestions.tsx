import React from "react";

export default function SecurityQuestions() {
  const questions = [
    "What customer data does Zoiko Loop process?",
    "Does Zoiko Loop store payment card data?",
    "How does Zoiko Loop prevent duplicate reward issuance?",
    "How are operator tenants isolated?",
    "How are reward balances protected and reconciled?",
    "How does Zoiko Loop support consent and privacy requirements?",
    "Is Zoiko Loop SOC 2 or ISO 27001 certified?",
    "How can my organization request security evidence?",
    "How are security incidents communicated?",
    "What security responsibilities remain with the operator?",
  ];

  return (
    <section className="bg-slate-900 px-6 py-20">
      <div className="mx-auto max-w-[820px]">

        {/* Heading */}
        <div className="mb-12 text-center">
          <p className="text-xs font-bold uppercase tracking-widest text-slate-500">
            Frequently asked
          </p>

          <h2 className="mt-6 text-3xl md:text-4xl font-bold text-slate-100">
            Security questions
          </h2>
        </div>


        {/* FAQ */}
        <div className="space-y-4">
          {questions.map((question, index) => (
            <div
              key={index}
              className="
                flex
                min-h-16
                items-center
                justify-between
                rounded-xl
                border
                border-white/10
                bg-gray-800
                px-5
                transition
                hover:border-white/20
              "
            >
              <p className="text-base font-bold text-slate-100">
                {question}
              </p>

              <span className="text-xl font-bold text-teal-500">
                +
              </span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}