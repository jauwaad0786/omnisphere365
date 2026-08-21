'use client'
import Link from 'next/link'
import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Check, Zap, ArrowRight, Sparkles } from 'lucide-react'
import { SERVICES } from '../../lib/data'

export default function PricingSection() {
  const plans = SERVICES.find(s => s.id === 'school-erp')?.plans ?? []
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section className="section-pad bg-[#070c1b] relative overflow-hidden" ref={ref}>
      {/* Glow */}
      <div className="glow-orb w-96 h-96 bg-blue-600/10 -top-20 right-0" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <div className="badge mb-4">
            <Sparkles size={12} className="text-blue-400" /> Transparent Pricing
          </div>
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-white">
            Simple, <span className="gradient-text">Predictable Pricing</span>
          </h2>
          <p className="text-slate-400 mt-4 max-w-xl mx-auto text-sm sm:text-base">
            Start with confidence, scale as your institution expands. No surprise charges.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 items-stretch">
          {plans.map((plan, i) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.12, ease: [0.16, 1, 0.3, 1] }}
              className={`relative rounded-2xl p-7 flex flex-col justify-between transition-all duration-300 ${
                plan.popular
                  ? 'bg-[#0d1730] border-2 border-blue-500/60 shadow-[0_0_40px_rgba(37,99,235,0.25)] scale-[1.03]'
                  : 'glass border border-blue-500/20 hover:border-blue-500/40'
              }`}
            >
              {plan.badge && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                  <span className="badge text-[11px] bg-blue-600 border-blue-400 text-white px-3 py-1 shadow-lg shadow-blue-500/50">
                    <Zap size={10} className="fill-current" /> {plan.badge}
                  </span>
                </div>
              )}

              <div>
                <h3 className="font-display font-bold text-white text-lg">{plan.name}</h3>
                <div className="mt-4 flex items-baseline gap-1.5 pb-5 border-b border-blue-500/15">
                  <span className="text-3xl sm:text-4xl font-bold font-display gradient-text">{plan.price}</span>
                  <span className="text-slate-400 text-sm">{plan.period}</span>
                </div>

                <ul className="space-y-3 mt-5">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
                      <Check size={16} className="text-emerald-400 shrink-0 mt-0.5" />
                      {f}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-8 pt-4 border-t border-blue-500/15">
                <Link
                  href="/demo"
                  className={`text-sm font-semibold py-3 px-5 rounded-xl text-center w-full flex items-center justify-center gap-2 transition-all duration-300 ${
                    plan.popular
                      ? 'btn-primary justify-center shadow-lg shadow-blue-500/30'
                      : 'btn-secondary justify-center'
                  }`}
                >
                  {plan.cta} <ArrowRight size={14} />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Custom ERP Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-14 rounded-2xl border border-blue-500/30 bg-gradient-to-r from-[#0c1527] via-[#0f1d3a] to-[#0c1527] p-8 sm:p-10 text-center relative overflow-hidden shadow-2xl"
        >
          <div className="glow-orb w-64 h-64 bg-blue-500/15 -top-20 -right-20" />
          <div className="relative z-10">
            <h3 className="font-display font-bold text-xl sm:text-2xl text-white">Need a Custom Tailored ERP?</h3>
            <p className="text-slate-300 mt-2 text-sm sm:text-base max-w-xl mx-auto">
              Build an ERP strictly aligned to your school, hospital, or enterprise workflow with custom modules and dedicated onboarding.
            </p>
            <div className="mt-6 flex justify-center gap-3">
              <Link href="/contact" className="btn-primary text-sm px-6 py-3">
                Contact Enterprise Sales <ArrowRight size={14} />
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
