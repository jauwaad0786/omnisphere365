'use client'
import Link from 'next/link'
import { ArrowRight, Fingerprint, ShieldCheck, Cloud, Lock } from 'lucide-react'

const TRUST_ITEMS = [
  { icon: Fingerprint, label: 'One Login', desc: 'Access everything with single sign-on' },
  { icon: ShieldCheck, label: 'Role Based Access', desc: 'Secure access for every role' },
  { icon: Cloud, label: 'Cloud Based', desc: 'Access from anywhere, anytime' },
  { icon: Lock, label: 'Bank Level Security', desc: 'Your data is safe and encrypted' },
]

export default function TrustStrip() {
  return (
    <section className="trust-strip py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
          {/* Trust items */}
          <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 sm:gap-6">
            {TRUST_ITEMS.map((item) => (
              <div key={item.label} className="trust-item">
                <div className="trust-item-icon">
                  <item.icon size={18} />
                </div>
                <div>
                  <div className="text-sm font-semibold text-slate-800">{item.label}</div>
                  <div className="text-xs text-slate-400">{item.desc}</div>
                </div>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="flex items-center gap-4 shrink-0">
            <div className="hidden sm:block text-right">
              <div className="text-sm font-semibold text-slate-800">Ready to transform your organisation?</div>
              <div className="text-xs text-slate-400">Join hundreds of organisations already growing with OnePlatform360.</div>
            </div>
            <Link href="/demo" className="btn-primary text-sm py-2.5 px-6 whitespace-nowrap">
              Book a Demo <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
