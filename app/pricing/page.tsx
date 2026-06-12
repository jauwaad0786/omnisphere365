import Link from 'next/link'
import { Check, X, Zap } from 'lucide-react'
import { SERVICES } from '../lib/data'

const COMPARISON = [
  { feature: 'Students', basic: '200', pro: '500', enterprise: 'Unlimited' },
  { feature: 'Admin Accounts', basic: '1', pro: '3', enterprise: '5' },
  { feature: 'Support', basic: 'Weekly', pro: '24/7', enterprise: 'Priority 24/7' },
  { feature: 'Student Management', basic: true, pro: true, enterprise: true },
  { feature: 'Attendance Tracking', basic: true, pro: true, enterprise: true },
  { feature: 'Fee Management', basic: true, pro: true, enterprise: true },
  { feature: 'Result Management', basic: true, pro: true, enterprise: true },
  { feature: 'Basic Reports', basic: true, pro: true, enterprise: true },
  { feature: 'HRMS Module', basic: false, pro: true, enterprise: true },
  { feature: 'Teacher Management', basic: false, pro: true, enterprise: true },
  { feature: 'Payroll System', basic: false, pro: true, enterprise: true },
  { feature: 'Advanced Analytics', basic: false, pro: true, enterprise: true },
  { feature: 'WhatsApp Notifications', basic: false, pro: false, enterprise: true },
  { feature: 'AI-powered Reports', basic: false, pro: false, enterprise: true },
  { feature: 'Cloud ERP Dashboard', basic: false, pro: false, enterprise: true },
  { feature: 'Custom Integrations', basic: false, pro: false, enterprise: true },
]

const plans = SERVICES.find(s => s.id === 'school-erp')?.plans ?? []

function Cell({ val }: { val: boolean | string }) {
  if (typeof val === 'boolean')
    return val
      ? <Check size={16} className="text-green-400 mx-auto" />
      : <X size={16} className="text-slate-700 mx-auto" />
  return <span className="text-slate-300 text-sm">{val}</span>
}

export default function PricingPage() {
  return (
    <div className="pt-24 pb-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-14">
          <div className="badge mb-4">School ERP Plans</div>
          <h1 className="font-display font-bold text-4xl sm:text-5xl text-white">
            Simple, <span className="gradient-text">Transparent Pricing</span>
          </h1>
          <p className="text-slate-400 mt-4 max-w-xl mx-auto">
            No hidden fees. No lock-in. Start with Basic and upgrade anytime.
          </p>
        </div>

        {/* Pricing cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {plans.map((plan) => (
            <div key={plan.name}
              className={`relative rounded-2xl border p-7 flex flex-col gap-5 transition-all
                ${plan.popular ? 'border-indigo-500/50 bg-[#151528] popular-card scale-[1.02]' : 'border-[#1e1e3a] bg-[#151528]/60'}`}>
              {plan.badge && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                  <span className="badge text-[11px] bg-indigo-600 border-indigo-500 text-white px-3 py-1">
                    <Zap size={9} className="fill-current" /> {plan.badge}
                  </span>
                </div>
              )}
              <div>
                <h3 className="font-display font-bold text-white text-lg">{plan.name}</h3>
                <div className="mt-3 flex items-end gap-1">
                  <span className="text-4xl font-bold font-display gradient-text">{plan.price}</span>
                  <span className="text-slate-500 text-sm mb-1">{plan.period}</span>
                </div>
              </div>
              <ul className="space-y-2.5 flex-1">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-start gap-2.5 text-sm text-slate-300">
                    <Check size={15} className="text-indigo-400 shrink-0 mt-0.5" />
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

        {/* Comparison table */}
        <div className="glass rounded-2xl overflow-hidden mb-12">
          <h2 className="font-display font-bold text-xl text-white p-6 border-b border-[#1e1e3a]">Feature Comparison</h2>
          <div className="overflow-x-auto">
            <table className="w-full comparison-table">
              <thead>
                <tr className="border-b border-[#1e1e3a]">
                  <th className="text-left text-xs text-slate-400 font-semibold px-6 py-3">Feature</th>
                  <th className="text-center text-xs text-slate-400 font-semibold px-6 py-3">Basic</th>
                  <th className="text-center text-xs text-indigo-400 font-semibold px-6 py-3">Professional ⭐</th>
                  <th className="text-center text-xs text-slate-400 font-semibold px-6 py-3">Enterprise</th>
                </tr>
              </thead>
              <tbody>
                {COMPARISON.map((row, i) => (
                  <tr key={row.feature} className={`border-b border-[#1e1e3a]/50 ${i % 2 === 0 ? '' : 'bg-white/[0.01]'}`}>
                    <td className="text-slate-300 text-sm px-6 py-3">{row.feature}</td>
                    <td className="text-center px-6 py-3"><Cell val={row.basic} /></td>
                    <td className="text-center px-6 py-3 bg-indigo-500/5"><Cell val={row.pro} /></td>
                    <td className="text-center px-6 py-3"><Cell val={row.enterprise} /></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Custom ERP section */}
        <div className="rounded-2xl border border-indigo-500/20 bg-gradient-to-r from-indigo-600/10 to-sky-600/10 p-8 text-center">
          <h3 className="font-display font-bold text-2xl text-white mb-3">Need a Custom ERP?</h3>
          <p className="text-slate-400 text-sm max-w-lg mx-auto mb-6">
            Build ERP exactly for your school or business needs — custom modules, white-label branding, pay-as-you-go model, and dedicated support.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {['Custom Modules', 'Cloud Deployment', 'White-label ERP', 'Pay-as-you-go', 'AI Integrations', 'Dedicated Support'].map((f) => (
              <span key={f} className="badge">{f}</span>
            ))}
          </div>
          <div className="mt-6 flex justify-center gap-3">
            <Link href="/contact" className="btn-primary text-sm">Contact Sales →</Link>
            <Link href="/demo" className="btn-secondary text-sm">Book Demo</Link>
          </div>
        </div>
      </div>
    </div>
  )
}
