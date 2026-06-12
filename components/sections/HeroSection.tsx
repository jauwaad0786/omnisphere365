'use client'
import { useEffect, useState } from 'react'
import Link from 'next/link'
import { ArrowRight, Play, TrendingUp, Users, CheckCircle, BarChart3, Zap, Shield } from 'lucide-react'

const COUNTERS = [
  { end: 500, suffix: '+', label: 'Institutions' },
  { end: 120, suffix: 'K+', label: 'Students' },
  { end: 99, suffix: '.9%', label: 'Uptime' },
  { end: 12, suffix: '+', label: 'ERP Modules' },
]

function useCountUp(end: number, duration = 2000) {
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

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center pt-16 overflow-hidden grid-pattern">
      {/* Glow orbs */}
      <div className="glow-orb w-[600px] h-[600px] bg-indigo-600/20 -top-32 -left-40" />
      <div className="glow-orb w-[400px] h-[400px] bg-sky-600/15 top-40 -right-20" />
      <div className="glow-orb w-[300px] h-[300px] bg-purple-600/10 bottom-10 left-1/3" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* Left — Text */}
          <div className="space-y-6">
            <div className="badge w-fit">
              <Zap size={10} />
              India&apos;s #1 Cloud ERP Platform
            </div>

            <h1 className="font-display font-bold text-4xl sm:text-5xl xl:text-6xl leading-tight text-white">
              Transform Your{' '}
              <span className="gradient-text">Institution</span>{' '}
              with Enterprise{' '}
              <span className="gradient-text">AI ERP</span>
            </h1>

            <p className="text-slate-400 text-lg leading-relaxed max-w-lg">
              School ERP, HRMS, Hospital OPD, Sales ERP — all powered by AI and cloud. Trusted by 500+ institutions across India.
            </p>

            <div className="flex flex-wrap gap-3">
              <Link href="/demo" className="btn-primary text-base px-6 py-3">
                Book Free Demo <ArrowRight size={16} />
              </Link>
              <Link href="/services" className="btn-secondary text-base px-6 py-3">
                <Play size={14} className="fill-current" /> Watch Overview
              </Link>
            </div>

            {/* Trust badges */}
            <div className="flex flex-wrap gap-4 pt-2">
              {['99.9% Uptime SLA', '24/7 Support', 'ISO Compliant', 'Free Onboarding'].map((t) => (
                <div key={t} className="flex items-center gap-1.5 text-xs text-slate-400">
                  <CheckCircle size={13} className="text-green-400 shrink-0" />
                  {t}
                </div>
              ))}
            </div>

            {/* Counters */}
            <div className="grid grid-cols-4 gap-4 pt-4 border-t border-[#1e1e3a]">
              {COUNTERS.map((c) => <Counter key={c.label} {...c} />)}
            </div>
          </div>

          {/* Right — Dashboard Mockup */}
          <div className="relative lg:ml-8">
            {/* Main dashboard card */}
            <div className="relative rounded-2xl border border-[#1e1e3a] bg-[#151528] overflow-hidden shadow-[0_32px_80px_rgba(0,0,0,0.6)]">
              {/* Fake browser bar */}
              <div className="flex items-center gap-2 px-4 py-3 border-b border-[#1e1e3a] bg-[#0f0f1a]">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-500/70" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/70" />
                  <div className="w-3 h-3 rounded-full bg-green-500/70" />
                </div>
                <div className="flex-1 mx-4 px-3 py-1 rounded bg-[#1e1e3a] text-xs text-slate-500 font-mono">
                  app.omnisphere365.com/dashboard
                </div>
              </div>

              {/* Dashboard content */}
              <div className="p-5 space-y-4">
                {/* Header row */}
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-xs text-slate-500">Good Morning, Admin</div>
                    <div className="text-white font-semibold font-display">School Dashboard</div>
                  </div>
                  <div className="badge text-xs">Live</div>
                </div>

                {/* Stats row */}
                <div className="grid grid-cols-3 gap-3">
                  {[
                    { label: 'Students', value: '487', icon: Users, color: 'text-indigo-400', bg: 'bg-indigo-500/10', change: '+12' },
                    { label: 'Fees Today', value: '₹42K', icon: TrendingUp, color: 'text-green-400', bg: 'bg-green-500/10', change: '+8%' },
                    { label: 'Attendance', value: '94%', icon: CheckCircle, color: 'text-sky-400', bg: 'bg-sky-500/10', change: '+2%' },
                  ].map((s) => (
                    <div key={s.label} className="rounded-xl bg-[#0f0f1a] border border-[#1e1e3a] p-3">
                      <div className={`feature-icon w-7 h-7 ${s.bg} border-0 mb-2`}>
                        <s.icon size={13} className={s.color} />
                      </div>
                      <div className="text-white font-bold text-base">{s.value}</div>
                      <div className="text-slate-500 text-[10px]">{s.label}</div>
                      <div className="text-green-400 text-[10px] mt-0.5">{s.change}</div>
                    </div>
                  ))}
                </div>

                {/* Chart bar mockup */}
                <div className="rounded-xl bg-[#0f0f1a] border border-[#1e1e3a] p-4">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-medium text-white flex items-center gap-1.5">
                      <BarChart3 size={12} className="text-indigo-400" /> Fee Collection
                    </span>
                    <span className="text-xs text-slate-500">Last 6 months</span>
                  </div>
                  <div className="flex items-end gap-2 h-16">
                    {[40, 65, 50, 80, 70, 95].map((h, i) => (
                      <div key={i} className="flex-1 rounded-t"
                        style={{ height: `${h}%`, background: `linear-gradient(to top, #6366f1, #818cf8)`, opacity: i === 5 ? 1 : 0.5 + i * 0.08 }} />
                    ))}
                  </div>
                  <div className="flex justify-between mt-2 text-[10px] text-slate-600">
                    {['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'].map((m) => <span key={m}>{m}</span>)}
                  </div>
                </div>

                {/* Recent activity */}
                <div className="space-y-2">
                  {[
                    { name: 'Aryan Sharma', action: 'Fee paid ₹8,400', time: '2 min ago', dot: 'bg-green-400' },
                    { name: 'Neha Gupta', action: 'Attendance marked', time: '5 min ago', dot: 'bg-sky-400' },
                    { name: 'Class X-B', action: 'Exam result published', time: '12 min ago', dot: 'bg-indigo-400' },
                  ].map((a) => (
                    <div key={a.name} className="flex items-center gap-3 text-xs">
                      <div className={`w-1.5 h-1.5 rounded-full shrink-0 ${a.dot}`} />
                      <span className="text-slate-300">{a.name}</span>
                      <span className="text-slate-500">{a.action}</span>
                      <span className="ml-auto text-slate-600">{a.time}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Floating cards */}
            <div className="absolute -top-6 -right-6 glass rounded-xl px-4 py-3 shadow-xl animate-float hidden xl:block">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-green-500/20 flex items-center justify-center">
                  <CheckCircle size={14} className="text-green-400" />
                </div>
                <div>
                  <div className="text-white text-xs font-semibold">New Admission</div>
                  <div className="text-green-400 text-[10px]">Just now</div>
                </div>
              </div>
            </div>

            <div className="absolute -bottom-6 -left-6 glass rounded-xl px-4 py-3 shadow-xl animate-float-slow hidden xl:block">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-indigo-500/20 flex items-center justify-center">
                  <Shield size={14} className="text-indigo-400" />
                </div>
                <div>
                  <div className="text-white text-xs font-semibold">AI Report Ready</div>
                  <div className="text-indigo-400 text-[10px]">Click to view →</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
