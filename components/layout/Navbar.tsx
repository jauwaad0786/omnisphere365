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
    category: 'Core ERP',
    items: [
      { label: 'School ERP', desc: 'Admissions, fees, attendance & exams', href: '/services/school-erp', icon: GraduationCap, color: '#38bdf8' },
      { label: 'College / University ERP', desc: 'Higher-ed multi-department management', href: '/services/college-erp', icon: Building2, color: '#818cf8' },
      { label: 'Hospital & Clinic OPD', desc: 'Patient records, billing & appointments', href: '/services/hospital-opd', icon: ShieldCheck, color: '#f43f5e' },
      { label: 'Custom Cloud ERP', desc: 'Bespoke ERP built for enterprise scale', href: '/services/custom-cloud-erp', icon: Cloud, color: '#60a5fa' },
    ]
  },
  {
    category: 'Business & Workforce',
    items: [
      { label: 'Smart HRMS', desc: 'Recruitment, payroll, biometric attendance', href: '/services/hrms', icon: Users, color: '#a78bfa' },
      { label: 'Sales CRM & Pipeline', desc: 'Deals, quotations & revenue tracking', href: '/services/sales-erp', icon: BarChart3, color: '#fb923c' },
      { label: 'Inventory & Assets', desc: 'Stock levels, purchase orders & barcode', href: '/services/inventory', icon: Layers, color: '#34d399' },
      { label: 'Pay-As-You-Go ERP', desc: 'Usage-based affordable tier for startups', href: '/services/payg-erp', icon: Zap, color: '#fbbf24' },
    ]
  },
  {
    category: 'AI & Automations',
    items: [
      { label: 'AI Business Automation', desc: 'Autonomous workflows & smart analytics', href: '/services/ai-automation', icon: Bot, color: '#a855f7' },
      { label: 'WhatsApp Automation', desc: 'Instant alerts, fees reminders & bots', href: '/services/whatsapp-automation', icon: MessageCircle, color: '#22c55e' },
      { label: 'Digital Transformation', desc: 'Legacy system modernization & migration', href: '/services/digital-transformation', icon: Zap, color: '#38bdf8' },
      { label: 'Website & App Development', desc: 'Modern responsive portals & native apps', href: '/services/website-development', icon: Smartphone, color: '#f472b6' },
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
        ? 'bg-[#070c1b]/90 backdrop-blur-xl border-b border-blue-500/20 shadow-[0_4px_30px_rgba(0,0,0,0.5)]'
        : 'bg-[#070c1b]/70 backdrop-blur-md border-b border-blue-500/10'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-[72px]">

          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group shrink-0">
            <div className="relative w-10 h-10 shrink-0 transition-transform duration-300 group-hover:scale-105">
              <svg viewBox="0 0 40 40" className="w-10 h-10 drop-shadow-[0_0_12px_rgba(59,130,246,0.6)]">
                <defs>
                  <linearGradient id="navOpGrad" x1="4" y1="4" x2="36" y2="36" gradientUnits="userSpaceOnUse">
                    <stop offset="0%" stopColor="#38bdf8" />
                    <stop offset="50%" stopColor="#2563eb" />
                    <stop offset="100%" stopColor="#a855f7" />
                  </linearGradient>
                </defs>
                <circle cx="20" cy="20" r="16" fill="none" stroke="url(#navOpGrad)" strokeWidth="3" strokeDasharray="75 25" />
                <circle cx="20" cy="20" r="10" fill="#0c1527" stroke="rgba(59,130,246,0.4)" strokeWidth="1.5" />
                <text x="20" y="24" textAnchor="middle" fill="#38bdf8" fontSize="9" fontWeight="800" fontFamily="sans-serif">360</text>
              </svg>
            </div>
            <div className="flex flex-col leading-none">
              <span className="font-display font-extrabold text-xl tracking-tight text-white flex items-center">
                One<span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-300 to-cyan-400">Platform360</span>
              </span>
              <span className="hidden sm:block text-[8.5px] font-semibold uppercase tracking-[0.18em] text-slate-400 mt-0.5">
                One Platform. Unlimited Possibilities.
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1" ref={megaRef}>
            {/* Platform / Solutions with Mega Menu */}
            <div className="relative">
              <button
                onClick={() => setMegaOpen(!megaOpen)}
                className={`flex items-center gap-1.5 px-3.5 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                  megaOpen ? 'text-white bg-blue-600/20 border border-blue-500/30' : 'text-slate-300 hover:text-white hover:bg-white/5'
                }`}
              >
                Platform
                <ChevronDown size={14} className={`transition-transform duration-300 ${megaOpen ? 'rotate-180 text-blue-400' : 'text-slate-400'}`} />
              </button>

              {/* Mega Dropdown */}
              {megaOpen && (
                <div className="absolute top-full left-1/2 -translate-x-1/2 mt-3 w-[840px] rounded-2xl border border-blue-500/25 bg-[#0a1122]/95 backdrop-blur-2xl shadow-[0_20px_60px_rgba(0,0,0,0.8)] p-6 animate-fade-in z-50">
                  <div className="grid grid-cols-3 gap-6">
                    {SOLUTIONS_MENU.map((col) => (
                      <div key={col.category} className="space-y-3">
                        <div className="text-[11px] font-bold uppercase tracking-wider text-blue-400/90 pb-1 border-b border-blue-500/15">
                          {col.category}
                        </div>
                        <div className="space-y-1.5">
                          {col.items.map((item) => (
                            <Link
                              key={item.label}
                              href={item.href}
                              onClick={() => setMegaOpen(false)}
                              className="flex items-start gap-3 p-2.5 rounded-xl hover:bg-blue-600/10 border border-transparent hover:border-blue-500/20 transition-all duration-200 group"
                            >
                              <div
                                className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0 mt-0.5 transition-transform group-hover:scale-110"
                                style={{ background: `${item.color}15`, border: `1px solid ${item.color}30` }}
                              >
                                <item.icon size={16} style={{ color: item.color }} />
                              </div>
                              <div>
                                <div className="text-xs font-semibold text-white group-hover:text-blue-300 transition-colors">
                                  {item.label}
                                </div>
                                <div className="text-[11px] text-slate-400 line-clamp-1 mt-0.5">
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
                  <div className="mt-5 pt-4 border-t border-blue-500/15 flex items-center justify-between text-xs">
                    <div className="flex items-center gap-2 text-slate-400">
                      <CheckCircle size={14} className="text-emerald-400" />
                      <span>12+ Unified Modules · Enterprise SLA 99.9% · Cloud Ready</span>
                    </div>
                    <Link
                      href="/services"
                      onClick={() => setMegaOpen(false)}
                      className="text-blue-400 hover:text-blue-300 font-semibold flex items-center gap-1 transition-colors"
                    >
                      Explore All Solutions <ArrowRight size={13} />
                    </Link>
                  </div>
                </div>
              )}
            </div>

            <Link href="/services/school-erp" className="px-3.5 py-2 rounded-lg text-sm font-medium text-slate-300 hover:text-white hover:bg-white/5 transition-all">
              ERP
            </Link>
            <Link href="/services/hrms" className="px-3.5 py-2 rounded-lg text-sm font-medium text-slate-300 hover:text-white hover:bg-white/5 transition-all">
              HRMS
            </Link>
            <Link href="/services/ai-automation" className="px-3.5 py-2 rounded-lg text-sm font-medium text-slate-300 hover:text-white hover:bg-white/5 transition-all">
              AI Automation
            </Link>
            <Link href="/services/whatsapp-automation" className="px-3.5 py-2 rounded-lg text-sm font-medium text-slate-300 hover:text-white hover:bg-white/5 transition-all">
              WhatsApp
            </Link>
            <Link href="/services" className="px-3.5 py-2 rounded-lg text-sm font-medium text-slate-300 hover:text-white hover:bg-white/5 transition-all">
              Analytics
            </Link>
            <Link href="/pricing" className="px-3.5 py-2 rounded-lg text-sm font-medium text-slate-300 hover:text-white hover:bg-white/5 transition-all">
              Pricing
            </Link>
          </nav>

          {/* Right Action */}
          <div className="hidden lg:flex items-center gap-3">
            <Link href="/contact" className="px-4 py-2 rounded-lg text-sm font-medium text-slate-300 hover:text-white hover:bg-white/5 transition-all">
              Contact
            </Link>
            <Link href="/demo" className="btn-primary text-sm py-2.5 px-5 shadow-[0_0_20px_rgba(37,99,235,0.4)] hover:shadow-[0_0_30px_rgba(37,99,235,0.6)]">
              <Sparkles size={14} className="text-cyan-300" /> Book a Demo
            </Link>
          </div>

          {/* Mobile menu trigger */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden p-2 rounded-lg text-slate-300 hover:text-white hover:bg-white/10 transition-colors"
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileOpen && (
        <div className="lg:hidden mobile-menu border-t border-blue-500/20 max-h-[85vh] overflow-y-auto">
          <div className="px-4 py-5 space-y-2">
            <Link href="/" onClick={() => setMobileOpen(false)} className="block px-3 py-2 rounded-lg text-sm font-medium text-slate-200 hover:bg-blue-600/10">
              Home
            </Link>
            <Link href="/services/school-erp" onClick={() => setMobileOpen(false)} className="block px-3 py-2 rounded-lg text-sm font-medium text-slate-200 hover:bg-blue-600/10">
              School & College ERP
            </Link>
            <Link href="/services/hrms" onClick={() => setMobileOpen(false)} className="block px-3 py-2 rounded-lg text-sm font-medium text-slate-200 hover:bg-blue-600/10">
              Smart HRMS
            </Link>
            <Link href="/services/ai-automation" onClick={() => setMobileOpen(false)} className="block px-3 py-2 rounded-lg text-sm font-medium text-slate-200 hover:bg-blue-600/10">
              AI Automation
            </Link>
            <Link href="/services/whatsapp-automation" onClick={() => setMobileOpen(false)} className="block px-3 py-2 rounded-lg text-sm font-medium text-slate-200 hover:bg-blue-600/10">
              WhatsApp Integration
            </Link>
            <Link href="/services" onClick={() => setMobileOpen(false)} className="block px-3 py-2 rounded-lg text-sm font-medium text-slate-200 hover:bg-blue-600/10">
              All 12 Solutions
            </Link>
            <Link href="/pricing" onClick={() => setMobileOpen(false)} className="block px-3 py-2 rounded-lg text-sm font-medium text-slate-200 hover:bg-blue-600/10">
              Pricing
            </Link>
            <Link href="/about" onClick={() => setMobileOpen(false)} className="block px-3 py-2 rounded-lg text-sm font-medium text-slate-200 hover:bg-blue-600/10">
              About Us
            </Link>
            <Link href="/contact" onClick={() => setMobileOpen(false)} className="block px-3 py-2 rounded-lg text-sm font-medium text-slate-200 hover:bg-blue-600/10">
              Contact
            </Link>

            <div className="pt-4 border-t border-blue-500/20 space-y-2">
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
