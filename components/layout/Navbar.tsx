'use client'
import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import { SERVICES } from '../../lib/data'
import { Menu, X, ChevronDown, Boxes } from 'lucide-react'

const NAV_LINKS = [
  { label: 'Home',     href: '/' },
  { label: 'Solutions', href: '/services', hasMega: true },
  { label: 'Pricing',  href: '/pricing' },
  { label: 'About',    href: '/about' },
  { label: 'Careers',  href: '/careers' },
  { label: 'Blog',     href: '/blog' },
  { label: 'Contact',  href: '/contact' },
]

export default function Navbar() {
  const [scrolled,   setScrolled]   = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [megaOpen,   setMegaOpen]   = useState(false)
  const megaRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (megaRef.current && !megaRef.current.contains(e.target as Node)) setMegaOpen(false)
    }
    document.addEventListener('mousedown', handler)
    return () => document.removeEventListener('mousedown', handler)
  }, [])

  const categoryColors: Record<string, string> = {
    Education: 'text-brand-600', Business: 'text-accent-600', Automation: 'text-success-600',
    Healthcare: 'text-red-500', Development: 'text-brand-600', Consulting: 'text-warn-600', AI: 'text-violet-600',
  }

  const grouped = SERVICES.reduce((acc, s) => {
    if (!acc[s.category]) acc[s.category] = []
    acc[s.category].push(s)
    return acc
  }, {} as Record<string, typeof SERVICES>)

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 nav-blur
      ${scrolled ? 'bg-white/90 border-b border-surface-border shadow-[0_1px_2px_rgba(15,23,42,0.04)]' : 'bg-white/60'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">

          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-brand-600 to-accent-500 flex items-center justify-center shadow-glow">
              <Boxes size={16} className="text-white" />
            </div>
            <span className="font-display font-bold text-lg tracking-tight">
              <span className="text-slate-900">OmniSphere</span>
              <span className="text-slate-400 font-normal text-sm ml-0.5">365</span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1" ref={megaRef}>
            {NAV_LINKS.map((link) =>
              link.hasMega ? (
                <div key={link.label} className="relative">
                  <button
                    onClick={() => setMegaOpen(!megaOpen)}
                    className={`flex items-center gap-1 px-3 py-2 rounded-md text-sm font-medium transition-colors
                      ${megaOpen ? 'text-brand-600 bg-brand-50' : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'}`}
                  >
                    {link.label}
                    <ChevronDown size={14} className={`transition-transform ${megaOpen ? 'rotate-180' : ''}`} />
                  </button>

                  {megaOpen && (
                    <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-[720px] rounded-2xl border border-surface-border bg-white shadow-panel p-6">
                      <div className="grid grid-cols-3 gap-6">
                        {Object.entries(grouped).map(([cat, svcs]) => (
                          <div key={cat}>
                            <p className={`text-xs font-bold uppercase tracking-widest mb-3 ${categoryColors[cat] || 'text-slate-400'}`}>{cat}</p>
                            <ul className="space-y-1">
                              {svcs.map((s) => (
                                <li key={s.id}>
                                  <Link
                                    href={`/services/${s.id}`}
                                    onClick={() => setMegaOpen(false)}
                                    className="flex items-center gap-2 px-2 py-1.5 rounded-lg text-sm text-slate-600 hover:text-slate-900 hover:bg-brand-50 transition-colors group"
                                  >
                                    <span className="text-base">{s.icon}</span>
                                    <span className="group-hover:text-brand-700">{s.shortTitle}</span>
                                  </Link>
                                </li>
                              ))}
                            </ul>
                          </div>
                        ))}
                      </div>
                      <div className="mt-4 pt-4 border-t border-surface-border flex items-center justify-between">
                        <p className="text-xs text-slate-400">All 12 enterprise solutions under one roof</p>
                        <Link href="/services" onClick={() => setMegaOpen(false)} className="text-xs text-brand-600 hover:text-brand-700 font-medium">
                          View All Services →
                        </Link>
                      </div>
                    </div>
                  )}
                </div>
              ) : (
                <Link key={link.label} href={link.href}
                  className="px-3 py-2 rounded-md text-sm font-medium text-slate-600 hover:text-slate-900 hover:bg-slate-50 transition-colors">
                  {link.label}
                </Link>
              )
            )}
          </nav>

          {/* CTA Buttons */}
          <div className="hidden lg:flex items-center gap-3">
            <Link href="/contact" className="btn-secondary text-sm py-2 px-4">Contact Sales</Link>
            <Link href="/demo" className="btn-primary text-sm py-2 px-4">Book Demo</Link>
          </div>

          {/* Mobile Toggle */}
          <button onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden p-2 rounded-md text-slate-600 hover:text-slate-900 hover:bg-slate-100">
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="lg:hidden mobile-menu border-t border-surface-border">
          <div className="px-4 py-4 space-y-1 max-h-[80vh] overflow-y-auto">
            {NAV_LINKS.map((link) => (
              <Link key={link.label} href={link.href} onClick={() => setMobileOpen(false)}
                className="block px-3 py-2.5 rounded-lg text-sm font-medium text-slate-600 hover:text-slate-900 hover:bg-brand-50">
                {link.label}
              </Link>
            ))}
            <div className="pt-3 space-y-2 border-t border-surface-border mt-2">
              <Link href="/contact" onClick={() => setMobileOpen(false)} className="block btn-secondary text-sm text-center justify-center">Contact Sales</Link>
              <Link href="/demo" onClick={() => setMobileOpen(false)} className="block btn-primary text-sm text-center justify-center">Book Demo</Link>
            </div>
            <div className="pt-3 border-t border-surface-border">
              <p className="text-xs text-slate-400 mb-2 px-2 uppercase tracking-wider font-medium">Solutions</p>
              {SERVICES.map((s) => (
                <Link key={s.id} href={`/services/${s.id}`} onClick={() => setMobileOpen(false)}
                  className="flex items-center gap-2 px-3 py-2 rounded-lg text-sm text-slate-500 hover:text-slate-900 hover:bg-slate-50">
                  <span>{s.icon}</span>
                  <span>{s.shortTitle}</span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
