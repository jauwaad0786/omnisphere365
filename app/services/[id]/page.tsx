'use client'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'
import { SERVICES } from '../../../lib/data'
import { Check, ArrowRight, Target, Sparkles, CheckCircle, Clock } from 'lucide-react'

const SERVICE_IMAGES: Record<string, string> = {
  'school-erp': '/school-erp-showcase.jpg',
  'college-erp': '/school-erp-showcase.jpg',
  'hrms': '/hrms-showcase.jpg',
  'ai-automation': '/ai-automation-showcase.jpg',
  'whatsapp-automation': '/whatsapp-showcase.jpg',
}

export default function ServicePage({ params }: { params: { id: string } }) {
  const service = SERVICES.find(s => s.id === params.id)
  if (!service) notFound()

  const showcaseImg = SERVICE_IMAGES[service.id]

  return (
    <div className="pt-28 pb-20 bg-[#0b192e] min-h-screen text-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Hero */}
        <div className="relative rounded-3xl overflow-hidden border border-cyan-500/25 bg-gradient-to-br from-[#0f223d] via-[#102747] to-[#0b192e] p-8 sm:p-12 mb-12 shadow-2xl">
          <div
            className="absolute inset-0 opacity-20 pointer-events-none"
            style={{ background: `radial-gradient(ellipse at 30% 50%, ${service.color} 0%, transparent 65%)` }}
          />

          <div className="grid lg:grid-cols-12 gap-8 items-center relative z-10">
            <div className="lg:col-span-7">
              <div className="text-5xl mb-4">{service.icon}</div>
              <div className="badge mb-4 bg-cyan-500/15 border-cyan-500/35 text-cyan-300">
                {service.category} Solution
              </div>
              <h1 className="font-display font-bold text-3xl sm:text-5xl text-white mb-3">{service.title}</h1>
              <p className="text-base sm:text-lg font-semibold mb-4" style={{ color: service.color }}>{service.tagline}</p>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-6 max-w-2xl">{service.description}</p>

              {/* Stats */}
              {service.stats && (
                <div className="flex flex-wrap gap-8 mb-8 pb-6 border-b border-cyan-500/20">
                  {service.stats.map((s) => (
                    <div key={s.label}>
                      <div className="text-2xl sm:text-3xl font-extrabold font-display gradient-text">{s.value}</div>
                      <div className="text-xs text-slate-300 mt-1">{s.label}</div>
                    </div>
                  ))}
                </div>
              )}

              <div className="flex flex-wrap gap-3">
                <Link href="/demo" className="btn-primary text-sm shadow-lg shadow-blue-500/30">
                  Book Free Demo <ArrowRight size={14} />
                </Link>
                <Link href="/contact" className="btn-secondary text-sm">
                  Consult Solution Specialist
                </Link>
              </div>
            </div>

            {/* Showcase Image Column if available */}
            {showcaseImg && (
              <div className="lg:col-span-5">
                <div className="relative aspect-[16/10] rounded-2xl overflow-hidden border-2 border-cyan-500/35 shadow-2xl group">
                  <Image
                    src={showcaseImg}
                    alt={`${service.title} Enterprise Showcase`}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0f223d]/80 via-transparent to-transparent" />
                  <div className="absolute bottom-3 left-3 right-3 text-xs font-semibold text-white flex items-center gap-1.5 bg-[#0b192e]/85 backdrop-blur-md p-2.5 rounded-xl border border-cyan-500/30">
                    <Sparkles size={13} className="text-cyan-300" /> Verified OnePlatform360 Deployment
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 items-start">
          {/* Left col — Features + Modules */}
          <div className="lg:col-span-2 space-y-8">

            {/* Features */}
            {service.features && (
              <div className="glass rounded-2xl p-7 border border-cyan-500/25">
                <h2 className="font-display font-bold text-xl text-white mb-5 flex items-center gap-2">
                  <Sparkles size={18} className="text-cyan-400" /> Key Features &amp; Capabilities
                </h2>
                <div className="grid sm:grid-cols-2 gap-3.5">
                  {service.features.map((f) => (
                    <div key={f} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-200 p-2.5 rounded-xl bg-[#0f223d] border border-cyan-500/15">
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
                    <div key={m.name} className="glass glass-hover rounded-xl p-5 group border border-cyan-500/20">
                      <div className="text-2xl mb-2">{m.icon}</div>
                      <div className="text-white text-sm font-semibold mb-1 group-hover:text-cyan-300 transition-colors">{m.name}</div>
                      <div className="text-slate-300 text-xs leading-relaxed">{m.desc}</div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Right col — Pricing & Demo */}
          <div className="space-y-6">
            <h2 className="font-display font-bold text-xl text-white">Pricing &amp; Deployment</h2>
            {service.plans && service.plans.length > 0 ? (
              service.plans.map((plan) => (
                <div
                  key={plan.name}
                  className={`rounded-2xl p-6 transition-all duration-300 ${
                    plan.popular
                      ? 'bg-[#102747] border-2 border-cyan-400 shadow-[0_0_30px_rgba(37,99,235,0.3)]'
                      : 'glass border border-cyan-500/25'
                  }`}
                >
                  {plan.badge && (
                    <span className="badge text-[10px] mb-3 inline-flex bg-gradient-to-r from-blue-600 to-cyan-500 border-cyan-300 text-white px-2.5 py-0.5">
                      {plan.badge}
                    </span>
                  )}
                  <div className="font-display font-bold text-white text-base mb-1">{plan.name}</div>
                  <div className="gradient-text text-2xl sm:text-3xl font-extrabold font-display mb-2">
                    {plan.price}
                    <span className="text-slate-300 text-xs font-normal ml-1">{plan.period}</span>
                  </div>

                  <ul className="mt-4 space-y-2.5 mb-6">
                    {plan.features.map((f) => (
                      <li key={f} className="flex items-start gap-2 text-xs text-slate-200">
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
              <div className="glass rounded-2xl p-6 text-center border border-cyan-500/25 space-y-3">
                <div className="w-12 h-12 rounded-xl bg-cyan-500/20 border border-cyan-400/40 flex items-center justify-center mx-auto text-cyan-300">
                  <Clock size={24} />
                </div>
                <div className="badge bg-amber-500/15 border-amber-400/30 text-amber-300 text-[10px]">
                  Custom Enterprise Rollout
                </div>
                <div className="text-white font-semibold text-base">Early Access &amp; Custom Quote</div>
                <p className="text-slate-300 text-xs leading-relaxed">
                  Every {service.shortTitle} rollout is tailored to your organization&apos;s exact scale and workflow.
                </p>
                <Link href="/contact" className="btn-primary text-xs justify-center w-full py-3">
                  Request Custom Quote →
                </Link>
              </div>
            )}

            {/* Direct Support Card */}
            <div className="rounded-2xl bg-gradient-to-br from-[#0f223d] to-[#0c182c] border border-cyan-500/30 p-5 text-center">
              <div className="text-xs text-slate-300 mb-1">Direct Solution Advisory</div>
              <div className="text-white font-semibold text-sm">OnePlatform360@gmail.com</div>
              <div className="text-cyan-300 text-xs font-medium mt-1">+91 62079 47958</div>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}
