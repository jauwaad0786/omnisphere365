'use client'
import Link from 'next/link'
import { Check, Zap } from 'lucide-react'
import { SERVICES } from '../../lib/data'

export default function PricingSection() {
  const plans = SERVICES.find(s => s.id === 'school-erp')?.plans ?? []

  return (
    <section className="section-pad">
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
          {plans.map((plan) => (
            <div key={plan.name}
              className={`relative rounded-2xl border p-7 flex flex-col gap-5 transition-all duration-300
                ${plan.popular
                  ? 'border-brand-200 bg-white popular-card scale-[1.02]'
                  : 'border-surface-border bg-white hover:border-brand-200'}`}>

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
                className={`text-sm font-semibold py-2.5 px-5 rounded-lg text-center transition-all
                  ${plan.popular ? 'btn-primary justify-center' : 'btn-secondary justify-center'}`}>
                {plan.cta}
              </Link>
            </div>
          ))}
        </div>

        {/* Custom ERP CTA */}
        <div className="mt-10 rounded-2xl border border-brand-100 bg-gradient-to-r from-brand-50 to-sky-50 p-8 text-center">
          <h3 className="font-display font-bold text-xl text-slate-900">Need a Custom ERP?</h3>
          <p className="text-slate-500 mt-2 text-sm max-w-lg mx-auto">
            Build ERP exactly for your school or business needs — custom modules, white-label, pay-as-you-go.
          </p>
          <Link href="/contact" className="btn-primary mt-5 text-sm inline-flex">Contact Sales →</Link>
        </div>
      </div>
    </section>
  )
}
