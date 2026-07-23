import React from "react";

export default function ComplianceEvidenceMatrix() {
  const rows = [
    {
      title: "Security overview",
      public: "Public downloadable HTML/PDF summary.",
      restricted: "Not required.",
    },
    {
      title: "Architecture overview",
      public: "High-level public diagram.",
      restricted: "Detailed diagram after verification and NDA as appropriate.",
    },
    {
      title: "Privacy / DPA information",
      public: "Public summary and legal-resource links.",
      restricted: "Executed documents and regional schedules through legal workflow.",
    },
    {
      title: "Subprocessor information",
      public: "Public list or request route when approved.",
      restricted: "Customer-specific notification records.",
    },
    {
      title: "Penetration-test evidence",
      public: "State availability without publishing report.",
      restricted: "Executive summary/report under approved conditions.",
    },
    {
      title: "SOC 2 Type II",
      public: "Roadmap text only until completed.",
      restricted: "No report until completed and approved.",
      roadmap: true,
    },
    {
      title: "ISO 27001",
      public: "Roadmap text only until completed.",
      restricted: "No certificate until completed and approved.",
      roadmap: true,
    },
    {
      title: "PCI DSS scope",
      public: "Architecture-minimization statement with qualification.",
      restricted: "Implementation-specific scope analysis when required.",
    },
    {
      title: "Business continuity / DR",
      public: "High-level resilience statement.",
      restricted: "Plan summaries, tests, and objectives through review.",
    },
  ];

  return (
    <section className="bg-slate-900 px-6 py-20">
      <div className="mx-auto max-w-[1240px]">

        {/* Heading */}
        <div className="text-center">
          <p className="text-xs font-bold uppercase tracking-widest text-slate-500">
            What's public, what's restricted
          </p>

          <h2 className="mt-7 text-3xl md:text-4xl font-bold text-slate-100 leading-tight">
            Compliance, assurance, and evidence
            <br />
            matrix
          </h2>
        </div>


        {/* Table */}
        <div className="mt-12 overflow-hidden rounded-xl border border-white/10 bg-gray-800">

          {/* Header */}
          <div className="
            hidden md:grid 
            grid-cols-[240px_1fr_1fr]
            border-b border-white/20
            px-5 py-4
            text-xs font-bold uppercase tracking-wide
            text-slate-500
          ">
            <div>Evidence / framework</div>
            <div>Public treatment</div>
            <div>Restricted treatment</div>
          </div>


          {/* Rows */}
          {rows.map((row, index) => (
            <div
              key={index}
              className="
              grid 
              grid-cols-1 
              md:grid-cols-[240px_1fr_1fr]
              gap-4
              border-b border-white/10
              px-5 py-5
              last:border-none
              "
            >

              <div className="text-sm font-bold text-slate-100">
                {row.title}
              </div>


              <div className="text-sm text-gray-400">
                {row.public}

                {row.roadmap && (
                  <span className="
                    ml-3 inline-flex
                    rounded-full
                    border border-white/20
                    px-3 py-1
                    text-[10px]
                    uppercase
                    tracking-wide
                    text-slate-500
                  ">
                    Roadmap
                  </span>
                )}
              </div>


              <div className="text-sm text-gray-400">
                {row.restricted}
              </div>

            </div>
          ))}

        </div>


        {/* Footer note */}
        <p className="
          mt-8
          text-center
          text-base
          leading-6
          text-slate-100
        ">
          Every downloadable or shared artifact displays owner, version,
          approval date, review date, classification, and expiry/revalidation
          trigger.
        </p>

      </div>
    </section>
  );
}