import Link from "next/link";
import React from "react";

export default function ZoikoNexNative() {
  return (
    <section className="bg-slate-900 px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl rounded-2xl border border-teal-500/30 bg-gradient-to-b from-teal-500/10 to-gray-800 p-6 sm:p-8 lg:p-10">
        {/* Badge */}
        <div className="inline-flex items-center rounded-full border border-teal-500/30 bg-teal-500/10 px-5 py-2">
          <span className="text-xs font-normal uppercase tracking-[2px] text-teal-500">
            ZOIKONEX NATIVE
          </span>
        </div>

        {/* Heading */}
        <h2 className="mt-8 max-w-3xl text-3xl font-normal leading-tight text-slate-100 sm:text-4xl">
          Zero-mapping native event stream for ZoikoNex operators.
        </h2>

        {/* Description */}
        <p className="mt-5 max-w-3xl text-base font-normal leading-7 text-gray-400">
          Tenants running ZoikoNex connect with native schema alignment,
          tenant-scoped governance, and no manual field mapping. This
          zero-mapping claim applies to the ZoikoNex native path only.
        </p>

        {/* CTA Button */}
        <div className="mt-8">
          <Link
            href="/contact-sales"
            className="inline-flex h-11 items-center justify-center rounded-lg border border-white/20 px-6 text-sm font-normal text-slate-100 transition-all duration-300 hover:border-teal-500 hover:bg-teal-500/10"
          >
            Discuss ZoikoNex Integration
          </Link>
        </div>
      </div>
    </section>
  );
}