'use client'
import Link from 'next/link'
import Image from 'next/image'
import { Mail, Phone, MapPin, Linkedin, Twitter, Youtube } from 'lucide-react'

const FOOTER_SERVICES = [
  { label: 'School ERP', href: '/services/school-erp' },
  { label: 'College ERP', href: '/services/college-erp' },
  { label: 'HRMS', href: '/services/hrms' },
  { label: 'Inventory Management', href: '/services/inventory' },
  { label: 'Sales ERP', href: '/services/sales-erp' },
  { label: 'WhatsApp Automation', href: '/services/whatsapp-automation' },
  { label: 'Hospital OPD', href: '/services/hospital-opd' },
  { label: 'AI Automation', href: '/services/ai-automation' },
]

const FOOTER_COMPANY = [
  { label: 'About Us', href: '/about' },
  { label: 'Careers', href: '/careers' },
  { label: 'Blog & Insights', href: '/blog' },
  { label: 'Contact Us', href: '/contact' },
  { label: 'Book a Demo', href: '/demo' },
  { label: 'Pricing', href: '/pricing' },
]

export default function Footer() {
  return (
    <footer className="bg-surface-dark text-slate-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Top CTA — a light card on the dark band */}
        <div className="pt-14 pb-2">
          <div className="rounded-2xl bg-white shadow-panel p-8 flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-xl font-bold text-slate-900 font-display">Ready to run your business on one platform?</h3>
              <p className="text-slate-500 mt-1 text-sm">Book a free live demo — no credit card required.</p>
            </div>
            <div className="flex gap-3 shrink-0">
              <Link href="/demo" className="btn-primary text-sm py-2.5 px-6 whitespace-nowrap">Book Demo</Link>
              <Link href="/contact" className="btn-secondary text-sm py-2.5 px-6 whitespace-nowrap">Contact Sales</Link>
            </div>
          </div>
        </div>

        {/* Main Footer Grid */}
        <div className="pt-12 pb-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* Brand */}
          <div>
            <Link href="/" className="flex items-center gap-2.5 mb-4">
              <div className="relative w-8 h-8 shrink-0">
                <Image
                  src="/logo.svg"
                  alt="OnePlatform360"
                  width={32}
                  height={32}
                  className="w-8 h-8 object-contain"
                  onError={(e) => { (e.target as HTMLImageElement).style.display = 'none' }}
                />
              </div>
              <span className="font-display font-bold text-lg leading-none">
                <span className="text-white">One</span>
                <span className="bg-gradient-to-r from-brand-400 to-violet-400 bg-clip-text text-transparent">Platform360</span>
              </span>
            </Link>
            <p className="text-slate-400 text-sm leading-relaxed mb-5">
              Empowering organizations, transforming futures — ERP, CRM, HRMS, AI &amp; Automation, unified on one enterprise cloud platform.
            </p>
            <div className="space-y-2.5 text-sm text-slate-400">
              <div className="flex items-center gap-2 hover:text-accent-400 transition-colors">
                <Mail size={14} className="text-accent-400 shrink-0" />
                <a href="mailto:shaikhjauwaad@gmail.com">shaikhjauwaad@gmail.com</a>
              </div>
              <div className="flex items-center gap-2 hover:text-accent-400 transition-colors">
                <Phone size={14} className="text-accent-400 shrink-0" />
                <a href="tel:+916207947958">+91 62079 47958</a>
              </div>
              <div className="flex items-center gap-2">
                <MapPin size={14} className="text-accent-400 shrink-0" />
                <span>Delhi NCR, India</span>
              </div>
            </div>
            <div className="flex gap-3 mt-6">
              {[
                { icon: Linkedin, href: '#' },
                { icon: Twitter, href: '#' },
                { icon: Youtube, href: '#' },
              ].map(({ icon: Icon, href }, i) => (
                <a key={i} href={href}
                  className="w-9 h-9 rounded-lg bg-white/5 border border-surface-darkBorder flex items-center justify-center text-slate-400 hover:text-accent-400 hover:border-accent-500/40 transition-all">
                  <Icon size={15} />
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">Solutions</h4>
            <ul className="space-y-2.5">
              {FOOTER_SERVICES.map((s) => (
                <li key={s.label}>
                  <Link href={s.href} className="text-sm text-slate-400 hover:text-accent-400 transition-colors">{s.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">Company</h4>
            <ul className="space-y-2.5">
              {FOOTER_COMPANY.map((s) => (
                <li key={s.label}>
                  <Link href={s.href} className="text-sm text-slate-400 hover:text-accent-400 transition-colors">{s.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">Stay Updated</h4>
            <p className="text-sm text-slate-400 mb-4">Get product updates and enterprise ERP insights in your inbox.</p>
            <div className="space-y-2">
              <input type="email" placeholder="Enter your email"
                className="w-full bg-white/5 border border-surface-darkBorder rounded-lg px-4 py-2.5 text-sm text-white placeholder:text-slate-500 outline-none focus:border-accent-500/50 transition-colors" />
              <button className="btn-primary w-full justify-center text-sm py-2.5">Subscribe →</button>
            </div>
            <p className="text-xs text-slate-500 mt-3">No spam. Unsubscribe anytime.</p>

            {/* WhatsApp CTA */}
            <a href="https://wa.me/916207947958" target="_blank" rel="noopener noreferrer"
              className="mt-5 flex items-center gap-2.5 px-4 py-3 rounded-xl bg-[#25d366]/10 border border-[#25d366]/25 text-[#3fdb7a] text-sm font-medium hover:bg-[#25d366]/15 transition-all">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              Chat on WhatsApp
            </a>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-6 border-t border-surface-darkBorder flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-500">
          <p>© 2026 OnePlatform360. All rights reserved.</p>
          <div className="flex gap-5">
            <Link href="#" className="hover:text-slate-300 transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-slate-300 transition-colors">Terms of Service</Link>
            <Link href="#" className="hover:text-slate-300 transition-colors">Refund Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
