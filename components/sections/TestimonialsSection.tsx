'use client'
import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { TESTIMONIALS } from '../../lib/data'
import { Quote, Star, Sparkles } from 'lucide-react'

export default function TestimonialsSection() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section className="section-pad bg-[#091526] relative overflow-hidden" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <div className="badge mb-4">
            <Sparkles size={12} className="text-cyan-300" /> Proven Multi-Tenant Outcomes
          </div>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-white">
            Trusted by <span className="gradient-text">500+ Enterprises &amp; Institutions</span>
          </h2>
          <p className="text-slate-300 mt-4 text-sm sm:text-base">
            See how schools, universities, hospitals, gyms, and modern enterprises run seamlessly on OnePlatform360.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
          {TESTIMONIALS.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="rounded-2xl p-6 relative overflow-hidden flex flex-col justify-between bg-white text-slate-900 border border-slate-200 shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 group"
            >
              {/* Decorative quote icon */}
              <div className="absolute top-4 right-4 opacity-10 group-hover:opacity-20 transition-opacity">
                <Quote size={40} className="text-blue-600" />
              </div>

              <div>
                {/* Stars */}
                <div className="flex gap-1 mb-3">
                  {Array.from({ length: t.rating }).map((_, idx) => (
                    <Star key={idx} size={15} className="fill-amber-400 text-amber-400" />
                  ))}
                </div>

                <p className="text-slate-700 text-xs sm:text-sm leading-relaxed mb-5 relative font-medium">
                  &ldquo;{t.text}&rdquo;
                </p>
              </div>

              <div className="flex items-center gap-3 pt-3.5 border-t border-slate-200">
                <div className="w-9 h-9 rounded-full bg-gradient-to-br from-blue-600 via-indigo-600 to-cyan-500 flex items-center justify-center text-white text-xs font-bold shrink-0 shadow-md">
                  {t.avatar}
                </div>
                <div>
                  <div className="text-slate-900 text-xs sm:text-sm font-bold">{t.name}</div>
                  <div className="text-slate-500 text-[11px] font-medium leading-tight">{t.role}, {t.org}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Client Logos Strip */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-16 border-t border-cyan-500/20 pt-10"
        >
          <p className="text-center text-xs text-slate-300 uppercase tracking-widest mb-6 font-semibold">
            Recognized &amp; trusted by cross-industry leaders across India
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {['Apex Healthcare & Clinics', 'FitPulse 360 Gym Network', 'Delhi Public Academy', 'Nexus Retail & Logistics', 'St. Xavier University Group', 'TechMatrix Enterprise'].map((org) => (
              <span
                key={org}
                className="px-4 py-2 rounded-xl bg-white text-slate-800 text-xs font-bold border border-slate-200 shadow-sm hover:shadow-md transition-all"
              >
                {org}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
