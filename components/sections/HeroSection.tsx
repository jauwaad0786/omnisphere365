'use client'
import { useEffect, useState } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import {
  ArrowRight, ArrowUpRight, GraduationCap, Users, TrendingUp, CheckCircle,
  BarChart3, Shield, Bot, Briefcase, IndianRupee, Sparkles,
} from 'lucide-react'

const COUNTERS = [
  { end: 500, suffix: '+', label: 'Institutions' },
  { end: 120, suffix: 'K+', label: 'Students' },
  { end: 99, suffix: '.9%', label: 'Uptime' },
  { end: 12, suffix: '+', label: 'ERP Modules' },
]

function useCountUp(end: number, duration = 1800) {
  const [count, setCount] = useState(0)
  useEffect(() => {
    let start = 0
    const step = end / (duration / 16)
    const timer = setInterval(() => {
      start += step
      if (start >= end) { setCount(end); clearInterval(timer) }
      else setCount(Math.floor(start))
    }, 16)
    return () => clearInterval(timer)
  }, [end, duration])
  return count
}

function Counter({ end, suffix, label }: { end: number; suffix: string; label: string }) {
  const count = useCountUp(end)
  return (
    <div className="text-center">
      <div className="text-2xl font-bold font-display gradient-text">{count}{suffix}</div>
      <div className="text-xs text-slate-500 mt-0.5">{label}</div>
    </div>
  )
}

type Tab = {
  id: string
  label: string
  icon: any
  color: string
  dashboardTitle: string
  url: string
  kpis: { label: string; value: string; change: string; icon: any; color: string; bg: string }[]
  chartLabel: string
  chartData: number[]
  activity: { text: string; sub: string; time: string; dot: string }[]
}

const TABS: Tab[] = [
  {
    id: 'school', label: 'School ERP', icon: GraduationCap, color: '#2563eb',
    dashboardTitle: 'School Dashboard', url: 'app.omnisphere365.com/school',
    kpis: [
      { label: 'Students', value: '487', change: '+12', icon: Users, color: 'text-brand-600', bg: 'bg-brand-50' },
      { label: 'Fees Today', value: '₹42K', change: '+8%', icon: IndianRupee, color: 'text-success-600', bg: 'bg-success-50' },
      { label: 'Attendance', value: '94%', change: '+2%', icon: CheckCircle, color: 'text-accent-600', bg: 'bg-sky-50' },
    ],
    chartLabel: 'Fee Collection — Last 6 months', chartData: [40, 65, 50, 80, 70, 95],
    activity: [
      { text: 'Aryan Sharma', sub: 'Fee paid ₹8,400', time: '2 min ago', dot: 'bg-success-500' },
      { text: 'Neha Gupta', sub: 'Attendance marked', time: '5 min ago', dot: 'bg-accent-500' },
      { text: 'Class X-B', sub: 'Exam result published', time: '12 min ago', dot: 'bg-brand-500' },
    ],
  },
  {
    id: 'hrms', label: 'HRMS', icon: Briefcase, color: '#7c3aed',
    dashboardTitle: 'HR Dashboard', url: 'app.omnisphere365.com/hrms',
    kpis: [
      { label: 'Employees', value: '248', change: '+5', icon: Users, color: 'text-violet-600', bg: 'bg-violet-50' },
      { label: 'Payroll Run', value: '₹18.6L', change: 'On time', icon: IndianRupee, color: 'text-success-600', bg: 'bg-success-50' },
      { label: 'Open Roles', value: '12', change: '+3', icon: Briefcase, color: 'text-brand-600', bg: 'bg-brand-50' },
    ],
    chartLabel: 'Headcount Growth — Last 6 months', chartData: [55, 60, 68, 72, 78, 90],
    activity: [
      { text: 'Riya Singh', sub: 'Onboarding completed', time: '8 min ago', dot: 'bg-violet-500' },
      { text: 'Payroll', sub: 'October run completed', time: '1 hr ago', dot: 'bg-success-500' },
      { text: 'Karan Mehta', sub: 'Leave request approved', time: '3 hr ago', dot: 'bg-brand-500' },
    ],
  },
  {
    id: 'sales', label: 'Sales CRM', icon: TrendingUp, color: '#ea580c',
    dashboardTitle: 'Sales Dashboard', url: 'app.omnisphere365.com/sales',
    kpis: [
      { label: 'Pipeline', value: '₹2.4Cr', change: '+18%', icon: TrendingUp, color: 'text-warn-600', bg: 'bg-warn-50' },
      { label: 'Deals Won', value: '34', change: '+6', icon: CheckCircle, color: 'text-success-600', bg: 'bg-success-50' },
      { label: 'Win Rate', value: '42%', change: '+4%', icon: BarChart3, color: 'text-brand-600', bg: 'bg-brand-50' },
    ],
    chartLabel: 'Pipeline Value — Last 6 months', chartData: [45, 55, 62, 70, 85, 92],
    activity: [
      { text: 'Acme Corp', sub: 'Deal closed — ₹4.2L', time: '4 min ago', dot: 'bg-warn-500' },
      { text: 'TechWave Pvt Ltd', sub: 'New lead created', time: '20 min ago', dot: 'bg-brand-500' },
      { text: 'Sunrise Schools', sub: 'Quotation sent', time: '1 hr ago', dot: 'bg-success-500' },
    ],
  },
  {
    id: 'ai', label: 'AI Insights', icon: Bot, color: '#16a34a',
    dashboardTitle: 'AI Insights Dashboard', url: 'app.omnisphere365.com/ai',
    kpis: [
      { label: 'Automations', value: '1,204', change: '+22%', icon: Sparkles, color: 'text-success-600', bg: 'bg-success-50' },
      { label: 'Hours Saved', value: '380', change: 'this month', icon: BarChart3, color: 'text-violet-600', bg: 'bg-violet-50' },
      { label: 'Accuracy', value: '96.4%', change: 'model avg', icon: Shield, color: 'text-brand-600', bg: 'bg-brand-50' },
    ],
    chartLabel: 'Automated Tasks — Last 6 months', chartData: [30, 42, 58, 66, 80, 97],
    activity: [
      { text: 'Monthly Report', sub: 'Auto-generated for Finance', time: '1 min ago', dot: 'bg-success-500' },
      { text: 'Inventory SKU #2291', sub: 'Anomaly flagged for review', time: '34 min ago', dot: 'bg-warn-500' },
      { text: 'Support Chatbot', sub: '86 queries resolved today', time: '2 hr ago', dot: 'bg-brand-500' },
    ],
  },
]

export default function HeroSection() {
  const [activeId, setActiveId] = useState(TABS[0].id)
  const tab = TABS.find((t) => t.id === activeId)!

  return (
    <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-24 overflow-hidden grid-pattern">
      {/* Soft glow orbs — very low opacity on white */}
      <div className="glow-orb w-[600px] h-[600px] bg-brand-500/[0.07] -top-32 -left-40" />
      <div className="glow-orb w-[420px] h-[420px] bg-accent-500/[0.06] top-32 -right-20" />
      <div className="glow-orb w-[300px] h-[300px] bg-violet-500/[0.05] bottom-0 left-1/3" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left — Text */}
          <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="space-y-7">
            <div className="badge w-fit">
              <Sparkles size={11} />
              Enterprise Cloud Platform
            </div>

            <h1 className="font-display font-bold text-4xl sm:text-5xl xl:text-[3.4rem] leading-[1.12] tracking-tight text-slate-900">
              The Business <span className="gradient-text">Operating System</span> for Modern Organizations
            </h1>

            <p className="text-slate-600 text-lg leading-relaxed max-w-lg">
              ERP, CRM, HRMS, AI &amp; Automation — unified on one enterprise cloud platform. Built for schools, hospitals, and growing businesses across India and the Gulf.
            </p>

            <div className="flex flex-wrap gap-3">
              <Link href="/demo" className="btn-primary text-base px-6 py-3">
                Book a Demo <ArrowRight size={16} />
              </Link>
              <Link href="/contact" className="btn-secondary text-base px-6 py-3">
                Talk to an Expert
              </Link>
            </div>

            {/* Trust badges */}
            <div className="flex flex-wrap gap-x-5 gap-y-2 pt-1">
              {['99.9% Uptime SLA', '24/7 Support', 'Enterprise-grade Security', 'Free Onboarding'].map((t) => (
                <div key={t} className="flex items-center gap-1.5 text-xs text-slate-500">
                  <CheckCircle size={13} className="text-success-500 shrink-0" />
                  {t}
                </div>
              ))}
            </div>

            {/* Counters */}
            <div className="grid grid-cols-4 gap-4 pt-5 border-t border-surface-border">
              {COUNTERS.map((c) => <Counter key={c.label} {...c} />)}
            </div>
          </motion.div>

          {/* Right — Interactive Dashboard Preview */}
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.1 }} className="relative lg:ml-4">

            {/* Tab switcher */}
            <div className="flex items-center gap-1.5 mb-4 flex-wrap">
              {TABS.map((t) => (
                <button
                  key={t.id}
                  onClick={() => setActiveId(t.id)}
                  className={`tab-pill ${activeId === t.id ? 'active' : ''}`}
                >
                  <t.icon size={14} />
                  {t.label}
                </button>
              ))}
            </div>

            {/* Main dashboard card */}
            <div className="relative">
            <div className="relative rounded-2xl border border-surface-border bg-white overflow-hidden shadow-panel">
              {/* Fake browser bar */}
              <div className="flex items-center gap-2 px-4 py-3 border-b border-surface-border bg-surface-subtle">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-400" />
                  <div className="w-3 h-3 rounded-full bg-amber-400" />
                  <div className="w-3 h-3 rounded-full bg-emerald-400" />
                </div>
                <div className="flex-1 mx-4 px-3 py-1 rounded bg-white border border-surface-border text-xs text-slate-400 font-mono truncate">
                  {tab.url}
                </div>
              </div>

              <AnimatePresence mode="wait">
                <motion.div
                  key={tab.id}
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -6 }}
                  transition={{ duration: 0.25 }}
                  className="p-5 space-y-4"
                >
                  {/* Header row */}
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-xs text-slate-400">Good Morning, Admin</div>
                      <div className="text-slate-900 font-semibold font-display">{tab.dashboardTitle}</div>
                    </div>
                    <div className="badge text-[10px]">
                      <span className="w-1.5 h-1.5 rounded-full bg-success-500 animate-pulse" /> Live
                    </div>
                  </div>

                  {/* Stats row */}
                  <div className="grid grid-cols-3 gap-3">
                    {tab.kpis.map((s) => (
                      <div key={s.label} className="rounded-xl bg-surface-subtle border border-surface-border p-3">
                        <div className={`w-7 h-7 rounded-lg flex items-center justify-center mb-2 ${s.bg}`}>
                          <s.icon size={13} className={s.color} />
                        </div>
                        <div className="text-slate-900 font-bold text-base">{s.value}</div>
                        <div className="text-slate-400 text-[10px]">{s.label}</div>
                        <div className="text-success-600 text-[10px] mt-0.5 font-medium">{s.change}</div>
                      </div>
                    ))}
                  </div>

                  {/* Chart bar mockup */}
                  <div className="rounded-xl bg-surface-subtle border border-surface-border p-4">
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-xs font-medium text-slate-700 flex items-center gap-1.5">
                        <BarChart3 size={12} style={{ color: tab.color }} /> {tab.chartLabel}
                      </span>
                      <ArrowUpRight size={13} className="text-success-500" />
                    </div>
                    <div className="flex items-end gap-2 h-16">
                      {tab.chartData.map((h, i) => (
                        <motion.div
                          key={i}
                          initial={{ scaleY: 0 }}
                          animate={{ scaleY: 1 }}
                          transition={{ duration: 0.5, delay: i * 0.06 }}
                          style={{ height: `${h}%`, background: tab.color, opacity: i === 5 ? 1 : 0.35 + i * 0.1, transformOrigin: 'bottom' }}
                          className="flex-1 rounded-t"
                        />
                      ))}
                    </div>
                    <div className="flex justify-between mt-2 text-[10px] text-slate-400">
                      {['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'].map((m) => <span key={m}>{m}</span>)}
                    </div>
                  </div>

                  {/* Recent activity */}
                  <div className="space-y-2 pt-1">
                    {tab.activity.map((a) => (
                      <div key={a.text + a.sub} className="flex items-center gap-3 text-xs">
                        <div className={`w-1.5 h-1.5 rounded-full shrink-0 ${a.dot}`} />
                        <span className="text-slate-700 font-medium">{a.text}</span>
                        <span className="text-slate-400">{a.sub}</span>
                        <span className="ml-auto text-slate-400">{a.time}</span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Floating cards */}
            <div className="absolute top-24 -right-6 glass rounded-xl px-4 py-3 shadow-card-hover animate-float hidden xl:block">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-success-50 flex items-center justify-center">
                  <CheckCircle size={14} className="text-success-600" />
                </div>
                <div>
                  <div className="text-slate-900 text-xs font-semibold">New Admission</div>
                  <div className="text-success-600 text-[10px]">Just now</div>
                </div>
              </div>
            </div>

            <div className="absolute -bottom-6 -left-6 glass rounded-xl px-4 py-3 shadow-card-hover animate-float-slow hidden xl:block">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-brand-50 flex items-center justify-center">
                  <Shield size={14} className="text-brand-600" />
                </div>
                <div>
                  <div className="text-slate-900 text-xs font-semibold">AI Report Ready</div>
                  <div className="text-brand-600 text-[10px]">Click to view →</div>
                </div>
              </div>
            </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
