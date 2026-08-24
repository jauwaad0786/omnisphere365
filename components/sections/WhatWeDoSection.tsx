'use client'
import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import {
  ArrowRight, Sparkles, CheckCircle, ChevronRight, X, Play,
  Zap, Bot, MessageCircle, Users, GraduationCap, IndianRupee,
  ShieldCheck, BarChart3, Clock, Check, Layers
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
  href: string
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
    title: 'Multi-Tenant Enterprise ERP',
    subtitle: 'Unified Multi-Industry Operating System',
    desc: 'One scalable cloud architecture engineered for Schools, Colleges & Universities, Hospitals & OPDs, Gyms, Warehouses, and modern multi-branch Enterprises.',
    image: '/cloud-infrastructure-showcase.jpg',
    badge: 'Multi-Tenant Architecture',
    color: '#0284c7',
    icon: Layers,
    href: '/services',
    impactMetrics: [
      { value: '500+', label: 'Active Tenants' },
      { value: '99.9%', label: 'Uptime SLA' },
      { value: '15+', label: 'Vertical Modules' },
    ],
    capabilities: [
      'Multi-tenant data isolation, custom domains & role security',
      'Vertical suites: School/College, Hospital OPD, Gyms & Retail POS',
      'Automated billing, fee collection & online UPI reconciliation',
      'Centralized multi-branch BI dashboards & live telemetry',
    ],
    liveDemo: {
      title: 'Multi-Tenant Provisioning & Billing Simulator',
      actionPrompt: 'Simulate Multi-Tenant Provisioning for Healthcare & Gym Group',
      resultLabel: 'Multi-Tenant Engine Status',
      resultData: 'Tenant "Apex Group" provisioned with Hospital OPD + Gym Modules in 1.4s. Master invoice #OP360-9182 reconciled with 100% tenant data isolation.',
    },
  },
  {
    id: 'hrms',
    title: 'Smart HRMS & Global Payroll',
    subtitle: 'Workforce Intelligence & Tax Compliance',
    desc: 'Automate biometric attendance across shifts, leave policies, automated salary slips, TDS/PF/ESI statutory deductions, and appraisals for any corporate or institutional team.',
    image: '/hrms-showcase.jpg',
    badge: 'HR & Payroll',
    color: '#7c3aed',
    icon: Users,
    href: '/services/hrms',
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
    subtitle: 'Autonomous Workflow & Decision Engine',
    desc: 'Embed real-time artificial intelligence into your business routines — from autonomous payment & fee recovery reminders to predictive demand and intelligent OCR reporting.',
    image: '/ai-automation-showcase.jpg',
    badge: 'AI & Automation',
    color: '#059669',
    icon: Bot,
    href: '/services/ai-automation',
    impactMetrics: [
      { value: '72%', label: 'Admin Work Automated' },
      { value: '< 2s', label: 'Workflow Latency' },
      { value: '356 Hrs', label: 'Monthly Hours Saved' },
    ],
    capabilities: [
      'Autonomous dues recovery & intelligent follow-up scheduling',
      'Automated biometric anomaly detection for absent staff/members',
      'Predictive revenue forecasting & operational early intervention',
      'Natural language queries for enterprise data reports',
    ],
    liveDemo: {
      title: 'Autonomous Dues Recovery Bot Simulator',
      actionPrompt: 'Trigger Smart AI Reminder for Overdue Dues & Invoices',
      resultLabel: 'AI Execution Status',
      resultData: 'AI analyzed 48 pending dues, scheduled personalized WhatsApp reminders at customer-preferred hours, recovered 84% within 48h.',
    },
  },
  {
    id: 'whatsapp',
    title: 'Integrated WhatsApp Ecosystem',
    subtitle: 'Omnichannel Engagement & Instant Support',
    desc: 'Leverage official Meta-verified WhatsApp Cloud APIs for instant customer, parent, patient & member alerts, payment links, and 24/7 AI support bots.',
    image: '/whatsapp-showcase.jpg',
    badge: 'WhatsApp Cloud API',
    color: '#16a34a',
    icon: MessageCircle,
    href: '/services/whatsapp-automation',
    impactMetrics: [
      { value: '98.2%', label: 'Message Open Rate' },
      { value: '2.5M+', label: 'Dispatches / Mo' },
      { value: '< 1s', label: 'Instant Bot Response' },
    ],
    capabilities: [
      'Official Meta Verified Green Badge Business Cloud API',
      'Automated appointment, renewal, circular & timetable alerts',
      'Direct in-chat payment links with instant PDF receipts',
      'Interactive AI chatbot answering FAQs & routing support tickets',
    ],
    liveDemo: {
      title: 'Verified WhatsApp Broadcast Simulator',
      actionPrompt: 'Dispatch Omnichannel Broadcast to 1,850 Users',
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
            <span className="gradient-text">drive enterprise &amp; institutional outcomes</span>
          </h2>
          <p className="text-slate-300 text-xs sm:text-sm mt-3">
            Click &quot;Learn more&quot; to view detailed case studies, or &quot;Inspect Sandbox&quot; to test real-time multi-tenant simulations.
          </p>
        </div>

        {/* 4 EXL-Style High-Contrast White Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
          {WHAT_WE_DO_CARDS.map((card) => {
            const isSelected = selectedId === card.id

            return (
              <div
                key={card.id}
                className={`rounded-2xl overflow-hidden bg-white text-slate-900 border border-slate-200 shadow-xl transition-all duration-300 flex flex-col justify-between group ${
                  isSelected
                    ? 'ring-4 ring-cyan-400 shadow-2xl scale-[1.02]'
                    : 'hover:shadow-2xl hover:-translate-y-1.5'
                }`}
              >
                <div>
                  {/* Real Photo on Top */}
                  <Link href={card.href} className="block relative aspect-[16/10] overflow-hidden bg-slate-900">
                    <Image
                      src={card.image}
                      alt={card.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-108"
                    />
                    <div className="absolute top-3 left-3">
                      <span className="text-[10px] font-bold px-2.5 py-1 rounded-md bg-slate-950/85 backdrop-blur-md text-cyan-300 border border-cyan-500/30">
                        {card.badge}
                      </span>
                    </div>
                  </Link>

                  {/* Body Text */}
                  <div className="p-6">
                    <div className="text-[11px] font-bold uppercase tracking-wider text-orange-600 mb-1 font-mono">
                      {card.subtitle}
                    </div>
                    <Link href={card.href} className="block">
                      <h3 className="font-display font-bold text-lg text-slate-900 mb-2.5 group-hover:text-blue-700 transition-colors leading-snug">
                        {card.title}
                      </h3>
                    </Link>
                    <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-4">
                      {card.desc}
                    </p>
                  </div>
                </div>

                {/* Bottom Action Strip with Learn More & Inspect Simulator */}
                <div className="p-6 pt-0 flex items-center justify-between border-t border-slate-100 mt-2">
                  <Link
                    href={card.href}
                    className="inline-flex items-center gap-1 text-xs font-bold text-slate-900 group-hover:text-blue-700 transition-colors"
                  >
                    Learn more <ArrowRight size={14} className="text-orange-500 group-hover:translate-x-1 transition-transform" />
                  </Link>

                  <button
                    onClick={() => handleCardClick(card.id)}
                    className={`text-[10px] font-bold px-2.5 py-1 rounded-md transition-all ${
                      isSelected
                        ? 'bg-blue-600 text-white'
                        : 'bg-slate-100 text-slate-700 hover:bg-blue-50 hover:text-blue-700'
                    }`}
                  >
                    {isSelected ? 'Close Demo' : 'Inspect Sandbox'}
                  </button>
                </div>
              </div>
            )
          })}
        </div>

        {/* ──── EXPANDED INTERACTIVE SIMULATOR DRAWER ──── */}
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

                  {/* Left Column: Business Capabilities & Impact Metrics */}
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
                        href={activeItem.href}
                        className="btn-primary text-xs py-3 px-5"
                      >
                        Explore Full Architecture Specs <ArrowRight size={13} />
                      </Link>
                      <Link href="/demo" className="btn-secondary text-xs py-3 px-5">
                        Book Dedicated Walkthrough
                      </Link>
                    </div>
                  </div>

                  {/* Right Column: Live Simulator Terminal */}
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
