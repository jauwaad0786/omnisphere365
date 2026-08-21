'use client'
import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import {
  Menu, X, ChevronDown, Sparkles, GraduationCap, Building2, Users,
  Bot, MessageCircle, BarChart3, Layers, ArrowRight, ShieldCheck,
  Zap, Cloud, CheckCircle, Smartphone
} from 'lucide-react'

const SOLUTIONS_MENU = [
  {
    category: 'Core Institutional ERP',
    items: [
      { label: 'School ERP System', desc: 'Admissions, fees, attendance & exams', href: '/services/school-erp', icon: GraduationCap, color: '#38bdf8' },
      { label: 'College & University ERP', desc: 'Multi-campus higher-ed management', href: '/services/college-erp', icon: Building2, color: '#818cf8' },
      { label: 'Hospital & Clinic OPD', desc: 'Patient records, appointments & billing', href: '/services/hospital-opd', icon: ShieldCheck, color: '#f43f5e' },
      { label: 'Custom Cloud ERP', desc: 'Bespoke scalable architecture', href: '/services/custom-cloud-erp', icon: Cloud, color: '#60a5fa' },
    ]
  },
  {
    category: 'Business & Workforce',
    items: [
      { label: 'Smart HRMS & Payroll', desc: 'Recruitment, biometric attendance & salaries', href: '/services/hrms', icon: Users, color: '#a78bfa' },
      { label: 'Sales CRM & Billing', desc: 'Deals pipeline, invoices & receipts', href: '/services/sales-erp', icon: BarChart3, color: '#fb923c' },
      { label: 'Inventory & Assets', desc: 'Stock control & purchase orders', href: '/services/inventory', icon: Layers, color: '#34d399' },
      { label: 'Pay-As-You-Go ERP', desc: 'Modular usage-based deployment', href: '/services/payg-erp', icon: Zap, color: '#fbbf24' },
    ]
  },
  {
    category: 'AI & Automation Hub',
    items: [
      { label: 'AI Business Automation', desc: 'Autonomous tasks & smart workflows', href: '/services/ai-automation', icon: Bot, color: '#a855f7' },
      { label: 'WhatsApp Business Hub', desc: 'Automated parent alerts & instant bots', href: '/services/whatsapp-automation', icon: MessageCircle, color: '#22c55e' },
      { label: 'Digital Transformation', desc: 'Modernize legacy institutional tools', href: '/services/digital-transformation', icon: Zap, color: '#38bdf8' },
      { label: 'Web & Mobile Portals', desc: 'Parent, teacher & staff apps', href: '/services/website-development', icon: Smartphone, color: '#f472b6' },
    ]
  }
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [megaOpen, setMegaOpen] = useState(false)
  const megaRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (megaRef.current && !megaRef.current.contains(e.target as Node)) {
        setMegaOpen(false)
      }
    }
    document.addEventListener('mousedown', handler)
    return () => document.removeEventListener('mousedown', handler)
  }, [])

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled
        ? 'bg-[#0b192e]/92 backdrop-blur-xl border-b border-cyan-500/25 shadow-[0_8px_32px_rgba(5,12,24,0.7)]'
        : 'bg-[#0b192e]/75 backdrop-blur-md border-b border-cyan-500/15'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-[72px]">

          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group shrink-0">
            <div className="relative w-10 h-10 shrink-0 transition-transform duration-300 group-hover:scale-105">
              <svg viewBox="0 0 40 40" className="w-10 h-10 drop-shadow-[0_0_14px_rgba(56,189,248,0.7)]">
                <defs>
                  <linearGradient id="navOpGrad" x1="4" y1="4" x2="36" y2="36" gradientUnits="userSpaceOnUse">
                    <stop offset="0%" stopColor="#38bdf8" />
                    <stop offset="50%" stopColor="#2563eb" />
                    <stop offset="100%" stopColor="#818cf8" />
                  </linearGradient>
                </defs>
                <circle cx="20" cy="20" r="16" fill="none" stroke="url(#navOpGrad)" strokeWidth="3" strokeDasharray="75 25" />
                <circle cx="20" cy="20" r="10" fill="#0f223d" stroke="rgba(56,189,248,0.5)" strokeWidth="1.5" />
                <text x="20" y="24" textAnchor="middle" fill="#38bdf8" fontSize="9" fontWeight="800" fontFamily="sans-serif">360</text>
              </svg>
            </div>
            <div className="flex flex-col leading-none">
              <span className="font-display font-extrabold text-xl tracking-tight text-white flex items-center">
                One<span className="gradient-text">Platform360</span>
              </span>
              <span className="hidden sm:block text-[8.5px] font-semibold uppercase tracking-[0.18em] text-cyan-300/80 mt-0.5">
                One Platform. Unlimited Possibilities.
              </span>
            </div>
          </Link>

          {/* Clean Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1.5" ref={megaRef}>
            <Link href="/" className="px-3.5 py-2 rounded-lg text-sm font-medium text-slate-200 hover:text-white hover:bg-white/5 transition-all">
              Home
            </Link>

            {/* Solutions with Mega Menu */}
            <div className="relative">
              <button
                onClick={() => setMegaOpen(!megaOpen)}
                className={`flex items-center gap-1.5 px-3.5 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                  megaOpen ? 'text-white bg-blue-600/25 border border-cyan-500/40' : 'text-slate-200 hover:text-white hover:bg-white/5'
                }`}
              >
                Solutions
                <ChevronDown size={14} className={`transition-transform duration-300 ${megaOpen ? 'rotate-180 text-cyan-400' : 'text-slate-400'}`} />
              </button>

              {/* Mega Dropdown */}
              {megaOpen && (
                <div className="absolute top-full left-1/2 -translate-x-1/2 mt-3 w-[840px] rounded-2xl border border-cyan-500/30 bg-[#0d203b]/98 backdrop-blur-2xl shadow-[0_24px_70px_rgba(3,8,18,0.85)] p-6 animate-fade-in z-50">
                  <div className="grid grid-cols-3 gap-6">
                    {SOLUTIONS_MENU.map((col) => (
                      <div key={col.category} className="space-y-3">
                        <div className="text-[11px] font-bold uppercase tracking-wider text-cyan-300 pb-1.5 border-b border-cyan-500/20">
                          {col.category}
                        </div>
                        <div className="space-y-1.5">
                          {col.items.map((item) => (
                            <Link
                              key={item.label}
                              href={item.href}
                              onClick={() => setMegaOpen(false)}
                              className="flex items-start gap-3 p-2.5 rounded-xl hover:bg-blue-600/15 border border-transparent hover:border-cyan-500/30 transition-all duration-200 group"
                            >
                              <div
                                className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0 mt-0.5 transition-transform group-hover:scale-110"
                                style={{ background: `${item.color}18`, border: `1px solid ${item.color}35` }}
                              >
                                <item.icon size={16} style={{ color: item.color }} />
                              </div>
                              <div>
                                <div className="text-xs font-semibold text-white group-hover:text-cyan-300 transition-colors">
                                  {item.label}
                                </div>
                                <div className="text-[11px] text-slate-300 line-clamp-1 mt-0.5">
                                  {item.desc}
                                </div>
                              </div>
                            </Link>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Mega Menu Footer */}
                  <div className="mt-5 pt-4 border-t border-cyan-500/20 flex items-center justify-between text-xs">
                    <div className="flex items-center gap-2 text-slate-300">
                      <CheckCircle size={14} className="text-emerald-400" />
                      <span>12+ Unified Modules · 99.9% SLA · Indian &amp; Gulf Cloud Hosting</span>
                    </div>
                    <Link
                      href="/services"
                      onClick={() => setMegaOpen(false)}
                      className="text-cyan-300 hover:text-white font-semibold flex items-center gap-1 transition-colors"
                    >
                      View All 12 Modules <ArrowRight size={13} />
                    </Link>
                  </div>
                </div>
              )}
            </div>

            <Link href="/services/ai-automation" className="px-3.5 py-2 rounded-lg text-sm font-medium text-slate-200 hover:text-white hover:bg-white/5 transition-all">
              AI &amp; Automation
            </Link>

            <Link href="/pricing" className="px-3.5 py-2 rounded-lg text-sm font-medium text-slate-200 hover:text-white hover:bg-white/5 transition-all">
              Pricing
            </Link>

            <Link href="/about" className="px-3.5 py-2 rounded-lg text-sm font-medium text-slate-200 hover:text-white hover:bg-white/5 transition-all">
              About
            </Link>

            <Link href="/contact" className="px-3.5 py-2 rounded-lg text-sm font-medium text-slate-200 hover:text-white hover:bg-white/5 transition-all">
              Contact
            </Link>
          </nav>

          {/* Right Action */}
          <div className="hidden lg:flex items-center gap-3">
            <Link
              href="/demo"
              className="btn-primary text-sm py-2.5 px-5 shadow-[0_0_25px_rgba(37,99,235,0.5)] hover:shadow-[0_0_35px_rgba(37,99,235,0.75)]"
            >
              <Sparkles size={14} className="text-cyan-300" /> Book a Demo
            </Link>
          </div>

          {/* Mobile menu trigger */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden p-2 rounded-lg text-slate-200 hover:text-white hover:bg-white/10 transition-colors"
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileOpen && (
        <div className="lg:hidden mobile-menu border-t border-cyan-500/20 max-h-[85vh] overflow-y-auto">
          <div className="px-4 py-5 space-y-2">
            <Link href="/" onClick={() => setMobileOpen(false)} className="block px-3 py-2 rounded-lg text-sm font-medium text-slate-200 hover:bg-blue-600/15">
              Home
            </Link>
            <Link href="/services/school-erp" onClick={() => setMobileOpen(false)} className="block px-3 py-2 rounded-lg text-sm font-medium text-slate-200 hover:bg-blue-600/15">
              School &amp; College ERP
            </Link>
            <Link href="/services/hrms" onClick={() => setMobileOpen(false)} className="block px-3 py-2 rounded-lg text-sm font-medium text-slate-200 hover:bg-blue-600/15">
              Smart HRMS &amp; Payroll
            </Link>
            <Link href="/services/ai-automation" onClick={() => setMobileOpen(false)} className="block px-3 py-2 rounded-lg text-sm font-medium text-slate-200 hover:bg-blue-600/15">
              AI Automation
            </Link>
            <Link href="/services/whatsapp-automation" onClick={() => setMobileOpen(false)} className="block px-3 py-2 rounded-lg text-sm font-medium text-slate-200 hover:bg-blue-600/15">
              WhatsApp Integration
            </Link>
            <Link href="/services" onClick={() => setMobileOpen(false)} className="block px-3 py-2 rounded-lg text-sm font-medium text-slate-200 hover:bg-blue-600/15">
              All 12 Solutions
            </Link>
            <Link href="/pricing" onClick={() => setMobileOpen(false)} className="block px-3 py-2 rounded-lg text-sm font-medium text-slate-200 hover:bg-blue-600/15">
              Pricing
            </Link>
            <Link href="/about" onClick={() => setMobileOpen(false)} className="block px-3 py-2 rounded-lg text-sm font-medium text-slate-200 hover:bg-blue-600/15">
              About Us
            </Link>
            <Link href="/contact" onClick={() => setMobileOpen(false)} className="block px-3 py-2 rounded-lg text-sm font-medium text-slate-200 hover:bg-blue-600/15">
              Contact
            </Link>

            <div className="pt-4 border-t border-cyan-500/20">
              <Link href="/demo" onClick={() => setMobileOpen(false)} className="btn-primary w-full justify-center text-sm py-3">
                <Sparkles size={14} /> Book a Demo
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
