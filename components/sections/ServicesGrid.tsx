import Link from 'next/link'
import { SERVICES } from '../../lib/data'
import { ArrowRight } from 'lucide-react'

export default function ServicesGrid() {
  return (
    <section className="section-pad">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <div className="badge mb-4">12 Enterprise Solutions</div>
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-white">
            One Platform, <span className="gradient-text">Every Business Need</span>
          </h2>
          <p className="text-slate-400 mt-4 max-w-2xl mx-auto">
            From school management to hospital OPD, from HR automation to AI-powered analytics — OmniSphere 365 covers your entire digital transformation journey.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {SERVICES.map((s) => (
            <Link
              key={s.id}
              href={s.available ? `/services/${s.id}` : '/services'}
              className="glass glass-hover rounded-2xl p-5 group relative overflow-hidden transition-all duration-300"
            >
              {/* Color glow behind */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{ background: `radial-gradient(circle at 30% 30%, ${s.color}15 0%, transparent 70%)` }} />

              <div className="relative">
                <div className="text-3xl mb-3">{s.icon}</div>
                <div className="flex items-start justify-between gap-2 mb-2">
                  <h3 className="text-white font-semibold text-sm font-display leading-tight">{s.shortTitle}</h3>
                  {!s.available && (
                    <span className="shrink-0 text-[10px] px-2 py-0.5 rounded-full bg-slate-700/60 text-slate-400 font-medium border border-slate-600/40">
                      Soon
                    </span>
                  )}
                </div>
                <p className="text-slate-500 text-xs leading-relaxed mb-4">{s.tagline}</p>

                <div className="flex items-center gap-1 text-xs font-medium"
                  style={{ color: s.color }}>
                  {s.available ? 'Explore' : 'Coming Soon'}
                  <ArrowRight size={11} className="group-hover:translate-x-0.5 transition-transform" />
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="text-center mt-10">
          <Link href="/services" className="btn-secondary text-sm">
            View All Services <ArrowRight size={14} />
          </Link>
        </div>
      </div>
    </section>
  )
}
