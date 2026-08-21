'use client'
import Link from 'next/link'
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
    <div className="grid grid-cols-4 gap-2.5 mt-4">
      {items.map((item) => (
        <div key={item.label} className="flex flex-col items-center gap-1.5 group cursor-pointer">
          <div
            className="w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:shadow-[0_0_20px_rgba(59,130,246,0.3)]"
            style={{ background: `${item.color}15`, border: `1px solid ${item.color}30` }}
          >
            <item.icon size={16} style={{ color: item.color }} />
          </div>
          <span className="text-[10px] text-slate-300 text-center leading-tight font-medium group-hover:text-white transition-colors">
            {item.label}
          </span>
        </div>
      ))}
    </div>
  )
}

export default function ServicesGrid() {
  return (
    <section className="section-pad bg-[#070c1b] relative overflow-hidden">
      {/* Background glow */}
      <div className="glow-orb w-[600px] h-[600px] bg-blue-600/[0.08] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Section header */}
        <div className="text-center mb-16">
          <div className="badge mb-4">
            <Sparkles size={12} className="text-blue-400" /> Enterprise Solutions
          </div>
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-white">
            Everything You Need to{' '}
            <span className="gradient-text">Scale — Without the Complexity</span>
          </h2>
          <p className="text-slate-400 mt-4 max-w-2xl mx-auto text-sm sm:text-base">
            Powerful tools designed to simplify operations, improve visibility, and accelerate growth across your organisation.
          </p>
        </div>

        {/* ─── Bento Grid ──── */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

          {/* 01 — Powerful ERP (large card) */}
          <AnimatedCard delay={0} className="lg:row-span-2">
            <div className="feature-card-num h-full flex flex-col justify-between">
              <div className="absolute top-0 right-0 w-48 h-48 bg-blue-500/[0.06] rounded-full -translate-y-1/2 translate-x-1/2" />
              <div className="relative">
                <div className="num flex items-center justify-between">
                  <span>01</span>
                  <span className="text-[10px] px-2 py-0.5 rounded-full bg-blue-500/10 text-blue-400 border border-blue-500/20 font-semibold uppercase">Flagship</span>
                </div>
                <h3 className="font-display font-bold text-xl text-white mb-2">Powerful ERP</h3>
                <p className="text-slate-400 text-sm leading-relaxed mb-4">
                  Manage academics, students, finance, exams, attendance and more — all in one centralized cloud platform.
                </p>
                <IconGrid items={ERP_MODULES} />
              </div>
              <div className="pt-6 border-t border-blue-500/15 mt-6">
                <Link href="/services/school-erp" className="inline-flex items-center gap-1.5 text-sm font-semibold text-blue-400 hover:text-blue-300 group">
                  Explore ERP Solutions <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          </AnimatedCard>

          {/* 02 — Smart HRMS */}
          <AnimatedCard delay={0.1}>
            <div className="feature-card-num h-full flex flex-col justify-between">
              <div>
                <div className="num">02</div>
                <h3 className="font-display font-bold text-lg text-white mb-1.5">Smart HRMS</h3>
                <p className="text-slate-400 text-xs leading-relaxed">
                  Complete employee management from recruitment to payroll, tax deductions and appraisal.
                </p>
                <IconGrid items={HRMS_MODULES} />
              </div>
              <div className="pt-4 border-t border-blue-500/15 mt-4">
                <Link href="/services/hrms" className="inline-flex items-center gap-1 text-xs font-semibold text-purple-400 hover:text-purple-300 group">
                  Explore HRMS <ArrowRight size={12} className="group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          </AnimatedCard>

          {/* 03 — AI Automation */}
          <AnimatedCard delay={0.15}>
            <div className="feature-card-num h-full flex flex-col justify-between">
              <div className="absolute top-0 right-0 w-36 h-36 bg-purple-500/[0.06] rounded-full -translate-y-1/2 translate-x-1/2" />
              <div className="relative">
                <div className="num">03</div>
                <h3 className="font-display font-bold text-lg text-white mb-1.5">AI Automation</h3>
                <p className="text-slate-400 text-xs leading-relaxed mb-4">
                  Automate repetitive workflows, sync systems, and generate smart predictive insights.
                </p>

                {/* Workflow diagram */}
                <div className="flex items-center gap-2 mb-4 bg-[#080e1e] p-3 rounded-xl border border-blue-500/15">
                  <div className="flex-1 text-center">
                    <div className="w-8 h-8 rounded-lg bg-blue-500/15 border border-blue-500/30 flex items-center justify-center mx-auto mb-1 text-blue-400">
                      <Zap size={14} />
                    </div>
                    <div className="text-[10px] font-semibold text-white">Trigger</div>
                    <div className="text-[8.5px] text-slate-400">Event / Fee</div>
                  </div>
                  <ArrowRight size={12} className="text-slate-500 shrink-0" />
                  <div className="flex-1 text-center">
                    <div className="w-8 h-8 rounded-lg bg-purple-500/15 border border-purple-500/30 flex items-center justify-center mx-auto mb-1 text-purple-400">
                      <Bot size={14} />
                    </div>
                    <div className="text-[10px] font-semibold text-white">AI Engine</div>
                    <div className="text-[8.5px] text-slate-400">Analyze & Verify</div>
                  </div>
                  <ArrowRight size={12} className="text-slate-500 shrink-0" />
                  <div className="flex-1 text-center">
                    <div className="w-8 h-8 rounded-lg bg-emerald-500/15 border border-emerald-500/30 flex items-center justify-center mx-auto mb-1 text-emerald-400">
                      <Send size={14} />
                    </div>
                    <div className="text-[10px] font-semibold text-white">Action</div>
                    <div className="text-[8.5px] text-slate-400">Dispatched</div>
                  </div>
                </div>

                {/* Active automations */}
                <div className="space-y-1.5">
                  {[
                    { label: 'Auto Fee Reminders', count: '100% active' },
                    { label: 'Attendance Alerts', count: 'Instant SMS/WA' },
                    { label: 'Report Generation', count: 'Weekly AI' },
                  ].map((item) => (
                    <div key={item.label} className="flex items-center justify-between text-[11px] px-2.5 py-1.5 rounded-lg bg-[#080e1e] border border-blue-500/10">
                      <span className="text-slate-300 font-medium">{item.label}</span>
                      <span className="text-emerald-400 font-semibold text-[10px] flex items-center gap-1">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" /> {item.count}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="pt-4 border-t border-blue-500/15 mt-4">
                <Link href="/services/ai-automation" className="inline-flex items-center gap-1 text-xs font-semibold text-emerald-400 hover:text-emerald-300 group">
                  Explore AI Automation <ArrowRight size={12} className="group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          </AnimatedCard>

          {/* 04 — WhatsApp Integration */}
          <AnimatedCard delay={0.2}>
            <div className="feature-card-num h-full flex flex-col justify-between">
              <div>
                <div className="num">04</div>
                <h3 className="font-display font-bold text-lg text-white mb-1.5">WhatsApp Integration</h3>
                <p className="text-slate-400 text-xs leading-relaxed mb-3">
                  Connect instantly with students, parents, and employees through automated official WhatsApp messages.
                </p>

                {/* Mini chat preview */}
                <div className="rounded-xl bg-[#080e1e] border border-emerald-500/20 p-3 space-y-2">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-6 h-6 rounded-full bg-[#25d366] flex items-center justify-center">
                      <MessageCircle size={11} className="text-white" />
                    </div>
                    <span className="text-[11px] font-semibold text-white">OnePlatform360 Bot</span>
                    <span className="text-[9px] text-emerald-400 ml-auto">Verified</span>
                  </div>
                  <div className="bg-[#0c1527] rounded-lg p-2.5 border border-blue-500/15 text-[11px] text-slate-200 leading-relaxed">
                    Hello Rahul! 👋<br />
                    Your Term 2 Fee Receipt has been generated: ₹12,500.
                  </div>
                  <div className="bg-[#065f46] rounded-lg p-2 text-[11px] text-emerald-100 ml-auto w-fit">
                    Receipt downloaded, thanks! 🙏
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-blue-500/15 mt-4">
                <Link href="/services/whatsapp-automation" className="inline-flex items-center gap-1 text-xs font-semibold text-emerald-400 hover:text-emerald-300 group">
                  Explore WhatsApp <ArrowRight size={12} className="group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          </AnimatedCard>

          {/* 05 — Analytics & Insights */}
          <AnimatedCard delay={0.25}>
            <div className="feature-card-num h-full flex flex-col justify-between">
              <div>
                <div className="num">05</div>
                <h3 className="font-display font-bold text-lg text-white mb-1.5">Analytics & Insights</h3>
                <p className="text-slate-400 text-xs leading-relaxed mb-3">
                  Executive command dashboards and AI forecasting for high-level institutional decisions.
                </p>

                {/* Mini stats */}
                <div className="grid grid-cols-2 gap-2.5 mb-3">
                  <div className="rounded-xl bg-[#080e1e] border border-blue-500/15 p-2.5">
                    <div className="text-[9.5px] text-slate-400">Total Collections</div>
                    <div className="text-sm font-bold text-white font-display">₹42.8 Lakhs</div>
                    <div className="text-[9.5px] text-emerald-400 font-semibold">+12.6% YoY</div>
                  </div>
                  <div className="rounded-xl bg-[#080e1e] border border-blue-500/15 p-2.5">
                    <div className="text-[9.5px] text-slate-400">Student Attendance</div>
                    <div className="text-sm font-bold text-white font-display">94.7%</div>
                    <div className="text-[9.5px] text-emerald-400 font-semibold">+2.1% High</div>
                  </div>
                </div>

                {/* Mini bar chart */}
                <div className="rounded-xl bg-[#080e1e] border border-blue-500/15 p-3">
                  <div className="text-[10px] text-slate-300 font-semibold mb-2">Monthly Enrollment Growth</div>
                  <div className="flex items-end gap-1.5 h-12">
                    {[40, 55, 48, 65, 58, 72, 85].map((h, i) => (
                      <div
                        key={i}
                        className="flex-1 rounded-t bg-gradient-to-t from-blue-600 to-cyan-400 transition-all duration-300 hover:opacity-100 opacity-80 cursor-pointer"
                        style={{ height: `${h}%` }}
                      />
                    ))}
                  </div>
                  <div className="flex justify-between mt-1.5 text-[8.5px] text-slate-400">
                    {['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'].map((m) => <span key={m}>{m}</span>)}
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-blue-500/15 mt-4">
                <Link href="/services" className="inline-flex items-center gap-1 text-xs font-semibold text-blue-400 hover:text-blue-300 group">
                  Explore Analytics <ArrowRight size={12} className="group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          </AnimatedCard>

          {/* 06 — Integrations & Cloud */}
          <AnimatedCard delay={0.3}>
            <div className="feature-card-num h-full flex flex-col justify-between">
              <div>
                <div className="num">06</div>
                <h3 className="font-display font-bold text-lg text-white mb-1.5">Ecosystem & Integrations</h3>
                <p className="text-slate-400 text-xs leading-relaxed mb-3">
                  Seamlessly connect with payment gateways, communication APIs, and external databases.
                </p>
                <IconGrid items={INTEGRATIONS} />
              </div>

              <div className="pt-4 border-t border-blue-500/15 mt-4">
                <Link href="/services" className="inline-flex items-center gap-1 text-xs font-semibold text-blue-400 hover:text-blue-300 group">
                  Explore Integrations <ArrowRight size={12} className="group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          </AnimatedCard>

        </div>
      </div>
    </section>
  )
}
