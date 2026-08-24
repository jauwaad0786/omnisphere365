'use client'
import Link from 'next/link'
import { ArrowRight, UserCheck, ShieldCheck, Cloud, Lock } from 'lucide-react'

const TRUST_ITEMS = [
  { icon: UserCheck, label: 'Single Sign-On', desc: 'One secure master login for all modules' },
  { icon: ShieldCheck, label: 'Role-Based Access', desc: 'Granular permissions for Admin, Staff & Users' },
  { icon: Cloud, label: 'Cloud Hosted', desc: 'High-availability AWS India servers' },
  { icon: Lock, label: '256-Bit SSL Security', desc: 'Bank-grade encrypted database & backups' },
]

export default function TrustStrip() {
  return (
    <section className="trust-strip py-10 bg-[#091526] border-t border-cyan-500/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
          {/* Trust items in Crisp White Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4 sm:gap-6 w-full lg:w-auto">
            {TRUST_ITEMS.map((item) => (
              <div key={item.label} className="flex items-center gap-3 p-3.5 rounded-2xl bg-white text-slate-900 border border-slate-200 shadow-md hover:shadow-lg transition-all">
                <div className="w-10 h-10 rounded-xl bg-blue-50 border border-blue-200 flex items-center justify-center shrink-0 text-blue-600">
                  <item.icon size={18} />
                </div>
                <div>
                  <div className="text-xs sm:text-sm font-bold text-slate-900">{item.label}</div>
                  <div className="text-[10px] text-slate-500 font-medium">{item.desc}</div>
                </div>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="flex items-center gap-4 shrink-0">
            <Link href="/demo" className="btn-primary text-xs sm:text-sm py-3.5 px-6 whitespace-nowrap shadow-lg shadow-blue-500/30">
              Book a Free Demo <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
