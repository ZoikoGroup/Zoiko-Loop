"use client";

import React, { useState } from "react";

const questions = [
  {
    id: 1,
    title: "1. What currently produces the event?",
    options: [
      "ZoikoNex",
      "Another BSS/billing platform",
      "Top-up network",
      "Payment gateway",
      "Bank / open-banking provider",
      "Not sure",
    ],
  },
  {
    id: 2,
    title: "2. How quickly must events arrive?",
    options: [
      "Near real time",
      "Within minutes",
      "Scheduled batch",
      "Not sure",
    ],
  },
  {
    id: 3,
    title: "3. What integration capability is available?",
    options: [
      "Outbound webhook/API",
      "Secure file transfer",
      "Network partner API",
      "Native ZoikoNex stream",
      "Discovery needed",
    ],
  },
  {
    id: 4,
    title: "4. What environment do you need?",
    options: [
      "Sandbox",
      "Pilot",
      "Production",
      "Multi-region enterprise",
    ],
  },
  {
    id: 5,
    title: "5. What is your priority?",
    options: [
      "Fastest launch",
      "Lowest change to legacy stack",
      "Real-time experience",
      "Strongest central governance",
      "Multi-region standardization",
    ],
  },
];

export default function IntegrationFitCheck() {
  const [answers, setAnswers] = useState<Record<number, string>>({});

  const handleSelect = (questionId: number, option: string) => {
    setAnswers((prev) => ({
      ...prev,
      [questionId]: option,
    }));
  };

  return (
    <section className="bg-slate-900 py-20">
      <div className="mx-auto max-w-6xl px-6">
        {/* Heading */}
        <div className="text-center">
          <p className="text-xs font-normal uppercase tracking-[0.3em] text-slate-500">
            TWO-MINUTE FIT CHECK
          </p>

          <h2 className="mt-4 text-4xl font-normal text-white">
            Find your integration path
          </h2>

          <p className="mx-auto mt-5 max-w-3xl text-gray-400">
            Answer five quick questions. This is a recommendation, not a
            binding implementation estimate.
          </p>
        </div>

        {/* Card */}
        <div className="mx-auto mt-14 max-w-3xl rounded-2xl border border-white/10 bg-slate-900 p-8 shadow-2xl">
          {/* ---------------- Question 1 ---------------- */}
          <div>
            <h3 className="text-lg font-normal text-white">
              {questions[0].title}
            </h3>

            <div className="mt-6 space-y-4">
              {questions[0].options.map((option) => (
                <label
                  key={option}
                  className="flex cursor-pointer items-center rounded-lg border border-white/20 bg-gray-900 px-5 py-4 transition hover:border-teal-500/40"
                >
                  <input
                    type="radio"
                    name="question1"
                    checked={answers[1] === option}
                    onChange={() => handleSelect(1, option)}
                    className="mr-4 accent-teal-500"
                  />

                  <span className="text-sm font-normal text-white">
                    {option}
                  </span>
                </label>
              ))}
            </div>
          </div>

          {/* ---------------- Question 2 ---------------- */}
          <div className="mt-12">
            <h3 className="text-lg font-normal text-white">
              {questions[1].title}
            </h3>

            <div className="mt-6 space-y-4">
              {questions[1].options.map((option) => (
                <label
                  key={option}
                  className="flex cursor-pointer items-center rounded-lg border border-white/20 bg-gray-900 px-5 py-4 transition hover:border-teal-500/40"
                >
                  <input
                    type="radio"
                    name="question2"
                    checked={answers[2] === option}
                    onChange={() => handleSelect(2, option)}
                    className="mr-4 accent-teal-500"
                  />

                  <span className="text-sm font-normal text-white">
                    {option}
                  </span>
                </label>
              ))}
            </div>
          </div>

          {/* ---------------- Question 3 ---------------- */}
          <div className="mt-12">
            <h3 className="text-lg font-normal text-white">
              {questions[2].title}
            </h3>

            <div className="mt-6 space-y-4">
              {questions[2].options.map((option) => (
                <label
                  key={option}
                  className="flex cursor-pointer items-center rounded-lg border border-white/20 bg-gray-900 px-5 py-4 transition hover:border-teal-500/40"
                >
                  <input
                    type="radio"
                    name="question3"
                    checked={answers[3] === option}
                    onChange={() => handleSelect(3, option)}
                    className="mr-4 accent-teal-500"
                  />

                  <span className="text-sm font-normal text-white">
                    {option}
                  </span>
                </label>
              ))}
            </div>
          </div>

          {/* ---------------- Question 4 ---------------- */}
          <div className="mt-12">
            <h3 className="text-lg font-normal text-white">
              {questions[3].title}
            </h3>

            <div className="mt-6 space-y-4">
              {questions[3].options.map((option) => (
                <label
                  key={option}
                  className="flex cursor-pointer items-center rounded-lg border border-white/20 bg-gray-900 px-5 py-4 transition hover:border-teal-500/40"
                >
                  <input
                    type="radio"
                    name="question4"
                    checked={answers[4] === option}
                    onChange={() => handleSelect(4, option)}
                    className="mr-4 accent-teal-500"
                  />

                  <span className="text-sm font-normal text-white">
                    {option}
                  </span>
                </label>
              ))}
            </div>
          </div>

          {/* ---------------- Question 5 ---------------- */}
          <div className="mt-12">
            <h3 className="text-lg font-normal text-white">
              {questions[4].title}
            </h3>

            <div className="mt-6 space-y-4">
              {questions[4].options.map((option) => (
                <label
                  key={option}
                  className="flex cursor-pointer items-center rounded-lg border border-white/20 bg-gray-900 px-5 py-4 transition hover:border-teal-500/40"
                >
                  <input
                    type="radio"
                    name="question5"
                    checked={answers[5] === option}
                    onChange={() => handleSelect(5, option)}
                    className="mr-4 accent-teal-500"
                  />

                  <span className="text-sm font-normal text-white">
                    {option}
                  </span>
                </label>
              ))}
            </div>
          </div>

          {/* Button */}
          <button
            className="mt-12 w-full rounded-lg bg-amber-400 px-6 py-4 text-sm font-normal text-yellow-950 transition hover:bg-amber-300"
            onClick={() => console.log(answers)}
          >
            Build my integration plan
          </button>
        </div>
      </div>
    </section>
  );
}