'use client'
import Link from 'next/link'
import { Mail, Phone, MapPin, Linkedin, Twitter, Youtube, ArrowRight, Sparkles } from 'lucide-react'

const FOOTER_SERVICES = [
  { label: 'School ERP System', href: '/services/school-erp' },
  { label: 'College & University ERP', href: '/services/college-erp' },
  { label: 'Smart HRMS & Payroll', href: '/services/hrms' },
  { label: 'Inventory & Asset Mgmt', href: '/services/inventory' },
  { label: 'Sales CRM & Pipeline', href: '/services/sales-erp' },
  { label: 'WhatsApp Automation', href: '/services/whatsapp-automation' },
  { label: 'Hospital & Clinic OPD', href: '/services/hospital-opd' },
  { label: 'AI Business Automation', href: '/services/ai-automation' },
]

const FOOTER_COMPANY = [
  { label: 'About OnePlatform360', href: '/about' },
  { label: 'Careers & Hiring', href: '/careers' },
  { label: 'Blog & Knowledge Hub', href: '/blog' },
  { label: 'Contact & Support', href: '/contact' },
  { label: 'Book a Live Demo', href: '/demo' },
  { label: 'Pricing Plans', href: '/pricing' },
]

export default function Footer() {
  return (
    <footer className="bg-[#050813] text-slate-300 border-t border-blue-500/15 relative overflow-hidden">
      {/* Background glow */}
      <div className="glow-orb w-96 h-96 bg-blue-600/10 -top-20 left-1/4" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Top CTA Banner */}
        <div className="pt-14 pb-4">
          <div className="rounded-2xl bg-gradient-to-r from-[#0c162e] via-[#102046] to-[#0c162e] border border-blue-500/30 p-8 flex flex-col md:flex-row items-center justify-between gap-6 shadow-[0_10px_40px_rgba(0,0,0,0.5)]">
            <div>
              <div className="badge mb-2">
                <Sparkles size={11} className="text-cyan-300" /> Start Today
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-white font-display">
                Ready to run your entire institution on one platform?
              </h3>
              <p className="text-slate-300 mt-1 text-sm">
                Book a personalized live demo — no credit card or commitment required.
              </p>
            </div>
            <div className="flex gap-3 shrink-0">
              <Link href="/demo" className="btn-primary text-sm py-3 px-6 whitespace-nowrap shadow-lg shadow-blue-500/30">
                Book Demo
              </Link>
              <Link href="/contact" className="btn-secondary text-sm py-3 px-6 whitespace-nowrap">
                Contact Sales
              </Link>
            </div>
          </div>
        </div>

        {/* Main Footer Grid */}
        <div className="pt-12 pb-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* Brand Column */}
          <div>
            <Link href="/" className="flex items-center gap-3 mb-4">
              <div className="relative w-9 h-9 shrink-0">
                <svg viewBox="0 0 40 40" className="w-9 h-9 drop-shadow-[0_0_10px_rgba(59,130,246,0.6)]">
                  <defs>
                    <linearGradient id="footOpGrad" x1="4" y1="4" x2="36" y2="36" gradientUnits="userSpaceOnUse">
                      <stop offset="0%" stopColor="#38bdf8" />
                      <stop offset="50%" stopColor="#2563eb" />
                      <stop offset="100%" stopColor="#a855f7" />
                    </linearGradient>
                  </defs>
                  <circle cx="20" cy="20" r="16" fill="none" stroke="url(#footOpGrad)" strokeWidth="3.5" strokeDasharray="75 25" />
                  <circle cx="20" cy="20" r="10" fill="#0c1527" stroke="rgba(59,130,246,0.4)" strokeWidth="1.5" />
                  <text x="20" y="24" textAnchor="middle" fill="#38bdf8" fontSize="9" fontWeight="800" fontFamily="sans-serif">360</text>
                </svg>
              </div>
              <span className="font-display font-bold text-xl leading-none text-white">
                One<span className="gradient-text">Platform360</span>
              </span>
            </Link>

            <p className="text-slate-400 text-sm leading-relaxed mb-6">
              Empowering organizations, schools &amp; hospitals across India — ERP, CRM, HRMS, AI &amp; Automation, unified on one enterprise cloud platform.
            </p>

            <div className="space-y-3 text-sm text-slate-300">
              <div className="flex items-center gap-2.5 hover:text-cyan-400 transition-colors">
                <Mail size={15} className="text-cyan-400 shrink-0" />
                <a href="mailto:OnePlatform360@gmail.com" className="font-medium text-slate-200 hover:text-cyan-300">
                  OnePlatform360@gmail.com
                </a>
              </div>
              <div className="flex items-center gap-2.5 hover:text-cyan-400 transition-colors">
                <Phone size={15} className="text-cyan-400 shrink-0" />
                <a href="tel:+916207947958" className="text-slate-300 hover:text-cyan-300">
                  +91 62079 47958
                </a>
              </div>
              <div className="flex items-center gap-2.5 text-slate-400">
                <MapPin size={15} className="text-cyan-400 shrink-0" />
                <span>Delhi NCR, India &amp; Dubai, UAE</span>
              </div>
            </div>

            <div className="flex gap-3 mt-6">
              {[
                { icon: Linkedin, href: '#' },
                { icon: Twitter, href: '#' },
                { icon: Youtube, href: '#' },
              ].map(({ icon: Icon, href }, i) => (
                <a
                  key={i}
                  href={href}
                  className="w-9 h-9 rounded-xl bg-[#0c1527] border border-blue-500/20 flex items-center justify-center text-slate-400 hover:text-cyan-300 hover:border-blue-400 hover:bg-blue-600/10 transition-all duration-300"
                >
                  <Icon size={15} />
                </a>
              ))}
            </div>
          </div>

          {/* Solutions Column */}
          <div>
            <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-4 pb-1 border-b border-blue-500/15">
              Solutions &amp; Modules
            </h4>
            <ul className="space-y-2.5">
              {FOOTER_SERVICES.map((s) => (
                <li key={s.label}>
                  <Link href={s.href} className="text-sm text-slate-400 hover:text-blue-300 transition-colors duration-200">
                    {s.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Column */}
          <div>
            <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-4 pb-1 border-b border-blue-500/15">
              Company &amp; Resources
            </h4>
            <ul className="space-y-2.5">
              {FOOTER_COMPANY.map((s) => (
                <li key={s.label}>
                  <Link href={s.href} className="text-sm text-slate-400 hover:text-blue-300 transition-colors duration-200">
                    {s.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Stay Updated Column */}
          <div>
            <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-4 pb-1 border-b border-blue-500/15">
              Stay Connected
            </h4>
            <p className="text-sm text-slate-400 mb-4">
              Get product updates, new AI features &amp; ERP insights directly in your inbox.
            </p>
            <div className="space-y-2.5">
              <input
                type="email"
                placeholder="Enter your work email"
                className="w-full bg-[#0c1527] border border-blue-500/25 rounded-xl px-4 py-2.5 text-sm text-white placeholder:text-slate-500 outline-none focus:border-blue-400 transition-all"
              />
              <button className="btn-primary w-full justify-center text-sm py-2.5 rounded-xl">
                Subscribe <ArrowRight size={14} />
              </button>
            </div>

            {/* WhatsApp Direct Connect */}
            <a
              href="https://wa.me/916207947958"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 flex items-center gap-2.5 px-4 py-3 rounded-xl bg-[#25d366]/10 border border-[#25d366]/30 text-[#4ade80] text-sm font-medium hover:bg-[#25d366]/20 transition-all duration-300"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              Chat Directly on WhatsApp
            </a>
          </div>
        </div>

        {/* Bottom Copyright */}
        <div className="py-6 border-t border-blue-500/15 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-500">
          <p>© 2026 OnePlatform360 Technologies. All rights reserved.</p>
          <div className="flex gap-5">
            <Link href="#" className="hover:text-slate-300 transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-slate-300 transition-colors">Terms of Service</Link>
            <Link href="#" className="hover:text-slate-300 transition-colors">Security &amp; Compliance</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
