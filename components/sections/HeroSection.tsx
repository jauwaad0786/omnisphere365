'use client'
import { useEffect, useState, useRef } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence, useInView } from 'framer-motion'
import {
  ArrowRight, GraduationCap, Users, TrendingUp, CheckCircle,
  BarChart3, Shield, Bot, Briefcase, IndianRupee, Sparkles, Cloud,
  BookOpen, Calendar, FileText, Bell, Settings, Search, Plus, MoreHorizontal,
  Activity, PieChart, LineChart, Lock, Layers, Play,
} from 'lucide-react'

/* ─── Top trust strip data ──────────────────────────────── */
const TOP_STATS = [
  { icon: Cloud, label: 'Cloud Powered', sub: 'Access Anytime, Anywhere' },
  { icon: Bot, label: 'AI Automation', sub: 'Smarter Workflows' },
  { icon: Shield, label: 'Secure & Reliable', sub: 'Enterprise Grade' },
  { icon: TrendingUp, label: 'Scalable', sub: 'Built for Growth' },
]

/* ─── Counter data ──────────────────────────────── */
const COUNTERS = [
  { end: 500, suffix: '+', label: 'Institutions' },
  { end: 120, suffix: 'K+', label: 'Students' },
  { end: 99, suffix: '.9%', label: 'Uptime' },
  { end: 12, suffix: '+', label: 'Modules' },
]

function useCountUp(end: number, duration = 1800) {
  const [count, setCount] = useState(0)
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true })

  useEffect(() => {
    if (!inView) return
    let start = 0
    const step = end / (duration / 16)
    const timer = setInterval(() => {
      start += step
      if (start >= end) { setCount(end); clearInterval(timer) }
      else setCount(Math.floor(start))
    }, 16)
    return () => clearInterval(timer)
  }, [end, duration, inView])

  return { count, ref }
}

function Counter({ end, suffix, label }: { end: number; suffix: string; label: string }) {
  const { count, ref } = useCountUp(end)
  return (
    <div className="text-center" ref={ref}>
      <div className="text-2xl font-bold font-display gradient-text">{count}{suffix}</div>
      <div className="text-xs text-slate-500 mt-0.5">{label}</div>
    </div>
  )
}

/* ─── Dashboard Tab Data ──────────────────────────────── */
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
    dashboardTitle: 'School Dashboard', url: 'app.oneplatform360.com/school',
    kpis: [
      { label: 'Total Students', value: '2,480', change: '+12%', icon: Users, color: 'text-brand-600', bg: 'bg-brand-50' },
      { label: 'Fee Collection', value: '₹42.8L', change: '+23%', icon: IndianRupee, color: 'text-success-600', bg: 'bg-success-50' },
      { label: 'Attendance', value: '94.7%', change: '+2.1%', icon: CheckCircle, color: 'text-accent-600', bg: 'bg-sky-50' },
    ],
    chartLabel: 'Fee Collection Trend', chartData: [40, 65, 50, 80, 70, 95],
    activity: [
      { text: 'Fee payment received', sub: '₹8,400 — Class X-A', time: '2 min', dot: 'bg-success-500' },
      { text: 'Attendance marked', sub: 'Class XII-B (94%)', time: '5 min', dot: 'bg-accent-500' },
      { text: 'New admission', sub: 'Aryan Sharma — Class VI', time: '12 min', dot: 'bg-brand-500' },
    ],
  },
  {
    id: 'hrms', label: 'HRMS', icon: Briefcase, color: '#7c3aed',
    dashboardTitle: 'HR Dashboard', url: 'app.oneplatform360.com/hrms',
    kpis: [
      { label: 'Employees', value: '248', change: '+5', icon: Users, color: 'text-violet-600', bg: 'bg-violet-50' },
      { label: 'Payroll Run', value: '₹18.6L', change: 'On time', icon: IndianRupee, color: 'text-success-600', bg: 'bg-success-50' },
      { label: 'Open Roles', value: '12', change: '+3 new', icon: Briefcase, color: 'text-brand-600', bg: 'bg-brand-50' },
    ],
    chartLabel: 'Headcount Growth', chartData: [55, 60, 68, 72, 78, 90],
    activity: [
      { text: 'Riya Singh', sub: 'Onboarding completed', time: '8 min', dot: 'bg-violet-500' },
      { text: 'Payroll', sub: 'October run completed', time: '1 hr', dot: 'bg-success-500' },
      { text: 'Karan Mehta', sub: 'Leave approved', time: '3 hr', dot: 'bg-brand-500' },
    ],
  },
  {
    id: 'sales', label: 'Sales CRM', icon: TrendingUp, color: '#ea580c',
    dashboardTitle: 'Sales Dashboard', url: 'app.oneplatform360.com/sales',
    kpis: [
      { label: 'Pipeline', value: '₹2.4Cr', change: '+18%', icon: TrendingUp, color: 'text-warn-600', bg: 'bg-warn-50' },
      { label: 'Deals Won', value: '34', change: '+6', icon: CheckCircle, color: 'text-success-600', bg: 'bg-success-50' },
      { label: 'Win Rate', value: '42%', change: '+4%', icon: BarChart3, color: 'text-brand-600', bg: 'bg-brand-50' },
    ],
    chartLabel: 'Pipeline Value', chartData: [45, 55, 62, 70, 85, 92],
    activity: [
      { text: 'Acme Corp', sub: 'Deal closed — ₹4.2L', time: '4 min', dot: 'bg-warn-500' },
      { text: 'TechWave Pvt Ltd', sub: 'New lead created', time: '20 min', dot: 'bg-brand-500' },
      { text: 'Sunrise Schools', sub: 'Quotation sent', time: '1 hr', dot: 'bg-success-500' },
    ],
  },
  {
    id: 'ai', label: 'AI Insights', icon: Bot, color: '#16a34a',
    dashboardTitle: 'AI Insights', url: 'app.oneplatform360.com/ai',
    kpis: [
      { label: 'Automations', value: '1,204', change: '+22%', icon: Sparkles, color: 'text-success-600', bg: 'bg-success-50' },
      { label: 'Hours Saved', value: '380', change: 'this month', icon: BarChart3, color: 'text-violet-600', bg: 'bg-violet-50' },
      { label: 'Accuracy', value: '96.4%', change: 'model avg', icon: Shield, color: 'text-brand-600', bg: 'bg-brand-50' },
    ],
    chartLabel: 'Automated Tasks', chartData: [30, 42, 58, 66, 80, 97],
    activity: [
      { text: 'Monthly Report', sub: 'Auto-generated', time: '1 min', dot: 'bg-success-500' },
      { text: 'Anomaly #2291', sub: 'Flagged for review', time: '34 min', dot: 'bg-warn-500' },
      { text: 'Support Bot', sub: '86 queries resolved', time: '2 hr', dot: 'bg-brand-500' },
    ],
  },
]

/* ─── Sidebar nav items for dashboard mockup ──── */
const SIDEBAR_ITEMS = [
  { icon: BarChart3, label: 'Dashboard', active: true },
  { icon: GraduationCap, label: 'Academics' },
  { icon: Users, label: 'Students' },
  { icon: Briefcase, label: 'HRMS' },
  { icon: IndianRupee, label: 'Finance' },
  { icon: Calendar, label: 'Timetable' },
  { icon: Bell, label: 'Communication' },
  { icon: FileText, label: 'Reports' },
]

/* ─── Quick actions for dashboard ──── */
const QUICK_ACTIONS = [
  { icon: Plus, label: 'Add Student', color: '#2563eb' },
  { icon: CheckCircle, label: 'Mark Attendance', color: '#16a34a' },
  { icon: FileText, label: 'Collect Fee', color: '#7c3aed' },
]

/* ─── Mini donut chart SVG ──── */
function DonutChart({ data, colors }: { data: number[]; colors: string[] }) {
  const total = data.reduce((a, b) => a + b, 0)
  let cumulative = 0
  const r = 28
  const c = 2 * Math.PI * r

  return (
    <svg width="80" height="80" viewBox="0 0 80 80">
      {data.map((val, i) => {
        const pct = val / total
        const dasharray = `${pct * c} ${c}`
        const dashoffset = -cumulative * c
        cumulative += pct
        return (
          <circle
            key={i} cx="40" cy="40" r={r}
            fill="none" strokeWidth="8" stroke={colors[i]}
            strokeDasharray={dasharray} strokeDashoffset={dashoffset}
            strokeLinecap="round"
            style={{ transform: 'rotate(-90deg)', transformOrigin: 'center', transition: 'stroke-dasharray 0.8s ease' }}
          />
        )
      })}
      <text x="40" y="40" textAnchor="middle" dominantBaseline="central" className="fill-slate-800 font-bold text-sm" style={{ fontSize: '13px' }}>
        94.7%
      </text>
    </svg>
  )
}

export default function HeroSection() {
  const [activeId, setActiveId] = useState(TABS[0].id)
  const tab = TABS.find((t) => t.id === activeId)!

  /* Auto-rotate tabs every 5s */
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveId(prev => {
        const idx = TABS.findIndex(t => t.id === prev)
        return TABS[(idx + 1) % TABS.length].id
      })
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  return (
    <section className="relative pt-28 pb-16 lg:pt-36 lg:pb-20 overflow-hidden hero-gradient grid-pattern">
      {/* Background glow orbs */}
      <div className="glow-orb w-[700px] h-[700px] bg-brand-500/[0.06] -top-40 -left-48" />
      <div className="glow-orb w-[500px] h-[500px] bg-accent-500/[0.05] top-20 -right-28" />
      <div className="glow-orb w-[350px] h-[350px] bg-violet-500/[0.04] bottom-0 left-1/3" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">

        {/* Top trust strip — desktop only */}
        <div className="hidden md:flex items-center justify-end gap-6 mb-8 flex-wrap">
          {TOP_STATS.map((s) => (
            <div key={s.label} className="flex items-center gap-2.5 group">
              <div className="w-9 h-9 rounded-xl bg-brand-50 border border-brand-100 flex items-center justify-center shrink-0 group-hover:bg-brand-100 transition-all duration-300 group-hover:scale-105">
                <s.icon size={15} className="text-brand-600" />
              </div>
              <div className="leading-tight">
                <div className="text-xs font-semibold text-slate-800">{s.label}</div>
                <div className="text-[10px] text-slate-400">{s.sub}</div>
              </div>
            </div>
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* ──── LEFT — Hero Text ──── */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="space-y-7"
          >
            <div className="badge-glow w-fit">
              <span className="w-1.5 h-1.5 rounded-full bg-brand-500 animate-pulse" />
              All-in-One Business Operating System
            </div>

            <h1 className="font-display font-extrabold text-4xl sm:text-5xl xl:text-[3.5rem] leading-[1.1] tracking-tight text-slate-900">
              Run Everything.{' '}
              <br className="hidden sm:block" />
              <span className="gradient-text-vibrant">Smarter. Faster.</span>
              <br />
              On <span className="gradient-text">OnePlatform360</span>
            </h1>

            <p className="text-slate-500 text-lg leading-relaxed max-w-lg">
              ERP, HRMS, AI Automation, WhatsApp Integration and many more — everything you need to run and grow your organisation from a single platform.
            </p>

            {/* Feature pills row */}
            <div className="flex flex-wrap gap-3">
              {[
                { icon: Layers, text: 'Unified Platform' },
                { icon: Lock, text: 'Role Based Access' },
                { icon: Bot, text: 'AI Powered' },
                { icon: Shield, text: 'Secure & Scalable' },
              ].map((f) => (
                <div key={f.text} className="flex items-center gap-2 px-3.5 py-2 rounded-lg bg-white border border-surface-border text-xs font-medium text-slate-600 shadow-sm hover:border-brand-200 hover:shadow-md transition-all duration-300">
                  <f.icon size={13} className="text-brand-500" />
                  {f.text}
                </div>
              ))}
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap gap-3 pt-1">
              <Link href="/demo" className="btn-primary text-base px-7 py-3.5">
                Explore Platform <ArrowRight size={16} />
              </Link>
              <Link href="/contact" className="btn-secondary text-base px-7 py-3.5 group">
                <Play size={14} className="text-brand-500 group-hover:scale-110 transition-transform" />
                Watch Demo
              </Link>
            </div>

            {/* Trust avatars */}
            <div className="flex items-center gap-3 pt-2">
              <div className="flex -space-x-2">
                {['#3b82f6', '#8b5cf6', '#06b6d4', '#f59e0b', '#10b981'].map((c, i) => (
                  <div key={i} className="w-8 h-8 rounded-full border-2 border-white flex items-center justify-center text-[10px] font-bold text-white" style={{ background: c, zIndex: 5 - i }}>
                    {['A', 'B', 'C', 'D', 'E'][i]}
                  </div>
                ))}
                <div className="w-8 h-8 rounded-full border-2 border-white bg-slate-100 flex items-center justify-center text-[9px] font-bold text-slate-500 z-0">
                  +500
                </div>
              </div>
              <p className="text-xs text-slate-500">
                Trusted by <span className="font-semibold text-slate-700">500+ organisations</span>
              </p>
            </div>
          </motion.div>

          {/* ──── RIGHT — Interactive Dashboard Preview ──── */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="relative lg:ml-2"
          >
            {/* Tab switcher */}
            <div className="flex items-center gap-1.5 mb-4 flex-wrap relative z-10">
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
              <div className="dashboard-card">
                {/* Browser chrome */}
                <div className="flex items-center gap-2 px-4 py-3 border-b border-surface-border bg-surface-subtle">
                  <div className="flex gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-red-400" />
                    <div className="w-3 h-3 rounded-full bg-amber-400" />
                    <div className="w-3 h-3 rounded-full bg-emerald-400" />
                  </div>
                  <div className="flex-1 mx-3 flex items-center gap-2">
                    <div className="flex-1 px-3 py-1.5 rounded-lg bg-white border border-surface-border text-xs text-slate-400 font-mono truncate flex items-center gap-2">
                      <Lock size={10} className="text-success-500 shrink-0" />
                      {tab.url}
                    </div>
                  </div>
                </div>

                <div className="flex">
                  {/* Mini sidebar — hidden on small screens */}
                  <div className="hidden md:flex flex-col w-[180px] border-r border-surface-border bg-surface-subtle p-3 gap-0.5">
                    <div className="flex items-center gap-2 px-2 mb-3">
                      <div className="w-6 h-6 rounded-lg bg-brand-500 flex items-center justify-center">
                        <Sparkles size={11} className="text-white" />
                      </div>
                      <span className="text-xs font-bold text-slate-800">OnePlatform360</span>
                    </div>

                    <div className="flex items-center gap-2 px-3 py-1.5 mb-2 rounded-lg bg-white border border-surface-border">
                      <Search size={11} className="text-slate-400" />
                      <span className="text-[10px] text-slate-400">Search...</span>
                    </div>

                    {SIDEBAR_ITEMS.map((item) => (
                      <div key={item.label}
                        className={`flex items-center gap-2 px-3 py-2 rounded-lg text-[11px] font-medium transition-all cursor-pointer
                          ${item.active
                            ? 'bg-brand-50 text-brand-700 border border-brand-100'
                            : 'text-slate-500 hover:bg-slate-50 hover:text-slate-700'
                          }`}
                      >
                        <item.icon size={13} />
                        {item.label}
                      </div>
                    ))}
                  </div>

                  {/* Dashboard content */}
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={tab.id}
                      initial={{ opacity: 0, y: 6 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -6 }}
                      transition={{ duration: 0.3 }}
                      className="flex-1 p-4 sm:p-5 space-y-4"
                    >
                      {/* Header */}
                      <div className="flex items-center justify-between">
                        <div>
                          <div className="text-[11px] text-slate-400">Dashboard Overview</div>
                          <div className="text-slate-900 font-bold text-sm font-display">{tab.dashboardTitle}</div>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="badge text-[10px] py-0.5 px-2.5">
                            <span className="w-1.5 h-1.5 rounded-full bg-success-500 animate-pulse" /> Live
                          </div>
                          <div className="w-7 h-7 rounded-lg bg-surface-subtle border border-surface-border flex items-center justify-center cursor-pointer hover:bg-surface-hover transition-colors">
                            <Settings size={12} className="text-slate-400" />
                          </div>
                        </div>
                      </div>

                      {/* KPI Stats Row */}
                      <div className="grid grid-cols-3 gap-3">
                        {tab.kpis.map((s, i) => (
                          <motion.div
                            key={s.label}
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: i * 0.1 }}
                            className="rounded-xl bg-surface-subtle border border-surface-border p-3 hover:shadow-sm transition-all duration-300 cursor-pointer group"
                          >
                            <div className="flex items-center justify-between mb-2">
                              <div className={`w-7 h-7 rounded-lg flex items-center justify-center ${s.bg} group-hover:scale-110 transition-transform`}>
                                <s.icon size={13} className={s.color} />
                              </div>
                              <MoreHorizontal size={12} className="text-slate-300" />
                            </div>
                            <div className="text-slate-900 font-bold text-base leading-none">{s.value}</div>
                            <div className="text-slate-400 text-[10px] mt-1">{s.label}</div>
                            <div className="text-success-600 text-[10px] mt-1 font-semibold flex items-center gap-0.5">
                              <TrendingUp size={9} /> {s.change}
                            </div>
                          </motion.div>
                        ))}
                      </div>

                      {/* Chart + Students by Class */}
                      <div className="grid grid-cols-1 sm:grid-cols-5 gap-3">
                        {/* Bar chart */}
                        <div className="sm:col-span-3 rounded-xl bg-surface-subtle border border-surface-border p-4">
                          <div className="flex items-center justify-between mb-3">
                            <span className="text-xs font-semibold text-slate-700 flex items-center gap-1.5">
                              <BarChart3 size={12} style={{ color: tab.color }} /> {tab.chartLabel}
                            </span>
                            <span className="text-[10px] text-slate-400 px-2 py-0.5 rounded bg-white border border-surface-border">This Month</span>
                          </div>
                          <div className="flex items-end gap-[6px] h-16">
                            {tab.chartData.map((h, i) => (
                              <motion.div
                                key={i}
                                initial={{ scaleY: 0 }}
                                animate={{ scaleY: 1 }}
                                transition={{ duration: 0.6, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
                                style={{ height: `${h}%`, background: tab.color, opacity: 0.25 + i * 0.15, transformOrigin: 'bottom' }}
                                className="flex-1 rounded-t-md hover:opacity-100 transition-opacity cursor-pointer"
                              />
                            ))}
                          </div>
                          <div className="flex justify-between mt-2 text-[10px] text-slate-400">
                            {['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'].map((m) => <span key={m}>{m}</span>)}
                          </div>
                        </div>

                        {/* Donut chart */}
                        <div className="sm:col-span-2 rounded-xl bg-surface-subtle border border-surface-border p-4">
                          <div className="text-xs font-semibold text-slate-700 mb-2">Students by Class</div>
                          <div className="flex items-center justify-center">
                            <DonutChart
                              data={[35, 25, 22, 18]}
                              colors={['#2563eb', '#7c3aed', '#0ea5e9', '#10b981']}
                            />
                          </div>
                          <div className="grid grid-cols-2 gap-1 mt-2">
                            {[
                              { label: 'Class 10', color: '#2563eb' },
                              { label: 'Class 11', color: '#7c3aed' },
                              { label: 'Class 12', color: '#0ea5e9' },
                              { label: 'Others', color: '#10b981' },
                            ].map((c) => (
                              <div key={c.label} className="flex items-center gap-1 text-[9px] text-slate-500">
                                <div className="w-2 h-2 rounded-sm" style={{ background: c.color }} />
                                {c.label}
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>

                      {/* Activity + Quick Actions */}
                      <div className="grid grid-cols-1 sm:grid-cols-5 gap-3">
                        {/* Recent Activity */}
                        <div className="sm:col-span-3 space-y-2">
                          <div className="text-xs font-semibold text-slate-700 mb-1">Recent Activity</div>
                          {tab.activity.map((a, i) => (
                            <motion.div
                              key={a.text + a.sub}
                              initial={{ opacity: 0, x: -10 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: 0.3 + i * 0.1 }}
                              className="flex items-center gap-3 text-xs p-2 rounded-lg hover:bg-surface-subtle transition-colors cursor-pointer"
                            >
                              <div className={`w-2 h-2 rounded-full shrink-0 ${a.dot}`} />
                              <span className="text-slate-700 font-medium">{a.text}</span>
                              <span className="text-slate-400 hidden sm:inline">{a.sub}</span>
                              <span className="ml-auto text-slate-400 shrink-0">{a.time}</span>
                            </motion.div>
                          ))}
                        </div>

                        {/* Quick Actions */}
                        <div className="sm:col-span-2">
                          <div className="text-xs font-semibold text-slate-700 mb-2">Quick Actions</div>
                          <div className="space-y-1.5">
                            {QUICK_ACTIONS.map((action) => (
                              <div key={action.label} className="flex items-center gap-2 px-3 py-2 rounded-lg border border-surface-border bg-white text-xs font-medium text-slate-600 cursor-pointer hover:border-brand-200 hover:shadow-sm transition-all">
                                <div className="w-6 h-6 rounded-md flex items-center justify-center" style={{ background: `${action.color}10` }}>
                                  <action.icon size={12} style={{ color: action.color }} />
                                </div>
                                {action.label}
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  </AnimatePresence>
                </div>
              </div>

              {/* Floating notification cards */}
              <div className="absolute top-16 -right-4 glass rounded-xl px-4 py-3 shadow-float notif-float hidden xl:block z-20">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-full bg-success-50 flex items-center justify-center">
                    <CheckCircle size={14} className="text-success-600" />
                  </div>
                  <div>
                    <div className="text-slate-900 text-xs font-semibold">New Admission</div>
                    <div className="text-success-600 text-[10px] font-medium">Just now</div>
                  </div>
                </div>
              </div>

              <div className="absolute -bottom-4 -left-4 glass rounded-xl px-4 py-3 shadow-float notif-float-delay hidden xl:block z-20">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-full bg-brand-50 flex items-center justify-center">
                    <Sparkles size={14} className="text-brand-600" />
                  </div>
                  <div>
                    <div className="text-slate-900 text-xs font-semibold">AI Report Ready</div>
                    <div className="text-brand-600 text-[10px] font-medium">Click to view →</div>
                  </div>
                </div>
              </div>

              <div className="absolute top-1/2 -right-6 glass rounded-xl px-3.5 py-2.5 shadow-float hidden xl:block z-20" style={{ animation: 'notifFloat 7s ease-in-out 2s infinite' }}>
                <div className="flex items-center gap-2">
                  <div className="w-7 h-7 rounded-full bg-violet-50 flex items-center justify-center">
                    <Activity size={12} className="text-violet-600" />
                  </div>
                  <div>
                    <div className="text-slate-900 text-[11px] font-semibold">₹42.8L</div>
                    <div className="text-violet-600 text-[9px] font-medium">Fee Collected</div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Counter strip */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 grid grid-cols-2 sm:grid-cols-4 gap-6 max-w-2xl mx-auto"
        >
          {COUNTERS.map((c) => <Counter key={c.label} {...c} />)}
        </motion.div>
      </div>
    </section>
  )
}
