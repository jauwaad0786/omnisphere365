'use client'
import Link from 'next/link'
import Image from 'next/image'
import { SERVICES } from '../../lib/data'
import { ArrowRight, Sparkles } from 'lucide-react'

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

const CATEGORY_STYLES: Record<string, { badgeBg: string; badgeText: string; border: string; glow: string }> = {
  'Education': { badgeBg: 'bg-indigo-950/80', badgeText: 'text-indigo-300', border: 'border-indigo-500/40', glow: 'from-indigo-500/20' },
  'Business': { badgeBg: 'bg-blue-950/80', badgeText: 'text-blue-300', border: 'border-blue-500/40', glow: 'from-blue-500/20' },
  'Healthcare': { badgeBg: 'bg-emerald-950/80', badgeText: 'text-emerald-300', border: 'border-emerald-500/40', glow: 'from-emerald-500/20' },
  'Fitness & Wellness': { badgeBg: 'bg-amber-950/80', badgeText: 'text-amber-300', border: 'border-amber-500/40', glow: 'from-amber-500/20' },
  'Operations': { badgeBg: 'bg-cyan-950/80', badgeText: 'text-cyan-300', border: 'border-cyan-500/40', glow: 'from-cyan-500/20' },
  'Automation': { badgeBg: 'bg-green-950/80', badgeText: 'text-green-300', border: 'border-green-500/40', glow: 'from-green-500/20' },
  'Development': { badgeBg: 'bg-sky-950/80', badgeText: 'text-sky-300', border: 'border-sky-500/40', glow: 'from-sky-500/20' },
  'Consulting': { badgeBg: 'bg-purple-950/80', badgeText: 'text-purple-300', border: 'border-purple-500/40', glow: 'from-purple-500/20' },
  'AI': { badgeBg: 'bg-violet-950/80', badgeText: 'text-violet-300', border: 'border-violet-500/40', glow: 'from-violet-500/20' },
}

export default function ServicesPage() {
  return (
    <div className="pt-28 pb-24 bg-[#091526] min-h-screen text-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header (EXL Style) */}
        <div className="mb-14 max-w-3xl">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-10 h-1 bg-gradient-to-r from-amber-500 to-cyan-400 rounded-full" />
            <span className="text-xs font-bold uppercase tracking-widest text-cyan-300">
              Multi-Tenant Enterprise Portfolio
            </span>
          </div>
          <h1 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl text-white leading-tight">
            Our <span className="gradient-text">Solutions &amp; Capabilities</span>
          </h1>
          <p className="text-slate-300 mt-4 text-sm sm:text-base leading-relaxed">
            Purpose-built enterprise cloud applications designed with industry-specific workflows for schools, universities, hospitals, fitness clubs, supply chains, and modern multi-tenant businesses.
          </p>
        </div>

        {/* Unified 13 Solutions Grid with Distinct Visuals & Accents */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
          {SERVICES.map((s) => {
            const img = SERVICE_IMAGES[s.id] || '/school-erp-showcase.jpg'
            const catStyle = CATEGORY_STYLES[s.category] || {
              badgeBg: 'bg-slate-950/80',
              badgeText: 'text-cyan-300',
              border: 'border-cyan-500/40',
              glow: 'from-blue-500/20'
            }

            return (
              <div
                key={s.id}
                className="rounded-2xl overflow-hidden bg-white text-slate-900 border border-slate-200 shadow-xl hover:shadow-2xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  {/* Distinct Photo for Each Solution */}
                  <div className="relative aspect-[16/10] overflow-hidden bg-slate-950">
                    <Image
                      src={img}
                      alt={s.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-108"
                    />
                    {/* Top gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/30 pointer-events-none" />

                    <div className="absolute top-3 left-3 flex items-center gap-1.5">
                      <span className={`text-[10px] font-bold px-2.5 py-1 rounded-md backdrop-blur-md border ${catStyle.badgeBg} ${catStyle.badgeText} ${catStyle.border} shadow-sm`}>
                        {s.category}
                      </span>
                    </div>

                    {s.icon && (
                      <div className="absolute top-3 right-3 w-7 h-7 rounded-lg bg-black/60 backdrop-blur-md border border-white/20 flex items-center justify-center text-sm shadow-md">
                        {s.icon}
                      </div>
                    )}

                    {s.stats && s.stats[0] && (
                      <div className="absolute bottom-2.5 left-3">
                        <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-black/70 backdrop-blur-md text-slate-200 border border-white/10">
                          {s.stats[0].value} {s.stats[0].label}
                        </span>
                      </div>
                    )}
                  </div>

                  {/* Body Content */}
                  <div className="p-5 sm:p-6">
                    <div className="text-[11px] font-bold uppercase tracking-wider text-orange-600 mb-1 font-mono">
                      {s.tagline}
                    </div>
                    <h3 className="font-display font-bold text-lg text-slate-900 mb-2 group-hover:text-blue-700 transition-colors leading-snug">
                      {s.title}
                    </h3>
                    <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-4 line-clamp-3">
                      {s.description}
                    </p>

                    {/* Key Module Badges / Features pill row */}
                    {s.modules && s.modules.length > 0 && (
                      <div className="flex flex-wrap gap-1.5 pt-2 border-t border-slate-100">
                        {s.modules.slice(0, 2).map((m) => (
                          <span
                            key={m.name}
                            className="inline-flex items-center gap-1 text-[10px] font-semibold px-2 py-0.5 rounded-md bg-slate-100 text-slate-700 border border-slate-200"
                          >
                            <span>{m.icon}</span> {m.name}
                          </span>
                        ))}
                        {s.modules.length > 2 && (
                          <span className="text-[10px] font-bold text-blue-600 self-center">
                            +{s.modules.length - 2} more
                          </span>
                        )}
                      </div>
                    )}
                  </div>
                </div>

                {/* Bottom Learn More Link */}
                <div className="p-5 sm:p-6 pt-0">
                  <Link
                    href={`/services/${s.id}`}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-900 group-hover:text-blue-600 transition-colors"
                  >
                    Explore Module <ArrowRight size={14} className="text-orange-500 group-hover:translate-x-1.5 transition-transform" />
                  </Link>
                </div>
              </div>
            )
          })}
        </div>

      </div>
    </div>
  )
}
