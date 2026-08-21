'use client'
import { useState } from 'react'
import Link from 'next/link'
import { Check, X, Zap, Sparkles, ArrowRight, Clock } from 'lucide-react'
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

const PRICING_TABS = [
  { id: 'school-erp', label: 'School ERP', status: 'Live' },
  { id: 'hrms', label: 'Smart HRMS', status: 'Coming Soon' },
  { id: 'ai-automation', label: 'AI Automation', status: 'Coming Soon' },
  { id: 'hospital-opd', label: 'Hospital OPD', status: 'Coming Soon' },
  { id: 'whatsapp-automation', label: 'WhatsApp Hub', status: 'Coming Soon' },
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
  const [selectedTab, setSelectedTab] = useState('school-erp')

  return (
    <div className="pt-28 pb-20 bg-[#0b192e] min-h-screen text-slate-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-12">
          <div className="badge mb-4">
            <Sparkles size={12} className="text-cyan-300" /> Transparent Pricing
          </div>
          <h1 className="font-display font-bold text-4xl sm:text-5xl text-white">
            Simple, <span className="gradient-text">Predictable Pricing</span>
          </h1>
          <p className="text-slate-300 mt-4 max-w-xl mx-auto text-sm sm:text-base">
            School ERP standard tiers are active. Other enterprise modules are open for early access &amp; custom consultation.
          </p>

          {/* Module Filter Tabs */}
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
          /* Live School ERP Tier Cards */
          <>
            <div className="grid md:grid-cols-3 gap-6 mb-20 items-stretch">
              {plans.map((plan) => (
                <div
                  key={plan.name}
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
                    <div className="mt-4 flex items-baseline gap-1 pb-5 border-b border-cyan-500/20">
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
                </div>
              ))}
            </div>

            {/* Feature Comparison Matrix */}
            <div className="glass rounded-2xl overflow-hidden mb-16 border border-cyan-500/25">
              <div className="p-6 border-b border-cyan-500/20">
                <h2 className="font-display font-bold text-xl text-white">Full Feature Comparison Matrix</h2>
                <p className="text-slate-400 text-xs mt-1">Detailed module breakdown across all three School ERP plans</p>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full comparison-table text-left">
                  <thead>
                    <tr className="border-b border-cyan-500/25 bg-[#0f223d]">
                      <th className="text-xs text-slate-200 font-semibold px-6 py-4">Core Feature</th>
                      <th className="text-center text-xs text-slate-200 font-semibold px-6 py-4">Basic</th>
                      <th className="text-center text-xs text-cyan-300 font-semibold px-6 py-4 bg-blue-600/15">Professional ⭐</th>
                      <th className="text-center text-xs text-slate-200 font-semibold px-6 py-4">Enterprise</th>
                    </tr>
                  </thead>
                  <tbody>
                    {COMPARISON.map((row, i) => (
                      <tr key={row.feature} className={`border-b border-cyan-500/15 ${i % 2 === 0 ? '' : 'bg-blue-600/[0.04]'}`}>
                        <td className="text-slate-200 text-xs sm:text-sm px-6 py-3.5">{row.feature}</td>
                        <td className="text-center px-6 py-3.5"><Cell val={row.basic} /></td>
                        <td className="text-center px-6 py-3.5 bg-blue-600/15"><Cell val={row.pro} /></td>
                        <td className="text-center px-6 py-3.5"><Cell val={row.enterprise} /></td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </>
        ) : (
          /* Coming Soon module container */
          <div className="glass rounded-3xl p-10 sm:p-16 text-center border border-cyan-500/30 max-w-3xl mx-auto space-y-6 mb-16">
            <div className="w-16 h-16 rounded-2xl bg-cyan-500/20 border border-cyan-400/40 flex items-center justify-center mx-auto text-cyan-300">
              <Clock size={32} />
            </div>
            <div>
              <div className="badge mb-3 bg-amber-500/15 border-amber-400/30 text-amber-300">
                Early Access &amp; Enterprise Scoping
              </div>
              <h3 className="font-display font-bold text-2xl sm:text-3xl text-white">
                {PRICING_TABS.find(t => t.id === selectedTab)?.label} Standard Pricing
              </h3>
              <p className="text-slate-300 text-sm sm:text-base mt-3 max-w-xl mx-auto leading-relaxed">
                Standard tiered self-serve pricing for this solution will be published soon. In the meantime, we are delivering tailor-made institutional rollouts.
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

        {/* Custom ERP section */}
        <div className="rounded-3xl border border-cyan-500/30 bg-gradient-to-r from-[#0c1a30] via-[#102444] to-[#0c1a30] p-8 sm:p-12 text-center relative overflow-hidden shadow-2xl">
          <div className="glow-orb w-64 h-64 bg-cyan-500/15 -top-20 -right-20" />
          <div className="relative z-10">
            <h3 className="font-display font-bold text-2xl text-white mb-3">Looking for Bespoke Enterprise Architecture?</h3>
            <p className="text-slate-300 text-sm sm:text-base max-w-xl mx-auto mb-6">
              Custom modules, dedicated servers, white-label branding, or on-premise cloud instances — we build exactly to your requirements.
            </p>
            <div className="flex flex-wrap justify-center gap-2.5 max-w-2xl mx-auto">
              {['Custom Modules', 'Private Cloud', 'White-Label Branding', 'Pay-as-you-go', 'Custom ERP Migration', 'Dedicated Support Architect'].map((f) => (
                <span key={f} className="badge bg-cyan-500/10 border-cyan-500/30 text-cyan-300">{f}</span>
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
