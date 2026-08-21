'use client'
import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { TESTIMONIALS } from '../../lib/data'
import { Quote, Star, Sparkles } from 'lucide-react'

export default function TestimonialsSection() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section className="section-pad section-alt relative overflow-hidden" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <div className="badge mb-4">
            <Sparkles size={12} className="text-blue-400" /> Proven Outcomes
          </div>
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-white">
            Trusted by <span className="gradient-text">500+ Institutions</span>
          </h2>
          <p className="text-slate-400 mt-4 text-sm sm:text-base">
            See how schools, hospitals, and growing businesses run seamlessly on OnePlatform360.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {TESTIMONIALS.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="testimonial-card group hover:border-blue-500/40 hover:shadow-[0_10px_40px_rgba(37,99,235,0.2)] hover:-translate-y-2 relative overflow-hidden flex flex-col justify-between"
            >
              {/* Decorative quote icon */}
              <div className="absolute top-4 right-4 opacity-10 group-hover:opacity-20 transition-opacity">
                <Quote size={44} className="text-blue-400" />
              </div>

              <div>
                {/* Stars */}
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: t.rating }).map((_, idx) => (
                    <Star key={idx} size={15} className="fill-amber-400 text-amber-400" />
                  ))}
                </div>

                <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-6 relative">
                  &ldquo;{t.text}&rdquo;
                </p>
              </div>

              <div className="flex items-center gap-3 pt-4 border-t border-blue-500/15">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-600 via-indigo-600 to-cyan-500 flex items-center justify-center text-white text-xs font-bold shrink-0 shadow-lg shadow-blue-500/30">
                  {t.avatar}
                </div>
                <div>
                  <div className="text-white text-sm font-semibold">{t.name}</div>
                  <div className="text-slate-400 text-xs">{t.role}, {t.org}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Logos row */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-16 border-t border-blue-500/15 pt-10"
        >
          <p className="text-center text-xs text-slate-400 uppercase tracking-widest mb-6 font-medium">
            Recognized & trusted by leaders across India & UAE
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {['Delhi Public Academy', 'Modern School Noida', 'Apex Hospital Group', 'TechCorp India', 'St. Xavier Global', 'EduTech Solutions'].map((org) => (
              <div
                key={org}
                className="px-5 py-2.5 rounded-xl border border-blue-500/15 text-slate-300 text-xs font-medium bg-[#0c1527] hover:border-blue-500/40 hover:text-white transition-all duration-300 cursor-pointer shadow-sm"
              >
                {org}
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
