import React from "react";

const rows = [
  {
    env: "Preview",
    data: "Synthetic or anonymized demo data only",
    credential: "No reusable API secrets",
    duration: (
      <>
        7–14 days or guided
        <br />
        session
      </>
    ),
    approval: "Product owner",
  },
  {
    env: "Sandbox",
    data: (
      <>
        Synthetic test data only; no production
        <br />
        subscriber data
      </>
    ),
    credential: (
      <>
        Scoped test keys; rotation and revocation
        <br />
        supported
      </>
    ),
    duration: "30–90 days, renewable",
    approval: "Integration owner",
  },
  {
    env: "Pilot",
    data: (
      <>
        Approved pilot data scope with documented
        <br />
        purpose
      </>
    ),
    credential: (
      <>
        Tenant-scoped secrets; least privilege; audit
        <br />
        enabled
      </>
    ),
    duration: "Pilot term",
    approval: "Commercial + security + tenant owner",
  },
  {
    env: "Production",
    data: "Contracted and approved data processing only",
    credential: (
      <>
        SSO/MFA, scoped roles, key management,
        <br />
        recertification
      </>
    ),
    duration: (
      <>
        Contract and relationship
        <br />
        term
      </>
    ),
    approval: (
      <>
        Security + customer success + tenant
        <br />
        owner
      </>
    ),
  },
  {
    env: (
      <>
        Evidence
        <br />
        room
      </>
    ),
    data: (
      <>
        Security and procurement documents; no
        <br />
        subscriber events
      </>
    ),
    credential: (
      <>
        Named-user, time-limited access; download
        <br />
        controls
      </>
    ),
    duration: "Review window",
    approval: "Security/commercial owner",
  },
];

export default function Environment() {
  return (
    <section className="w-full bg-slate-950 py-16">
      <div className="max-w-[1240px] mx-auto px-6">

        {/* Header */}
        <div className="text-center">
          <p className="text-slate-500 text-xs font-bold uppercase tracking-widest font-['Segoe_UI']">
            What access includes
          </p>

          <h2 className="mt-6 text-slate-100 text-4xl font-bold font-['Segoe_UI'] leading-[52px]">
            Environment comparison
          </h2>
        </div>


        {/* Table */}
        <div className="mt-12 overflow-x-auto rounded-xl outline outline-1 outline-white/10">
          <table className="w-full min-w-[1180px] bg-gray-800 rounded-xl overflow-hidden">
            <thead>
              <tr className="border-b border-white/20">
                {[
                  "Environment",
                  "Data policy",
                  "Credential policy",
                  "Default duration",
                  "Approval level",
                ].map((item) => (
                  <th
                    key={item}
                    className="
                      h-10
                      px-4
                      text-left
                      text-slate-500
                      text-xs
                      font-bold
                      uppercase
                      tracking-wide
                      font-['Segoe_UI']
                    "
                  >
                    {item}
                  </th>
                ))}
              </tr>
            </thead>

            <tbody>
              {rows.map((row) => (
                <tr
                  key={typeof row.env === "string" ? row.env : "Evidence"}
                  className="border-b border-white/10"
                >
                  <td className="px-4 py-5 text-slate-100 text-sm font-bold font-['Segoe_UI'] align-top">
                    {row.env}
                  </td>

                  <td className="px-4 py-5 text-gray-400 text-sm font-normal font-['Segoe_UI'] align-top">
                    {row.data}
                  </td>

                  <td className="px-4 py-5 text-gray-400 text-sm font-normal font-['Segoe_UI'] align-top">
                    {row.credential}
                  </td>

                  <td className="px-4 py-5 text-gray-400 text-sm font-normal font-['Segoe_UI'] align-top">
                    {row.duration}
                  </td>

                  <td className="px-4 py-5 text-gray-400 text-sm font-normal font-['Segoe_UI'] align-top">
                    {row.approval}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

      </div>
    </section>
  );
}