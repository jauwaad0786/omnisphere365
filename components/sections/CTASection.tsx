'use client'
import Link from 'next/link'
import { ArrowRight, CalendarDays, Sparkles } from 'lucide-react'
import { motion } from 'framer-motion'

export default function CTASection() {
  return (
    <section className="section-pad">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-brand-700 via-brand-600 to-accent-600 p-10 sm:p-14"
        >
          {/* Background glow orbs */}
          <div className="glow-orb w-72 h-72 bg-white/10 -top-20 -left-20" />
          <div className="glow-orb w-56 h-56 bg-violet-400/20 -bottom-14 -right-14" />
          <div className="glow-orb w-40 h-40 bg-accent-300/15 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />

          <div className="relative">
            <div className="badge-dark mx-auto mb-6 w-fit">
              <Sparkles size={11} /> Limited Time — Free Onboarding
            </div>
            <h2 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl text-white mb-5 leading-tight">
              Ready to Go Digital?<br />
              <span className="text-accent-200">Start Your Free Demo Today.</span>
            </h2>
            <p className="text-brand-100 text-base sm:text-lg max-w-xl mx-auto mb-8 leading-relaxed">
              Book a 30-minute live demo with our ERP consultant. We&apos;ll walk you through the system and set it up for your institution — completely free.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link href="/demo" className="bg-white text-brand-700 hover:bg-brand-50 font-semibold px-8 py-3.5 rounded-xl inline-flex items-center gap-2.5 transition-all duration-300 shadow-xl hover:shadow-2xl hover:-translate-y-1">
                <CalendarDays size={16} /> Book Free Demo
              </Link>
              <Link href="/contact" className="btn-secondary-dark text-base px-8 py-3.5 rounded-xl">
                Talk to Sales <ArrowRight size={15} />
              </Link>
            </div>
            <p className="text-brand-200/70 text-xs mt-6">No credit card required · Free setup · Cancel anytime</p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
