import React from "react";

export default function NextSteps() {
  const steps = [
    {
      step: "STEP 1",
      title: "We review your context",
      text: "We use your operator profile, objective, integration path, and timeline to prepare the session.",
    },
    {
      step: "STEP 2",
      title: "You choose a time",
      text: "Select a 30-minute slot in your timezone, or ask us to arrange one.",
    },
    {
      step: "STEP 3",
      title: "We tailor the walkthrough",
      text: "Your demo focuses on the flows and controls most relevant to your team.",
    },
    {
      step: "STEP 4",
      title: "You leave with next steps",
      text: "We close with a practical pilot, integration, security-review, or commercial path.",
    },
  ];

  return (
    <section className="w-full bg-slate-950 py-16">

      <div className="text-center px-4">

        <div className="text-slate-500 text-xs font-bold uppercase tracking-widest leading-5">
          Transparent, not vague
        </div>

        <h2 className="mt-6 text-slate-100 text-3xl md:text-4xl font-bold leading-tight">
          What happens next
        </h2>

      </div>


      <div className="
        mt-14 
        px-4 md:px-10 lg:px-[100px]
        grid 
        grid-cols-1 
        sm:grid-cols-2 
        lg:grid-cols-4 
        gap-4
      ">

        {steps.map((item) => (
          <div
            key={item.step}
            className="
              w-full
              h-40
              bg-gray-800
              rounded-xl
              outline outline-1 outline-offset-[-1px]
              outline-white/10
              p-5
            "
          >

            <div className="
              text-teal-500
              text-xs
              font-bold
              tracking-wide
              leading-5
            ">
              {item.step}
            </div>


            <h3 className="
              mt-4
              text-slate-100
              text-sm
              md:text-base
              font-bold
              leading-6
            ">
              {item.title}
            </h3>


            <p className="
              mt-2
              text-gray-400
              text-xs
              leading-5
            ">
              {item.text}
            </p>

          </div>
        ))}

      </div>

    </section>
  );
}