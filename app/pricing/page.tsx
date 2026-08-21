'use client'
import Link from 'next/link'
import { Check, X, Zap, Sparkles, ArrowRight } from 'lucide-react'
import { SERVICES } from '../../lib/data'

const COMPARISON = [
  { feature: 'Students / Users Limit', basic: 'Up to 200', pro: 'Up to 500', enterprise: 'Unlimited Scale' },
  { feature: 'Admin & Staff Accounts', basic: '1 Admin', pro: '3 Admins', enterprise: 'Unlimited Roles' },
  { feature: 'Support SLA', basic: 'Email (48h)', pro: '24/7 Priority', enterprise: 'Dedicated Manager' },
  { feature: 'Student & Profile Master', basic: true, pro: true, enterprise: true },
  { feature: 'Attendance & Biometrics', basic: true, pro: true, enterprise: true },
  { feature: 'Online & Offline Fees', basic: true, pro: true, enterprise: true },
  { feature: 'Exams & Gradebook', basic: true, pro: true, enterprise: true },
  { feature: 'Standard Reports', basic: true, pro: true, enterprise: true },
  { feature: 'Smart HRMS & Payroll', basic: false, pro: true, enterprise: true },
  { feature: 'Teacher & Staff Portal', basic: false, pro: true, enterprise: true },
  { feature: 'Direct Bank Settlement API', basic: false, pro: true, enterprise: true },
  { feature: 'Predictive AI Analytics', basic: false, pro: true, enterprise: true },
  { feature: 'Official WhatsApp Automation', basic: false, pro: false, enterprise: true },
  { feature: 'AI Auto-Generated Reports', basic: false, pro: false, enterprise: true },
  { feature: 'White-label Custom Domain', basic: false, pro: false, enterprise: true },
  { feature: 'Custom Module Development', basic: false, pro: false, enterprise: true },
]

const plans = SERVICES.find(s => s.id === 'school-erp')?.plans ?? []

function Cell({ val }: { val: boolean | string }) {
  if (typeof val === 'boolean')
    return val
      ? <Check size={16} className="text-emerald-400 mx-auto" />
      : <X size={16} className="text-slate-600 mx-auto" />
  return <span className="text-slate-200 text-xs sm:text-sm">{val}</span>
}

export default function PricingPage() {
  return (
    <div className="pt-28 pb-20 bg-[#070c1b] min-h-screen text-slate-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-16">
          <div className="badge mb-4">
            <Sparkles size={12} className="text-blue-400" /> Transparent Plans
          </div>
          <h1 className="font-display font-bold text-4xl sm:text-5xl text-white">
            Simple, <span className="gradient-text">Scalable Pricing</span>
          </h1>
          <p className="text-slate-400 mt-4 max-w-xl mx-auto text-sm sm:text-base">
            No hidden costs. No long-term lock-in. Pick the right plan for your current stage and scale seamlessly.
          </p>
        </div>

        {/* Pricing cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-20 items-stretch">
          {plans.map((plan) => (
            <div
              key={plan.name}
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
                <div className="mt-4 flex items-baseline gap-1 pb-5 border-b border-blue-500/15">
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
            </div>
          ))}
        </div>

        {/* Comparison table */}
        <div className="glass rounded-2xl overflow-hidden mb-16 border border-blue-500/20">
          <div className="p-6 border-b border-blue-500/15">
            <h2 className="font-display font-bold text-xl text-white">Full Feature Comparison Matrix</h2>
            <p className="text-slate-400 text-xs mt-1">Compare standard modules across all three tiers</p>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full comparison-table text-left">
              <thead>
                <tr className="border-b border-blue-500/20 bg-[#0c1527]">
                  <th className="text-xs text-slate-300 font-semibold px-6 py-4">Core Feature</th>
                  <th className="text-center text-xs text-slate-300 font-semibold px-6 py-4">Basic</th>
                  <th className="text-center text-xs text-blue-300 font-semibold px-6 py-4 bg-blue-600/10">Professional ⭐</th>
                  <th className="text-center text-xs text-slate-300 font-semibold px-6 py-4">Enterprise</th>
                </tr>
              </thead>
              <tbody>
                {COMPARISON.map((row, i) => (
                  <tr key={row.feature} className={`border-b border-blue-500/10 ${i % 2 === 0 ? '' : 'bg-blue-600/[0.03]'}`}>
                    <td className="text-slate-300 text-xs sm:text-sm px-6 py-3.5">{row.feature}</td>
                    <td className="text-center px-6 py-3.5"><Cell val={row.basic} /></td>
                    <td className="text-center px-6 py-3.5 bg-blue-600/10"><Cell val={row.pro} /></td>
                    <td className="text-center px-6 py-3.5"><Cell val={row.enterprise} /></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Custom ERP section */}
        <div className="rounded-3xl border border-blue-500/30 bg-gradient-to-r from-[#0c162e] via-[#102046] to-[#0c162e] p-8 sm:p-12 text-center relative overflow-hidden shadow-2xl">
          <div className="glow-orb w-64 h-64 bg-blue-500/15 -top-20 -right-20" />
          <div className="relative z-10">
            <h3 className="font-display font-bold text-2xl text-white mb-3">Looking for Bespoke Enterprise Architecture?</h3>
            <p className="text-slate-300 text-sm sm:text-base max-w-xl mx-auto mb-6">
              Custom modules, dedicated servers, white-label branding, or on-premise cloud instances — we build exactly to your requirements.
            </p>
            <div className="flex flex-wrap justify-center gap-2.5 max-w-2xl mx-auto">
              {['Custom Modules', 'On-Prem / Private Cloud', 'White-Label Branding', 'Pay-as-you-go', 'Custom ERP Migration', 'Dedicated Support Architect'].map((f) => (
                <span key={f} className="badge bg-blue-500/10 border-blue-500/25 text-blue-300">{f}</span>
              ))}
            </div>
            <div className="mt-8 flex justify-center gap-3">
              <Link href="/contact" className="btn-primary text-sm px-6 py-3">
                Talk to Solution Architect →
              </Link>
              <Link href="/demo" className="btn-secondary text-sm px-6 py-3">
                Book a Demo
              </Link>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}
