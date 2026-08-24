'use client'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'
import { SERVICES } from '../../../lib/data'
import {
  Check, ArrowRight, Sparkles, CheckCircle, Clock, ShieldCheck,
  Monitor, Smartphone, BarChart3, Lock, Zap, Layers, Mail, Phone
} from 'lucide-react'

const SERVICE_IMAGES: Record<string, string> = {
  'school-erp': '/school-erp-showcase.jpg',
  'college-erp': '/college-university-showcase.jpg',
  'hrms': '/hrms-showcase.jpg',
  'hospital-opd': '/hospital-opd-showcase.jpg',
  'gym-management': '/gym-showcase.jpg',
  'inventory': '/inventory-showcase.jpg',
  'sales-erp': '/sales-crm-showcase.jpg',
  'whatsapp-automation': '/whatsapp-showcase.jpg',
  'website-development': '/web-dev-showcase.jpg',
  'digital-transformation': '/hero-presentation.jpg',
  'custom-cloud-erp': '/cloud-infrastructure-showcase.jpg',
  'payg-erp': '/payg-modular-showcase.jpg',
  'ai-automation': '/ai-automation-showcase.jpg',
}

export default function ServicePage({ params }: { params: { id: string } }) {
  const service = SERVICES.find((s) => s.id === params.id)
  if (!service) notFound()

  const showcaseImg = SERVICE_IMAGES[service.id] || '/school-erp-showcase.jpg'

  return (
    <div className="pt-24 bg-[#091526] min-h-screen text-slate-200">

      {/* ──── 1. EXL-STYLE HERO CASE STUDY BANNER (Crisp White on Deep Navy) ──── */}
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
                Streamlining complex, multi-tenant operations
              </h1>

              <p className="text-slate-700 text-sm sm:text-base leading-relaxed">
                Growing organizations and multi-branch enterprises suffer from disparate legacy tools, manual registers, delayed reconciliations, and isolated data silos. This results in lost productivity and operational friction.
              </p>

              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                Discover how <strong className="text-slate-900 font-semibold">OnePlatform360 {service.title}</strong> delivers high-speed cloud operations, automated workflows, and data-driven insights to establish a modern operational benchmark.
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
      <section className="py-16 bg-[#091526] border-b border-cyan-500/20">
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
              <h3 className="font-display font-bold text-lg text-slate-900">Enterprise Command Center</h3>
              <p className="text-slate-600 text-xs leading-relaxed">
                Centralized cloud interface consolidating records, staff profiles, multi-branch KPI metrics, and live telemetry logs in one dashboard.
              </p>
              <div className="p-3 rounded-xl bg-slate-50 border border-slate-200 text-[11px] text-slate-700 font-mono">
                ✓ Multi-role granular permissions<br />
                ✓ 100% cloud synced multi-tenant database
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
                Visual timeline tracking daily transactions, biometric attendance punches, automated report calculations, and reconciliation batches.
              </p>
              <div className="p-3 rounded-xl bg-slate-50 border border-slate-200 text-[11px] text-slate-700 font-mono">
                ✓ Automated audit logging<br />
                ✓ Instant PDF invoice &amp; receipt dispatch
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
                Clients, members, patients, and employees receive real-time notifications, payment links, and scheduled reminders directly on WhatsApp.
              </p>
              <div className="p-3 rounded-xl bg-slate-50 border border-slate-200 text-[11px] text-slate-700 font-mono">
                ✓ Meta Verified Cloud API<br />
                ✓ 24/7 AI chatbot assistance
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ──── 3. KEY FEATURES & MODULES (CRISP WHITE CARDS ON NAVY BACKDROP) ──── */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-10 items-start">

          {/* Left Column (8 Cols): Features & Modules in Crisp White Containers */}
          <div className="lg:col-span-8 space-y-10">

            {/* Key Features Container (Crisp White Card) */}
            {service.features && (
              <div className="rounded-2xl bg-white text-slate-900 border border-slate-200 p-7 sm:p-9 shadow-xl">
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-orange-600 mb-2 font-mono">
                  <Sparkles size={16} /> Architectural Capabilities
                </div>
                <h3 className="font-display font-bold text-xl sm:text-2xl text-slate-900 mb-6">
                  Key Features of {service.title}
                </h3>
                <div className="grid sm:grid-cols-2 gap-3.5">
                  {service.features.map((f) => (
                    <div
                      key={f}
                      className="flex items-start gap-3 p-3.5 rounded-xl bg-slate-50 border border-slate-200/90 text-xs sm:text-sm text-slate-800 font-medium hover:bg-blue-50/60 hover:border-blue-200 transition-colors"
                    >
                      <CheckCircle size={17} className="text-emerald-600 shrink-0 mt-0.5" />
                      <span>{f}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Included Sub-Modules (Crisp White Cards Grid) */}
            {service.modules && (
              <div>
                <div className="mb-4">
                  <span className="text-xs font-bold uppercase tracking-widest text-cyan-300">
                    Comprehensive Suite
                  </span>
                  <h3 className="font-display font-bold text-xl sm:text-2xl text-white mt-1">
                    Included Sub-Modules
                  </h3>
                </div>
                <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-4">
                  {service.modules.map((m) => (
                    <div
                      key={m.name}
                      className="rounded-xl bg-white text-slate-900 border border-slate-200 p-5 shadow-md hover:shadow-xl hover:border-blue-300 transition-all duration-300 group"
                    >
                      <div className="text-2xl mb-2.5">{m.icon}</div>
                      <div className="text-slate-900 font-bold text-sm mb-1 group-hover:text-blue-700 transition-colors">
                        {m.name}
                      </div>
                      <div className="text-slate-600 text-xs leading-relaxed">
                        {m.desc}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

          </div>

          {/* Right Column (4 Cols): Deployment & Pricing in Crisp White Cards */}
          <div className="lg:col-span-4 space-y-6">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-cyan-300">
                Institutional Licensing
              </span>
              <h3 className="font-display font-bold text-xl text-white mt-1">
                Deployment &amp; Pricing
              </h3>
            </div>

            {service.plans && service.plans.length > 0 ? (
              service.plans.map((plan) => (
                <div
                  key={plan.name}
                  className={`rounded-2xl p-6 transition-all duration-300 bg-white text-slate-900 border shadow-xl ${
                    plan.popular
                      ? 'border-2 border-blue-600 shadow-2xl relative ring-4 ring-blue-500/20'
                      : 'border-slate-200'
                  }`}
                >
                  {plan.badge && (
                    <div className="mb-3">
                      <span className="text-[10px] font-bold uppercase tracking-wider bg-blue-600 text-white px-2.5 py-0.5 rounded-full shadow-sm">
                        {plan.badge}
                      </span>
                    </div>
                  )}
                  <div className="font-display font-bold text-slate-900 text-base mb-1">{plan.name}</div>
                  <div className="text-slate-900 text-2xl sm:text-3xl font-extrabold font-display mb-2">
                    {plan.price}
                    <span className="text-slate-500 text-xs font-normal ml-1">{plan.period}</span>
                  </div>

                  <ul className="mt-4 space-y-2.5 mb-6">
                    {plan.features.map((f) => (
                      <li key={f} className="flex items-start gap-2 text-xs text-slate-700 font-medium">
                        <Check size={14} className="text-emerald-600 shrink-0 mt-0.5" />
                        {f}
                      </li>
                    ))}
                  </ul>

                  <Link
                    href="/demo"
                    className={`block text-center text-xs sm:text-sm font-bold py-3 rounded-xl transition-all shadow-md ${
                      plan.popular
                        ? 'bg-blue-600 hover:bg-blue-700 text-white shadow-blue-500/30'
                        : 'bg-slate-100 hover:bg-slate-200 text-slate-800'
                    }`}
                  >
                    {plan.cta}
                  </Link>
                </div>
              ))
            ) : (
              <div className="rounded-2xl bg-white text-slate-900 border border-slate-200 p-6 text-center space-y-4 shadow-xl">
                <div className="w-12 h-12 rounded-xl bg-orange-50 border border-orange-200 flex items-center justify-center mx-auto text-orange-600">
                  <Clock size={24} />
                </div>
                <div className="text-[10px] font-bold uppercase tracking-wider bg-amber-50 text-amber-700 border border-amber-200 px-2.5 py-1 rounded-full inline-block">
                  Custom Institutional Scope
                </div>
                <div className="text-slate-900 font-bold text-base">Early Access &amp; Enterprise Quote</div>
                <p className="text-slate-600 text-xs leading-relaxed">
                  Every {service.shortTitle} rollout is tailored specifically for your volume, user roles, and existing database migration.
                </p>
                <Link href="/contact" className="btn-primary text-xs justify-center w-full py-3">
                  Request Custom Quote →
                </Link>
              </div>
            )}

            {/* Direct Support Card (Crisp White Card) */}
            <div className="rounded-2xl bg-white text-slate-900 border border-slate-200 p-5 text-center shadow-lg">
              <div className="text-xs text-slate-500 font-medium mb-1">Direct Enterprise Advisory</div>
              <div className="text-slate-900 font-bold text-sm">OnePlatform360@gmail.com</div>
              <div className="text-blue-600 text-xs font-semibold mt-1">+91 62079 47958</div>
            </div>

          </div>

        </div>
      </section>

    </div>
  )
}
