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
  { icon: GraduationCap, label: 'Students', color: '#0284c7' },
  { icon: BookOpen, label: 'Academics', color: '#6366f1' },
  { icon: FileText, label: 'Exams', color: '#0ea5e9' },
  { icon: CheckCircle, label: 'Attendance', color: '#10b981' },
  { icon: CreditCard, label: 'Fees & Finance', color: '#f59e0b' },
  { icon: Calendar, label: 'Timetable', color: '#ec4899' },
  { icon: BookOpenCheck, label: 'Library', color: '#8b5cf6' },
  { icon: BarChart3, label: 'Reports', color: '#14b8a6' },
]

/* ─── HRMS modules ──────────────── */
const HRMS_MODULES = [
  { icon: Users, label: 'Employees', color: '#0284c7' },
  { icon: CheckCircle, label: 'Attendance', color: '#10b981' },
  { icon: Clock, label: 'Leave Mgmt', color: '#f97316' },
  { icon: CreditCard, label: 'Payroll', color: '#8b5cf6' },
  { icon: Award, label: 'Performance', color: '#ec4899' },
  { icon: UserPlus, label: 'Recruitment', color: '#0ea5e9' },
  { icon: FolderOpen, label: 'Documents', color: '#6366f1' },
  { icon: Building2, label: 'Org Chart', color: '#14b8a6' },
]

/* ─── Integration logos ──────────────── */
const INTEGRATIONS = [
  { icon: MessageCircle, label: 'WhatsApp API', color: '#16a34a' },
  { icon: Send, label: 'Email Cloud', color: '#ef4444' },
  { icon: Globe, label: 'Google Drive', color: '#2563eb' },
  { icon: CreditCardIcon, label: 'Razorpay / UPI', color: '#0284c7' },
  { icon: Layers, label: 'Microsoft 365', color: '#6366f1' },
  { icon: Search, label: 'Zoom Live', color: '#0ea5e9' },
  { icon: Code, label: 'RESTful APIs', color: '#8b5cf6' },
  { icon: Webhook, label: 'Webhooks', color: '#10b981' },
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
            className="w-9 h-9 rounded-xl flex items-center justify-center transition-all duration-300 group-hover:scale-110 bg-slate-50 border border-slate-200"
          >
            <item.icon size={15} style={{ color: item.color }} />
          </div>
          <span className="text-[9.5px] text-slate-700 text-center leading-tight font-medium group-hover:text-blue-700 transition-colors">
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
        <div className="text-center mb-16">
          <div className="badge mb-4">
            <Sparkles size={12} className="text-cyan-300" /> Enterprise Product Suites
          </div>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-white">
            Everything You Need to{' '}
            <span className="gradient-text">Run Your Entire Organization</span>
          </h2>
          <p className="text-slate-300 mt-4 max-w-2xl mx-auto text-sm sm:text-base">
            Modern, responsive cloud applications designed to automate management, eliminate paper workflows, and empower leadership.
          </p>
        </div>

        {/* ─── Bento Grid in Crisp White Cards on Navy Background ──── */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

          {/* 01 — Powerful School & Campus ERP */}
          <AnimatedCard delay={0} className="lg:row-span-2">
            <div className="h-full flex flex-col justify-between p-6 sm:p-7 rounded-2xl bg-white text-slate-900 border border-slate-200 shadow-xl hover:shadow-2xl transition-all duration-300">
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-mono font-bold text-orange-600">01</span>
                  <span className="text-[10px] px-2.5 py-0.5 rounded-full bg-blue-100 text-blue-800 border border-blue-200 font-bold uppercase">
                    Institutional Flagship
                  </span>
                </div>
                <h3 className="font-display font-bold text-xl text-slate-900 mb-2">School &amp; College ERP</h3>
                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-4">
                  Complete digital transformation for schools and universities — student enrollment, attendance, gradebooks, fees, and parent portals.
                </p>

                {/* Real classroom showcase photo */}
                <div className="relative aspect-[16/9] rounded-xl overflow-hidden mb-4 border border-slate-200 shadow-md group">
                  <Image
                    src="/school-erp-showcase.jpg"
                    alt="School Management ERP Classroom Showcase"
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>

                <IconGrid items={ERP_MODULES} />
              </div>

              <div className="pt-5 border-t border-slate-200 mt-5">
                <Link href="/services/school-erp" className="inline-flex items-center gap-1.5 text-sm font-bold text-blue-600 hover:text-blue-800 group">
                  Explore School ERP Modules <ArrowRight size={14} className="text-orange-500 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          </AnimatedCard>

          {/* 02 — Smart HRMS & Payroll */}
          <AnimatedCard delay={0.1}>
            <div className="h-full flex flex-col justify-between p-6 rounded-2xl bg-white text-slate-900 border border-slate-200 shadow-xl hover:shadow-2xl transition-all duration-300">
              <div>
                <div className="text-xs font-mono font-bold text-orange-600 mb-2">02</div>
                <h3 className="font-display font-bold text-lg text-slate-900 mb-1.5">Smart HRMS &amp; Payroll</h3>
                <p className="text-slate-600 text-xs leading-relaxed mb-3">
                  Workforce management from biometric check-in to automated salary generation and tax compliance.
                </p>

                {/* Real HRMS showcase photo */}
                <div className="relative aspect-[16/8] rounded-xl overflow-hidden mb-3 border border-slate-200 shadow-sm group">
                  <Image
                    src="/hrms-showcase.jpg"
                    alt="Smart HRMS Corporate Team"
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>

                <IconGrid items={HRMS_MODULES.slice(0, 4)} />
              </div>

              <div className="pt-4 border-t border-slate-200 mt-4">
                <Link href="/services/hrms" className="inline-flex items-center gap-1 text-xs font-bold text-purple-600 hover:text-purple-800 group">
                  Explore HRMS Suite <ArrowRight size={12} className="text-orange-500 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          </AnimatedCard>

          {/* 03 — AI Business Automation */}
          <AnimatedCard delay={0.15}>
            <div className="h-full flex flex-col justify-between p-6 rounded-2xl bg-white text-slate-900 border border-slate-200 shadow-xl hover:shadow-2xl transition-all duration-300">
              <div>
                <div className="text-xs font-mono font-bold text-orange-600 mb-2">03</div>
                <h3 className="font-display font-bold text-lg text-slate-900 mb-1.5">AI Automation Engine</h3>
                <p className="text-slate-600 text-xs leading-relaxed mb-3">
                  Automate manual administrative routines, auto-generate report cards, and trigger instant reminders.
                </p>

                {/* Real AI Automation showcase photo */}
                <div className="relative aspect-[16/8] rounded-xl overflow-hidden mb-3 border border-slate-200 shadow-sm group">
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
                    <div key={item.label} className="flex items-center justify-between text-[11px] px-2.5 py-1.5 rounded-lg bg-slate-50 border border-slate-200">
                      <span className="text-slate-800 font-semibold">{item.label}</span>
                      <span className="text-emerald-700 font-bold text-[10px] flex items-center gap-1">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" /> {item.count}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-slate-200 mt-4">
                <Link href="/services/ai-automation" className="inline-flex items-center gap-1 text-xs font-bold text-emerald-600 hover:text-emerald-800 group">
                  Explore AI Engine <ArrowRight size={12} className="text-orange-500 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          </AnimatedCard>

          {/* 04 — WhatsApp Business Automation */}
          <AnimatedCard delay={0.2}>
            <div className="h-full flex flex-col justify-between p-6 rounded-2xl bg-white text-slate-900 border border-slate-200 shadow-xl hover:shadow-2xl transition-all duration-300">
              <div>
                <div className="text-xs font-mono font-bold text-orange-600 mb-2">04</div>
                <h3 className="font-display font-bold text-lg text-slate-900 mb-1.5">Official WhatsApp Hub</h3>
                <p className="text-slate-600 text-xs leading-relaxed mb-3">
                  Connect instantly with students, parents, and employees via verified WhatsApp Cloud API.
                </p>

                {/* Real WhatsApp showcase photo */}
                <div className="relative aspect-[16/8] rounded-xl overflow-hidden mb-3 border border-slate-200 shadow-sm group">
                  <Image
                    src="/whatsapp-showcase.jpg"
                    alt="WhatsApp Automation Notifications"
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
              </div>

              <div className="pt-4 border-t border-slate-200 mt-4">
                <Link href="/services/whatsapp-automation" className="inline-flex items-center gap-1 text-xs font-bold text-green-600 hover:text-green-800 group">
                  Explore WhatsApp Hub <ArrowRight size={12} className="text-orange-500 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          </AnimatedCard>

          {/* 05 — Analytics & Executive Insights */}
          <AnimatedCard delay={0.25}>
            <div className="h-full flex flex-col justify-between p-6 rounded-2xl bg-white text-slate-900 border border-slate-200 shadow-xl hover:shadow-2xl transition-all duration-300">
              <div>
                <div className="text-xs font-mono font-bold text-orange-600 mb-2">05</div>
                <h3 className="font-display font-bold text-lg text-slate-900 mb-1.5">Analytics &amp; Dashboards</h3>
                <p className="text-slate-600 text-xs leading-relaxed mb-3">
                  High-level institutional control with revenue forecasting, student retention metrics &amp; SLA tracking.
                </p>

                <div className="grid grid-cols-2 gap-2 mb-3">
                  <div className="rounded-xl bg-slate-50 border border-slate-200 p-2.5">
                    <div className="text-[9.5px] text-slate-500 font-medium">Total Collections</div>
                    <div className="text-sm font-extrabold text-slate-900 font-display">₹42.8 Lakhs</div>
                    <div className="text-[9.5px] text-emerald-600 font-bold">+12.6% YoY</div>
                  </div>
                  <div className="rounded-xl bg-slate-50 border border-slate-200 p-2.5">
                    <div className="text-[9.5px] text-slate-500 font-medium">Attendance Rate</div>
                    <div className="text-sm font-extrabold text-slate-900 font-display">94.7%</div>
                    <div className="text-[9.5px] text-emerald-600 font-bold">+2.1% High</div>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-slate-200 mt-4">
                <Link href="/services" className="inline-flex items-center gap-1 text-xs font-bold text-blue-600 hover:text-blue-800 group">
                  Explore Analytics <ArrowRight size={12} className="text-orange-500 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          </AnimatedCard>

          {/* 06 — Integrations & Cloud */}
          <AnimatedCard delay={0.3}>
            <div className="h-full flex flex-col justify-between p-6 rounded-2xl bg-white text-slate-900 border border-slate-200 shadow-xl hover:shadow-2xl transition-all duration-300">
              <div>
                <div className="text-xs font-mono font-bold text-orange-600 mb-2">06</div>
                <h3 className="font-display font-bold text-lg text-slate-900 mb-1.5">Ecosystem &amp; Integrations</h3>
                <p className="text-slate-600 text-xs leading-relaxed mb-3">
                  Sync seamlessly with payment gateways, biometric devices, cloud storage, and communication APIs.
                </p>
                <IconGrid items={INTEGRATIONS} />
              </div>

              <div className="pt-4 border-t border-slate-200 mt-4">
                <Link href="/services" className="inline-flex items-center gap-1 text-xs font-bold text-blue-600 hover:text-blue-800 group">
                  Explore All 12 Integrations <ArrowRight size={12} className="text-orange-500 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          </AnimatedCard>

        </div>
      </div>
    </section>
  )
}
