import {
  Access,
  AccessCards,
  AccessCTA,
  Eligibility,
  Environment,
  FAQ,
  IdentityForm,
  Routes,
} from "@/components/request-operator-access";

import React from "react";

export default function page() {
  return (
    <main>
      <Access />
      <AccessCards />
      <Eligibility />
      <Environment />
      <IdentityForm />
      <Routes />
      <FAQ />
      <AccessCTA />
    </main>
  );
}