'use client'
import { WHY_US } from '../../lib/data'

export default function FeaturesSection() {
  return (
    <section className="section-pad bg-surface-subtle">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <div className="badge mb-4">Why OmniSphere 365</div>
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-slate-900">
            Built for <span className="gradient-text">Enterprise. Priced for Everyone.</span>
          </h2>
          <p className="text-slate-500 mt-4 max-w-2xl mx-auto">
            Enterprise-grade infrastructure, AI-first architecture, and 24/7 support — at a fraction of the cost of global ERP giants.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {WHY_US.map((item) => (
            <div key={item.title}
              className="glass glass-hover rounded-2xl p-6 flex gap-4 group transition-all duration-300">
              <div className="feature-icon text-2xl shrink-0 group-hover:bg-brand-100 transition-colors">
                {item.icon}
              </div>
              <div>
                <h3 className="font-semibold text-slate-900 text-sm font-display mb-1.5">{item.title}</h3>
                <p className="text-slate-500 text-xs leading-relaxed">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
