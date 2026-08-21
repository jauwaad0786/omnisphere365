'use client'
import WhatWeDoSection from '../../components/sections/WhatWeDoSection'
import TrustStrip from '../../components/sections/TrustStrip'
import CTASection from '../../components/sections/CTASection'

export default function WhatWeDoPage() {
  return (
    <div className="pt-16 min-h-screen bg-[#091526]">
      <WhatWeDoSection />
      <TrustStrip />
      <CTASection />
    </div>
  )
}
