'use client'
import Link from 'next/link'
import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Check, Zap, ArrowRight } from 'lucide-react'
import { SERVICES } from '../../lib/data'

export default function PricingSection() {
  const plans = SERVICES.find(s => s.id === 'school-erp')?.plans ?? []
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section className="section-pad" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <div className="badge mb-4">School ERP Pricing</div>
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-slate-900">
            Simple, <span className="gradient-text">Transparent Pricing</span>
          </h2>
          <p className="text-slate-500 mt-4 max-w-xl mx-auto">
            Start free, scale as you grow. No hidden charges. Cancel anytime.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 items-start">
          {plans.map((plan, i) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.12, ease: [0.16, 1, 0.3, 1] }}
              className={`relative rounded-2xl border p-7 flex flex-col gap-5 transition-all duration-400
                ${plan.popular
                  ? 'border-brand-200 bg-white popular-card scale-[1.02] gradient-border'
                  : 'border-surface-border bg-white hover:border-brand-200 hover:shadow-card-hover'}`}
            >
              {plan.badge && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                  <span className="badge text-[11px] bg-brand-600 border-brand-600 text-white px-3 py-1">
                    <Zap size={9} className="fill-current" /> {plan.badge}
                  </span>
                </div>
              )}

              <div>
                <h3 className="font-display font-bold text-slate-900 text-lg">{plan.name}</h3>
                <div className="mt-3 flex items-end gap-1">
                  <span className="text-4xl font-bold font-display gradient-text">{plan.price}</span>
                  <span className="text-slate-500 text-sm mb-1">{plan.period}</span>
                </div>
              </div>

              <ul className="space-y-3 flex-1">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-start gap-2.5 text-sm text-slate-600">
                    <Check size={15} className="text-brand-600 shrink-0 mt-0.5" />
                    {f}
                  </li>
                ))}
              </ul>

              <Link href="/demo"
                className={`text-sm font-semibold py-3 px-5 rounded-lg text-center transition-all duration-300
                  ${plan.popular ? 'btn-primary justify-center' : 'btn-secondary justify-center'}`}>
                {plan.cta}
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Custom ERP CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 rounded-2xl border border-brand-100 bg-gradient-to-r from-brand-50 via-white to-sky-50 p-8 sm:p-10 text-center relative overflow-hidden"
        >
          <div className="glow-orb w-40 h-40 bg-brand-500/[0.05] -top-10 -right-10" />
          <div className="relative">
            <h3 className="font-display font-bold text-xl text-slate-900">Need a Custom ERP?</h3>
            <p className="text-slate-500 mt-2 text-sm max-w-lg mx-auto">
              Build ERP exactly for your needs — custom modules, white-label, pay-as-you-go.
            </p>
            <Link href="/contact" className="btn-primary mt-5 text-sm inline-flex">
              Contact Sales <ArrowRight size={14} />
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
