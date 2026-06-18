'use client'
import Link from 'next/link'
import { SERVICES } from '../../lib/data'
import { ArrowRight } from 'lucide-react'

export default function ServicesPage() {
  const categories = Array.from(new Set(SERVICES.map(s => s.category)))

  return (
    <div className="pt-28 pb-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-14">
          <div className="badge mb-4">12 Enterprise Solutions</div>
          <h1 className="font-display font-bold text-4xl sm:text-5xl text-slate-900">
            All <span className="gradient-text">Services</span>
          </h1>
          <p className="text-slate-500 mt-4 max-w-2xl mx-auto">
            One platform, every business need. From education ERP to AI automation — OmniSphere 365 has you covered.
          </p>
        </div>

        {/* Category sections */}
        {categories.map((cat) => (
          <div key={cat} className="mb-12">
            <h2 className="text-sm font-bold uppercase tracking-widest text-brand-600 mb-5">{cat}</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {SERVICES.filter(s => s.category === cat).map((s) => (
                <Link
                  key={s.id}
                  href={`/services/${s.id}`}
                  className="glass glass-hover rounded-2xl p-6 group relative overflow-hidden transition-all duration-300"
                >
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity"
                    style={{ background: `radial-gradient(circle at 20% 20%, ${s.color}10 0%, transparent 60%)` }} />
                  <div className="relative">
                    <div className="flex items-start justify-between mb-3">
                      <div className="text-4xl">{s.icon}</div>
                      {!s.available && (
                        <span className="text-[10px] px-2 py-0.5 rounded-full bg-success-50 text-success-600 border border-success-500/20 font-medium">
                          New
                        </span>
                      )}
                    </div>
                    <h3 className="font-display font-bold text-slate-900 text-base mb-1">{s.title}</h3>
                    <p className="text-xs mb-1 font-medium" style={{ color: s.color }}>{s.tagline}</p>
                    <p className="text-slate-500 text-xs leading-relaxed mb-5">{s.description}</p>

                    {s.features && s.features.length > 0 && (
                      <ul className="space-y-1.5 mb-5">
                        {s.features.slice(0, 4).map((f) => (
                          <li key={f} className="flex items-center gap-2 text-xs text-slate-500">
                            <div className="w-1 h-1 rounded-full bg-brand-500 shrink-0" />
                            {f}
                          </li>
                        ))}
                      </ul>
                    )}

                    <div className="flex items-center gap-1 text-xs font-semibold text-brand-600 group-hover:gap-2 transition-all">
                      Explore Module <ArrowRight size={11} />
                    </div>
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
