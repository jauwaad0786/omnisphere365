'use client'
import Link from 'next/link'
import { ArrowRight, CalendarDays, Sparkles } from 'lucide-react'
import { motion } from 'framer-motion'

export default function CTASection() {
  return (
    <section className="section-pad relative overflow-hidden bg-[#091526]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative rounded-3xl overflow-hidden bg-white text-slate-900 p-10 sm:p-16 border border-slate-200 shadow-2xl"
        >
          <div className="relative z-10">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-blue-800 text-xs font-bold uppercase tracking-wider mb-6">
              <Sparkles size={13} className="text-blue-600" /> Free Setup &amp; Data Migration Included
            </div>
            <h2 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl text-slate-900 mb-5 leading-tight">
              Ready to Modernize Your Operations?<br />
              <span className="gradient-text">Experience OnePlatform360 Live.</span>
            </h2>
            <p className="text-slate-600 text-base sm:text-lg max-w-2xl mx-auto mb-8 leading-relaxed">
              Book a free 30-minute walkthrough with our enterprise architects. We&apos;ll configure a custom workflow demo suited to your scale.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link
                href="/demo"
                className="btn-primary text-sm sm:text-base px-8 py-4 shadow-lg shadow-blue-500/40"
              >
                <CalendarDays size={18} /> Book Live Demo
              </Link>
              <Link
                href="/contact"
                className="px-8 py-4 rounded-xl bg-slate-100 text-slate-900 font-bold text-sm sm:text-base hover:bg-slate-200 transition-colors"
              >
                Talk to Sales <ArrowRight size={16} className="inline ml-1" />
              </Link>
            </div>
            <p className="text-slate-500 text-xs mt-6 font-medium">
              No credit card required · Free 1-on-1 consultation · Zero obligation
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
