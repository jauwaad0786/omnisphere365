'use client'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { SERVICES } from '../../../lib/data'
import { Check, ArrowRight, Target } from 'lucide-react'

export default function ServicePage({ params }: { params: { id: string } }) {
  const service = SERVICES.find(s => s.id === params.id)
  if (!service) notFound()

  return (
    <div className="pt-28 pb-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Hero */}
        <div className="relative rounded-3xl overflow-hidden border border-surface-border bg-gradient-to-br from-surface-subtle to-white p-10 mb-12">
          <div className="absolute inset-0 opacity-[0.06]"
            style={{ background: `radial-gradient(ellipse at 30% 50%, ${service.color} 0%, transparent 60%)` }} />
          <div className="relative max-w-3xl">
            <div className="text-5xl mb-4">{service.icon}</div>
            <div className="badge mb-4">{service.category}</div>
            <h1 className="font-display font-bold text-4xl sm:text-5xl text-slate-900 mb-3">{service.title}</h1>
            <p className="text-lg font-medium mb-3" style={{ color: service.color }}>{service.tagline}</p>
            <p className="text-slate-500 text-base leading-relaxed mb-6 max-w-2xl">{service.description}</p>

            {/* Stats */}
            {service.stats && (
              <div className="flex flex-wrap gap-6 mb-8">
                {service.stats.map((s) => (
                  <div key={s.label}>
                    <div className="text-2xl font-bold font-display gradient-text">{s.value}</div>
                    <div className="text-xs text-slate-500">{s.label}</div>
                  </div>
                ))}
              </div>
            )}

            <div className="flex gap-3">
              <Link href="/demo" className="btn-primary text-sm">Book Free Demo <ArrowRight size={14} /></Link>
              <Link href="/contact" className="btn-secondary text-sm">Contact Sales</Link>
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Left col — Features + Modules */}
          <div className="lg:col-span-2 space-y-8">

            {/* Features */}
            {service.features && (
              <div className="glass rounded-2xl p-7">
                <h2 className="font-display font-bold text-xl text-slate-900 mb-5">Key Features</h2>
                <div className="grid sm:grid-cols-2 gap-3">
                  {service.features.map((f) => (
                    <div key={f} className="flex items-center gap-2.5 text-sm text-slate-600">
                      <Check size={15} className="text-brand-600 shrink-0" />
                      {f}
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Modules */}
            {service.modules && (
              <div>
                <h2 className="font-display font-bold text-xl text-slate-900 mb-5">Modules Included</h2>
                <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-4">
                  {service.modules.map((m) => (
                    <div key={m.name} className="glass glass-hover rounded-xl p-4 group">
                      <div className="text-2xl mb-2">{m.icon}</div>
                      <div className="text-slate-900 text-sm font-semibold mb-1">{m.name}</div>
                      <div className="text-slate-500 text-xs">{m.desc}</div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Right col — Pricing */}
          <div className="space-y-5">
            <h2 className="font-display font-bold text-xl text-slate-900">Choose a Plan</h2>
            {service.plans && service.plans.length > 0 ? (
              service.plans.map((plan) => (
                <div key={plan.name}
                  className={`rounded-2xl border p-5 transition-all
                    ${plan.popular ? 'border-brand-200 bg-white popular-card' : 'border-surface-border bg-white'}`}>
                  {plan.badge && (
                    <span className="badge text-[10px] mb-3 inline-flex">
                      {plan.badge}
                    </span>
                  )}
                  <div className="font-display font-bold text-slate-900 mb-1">{plan.name}</div>
                  <div className="gradient-text text-2xl font-bold font-display mb-1">{plan.price}
                    <span className="text-slate-500 text-sm font-normal">{plan.period}</span>
                  </div>
                  <ul className="mt-3 space-y-2 mb-4">
                    {plan.features.map((f) => (
                      <li key={f} className="flex items-start gap-2 text-xs text-slate-500">
                        <Check size={12} className="text-brand-600 shrink-0 mt-0.5" />
                        {f}
                      </li>
                    ))}
                  </ul>
                  <Link href="/demo"
                    className={`block text-center text-sm font-semibold py-2.5 rounded-lg transition-all
                      ${plan.popular ? 'btn-primary justify-center' : 'btn-secondary justify-center'}`}>
                    {plan.cta}
                  </Link>
                </div>
              ))
            ) : (
              <div className="glass rounded-2xl p-6 text-center">
                <div className="feature-icon mx-auto mb-3">
                  <Target size={20} className="text-brand-600" />
                </div>
                <div className="text-slate-900 font-semibold mb-2">Custom Pricing Available</div>
                <p className="text-slate-500 text-sm mb-4">Every {service.shortTitle} rollout is scoped to your organization. Talk to our team for a tailored quote.</p>
                <Link href="/contact" className="btn-primary text-sm justify-center w-full">Get a Custom Quote</Link>
              </div>
            )}

            {/* Demo card */}
            <div className="rounded-2xl bg-gradient-to-br from-brand-50 to-sky-50 border border-brand-100 p-5 text-center">
              <div className="feature-icon mx-auto mb-2">
                <Target size={18} className="text-brand-600" />
              </div>
              <div className="text-slate-900 font-semibold text-sm mb-1">Need Custom Pricing?</div>
              <p className="text-slate-500 text-xs mb-4">Talk to our sales team for a custom quote tailored to your institution.</p>
              <Link href="/demo" className="btn-primary text-xs justify-center w-full py-2.5">Book Free Demo</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
