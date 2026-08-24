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
  { icon: Cloud, label: 'Cloud Powered', sub: 'Access Anywhere', color: 'text-blue-600', bg: 'bg-blue-50' },
  { icon: Bot, label: 'AI Automation', sub: 'Smart Workflows', color: 'text-emerald-600', bg: 'bg-emerald-50' },
  { icon: Shield, label: 'Secure & Scalable', sub: 'Enterprise Grade', color: 'text-purple-600', bg: 'bg-purple-50' },
  { icon: TrendingUp, label: 'Growth Driven', sub: 'High Volume Scale', color: 'text-orange-600', bg: 'bg-orange-50' },
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
    <div className="rounded-2xl p-5 text-center bg-white text-slate-900 border border-slate-200 shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all duration-300" ref={ref}>
      <div className="text-2xl sm:text-3xl font-extrabold font-display text-slate-900">
        {prefix}{count}{suffix}
      </div>
      <div className="text-xs font-semibold text-slate-500 mt-1">{label}</div>
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
    id: 'multi-tenant',
    label: 'Multi-Tenant ERP',
    icon: Layers,
    color: '#0284c7',
    dashboardTitle: 'Multi-Tenant Enterprise ERP Command Center',
    url: 'app.oneplatform360.com/multi-tenant-erp',
    kpis: [
      { label: 'Active Tenants', value: '500+', change: '+18.4%', icon: Building2, color: 'text-sky-600', bg: 'bg-sky-100' },
      { label: 'Daily Active Users', value: '124.8K', change: '+24.2%', icon: Users, color: 'text-indigo-600', bg: 'bg-indigo-100' },
      { label: 'Monthly Billing', value: '₹84.6L', change: '+16.5%', icon: IndianRupee, color: 'text-emerald-600', bg: 'bg-emerald-100' },
      { label: 'System Uptime', value: '99.98%', change: 'Optimal', icon: CheckCircle, color: 'text-cyan-600', bg: 'bg-cyan-100' },
    ],
    chartLabel: 'Multi-Tenant Monthly Transaction Trend',
    chartData: [55, 68, 76, 85, 92, 98],
    activity: [
      { text: 'Hospital OPD Token #42', sub: 'Dr. Sameer — Cardiology', time: '1 min ago', dot: 'bg-rose-500' },
      { text: 'FitPulse Gym Check-in', sub: 'Biometric Turnstile Verified', time: '3 min ago', dot: 'bg-amber-500' },
      { text: 'School Fee UPI Received', sub: '₹18,500 — Class X-A', time: '6 min ago', dot: 'bg-emerald-500' },
      { text: 'Warehouse POS Dispatched', sub: 'Invoice #WH-4092 Reconciled', time: '12 min ago', dot: 'bg-sky-500' },
    ],
  },
  {
    id: 'hrms',
    label: 'Smart HRMS',
    icon: Briefcase,
    color: '#7c3aed',
    dashboardTitle: 'Enterprise HRMS, Biometrics & Payroll System',
    url: 'app.oneplatform360.com/hrms-payroll',
    kpis: [
      { label: 'Total Employees', value: '1,420', change: '+48 new', icon: Users, color: 'text-purple-600', bg: 'bg-purple-100' },
      { label: 'Active On-Shift', value: '1,385', change: '97.5%', icon: CheckCircle, color: 'text-emerald-600', bg: 'bg-emerald-100' },
      { label: 'Payroll Disbursed', value: '₹68.4L', change: 'Direct Bank', icon: IndianRupee, color: 'text-sky-600', bg: 'bg-sky-100' },
      { label: 'Open Requisitions', value: '14', change: 'Active', icon: UserPlus, color: 'text-amber-600', bg: 'bg-amber-100' },
    ],
    chartLabel: 'Workforce Attendance & Salary Trends',
    chartData: [60, 68, 74, 82, 89, 97],
    activity: [
      { text: 'Biometric Shift Punch Synced', sub: '348 factory & office staff', time: '4 min ago', dot: 'bg-purple-500' },
      { text: 'Monthly Salary Run', sub: 'Automated PF & TDS statutory deduction', time: '35 min ago', dot: 'bg-emerald-500' },
      { text: 'New Hire Onboarded', sub: 'Pooja Verma — Engineering', time: '1 hr ago', dot: 'bg-sky-500' },
    ],
  },
  {
    id: 'verticals',
    label: 'Hospital & Gyms',
    icon: Activity,
    color: '#f97316',
    dashboardTitle: 'Hospital OPD, Gym Turnstiles & Inventory POS',
    url: 'app.oneplatform360.com/specialized-operations',
    kpis: [
      { label: 'OPD Patients Today', value: '412', change: '+15.8%', icon: Activity, color: 'text-red-600', bg: 'bg-red-100' },
      { label: 'Gym Active Members', value: '3,850', change: '+9.4%', icon: Users, color: 'text-orange-600', bg: 'bg-orange-100' },
      { label: 'Pharmacy & POS Sales', value: '₹14.2L', change: 'Live Sync', icon: IndianRupee, color: 'text-emerald-600', bg: 'bg-emerald-100' },
      { label: 'Turnstile Access Rate', value: '99.8%', change: 'Verified', icon: Shield, color: 'text-blue-600', bg: 'bg-blue-100' },
    ],
    chartLabel: 'Daily Patient & Member Traffic',
    chartData: [45, 62, 70, 84, 91, 99],
    activity: [
      { text: 'Digital Prescription E-Signed', sub: 'Patient EMR #HP-9102', time: '2 min ago', dot: 'bg-red-500' },
      { text: 'Gym Auto-Renewal Dispatched', sub: 'WhatsApp payment link sent', time: '8 min ago', dot: 'bg-orange-500' },
      { text: 'Stock Reorder Triggered', sub: 'Warehouse Min-Max Alert', time: '20 min ago', dot: 'bg-emerald-500' },
    ],
  },
  {
    id: 'ai-whatsapp',
    label: 'AI & WhatsApp',
    icon: Bot,
    color: '#059669',
    dashboardTitle: 'AI Autonomous Pipeline & Meta WhatsApp Hub',
    url: 'app.oneplatform360.com/ai-whatsapp-hub',
    kpis: [
      { label: 'Messages Sent / Mo', value: '2.5M+', change: 'Meta Cloud', icon: MessageCircle, color: 'text-emerald-600', bg: 'bg-emerald-100' },
      { label: 'Read Rate', value: '98.2%', change: '< 2s avg', icon: CheckCircle, color: 'text-teal-600', bg: 'bg-teal-100' },
      { label: 'Autonomous Workflows', value: '36 Live', change: 'Active', icon: Bot, color: 'text-cyan-600', bg: 'bg-cyan-100' },
      { label: 'Dues Recovered via AI', value: '₹28.4L', change: '+42%', icon: IndianRupee, color: 'text-purple-600', bg: 'bg-purple-100' },
    ],
    chartLabel: 'Autonomous AI Throughput & In-Chat Conversions',
    chartData: [42, 58, 69, 81, 90, 100],
    activity: [
      { text: 'Auto Fee & Dues WhatsApp Reminder', sub: '540 parents & members notified', time: '1 min ago', dot: 'bg-emerald-500' },
      { text: 'WhatsApp Payment PDF Receipt', sub: 'Dispatched in 0.8s', time: '10 min ago', dot: 'bg-teal-500' },
      { text: 'AI Anomaly Reconciled', sub: 'Bank payment matched', time: '25 min ago', dot: 'bg-cyan-500' },
    ],
  },
]

/* ─── Donut chart SVG ──── */
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
      <text x="42" y="42" textAnchor="middle" dominantBaseline="central" fill="#0f172a" fontWeight="bold" fontSize="11px">
        99.8%
      </text>
    </svg>
  )
}

export default function HeroSection() {
  const [activeId, setActiveId] = useState(TABS[0].id)
  const tab = TABS.find((t) => t.id === activeId)!

  // Auto-switch tabs gently
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
      <div className="glow-orb w-[750px] h-[750px] bg-blue-600/[0.18] -top-48 -left-40" />
      <div className="glow-orb w-[650px] h-[650px] bg-cyan-600/[0.14] top-40 -right-32" />
      <div className="glow-orb w-[500px] h-[500px] bg-indigo-500/[0.12] bottom-0 left-1/3" />

      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* 🌟 TOP TRUST STRIP BADGES (CRISP WHITE ON NAVY) 🌟 */}
        <div className="hidden md:flex items-center justify-between mb-10 pb-5 border-b border-cyan-500/20">
          <div className="flex items-center gap-2 text-xs text-cyan-300 font-bold uppercase tracking-wider">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
            Next-Generation Multi-Tenant Enterprise ERP &amp; AI Operating System
          </div>
          <div className="flex items-center gap-3.5 flex-wrap">
            {TOP_STATS.map((s) => (
              <div
                key={s.label}
                className="flex items-center gap-2.5 px-3 py-2 rounded-xl bg-white text-slate-900 border border-slate-200 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-300 group"
              >
                <div className={`w-8 h-8 rounded-lg ${s.bg} flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform`}>
                  <s.icon size={15} className={s.color} />
                </div>
                <div className="leading-tight">
                  <div className="text-xs font-bold text-slate-900">{s.label}</div>
                  <div className="text-[10px] text-slate-500 font-medium">{s.sub}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ──── HERO TOP ROW: Title & Executive Boardroom Scene ──── */}
        <div className="grid lg:grid-cols-12 gap-8 items-start mb-12">

          {/* ──── LEFT (5 Cols): Headline, Copy, Feature Pills & CTAs ──── */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-5 space-y-6"
          >
            {/* Top Pill */}
            <div className="badge-glow w-fit">
              <Sparkles size={12} className="text-cyan-300" />
              MULTI-TENANT ENTERPRISE OPERATING SYSTEM
            </div>

            {/* Main Headline */}
            <h1 className="font-display font-extrabold text-3xl sm:text-4xl xl:text-[3.3rem] leading-[1.12] tracking-tight text-white">
              Run Everything.<br />
              <span className="gradient-text">
                Smarter. Faster.
              </span><br />
              On <span className="text-white">One</span><span className="gradient-text">Platform360</span>
            </h1>

            {/* Description */}
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              Multi-Tenant ERP for Schools, Universities, Hospital OPDs, Gyms, Inventory &amp; HRMS — everything you need to run any business or institution from a single unified cloud platform.
            </p>

            {/* 🌟 4 CRISP WHITE FEATURE PILLS ON NAVY 🌟 */}
            <div className="grid grid-cols-2 gap-2.5 pt-1">
              {[
                { icon: Layers, text: 'Multi-Tenant Core', color: 'text-blue-600' },
                { icon: Lock, text: 'Role Based Access', color: 'text-purple-600' },
                { icon: Bot, text: 'AI Powered Engine', color: 'text-emerald-600' },
                { icon: Shield, text: 'Secure & Scalable', color: 'text-orange-600' },
              ].map((f) => (
                <div
                  key={f.text}
                  className="flex items-center gap-2.5 px-3.5 py-2.5 rounded-xl bg-white text-slate-900 border border-slate-200 shadow-sm hover:shadow-md hover:border-blue-400 transition-all duration-300"
                >
                  <f.icon size={15} className={f.color} />
                  <span className="text-xs font-bold text-slate-900">{f.text}</span>
                </div>
              ))}
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap gap-3 pt-2">
              <Link
                href="/services"
                className="btn-primary text-sm px-7 py-3.5 shadow-[0_0_25px_rgba(37,99,235,0.5)] hover:shadow-[0_0_35px_rgba(37,99,235,0.75)]"
              >
                Explore All Solutions <ArrowRight size={15} />
              </Link>
              <Link
                href="#what-we-do"
                className="btn-secondary text-sm px-7 py-3.5 group"
              >
                <Play size={13} className="text-cyan-400 group-hover:scale-110 transition-transform" />
                Inspect Capabilities
              </Link>
            </div>

            {/* 🌟 Social Trust Proof with Crisp White Mini Stat Cards 🌟 */}
            <div className="pt-3 border-t border-cyan-500/20 space-y-3">
              <div className="flex items-center gap-3">
                <div className="flex -space-x-2">
                  {['#0284c7', '#2563eb', '#7c3aed', '#059669', '#d97706'].map((c, i) => (
                    <div
                      key={i}
                      className="w-7 h-7 rounded-full border-2 border-[#0b192e] flex items-center justify-center text-[9px] font-bold text-white shadow-md"
                      style={{ background: c, zIndex: 5 - i }}
                    >
                      {['A', 'R', 'P', 'S', 'K'][i]}
                    </div>
                  ))}
                  <div className="w-7 h-7 rounded-full border-2 border-[#0b192e] bg-blue-950 flex items-center justify-center text-[8px] font-bold text-cyan-300 z-0">
                    +500
                  </div>
                </div>
                <p className="text-xs text-slate-300">
                  Trusted by <span className="font-semibold text-white">500+ enterprises &amp; institutions</span> across India
                </p>
              </div>

              {/* 4 Crisp White Stat Pills */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                {[
                  { value: '72%', label: 'Tasks Automated' },
                  { value: '99.98%', label: 'Accuracy' },
                  { value: '2.5M+', label: 'Active Users' },
                  { value: '500+', label: 'Happy Tenants' },
                ].map((stat) => (
                  <div key={stat.label} className="p-2.5 rounded-xl bg-white text-slate-900 border border-slate-200 shadow-sm text-center">
                    <div className="text-xs font-extrabold text-slate-900 font-display">{stat.value}</div>
                    <div className="text-[9.5px] text-slate-500 mt-0.5 font-medium">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* ──── RIGHT (7 Cols): Executive Boardroom Presentation Scene (Crisp White Frame) ──── */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="lg:col-span-7 space-y-4"
          >
            <div className="relative rounded-2xl overflow-hidden border-2 border-slate-200 bg-white p-1.5 shadow-[0_20px_60px_rgba(0,0,0,0.6)] group">
              <div className="relative aspect-[16/9] w-full rounded-xl overflow-hidden">
                <Image
                  src="/hero-showcase.jpg"
                  alt="OnePlatform360 Multi-Tenant Enterprise Command Center"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20" />

                {/* Top Badge */}
                <div className="absolute top-3 left-3 px-3 py-1.5 rounded-xl bg-white/90 backdrop-blur-md border border-slate-200 flex items-center gap-2 shadow-md">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                  <span className="text-[11px] font-bold text-slate-900 tracking-wide">
                    Multi-Tenant Cloud ERP Display
                  </span>
                </div>

                {/* 🌟 CRISP WHITE BOTTOM OVERLAY BAR 🌟 */}
                <div className="absolute bottom-3 left-3 right-3 p-3.5 rounded-xl bg-white/95 backdrop-blur-md border border-slate-200 shadow-2xl flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-blue-100 border border-blue-200 flex items-center justify-center text-blue-700 shrink-0">
                      <Sparkles size={16} />
                    </div>
                    <div>
                      <div className="text-xs font-bold text-slate-900">Live Multi-Tenant Command Center</div>
                      <div className="text-[10px] text-slate-600 font-medium">Empowering schools, hospitals, gyms, warehouses &amp; enterprises</div>
                    </div>
                  </div>
                  <Link
                    href="/demo"
                    className="px-3.5 py-1.5 rounded-lg bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold shadow-md transition-all flex items-center gap-1 shrink-0"
                  >
                    Request Demo <ArrowRight size={12} />
                  </Link>
                </div>
              </div>
            </div>
          </motion.div>

        </div>

        {/* ──── HERO BOTTOM ROW: CRISP WHITE ENTERPRISE DASHBOARD & RIGHT MODULE CARDS ──── */}
        <div className="grid lg:grid-cols-12 gap-8 items-start pt-6 border-t border-cyan-500/20">

          {/* ──── LEFT (8 Cols): CRISP WHITE MODERN SAAS DASHBOARD ──── */}
          <div className="lg:col-span-8 space-y-4">
            {/* Tab Selectors */}
            <div className="flex items-center justify-between gap-2 flex-wrap">
              <div className="flex items-center gap-2 flex-wrap">
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
              <div className="text-xs text-cyan-300 font-semibold flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                Multi-Tenant Live Preview
              </div>
            </div>

            {/* 🌟 LUXURIOUS CRISP WHITE DASHBOARD FRAME 🌟 */}
            <div className="rounded-2xl overflow-hidden bg-white text-slate-900 border-2 border-slate-200 shadow-[0_25px_70px_rgba(0,0,0,0.5)]">
              {/* Browser Header Bar */}
              <div className="flex items-center gap-2 px-4 py-3 border-b border-slate-200 bg-slate-100">
                <div className="flex gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-rose-500" />
                  <div className="w-2.5 h-2.5 rounded-full bg-amber-500" />
                  <div className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
                </div>
                <div className="flex-1 mx-3">
                  <div className="px-3 py-1 rounded-md bg-white border border-slate-200 text-[11px] text-slate-700 font-mono flex items-center gap-1.5 truncate shadow-sm">
                    <Lock size={10} className="text-emerald-600 shrink-0" />
                    {tab.url}
                  </div>
                </div>
                <div className="text-[10px] text-emerald-700 font-bold px-2 py-0.5 rounded-full bg-emerald-100 border border-emerald-300">
                  Active Multi-Tenant Cluster
                </div>
              </div>

              {/* White Dashboard Content Body */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={tab.id}
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -6 }}
                  transition={{ duration: 0.3 }}
                  className="p-5 sm:p-7 space-y-5 bg-slate-50"
                >
                  {/* Dashboard Header */}
                  <div className="flex items-center justify-between border-b border-slate-200 pb-4">
                    <div className="flex items-center gap-3">
                      <div
                        className="w-10 h-10 rounded-xl flex items-center justify-center shadow-sm"
                        style={{ background: `${tab.color}15`, border: `1px solid ${tab.color}35` }}
                      >
                        <tab.icon size={20} style={{ color: tab.color }} />
                      </div>
                      <div>
                        <div className="text-[10px] uppercase tracking-wider text-slate-500 font-bold font-mono">
                          OnePlatform360 Multi-Tenant Engine
                        </div>
                        <div className="text-slate-900 font-bold text-base sm:text-lg font-display">
                          {tab.dashboardTitle}
                        </div>
                      </div>
                    </div>
                    <div className="text-[10px] font-bold px-3 py-1 rounded-full bg-blue-100 text-blue-800 border border-blue-200">
                      Real-time Sync
                    </div>
                  </div>

                  {/* 4 Crisp White KPI Cards */}
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                    {tab.kpis.map((kpi) => (
                      <div
                        key={kpi.label}
                        className="rounded-xl bg-white border border-slate-200 p-3.5 shadow-sm hover:border-blue-400 hover:shadow-md transition-all"
                      >
                        <div className="flex items-center justify-between mb-2">
                          <div className={`w-7 h-7 rounded-lg flex items-center justify-center ${kpi.bg}`}>
                            <kpi.icon size={14} className={kpi.color} />
                          </div>
                          <span className="text-[10px] text-emerald-600 font-bold bg-emerald-50 px-1.5 py-0.5 rounded border border-emerald-200">
                            {kpi.change}
                          </span>
                        </div>
                        <div className="text-slate-900 font-extrabold text-lg sm:text-xl font-display">{kpi.value}</div>
                        <div className="text-[11px] text-slate-500 mt-0.5 font-medium">{kpi.label}</div>
                      </div>
                    ))}
                  </div>

                  {/* Two Charts Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-5 gap-4">
                    {/* Line / Bar Chart Card */}
                    <div className="sm:col-span-3 rounded-xl bg-white border border-slate-200 p-4 shadow-sm">
                      <div className="flex items-center justify-between mb-3">
                        <span className="text-xs font-bold text-slate-900 flex items-center gap-1.5">
                          <BarChart3 size={14} style={{ color: tab.color }} /> {tab.chartLabel}
                        </span>
                        <span className="text-[9px] font-bold text-blue-700 px-2 py-0.5 rounded bg-blue-50 border border-blue-200">
                          FY 2026 Live
                        </span>
                      </div>
                      <div className="flex items-end gap-2.5 h-24 pt-2">
                        {tab.chartData.map((h, i) => (
                          <motion.div
                            key={i}
                            initial={{ scaleY: 0 }}
                            animate={{ scaleY: 1 }}
                            transition={{ duration: 0.5, delay: i * 0.05 }}
                            style={{
                              height: `${h}%`,
                              background: `linear-gradient(to top, #0284c7, ${tab.color})`,
                              transformOrigin: 'bottom',
                            }}
                            className="flex-1 rounded-t-md opacity-90 hover:opacity-100 transition-opacity cursor-pointer shadow-sm"
                          />
                        ))}
                      </div>
                      <div className="flex justify-between mt-2.5 text-[9.5px] text-slate-400 font-medium">
                        {['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'].map((m) => <span key={m}>{m}</span>)}
                      </div>
                    </div>

                    {/* Donut Chart Card */}
                    <div className="sm:col-span-2 rounded-xl bg-white border border-slate-200 p-4 shadow-sm flex flex-col justify-between">
                      <div className="text-xs font-bold text-slate-900 mb-1">Tenant Cluster Health</div>
                      <div className="flex items-center justify-center my-auto py-2">
                        <DonutChart
                          data={[35, 25, 22, 18]}
                          colors={['#0284c7', '#6366f1', '#a855f7', '#10b981']}
                        />
                      </div>
                      <div className="grid grid-cols-2 gap-1.5 mt-1">
                        {[
                          { label: 'Schools', color: '#0284c7' },
                          { label: 'Hospitals', color: '#6366f1' },
                          { label: 'Gyms', color: '#a855f7' },
                          { label: 'Enterprise', color: '#10b981' },
                        ].map((c) => (
                          <div key={c.label} className="flex items-center gap-1.5 text-[9.5px] text-slate-600 font-medium">
                            <div className="w-2 h-2 rounded-full" style={{ background: c.color }} />
                            {c.label}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Real-time Activity Stream */}
                  <div className="rounded-xl bg-white border border-slate-200 p-4 space-y-2 shadow-sm">
                    <div className="text-xs font-bold text-slate-900 mb-2 flex items-center justify-between">
                      <span>Real-time Multi-Tenant Operations Log</span>
                      <span className="text-[9.5px] font-semibold text-blue-600">Updated 1s ago</span>
                    </div>
                    {tab.activity.map((a, i) => (
                      <div key={i} className="flex items-center gap-3 text-xs p-2 rounded-lg hover:bg-slate-50 transition-colors border-b border-slate-100 last:border-0">
                        <div className={`w-2.5 h-2.5 rounded-full shrink-0 ${a.dot}`} />
                        <span className="text-slate-900 font-semibold text-[11.5px]">{a.text}</span>
                        <span className="text-slate-500 text-[10.5px] hidden sm:inline">{a.sub}</span>
                        <span className="ml-auto text-slate-400 text-[9.5px] shrink-0 font-mono">{a.time}</span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

          {/* ──── RIGHT (4 Cols): Module Showcase Cards in Crisp White ──── */}
          <div className="lg:col-span-4 space-y-4">

            {/* Card 1: Multi-Tenant ERP */}
            <div className="rounded-2xl p-5 bg-white text-slate-900 border border-slate-200 shadow-xl hover:shadow-2xl transition-all duration-300 group">
              <div className="flex items-center gap-2.5 mb-2">
                <div className="w-8 h-8 rounded-xl bg-blue-100 border border-blue-200 flex items-center justify-center text-blue-700">
                  <Layers size={16} />
                </div>
                <div>
                  <h3 className="font-display font-bold text-slate-900 text-sm">Multi-Tenant ERP</h3>
                  <div className="text-[10px] text-blue-600 font-semibold">Schools, Hospitals, Gyms, POS</div>
                </div>
              </div>
              <p className="text-slate-600 text-xs leading-relaxed mb-3">
                Tailored industry modules for academic lifecycle, hospital OPD queues, gym turnstiles, and POS billing.
              </p>

              {/* 8 Module Icons */}
              <div className="grid grid-cols-4 gap-1.5 mb-3">
                {[
                  { label: 'Schools', icon: GraduationCap, color: '#0284c7' },
                  { label: 'University', icon: Building2, color: '#6366f1' },
                  { label: 'Hospital', icon: Activity, color: '#ef4444' },
                  { label: 'Gym/Fitness', icon: Users, color: '#f97316' },
                  { label: 'Inventory', icon: FolderOpen, color: '#10b981' },
                  { label: 'Billing/POS', icon: IndianRupee, color: '#f59e0b' },
                  { label: 'Turnstiles', icon: Lock, color: '#8b5cf6' },
                  { label: 'BI Reports', icon: BarChart3, color: '#14b8a6' },
                ].map((m) => (
                  <div key={m.label} className="p-1.5 rounded-lg bg-slate-50 border border-slate-200 flex flex-col items-center gap-0.5 text-center group-hover:border-blue-300">
                    <m.icon size={13} style={{ color: m.color }} />
                    <span className="text-[8.5px] text-slate-700 font-medium truncate w-full">{m.label}</span>
                  </div>
                ))}
              </div>

              <Link
                href="/services"
                className="inline-flex items-center gap-1.5 text-xs font-bold text-blue-600 hover:text-blue-800 group-hover:gap-2 transition-all"
              >
                Explore Multi-Tenant Modules <ChevronRight size={13} />
              </Link>
            </div>

            {/* Card 2: Smart HRMS */}
            <div className="rounded-2xl p-5 bg-white text-slate-900 border border-slate-200 shadow-xl hover:shadow-2xl transition-all duration-300 group">
              <div className="flex items-center gap-2.5 mb-2">
                <div className="w-8 h-8 rounded-xl bg-purple-100 border border-purple-200 flex items-center justify-center text-purple-700">
                  <Users size={16} />
                </div>
                <div>
                  <h3 className="font-display font-bold text-slate-900 text-sm">Smart HRMS</h3>
                  <div className="text-[10px] text-purple-600 font-semibold">Staff, Payroll &amp; Performance</div>
                </div>
              </div>
              <p className="text-slate-600 text-xs leading-relaxed mb-3">
                Complete employee management from biometric check-in to automated monthly payroll.
              </p>

              {/* 8 HRMS Icons */}
              <div className="grid grid-cols-4 gap-1.5 mb-3">
                {[
                  { label: 'Employees', icon: Users, color: '#7c3aed' },
                  { label: 'Attendance', icon: CheckCircle, color: '#10b981' },
                  { label: 'Leave', icon: Clock, color: '#f97316' },
                  { label: 'Payroll', icon: IndianRupee, color: '#0284c7' },
                  { label: 'Appraisal', icon: Award, color: '#ec4899' },
                  { label: 'Recruit', icon: UserPlus, color: '#6366f1' },
                  { label: 'Docs', icon: FolderOpen, color: '#14b8a6' },
                  { label: 'Org Chart', icon: Building2, color: '#f59e0b' },
                ].map((m) => (
                  <div key={m.label} className="p-1.5 rounded-lg bg-slate-50 border border-slate-200 flex flex-col items-center gap-0.5 text-center group-hover:border-purple-300">
                    <m.icon size={13} style={{ color: m.color }} />
                    <span className="text-[8.5px] text-slate-700 font-medium truncate w-full">{m.label}</span>
                  </div>
                ))}
              </div>

              <Link
                href="/services/hrms"
                className="inline-flex items-center gap-1.5 text-xs font-bold text-purple-600 hover:text-purple-800 group-hover:gap-2 transition-all"
              >
                Explore HRMS Suite <ChevronRight size={13} />
              </Link>
            </div>

            {/* Card 3: AI Automation & WhatsApp Mini Feature Banners */}
            <div className="grid grid-cols-2 gap-2.5">
              <Link href="/services/ai-automation" className="rounded-xl p-3.5 bg-white text-slate-900 border border-slate-200 hover:border-emerald-400 hover:shadow-lg transition-all group block">
                <div className="w-7 h-7 rounded-lg bg-emerald-100 flex items-center justify-center text-emerald-700 mb-1.5">
                  <Bot size={14} />
                </div>
                <div className="text-xs font-bold text-slate-900 group-hover:text-emerald-700">AI Automation</div>
                <div className="text-[9.5px] text-slate-500 mt-0.5">Autonomous Ops</div>
              </Link>
              <Link href="/services/whatsapp-automation" className="rounded-xl p-3.5 bg-white text-slate-900 border border-slate-200 hover:border-green-400 hover:shadow-lg transition-all group block">
                <div className="w-7 h-7 rounded-lg bg-green-100 flex items-center justify-center text-green-700 mb-1.5">
                  <MessageCircle size={14} />
                </div>
                <div className="text-xs font-bold text-slate-900 group-hover:text-green-700">WhatsApp Hub</div>
                <div className="text-[9.5px] text-slate-500 mt-0.5">Automated Alerts</div>
              </Link>
            </div>

          </div>

        </div>

        {/* 🌟 BOTTOM COUNTERS STRIP IN CRISP WHITE CARDS 🌟 */}
        <div className="mt-16 grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-4xl mx-auto">
          <Counter end={500} suffix="+" label="Enterprises &amp; Institutions" />
          <Counter end={2500} suffix="K+" label="Active Users &amp; Members" />
          <Counter end={99} suffix=".9%" label="Uptime SLA Guaranteed" />
          <Counter end={15} suffix="+" label="Multi-Tenant Modules" />
        </div>

      </div>
    </section>
  )
}
