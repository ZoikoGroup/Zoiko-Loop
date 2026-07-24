import React from "react";

export default function Paths() {
  const cards = [
    {
      title: "Talk to an integration specialist",
      text: "Open a short technical conversation about your stack, integration route, and architecture questions — no commercial demo required.",
      button: "Talk to a specialist",
    },
    {
      title: "Request operator access",
      text: "Route to a separate sandbox / operator-access qualification flow for hands-on evaluation.",
      button: "Request access",
    },
    {
      title: "Apply for the pilot program",
      text: "Share your use case, timeline, sponsor, and measurement goal for a scoped pilot application.",
      button: "Apply for pilot",
    },
    {
      title: "Request pricing",
      text: "Pricing depends on volume, integration pathway, and region. Start a pricing discovery conversation.",
      button: "Request pricing",
    },
    {
      title: "Contact enterprise sales",
      text: "For multi-market, multi-tenant, security review, and deployment-region requirements.",
      button: "Contact enterprise sales",
    },
  ];

  return (
    <section className="relative w-full bg-slate-900 py-16 md:py-[72px]">

      <div className="text-center px-4">
        <div className="text-slate-500 text-xs font-bold uppercase tracking-widest leading-5">
          Not ready for a full demo?
        </div>

        <h2 className="mt-6 text-slate-100 text-3xl md:text-4xl font-bold leading-tight md:leading-[52.7px]">
          One platform. Every telecom retention
          <br className="hidden md:block" />
          context.
        </h2>

        <p className="mt-4 text-gray-400 text-sm md:text-base leading-6 max-w-xl mx-auto">
          High-intent paths for technical, evaluation, pilot, pricing, and
          procurement conversations.
        </p>
      </div>


      <div className="mt-14 px-4 md:px-[128px] grid grid-cols-1 md:grid-cols-3 gap-4">

        {cards.slice(0,3).map((card)=>(
          <Card key={card.title} {...card}/>
        ))}

      </div>


      <div className="mt-4 px-4 md:px-[128px] grid grid-cols-1 md:grid-cols-2 gap-4">

        {cards.slice(3).map((card)=>(
          <Card key={card.title} {...card} small/>
        ))}

      </div>

    </section>
  );
}


function Card({
  title,
  text,
  button,
  small,
}:{
  title:string;
  text:string;
  button:string;
  small?:boolean;
}){

return(

<div
className={`
relative w-full
${small ? "h-44":"h-48"}
bg-gray-800 rounded-xl
outline outline-1 outline-offset-[-1px] outline-white/10
p-6
`}
>

<h3 className="text-slate-100 text-base font-bold leading-6">
{title}
</h3>


<p className="mt-4 text-gray-400 text-sm leading-5">
{text}
</p>


<div
className="
absolute left-6 right-6 bottom-5
h-9 rounded-lg
outline outline-1 outline-offset-[-1px]
outline-white/20
flex items-center justify-center
"
>
<span className="text-slate-100 text-xs font-bold">
{button}
</span>
</div>


</div>

)

}