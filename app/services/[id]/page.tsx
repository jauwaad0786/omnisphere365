'use client'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'
import { SERVICES } from '../../../lib/data'
import {
  Check, ArrowRight, Sparkles, CheckCircle, Clock, ShieldCheck,
  Monitor, Smartphone, BarChart3, Lock, Zap, Layers
} from 'lucide-react'

const SERVICE_IMAGES: Record<string, string> = {
  'school-erp': '/school-erp-showcase.jpg',
  'college-erp': '/school-erp-showcase.jpg',
  'hrms': '/hrms-showcase.jpg',
  'inventory': '/hero-showcase.jpg',
  'sales-erp': '/hero-presentation.jpg',
  'whatsapp-automation': '/whatsapp-showcase.jpg',
  'hospital-opd': '/hero-presentation.jpg',
  'website-development': '/ai-automation-showcase.jpg',
  'digital-transformation': '/hero-showcase.jpg',
  'custom-cloud-erp': '/hero-presentation.jpg',
  'payg-erp': '/school-erp-showcase.jpg',
  'ai-automation': '/ai-automation-showcase.jpg',
}

export default function ServicePage({ params }: { params: { id: string } }) {
  const service = SERVICES.find((s) => s.id === params.id)
  if (!service) notFound()

  const showcaseImg = SERVICE_IMAGES[service.id] || '/school-erp-showcase.jpg'

  return (
    <div className="pt-24 bg-[#091526] min-h-screen text-slate-200">

      {/* ──── 1. EXL-STYLE HERO CASE STUDY BANNER (Matching User Screenshot 2) ──── */}
      <section className="relative overflow-hidden bg-white text-slate-900 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
          <div className="grid lg:grid-cols-12 gap-10 items-center">

            {/* Left Narrative */}
            <div className="lg:col-span-7 space-y-5">
              <div className="flex items-center gap-2">
                <span className="text-[11px] font-bold uppercase tracking-widest text-orange-600 font-mono">
                  {service.category} Solution Portfolio
                </span>
                <span className="text-slate-300">·</span>
                <span className="text-xs font-semibold text-slate-600">{service.shortTitle}</span>
              </div>

              <h1 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl text-orange-600 leading-tight">
                Streamlining complex, interconnected operations
              </h1>

              <p className="text-slate-700 text-sm sm:text-base leading-relaxed">
                Like many growing organizations, institutions suffer from an overly intricate operations framework encompassing multiple disparate systems, manual paperwork, and delayed reconciliation. This requires painstaking verification processes between multiple stakeholders, typically executed in manual silos.
              </p>

              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                Discover how <strong className="text-slate-900 font-semibold">OnePlatform360 {service.title}</strong> steps in with digital cloud operations to help leadership enhance operational resilience, accelerate fee and revenue recovery through data-driven insights, and shift to an innovative leadership benchmark.
              </p>

              <div className="pt-3 flex flex-wrap items-center gap-4">
                <Link
                  href="/demo"
                  className="px-6 py-3 rounded-lg border-2 border-orange-600 text-orange-600 font-bold text-xs sm:text-sm hover:bg-orange-600 hover:text-white transition-all flex items-center gap-2"
                >
                  Read the case study / Book Demo <ArrowRight size={14} />
                </Link>
                <Link
                  href="/contact"
                  className="text-xs sm:text-sm font-semibold text-slate-700 hover:text-blue-700 transition-colors"
                >
                  Contact Enterprise Architects →
                </Link>
              </div>
            </div>

            {/* Right Photo */}
            <div className="lg:col-span-5 relative aspect-[16/11] rounded-2xl overflow-hidden shadow-2xl border border-slate-200">
              <Image
                src={showcaseImg}
                alt={service.title}
                fill
                className="object-cover"
                priority
              />
            </div>

          </div>
        </div>
      </section>

      {/* ──── 2. THREE (3) RICH PRODUCT UI SCREENS / DASHBOARD MOCKUPS ──── */}
      <section className="py-16 bg-[#0b192e] border-b border-cyan-500/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <span className="text-xs font-bold uppercase tracking-widest text-cyan-300">
              User Interface &amp; Workflow Previews
            </span>
            <h2 className="font-display font-extrabold text-2xl sm:text-3xl text-white mt-1">
              Built for <span className="gradient-text">speed, clarity &amp; daily precision</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">

            {/* UI Mockup 1: Command Center */}
            <div className="rounded-2xl bg-white text-slate-900 border border-slate-200 p-6 shadow-xl space-y-4">
              <div className="w-10 h-10 rounded-xl bg-blue-50 border border-blue-200 flex items-center justify-center text-blue-600">
                <Monitor size={20} />
              </div>
              <div className="text-xs font-bold text-orange-600 uppercase tracking-wider font-mono">UI View 01</div>
              <h3 className="font-display font-bold text-lg text-slate-900">Executive Command Center</h3>
              <p className="text-slate-600 text-xs leading-relaxed">
                Centralized cloud interface consolidating student masters, staff records, real-time KPI metrics, and live status logs in one dashboard.
              </p>
              <div className="p-3 rounded-xl bg-slate-50 border border-slate-200 text-[11px] text-slate-700 font-mono">
                ✓ Multi-role permission control<br />
                ✓ 100% cloud synced database
              </div>
            </div>

            {/* UI Mockup 2: Automated Workflows & Analytics */}
            <div className="rounded-2xl bg-white text-slate-900 border border-slate-200 p-6 shadow-xl space-y-4">
              <div className="w-10 h-10 rounded-xl bg-purple-50 border border-purple-200 flex items-center justify-center text-purple-600">
                <BarChart3 size={20} />
              </div>
              <div className="text-xs font-bold text-orange-600 uppercase tracking-wider font-mono">UI View 02</div>
              <h3 className="font-display font-bold text-lg text-slate-900">Automated Processing Stream</h3>
              <p className="text-slate-600 text-xs leading-relaxed">
                Visual timeline tracking daily fee receipts, biometric attendance punches, automated report calculations, and reconciliation batches.
              </p>
              <div className="p-3 rounded-xl bg-slate-50 border border-slate-200 text-[11px] text-slate-700 font-mono">
                ✓ Automated audit logging<br />
                ✓ Instant PDF receipt dispatch
              </div>
            </div>

            {/* UI Mockup 3: Mobile & WhatsApp Engagement */}
            <div className="rounded-2xl bg-white text-slate-900 border border-slate-200 p-6 shadow-xl space-y-4">
              <div className="w-10 h-10 rounded-xl bg-green-50 border border-green-200 flex items-center justify-center text-green-600">
                <Smartphone size={20} />
              </div>
              <div className="text-xs font-bold text-orange-600 uppercase tracking-wider font-mono">UI View 03</div>
              <h3 className="font-display font-bold text-lg text-slate-900">Mobile &amp; WhatsApp Gateway</h3>
              <p className="text-slate-600 text-xs leading-relaxed">
                Parents, teachers, and staff receive real-time circulars, payment links, and timetable notifications directly on verified WhatsApp.
              </p>
              <div className="p-3 rounded-xl bg-slate-50 border border-slate-200 text-[11px] text-slate-700 font-mono">
                ✓ Meta Verified Cloud API<br />
                ✓ 24/7 AI chatbot assistance
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ──── 3. KEY FEATURES & MODULES ──── */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-10 items-start">

          {/* Left Column (8 Cols): Features & Modules */}
          <div className="lg:col-span-8 space-y-10">

            {/* Features list */}
            {service.features && (
              <div className="rounded-2xl bg-[#0d203b] border border-cyan-500/25 p-7 sm:p-9 shadow-xl">
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-cyan-300 mb-4">
                  <Sparkles size={16} /> Architectural Capabilities
                </div>
                <h3 className="font-display font-bold text-xl sm:text-2xl text-white mb-6">
                  Key Features of {service.title}
                </h3>
                <div className="grid sm:grid-cols-2 gap-3.5">
                  {service.features.map((f) => (
                    <div
                      key={f}
                      className="flex items-start gap-3 p-3 rounded-xl bg-[#091526] border border-cyan-500/15 text-xs sm:text-sm text-slate-200"
                    >
                      <CheckCircle size={17} className="text-emerald-400 shrink-0 mt-0.5" />
                      <span>{f}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Modules list */}
            {service.modules && (
              <div>
                <h3 className="font-display font-bold text-xl sm:text-2xl text-white mb-6">
                  Included Sub-Modules
                </h3>
                <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-4">
                  {service.modules.map((m) => (
                    <div
                      key={m.name}
                      className="rounded-xl bg-[#0d203b] border border-cyan-500/20 p-5 hover:border-cyan-400/40 transition-all duration-300 group"
                    >
                      <div className="text-2xl mb-2.5">{m.icon}</div>
                      <div className="text-white text-sm font-semibold mb-1 group-hover:text-cyan-300 transition-colors">
                        {m.name}
                      </div>
                      <div className="text-slate-300 text-xs leading-relaxed">
                        {m.desc}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

          </div>

          {/* Right Column (4 Cols): Pricing or Custom Enterprise Quote */}
          <div className="lg:col-span-4 space-y-6">
            <h3 className="font-display font-bold text-xl text-white">Deployment &amp; Pricing</h3>

            {service.plans && service.plans.length > 0 ? (
              service.plans.map((plan) => (
                <div
                  key={plan.name}
                  className={`rounded-2xl p-6 transition-all duration-300 ${
                    plan.popular
                      ? 'bg-[#102747] border-2 border-cyan-400 shadow-[0_0_30px_rgba(37,99,235,0.35)]'
                      : 'rounded-2xl bg-[#0d203b] border border-cyan-500/25'
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
              <div className="rounded-2xl bg-[#0d203b] border border-cyan-500/25 p-6 text-center space-y-4 shadow-xl">
                <div className="w-12 h-12 rounded-xl bg-cyan-500/20 border border-cyan-400/40 flex items-center justify-center mx-auto text-cyan-300">
                  <Clock size={24} />
                </div>
                <div className="badge bg-amber-500/15 border-amber-400/30 text-amber-300 text-[10px]">
                  Custom Institutional Scope
                </div>
                <div className="text-white font-bold text-base">Early Access &amp; Enterprise Quote</div>
                <p className="text-slate-300 text-xs leading-relaxed">
                  Every {service.shortTitle} rollout is tailored specifically for your volume, user roles, and existing database migration.
                </p>
                <Link href="/contact" className="btn-primary text-xs justify-center w-full py-3">
                  Request Custom Quote →
                </Link>
              </div>
            )}

            {/* Direct Support Card */}
            <div className="rounded-2xl bg-[#081220] border border-cyan-500/25 p-5 text-center">
              <div className="text-xs text-slate-400 mb-1">Direct Enterprise Advisory</div>
              <div className="text-white font-semibold text-sm">OnePlatform360@gmail.com</div>
              <div className="text-cyan-300 text-xs font-medium mt-1">+91 62079 47958</div>
            </div>

          </div>

        </div>
      </section>

    </div>
  )
}
