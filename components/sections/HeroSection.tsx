'use client'
import { useEffect, useState, useRef } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { motion, AnimatePresence, useInView } from 'framer-motion'
import {
  ArrowRight, GraduationCap, Users, TrendingUp, CheckCircle,
  BarChart3, Shield, Bot, Briefcase, IndianRupee, Sparkles, Cloud,
  BookOpen, Calendar, FileText, Bell, Settings, Search, Plus, MoreHorizontal,
  Activity, PieChart, LineChart, Lock, Layers, Play, MessageCircle,
  Clock, Award, UserPlus, FolderOpen, Building2, BookOpenCheck, Check,
  ChevronRight, Tv, Monitor, Zap
} from 'lucide-react'

/* ─── Top trust strip data ──────────────────────────────── */
const TOP_STATS = [
  { icon: Cloud, label: 'Cloud Powered', sub: 'Access Anytime, Anywhere' },
  { icon: Bot, label: 'AI Automation', sub: 'Smarter Autonomous Workflows' },
  { icon: Shield, label: 'Secure & Reliable', sub: 'Bank-Grade 256-bit Encryption' },
  { icon: TrendingUp, label: 'Scalable', sub: 'From 50 to 50,000+ Users' },
]

/* ─── Metric Counter Hook ──────────────────────────────── */
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
      if (start >= end) {
        setCount(end)
        clearInterval(timer)
      } else {
        setCount(Math.floor(start))
      }
    }, 16)
    return () => clearInterval(timer)
  }, [end, duration, inView])

  return { count, ref }
}

function Counter({ end, suffix, label, prefix = '' }: { end: number; suffix: string; label: string; prefix?: string }) {
  const { count, ref } = useCountUp(end)
  return (
    <div className="glass rounded-xl p-4 text-center border border-blue-500/20 hover:border-blue-500/40 transition-all duration-300" ref={ref}>
      <div className="text-2xl sm:text-3xl font-extrabold font-display gradient-text">
        {prefix}{count}{suffix}
      </div>
      <div className="text-[11px] font-medium text-slate-400 mt-1">{label}</div>
    </div>
  )
}

/* ─── Dashboard Tab Types & Data ──────────────────────────────── */
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
    id: 'school',
    label: 'Academic ERP',
    icon: GraduationCap,
    color: '#38bdf8',
    dashboardTitle: 'Academics & Operations Overview',
    url: 'app.oneplatform360.com/education-erp',
    kpis: [
      { label: 'Total Students', value: '2,480', change: '+8.4%', icon: Users, color: 'text-sky-400', bg: 'bg-sky-500/10' },
      { label: 'Total Employees', value: '184', change: '+4.2%', icon: Briefcase, color: 'text-indigo-400', bg: 'bg-indigo-500/10' },
      { label: 'Fee Collection', value: '₹42.8L', change: '+12.6%', icon: IndianRupee, color: 'text-emerald-400', bg: 'bg-emerald-500/10' },
      { label: 'Attendance', value: '94.7%', change: '+2.1%', icon: CheckCircle, color: 'text-cyan-400', bg: 'bg-cyan-500/10' },
    ],
    chartLabel: 'Fee Collection Trend',
    chartData: [45, 68, 52, 85, 74, 98],
    activity: [
      { text: 'Fee payment received', sub: '₹14,500 — Class X-A', time: '2 min ago', dot: 'bg-emerald-400' },
      { text: 'Attendance marked', sub: 'Class XII-B (94.7%)', time: '5 min ago', dot: 'bg-sky-400' },
      { text: 'Exam schedule published', sub: 'Term 2 Finals', time: '15 min ago', dot: 'bg-indigo-400' },
      { text: 'New admission approved', sub: 'Aryan Sharma — Class VI', time: '30 min ago', dot: 'bg-blue-400' },
    ],
  },
  {
    id: 'hrms',
    label: 'Smart HRMS',
    icon: Briefcase,
    color: '#a78bfa',
    dashboardTitle: 'Human Resources & Payroll',
    url: 'app.oneplatform360.com/smart-hrms',
    kpis: [
      { label: 'Total Staff', value: '348', change: '+12 new', icon: Users, color: 'text-purple-400', bg: 'bg-purple-500/10' },
      { label: 'Active Today', value: '339', change: '97.4%', icon: CheckCircle, color: 'text-emerald-400', bg: 'bg-emerald-500/10' },
      { label: 'Payroll Processed', value: '₹34.2L', change: '100% on time', icon: IndianRupee, color: 'text-sky-400', bg: 'bg-sky-500/10' },
      { label: 'Open Positions', value: '8', change: 'Hiring', icon: UserPlus, color: 'text-amber-400', bg: 'bg-amber-500/10' },
    ],
    chartLabel: 'Workforce Growth & Retention',
    chartData: [55, 62, 70, 78, 86, 96],
    activity: [
      { text: 'Pooja Verma', sub: 'Onboarding completed', time: '8 min ago', dot: 'bg-purple-400' },
      { text: 'Payroll Run Oct', sub: 'Disbursed via Direct Bank API', time: '45 min ago', dot: 'bg-emerald-400' },
      { text: 'Leave Request Approved', sub: 'Dr. Sameer (Medical)', time: '2 hr ago', dot: 'bg-sky-400' },
      { text: 'Appraisal Report', sub: 'Q3 review completed', time: '4 hr ago', dot: 'bg-indigo-400' },
    ],
  },
  {
    id: 'ai',
    label: 'AI Automation',
    icon: Bot,
    color: '#34d399',
    dashboardTitle: 'AI Workflows & Autonomous Ops',
    url: 'app.oneplatform360.com/ai-automation',
    kpis: [
      { label: 'Workflows Active', value: '24', change: 'Active', icon: Zap, color: 'text-emerald-400', bg: 'bg-emerald-500/10' },
      { label: 'Executions / Mo', value: '1,284', change: '+28%', icon: Bot, color: 'text-teal-400', bg: 'bg-teal-500/10' },
      { label: 'Success Rate', value: '97.8%', change: 'Zero fault', icon: Shield, color: 'text-cyan-400', bg: 'bg-cyan-500/10' },
      { label: 'Hours Saved', value: '356 hrs', change: 'This month', icon: Clock, color: 'text-purple-400', bg: 'bg-purple-500/10' },
    ],
    chartLabel: 'Autonomous Execution Volume',
    chartData: [38, 54, 66, 78, 89, 100],
    activity: [
      { text: 'Auto Fee Reminder WhatsApp', sub: '342 parents notified', time: '1 min ago', dot: 'bg-emerald-400' },
      { text: 'Automated Attendance Alert', sub: 'Sent to absent student guardians', time: '18 min ago', dot: 'bg-teal-400' },
      { text: 'AI Anomaly Detected', sub: 'Payment discrepancy auto-reconciled', time: '52 min ago', dot: 'bg-cyan-400' },
      { text: 'Weekly AI Summary Report', sub: 'Delivered to Management', time: '3 hr ago', dot: 'bg-purple-400' },
    ],
  },
  {
    id: 'whatsapp',
    label: 'WhatsApp Bot',
    icon: MessageCircle,
    color: '#22c55e',
    dashboardTitle: 'Official WhatsApp Business Cloud',
    url: 'app.oneplatform360.com/whatsapp-hub',
    kpis: [
      { label: 'Messages Sent', value: '2.5M+', change: 'High Speed', icon: MessageCircle, color: 'text-emerald-400', bg: 'bg-emerald-500/10' },
      { label: 'Read Rate', value: '98.2%', change: 'Industry Top', icon: CheckCircle, color: 'text-teal-400', bg: 'bg-teal-500/10' },
      { label: 'Instant Bot Replies', value: '18.4K', change: '< 2s latency', icon: Bot, color: 'text-sky-400', bg: 'bg-sky-500/10' },
      { label: 'Fee Payments via WA', value: '₹18.9L', change: '+34%', icon: IndianRupee, color: 'text-emerald-400', bg: 'bg-emerald-500/10' },
    ],
    chartLabel: 'Daily WhatsApp Broadcast Traffic',
    chartData: [42, 60, 58, 82, 91, 99],
    activity: [
      { text: 'Broadcast: Term Exams Timetable', sub: 'Delivered to 1,850 students', time: '4 min ago', dot: 'bg-emerald-400' },
      { text: 'WhatsApp Pay Link Clicked', sub: 'Receipt auto-issued', time: '12 min ago', dot: 'bg-teal-400' },
      { text: 'Parent Bot Inquiry', sub: 'Bus tracking link dispatched', time: '22 min ago', dot: 'bg-sky-400' },
      { text: 'Staff Circular Sent', sub: 'Meeting notification', time: '1 hr ago', dot: 'bg-cyan-400' },
    ],
  },
]

/* ─── Mini donut chart SVG ──── */
function DonutChart({ data, colors }: { data: number[]; colors: string[] }) {
  const total = data.reduce((a, b) => a + b, 0)
  let cumulative = 0
  const r = 30
  const c = 2 * Math.PI * r

  return (
    <svg width="84" height="84" viewBox="0 0 84 84">
      {data.map((val, i) => {
        const pct = val / total
        const dasharray = `${pct * c} ${c}`
        const dashoffset = -cumulative * c
        cumulative += pct
        return (
          <circle
            key={i}
            cx="42"
            cy="42"
            r={r}
            fill="none"
            strokeWidth="9"
            stroke={colors[i]}
            strokeDasharray={dasharray}
            strokeDashoffset={dashoffset}
            strokeLinecap="round"
            style={{ transform: 'rotate(-90deg)', transformOrigin: 'center', transition: 'stroke-dasharray 0.8s ease' }}
          />
        )
      })}
      <text x="42" y="42" textAnchor="middle" dominantBaseline="central" fill="#ffffff" fontWeight="bold" fontSize="11px">
        94.7%
      </text>
    </svg>
  )
}

export default function HeroSection() {
  const [activeId, setActiveId] = useState(TABS[0].id)
  const [viewMode, setViewMode] = useState<'dashboard' | 'boardroom'>('dashboard')
  const tab = TABS.find((t) => t.id === activeId)!

  // Auto-switch tabs gently if on dashboard mode
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveId((prev) => {
        const idx = TABS.findIndex((t) => t.id === prev)
        return TABS[(idx + 1) % TABS.length].id
      })
    }, 6000)
    return () => clearInterval(timer)
  }, [])

  return (
    <section className="relative pt-28 pb-20 lg:pt-32 lg:pb-24 overflow-hidden hero-gradient grid-pattern">
      {/* Background glow orbs */}
      <div className="glow-orb w-[750px] h-[750px] bg-blue-600/[0.12] -top-48 -left-40" />
      <div className="glow-orb w-[650px] h-[650px] bg-indigo-600/[0.10] top-40 -right-32" />
      <div className="glow-orb w-[500px] h-[500px] bg-cyan-500/[0.08] bottom-0 left-1/3" />

      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Top trust strip badges */}
        <div className="hidden md:flex items-center justify-between mb-8 pb-4 border-b border-blue-500/15">
          <div className="flex items-center gap-2 text-xs text-blue-300 font-semibold uppercase tracking-wider">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            Next-Generation Enterprise ERP & AI Operating System
          </div>
          <div className="flex items-center gap-6 flex-wrap">
            {TOP_STATS.map((s) => (
              <div key={s.label} className="flex items-center gap-2.5 group">
                <div className="w-8 h-8 rounded-lg bg-blue-500/10 border border-blue-500/25 flex items-center justify-center shrink-0 group-hover:bg-blue-500/20 group-hover:scale-105 transition-all duration-300">
                  <s.icon size={14} className="text-blue-400" />
                </div>
                <div className="leading-tight">
                  <div className="text-xs font-semibold text-white">{s.label}</div>
                  <div className="text-[10px] text-slate-400">{s.sub}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ──── HERO MAIN 3-COLUMN / GRID LAYOUT ──── */}
        <div className="grid lg:grid-cols-12 gap-8 items-start">

          {/* ──── LEFT COLUMN: Headline & CTA (4 Cols) ──── */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-4 space-y-6"
          >
            {/* Top Pill */}
            <div className="badge-glow w-fit">
              <Sparkles size={12} className="text-cyan-300" />
              ALL-IN-ONE BUSINESS OPERATING SYSTEM
            </div>

            {/* Main Headline */}
            <h1 className="font-display font-extrabold text-3xl sm:text-4xl xl:text-[3.2rem] leading-[1.12] tracking-tight text-white">
              Run Everything.<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-300 to-cyan-400">
                Smarter. Faster.
              </span><br />
              On <span className="text-white">One</span><span className="gradient-text">Platform360</span>
            </h1>

            {/* Description */}
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              ERP, HRMS, AI Automation, WhatsApp Integration and many more — everything you need to run and grow your organisation from a single platform.
            </p>

            {/* Feature Pills */}
            <div className="grid grid-cols-2 gap-2.5 pt-1">
              {[
                { icon: Layers, text: 'Unified Platform' },
                { icon: Lock, text: 'Role Based Access' },
                { icon: Bot, text: 'AI Powered' },
                { icon: Shield, text: 'Secure & Scalable' },
              ].map((f) => (
                <div
                  key={f.text}
                  className="flex items-center gap-2 px-3 py-2 rounded-xl bg-[#0c1527]/80 border border-blue-500/20 text-xs font-medium text-slate-200 hover:border-blue-500/40 hover:bg-blue-600/10 transition-all duration-300"
                >
                  <f.icon size={13} className="text-blue-400" />
                  {f.text}
                </div>
              ))}
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap gap-3 pt-2">
              <Link
                href="/demo"
                className="btn-primary text-sm px-6 py-3.5 shadow-[0_0_25px_rgba(37,99,235,0.45)]"
              >
                Explore Platform <ArrowRight size={15} />
              </Link>
              <Link
                href="/contact"
                className="btn-secondary text-sm px-6 py-3.5 group"
              >
                <Play size={13} className="text-cyan-400 group-hover:scale-110 transition-transform" />
                Watch Demo
              </Link>
            </div>

            {/* Social Trust Proof with live metrics */}
            <div className="pt-3 border-t border-blue-500/15 space-y-3">
              <div className="flex items-center gap-3">
                <div className="flex -space-x-2">
                  {['#3b82f6', '#8b5cf6', '#06b6d4', '#f59e0b', '#10b981'].map((c, i) => (
                    <div
                      key={i}
                      className="w-7 h-7 rounded-full border-2 border-[#070c1b] flex items-center justify-center text-[9px] font-bold text-white shadow-md"
                      style={{ background: c, zIndex: 5 - i }}
                    >
                      {['A', 'R', 'P', 'S', 'K'][i]}
                    </div>
                  ))}
                  <div className="w-7 h-7 rounded-full border-2 border-[#070c1b] bg-blue-950 flex items-center justify-center text-[8px] font-bold text-blue-300 z-0">
                    +500
                  </div>
                </div>
                <p className="text-xs text-slate-400">
                  Trusted by <span className="font-semibold text-white">500+ organisations</span> across India
                </p>
              </div>

              {/* 4 Mini Stat Pills */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                {[
                  { value: '72%', label: 'Tasks Automated' },
                  { value: '97.8%', label: 'Accuracy' },
                  { value: '2.5M+', label: 'Messages Sent' },
                  { value: '500+', label: 'Happy Clients' },
                ].map((stat) => (
                  <div key={stat.label} className="p-2 rounded-lg bg-[#0c1527] border border-blue-500/15 text-center">
                    <div className="text-xs font-bold text-blue-300 font-display">{stat.value}</div>
                    <div className="text-[9px] text-slate-400 mt-0.5">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* ──── CENTER COLUMN: Large Interactive TV / Boardroom Showcase (5 Cols) ──── */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="lg:col-span-5 space-y-4"
          >
            {/* View Mode & Tab Selectors */}
            <div className="flex items-center justify-between gap-2 flex-wrap">
              <div className="flex items-center gap-1.5 flex-wrap">
                {TABS.map((t) => (
                  <button
                    key={t.id}
                    onClick={() => {
                      setActiveId(t.id)
                      setViewMode('dashboard')
                    }}
                    className={`tab-pill ${activeId === t.id && viewMode === 'dashboard' ? 'active' : ''}`}
                  >
                    <t.icon size={13} />
                    {t.label}
                  </button>
                ))}
              </div>

              {/* Toggle Boardroom Photo / Live Mockup */}
              <button
                onClick={() => setViewMode(viewMode === 'dashboard' ? 'boardroom' : 'dashboard')}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium bg-blue-500/15 border border-blue-500/30 text-blue-300 hover:bg-blue-500/25 transition-all"
                title="Switch between Live UI & Boardroom Scene"
              >
                {viewMode === 'dashboard' ? <Tv size={13} /> : <Monitor size={13} />}
                {viewMode === 'dashboard' ? 'Boardroom View' : 'Live UI View'}
              </button>
            </div>

            {/* Main Center Display Screen */}
            <div className="dashboard-card relative group">
              {viewMode === 'boardroom' ? (
                /* Boardroom Presentation Image View */
                <div className="relative aspect-[16/10] overflow-hidden bg-black">
                  <Image
                    src="/hero-showcase.jpg"
                    alt="OnePlatform360 Executive Boardroom Presentation"
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#070c1b] via-transparent to-black/40" />
                  <div className="absolute bottom-4 left-4 right-4 p-3 rounded-xl bg-[#0a1122]/90 backdrop-blur-md border border-blue-500/30 flex items-center justify-between">
                    <div>
                      <div className="text-xs font-bold text-white flex items-center gap-1.5">
                        <Sparkles size={12} className="text-cyan-400" /> OnePlatform360 Executive Boardroom Display
                      </div>
                      <div className="text-[10px] text-slate-300">Empowering institutions with real-time enterprise intelligence</div>
                    </div>
                    <button
                      onClick={() => setViewMode('dashboard')}
                      className="px-3 py-1 rounded-lg bg-blue-600 text-white text-xs font-semibold hover:bg-blue-500 transition-colors"
                    >
                      Open Live UI
                    </button>
                  </div>
                </div>
              ) : (
                /* Interactive Live Dashboard Mockup */
                <div>
                  {/* Browser Bar */}
                  <div className="flex items-center gap-2 px-4 py-2.5 border-b border-blue-500/20 bg-[#070c1b]">
                    <div className="flex gap-1.5">
                      <div className="w-2.5 h-2.5 rounded-full bg-rose-500" />
                      <div className="w-2.5 h-2.5 rounded-full bg-amber-500" />
                      <div className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
                    </div>
                    <div className="flex-1 mx-2">
                      <div className="px-3 py-1 rounded-md bg-[#0c1527] border border-blue-500/20 text-[11px] text-slate-300 font-mono flex items-center gap-1.5 truncate">
                        <Lock size={10} className="text-emerald-400 shrink-0" />
                        {tab.url}
                      </div>
                    </div>
                    <div className="flex items-center gap-1.5 text-[10px] text-emerald-400 font-semibold px-2 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/20">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" /> Live System
                    </div>
                  </div>

                  {/* Dashboard Body */}
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={tab.id}
                      initial={{ opacity: 0, y: 6 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -6 }}
                      transition={{ duration: 0.3 }}
                      className="p-4 sm:p-5 space-y-4 bg-[#0a1122]"
                    >
                      {/* Top Header */}
                      <div className="flex items-center justify-between border-b border-blue-500/15 pb-3">
                        <div className="flex items-center gap-2.5">
                          <div
                            className="w-8 h-8 rounded-lg flex items-center justify-center"
                            style={{ background: `${tab.color}15`, border: `1px solid ${tab.color}35` }}
                          >
                            <tab.icon size={16} style={{ color: tab.color }} />
                          </div>
                          <div>
                            <div className="text-[10px] uppercase tracking-wider text-slate-400">OnePlatform360</div>
                            <div className="text-white font-bold text-xs sm:text-sm font-display">{tab.dashboardTitle}</div>
                          </div>
                        </div>
                        <div className="flex items-center gap-2">
                          <span className="text-[10px] text-slate-400 bg-[#0c1527] px-2.5 py-1 rounded-lg border border-blue-500/15">
                            Today: Live
                          </span>
                        </div>
                      </div>

                      {/* KPI Cards Grid */}
                      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                        {tab.kpis.map((kpi) => (
                          <div
                            key={kpi.label}
                            className="rounded-xl bg-[#0c1527] border border-blue-500/20 p-2.5 hover:border-blue-500/40 transition-colors"
                          >
                            <div className="flex items-center justify-between mb-1.5">
                              <div className={`w-6 h-6 rounded-md flex items-center justify-center ${kpi.bg}`}>
                                <kpi.icon size={12} className={kpi.color} />
                              </div>
                              <span className="text-[9px] text-emerald-400 font-semibold">{kpi.change}</span>
                            </div>
                            <div className="text-white font-bold text-sm sm:text-base font-display">{kpi.value}</div>
                            <div className="text-[9.5px] text-slate-400 mt-0.5">{kpi.label}</div>
                          </div>
                        ))}
                      </div>

                      {/* Charts Grid */}
                      <div className="grid grid-cols-1 sm:grid-cols-5 gap-3">
                        {/* Line / Bar Chart */}
                        <div className="sm:col-span-3 rounded-xl bg-[#0c1527] border border-blue-500/20 p-3.5">
                          <div className="flex items-center justify-between mb-2.5">
                            <span className="text-xs font-semibold text-white flex items-center gap-1.5">
                              <BarChart3 size={13} style={{ color: tab.color }} /> {tab.chartLabel}
                            </span>
                            <span className="text-[9px] text-blue-300 px-2 py-0.5 rounded bg-blue-600/20 border border-blue-500/30">
                              Monthly
                            </span>
                          </div>
                          <div className="flex items-end gap-2 h-20 pt-2">
                            {tab.chartData.map((h, i) => (
                              <motion.div
                                key={i}
                                initial={{ scaleY: 0 }}
                                animate={{ scaleY: 1 }}
                                transition={{ duration: 0.5, delay: i * 0.05 }}
                                style={{
                                  height: `${h}%`,
                                  background: `linear-gradient(to top, #2563eb, ${tab.color})`,
                                  transformOrigin: 'bottom',
                                }}
                                className="flex-1 rounded-t-md opacity-85 hover:opacity-100 transition-opacity cursor-pointer"
                              />
                            ))}
                          </div>
                          <div className="flex justify-between mt-2 text-[9px] text-slate-400">
                            {['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'].map((m) => <span key={m}>{m}</span>)}
                          </div>
                        </div>

                        {/* Donut Chart */}
                        <div className="sm:col-span-2 rounded-xl bg-[#0c1527] border border-blue-500/20 p-3.5 flex flex-col justify-between">
                          <div className="text-xs font-semibold text-white mb-1">Status & Distribution</div>
                          <div className="flex items-center justify-center my-auto">
                            <DonutChart
                              data={[35, 25, 22, 18]}
                              colors={['#38bdf8', '#818cf8', '#a855f7', '#34d399']}
                            />
                          </div>
                          <div className="grid grid-cols-2 gap-1 mt-1">
                            {[
                              { label: 'Active', color: '#38bdf8' },
                              { label: 'Verified', color: '#818cf8' },
                              { label: 'Pending', color: '#a855f7' },
                              { label: 'Completed', color: '#34d399' },
                            ].map((c) => (
                              <div key={c.label} className="flex items-center gap-1 text-[8.5px] text-slate-400">
                                <div className="w-1.5 h-1.5 rounded-full" style={{ background: c.color }} />
                                {c.label}
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>

                      {/* Recent Real-time Activities */}
                      <div className="rounded-xl bg-[#0c1527] border border-blue-500/20 p-3 space-y-1.5">
                        <div className="text-xs font-semibold text-white mb-1 flex items-center justify-between">
                          <span>Live System Stream</span>
                          <span className="text-[9px] text-blue-400">Auto Refresh</span>
                        </div>
                        {tab.activity.slice(0, 3).map((a, i) => (
                          <div key={i} className="flex items-center gap-2.5 text-xs p-1.5 rounded-lg hover:bg-blue-600/10 transition-colors">
                            <div className={`w-2 h-2 rounded-full shrink-0 ${a.dot}`} />
                            <span className="text-slate-200 font-medium text-[11px]">{a.text}</span>
                            <span className="text-slate-400 text-[10px] hidden sm:inline">{a.sub}</span>
                            <span className="ml-auto text-slate-500 text-[9px] shrink-0">{a.time}</span>
                          </div>
                        ))}
                      </div>
                    </motion.div>
                  </AnimatePresence>
                </div>
              )}
            </div>
          </motion.div>

          {/* ──── RIGHT COLUMN: Service & Module Cards Showcase (3 Cols) ──── */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-3 space-y-4"
          >
            {/* Card 1: Powerful ERP */}
            <div className="glass rounded-2xl p-5 border border-blue-500/20 hover:border-blue-500/40 transition-all duration-300 group">
              <div className="flex items-center gap-2.5 mb-2">
                <div className="w-8 h-8 rounded-xl bg-blue-500/15 border border-blue-500/30 flex items-center justify-center text-blue-400">
                  <GraduationCap size={16} />
                </div>
                <div>
                  <h3 className="font-display font-bold text-white text-sm">Powerful ERP</h3>
                  <div className="text-[10px] text-blue-300">Complete Institutional Control</div>
                </div>
              </div>
              <p className="text-slate-400 text-xs leading-relaxed mb-3">
                Manage academics, students, finance, exams, attendance and more — all in one place.
              </p>

              {/* Module Icons 4x2 Grid */}
              <div className="grid grid-cols-4 gap-1.5 mb-3">
                {[
                  { label: 'Students', icon: Users, color: '#38bdf8' },
                  { label: 'Academics', icon: BookOpen, color: '#818cf8' },
                  { label: 'Exams', icon: FileText, color: '#0ea5e9' },
                  { label: 'Attendance', icon: CheckCircle, color: '#34d399' },
                  { label: 'Fees', icon: IndianRupee, color: '#fbbf24' },
                  { label: 'Timetable', icon: Calendar, color: '#f472b6' },
                  { label: 'Library', icon: BookOpenCheck, color: '#a78bfa' },
                  { label: 'Reports', icon: BarChart3, color: '#2dd4bf' },
                ].map((m) => (
                  <div key={m.label} className="p-1.5 rounded-lg bg-[#0c1527] border border-blue-500/10 flex flex-col items-center gap-0.5 text-center group-hover:border-blue-500/25">
                    <m.icon size={12} style={{ color: m.color }} />
                    <span className="text-[8px] text-slate-300 truncate w-full">{m.label}</span>
                  </div>
                ))}
              </div>

              <Link
                href="/services/school-erp"
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-blue-400 hover:text-blue-300 group-hover:gap-2 transition-all"
              >
                Explore ERP <ChevronRight size={13} />
              </Link>
            </div>

            {/* Card 2: Smart HRMS */}
            <div className="glass rounded-2xl p-5 border border-purple-500/20 hover:border-purple-500/40 transition-all duration-300 group">
              <div className="flex items-center gap-2.5 mb-2">
                <div className="w-8 h-8 rounded-xl bg-purple-500/15 border border-purple-500/30 flex items-center justify-center text-purple-400">
                  <Users size={16} />
                </div>
                <div>
                  <h3 className="font-display font-bold text-white text-sm">Smart HRMS</h3>
                  <div className="text-[10px] text-purple-300">Staff & Payroll Engine</div>
                </div>
              </div>
              <p className="text-slate-400 text-xs leading-relaxed mb-3">
                Complete employee management from onboarding to payroll and performance.
              </p>

              {/* HRMS Icons 4x2 Grid */}
              <div className="grid grid-cols-4 gap-1.5 mb-3">
                {[
                  { label: 'Employees', icon: Users, color: '#a78bfa' },
                  { label: 'Attendance', icon: CheckCircle, color: '#34d399' },
                  { label: 'Leave', icon: Clock, color: '#fb923c' },
                  { label: 'Payroll', icon: IndianRupee, color: '#38bdf8' },
                  { label: 'Appraisal', icon: Award, color: '#f472b6' },
                  { label: 'Recruit', icon: UserPlus, color: '#818cf8' },
                  { label: 'Docs', icon: FolderOpen, color: '#2dd4bf' },
                  { label: 'Org Chart', icon: Building2, color: '#fbbf24' },
                ].map((m) => (
                  <div key={m.label} className="p-1.5 rounded-lg bg-[#0c1527] border border-purple-500/10 flex flex-col items-center gap-0.5 text-center group-hover:border-purple-500/25">
                    <m.icon size={12} style={{ color: m.color }} />
                    <span className="text-[8px] text-slate-300 truncate w-full">{m.label}</span>
                  </div>
                ))}
              </div>

              <Link
                href="/services/hrms"
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-purple-400 hover:text-purple-300 group-hover:gap-2 transition-all"
              >
                Explore HRMS <ChevronRight size={13} />
              </Link>
            </div>

            {/* Card 3: AI & WhatsApp Mini Feature Banners */}
            <div className="grid grid-cols-2 gap-2.5">
              <Link href="/services/ai-automation" className="glass rounded-xl p-3 border border-emerald-500/20 hover:border-emerald-500/40 transition-all group block">
                <div className="w-7 h-7 rounded-lg bg-emerald-500/15 flex items-center justify-center text-emerald-400 mb-1.5">
                  <Bot size={14} />
                </div>
                <div className="text-xs font-bold text-white group-hover:text-emerald-300">AI Automation</div>
                <div className="text-[9.5px] text-slate-400 mt-0.5">Autonomous tasks</div>
              </Link>
              <Link href="/services/whatsapp-automation" className="glass rounded-xl p-3 border border-green-500/20 hover:border-green-500/40 transition-all group block">
                <div className="w-7 h-7 rounded-lg bg-green-500/15 flex items-center justify-center text-green-400 mb-1.5">
                  <MessageCircle size={14} />
                </div>
                <div className="text-xs font-bold text-white group-hover:text-green-300">WhatsApp Hub</div>
                <div className="text-[9.5px] text-slate-400 mt-0.5">Instant alerts & bot</div>
              </Link>
            </div>
          </motion.div>

        </div>

        {/* ──── Bottom Counters Strip ──── */}
        <div className="mt-16 grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-4xl mx-auto">
          <Counter end={500} suffix="+" label="Institutions Across India" />
          <Counter end={120} suffix="K+" label="Students & Staff Managed" />
          <Counter end={99} suffix=".9%" label="Uptime SLA Guaranteed" />
          <Counter end={12} suffix="+" label="Unified Enterprise Modules" />
        </div>

      </div>
    </section>
  )
}
