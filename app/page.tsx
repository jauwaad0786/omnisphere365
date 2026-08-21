'use client'

import HeroSection from '../components/sections/HeroSection'
import WhatWeDoSection from '../components/sections/WhatWeDoSection'
import ServicesGrid from '../components/sections/ServicesGrid'
import FeaturesSection from '../components/sections/FeaturesSection'
import PricingSection from '../components/sections/PricingSection'
import TestimonialsSection from '../components/sections/TestimonialsSection'
import CTASection from '../components/sections/CTASection'
import TrustStrip from '../components/sections/TrustStrip'

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <WhatWeDoSection />
      <ServicesGrid />
      <FeaturesSection />
      <PricingSection />
      <TestimonialsSection />
      <CTASection />
      <TrustStrip />
    </>
  )
}
