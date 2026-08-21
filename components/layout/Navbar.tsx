'use client'
import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import {
  Menu, X, ChevronDown, Sparkles, GraduationCap, Building2, Users,
  Bot, MessageCircle, BarChart3, Layers, ArrowRight, ShieldCheck,
  Zap, Cloud, CheckCircle, Smartphone, BookOpen, Stethoscope, DollarSign
} from 'lucide-react'

const WHAT_WE_DO_MENU = {
  col1: {
    title: 'Core Institutional ERP',
    links: [
      { label: 'School ERP System', desc: 'Admissions, fees, attendance & exams', href: '/services/school-erp' },
      { label: 'College & University ERP', desc: 'Multi-campus academic management', href: '/services/college-erp' },
      { label: 'Hospital & Clinic OPD', desc: 'Patient records, appointments & billing', href: '/services/hospital-opd' },
      { label: 'Custom Cloud ERP', desc: 'Bespoke scalable enterprise architecture', href: '/services/custom-cloud-erp' },
    ]
  },
  col2: {
    title: 'Workforce & Business',
    links: [
      { label: 'Smart HRMS & Payroll', desc: 'Biometric check-in, payroll & appraisal', href: '/services/hrms' },
      { label: 'Sales CRM & Billing', desc: 'Deals pipeline, quotes & automated invoices', href: '/services/sales-erp' },
      { label: 'Inventory & Assets', desc: 'Stock control & purchase management', href: '/services/inventory' },
      { label: 'Pay-As-You-Go ERP', desc: 'Affordable modular tier for startups', href: '/services/payg-erp' },
    ]
  },
  col3: {
    title: 'AI & Automation Hub',
    links: [
      { label: 'AI Business Automation', desc: 'Autonomous tasks & smart triggers', href: '/services/ai-automation' },
      { label: 'WhatsApp Business Hub', desc: 'Automated parent alerts & instant bots', href: '/services/whatsapp-automation' },
      { label: 'Digital Transformation', desc: 'Legacy workflow modernization', href: '/services/digital-transformation' },
      { label: 'Web & Mobile Portals', desc: 'Parent, teacher & student apps', href: '/services/website-development' },
    ]
  },
  featured: {
    tag: 'FEATURED LAUNCH',
    title: 'OnePlatform360 AI Operating Hub',
    desc: 'A unified leap forward in harnessing autonomous AI to streamline campus operations, fee recovery, and parent communications.',
    href: '/services/ai-automation',
    cta: 'Explore AI Hub'
  }
}

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
        ? 'bg-[#0a1628] border-b border-cyan-500/25 shadow-[0_8px_32px_rgba(3,8,18,0.85)]'
        : 'bg-[#0b192e] border-b border-cyan-500/15'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-[74px]">

          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group shrink-0">
            <div className="relative w-10 h-10 shrink-0 transition-transform duration-300 group-hover:scale-105">
              <svg viewBox="0 0 40 40" className="w-10 h-10 drop-shadow-[0_0_14px_rgba(56,189,248,0.7)]">
                <defs>
                  <linearGradient id="navOpGrad" x1="4" y1="4" x2="36" y2="36" gradientUnits="userSpaceOnUse">
                    <stop offset="0%" stopColor="#38bdf8" />
                    <stop offset="50%" stopColor="#2563eb" />
                    <stop offset="100%" stopColor="#f97316" />
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
              <span className="hidden sm:block text-[8px] font-semibold uppercase tracking-[0.2em] text-cyan-300/80 mt-0.5">
                Enterprise Cloud &amp; AI
              </span>
            </div>
          </Link>

          {/* Clean EXL-Style Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1" ref={megaRef}>
            <Link href="/" className="px-3.5 py-2 rounded-lg text-sm font-medium text-slate-200 hover:text-white hover:bg-white/5 transition-all">
              Home
            </Link>

            {/* "What we do" EXL-Style Mega Menu Trigger */}
            <div className="relative">
              <button
                onClick={() => setMegaOpen(!megaOpen)}
                className={`flex items-center gap-1.5 px-3.5 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                  megaOpen
                    ? 'text-cyan-300 bg-cyan-500/15 border border-cyan-500/35'
                    : 'text-slate-200 hover:text-white hover:bg-white/5'
                }`}
              >
                What we do
                <ChevronDown size={14} className={`transition-transform duration-300 ${megaOpen ? 'rotate-180 text-cyan-300' : 'text-slate-400'}`} />
              </button>

              {/* 100% Solid Opaque EXL-Style Mega Panel */}
              {megaOpen && (
                <div className="absolute top-[calc(100%+12px)] -left-44 w-[960px] rounded-2xl border border-cyan-500/30 bg-[#0d203b] shadow-[0_30px_90px_rgba(0,0,0,0.95)] p-7 animate-fade-in z-50">
                  <div className="grid grid-cols-12 gap-7">

                    {/* Column 1 */}
                    <div className="col-span-3 space-y-4">
                      <div className="text-xs font-bold uppercase tracking-wider text-cyan-300 pb-2 border-b border-cyan-500/20">
                        {WHAT_WE_DO_MENU.col1.title}
                      </div>
                      <div className="space-y-3">
                        {WHAT_WE_DO_MENU.col1.links.map((item) => (
                          <Link
                            key={item.label}
                            href={item.href}
                            onClick={() => setMegaOpen(false)}
                            className="block group"
                          >
                            <div className="text-xs font-semibold text-white group-hover:text-cyan-300 transition-colors">
                              {item.label}
                            </div>
                            <div className="text-[11px] text-slate-300 leading-snug mt-0.5">
                              {item.desc}
                            </div>
                          </Link>
                        ))}
                      </div>
                    </div>

                    {/* Column 2 */}
                    <div className="col-span-3 space-y-4">
                      <div className="text-xs font-bold uppercase tracking-wider text-cyan-300 pb-2 border-b border-cyan-500/20">
                        {WHAT_WE_DO_MENU.col2.title}
                      </div>
                      <div className="space-y-3">
                        {WHAT_WE_DO_MENU.col2.links.map((item) => (
                          <Link
                            key={item.label}
                            href={item.href}
                            onClick={() => setMegaOpen(false)}
                            className="block group"
                          >
                            <div className="text-xs font-semibold text-white group-hover:text-cyan-300 transition-colors">
                              {item.label}
                            </div>
                            <div className="text-[11px] text-slate-300 leading-snug mt-0.5">
                              {item.desc}
                            </div>
                          </Link>
                        ))}
                      </div>
                    </div>

                    {/* Column 3 */}
                    <div className="col-span-3 space-y-4">
                      <div className="text-xs font-bold uppercase tracking-wider text-cyan-300 pb-2 border-b border-cyan-500/20">
                        {WHAT_WE_DO_MENU.col3.title}
                      </div>
                      <div className="space-y-3">
                        {WHAT_WE_DO_MENU.col3.links.map((item) => (
                          <Link
                            key={item.label}
                            href={item.href}
                            onClick={() => setMegaOpen(false)}
                            className="block group"
                          >
                            <div className="text-xs font-semibold text-white group-hover:text-cyan-300 transition-colors">
                              {item.label}
                            </div>
                            <div className="text-[11px] text-slate-300 leading-snug mt-0.5">
                              {item.desc}
                            </div>
                          </Link>
                        ))}
                      </div>
                    </div>

                    {/* Column 4: EXL-Style Featured Box */}
                    <div className="col-span-3">
                      <div className="rounded-xl bg-gradient-to-br from-[#102747] via-[#0d223f] to-[#0a182e] border border-cyan-500/30 p-5 h-full flex flex-col justify-between shadow-lg">
                        <div>
                          <div className="flex items-center justify-between mb-3">
                            <span className="text-[10px] font-bold text-amber-400 tracking-wider">
                              {WHAT_WE_DO_MENU.featured.tag}
                            </span>
                            <Sparkles size={13} className="text-cyan-300" />
                          </div>
                          <h4 className="font-display font-bold text-sm text-white mb-2 leading-snug">
                            {WHAT_WE_DO_MENU.featured.title}
                          </h4>
                          <p className="text-[11px] text-slate-300 leading-relaxed mb-4">
                            {WHAT_WE_DO_MENU.featured.desc}
                          </p>
                        </div>
                        <Link
                          href={WHAT_WE_DO_MENU.featured.href}
                          onClick={() => setMegaOpen(false)}
                          className="inline-flex items-center gap-1.5 text-xs font-bold text-cyan-300 hover:text-white transition-colors"
                        >
                          {WHAT_WE_DO_MENU.featured.cta} <ArrowRight size={13} />
                        </Link>
                      </div>
                    </div>

                  </div>
                </div>
              )}
            </div>

            <Link href="/services" className="px-3.5 py-2 rounded-lg text-sm font-medium text-slate-200 hover:text-white hover:bg-white/5 transition-all">
              Solutions
            </Link>

            <Link href="/pricing" className="px-3.5 py-2 rounded-lg text-sm font-medium text-slate-200 hover:text-white hover:bg-white/5 transition-all">
              Pricing
            </Link>

            <Link href="/blog" className="px-3.5 py-2 rounded-lg text-sm font-medium text-slate-200 hover:text-white hover:bg-white/5 transition-all">
              Blog
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
        <div className="lg:hidden mobile-menu border-t border-cyan-500/20 max-h-[85vh] overflow-y-auto bg-[#0a1628]">
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
              All Solutions
            </Link>
            <Link href="/pricing" onClick={() => setMobileOpen(false)} className="block px-3 py-2 rounded-lg text-sm font-medium text-slate-200 hover:bg-blue-600/15">
              Pricing
            </Link>
            <Link href="/blog" onClick={() => setMobileOpen(false)} className="block px-3 py-2 rounded-lg text-sm font-medium text-slate-200 hover:bg-blue-600/15">
              Blog &amp; Insights
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
