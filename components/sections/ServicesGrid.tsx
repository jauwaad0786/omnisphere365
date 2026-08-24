'use client'
import Link from 'next/link'
import Image from 'next/image'
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import {
  ArrowRight, GraduationCap, BookOpen, FileText, CheckCircle, Calendar,
  BookOpenCheck, BarChart3, Users, Clock, CreditCard, Award,
  UserPlus, Search, FolderOpen, Building2,
  Bot, Zap, MessageCircle, TrendingUp, PieChart, Star,
  Send, Globe, HardDrive, CreditCard as CreditCardIcon,
  Layers, Code, Webhook, Shield, ChevronRight, Sparkles
} from 'lucide-react'

/* ─── ERP modules icon grid ──────────────── */
const ERP_MODULES = [
  { icon: GraduationCap, label: 'Schools', color: '#0284c7' },
  { icon: Building2, label: 'Colleges', color: '#6366f1' },
  { icon: CheckCircle, label: 'Attendance', color: '#10b981' },
  { icon: CreditCard, label: 'Billing & POS', color: '#f59e0b' },
]

/* ─── HRMS modules ──────────────── */
const HRMS_MODULES = [
  { icon: Users, label: 'Employees', color: '#0284c7' },
  { icon: CheckCircle, label: 'Biometrics', color: '#10b981' },
  { icon: Clock, label: 'Shift / Leave', color: '#f97316' },
  { icon: CreditCard, label: 'Auto Payroll', color: '#8b5cf6' },
]

/* ─── Integration logos ──────────────── */
const INTEGRATIONS = [
  { icon: MessageCircle, label: 'WhatsApp', color: '#16a34a' },
  { icon: Send, label: 'Email Cloud', color: '#ef4444' },
  { icon: CreditCardIcon, label: 'Razorpay UPI', color: '#0284c7' },
  { icon: Layers, label: 'AWS Cloud', color: '#6366f1' },
]

function AnimatedCard({ children, delay = 0, className = '' }: { children: React.ReactNode; delay?: number; className?: string }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-50px' })
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay, ease: [0.16, 1, 0.3, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

function IconGrid({ items }: { items: { icon: any; label: string; color: string }[] }) {
  return (
    <div className="grid grid-cols-4 gap-2 mt-3">
      {items.map((item) => (
        <div key={item.label} className="flex flex-col items-center gap-1 group cursor-pointer">
          <div
            className="w-9 h-9 rounded-xl flex items-center justify-center transition-all duration-300 group-hover:scale-110 bg-slate-50 border border-slate-200"
          >
            <item.icon size={15} style={{ color: item.color }} />
          </div>
          <span className="text-[9px] text-slate-700 text-center leading-tight font-medium group-hover:text-blue-700 transition-colors truncate w-full">
            {item.label}
          </span>
        </div>
      ))}
    </div>
  )
}

export default function ServicesGrid() {
  return (
    <section className="section-pad bg-[#091526] relative overflow-hidden" id="solutions">
      {/* Background glow */}
      <div className="glow-orb w-[600px] h-[600px] bg-cyan-600/[0.1] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Section header */}
        <div className="text-center mb-14">
          <div className="badge mb-4">
            <Sparkles size={12} className="text-cyan-300" /> Enterprise Product Suites
          </div>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-white">
            Everything You Need to{' '}
            <span className="gradient-text">Run Your Entire Organization</span>
          </h2>
          <p className="text-slate-300 mt-4 max-w-2xl mx-auto text-sm sm:text-base">
            Modern multi-tenant cloud applications designed to automate management, eliminate paper workflows, and empower leadership across industries.
          </p>
        </div>

        {/* ─── Clean 2 Balanced Rows (3 Cards per Row = 6 Cards Total) ──── */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">

          {/* ──── ROW 1: Card 01 — Multi-Tenant Enterprise ERP ──── */}
          <AnimatedCard delay={0}>
            <div className="h-full flex flex-col justify-between p-6 rounded-2xl bg-white text-slate-900 border border-slate-200 shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all duration-300">
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-mono font-bold text-orange-600">01</span>
                  <span className="text-[10px] px-2.5 py-0.5 rounded-full bg-blue-50 text-blue-700 border border-blue-200 font-bold uppercase">
                    Multi-Tenant Flagship
                  </span>
                </div>
                <h3 className="font-display font-bold text-lg sm:text-xl text-slate-900 mb-1.5">Multi-Tenant Enterprise ERP</h3>
                <p className="text-slate-600 text-xs leading-relaxed mb-3">
                  Unified architecture for Schools, Universities, Hospital OPDs, Gyms, Warehouses, and multi-branch Enterprises.
                </p>

                {/* Real showcase photo */}
                <div className="relative aspect-[16/9] rounded-xl overflow-hidden mb-3 border border-slate-200 shadow-sm group">
                  <Image
                    src="/cloud-infrastructure-showcase.jpg"
                    alt="Multi-Tenant Cloud ERP Architecture"
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>

                <IconGrid items={ERP_MODULES} />
              </div>

              <div className="pt-4 border-t border-slate-100 mt-4">
                <Link href="/services" className="inline-flex items-center gap-1.5 text-xs font-bold text-blue-600 hover:text-blue-800 group">
                  Explore Enterprise ERP Modules <ArrowRight size={13} className="text-orange-500 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          </AnimatedCard>

          {/* ──── ROW 1: Card 02 — Smart HRMS & Payroll ──── */}
          <AnimatedCard delay={0.1}>
            <div className="h-full flex flex-col justify-between p-6 rounded-2xl bg-white text-slate-900 border border-slate-200 shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all duration-300">
              <div>
                <div className="text-xs font-mono font-bold text-orange-600 mb-2">02</div>
                <h3 className="font-display font-bold text-lg sm:text-xl text-slate-900 mb-1.5">Smart HRMS &amp; Payroll</h3>
                <p className="text-slate-600 text-xs leading-relaxed mb-3">
                  Complete workforce management from multi-shift biometric check-in to automated monthly salary generation and tax compliance.
                </p>

                {/* Real HRMS showcase photo */}
                <div className="relative aspect-[16/9] rounded-xl overflow-hidden mb-3 border border-slate-200 shadow-sm group">
                  <Image
                    src="/hrms-showcase.jpg"
                    alt="Smart HRMS Corporate Team"
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>

                <IconGrid items={HRMS_MODULES} />
              </div>

              <div className="pt-4 border-t border-slate-100 mt-4">
                <Link href="/services/hrms" className="inline-flex items-center gap-1.5 text-xs font-bold text-purple-600 hover:text-purple-800 group">
                  Explore HRMS Suite <ArrowRight size={13} className="text-orange-500 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          </AnimatedCard>

          {/* ──── ROW 1: Card 03 — Hospital OPD, Gym & Specialty ERPs ──── */}
          <AnimatedCard delay={0.15}>
            <div className="h-full flex flex-col justify-between p-6 rounded-2xl bg-white text-slate-900 border border-slate-200 shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all duration-300">
              <div>
                <div className="text-xs font-mono font-bold text-orange-600 mb-2">03</div>
                <h3 className="font-display font-bold text-lg sm:text-xl text-slate-900 mb-1.5">Hospital, Gym &amp; Vertical ERPs</h3>
                <p className="text-slate-600 text-xs leading-relaxed mb-3">
                  Specialized operations: Hospital OPD queues &amp; EMRs, Gym turnstile subscriptions, and warehouse inventory POS.
                </p>

                {/* Real Operations showcase photo */}
                <div className="relative aspect-[16/9] rounded-xl overflow-hidden mb-3 border border-slate-200 shadow-sm group">
                  <Image
                    src="/hospital-opd-showcase.jpg"
                    alt="Hospital OPD and Clinical Operations Showcase"
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>

                <div className="space-y-1.5 pt-1">
                  {[
                    { label: 'Hospital OPD & E-Prescriptions', count: '100% Digital' },
                    { label: 'Gym Turnstiles & Auto-Renewals', count: 'Biometric RFID' },
                  ].map((item) => (
                    <div key={item.label} className="flex items-center justify-between text-[11px] px-2.5 py-1.5 rounded-lg bg-slate-50 border border-slate-200">
                      <span className="text-slate-800 font-semibold">{item.label}</span>
                      <span className="text-emerald-700 font-bold text-[10px] flex items-center gap-1">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" /> {item.count}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-slate-100 mt-4">
                <Link href="/services/hospital-opd" className="inline-flex items-center gap-1.5 text-xs font-bold text-rose-600 hover:text-rose-800 group">
                  Explore Vertical ERPs <ArrowRight size={13} className="text-orange-500 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          </AnimatedCard>

          {/* ──── ROW 2: Card 04 — AI Automation Engine ──── */}
          <AnimatedCard delay={0.2}>
            <div className="h-full flex flex-col justify-between p-6 rounded-2xl bg-white text-slate-900 border border-slate-200 shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all duration-300">
              <div>
                <div className="text-xs font-mono font-bold text-orange-600 mb-2">04</div>
                <h3 className="font-display font-bold text-lg sm:text-xl text-slate-900 mb-1.5">AI Automation Engine</h3>
                <p className="text-slate-600 text-xs leading-relaxed mb-3">
                  Automate manual administrative routines, auto-generate business reports, and trigger smart dues recovery.
                </p>

                {/* Real AI Automation showcase photo */}
                <div className="relative aspect-[16/9] rounded-xl overflow-hidden mb-3 border border-slate-200 shadow-sm group">
                  <Image
                    src="/ai-automation-showcase.jpg"
                    alt="AI Autonomous Tech Operations"
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>

                <div className="space-y-1.5 pt-1">
                  {[
                    { label: 'Automated Dues & Fee Reminders', count: '100% active' },
                    { label: 'Smart Biometric Alerts', count: 'Instant WhatsApp' },
                  ].map((item) => (
                    <div key={item.label} className="flex items-center justify-between text-[11px] px-2.5 py-1.5 rounded-lg bg-slate-50 border border-slate-200">
                      <span className="text-slate-800 font-semibold">{item.label}</span>
                      <span className="text-emerald-700 font-bold text-[10px] flex items-center gap-1">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" /> {item.count}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-slate-100 mt-4">
                <Link href="/services/ai-automation" className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-600 hover:text-emerald-800 group">
                  Explore AI Engine <ArrowRight size={13} className="text-orange-500 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          </AnimatedCard>

          {/* ──── ROW 2: Card 05 — Official WhatsApp Business Hub ──── */}
          <AnimatedCard delay={0.25}>
            <div className="h-full flex flex-col justify-between p-6 rounded-2xl bg-white text-slate-900 border border-slate-200 shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all duration-300">
              <div>
                <div className="text-xs font-mono font-bold text-orange-600 mb-2">05</div>
                <h3 className="font-display font-bold text-lg sm:text-xl text-slate-900 mb-1.5">Official WhatsApp Hub</h3>
                <p className="text-slate-600 text-xs leading-relaxed mb-3">
                  Connect instantly with clients, parents, patients, and employees via verified Meta WhatsApp Cloud API with instant receipt links.
                </p>

                {/* Real WhatsApp showcase photo */}
                <div className="relative aspect-[16/9] rounded-xl overflow-hidden mb-3 border border-slate-200 shadow-sm group">
                  <Image
                    src="/whatsapp-showcase.jpg"
                    alt="WhatsApp Automation Notifications"
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>

                <div className="space-y-1.5 pt-1">
                  {[
                    { label: 'Omnichannel Broadcast Delivery', count: '< 2s avg' },
                    { label: 'Instant Payment PDF Receipts', count: 'Automated' },
                  ].map((item) => (
                    <div key={item.label} className="flex items-center justify-between text-[11px] px-2.5 py-1.5 rounded-lg bg-slate-50 border border-slate-200">
                      <span className="text-slate-800 font-semibold">{item.label}</span>
                      <span className="text-green-700 font-bold text-[10px] flex items-center gap-1">
                        <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" /> {item.count}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-slate-100 mt-4">
                <Link href="/services/whatsapp-automation" className="inline-flex items-center gap-1.5 text-xs font-bold text-green-600 hover:text-green-800 group">
                  Explore WhatsApp Hub <ArrowRight size={13} className="text-orange-500 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          </AnimatedCard>

          {/* ──── ROW 2: Card 06 — Analytics & Integrations ──── */}
          <AnimatedCard delay={0.3}>
            <div className="h-full flex flex-col justify-between p-6 rounded-2xl bg-white text-slate-900 border border-slate-200 shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all duration-300">
              <div>
                <div className="text-xs font-mono font-bold text-orange-600 mb-2">06</div>
                <h3 className="font-display font-bold text-lg sm:text-xl text-slate-900 mb-1.5">Analytics &amp; Integrations</h3>
                <p className="text-slate-600 text-xs leading-relaxed mb-3">
                  Executive multi-tenant control with revenue forecasting, member retention metrics &amp; SLA tracking.
                </p>

                {/* Real Analytics showcase photo */}
                <div className="relative aspect-[16/9] rounded-xl overflow-hidden mb-3 border border-slate-200 shadow-sm group">
                  <Image
                    src="/hero-showcase.jpg"
                    alt="Multi-Tenant Analytics Presentation"
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>

                <IconGrid items={INTEGRATIONS} />
              </div>

              <div className="pt-4 border-t border-slate-100 mt-4">
                <Link href="/services" className="inline-flex items-center gap-1.5 text-xs font-bold text-blue-600 hover:text-blue-800 group">
                  Explore All Integrations <ArrowRight size={13} className="text-orange-500 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          </AnimatedCard>

        </div>
      </div>
    </section>
  )
}
