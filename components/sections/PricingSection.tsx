'use client'
import { useState, useRef } from 'react'
import Link from 'next/link'
import { motion, useInView } from 'framer-motion'
import { Check, Zap, ArrowRight, Sparkles, Clock } from 'lucide-react'
import { SERVICES } from '../../lib/data'

const PRICING_TABS = [
  { id: 'school-erp', label: 'School ERP', status: 'Live' },
  { id: 'hrms', label: 'Smart HRMS', status: 'Coming Soon' },
  { id: 'ai-automation', label: 'AI Automation', status: 'Coming Soon' },
  { id: 'hospital-opd', label: 'Hospital OPD', status: 'Coming Soon' },
]

export default function PricingSection() {
  const [selectedTab, setSelectedTab] = useState('school-erp')
  const plans = SERVICES.find(s => s.id === 'school-erp')?.plans ?? []
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section className="section-pad bg-[#0b192e] relative overflow-hidden" ref={ref} id="pricing">
      {/* Glow */}
      <div className="glow-orb w-96 h-96 bg-cyan-600/10 -top-20 right-0" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12">
          <div className="badge mb-4">
            <Sparkles size={12} className="text-cyan-300" /> Transparent Pricing
          </div>
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-white">
            Simple, <span className="gradient-text">Predictable Pricing</span>
          </h2>
          <p className="text-slate-300 mt-4 max-w-xl mx-auto text-sm sm:text-base">
            School ERP plans are live with guaranteed fixed monthly billing. Additional modules available for early access &amp; custom rollout.
          </p>

          {/* Module Selectors */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-8">
            {PRICING_TABS.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setSelectedTab(tab.id)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all flex items-center gap-2 ${
                  selectedTab === tab.id
                    ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-lg shadow-blue-500/30'
                    : 'bg-[#0f223d] border border-cyan-500/20 text-slate-300 hover:border-cyan-500/40 hover:text-white'
                }`}
              >
                <span>{tab.label}</span>
                {tab.status === 'Live' ? (
                  <span className="text-[9px] px-2 py-0.5 rounded-full bg-emerald-400/20 text-emerald-300 border border-emerald-400/30 font-bold uppercase">
                    Live
                  </span>
                ) : (
                  <span className="text-[9px] px-2 py-0.5 rounded-full bg-amber-400/20 text-amber-300 border border-amber-400/30 font-medium">
                    Coming Soon
                  </span>
                )}
              </button>
            ))}
          </div>
        </div>

        {selectedTab === 'school-erp' ? (
          /* Live School ERP Plans */
          <div className="grid md:grid-cols-3 gap-6 items-stretch">
            {plans.map((plan, i) => (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: i * 0.12, ease: [0.16, 1, 0.3, 1] }}
                className={`relative rounded-2xl p-7 flex flex-col justify-between transition-all duration-300 ${
                  plan.popular
                    ? 'bg-[#102747] border-2 border-cyan-400 shadow-[0_0_40px_rgba(37,99,235,0.35)] scale-[1.03]'
                    : 'glass border border-cyan-500/25 hover:border-cyan-400/50'
                }`}
              >
                {plan.badge && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                    <span className="badge text-[11px] bg-gradient-to-r from-blue-600 to-cyan-500 border-cyan-300 text-white px-3 py-1 shadow-lg shadow-blue-500/50">
                      <Zap size={10} className="fill-current" /> {plan.badge}
                    </span>
                  </div>
                )}

                <div>
                  <h3 className="font-display font-bold text-white text-lg">{plan.name}</h3>
                  <div className="mt-4 flex items-baseline gap-1.5 pb-5 border-b border-cyan-500/20">
                    <span className="text-3xl sm:text-4xl font-bold font-display gradient-text">{plan.price}</span>
                    <span className="text-slate-300 text-sm">{plan.period}</span>
                  </div>

                  <ul className="space-y-3 mt-5">
                    {plan.features.map((f) => (
                      <li key={f} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-200">
                        <Check size={16} className="text-emerald-400 shrink-0 mt-0.5" />
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-8 pt-4 border-t border-cyan-500/20">
                  <Link
                    href="/demo"
                    className={`text-sm font-semibold py-3 px-5 rounded-xl text-center w-full flex items-center justify-center gap-2 transition-all duration-300 ${
                      plan.popular
                        ? 'btn-primary justify-center shadow-lg shadow-blue-500/40'
                        : 'btn-secondary justify-center'
                    }`}
                  >
                    {plan.cta} <ArrowRight size={14} />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        ) : (
          /* Coming Soon / Custom Scope for other modules */
          <div className="glass rounded-3xl p-10 sm:p-14 text-center border border-cyan-500/30 max-w-3xl mx-auto space-y-6">
            <div className="w-16 h-16 rounded-2xl bg-cyan-500/20 border border-cyan-400/40 flex items-center justify-center mx-auto text-cyan-300">
              <Clock size={32} />
            </div>
            <div>
              <div className="badge mb-2 bg-amber-500/15 border-amber-400/30 text-amber-300">
                Early Access &amp; Enterprise Scoping
              </div>
              <h3 className="font-display font-bold text-2xl sm:text-3xl text-white">
                {PRICING_TABS.find(t => t.id === selectedTab)?.label} Standard Pricing
              </h3>
              <p className="text-slate-300 text-sm sm:text-base mt-3 max-w-xl mx-auto leading-relaxed">
                Standard tiered plans for this module are rolling out soon. We are actively deploying customized early-access instances for institutions.
              </p>
            </div>

            <div className="flex flex-wrap justify-center gap-3 pt-2">
              <Link href="/contact" className="btn-primary text-sm px-6 py-3">
                Request Early Access &amp; Custom Quote <ArrowRight size={14} />
              </Link>
              <button
                onClick={() => setSelectedTab('school-erp')}
                className="btn-secondary text-sm px-6 py-3"
              >
                View Live School ERP Pricing
              </button>
            </div>
          </div>
        )}

        {/* Custom ERP Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-14 rounded-2xl border border-cyan-500/30 bg-gradient-to-r from-[#0c1a30] via-[#102444] to-[#0c1a30] p-8 sm:p-10 text-center relative overflow-hidden shadow-2xl"
        >
          <div className="glow-orb w-64 h-64 bg-cyan-500/15 -top-20 -right-20" />
          <div className="relative z-10">
            <h3 className="font-display font-bold text-xl sm:text-2xl text-white">Need a Multi-Branch or Custom ERP?</h3>
            <p className="text-slate-300 mt-2 text-sm sm:text-base max-w-xl mx-auto">
              Custom modules, dedicated servers, white-label branding, or on-premise cloud instances — we build exactly to your requirements.
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
