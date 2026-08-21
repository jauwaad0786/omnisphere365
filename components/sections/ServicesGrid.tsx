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
  { icon: GraduationCap, label: 'Students', color: '#38bdf8' },
  { icon: BookOpen, label: 'Academics', color: '#818cf8' },
  { icon: FileText, label: 'Exams', color: '#0ea5e9' },
  { icon: CheckCircle, label: 'Attendance', color: '#34d399' },
  { icon: CreditCard, label: 'Fees & Finance', color: '#fbbf24' },
  { icon: Calendar, label: 'Timetable', color: '#f472b6' },
  { icon: BookOpenCheck, label: 'Library', color: '#a78bfa' },
  { icon: BarChart3, label: 'Reports', color: '#2dd4bf' },
]

/* ─── HRMS modules ──────────────── */
const HRMS_MODULES = [
  { icon: Users, label: 'Employees', color: '#38bdf8' },
  { icon: CheckCircle, label: 'Attendance', color: '#34d399' },
  { icon: Clock, label: 'Leave Mgmt', color: '#fb923c' },
  { icon: CreditCard, label: 'Payroll', color: '#a78bfa' },
  { icon: Award, label: 'Performance', color: '#f472b6' },
  { icon: UserPlus, label: 'Recruitment', color: '#0ea5e9' },
  { icon: FolderOpen, label: 'Documents', color: '#818cf8' },
  { icon: Building2, label: 'Org Chart', color: '#2dd4bf' },
]

/* ─── Integration logos ──────────────── */
const INTEGRATIONS = [
  { icon: MessageCircle, label: 'WhatsApp API', color: '#22c55e' },
  { icon: Send, label: 'Email Cloud', color: '#f87171' },
  { icon: Globe, label: 'Google Drive', color: '#60a5fa' },
  { icon: CreditCardIcon, label: 'Razorpay / UPI', color: '#38bdf8' },
  { icon: Layers, label: 'Microsoft 365', color: '#818cf8' },
  { icon: Search, label: 'Zoom Live', color: '#38bdf8' },
  { icon: Code, label: 'RESTful APIs', color: '#a78bfa' },
  { icon: Webhook, label: 'Webhooks', color: '#34d399' },
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
    <div className="grid grid-cols-4 gap-2.5 mt-3">
      {items.map((item) => (
        <div key={item.label} className="flex flex-col items-center gap-1 group cursor-pointer">
          <div
            className="w-9 h-9 rounded-xl flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:shadow-[0_0_20px_rgba(56,189,248,0.3)] bg-[#0f223d]"
            style={{ border: `1px solid ${item.color}35` }}
          >
            <item.icon size={15} style={{ color: item.color }} />
          </div>
          <span className="text-[9.5px] text-slate-300 text-center leading-tight font-medium group-hover:text-white transition-colors">
            {item.label}
          </span>
        </div>
      ))}
    </div>
  )
}

export default function ServicesGrid() {
  return (
    <section className="section-pad bg-[#0b192e] relative overflow-hidden" id="solutions">
      {/* Background glow */}
      <div className="glow-orb w-[600px] h-[600px] bg-cyan-600/[0.12] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Section header */}
        <div className="text-center mb-16">
          <div className="badge mb-4">
            <Sparkles size={12} className="text-cyan-300" /> Enterprise Product Suites
          </div>
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-white">
            Everything You Need to{' '}
            <span className="gradient-text">Run Your Entire Organization</span>
          </h2>
          <p className="text-slate-300 mt-4 max-w-2xl mx-auto text-sm sm:text-base">
            Modern, responsive cloud applications designed to automate management, eliminate paper workflows, and empower leadership.
          </p>
        </div>

        {/* ─── Bento Grid ──── */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

          {/* 01 — Powerful School & Campus ERP (large card with real classroom image) */}
          <AnimatedCard delay={0} className="lg:row-span-2">
            <div className="feature-card-num h-full flex flex-col justify-between p-6">
              <div>
                <div className="num flex items-center justify-between">
                  <span>01</span>
                  <span className="text-[10px] px-2.5 py-0.5 rounded-full bg-cyan-500/15 text-cyan-300 border border-cyan-500/30 font-bold uppercase">
                    Institutional Flagship
                  </span>
                </div>
                <h3 className="font-display font-bold text-xl text-white mb-2">School &amp; College ERP</h3>
                <p className="text-slate-300 text-xs sm:text-sm leading-relaxed mb-4">
                  Complete digital transformation for schools and universities — student enrollment, attendance, gradebooks, fees, and parent portals.
                </p>

                {/* Real classroom showcase photo */}
                <div className="relative aspect-[16/9] rounded-xl overflow-hidden mb-4 border border-cyan-500/25 shadow-lg group">
                  <Image
                    src="/school-erp-showcase.jpg"
                    alt="School Management ERP Classroom Showcase"
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0f223d]/90 via-transparent to-transparent" />
                  <div className="absolute bottom-2 left-3 right-3 text-[10px] text-cyan-200 font-medium flex items-center gap-1">
                    <Sparkles size={11} className="text-cyan-300" /> Digital Smartboards &amp; Student Tablets
                  </div>
                </div>

                <IconGrid items={ERP_MODULES} />
              </div>

              <div className="pt-5 border-t border-cyan-500/20 mt-5">
                <Link href="/services/school-erp" className="inline-flex items-center gap-1.5 text-sm font-semibold text-cyan-300 hover:text-white group">
                  Explore School ERP Modules <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          </AnimatedCard>

          {/* 02 — Smart HRMS & Payroll (with real corporate office image) */}
          <AnimatedCard delay={0.1}>
            <div className="feature-card-num h-full flex flex-col justify-between p-6">
              <div>
                <div className="num">02</div>
                <h3 className="font-display font-bold text-lg text-white mb-1.5">Smart HRMS &amp; Payroll</h3>
                <p className="text-slate-300 text-xs leading-relaxed mb-3">
                  Workforce management from biometric check-in to automated salary generation and tax compliance.
                </p>

                {/* Real HRMS showcase photo */}
                <div className="relative aspect-[16/8] rounded-xl overflow-hidden mb-3 border border-purple-500/25 shadow-md group">
                  <Image
                    src="/hrms-showcase.jpg"
                    alt="Smart HRMS Corporate Team"
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>

                <IconGrid items={HRMS_MODULES.slice(0, 4)} />
              </div>

              <div className="pt-4 border-t border-cyan-500/20 mt-4">
                <Link href="/services/hrms" className="inline-flex items-center gap-1 text-xs font-semibold text-purple-300 hover:text-white group">
                  Explore HRMS Suite <ArrowRight size={12} className="group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          </AnimatedCard>

          {/* 03 — AI Business Automation (with high-tech workflow image) */}
          <AnimatedCard delay={0.15}>
            <div className="feature-card-num h-full flex flex-col justify-between p-6">
              <div>
                <div className="num">03</div>
                <h3 className="font-display font-bold text-lg text-white mb-1.5">AI Automation Engine</h3>
                <p className="text-slate-300 text-xs leading-relaxed mb-3">
                  Automate manual administrative routines, auto-generate report cards, and trigger instant reminders.
                </p>

                {/* Real AI Automation showcase photo */}
                <div className="relative aspect-[16/8] rounded-xl overflow-hidden mb-3 border border-emerald-500/25 shadow-md group">
                  <Image
                    src="/ai-automation-showcase.jpg"
                    alt="AI Autonomous Tech Operations"
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>

                <div className="space-y-1.5">
                  {[
                    { label: 'Automated Fee Reminders', count: '100% active' },
                    { label: 'Smart Attendance Alerts', count: 'Instant WhatsApp' },
                  ].map((item) => (
                    <div key={item.label} className="flex items-center justify-between text-[11px] px-2.5 py-1.5 rounded-lg bg-[#0f223d] border border-cyan-500/15">
                      <span className="text-slate-200 font-medium">{item.label}</span>
                      <span className="text-emerald-400 font-semibold text-[10px] flex items-center gap-1">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" /> {item.count}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-cyan-500/20 mt-4">
                <Link href="/services/ai-automation" className="inline-flex items-center gap-1 text-xs font-semibold text-emerald-300 hover:text-white group">
                  Explore AI Engine <ArrowRight size={12} className="group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          </AnimatedCard>

          {/* 04 — WhatsApp Business Automation (with smartphone notification image) */}
          <AnimatedCard delay={0.2}>
            <div className="feature-card-num h-full flex flex-col justify-between p-6">
              <div>
                <div className="num">04</div>
                <h3 className="font-display font-bold text-lg text-white mb-1.5">Official WhatsApp Hub</h3>
                <p className="text-slate-300 text-xs leading-relaxed mb-3">
                  Connect instantly with students, parents, and employees via verified WhatsApp Cloud API.
                </p>

                {/* Real WhatsApp showcase photo */}
                <div className="relative aspect-[16/8] rounded-xl overflow-hidden mb-3 border border-green-500/25 shadow-md group">
                  <Image
                    src="/whatsapp-showcase.jpg"
                    alt="WhatsApp Automation Notifications"
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
              </div>

              <div className="pt-4 border-t border-cyan-500/20 mt-4">
                <Link href="/services/whatsapp-automation" className="inline-flex items-center gap-1 text-xs font-semibold text-green-300 hover:text-white group">
                  Explore WhatsApp Hub <ArrowRight size={12} className="group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          </AnimatedCard>

          {/* 05 — Analytics & Executive Insights */}
          <AnimatedCard delay={0.25}>
            <div className="feature-card-num h-full flex flex-col justify-between p-6">
              <div>
                <div className="num">05</div>
                <h3 className="font-display font-bold text-lg text-white mb-1.5">Analytics &amp; Dashboards</h3>
                <p className="text-slate-300 text-xs leading-relaxed mb-3">
                  High-level institutional control with revenue forecasting, student retention metrics &amp; SLA tracking.
                </p>

                {/* Mini stats */}
                <div className="grid grid-cols-2 gap-2 mb-3">
                  <div className="rounded-xl bg-[#0f223d] border border-cyan-500/20 p-2.5">
                    <div className="text-[9.5px] text-slate-400">Total Collections</div>
                    <div className="text-sm font-bold text-white font-display">₹42.8 Lakhs</div>
                    <div className="text-[9.5px] text-emerald-400 font-semibold">+12.6% YoY</div>
                  </div>
                  <div className="rounded-xl bg-[#0f223d] border border-cyan-500/20 p-2.5">
                    <div className="text-[9.5px] text-slate-400">Attendance Rate</div>
                    <div className="text-sm font-bold text-white font-display">94.7%</div>
                    <div className="text-[9.5px] text-emerald-400 font-semibold">+2.1% High</div>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-cyan-500/20 mt-4">
                <Link href="/services" className="inline-flex items-center gap-1 text-xs font-semibold text-cyan-300 hover:text-white group">
                  Explore Analytics <ArrowRight size={12} className="group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          </AnimatedCard>

          {/* 06 — Integrations & Cloud */}
          <AnimatedCard delay={0.3}>
            <div className="feature-card-num h-full flex flex-col justify-between p-6">
              <div>
                <div className="num">06</div>
                <h3 className="font-display font-bold text-lg text-white mb-1.5">Ecosystem &amp; Integrations</h3>
                <p className="text-slate-300 text-xs leading-relaxed mb-3">
                  Sync seamlessly with payment gateways, biometric devices, cloud storage, and communication APIs.
                </p>
                <IconGrid items={INTEGRATIONS} />
              </div>

              <div className="pt-4 border-t border-cyan-500/20 mt-4">
                <Link href="/services" className="inline-flex items-center gap-1 text-xs font-semibold text-cyan-300 hover:text-white group">
                  Explore All 12 Integrations <ArrowRight size={12} className="group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          </AnimatedCard>

        </div>
      </div>
    </section>
  )
}
