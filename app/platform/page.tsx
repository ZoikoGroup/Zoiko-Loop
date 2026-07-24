import Audience from '@/components/platform/Audience'
import Cta from '@/components/platform/Cta'
import Faq from '@/components/platform/Faq'
import Journey from '@/components/platform/Journey'
import Modules from '@/components/platform/Modules'
import PlatformHero from '@/components/platform/PlatformHero'
import React from 'react'

export default function page() {
  return (
    <main>
        <PlatformHero />
        <Modules />
        <Journey />
        <Audience />
        <Faq />
        <Cta />
    </main>
  )
}
