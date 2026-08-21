'use client'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { SERVICES } from '../../../lib/data'
import { Check, ArrowRight, Target, Sparkles, CheckCircle } from 'lucide-react'

export default function ServicePage({ params }: { params: { id: string } }) {
  const service = SERVICES.find(s => s.id === params.id)
  if (!service) notFound()

  return (
    <div className="pt-28 pb-20 bg-[#070c1b] min-h-screen text-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Hero */}
        <div className="relative rounded-3xl overflow-hidden border border-blue-500/25 bg-gradient-to-br from-[#0c162e] via-[#0d1b38] to-[#070c1b] p-8 sm:p-12 mb-12 shadow-2xl">
          <div
            className="absolute inset-0 opacity-15 pointer-events-none"
            style={{ background: `radial-gradient(ellipse at 30% 50%, ${service.color} 0%, transparent 65%)` }}
          />

          <div className="relative max-w-3xl z-10">
            <div className="text-5xl mb-4">{service.icon}</div>
            <div className="badge mb-4 bg-blue-500/15 border-blue-500/30 text-blue-300">
              {service.category}
            </div>
            <h1 className="font-display font-bold text-3xl sm:text-5xl text-white mb-3">{service.title}</h1>
            <p className="text-base sm:text-lg font-semibold mb-4" style={{ color: service.color }}>{service.tagline}</p>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-8 max-w-2xl">{service.description}</p>

            {/* Stats */}
            {service.stats && (
              <div className="flex flex-wrap gap-8 mb-8 pb-8 border-b border-blue-500/20">
                {service.stats.map((s) => (
                  <div key={s.label}>
                    <div className="text-2xl sm:text-3xl font-extrabold font-display gradient-text">{s.value}</div>
                    <div className="text-xs text-slate-400 mt-1">{s.label}</div>
                  </div>
                ))}
              </div>
            )}

            <div className="flex flex-wrap gap-3">
              <Link href="/demo" className="btn-primary text-sm shadow-lg shadow-blue-500/30">
                Book Free Demo <ArrowRight size={14} />
              </Link>
              <Link href="/contact" className="btn-secondary text-sm">
                Talk to Solution Specialist
              </Link>
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 items-start">
          {/* Left col — Features + Modules */}
          <div className="lg:col-span-2 space-y-8">

            {/* Features */}
            {service.features && (
              <div className="glass rounded-2xl p-7 border border-blue-500/20">
                <h2 className="font-display font-bold text-xl text-white mb-5 flex items-center gap-2">
                  <Sparkles size={18} className="text-blue-400" /> Key Features &amp; Capabilities
                </h2>
                <div className="grid sm:grid-cols-2 gap-3.5">
                  {service.features.map((f) => (
                    <div key={f} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300 p-2 rounded-lg bg-[#0c1527] border border-blue-500/10">
                      <CheckCircle size={16} className="text-emerald-400 shrink-0 mt-0.5" />
                      <span>{f}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Modules */}
            {service.modules && (
              <div>
                <h2 className="font-display font-bold text-xl text-white mb-5">Included Modules</h2>
                <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-4">
                  {service.modules.map((m) => (
                    <div key={m.name} className="glass glass-hover rounded-xl p-5 group border border-blue-500/15">
                      <div className="text-2xl mb-2">{m.icon}</div>
                      <div className="text-white text-sm font-semibold mb-1 group-hover:text-blue-300 transition-colors">{m.name}</div>
                      <div className="text-slate-400 text-xs leading-relaxed">{m.desc}</div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Right col — Pricing & Demo */}
          <div className="space-y-6">
            <h2 className="font-display font-bold text-xl text-white">Select a Plan</h2>
            {service.plans && service.plans.length > 0 ? (
              service.plans.map((plan) => (
                <div
                  key={plan.name}
                  className={`rounded-2xl p-6 transition-all duration-300 ${
                    plan.popular
                      ? 'bg-[#0d1730] border-2 border-blue-500/60 shadow-[0_0_30px_rgba(37,99,235,0.25)]'
                      : 'glass border border-blue-500/20'
                  }`}
                >
                  {plan.badge && (
                    <span className="badge text-[10px] mb-3 inline-flex bg-blue-600 border-blue-400 text-white px-2.5 py-0.5">
                      {plan.badge}
                    </span>
                  )}
                  <div className="font-display font-bold text-white text-base mb-1">{plan.name}</div>
                  <div className="gradient-text text-2xl sm:text-3xl font-extrabold font-display mb-2">
                    {plan.price}
                    <span className="text-slate-400 text-xs font-normal ml-1">{plan.period}</span>
                  </div>

                  <ul className="mt-4 space-y-2.5 mb-6">
                    {plan.features.map((f) => (
                      <li key={f} className="flex items-start gap-2 text-xs text-slate-300">
                        <Check size={14} className="text-emerald-400 shrink-0 mt-0.5" />
                        {f}
                      </li>
                    ))}
                  </ul>

                  <Link
                    href="/demo"
                    className={`block text-center text-sm font-semibold py-2.5 rounded-xl transition-all ${
                      plan.popular ? 'btn-primary justify-center w-full' : 'btn-secondary justify-center w-full'
                    }`}
                  >
                    {plan.cta}
                  </Link>
                </div>
              ))
            ) : (
              <div className="glass rounded-2xl p-6 text-center border border-blue-500/20">
                <div className="feature-icon mx-auto mb-3">
                  <Target size={20} className="text-blue-400" />
                </div>
                <div className="text-white font-semibold mb-2">Custom Scope &amp; Pricing</div>
                <p className="text-slate-400 text-xs sm:text-sm mb-5 leading-relaxed">
                  Every {service.shortTitle} rollout is scoped specifically for your volume. Talk to our team for a tailored quote.
                </p>
                <Link href="/contact" className="btn-primary text-sm justify-center w-full">Get Custom Quote</Link>
              </div>
            )}

            {/* Support CTA */}
            <div className="rounded-2xl bg-gradient-to-br from-[#0c162e] to-[#0a1122] border border-blue-500/25 p-5 text-center">
              <div className="text-xs text-slate-400 mb-1">Direct Technical Advisory</div>
              <div className="text-white font-semibold text-sm">OnePlatform360@gmail.com</div>
              <div className="text-cyan-400 text-xs font-medium mt-1">+91 62079 47958</div>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}
