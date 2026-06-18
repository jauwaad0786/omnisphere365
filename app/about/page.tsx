'use client'
import Link from 'next/link'
import { WHY_US } from '../../lib/data'
import { ArrowRight } from 'lucide-react'

const TEAM = [
  { name: 'Jauwaad Shaikh', role: 'Founder & CEO', avatar: 'JS', bg: 'from-brand-600 to-accent-500' },
]

export default function AboutPage() {
  return (
    <div className="pt-28 pb-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Hero */}
        <div className="text-center mb-20">
          <div className="badge mb-4">About OmniSphere 365</div>
          <h1 className="font-display font-bold text-4xl sm:text-5xl text-slate-900 mb-5">
            We Build the <span className="gradient-text">Digital Future</span><br />for India&apos;s Institutions
          </h1>
          <p className="text-slate-500 text-lg max-w-3xl mx-auto leading-relaxed">
            OmniSphere 365 was founded with a single mission — make enterprise-grade ERP and AI automation affordable and accessible for every school, hospital, and business in India.
          </p>
        </div>

        {/* Story */}
        <div className="grid lg:grid-cols-2 gap-10 mb-20 items-center">
          <div>
            <h2 className="font-display font-bold text-3xl text-slate-900 mb-5">Our Story</h2>
            <div className="space-y-4 text-slate-500 text-sm leading-relaxed">
              <p>OmniSphere 365 started when our founder, Jauwaad Shaikh, saw firsthand how schools and businesses in India were struggling with outdated, expensive, and fragmented software systems.</p>
              <p>Global ERP giants like SAP and Oracle were charging lakhs per year — completely out of reach for most Indian institutions. And smaller local solutions lacked the power, security, and scalability modern organizations need.</p>
              <p>We set out to build something different: enterprise-grade technology at prices that make sense for the Indian market. AI-first, cloud-native, and built for the future — but priced for today.</p>
              <p>Today, OmniSphere 365 serves 500+ institutions across India, managing 1.2 lakh+ students, and powering thousands of daily transactions with 99.9% uptime.</p>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {[
              { value: '500+', label: 'Institutions', sub: 'across India' },
              { value: '1.2L+', label: 'Students', sub: 'managed daily' },
              { value: '99.9%', label: 'Uptime', sub: 'SLA guaranteed' },
              { value: '12+', label: 'ERP Modules', sub: 'one platform' },
            ].map((s) => (
              <div key={s.label} className="glass rounded-xl p-5 text-center">
                <div className="text-3xl font-bold font-display gradient-text">{s.value}</div>
                <div className="text-slate-900 text-sm font-medium mt-1">{s.label}</div>
                <div className="text-slate-500 text-xs">{s.sub}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Vision & Mission */}
        <div className="grid md:grid-cols-2 gap-6 mb-20">
          <div className="glass rounded-2xl p-7 relative overflow-hidden">
            <div className="glow-orb w-40 h-40 bg-brand-500/[0.06] -top-10 -right-10" />
            <div className="relative">
              <div className="text-3xl mb-4">🔭</div>
              <h3 className="font-display font-bold text-xl text-slate-900 mb-3">Our Vision</h3>
              <p className="text-slate-500 text-sm leading-relaxed">
                To be India&apos;s most trusted digital transformation partner — empowering every school, hospital, and business with AI-powered cloud ERP that drives real outcomes, reduces operational costs, and unlocks growth at any scale.
              </p>
            </div>
          </div>
          <div className="glass rounded-2xl p-7 relative overflow-hidden">
            <div className="glow-orb w-40 h-40 bg-accent-500/[0.06] -top-10 -right-10" />
            <div className="relative">
              <div className="text-3xl mb-4">🎯</div>
              <h3 className="font-display font-bold text-xl text-slate-900 mb-3">Our Mission</h3>
              <p className="text-slate-500 text-sm leading-relaxed">
                To simplify operations, empower institutions, and accelerate digital modernization across India — by delivering enterprise-grade, affordable ERP software built on automation, AI, and innovation-first principles.
              </p>
            </div>
          </div>
        </div>

        {/* Why Choose Us */}
        <div className="mb-20">
          <h2 className="font-display font-bold text-2xl text-slate-900 mb-8 text-center">Why Choose OmniSphere 365</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {WHY_US.map((item) => (
              <div key={item.title} className="glass glass-hover rounded-xl p-5 flex gap-4">
                <div className="feature-icon text-xl shrink-0">{item.icon}</div>
                <div>
                  <div className="text-slate-900 text-sm font-semibold mb-1">{item.title}</div>
                  <div className="text-slate-500 text-xs leading-relaxed">{item.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Team */}
        <div className="mb-16">
          <h2 className="font-display font-bold text-2xl text-slate-900 mb-8 text-center">Leadership Team</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {TEAM.map((m) => (
              <div key={m.name} className="glass rounded-xl p-5 text-center glass-hover">
                <div className={`w-16 h-16 rounded-full bg-gradient-to-br ${m.bg} flex items-center justify-center text-white font-bold text-lg mx-auto mb-3`}>
                  {m.avatar}
                </div>
                <div className="text-slate-900 font-semibold text-sm">{m.name}</div>
                <div className="text-slate-500 text-xs mt-0.5">{m.role}</div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <h3 className="font-display font-bold text-2xl text-slate-900 mb-4">Ready to Transform Your Institution?</h3>
          <div className="flex justify-center gap-3">
            <Link href="/demo" className="btn-primary">Book Free Demo <ArrowRight size={14} /></Link>
            <Link href="/services" className="btn-secondary">Explore Services</Link>
          </div>
        </div>
      </div>
    </div>
  )
}
