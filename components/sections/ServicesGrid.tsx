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
  Layers, Code, Webhook,
} from 'lucide-react'

/* ─── ERP modules icon grid ──────────────── */
const ERP_MODULES = [
  { icon: GraduationCap, label: 'Students', color: '#2563eb' },
  { icon: BookOpen, label: 'Academics', color: '#7c3aed' },
  { icon: FileText, label: 'Exams', color: '#0ea5e9' },
  { icon: CheckCircle, label: 'Attendance', color: '#16a34a' },
  { icon: CreditCard, label: 'Fees & Finance', color: '#f59e0b' },
  { icon: Calendar, label: 'Timetable', color: '#ec4899' },
  { icon: BookOpenCheck, label: 'Library', color: '#6366f1' },
  { icon: BarChart3, label: 'Reports', color: '#0d9488' },
]

/* ─── HRMS modules ──────────────── */
const HRMS_MODULES = [
  { icon: Users, label: 'Employees', color: '#2563eb' },
  { icon: CheckCircle, label: 'Attendance', color: '#16a34a' },
  { icon: Clock, label: 'Leave Mgmt', color: '#f59e0b' },
  { icon: CreditCard, label: 'Payroll', color: '#7c3aed' },
  { icon: Award, label: 'Performance', color: '#ec4899' },
  { icon: UserPlus, label: 'Recruitment', color: '#0ea5e9' },
  { icon: FolderOpen, label: 'Documents', color: '#6366f1' },
  { icon: Building2, label: 'Org Chart', color: '#0d9488' },
]

/* ─── Integration logos ──────────────── */
const INTEGRATIONS = [
  { icon: MessageCircle, label: 'WhatsApp API', color: '#25d366' },
  { icon: Send, label: 'Email', color: '#ea4335' },
  { icon: Globe, label: 'Google Drive', color: '#4285f4' },
  { icon: CreditCardIcon, label: 'Razorpay', color: '#2563eb' },
  { icon: Layers, label: 'Microsoft 365', color: '#0078d4' },
  { icon: Search, label: 'Zoom', color: '#2d8cff' },
  { icon: Code, label: 'Custom API', color: '#6366f1' },
  { icon: Webhook, label: 'Webhooks', color: '#16a34a' },
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
            className="w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:shadow-md"
            style={{ background: `${item.color}10`, border: `1px solid ${item.color}18` }}
          >
            <item.icon size={16} style={{ color: item.color }} />
          </div>
          <span className="text-[10px] text-slate-500 text-center leading-tight font-medium">{item.label}</span>
        </div>
      ))}
    </div>
  )
}

export default function ServicesGrid() {
  return (
    <section className="section-pad">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section header */}
        <div className="text-center mb-14">
          <div className="badge mb-4">Enterprise Solutions</div>
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-slate-900">
            Everything You Need to{' '}
            <span className="gradient-text">Scale — Without the Complexity</span>
          </h2>
          <p className="text-slate-500 mt-4 max-w-2xl mx-auto">
            Powerful tools designed to simplify operations, improve visibility, and accelerate growth.
          </p>
        </div>

        {/* ─── Bento Grid ──── */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">

          {/* 01 — Powerful ERP (large card) */}
          <AnimatedCard delay={0} className="lg:row-span-2">
            <div className="feature-card-num h-full">
              <div className="absolute top-0 right-0 w-40 h-40 bg-brand-500/[0.03] rounded-full -translate-y-1/2 translate-x-1/2" />
              <div className="relative">
                <div className="num">01</div>
                <h3 className="font-display font-bold text-xl text-slate-900 mb-2">Powerful ERP</h3>
                <p className="text-slate-500 text-sm leading-relaxed mb-4">
                  Manage academics, students, finance, exams, attendance and more — all in one place.
                </p>
                <IconGrid items={ERP_MODULES} />
                <Link href="/services/school-erp" className="inline-flex items-center gap-1.5 text-sm font-semibold text-brand-600 mt-6 group">
                  Explore ERP <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          </AnimatedCard>

          {/* 02 — Smart HRMS */}
          <AnimatedCard delay={0.1}>
            <div className="feature-card-num h-full">
              <div className="num">02</div>
              <h3 className="font-display font-bold text-lg text-slate-900 mb-1.5">Smart HRMS</h3>
              <p className="text-slate-500 text-xs leading-relaxed">
                Complete employee management from onboarding to payroll and performance.
              </p>
              <IconGrid items={HRMS_MODULES} />
              <Link href="/services/hrms" className="inline-flex items-center gap-1 text-xs font-semibold text-brand-600 mt-4 group">
                Explore HRMS <ArrowRight size={12} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </AnimatedCard>

          {/* 03 — AI Automation */}
          <AnimatedCard delay={0.15}>
            <div className="feature-card-num h-full">
              <div className="absolute top-0 right-0 w-32 h-32 bg-violet-500/[0.03] rounded-full -translate-y-1/2 translate-x-1/2" />
              <div className="relative">
                <div className="num">03</div>
                <h3 className="font-display font-bold text-lg text-slate-900 mb-1.5">AI Automation</h3>
                <p className="text-slate-500 text-xs leading-relaxed mb-4">
                  Automate repetitive tasks, build smart workflows and boost productivity with AI.
                </p>

                {/* Workflow diagram */}
                <div className="flex items-center gap-3 mb-4">
                  <div className="flex-1 text-center">
                    <div className="w-10 h-10 rounded-xl bg-brand-50 border border-brand-100 flex items-center justify-center mx-auto mb-1.5">
                      <Zap size={16} className="text-brand-600" />
                    </div>
                    <div className="text-[10px] font-semibold text-slate-700">Trigger</div>
                    <div className="text-[9px] text-slate-400">Fee Payment</div>
                  </div>
                  <ArrowRight size={14} className="text-slate-300 shrink-0" />
                  <div className="flex-1 text-center">
                    <div className="w-10 h-10 rounded-xl bg-violet-50 border border-violet-100 flex items-center justify-center mx-auto mb-1.5">
                      <Bot size={16} className="text-violet-600" />
                    </div>
                    <div className="text-[10px] font-semibold text-slate-700">AI Process</div>
                    <div className="text-[9px] text-slate-400">Check & Validate</div>
                  </div>
                  <ArrowRight size={14} className="text-slate-300 shrink-0" />
                  <div className="flex-1 text-center">
                    <div className="w-10 h-10 rounded-xl bg-success-50 border border-emerald-100 flex items-center justify-center mx-auto mb-1.5">
                      <Send size={16} className="text-success-600" />
                    </div>
                    <div className="text-[10px] font-semibold text-slate-700">Action</div>
                    <div className="text-[9px] text-slate-400">Send Receipt</div>
                  </div>
                </div>

                {/* Active automations */}
                <div className="space-y-1.5">
                  {[
                    { label: 'Fee Reminders', active: true },
                    { label: 'Attendance Alerts', active: true },
                    { label: 'Report Generation', active: true },
                    { label: 'Custom Workflows', active: true },
                  ].map((item) => (
                    <div key={item.label} className="flex items-center justify-between text-[11px] px-2.5 py-1.5 rounded-lg bg-surface-subtle">
                      <span className="text-slate-600 font-medium">{item.label}</span>
                      <span className="text-success-600 font-semibold flex items-center gap-1">
                        <span className="w-1.5 h-1.5 rounded-full bg-success-500" /> Active
                      </span>
                    </div>
                  ))}
                </div>

                <Link href="/services/ai-automation" className="inline-flex items-center gap-1 text-xs font-semibold text-brand-600 mt-4 group">
                  Explore AI <ArrowRight size={12} className="group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          </AnimatedCard>

          {/* 04 — WhatsApp Integration */}
          <AnimatedCard delay={0.2}>
            <div className="feature-card-num h-full">
              <div className="num">04</div>
              <h3 className="font-display font-bold text-lg text-slate-900 mb-1.5">WhatsApp Integration</h3>
              <p className="text-slate-500 text-xs leading-relaxed mb-3">
                Connect instantly with students, parents and employees through automated WhatsApp messages.
              </p>

              {/* Mini chat preview */}
              <div className="rounded-xl bg-surface-subtle border border-surface-border p-3 space-y-2">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-6 h-6 rounded-full bg-[#25d366] flex items-center justify-center">
                    <MessageCircle size={11} className="text-white" />
                  </div>
                  <span className="text-[11px] font-semibold text-slate-700">OnePlatform360</span>
                </div>
                <div className="bg-white rounded-lg p-2.5 border border-surface-border text-[11px] text-slate-600 leading-relaxed">
                  Hello Rahul! 👋<br />
                  Your April fee receipt is ready.
                </div>
                <div className="bg-[#dcf8c6] rounded-lg p-2 text-[11px] text-slate-700 ml-auto w-fit">
                  Thank you! 🙏
                </div>
                <div className="bg-white rounded-lg p-2.5 border border-surface-border text-[10px] text-slate-500 leading-relaxed">
                  📝 Payment reminder: ₹4,500 due on 10 May.
                </div>
              </div>

              <Link href="/services/whatsapp-automation" className="inline-flex items-center gap-1 text-xs font-semibold text-brand-600 mt-4 group">
                Explore WhatsApp <ArrowRight size={12} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </AnimatedCard>

          {/* 05 — Analytics & Insights */}
          <AnimatedCard delay={0.25}>
            <div className="feature-card-num h-full">
              <div className="num">05</div>
              <h3 className="font-display font-bold text-lg text-slate-900 mb-1.5">Analytics & Insights</h3>
              <p className="text-slate-500 text-xs leading-relaxed mb-3">
                Get real-time insights and make better decisions with powerful analytics.
              </p>

              {/* Mini stats */}
              <div className="grid grid-cols-2 gap-2.5 mb-3">
                <div className="rounded-lg bg-surface-subtle border border-surface-border p-2.5">
                  <div className="text-[10px] text-slate-400">Fee Collection</div>
                  <div className="text-sm font-bold text-slate-900">₹42.8L</div>
                  <div className="text-[10px] text-success-600 font-semibold">+12.6%</div>
                </div>
                <div className="rounded-lg bg-surface-subtle border border-surface-border p-2.5">
                  <div className="text-[10px] text-slate-400">Attendance</div>
                  <div className="text-sm font-bold text-slate-900">94.7%</div>
                  <div className="text-[10px] text-success-600 font-semibold">+2.1%</div>
                </div>
              </div>

              {/* Mini bar chart */}
              <div className="rounded-lg bg-surface-subtle border border-surface-border p-3">
                <div className="text-[10px] text-slate-500 font-semibold mb-2">Students Growth</div>
                <div className="flex items-end gap-1.5 h-12">
                  {[40, 55, 48, 65, 58, 72, 80].map((h, i) => (
                    <div key={i} className="flex-1 rounded-t bg-brand-500 transition-all duration-300 hover:bg-brand-600 cursor-pointer"
                      style={{ height: `${h}%`, opacity: 0.3 + i * 0.1 }} />
                  ))}
                </div>
                <div className="flex justify-between mt-1.5 text-[9px] text-slate-400">
                  {['Jan','Feb','Mar','Apr','May','Jun','Jul'].map(m => <span key={m}>{m}</span>)}
                </div>
              </div>

              <Link href="/services" className="inline-flex items-center gap-1 text-xs font-semibold text-brand-600 mt-4 group">
                Explore Analytics <ArrowRight size={12} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </AnimatedCard>

          {/* 06 — Integrations */}
          <AnimatedCard delay={0.3}>
            <div className="feature-card-num h-full">
              <div className="num">06</div>
              <h3 className="font-display font-bold text-lg text-slate-900 mb-1.5">Integrations</h3>
              <p className="text-slate-500 text-xs leading-relaxed mb-3">
                Seamlessly connect with the tools you already use.
              </p>
              <IconGrid items={INTEGRATIONS} />
              <Link href="/services" className="inline-flex items-center gap-1 text-xs font-semibold text-brand-600 mt-4 group">
                Explore Integrations <ArrowRight size={12} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </AnimatedCard>
        </div>
      </div>
    </section>
  )
}
