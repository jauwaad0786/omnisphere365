'use client'
import Link from 'next/link'
import { ArrowRight, CalendarDays } from 'lucide-react'

export default function CTASection() {
  return (
    <section className="section-pad">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-brand-700 via-brand-600 to-accent-600 p-12">
          {/* Glow orbs */}
          <div className="glow-orb w-64 h-64 bg-white/10 -top-16 -left-16" />
          <div className="glow-orb w-48 h-48 bg-violet-400/20 -bottom-10 -right-10" />

          <div className="relative">
            <div className="badge-dark mx-auto mb-6 w-fit">Limited Time — Free Onboarding</div>
            <h2 className="font-display font-bold text-3xl sm:text-4xl text-white mb-4">
              Ready to Go Digital?<br />
              <span className="text-accent-200">Start Your Free Demo Today.</span>
            </h2>
            <p className="text-brand-100 text-base max-w-xl mx-auto mb-8">
              Book a 30-minute live demo with our ERP consultant. We&apos;ll walk you through the system and set it up for your institution — completely free.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link href="/demo" className="bg-white text-brand-700 hover:bg-brand-50 font-semibold px-7 py-3 rounded-lg inline-flex items-center gap-2 transition-all shadow-card-hover">
                <CalendarDays size={16} /> Book Free Demo
              </Link>
              <Link href="/contact" className="btn-secondary-dark text-base px-7 py-3">
                Talk to Sales <ArrowRight size={15} />
              </Link>
            </div>
            <p className="text-brand-200/70 text-xs mt-5">No credit card required · Free setup · Cancel anytime</p>
          </div>
        </div>
      </div>
    </section>
  )
}
