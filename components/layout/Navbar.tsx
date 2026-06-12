'use client'
import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import { SERVICES } from '../../lib/data'
import { Menu, X, ChevronDown, Zap } from 'lucide-react'

const NAV_LINKS = [
  { label: 'Home',     href: '/' },
  { label: 'Services', href: '/services', hasMega: true },
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
    Education: 'text-indigo-400', Business: 'text-sky-400', Automation: 'text-green-400',
    Healthcare: 'text-red-400', Development: 'text-blue-400', Consulting: 'text-orange-400', AI: 'text-pink-400',
  }

  const grouped = SERVICES.reduce((acc, s) => {
    if (!acc[s.category]) acc[s.category] = []
    acc[s.category].push(s)
    return acc
  }, {} as Record<string, typeof SERVICES>)

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 nav-blur
      ${scrolled ? 'bg-[#0f0f1a]/90 border-b border-[#1e1e3a] shadow-[0_4px_24px_rgba(0,0,0,0.4)]' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">

          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-indigo-500 to-sky-500 flex items-center justify-center shadow-glow">
              <Zap size={16} className="text-white" />
            </div>
            <span className="font-display font-bold text-lg tracking-tight">
              <span className="gradient-text">OmniSphere</span>
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
                      ${megaOpen ? 'text-indigo-400 bg-indigo-500/10' : 'text-slate-300 hover:text-white hover:bg-white/5'}`}
                  >
                    {link.label}
                    <ChevronDown size={14} className={`transition-transform ${megaOpen ? 'rotate-180' : ''}`} />
                  </button>

                  {megaOpen && (
                    <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-[720px] rounded-2xl border border-[#1e1e3a] bg-[#151528]/98 shadow-[0_24px_64px_rgba(0,0,0,0.6)] backdrop-blur-xl p-6">
                      <div className="grid grid-cols-3 gap-6">
                        {Object.entries(grouped).map(([cat, svcs]) => (
                          <div key={cat}>
                            <p className={`text-xs font-bold uppercase tracking-widest mb-3 ${categoryColors[cat] || 'text-slate-400'}`}>{cat}</p>
                            <ul className="space-y-1">
                              {svcs.map((s) => (
                                <li key={s.id}>
                                  <Link
                                    href={s.available ? `/services/${s.id}` : '/services'}
                                    onClick={() => setMegaOpen(false)}
                                    className="flex items-center gap-2 px-2 py-1.5 rounded-lg text-sm text-slate-300 hover:text-white hover:bg-indigo-500/10 transition-colors group"
                                  >
                                    <span className="text-base">{s.icon}</span>
                                    <span className="group-hover:text-indigo-300">{s.shortTitle}</span>
                                    {!s.available && (
                                      <span className="ml-auto text-[10px] px-1.5 py-0.5 rounded bg-slate-700/60 text-slate-400 font-medium">Soon</span>
                                    )}
                                  </Link>
                                </li>
                              ))}
                            </ul>
                          </div>
                        ))}
                      </div>
                      <div className="mt-4 pt-4 border-t border-[#1e1e3a] flex items-center justify-between">
                        <p className="text-xs text-slate-500">All 12 enterprise solutions under one roof</p>
                        <Link href="/services" onClick={() => setMegaOpen(false)} className="text-xs text-indigo-400 hover:text-indigo-300 font-medium">
                          View All Services →
                        </Link>
                      </div>
                    </div>
                  )}
                </div>
              ) : (
                <Link key={link.label} href={link.href}
                  className="px-3 py-2 rounded-md text-sm font-medium text-slate-300 hover:text-white hover:bg-white/5 transition-colors">
                  {link.label}
                </Link>
              )
            )}
          </nav>

          {/* CTA Buttons */}
          <div className="hidden lg:flex items-center gap-3">
            <Link href="/contact" className="btn-secondary text-sm py-2 px-4">Contact Sales</Link>
            <Link href="/demo" className="btn-primary text-sm py-2 px-4">Book Free Demo</Link>
          </div>

          {/* Mobile Toggle */}
          <button onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden p-2 rounded-md text-slate-300 hover:text-white hover:bg-white/10">
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="lg:hidden mobile-menu border-t border-[#1e1e3a]">
          <div className="px-4 py-4 space-y-1 max-h-[80vh] overflow-y-auto">
            {NAV_LINKS.map((link) => (
              <Link key={link.label} href={link.href} onClick={() => setMobileOpen(false)}
                className="block px-3 py-2.5 rounded-lg text-sm font-medium text-slate-300 hover:text-white hover:bg-indigo-500/10">
                {link.label}
              </Link>
            ))}
            <div className="pt-3 space-y-2 border-t border-[#1e1e3a] mt-2">
              <Link href="/contact" onClick={() => setMobileOpen(false)} className="block btn-secondary text-sm text-center">Contact Sales</Link>
              <Link href="/demo" onClick={() => setMobileOpen(false)} className="block btn-primary text-sm text-center justify-center">Book Free Demo</Link>
            </div>
            <div className="pt-3 border-t border-[#1e1e3a]">
              <p className="text-xs text-slate-500 mb-2 px-2 uppercase tracking-wider font-medium">Services</p>
              {SERVICES.map((s) => (
                <Link key={s.id} href={s.available ? `/services/${s.id}` : '/services'} onClick={() => setMobileOpen(false)}
                  className="flex items-center gap-2 px-3 py-2 rounded-lg text-sm text-slate-400 hover:text-white hover:bg-white/5">
                  <span>{s.icon}</span>
                  <span>{s.shortTitle}</span>
                  {!s.available && <span className="ml-auto text-[10px] text-slate-500">Coming Soon</span>}
                </Link>
              ))}
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
