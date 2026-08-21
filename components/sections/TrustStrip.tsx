'use client'
import Link from 'next/link'
import { ArrowRight, Fingerprint, ShieldCheck, Cloud, Lock } from 'lucide-react'

const TRUST_ITEMS = [
  { icon: Fingerprint, label: 'Single Sign-On', desc: 'One secure master login for all modules' },
  { icon: ShieldCheck, label: 'Role-Based Access', desc: 'Granular permissions for Admin, Staff & Users' },
  { icon: Cloud, label: 'Cloud Hosted', desc: 'High-availability AWS India/Gulf servers' },
  { icon: Lock, label: '256-Bit SSL Security', desc: 'Bank-grade encrypted database & backups' },
]

export default function TrustStrip() {
  return (
    <section className="trust-strip py-10 bg-[#060a17]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
          {/* Trust items */}
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4 sm:gap-6 w-full lg:w-auto">
            {TRUST_ITEMS.map((item) => (
              <div key={item.label} className="flex items-center gap-3 p-3.5 rounded-xl bg-[#0c1527] border border-blue-500/15">
                <div className="w-10 h-10 rounded-lg bg-blue-500/10 border border-blue-500/25 flex items-center justify-center shrink-0 text-blue-400">
                  <item.icon size={18} />
                </div>
                <div>
                  <div className="text-xs sm:text-sm font-semibold text-white">{item.label}</div>
                  <div className="text-[10px] text-slate-400">{item.desc}</div>
                </div>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="flex items-center gap-4 shrink-0">
            <Link href="/demo" className="btn-primary text-sm py-3 px-6 whitespace-nowrap shadow-lg shadow-blue-500/30">
              Book a Free Demo <ArrowRight size={15} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
