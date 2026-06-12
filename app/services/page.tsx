import Link from 'next/link'
import { SERVICES } from '../@/lib/data'
import { ArrowRight } from 'lucide-react'

export default function ServicesPage() {
  const categories = Array.from(new Set(SERVICES.map(s => s.category)))

  return (
    <div className="pt-24 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-14">
          <div className="badge mb-4">12 Enterprise Solutions</div>
          <h1 className="font-display font-bold text-4xl sm:text-5xl text-white">
            All <span className="gradient-text">Services</span>
          </h1>
          <p className="text-slate-400 mt-4 max-w-2xl mx-auto">
            One platform, every business need. From education ERP to AI automation — OmniSphere 365 has you covered.
          </p>
        </div>

        {/* Category sections */}
        {categories.map((cat) => (
          <div key={cat} className="mb-12">
            <h2 className="text-sm font-bold uppercase tracking-widest text-indigo-400 mb-5">{cat}</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {SERVICES.filter(s => s.category === cat).map((s) => (
                <Link
                  key={s.id}
                  href={s.available ? `/services/${s.id}` : '#'}
                  className={`glass glass-hover rounded-2xl p-6 group relative overflow-hidden transition-all duration-300 ${!s.available ? 'opacity-80 cursor-default' : ''}`}
                >
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity"
                    style={{ background: `radial-gradient(circle at 20% 20%, ${s.color}10 0%, transparent 60%)` }} />
                  <div className="relative">
                    <div className="flex items-start justify-between mb-3">
                      <div className="text-4xl">{s.icon}</div>
                      {!s.available && (
                        <span className="text-[10px] px-2 py-0.5 rounded-full bg-slate-700/60 text-slate-400 border border-slate-600/40 font-medium">
                          Coming Soon
                        </span>
                      )}
                    </div>
                    <h3 className="font-display font-bold text-white text-base mb-1">{s.title}</h3>
                    <p className="text-slate-400 text-xs mb-1 font-medium" style={{ color: s.color }}>{s.tagline}</p>
                    <p className="text-slate-500 text-xs leading-relaxed mb-5">{s.description}</p>

                    {s.features && s.features.length > 0 && (
                      <ul className="space-y-1.5 mb-5">
                        {s.features.slice(0, 4).map((f) => (
                          <li key={f} className="flex items-center gap-2 text-xs text-slate-400">
                            <div className="w-1 h-1 rounded-full bg-indigo-400 shrink-0" />
                            {f}
                          </li>
                        ))}
                      </ul>
                    )}

                    {s.available ? (
                      <div className="flex items-center gap-1 text-xs font-semibold text-indigo-400 group-hover:gap-2 transition-all">
                        Explore Module <ArrowRight size={11} />
                      </div>
                    ) : (
                      <div className="text-xs text-slate-600">Launching Soon</div>
                    )}
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
