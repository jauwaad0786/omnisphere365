'use client'
import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import {
  ArrowRight, Sparkles, CheckCircle, ChevronRight, X, Play,
  Zap, Bot, MessageCircle, Users, GraduationCap, IndianRupee,
  ShieldCheck, BarChart3, Clock, Check
} from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

type WhatWeDoItem = {
  id: string
  title: string
  subtitle: string
  desc: string
  image: string
  badge: string
  color: string
  icon: any
  impactMetrics: { value: string; label: string }[]
  capabilities: string[]
  liveDemo: {
    title: string
    actionPrompt: string
    resultLabel: string
    resultData: string
  }
}

const WHAT_WE_DO_CARDS: WhatWeDoItem[] = [
  {
    id: 'erp',
    title: 'Data & Enterprise ERP',
    subtitle: 'Core Academic & Business Foundation',
    desc: 'Build the trusted, scalable, and AI-ready data foundation your school, college, or enterprise needs to operate at peak efficiency.',
    image: '/school-erp-showcase.jpg',
    badge: 'Education & Enterprise',
    color: '#38bdf8',
    icon: GraduationCap,
    impactMetrics: [
      { value: '50K+', label: 'Students Managed' },
      { value: '99.9%', label: 'Uptime SLA' },
      { value: '12+', label: 'Integrated Modules' },
    ],
    capabilities: [
      'Automated student admission to alumni lifecycle',
      'Real-time biometric attendance & parent sync',
      'Fee collection engine with online UPI reconciliation',
      'Continuous gradebook & CBSE/ICSE exam generator',
    ],
    liveDemo: {
      title: 'Fee Receipt & Admission Simulator',
      actionPrompt: 'Simulate Automated Fee Collection for Class X-A',
      resultLabel: 'Instant Verification Result',
      resultData: 'Receipt #OP360-8429 generated for ₹14,500. WhatsApp confirmation dispatched to parent in 1.2s.',
    },
  },
  {
    id: 'hrms',
    title: 'Smart HRMS & Payroll',
    subtitle: 'Workforce Intelligence & Automation',
    desc: 'Automate biometric attendance, leave policies, automated salary slips, and staff performance from one central command center.',
    image: '/hrms-showcase.jpg',
    badge: 'HR & Payroll',
    color: '#a78bfa',
    icon: Users,
    impactMetrics: [
      { value: '100%', label: 'On-Time Disbursal' },
      { value: '15 Hrs', label: 'Saved per Month' },
      { value: 'Zero', label: 'Compliance Errors' },
    ],
    capabilities: [
      'Biometric hardware integration with cloud attendance',
      'Automated TDS, PF, ESI and custom deduction rules',
      '1-click salary slip generation to employee email/WhatsApp',
      'Granular performance appraisal & OKR tracking',
    ],
    liveDemo: {
      title: 'Payroll Calculation & Disbursal Simulator',
      actionPrompt: 'Simulate Monthly Salary Run for 184 Employees',
      resultLabel: 'Bank API Disbursal Status',
      resultData: 'Calculated ₹34,20,000 across 184 employees with automated PF & TDS deductions. Direct bank file prepared.',
    },
  },
  {
    id: 'ai',
    title: 'Agentic AI-Led Operations',
    subtitle: 'Autonomous Workflow Engine',
    desc: 'Embed real-time artificial intelligence into your routines — from automated fee recovery reminders to instant gradebook generation.',
    image: '/ai-automation-showcase.jpg',
    badge: 'AI & Automation',
    color: '#34d399',
    icon: Bot,
    impactMetrics: [
      { value: '72%', label: 'Admin Work Automated' },
      { value: '< 2s', label: 'Workflow Latency' },
      { value: '356 Hrs', label: 'Monthly Hours Saved' },
    ],
    capabilities: [
      'Autonomous fee reminder & intelligent follow-up scheduling',
      'Automated attendance anomaly detection for absent staff/students',
      'Predictive student performance analytics & early intervention',
      'Natural language queries for institutional data reports',
    ],
    liveDemo: {
      title: 'Autonomous Fee Recovery Bot Simulator',
      actionPrompt: 'Trigger Smart AI Reminder for Overdue Fees',
      resultLabel: 'AI Execution Status',
      resultData: 'AI analyzed 48 pending dues, scheduled personalized WhatsApp reminders at parent-preferred hours, recovered 84% within 48h.',
    },
  },
  {
    id: 'whatsapp',
    title: 'Integrated WhatsApp Ecosystem',
    subtitle: 'Omnichannel Engagement & Instant Support',
    desc: 'Leverage official Meta-verified WhatsApp Cloud APIs for instant parent alerts, fee payment confirmations, and 24/7 student support bots.',
    image: '/whatsapp-showcase.jpg',
    badge: 'WhatsApp Cloud API',
    color: '#22c55e',
    icon: MessageCircle,
    impactMetrics: [
      { value: '98.2%', label: 'Message Open Rate' },
      { value: '2.5M+', label: 'Dispatches / Mo' },
      { value: '< 1s', label: 'Instant Bot Response' },
    ],
    capabilities: [
      'Official Meta Verified Green Badge Business Cloud API',
      'Automated circulars, exam timetables & homework distribution',
      'Direct in-chat fee payment links with instant PDF receipts',
      'Interactive AI chatbot answering admission & bus route FAQs',
    ],
    liveDemo: {
      title: 'Verified WhatsApp Broadcast Simulator',
      actionPrompt: 'Dispatch Exam Date Sheet to 1,850 Parents',
      resultLabel: 'Broadcast Metrics',
      resultData: 'Dispatched 1,850 personalized messages in 12 seconds. 94% read within 15 minutes. 0 bounce rate.',
    },
  },
]

export default function WhatWeDoSection() {
  const [selectedId, setSelectedId] = useState<string | null>(null)
  const [simulating, setSimulating] = useState(false)
  const [simulatedResult, setSimulatedResult] = useState(false)

  const activeItem = WHAT_WE_DO_CARDS.find((c) => c.id === selectedId)

  const handleCardClick = (id: string) => {
    setSelectedId(selectedId === id ? null : id)
    setSimulatedResult(false)
  }

  const handleRunSimulation = () => {
    setSimulating(true)
    setSimulatedResult(false)
    setTimeout(() => {
      setSimulating(false)
      setSimulatedResult(true)
    }, 1200)
  }

  return (
    <section className="section-pad bg-[#091526] relative overflow-hidden" id="what-we-do">
      {/* Background glow */}
      <div className="glow-orb w-[650px] h-[650px] bg-cyan-600/[0.08] -top-40 right-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Section Header (EXL Style) */}
        <div className="mb-12 max-w-3xl">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-10 h-1 bg-gradient-to-r from-amber-500 to-cyan-400 rounded-full" />
            <span className="text-xs font-bold uppercase tracking-widest text-cyan-300">
              What We Do
            </span>
          </div>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-[2.6rem] text-white leading-tight">
            Data, AI, and cloud expertise coupled with trusted execution to{' '}
            <span className="gradient-text">drive institutional outcomes</span>
          </h2>
          <p className="text-slate-300 text-xs sm:text-sm mt-3">
            Click on any enterprise capability below to explore live simulation, impact metrics, and architectural capabilities.
          </p>
        </div>

        {/* 4 EXL-Style High-Impact Interactive Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
          {WHAT_WE_DO_CARDS.map((card) => {
            const isSelected = selectedId === card.id

            return (
              <div
                key={card.id}
                onClick={() => handleCardClick(card.id)}
                className={`glass rounded-2xl overflow-hidden cursor-pointer transition-all duration-400 flex flex-col justify-between group bg-[#0d203b] ${
                  isSelected
                    ? 'border-2 border-cyan-400 shadow-[0_0_40px_rgba(56,189,248,0.35)] scale-[1.02]'
                    : 'border border-cyan-500/25 hover:border-cyan-400/60 hover:-translate-y-1.5'
                }`}
              >
                <div>
                  {/* Real Photo on Top */}
                  <div className="relative aspect-[16/10] overflow-hidden bg-[#091526]">
                    <Image
                      src={card.image}
                      alt={card.title}
                      fill
                      className="object-cover transition-transform duration-600 group-hover:scale-108"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0d203b] via-transparent to-transparent" />
                    <div className="absolute top-3 left-3">
                      <span className="text-[10px] font-bold px-2.5 py-1 rounded-md bg-[#091526]/90 backdrop-blur-md border border-cyan-500/30 text-cyan-300">
                        {card.badge}
                      </span>
                    </div>

                    {/* Interactive Click Indicator */}
                    <div className="absolute top-3 right-3">
                      <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full transition-all ${
                        isSelected
                          ? 'bg-cyan-400 text-[#091526] font-extrabold shadow-md'
                          : 'bg-[#091526]/80 text-cyan-300 border border-cyan-500/30 group-hover:bg-cyan-500/30'
                      }`}>
                        {isSelected ? 'Active Preview' : 'Click to Inspect'}
                      </span>
                    </div>
                  </div>

                  {/* Body Text */}
                  <div className="p-6">
                    <div className="text-[11px] font-bold uppercase tracking-wider text-amber-400 mb-1">
                      {card.subtitle}
                    </div>
                    <h3 className="font-display font-bold text-lg text-white mb-2.5 group-hover:text-cyan-300 transition-colors">
                      {card.title}
                    </h3>
                    <p className="text-slate-300 text-xs sm:text-sm leading-relaxed mb-4">
                      {card.desc}
                    </p>
                  </div>
                </div>

                {/* Bottom CTA Link */}
                <div className="p-6 pt-0 flex items-center justify-between">
                  <span className="inline-flex items-center gap-1.5 text-xs font-bold text-cyan-300 group-hover:text-white transition-colors">
                    {isSelected ? 'Close Simulation' : 'Live Interactive Demo'}
                    <ArrowRight size={14} className="group-hover:translate-x-1.5 text-amber-400 transition-transform" />
                  </span>
                </div>
              </div>
            )
          })}
        </div>

        {/* ──── EXPANDED INTERACTIVE SIMULATOR DRAWER (Opens when any card is clicked) ──── */}
        <AnimatePresence>
          {activeItem && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.4 }}
              className="mt-8 overflow-hidden"
            >
              <div className="rounded-3xl border-2 border-cyan-400/50 bg-[#0c1c33] p-7 sm:p-10 shadow-[0_20px_70px_rgba(0,0,0,0.8)] relative">
                <div className="flex items-center justify-between pb-6 border-b border-cyan-500/20">
                  <div className="flex items-center gap-3">
                    <div
                      className="w-10 h-10 rounded-xl flex items-center justify-center shadow-lg"
                      style={{ background: `${activeItem.color}20`, border: `1px solid ${activeItem.color}45` }}
                    >
                      <activeItem.icon size={20} style={{ color: activeItem.color }} />
                    </div>
                    <div>
                      <div className="text-[10px] uppercase tracking-wider text-amber-400 font-bold">
                        Interactive Capability Sandbox
                      </div>
                      <h3 className="font-display font-bold text-xl sm:text-2xl text-white">
                        {activeItem.title}
                      </h3>
                    </div>
                  </div>

                  <button
                    onClick={() => setSelectedId(null)}
                    className="p-2 rounded-xl bg-[#091526] text-slate-400 hover:text-white hover:bg-white/10 transition-colors"
                  >
                    <X size={20} />
                  </button>
                </div>

                <div className="grid lg:grid-cols-12 gap-8 mt-8 items-start">

                  {/* Left Column: Business Capabilities & Impact Metrics (6 Cols) */}
                  <div className="lg:col-span-6 space-y-6">
                    <div>
                      <h4 className="text-xs font-bold uppercase tracking-wider text-cyan-300 mb-3">
                        Proven Business Impact Metrics
                      </h4>
                      <div className="grid grid-cols-3 gap-3">
                        {activeItem.impactMetrics.map((m) => (
                          <div key={m.label} className="p-3.5 rounded-xl bg-[#091526] border border-cyan-500/20 text-center">
                            <div className="text-xl sm:text-2xl font-extrabold font-display gradient-text">{m.value}</div>
                            <div className="text-[10px] text-slate-300 mt-0.5">{m.label}</div>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h4 className="text-xs font-bold uppercase tracking-wider text-cyan-300 mb-3">
                        Enterprise Architecture Modules
                      </h4>
                      <div className="space-y-2">
                        {activeItem.capabilities.map((c, i) => (
                          <div key={i} className="flex items-start gap-2.5 p-2.5 rounded-xl bg-[#091526] border border-cyan-500/15 text-xs text-slate-200">
                            <CheckCircle size={16} className="text-emerald-400 shrink-0 mt-0.5" />
                            <span>{c}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="flex gap-3 pt-2">
                      <Link
                        href={`/services/${activeItem.id === 'erp' ? 'school-erp' : activeItem.id === 'whatsapp' ? 'whatsapp-automation' : activeItem.id === 'ai' ? 'ai-automation' : 'hrms'}`}
                        className="btn-primary text-xs py-3 px-5"
                      >
                        Explore Full Architecture Specs <ArrowRight size={13} />
                      </Link>
                      <Link href="/demo" className="btn-secondary text-xs py-3 px-5">
                        Book Dedicated Walkthrough
                      </Link>
                    </div>
                  </div>

                  {/* Right Column: Live Simulator Terminal (6 Cols) */}
                  <div className="lg:col-span-6">
                    <div className="rounded-2xl bg-[#081220] border border-cyan-500/30 p-6 space-y-5 shadow-inner">
                      <div className="flex items-center justify-between border-b border-cyan-500/20 pb-3">
                        <div className="flex items-center gap-2">
                          <div className="w-2.5 h-2.5 rounded-full bg-rose-500" />
                          <div className="w-2.5 h-2.5 rounded-full bg-amber-500" />
                          <div className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
                          <span className="text-[11px] font-mono text-cyan-300 ml-2 font-bold">
                            {activeItem.liveDemo.title}
                          </span>
                        </div>
                        <span className="text-[10px] text-emerald-400 font-semibold px-2 py-0.5 rounded bg-emerald-500/15 border border-emerald-500/30">
                          Sandbox Ready
                        </span>
                      </div>

                      <div className="space-y-3">
                        <div className="text-xs text-slate-300 font-medium">
                          Click below to trigger a live autonomous event through the OnePlatform360 engine:
                        </div>

                        <button
                          onClick={handleRunSimulation}
                          disabled={simulating}
                          className="w-full py-3 px-4 rounded-xl bg-gradient-to-r from-blue-600 via-cyan-600 to-blue-700 hover:from-blue-500 hover:to-cyan-500 text-white font-bold text-xs flex items-center justify-center gap-2 transition-all shadow-lg shadow-blue-500/30 disabled:opacity-60"
                        >
                          <Play size={14} className={simulating ? 'animate-spin' : ''} />
                          {simulating ? 'Processing Simulation Engine...' : activeItem.liveDemo.actionPrompt}
                        </button>
                      </div>

                      {/* Simulation Result Terminal */}
                      <AnimatePresence>
                        {simulatedResult && (
                          <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="p-4 rounded-xl bg-[#0d223f] border border-emerald-400/40 text-xs space-y-2"
                          >
                            <div className="flex items-center justify-between text-emerald-400 font-bold text-[11px]">
                              <span className="flex items-center gap-1.5">
                                <Check size={14} /> {activeItem.liveDemo.resultLabel}
                              </span>
                              <span className="text-cyan-300 font-mono">Status: 200 OK</span>
                            </div>
                            <p className="text-slate-200 font-mono text-[11px] leading-relaxed">
                              {activeItem.liveDemo.resultData}
                            </p>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  </div>

                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </section>
  )
}
