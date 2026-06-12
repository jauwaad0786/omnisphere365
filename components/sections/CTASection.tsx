import Link from 'next/link'
import { ArrowRight, CalendarDays } from 'lucide-react'

export default function CTASection() {
  return (
    <section className="section-pad">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="relative rounded-3xl overflow-hidden border border-indigo-500/30 bg-gradient-to-br from-indigo-600/20 via-[#151528] to-sky-600/20 p-12">
          {/* Glow orbs */}
          <div className="glow-orb w-64 h-64 bg-indigo-600/30 -top-16 -left-16" />
          <div className="glow-orb w-48 h-48 bg-sky-600/20 -bottom-10 -right-10" />

          <div className="relative">
            <div className="badge mx-auto mb-6 w-fit">Limited Time — Free Onboarding</div>
            <h2 className="font-display font-bold text-3xl sm:text-4xl text-white mb-4">
              Ready to Go Digital?<br />
              <span className="gradient-text">Start Your Free Demo Today.</span>
            </h2>
            <p className="text-slate-400 text-base max-w-xl mx-auto mb-8">
              Book a 30-minute live demo with our ERP consultant. We&apos;ll walk you through the system and set it up for your institution — completely free.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link href="/demo" className="btn-primary text-base px-7 py-3">
                <CalendarDays size={16} /> Book Free Demo
              </Link>
              <Link href="/contact" className="btn-secondary text-base px-7 py-3">
                Talk to Sales <ArrowRight size={15} />
              </Link>
            </div>
            <p className="text-slate-600 text-xs mt-5">No credit card required · Free setup · Cancel anytime</p>
          </div>
        </div>
      </div>
    </section>
  )
}
