import ApplicationSecurity from '@/components/security/ApplicationSecurity'
import ComplianceEvidenceMatrix from '@/components/security/ComplianceEvidenceMatrix'
import DataBoundary from '@/components/security/DataBoundary'
import IncidentResponse from '@/components/security/IncidentResponse'
import LedgerIntegrity from '@/components/security/LedgerIntegrity'
import PrivacyGovernance from '@/components/security/PrivacyGovernance'
import SecureArchitecture from '@/components/security/SecureArchitecture'
import SecurityControls from '@/components/security/SecurityControls'
import SecurityHero from '@/components/security/SecurityHero'
import SecurityModel from '@/components/security/SecurityModel'
import SecurityQuestions from '@/components/security/SecurityQuestions'
import SecurityReviewCTA from '@/components/security/SecurityReviewCTA'
import TrustStatusStrip from '@/components/security/TrustStatusStrip'
import React from 'react'

export default function page() {
  return (
    <main>
        <SecurityHero />
        <TrustStatusStrip />
        <SecurityModel />
        <DataBoundary />
        <SecurityControls />
        <PrivacyGovernance />
        <SecureArchitecture />
        <LedgerIntegrity />
        <ApplicationSecurity />
        <IncidentResponse />
        <ComplianceEvidenceMatrix />
        <SecurityQuestions />
        <SecurityReviewCTA />
    </main>
  )
}
