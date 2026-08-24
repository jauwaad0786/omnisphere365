'use client'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'
import { SERVICES } from '../../../lib/data'
import {
  Check, ArrowRight, Sparkles, CheckCircle, Clock, ShieldCheck,
  Monitor, Smartphone, BarChart3, Lock, Zap, Layers, Mail, Phone
} from 'lucide-react'

const SERVICE_IMAGES: Record<string, string> = {
  'school-erp': '/school-erp-showcase.jpg',
  'college-erp': '/college-university-showcase.jpg',
  'hrms': '/hrms-showcase.jpg',
  'hospital-opd': '/hospital-opd-showcase.jpg',
  'gym-management': '/gym-showcase.jpg',
  'inventory': '/inventory-showcase.jpg',
  'sales-erp': '/sales-crm-showcase.jpg',
  'whatsapp-automation': '/whatsapp-showcase.jpg',
  'website-development': '/web-dev-showcase.jpg',
  'digital-transformation': '/hero-presentation.jpg',
  'custom-cloud-erp': '/cloud-infrastructure-showcase.jpg',
  'payg-erp': '/payg-modular-showcase.jpg',
  'ai-automation': '/ai-automation-showcase.jpg',
}

interface ServiceNarrative {
  heroHeadline: string
  challengeText: string
  solutionText: string
  views: Array<{
    title: string
    desc: string
    bullets: string[]
    icon: any
    color: string
    bg: string
  }>
}

const SERVICE_NARRATIVES: Record<string, ServiceNarrative> = {
  'school-erp': {
    heroHeadline: 'Eliminate Paper Bureaucracy & Automate K-12 Campus Operations',
    challengeText: 'Schools struggle with chaotic admission seasons, manual attendance registers, delayed fee reconciliations, and overwhelmed teachers typing report cards. Communicating timely notices to thousands of parents via paper circulars leads to missed notices and low fee collection rates.',
    solutionText: 'OnePlatform360 School ERP provides a high-speed cloud ecosystem uniting smart online admissions, biometric attendance, instant WhatsApp fee receipts, automated CBSE/ICSE exam gradebooks, and real-time parent mobile apps.',
    views: [
      {
        title: 'School Admin & Student Master',
        desc: 'Centralized student master records, fee collection ledger, class-wise attendance ratios, and bus route GPS tracking in one window.',
        bullets: ['Online inquiry to student admission lifecycle', 'Automated student ID & RFID card generation'],
        icon: Monitor,
        color: 'text-indigo-600',
        bg: 'bg-indigo-50 border-indigo-200',
      },
      {
        title: 'Examination & Report Card Engine',
        desc: 'Instant grading with CBSE/ICSE compliance, auto-calculated GPA percentiles, and 1-click printable PDF report card generation.',
        bullets: ['Multi-term assessment rubrics & grade boundaries', 'Automated student progress telemetry'],
        icon: BarChart3,
        color: 'text-purple-600',
        bg: 'bg-purple-50 border-purple-200',
      },
      {
        title: 'Parent WhatsApp & Mobile Portal',
        desc: 'Direct digital fee payment links, instant absence alerts, homework updates, and live school circulars delivered to parents.',
        bullets: ['Instant UPI fee payment receipts on WhatsApp', 'Daily push notifications for attendance & events'],
        icon: Smartphone,
        color: 'text-green-600',
        bg: 'bg-green-50 border-green-200',
      },
    ],
  },
  'college-erp': {
    heroHeadline: 'Empower Multi-Faculty Campuses with Automated Semesters & NAAC Compliance',
    challengeText: 'Universities and autonomous colleges face fragmented department silos, complex semester credit grading, manual faculty workload scheduling, hostel allocations, and heavy documentation overhead during NAAC / NBA accreditation audits.',
    solutionText: 'OnePlatform360 College ERP delivers an enterprise multi-campus infrastructure covering CBCS credit curricula, online examination halls, placement pipelines, research grants, and autonomous accreditation audit logs.',
    views: [
      {
        title: 'Dean & Academic Council Console',
        desc: 'Manage faculty workloads, semester course registrations, elective allotments, and department accreditation records.',
        bullets: ['Choice Based Credit System (CBCS) curriculum mapping', 'Faculty lecture scheduling & department allocation'],
        icon: Monitor,
        color: 'text-blue-600',
        bg: 'bg-blue-50 border-blue-200',
      },
      {
        title: 'CBCS Credit & Examination Matrix',
        desc: 'Automated SGPA/CGPA calculations, hall ticket generation, re-evaluation workflows, and degree transcript publishing.',
        bullets: ['Automated hall ticket release on fee clearance', 'Instant digital mark sheets & degree verification'],
        icon: BarChart3,
        color: 'text-indigo-600',
        bg: 'bg-indigo-50 border-indigo-200',
      },
      {
        title: 'Campus Placement & Alumni Hub',
        desc: 'Track corporate recruiter drives, student interview pipelines, offer letters, and multi-year alumni engagement.',
        bullets: ['Company placement registration & shortlist bot', 'Alumni donation & mentorship tracking portal'],
        icon: Layers,
        color: 'text-cyan-600',
        bg: 'bg-cyan-50 border-cyan-200',
      },
    ],
  },
  'hrms': {
    heroHeadline: 'Zero-Error Biometric Payroll, Multi-Shift Rosters & Statutory Tax Compliance',
    challengeText: 'Human resource teams waste days each month manually reconciling biometric attendance punches across irregular shifts, calculating overtime, tracking leave accruals, and computing TDS, PF, and ESI deductions without audit errors.',
    solutionText: 'OnePlatform360 Smart HRMS automates workforce intelligence from hardware biometric sync to 1-click salary slip generation, automated statutory tax compliance, and transparent OKR performance appraisals.',
    views: [
      {
        title: 'Biometric Shift & Attendance Center',
        desc: 'Live check-in stream, multi-location geo-fenced punches, shift roster scheduling, and automated overtime tracking.',
        bullets: ['Direct API sync with biometric fingerprint/face devices', 'Geo-tagged mobile check-ins for field teams'],
        icon: Clock,
        color: 'text-purple-600',
        bg: 'bg-purple-50 border-purple-200',
      },
      {
        title: 'Automated Payroll & Salary Slip Engine',
        desc: '1-click monthly salary generation with automated TDS, PF, ESI statutory deductions and direct bank settlement API.',
        bullets: ['Instant PDF salary slip dispatch via WhatsApp & Email', 'Zero-error tax computation & Form 16 export'],
        icon: BarChart3,
        color: 'text-emerald-600',
        bg: 'bg-emerald-50 border-emerald-200',
      },
      {
        title: 'Employee Self-Service (ESS) Portal',
        desc: 'Leave applications, tax deduction declarations, instant salary slip downloads, and quarterly appraisal OKR tracking.',
        bullets: ['Paperless leave approval workflow for managers', 'Goal setting, feedback cycles & 360 appraisals'],
        icon: Smartphone,
        color: 'text-blue-600',
        bg: 'bg-blue-50 border-blue-200',
      },
    ],
  },
  'hospital-opd': {
    heroHeadline: 'Eliminate OPD Waiting Queues & Digitize Clinical Patient Records',
    challengeText: 'Hospitals and polyclinics suffer from crowded waiting rooms, misplaced paper medical histories, unorganized doctor consultation slots, delayed lab reports, and revenue leakage in pharmacy billing.',
    solutionText: 'OnePlatform360 Hospital OPD provides an end-to-end digital clinical workflow: instant token generation, paperless Electronic Medical Records (EMR), e-prescriptions, and integrated diagnostic lab & pharmacy POS.',
    views: [
      {
        title: 'OPD Reception & Token Queue Desk',
        desc: 'Fast patient registration, doctor specialty appointment scheduling, token display calling, and waiting area pacing.',
        bullets: ['Instant barcode/QR patient health card issuing', 'Live digital token TV display for waiting lounges'],
        icon: Monitor,
        color: 'text-emerald-600',
        bg: 'bg-emerald-50 border-emerald-200',
      },
      {
        title: 'Doctor Clinical EMR & E-Prescriptions',
        desc: 'Digital consultation pad with past medical history, vitals charts, digital prescription writing, and direct lab test orders.',
        bullets: ['Standardized ICD-10 diagnostic coding & drug database', '1-click lab investigation & radiology requisition'],
        icon: BarChart3,
        color: 'text-teal-600',
        bg: 'bg-teal-50 border-teal-200',
      },
      {
        title: 'Pharmacy & Diagnostic Billing POS',
        desc: 'Instant medicine inventory dispensing, barcode billing, lab test report upload, and patient WhatsApp prescription delivery.',
        bullets: ['Automated batch expiry & stock level warnings', 'Diagnostic lab report PDF sent directly to patient WhatsApp'],
        icon: Smartphone,
        color: 'text-cyan-600',
        bg: 'bg-cyan-50 border-cyan-200',
      },
    ],
  },
  'gym-management': {
    heroHeadline: 'Automate Turnstile Check-Ins, Member Renewals & Trainer Commissions',
    challengeText: 'Fitness clubs and gym chains struggle with unpaid member entry, manual expiry tracking, unorganized personal trainer session credits, lost protein supplement sales, and high member churn.',
    solutionText: 'OnePlatform360 Gym ERP automates RFID/biometric turnstile gate access, triggers automated WhatsApp membership renewal links, manages trainer PT schedules, and powers front-desk supplement POS billing.',
    views: [
      {
        title: 'Turnstile Gate & Biometric Entry Monitor',
        desc: 'Real-time turnstile access validation, active/expired membership gate locking, and live gym floor capacity telemetry.',
        bullets: ['Automatic turnstile gate blocking on unpaid dues', 'RFID card / Biometric fingerprint / Face check-in'],
        icon: Lock,
        color: 'text-amber-600',
        bg: 'bg-amber-50 border-amber-200',
      },
      {
        title: 'Subscription Packages & Auto-Renewal Bot',
        desc: 'Dynamic monthly/quarterly/annual plans, automated WhatsApp payment reminder triggers with embedded UPI QR.',
        bullets: ['Automated D-7, D-3, and D-0 expiry WhatsApp reminders', 'Instant UPI payment with instant gate reactivation'],
        icon: Zap,
        color: 'text-orange-600',
        bg: 'bg-orange-50 border-orange-200',
      },
      {
        title: 'PT Trainer Scheduler & Supplement POS',
        desc: 'Personal trainer booking calendar, session completion punch, trainer commission calculator, and front-desk diet sales.',
        bullets: ['Trainer commission tracking per completed workout session', 'Barcode POS register for supplements & gym merchandise'],
        icon: Smartphone,
        color: 'text-red-600',
        bg: 'bg-red-50 border-red-200',
      },
    ],
  },
  'inventory': {
    heroHeadline: 'Real-Time Multi-Warehouse Stock Telemetry & Automated Barcode POS',
    challengeText: 'Retail and wholesale businesses experience stock stockouts during peak seasons, unexplained inventory shrinkage, manual paper stocktakes, and delayed purchase orders across multiple branch warehouses.',
    solutionText: 'OnePlatform360 Inventory Management gives multi-branch leadership real-time visibility across all stock locations, automated low-stock reorder triggers, batch/expiry tracking, and barcode POS scanner integration.',
    views: [
      {
        title: 'Multi-Warehouse Stock Telemetry',
        desc: 'Real-time SKU stock levels, inter-warehouse transfer slips, safety stock thresholds, and live inventory valuation.',
        bullets: ['Real-time multi-branch stock reconciliation', 'Batch number, serial number & expiry date tracking'],
        icon: Monitor,
        color: 'text-cyan-600',
        bg: 'bg-cyan-50 border-cyan-200',
      },
      {
        title: 'Purchase Order & Supplier Reorder Engine',
        desc: 'Automated vendor purchase orders generated on stock threshold breach with Goods Receipt Note (GRN) verification.',
        bullets: ['Automated reorder point (ROP) calculation', 'Vendor quotation comparison & 3-way GRN matching'],
        icon: BarChart3,
        color: 'text-blue-600',
        bg: 'bg-blue-50 border-blue-200',
      },
      {
        title: 'Barcode POS & Dispatch Register',
        desc: 'High-speed barcode scanner checkout, batch & serial tracking, dispatch logistics slips, and return tracking.',
        bullets: ['High-speed optical barcode & QR scanner checkout', 'Instant GST thermal receipt & WhatsApp invoice dispatch'],
        icon: Smartphone,
        color: 'text-indigo-600',
        bg: 'bg-indigo-50 border-indigo-200',
      },
    ],
  },
  'sales-erp': {
    heroHeadline: 'Close High-Value Deals Faster with AI Sales Pipelines & Automated Invoicing',
    challengeText: 'Sales teams lose lucrative leads due to delayed follow-ups, untracked WhatsApp interactions, unorganized quotation PDFs, and slow finance approvals for GST billing.',
    solutionText: 'OnePlatform360 Sales ERP captures leads automatically from all digital channels, tracks deal stages on an interactive Kanban pipeline, generates branded GST invoices in 1 click, and forecasts revenue.',
    views: [
      {
        title: 'Interactive Deal Pipeline & Lead Kanban',
        desc: 'Visual lead stages from inquiry to negotiation, deal value forecasting, lead source attribution, and activity timelines.',
        bullets: ['Omnichannel lead capture from website, ads & WhatsApp', 'Deal stage tracking with probability & close date forecasting'],
        icon: Monitor,
        color: 'text-rose-600',
        bg: 'bg-rose-50 border-rose-200',
      },
      {
        title: 'Quotation & GST Invoicing Studio',
        desc: 'Create custom branded price quotes, convert approved quotes to GST tax invoices in 1 click, and track payment status.',
        bullets: ['1-click quote-to-tax invoice conversion', 'Partial payment tracking & automated overdue reminders'],
        icon: BarChart3,
        color: 'text-orange-600',
        bg: 'bg-orange-50 border-orange-200',
      },
      {
        title: 'Sales Rep Performance & Commission BI',
        desc: 'Individual rep quota achievement, call logs, conversion velocity, and automated sales commission calculations.',
        bullets: ['Sales target vs. actual achievement leaderboard', 'Automated sales rep monthly commission calculations'],
        icon: Smartphone,
        color: 'text-emerald-600',
        bg: 'bg-emerald-50 border-emerald-200',
      },
    ],
  },
  'whatsapp-automation': {
    heroHeadline: 'Engage Customers, Parents & Patients Instantly via Verified Meta Cloud API',
    challengeText: 'Organizations rely on low-open-rate emails and ignored SMS messages, leading to delayed bill payments, unread emergency circulars, and overwhelmed front-desk customer support teams.',
    solutionText: 'OnePlatform360 WhatsApp Automation integrates the official Meta Cloud API with 98%+ open rates — automating fee reminders with instant UPI links, PDF receipt dispatch, and 24/7 AI conversational chatbots.',
    views: [
      {
        title: 'Meta Cloud Broadcast Campaign Studio',
        desc: 'Send bulk verified notifications, circulars, and newsletters with interactive quick-reply buttons and rich media.',
        bullets: ['Green tick verified Meta Cloud API connectivity', 'Interactive call-to-action & quick-reply buttons'],
        icon: Smartphone,
        color: 'text-green-600',
        bg: 'bg-green-50 border-green-200',
      },
      {
        title: 'Automated Payment & PDF Dispatch Bot',
        desc: 'Trigger instant personalized payment links, automated dues recovery reminders, and instant downloadable invoice receipts.',
        bullets: ['Dynamic UPI QR codes embedded directly in WhatsApp messages', 'Automated PDF invoice, ticket & receipt generation'],
        icon: Zap,
        color: 'text-emerald-600',
        bg: 'bg-emerald-50 border-emerald-200',
      },
      {
        title: '24/7 Omnichannel AI Support Inbox',
        desc: 'Multi-agent team live chat inbox with automated FAQ bot fallback, smart routing, and conversation history.',
        bullets: ['Shared team inbox for multi-agent support teams', 'AI chatbot answering FAQs & escalating complex inquiries'],
        icon: Monitor,
        color: 'text-teal-600',
        bg: 'bg-teal-50 border-teal-200',
      },
    ],
  },
  'website-development': {
    heroHeadline: 'Convert Visitors into Enrolled Clients with Blazing-Fast Next.js Portals',
    challengeText: 'Slow, outdated WordPress websites lose prospective students, patients, and corporate clients due to high bounce rates, poor mobile responsiveness, and lack of direct ERP database integration.',
    solutionText: 'OnePlatform360 builds bespoke, SEO-optimized web applications with Next.js, headless CMS, and direct cloud APIs — delivering sub-second load speeds, modern glassmorphism aesthetics, and native lead capture.',
    views: [
      {
        title: 'Headless CMS & Content Builder',
        desc: 'Visual editor to publish campus news, doctor profiles, service catalogs, and blog posts without writing code.',
        bullets: ['Real-time preview and instant static edge publishing', 'Role-based editor & author publishing permissions'],
        icon: Monitor,
        color: 'text-sky-600',
        bg: 'bg-sky-50 border-sky-200',
      },
      {
        title: 'Lead Generation & Direct Inquiry Pipeline',
        desc: 'Interactive admission/consultation calculators that feed prospective inquiries directly into the central ERP CRM.',
        bullets: ['Interactive fee calculators & quote estimators', 'Direct REST API webhook connecting leads to CRM in real time'],
        icon: BarChart3,
        color: 'text-blue-600',
        bg: 'bg-blue-50 border-blue-200',
      },
      {
        title: 'Lighthouse 100 Performance & SEO Matrix',
        desc: 'Optimized Core Web Vitals, automated schema markup, dynamic OpenGraph cards, and instant CDN edge delivery.',
        bullets: ['Sub-second page load times on mobile 4G/5G networks', 'Automated JSON-LD rich snippets for Google Search ranking'],
        icon: Smartphone,
        color: 'text-indigo-600',
        bg: 'bg-indigo-50 border-indigo-200',
      },
    ],
  },
  'digital-transformation': {
    heroHeadline: 'Modernize Fragmented Legacy Systems into One Cohesive Cloud Architecture',
    challengeText: 'Established enterprises and institutions are trapped in 15-year-old on-premise desktop databases, paper ledgers, and disconnected software that slow down operations and pose severe security risks.',
    solutionText: 'Our solution architects provide end-to-end digital transformation: auditing existing business processes, sanitizing and migrating legacy database records, and retraining personnel on modern cloud workflows.',
    views: [
      {
        title: 'Process Discovery & Workflow Blueprint',
        desc: 'Interactive roadmap visualizing legacy friction points, redundant paperwork steps, and target cloud state.',
        bullets: ['As-is vs To-be operational workflow architecture map', 'Executive ROI and time-to-value milestone roadmap'],
        icon: Monitor,
        color: 'text-purple-600',
        bg: 'bg-purple-50 border-purple-200',
      },
      {
        title: 'Data Migration & Sanitization Engine',
        desc: 'Automated scripts to cleanse, validate, and migrate millions of legacy records into modern PostgreSQL cloud schemas.',
        bullets: ['Zero data loss legacy SQL Server / FoxPro / Excel migration', 'Automated data validation & deduplication checks'],
        icon: BarChart3,
        color: 'text-indigo-600',
        bg: 'bg-indigo-50 border-indigo-200',
      },
      {
        title: 'Change Management & Staff Adoption Metrics',
        desc: 'Track department-wise cloud onboarding, training completion rates, and daily active adoption KPIs.',
        bullets: ['Role-specific hands-on staff video & interactive training', 'Live adoption dashboard measuring daily software usage'],
        icon: Layers,
        color: 'text-blue-600',
        bg: 'bg-blue-50 border-blue-200',
      },
    ],
  },
  'custom-cloud-erp': {
    heroHeadline: 'Bespoke Enterprise Cloud ERP Built Exactly for Your Unique Business DNA',
    challengeText: 'Generic off-the-shelf software forces businesses to change their proven operational models to fit rigid software constraints, resulting in workarounds, employee frustration, and costly third-party plugins.',
    solutionText: 'We design and engineer bespoke multi-tenant cloud ERP systems from the ground up: custom database schemas, dedicated AWS/Azure cloud instances, white-label branding, and custom hardware IoT integrations.',
    views: [
      {
        title: 'Bespoke Multi-Tenant Architecture Studio',
        desc: 'Custom schema designer, tenant database isolation policies, sub-domain routing, and granular permission matrices.',
        bullets: ['Isolated tenant schemas with dedicated encryption keys', 'Dynamic sub-domain routing (e.g. yourbranch.yourdomain.com)'],
        icon: Monitor,
        color: 'text-sky-600',
        bg: 'bg-sky-50 border-sky-200',
      },
      {
        title: 'Dedicated Cloud Infrastructure Console',
        desc: 'Auto-scaling container clusters on AWS/Azure, automated daily encrypted backups, and 99.99% high-availability monitoring.',
        bullets: ['Automated Kubernetes container scaling during traffic spikes', 'Encrypted off-site cloud backups with 1-click restore'],
        icon: Lock,
        color: 'text-blue-600',
        bg: 'bg-blue-50 border-blue-200',
      },
      {
        title: 'Enterprise Integration & Webhook Studio',
        desc: 'Connect custom ERP endpoints to existing SAP/Oracle ledgers, payment gateways, and proprietary hardware APIs.',
        bullets: ['Bi-directional REST & GraphQL API webhooks', 'Native integration with legacy bank payment settlement rails'],
        icon: Layers,
        color: 'text-cyan-600',
        bg: 'bg-cyan-50 border-cyan-200',
      },
    ],
  },
  'payg-erp': {
    heroHeadline: 'Zero Upfront Capital Expenditure — Pay Only for the Active Modules You Use',
    challengeText: 'Growing startups and small institutions are forced to pay massive annual upfront licensing fees for bloated ERP packages containing 20 modules they never actually use.',
    solutionText: 'OnePlatform360 Pay-As-You-Go lets you start with just 1 or 2 essential modules (e.g. Attendance & Invoicing), with zero long-term lock-in and the flexibility to add or pause modules as your scale grows.',
    views: [
      {
        title: 'Modular Subscription Configurator',
        desc: 'Toggle modules on or off with 1 click: pay only for active modules with clear per-user micro-billing.',
        bullets: ['Enable or disable specific modules anytime in 1 click', 'No long-term multi-year lock-in contracts'],
        icon: Zap,
        color: 'text-orange-600',
        bg: 'bg-orange-50 border-orange-200',
      },
      {
        title: 'Real-Time Usage & Cost Telemetry',
        desc: 'Transparent daily cost consumption, active user tracking, and automated monthly invoice generation.',
        bullets: ['Per-active-user transparent billing telemetry', 'Instant GST tax invoice generation on auto-debit'],
        icon: BarChart3,
        color: 'text-amber-600',
        bg: 'bg-amber-50 border-amber-200',
      },
      {
        title: 'Instant 1-Click Module Provisioning',
        desc: 'Activate new capabilities like HRMS, WhatsApp Hub, or POS billing instantly without server reboots or downtime.',
        bullets: ['Zero server downtime module activation in under 2 seconds', 'Automatic feature onboarding tutorials for staff'],
        icon: Monitor,
        color: 'text-emerald-600',
        bg: 'bg-emerald-50 border-emerald-200',
      },
    ],
  },
  'ai-automation': {
    heroHeadline: 'Harness Autonomous AI Agents to Eliminate 70%+ of Manual Administrative Tasks',
    challengeText: 'Administrative teams spend hours each day manually sorting documents, reconciling invoice discrepancies, answering repetitive client questions, and compiling periodic management reports.',
    solutionText: 'OnePlatform360 AI Engine deploys intelligent agentic workflows: automated OCR invoice processing, smart dues recovery triggers, predictive demand forecasting, and autonomous conversational assistance.',
    views: [
      {
        title: 'Autonomous Workflow Orchestration Canvas',
        desc: 'Visual trigger-action canvas connecting ERP events to AI models for document extraction, alerts, and approvals.',
        bullets: ['Visual drag-and-drop agentic workflow builder', 'Multi-step conditional logic (If event X -> Run AI task Y)'],
        icon: Zap,
        color: 'text-violet-600',
        bg: 'bg-violet-50 border-violet-200',
      },
      {
        title: 'Predictive Analytics & Revenue Forecasting',
        desc: 'Machine learning models analyzing historical trends to forecast seasonal revenue, student retention, and cash flow.',
        bullets: ['Predictive risk scoring for overdue payments and student churn', 'Automated anomaly detection in accounting ledgers'],
        icon: BarChart3,
        color: 'text-purple-600',
        bg: 'bg-purple-50 border-purple-200',
      },
      {
        title: 'Intelligent Document OCR & Auto-Reconciler',
        desc: 'Extract data from scanned paper bills and vendor invoices with 99.4% accuracy and match against bank statements.',
        bullets: ['Automatic data extraction from messy PDFs & camera photos', 'Zero-touch automated bank reconciliation reconciliation'],
        icon: Monitor,
        color: 'text-cyan-600',
        bg: 'bg-cyan-50 border-cyan-200',
      },
    ],
  },
}

export default function ServicePage({ params }: { params: { id: string } }) {
  const service = SERVICES.find((s) => s.id === params.id)
  if (!service) notFound()

  const showcaseImg = SERVICE_IMAGES[service.id] || '/school-erp-showcase.jpg'
  const narrative = SERVICE_NARRATIVES[service.id] || {
    heroHeadline: `Streamline & Automate ${service.title} Operations`,
    challengeText: `Growing organizations face operational bottlenecks, manual data entry errors, and disconnected systems when scaling their ${service.shortTitle} workflows.`,
    solutionText: `OnePlatform360 ${service.title} provides a modern, high-speed cloud platform engineered to automate repetitive administrative tasks and deliver real-time operational visibility.`,
    views: [
      {
        title: 'Enterprise Command Center',
        desc: 'Centralized cloud interface consolidating records, staff profiles, multi-branch KPI metrics, and live telemetry logs in one dashboard.',
        bullets: ['Multi-role granular permissions', '100% cloud synced multi-tenant database'],
        icon: Monitor,
        color: 'text-blue-600',
        bg: 'bg-blue-50 border-blue-200',
      },
      {
        title: 'Automated Processing Stream',
        desc: 'Visual timeline tracking daily transactions, biometric attendance punches, automated report calculations, and reconciliation batches.',
        bullets: ['Automated audit logging', 'Instant PDF invoice & receipt dispatch'],
        icon: BarChart3,
        color: 'text-purple-600',
        bg: 'bg-purple-50 border-purple-200',
      },
      {
        title: 'Mobile & WhatsApp Gateway',
        desc: 'Clients, members, patients, and employees receive real-time notifications, payment links, and scheduled reminders directly on WhatsApp.',
        bullets: ['Meta Verified Cloud API', '24/7 AI chatbot assistance'],
        icon: Smartphone,
        color: 'text-green-600',
        bg: 'bg-green-50 border-green-200',
      },
    ],
  }

  return (
    <div className="pt-24 bg-[#091526] min-h-screen text-slate-200">

      {/* ──── 1. EXL-STYLE HERO CASE STUDY BANNER (Crisp White on Deep Navy) ──── */}
      <section className="relative overflow-hidden bg-white text-slate-900 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
          <div className="grid lg:grid-cols-12 gap-10 items-center">

            {/* Left Narrative */}
            <div className="lg:col-span-7 space-y-5">
              <div className="flex items-center gap-2">
                <span className="text-[11px] font-bold uppercase tracking-widest text-orange-600 font-mono">
                  {service.category} Solution Portfolio
                </span>
                <span className="text-slate-300">·</span>
                <span className="text-xs font-semibold text-slate-600">{service.shortTitle}</span>
              </div>

              <h1 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl text-orange-600 leading-tight">
                {narrative.heroHeadline}
              </h1>

              <p className="text-slate-700 text-sm sm:text-base leading-relaxed">
                {narrative.challengeText}
              </p>

              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                {narrative.solutionText}
              </p>

              <div className="pt-3 flex flex-wrap items-center gap-4">
                <Link
                  href="/demo"
                  className="px-6 py-3 rounded-lg border-2 border-orange-600 text-orange-600 font-bold text-xs sm:text-sm hover:bg-orange-600 hover:text-white transition-all flex items-center gap-2"
                >
                  Read the case study / Book Demo <ArrowRight size={14} />
                </Link>
                <Link
                  href="/contact"
                  className="text-xs sm:text-sm font-semibold text-slate-700 hover:text-blue-700 transition-colors"
                >
                  Contact Enterprise Architects →
                </Link>
              </div>
            </div>

            {/* Right Photo */}
            <div className="lg:col-span-5 relative aspect-[16/11] rounded-2xl overflow-hidden shadow-2xl border border-slate-200">
              <Image
                src={showcaseImg}
                alt={service.title}
                fill
                className="object-cover"
                priority
              />
            </div>

          </div>
        </div>
      </section>

      {/* ──── 2. THREE (3) RICH PRODUCT UI SCREENS / DASHBOARD MOCKUPS ──── */}
      <section className="py-16 bg-[#091526] border-b border-cyan-500/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <span className="text-xs font-bold uppercase tracking-widest text-cyan-300">
              User Interface &amp; Workflow Previews
            </span>
            <h2 className="font-display font-extrabold text-2xl sm:text-3xl text-white mt-1">
              Built for <span className="gradient-text">{service.shortTitle} precision &amp; speed</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {narrative.views.map((view, idx) => {
              const IconComp = view.icon || Monitor
              return (
                <div
                  key={view.title}
                  className="rounded-2xl bg-white text-slate-900 border border-slate-200 p-6 shadow-xl space-y-4 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
                >
                  <div className="space-y-3">
                    <div className={`w-10 h-10 rounded-xl border flex items-center justify-center ${view.bg} ${view.color}`}>
                      <IconComp size={20} />
                    </div>
                    <div className="text-xs font-bold text-orange-600 uppercase tracking-wider font-mono">
                      UI View 0{idx + 1}
                    </div>
                    <h3 className="font-display font-bold text-lg text-slate-900 leading-snug">
                      {view.title}
                    </h3>
                    <p className="text-slate-600 text-xs leading-relaxed">
                      {view.desc}
                    </p>
                  </div>

                  <div className="p-3 rounded-xl bg-slate-50 border border-slate-200 text-[11px] text-slate-700 font-mono space-y-1 mt-3">
                    {view.bullets.map((b) => (
                      <div key={b} className="flex items-start gap-1.5">
                        <span className="text-emerald-600 font-bold">✓</span>
                        <span>{b}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* ──── 3. KEY FEATURES & MODULES (CRISP WHITE CARDS ON NAVY BACKDROP) ──── */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-10 items-start">

          {/* Left Column (8 Cols): Features & Modules in Crisp White Containers */}
          <div className="lg:col-span-8 space-y-10">

            {/* Key Features Container (Crisp White Card) */}
            {service.features && (
              <div className="rounded-2xl bg-white text-slate-900 border border-slate-200 p-7 sm:p-9 shadow-xl">
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-orange-600 mb-2 font-mono">
                  <Sparkles size={16} /> Architectural Capabilities
                </div>
                <h3 className="font-display font-bold text-xl sm:text-2xl text-slate-900 mb-6">
                  Key Features of {service.title}
                </h3>
                <div className="grid sm:grid-cols-2 gap-3.5">
                  {service.features.map((f) => (
                    <div
                      key={f}
                      className="flex items-start gap-3 p-3.5 rounded-xl bg-slate-50 border border-slate-200/90 text-xs sm:text-sm text-slate-800 font-medium hover:bg-blue-50/60 hover:border-blue-200 transition-colors"
                    >
                      <CheckCircle size={17} className="text-emerald-600 shrink-0 mt-0.5" />
                      <span>{f}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Included Sub-Modules (Crisp White Cards Grid) */}
            {service.modules && (
              <div>
                <div className="mb-4">
                  <span className="text-xs font-bold uppercase tracking-widest text-cyan-300">
                    Comprehensive Suite
                  </span>
                  <h3 className="font-display font-bold text-xl sm:text-2xl text-white mt-1">
                    Included Sub-Modules
                  </h3>
                </div>
                <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-4">
                  {service.modules.map((m) => (
                    <div
                      key={m.name}
                      className="rounded-xl bg-white text-slate-900 border border-slate-200 p-5 shadow-md hover:shadow-xl hover:border-blue-300 transition-all duration-300 group"
                    >
                      <div className="text-2xl mb-2.5">{m.icon}</div>
                      <div className="text-slate-900 font-bold text-sm mb-1 group-hover:text-blue-700 transition-colors">
                        {m.name}
                      </div>
                      <div className="text-slate-600 text-xs leading-relaxed">
                        {m.desc}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

          </div>

          {/* Right Column (4 Cols): Deployment & Pricing in Crisp White Cards */}
          <div className="lg:col-span-4 space-y-6">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-cyan-300">
                Institutional Licensing
              </span>
              <h3 className="font-display font-bold text-xl text-white mt-1">
                Deployment &amp; Pricing
              </h3>
            </div>

            {service.plans && service.plans.length > 0 ? (
              service.plans.map((plan) => (
                <div
                  key={plan.name}
                  className={`rounded-2xl p-6 transition-all duration-300 bg-white text-slate-900 border shadow-xl ${
                    plan.popular
                      ? 'border-2 border-blue-600 shadow-2xl relative ring-4 ring-blue-500/20'
                      : 'border-slate-200'
                  }`}
                >
                  {plan.badge && (
                    <div className="mb-3">
                      <span className="text-[10px] font-bold uppercase tracking-wider bg-blue-600 text-white px-2.5 py-0.5 rounded-full shadow-sm">
                        {plan.badge}
                      </span>
                    </div>
                  )}
                  <div className="font-display font-bold text-slate-900 text-base mb-1">{plan.name}</div>
                  <div className="text-slate-900 text-2xl sm:text-3xl font-extrabold font-display mb-2">
                    {plan.price}
                    <span className="text-slate-500 text-xs font-normal ml-1">{plan.period}</span>
                  </div>

                  <ul className="mt-4 space-y-2.5 mb-6">
                    {plan.features.map((f) => (
                      <li key={f} className="flex items-start gap-2 text-xs text-slate-700 font-medium">
                        <Check size={14} className="text-emerald-600 shrink-0 mt-0.5" />
                        {f}
                      </li>
                    ))}
                  </ul>

                  <Link
                    href="/demo"
                    className={`block text-center text-xs sm:text-sm font-bold py-3 rounded-xl transition-all shadow-md ${
                      plan.popular
                        ? 'bg-blue-600 hover:bg-blue-700 text-white shadow-blue-500/30'
                        : 'bg-slate-100 hover:bg-slate-200 text-slate-800'
                    }`}
                  >
                    {plan.cta}
                  </Link>
                </div>
              ))
            ) : (
              <div className="rounded-2xl bg-white text-slate-900 border border-slate-200 p-6 text-center space-y-4 shadow-xl">
                <div className="w-12 h-12 rounded-xl bg-orange-50 border border-orange-200 flex items-center justify-center mx-auto text-orange-600">
                  <Clock size={24} />
                </div>
                <div className="text-[10px] font-bold uppercase tracking-wider bg-amber-50 text-amber-700 border border-amber-200 px-2.5 py-1 rounded-full inline-block">
                  Custom Institutional Scope
                </div>
                <div className="text-slate-900 font-bold text-base">Early Access &amp; Enterprise Quote</div>
                <p className="text-slate-600 text-xs leading-relaxed">
                  Every {service.shortTitle} rollout is tailored specifically for your volume, user roles, and existing database migration.
                </p>
                <Link href="/contact" className="btn-primary text-xs justify-center w-full py-3">
                  Request Custom Quote →
                </Link>
              </div>
            )}

            {/* Direct Support Card (Crisp White Card) */}
            <div className="rounded-2xl bg-white text-slate-900 border border-slate-200 p-5 text-center shadow-lg">
              <div className="text-xs text-slate-500 font-medium mb-1">Direct Enterprise Advisory</div>
              <div className="text-slate-900 font-bold text-sm">OnePlatform360@gmail.com</div>
              <div className="text-blue-600 text-xs font-semibold mt-1">+91 62079 47958</div>
            </div>

          </div>

        </div>
      </section>

    </div>
  )
}
