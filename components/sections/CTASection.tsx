'use client'
import Link from 'next/link'
import { ArrowRight, CalendarDays, Sparkles } from 'lucide-react'
import { motion } from 'framer-motion'

export default function CTASection() {
  return (
    <section className="section-pad relative overflow-hidden bg-[#070c1b]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-[#0c1836] via-[#10224d] to-[#0a142c] p-10 sm:p-16 border border-blue-500/30 shadow-[0_0_80px_rgba(37,99,235,0.25)]"
        >
          {/* Background glow orbs */}
          <div className="glow-orb w-80 h-80 bg-blue-500/20 -top-20 -left-20" />
          <div className="glow-orb w-72 h-72 bg-indigo-500/20 -bottom-14 -right-14" />
          <div className="glow-orb w-48 h-48 bg-cyan-400/20 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />

          <div className="relative z-10">
            <div className="badge-glow mx-auto mb-6 w-fit">
              <Sparkles size={12} className="text-cyan-300" /> Free Setup & Data Migration Included
            </div>
            <h2 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl text-white mb-5 leading-tight">
              Ready to Modernize Your Operations?<br />
              <span className="gradient-text">Experience OnePlatform360 Live.</span>
            </h2>
            <p className="text-slate-300 text-base sm:text-lg max-w-2xl mx-auto mb-8 leading-relaxed">
              Book a free 30-minute walkthrough with our enterprise architects. We&apos;ll configure a custom workflow demo suited to your scale.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link
                href="/demo"
                className="btn-primary text-base px-8 py-4 shadow-[0_0_30px_rgba(37,99,235,0.6)] hover:shadow-[0_0_45px_rgba(37,99,235,0.8)]"
              >
                <CalendarDays size={18} /> Book Live Demo
              </Link>
              <Link
                href="/contact"
                className="btn-secondary text-base px-8 py-4"
              >
                Talk to Sales <ArrowRight size={16} />
              </Link>
            </div>
            <p className="text-slate-400 text-xs mt-6">
              No credit card required · Free 1-on-1 consultation · Zero obligation
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
