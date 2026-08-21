'use client'
import Link from 'next/link'
import { SERVICES } from '../../lib/data'
import { ArrowRight, Sparkles } from 'lucide-react'
import { SERVICE_ICONS, IconTile } from '../../lib/icons'

export default function ServicesPage() {
  const categories = Array.from(new Set(SERVICES.map(s => s.category)))

  return (
    <div className="pt-28 pb-20 bg-[#070c1b] min-h-screen text-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-16">
          <div className="badge mb-4">
            <Sparkles size={12} className="text-blue-400" /> 12 Enterprise Solutions
          </div>
          <h1 className="font-display font-bold text-4xl sm:text-5xl text-white">
            All <span className="gradient-text">Solutions &amp; Modules</span>
          </h1>
          <p className="text-slate-400 mt-4 max-w-2xl mx-auto text-sm sm:text-base">
            One platform, every operational need. From academic ERP to AI autonomous workflows — OnePlatform360 powers your entire organisation.
          </p>
        </div>

        {/* Category sections */}
        {categories.map((cat) => (
          <div key={cat} className="mb-14">
            <h2 className="text-xs font-bold uppercase tracking-widest text-blue-400 mb-6 pb-2 border-b border-blue-500/15">
              {cat} Solutions
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {SERVICES.filter(s => s.category === cat).map((s) => (
                <Link
                  key={s.id}
                  href={`/services/${s.id}`}
                  className="glass glass-hover rounded-2xl p-6 group relative overflow-hidden transition-all duration-300 border border-blue-500/20 flex flex-col justify-between"
                >
                  <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"
                    style={{ background: `radial-gradient(circle at 20% 20%, ${s.color}18 0%, transparent 60%)` }}
                  />

                  <div className="relative z-10">
                    <div className="flex items-start justify-between mb-4">
                      <IconTile icon={SERVICE_ICONS[s.id]} color={s.color} size={22} tile={48} rounded={12} />
                      {!s.available && (
                        <span className="text-[10px] px-2 py-0.5 rounded-full bg-emerald-500/15 text-emerald-300 border border-emerald-500/30 font-medium">
                          New
                        </span>
                      )}
                    </div>

                    <h3 className="font-display font-bold text-white text-base sm:text-lg mb-1 group-hover:text-blue-300 transition-colors">
                      {s.title}
                    </h3>
                    <p className="text-xs mb-2 font-medium" style={{ color: s.color }}>{s.tagline}</p>
                    <p className="text-slate-400 text-xs sm:text-sm leading-relaxed mb-5">{s.description}</p>

                    {s.features && s.features.length > 0 && (
                      <ul className="space-y-2 mb-6">
                        {s.features.slice(0, 4).map((f) => (
                          <li key={f} className="flex items-center gap-2 text-xs text-slate-300">
                            <div className="w-1.5 h-1.5 rounded-full bg-blue-400 shrink-0" />
                            {f}
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>

                  <div className="relative z-10 pt-4 border-t border-blue-500/15 flex items-center justify-between text-xs font-semibold text-blue-400 group-hover:text-blue-300">
                    <span>Explore Module Details</span>
                    <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
