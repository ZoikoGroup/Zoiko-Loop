import React from "react";

const accessTypes = [
  [
    "Operator console preview",
    "Evaluation",
    "Explore the product with guided, read-only sample data.",
  ],
  [
    "Integration sandbox",
    "Technical",
    "Validate events, APIs, SFTP, signatures, and test workflows.",
  ],
  [
    "Launch pilot workspace",
    "Pilot approval",
    "Run a time-bound operator pilot with implementation support.",
  ],
  [
    "Production onboarding",
    "Contract required",
    "Request contracted production setup and tenant access.",
  ],
  [
    "Join an existing tenant",
    "Sponsor required",
    "Ask an operator administrator to sponsor your account.",
  ],
  [
    "Security / procurement review",
    "Read-only",
    "Access controlled evidence and review workflows.",
  ],
];

export default function Access() {
  return (
    <section className="relative w-full overflow-hidden bg-slate-950">
      
      {/* Background */}
      <div className="
        absolute inset-0
        bg-[radial-gradient(circle_at_85%_-10%,rgba(20,184,166,0.10),transparent_60%)]
      " />

      <div className="
        relative
        mx-auto
        w-full
        max-w-[1440px]
        px-6
        py-16
        lg:px-0
        lg:h-[911px]
      ">

        <div className="
          flex
          flex-col
          gap-10

          lg:block
        ">


          {/* LEFT CONTENT */}
          <div className="
            lg:absolute
            lg:left-[128px]
            lg:top-[64px]
          ">

            <div className="
              flex
              items-center
              justify-center
              w-44
              h-8
              rounded-[30px]
              bg-teal-500/10
              border
              border-teal-500/30
            ">
              <span className="
                text-teal-500
                text-xs
                font-bold
                uppercase
                tracking-widest
              ">
                OPERATOR ACCESS
              </span>
            </div>


            <h1 className="
              mt-5
              text-slate-100
              text-4xl
              sm:text-5xl
              font-bold
              leading-tight
              lg:w-[453px]
              lg:leading-[47.52px]
            ">
              Request secure
              <br className="hidden sm:block"/>
              access to Zoiko Loop.
            </h1>


            <p className="
              mt-5
              text-gray-400
              text-base
              leading-7
              max-w-[390px]
            ">
              Choose the environment you need. We will verify your
              organization, route your request to the right owner, and
              provision only the access required for your role.
            </p>


            <div className="
              mt-8
              w-full
              max-w-[470px]
              bg-gray-800
              rounded-[10px]
              border
              border-white/10
              p-4
            ">
              <p className="
                text-gray-400
                text-xs
                leading-5
              ">
                Access is reviewed and not guaranteed. Sandbox environments use
                synthetic data. Production access requires an approved operator
                relationship and tenant authorization.
              </p>
            </div>


            <p className="
              mt-4
              text-slate-500
              text-sm
              leading-5
            ">
              Least-privilege access. Verified organizations. Time-limited invitations.
              <br className="hidden sm:block"/>
              Audit-recorded decisions.
            </p>


            <div className="
              mt-8
              flex
              flex-col
              gap-4
              text-sm
            ">
              <div>
                <span className="text-gray-400">
                  Already approved?
                </span>
                <span className="
                  ml-2
                  text-teal-500
                  font-bold
                  underline
                ">
                  Sign in to your operator workspace.
                </span>
              </div>


              <div>
                <span className="text-gray-400">
                  Not sure which access you need?
                </span>
                <span className="
                  ml-2
                  text-teal-500
                  font-bold
                  underline
                ">
                  Book a demo.
                </span>
              </div>
            </div>

          </div>



          {/* RIGHT CARD */}
          <div className="
            w-full
            rounded-2xl
            bg-slate-900
            border
            border-white/10
            shadow-[0px_20px_50px_rgba(0,0,0,0.35)]
            p-6

            lg:absolute
            lg:left-[654px]
            lg:top-[64px]
            lg:w-[658px]
            lg:h-[767px]
            lg:p-[31px]
          ">


            <h2 className="
              text-slate-100
              text-xl
              font-bold
            ">
              Select an access type
            </h2>


            <p className="
              mt-2
              text-gray-400
              text-sm
            ">
              Choose the option that best matches what you need right now.
            </p>



            <div className="
              mt-8
              space-y-4
            ">

              {accessTypes.map(([title, tag, desc]) => (

                <div
                  key={title}
                  className="
                    w-full
                    min-h-20
                    bg-gray-900
                    rounded-[10px]
                    border
                    border-white/20
                    p-4
                    flex
                    gap-3
                  "
                >

                  <div className="
                    mt-1
                    size-3
                    rounded-full
                    bg-white
                    border
                    border-neutral-500
                    shrink-0
                  "/>


                  <div>

                    <div className="
                      flex
                      flex-wrap
                      items-center
                      gap-2
                    ">
                      <span className="
                        text-slate-100
                        text-sm
                        font-bold
                      ">
                        {title}
                      </span>

                      <span className="
                        px-3
                        py-1
                        rounded-full
                        bg-gray-800
                        border
                        border-white/20
                        text-slate-500
                        text-[10px]
                        font-bold
                        uppercase
                      ">
                        {tag}
                      </span>
                    </div>


                    <p className="
                      mt-2
                      text-gray-400
                      text-xs
                      leading-5
                    ">
                      {desc}
                    </p>

                  </div>

                </div>

              ))}


              <button className="
                w-full
                h-12
                rounded-[10px]
                bg-amber-500
                text-yellow-950
                text-sm
                sm:text-base
                font-bold
              ">
                Select an access type and continue
              </button>


            </div>


          </div>


        </div>

      </div>

    </section>
  );
}
