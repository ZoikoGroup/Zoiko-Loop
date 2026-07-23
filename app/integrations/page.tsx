import {
  EventProof,
  ExtraSources,
  IntegrationComparison,
  IntegrationCta,
  IntegrationFaq,
  IntegrationFitCheck,
  IntegrationHero,
  LegacyBatch,
  OpsHealth,
  SecurityBoundary,
  TestingFlow,
  TrustBoundary,
  WebhookApiSection,
  ZoikoNexNative,
} from "@/components/integrations";
import React from 'react'

export default function page() {
  return (
    <main>
        <IntegrationHero />
        <IntegrationFitCheck />
        <IntegrationComparison />
        <TrustBoundary />
        <ZoikoNexNative />
        <WebhookApiSection />
        <LegacyBatch />
        <ExtraSources />
        <EventProof />
        <TestingFlow />
        <OpsHealth />
        <SecurityBoundary />
        <IntegrationFaq />
        <IntegrationCta />
    </main>
  )
}
