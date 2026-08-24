'use client'
import { useState } from 'react'
import Link from 'next/link'
import { Check, X, Zap, Sparkles, ArrowRight, Clock, Layers, Building2 } from 'lucide-react'
import { SERVICES } from '../../lib/data'

const COMPARISON = [
  { feature: 'Users / Members / Students Scale', basic: 'Up to 200', pro: 'Up to 500', enterprise: 'Unlimited Scale' },
  { feature: 'Admin & Staff Role Accounts', basic: '1 Admin', pro: '3 Admins', enterprise: 'Unlimited Custom Roles' },
  { feature: 'Support SLA & Onboarding', basic: 'Standard Support', pro: '24/7 Priority Support', enterprise: 'Dedicated Solution Manager' },
  { feature: 'Multi-Tenant Branch Isolation', basic: 'Single Branch', pro: 'Up to 3 Branches', enterprise: 'Unlimited Multi-Tenant Branches' },
  { feature: 'Biometric & Attendance Hardware Sync', basic: true, pro: true, enterprise: true },
  { feature: 'Online Invoicing, Fees & UPI QR', basic: true, pro: true, enterprise: true },
  { feature: 'Standard Reports & Data Export', basic: true, pro: true, enterprise: true },
  { feature: 'Smart HRMS & Global Payroll', basic: false, pro: true, enterprise: true },
  { feature: 'Direct Bank Settlement API', basic: false, pro: true, enterprise: true },
  { feature: 'AI Predictive Operations & Forecasts', basic: false, pro: true, enterprise: true },
  { feature: 'Official Meta WhatsApp Business API', basic: false, pro: false, enterprise: true },
  { feature: 'Hospital OPD / Gym Turnstile Addons', basic: false, pro: false, enterprise: true },
  { feature: 'White-Label Branding & Custom Domain', basic: false, pro: false, enterprise: true },
  { feature: 'Dedicated Cloud Database Instance', basic: false, pro: false, enterprise: true },
]

const PRICING_TABS = [
  { id: 'multi-tenant', label: 'Multi-Tenant ERP', status: 'Live' },
  { id: 'hrms', label: 'Smart HRMS & Payroll', status: 'Live' },
  { id: 'hospital-opd', label: 'Hospital OPD & Clinic', status: 'Early Access' },
  { id: 'gym-management', label: 'Gym & Fitness Studio', status: 'Early Access' },
  { id: 'inventory', label: 'Inventory & POS', status: 'Early Access' },
  { id: 'whatsapp-automation', label: 'WhatsApp Hub', status: 'Live' },
]

const plans = SERVICES.find(s => s.id === 'school-erp')?.plans ?? []

function Cell({ val }: { val: boolean | string }) {
  if (typeof val === 'boolean')
    return val
      ? <Check size={16} className="text-emerald-600 mx-auto" />
      : <X size={16} className="text-slate-400 mx-auto" />
  return <span className="text-slate-800 text-xs sm:text-sm font-medium">{val}</span>
}

export default function PricingPage() {
  const [selectedTab, setSelectedTab] = useState('multi-tenant')

  return (
    <div className="pt-28 pb-20 bg-[#091526] min-h-screen text-slate-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-12">
          <div className="badge mb-4">
            <Sparkles size={12} className="text-cyan-300" /> Transparent Multi-Tenant Pricing
          </div>
          <h1 className="font-display font-extrabold text-4xl sm:text-5xl text-white">
            Simple, <span className="gradient-text">Predictable Pricing</span>
          </h1>
          <p className="text-slate-300 mt-4 max-w-2xl mx-auto text-sm sm:text-base">
            Transparent subscription tiers for Multi-Tenant ERP, Schools, Universities, Hospital OPDs, Gyms, HRMS, and Custom Enterprise Deployments.
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
                    : 'bg-white text-slate-800 border border-slate-200 hover:border-blue-400'
                }`}
              >
                <span>{tab.label}</span>
                {tab.status === 'Live' ? (
                  <span className="text-[9px] px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-700 border border-emerald-300 font-bold uppercase">
                    Live
                  </span>
                ) : (
                  <span className="text-[9px] px-2 py-0.5 rounded-full bg-amber-100 text-amber-800 border border-amber-300 font-medium">
                    Early Access
                  </span>
                )}
              </button>
            ))}
          </div>
        </div>

        {selectedTab === 'multi-tenant' || selectedTab === 'hrms' ? (
          /* Live ERP Tier Cards in Crisp White Containers */
          <>
            <div className="grid md:grid-cols-3 gap-6 mb-20 items-stretch">
              {plans.map((plan) => (
                <div
                  key={plan.name}
                  className={`relative rounded-2xl p-7 flex flex-col justify-between transition-all duration-300 bg-white text-slate-900 border shadow-xl ${
                    plan.popular
                      ? 'border-2 border-blue-600 ring-4 ring-blue-500/20 shadow-2xl scale-[1.03]'
                      : 'border-slate-200 hover:border-blue-300 hover:shadow-2xl'
                  }`}
                >
                  {plan.badge && (
                    <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                      <span className="text-[11px] font-bold uppercase tracking-wider bg-blue-600 text-white px-3.5 py-1 rounded-full shadow-lg shadow-blue-500/40 flex items-center gap-1">
                        <Zap size={11} className="fill-current" /> {plan.badge}
                      </span>
                    </div>
                  )}

                  <div>
                    <h3 className="font-display font-bold text-slate-900 text-xl">{plan.name}</h3>
                    <div className="mt-4 flex items-baseline gap-1 pb-5 border-b border-slate-200">
                      <span className="text-3xl sm:text-4xl font-extrabold font-display text-slate-900">{plan.price}</span>
                      <span className="text-slate-500 text-sm font-medium">{plan.period}</span>
                    </div>

                    <ul className="space-y-3 mt-5">
                      {plan.features.map((f) => (
                        <li key={f} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700 font-medium">
                          <Check size={16} className="text-emerald-600 shrink-0 mt-0.5" />
                          {f}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-8 pt-4 border-t border-slate-200">
                    <Link
                      href="/demo"
                      className={`text-xs sm:text-sm font-bold py-3.5 px-5 rounded-xl text-center w-full flex items-center justify-center gap-2 transition-all duration-300 shadow-md ${
                        plan.popular
                          ? 'bg-blue-600 hover:bg-blue-700 text-white shadow-blue-500/40'
                          : 'bg-slate-100 hover:bg-slate-200 text-slate-800'
                      }`}
                    >
                      {plan.cta} <ArrowRight size={14} />
                    </Link>
                  </div>
                </div>
              ))}
            </div>

            {/* Feature Comparison Matrix in Crisp White */}
            <div className="rounded-2xl overflow-hidden mb-16 border border-slate-200 bg-white text-slate-900 shadow-2xl">
              <div className="p-6 border-b border-slate-200 bg-slate-50">
                <h2 className="font-display font-bold text-xl text-slate-900">Full Multi-Tenant Feature Comparison Matrix</h2>
                <p className="text-slate-500 text-xs mt-1">Detailed module breakdown across all three OnePlatform360 tiers</p>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full text-left">
                  <thead>
                    <tr className="border-b border-slate-200 bg-slate-100">
                      <th className="text-xs text-slate-700 font-bold px-6 py-4">Core Feature</th>
                      <th className="text-center text-xs text-slate-700 font-bold px-6 py-4">Starter Tier</th>
                      <th className="text-center text-xs text-blue-700 font-bold px-6 py-4 bg-blue-50">Professional ⭐</th>
                      <th className="text-center text-xs text-slate-700 font-bold px-6 py-4">Enterprise Scale</th>
                    </tr>
                  </thead>
                  <tbody>
                    {COMPARISON.map((row, i) => (
                      <tr key={row.feature} className={`border-b border-slate-100 ${i % 2 === 0 ? '' : 'bg-slate-50/50'}`}>
                        <td className="text-slate-800 text-xs sm:text-sm font-medium px-6 py-3.5">{row.feature}</td>
                        <td className="text-center px-6 py-3.5"><Cell val={row.basic} /></td>
                        <td className="text-center px-6 py-3.5 bg-blue-50/40"><Cell val={row.pro} /></td>
                        <td className="text-center px-6 py-3.5"><Cell val={row.enterprise} /></td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </>
        ) : (
          /* Early access module container in Crisp White Card */
          <div className="rounded-3xl p-10 sm:p-16 text-center border border-slate-200 bg-white text-slate-900 max-w-3xl mx-auto space-y-6 mb-16 shadow-2xl">
            <div className="w-16 h-16 rounded-2xl bg-orange-50 border border-orange-200 flex items-center justify-center mx-auto text-orange-600">
              <Clock size={32} />
            </div>
            <div>
              <div className="text-[10px] font-bold uppercase tracking-wider bg-amber-50 text-amber-700 border border-amber-200 px-3 py-1 rounded-full inline-block mb-3">
                Early Access &amp; Enterprise Scoping
              </div>
              <h3 className="font-display font-bold text-2xl sm:text-3xl text-slate-900">
                {PRICING_TABS.find(t => t.id === selectedTab)?.label}
              </h3>
              <p className="text-slate-600 text-sm sm:text-base mt-3 max-w-xl mx-auto leading-relaxed">
                Standard self-serve pricing for this vertical module is rolling out. We are currently provisioning dedicated early-access instances for hospital clinics, gyms, warehouses &amp; enterprises.
              </p>
            </div>

            <div className="flex flex-wrap justify-center gap-3 pt-2">
              <Link href="/contact" className="btn-primary text-xs sm:text-sm px-6 py-3">
                Request Early Access &amp; Custom Quote <ArrowRight size={14} />
              </Link>
              <button
                onClick={() => setSelectedTab('multi-tenant')}
                className="px-6 py-3 rounded-xl bg-slate-100 text-slate-800 font-semibold text-xs sm:text-sm hover:bg-slate-200 transition-colors"
              >
                View Live Multi-Tenant ERP Pricing
              </button>
            </div>
          </div>
        )}

        {/* Custom ERP section in Crisp White Container */}
        <div className="rounded-3xl border border-slate-200 bg-white text-slate-900 p-8 sm:p-12 text-center relative overflow-hidden shadow-2xl">
          <div className="relative z-10">
            <h3 className="font-display font-bold text-2xl text-slate-900 mb-3">Looking for Bespoke Multi-Tenant Architecture?</h3>
            <p className="text-slate-600 text-sm sm:text-base max-w-xl mx-auto mb-6">
              Custom modules, dedicated servers, white-label branding, turnstiles, or on-premise cloud instances — we build exactly to your requirements.
            </p>
            <div className="flex flex-wrap justify-center gap-2.5 max-w-2xl mx-auto">
              {['Multi-Tenant Isolation', 'Private Cloud Hosting', 'White-Label Branding', 'Pay-as-you-grow', 'Legacy ERP Migration', 'Dedicated Support Architect'].map((f) => (
                <span key={f} className="text-xs font-semibold px-3 py-1 rounded-full bg-slate-100 text-slate-700 border border-slate-200">{f}</span>
              ))}
            </div>
            <div className="mt-8 flex justify-center gap-3">
              <Link href="/contact" className="btn-primary text-xs sm:text-sm px-6 py-3">
                Talk to Solution Architect →
              </Link>
              <Link href="/demo" className="px-6 py-3 rounded-xl bg-slate-100 text-slate-800 font-bold text-xs sm:text-sm hover:bg-slate-200 transition-colors">
                Book a Demo
              </Link>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}
