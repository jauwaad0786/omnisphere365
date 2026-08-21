'use client'
import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import {
  Sparkles, ArrowRight, Clock, Calendar, Search, Tag, User,
  X, CheckCircle, Calculator, Bot, IndianRupee, Layers, Share2, ThumbsUp
} from 'lucide-react'
import { BLOG_POSTS } from '../../lib/data'

const CATEGORIES = ['All', 'Education ERP', 'AI & Automation', 'HRMS & Payroll', 'Digital Transformation']

const FEATURED_POST = {
  id: 'featured-ai-erp-2026',
  title: 'How Autonomous AI Workflows are Slashing Administrative Overhead by 72% in Indian Schools',
  excerpt: 'A comprehensive operational breakdown of how modern educational institutions in Delhi NCR and across India are replacing fragmented legacy software with unified AI-driven operating systems.',
  content: `Traditional schools spend up to 45 hours each week on routine administrative tasks: manual fee reconciliation, recording daily attendance in registers, sending circulars via paper diaries, and preparing report cards manually.

With OnePlatform360's autonomous AI operating architecture, these bottlenecks are eliminated:
1. Automated Real-Time Attendance: Biometric & facial scan hardware syncs directly with the cloud database. Guardians receive instant WhatsApp notifications if a student is absent.
2. AI-Driven Fee Recovery: The system analyzes overdue patterns and sends personalized WhatsApp payment links at times when parents are most active, improving on-time collection by 3x.
3. One-Click Exam Gradebook: Teachers input marks digitally or via optical scan sheets; the AI engine auto-calculates percentiles, remarks, and CBSE/ICSE compliant report card PDFs in seconds.`,
  category: 'AI & Automation',
  date: 'August 20, 2026',
  readTime: '6 min read',
  author: 'OnePlatform360 Research Team',
  image: '/ai-automation-showcase.jpg'
}

export default function BlogPage() {
  const [selectedCat, setSelectedCat] = useState('All')
  const [search, setSearch] = useState('')
  const [activeArticle, setActiveArticle] = useState<any | null>(null)
  const [liked, setLiked] = useState(false)

  // Interactive ROI Calculator State
  const [calcOrgType, setCalcOrgType] = useState('School (500 - 2,000 Students)')
  const [calcStaffCount, setCalcStaffCount] = useState(50)

  const filteredPosts = BLOG_POSTS.filter((post) => {
    const matchesCat = selectedCat === 'All' || post.category.toLowerCase().includes(selectedCat.toLowerCase().split(' ')[0])
    const matchesSearch = post.title.toLowerCase().includes(search.toLowerCase()) || post.excerpt.toLowerCase().includes(search.toLowerCase())
    return matchesCat && matchesSearch
  })

  // Estimated Savings calculation
  const hoursSavedPerMonth = calcStaffCount * 6
  const estimatedCostSaving = calcStaffCount * 12000

  return (
    <div className="pt-28 pb-20 bg-[#0b192e] min-h-screen text-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header (EXL Style) */}
        <div className="mb-14 max-w-3xl">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-10 h-1 bg-gradient-to-r from-amber-500 to-cyan-400 rounded-full" />
            <span className="text-xs font-bold uppercase tracking-widest text-cyan-300">
              Insights &amp; Knowledge Hub
            </span>
          </div>
          <h1 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl text-white leading-tight">
            Perspectives on <span className="gradient-text">Cloud ERP, AI &amp; Operations</span>
          </h1>
          <p className="text-slate-300 mt-4 text-sm sm:text-base leading-relaxed">
            Case studies, architectural deep-dives, and tactical guides to modernizing educational, healthcare, and enterprise software.
          </p>
        </div>

        {/* Featured Big Article Card */}
        <div className="glass rounded-3xl overflow-hidden border border-cyan-500/30 mb-16 bg-[#0d203b] shadow-[0_20px_60px_rgba(3,8,18,0.8)] group">
          <div className="grid lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-6 p-7 sm:p-10 space-y-4">
              <div className="flex items-center gap-3">
                <span className="badge bg-amber-500/15 border-amber-400/30 text-amber-300 text-[10px]">
                  Featured Deep Dive
                </span>
                <span className="text-xs text-slate-400 flex items-center gap-1">
                  <Clock size={12} /> {FEATURED_POST.readTime}
                </span>
              </div>

              <h2 className="font-display font-bold text-2xl sm:text-3xl text-white group-hover:text-cyan-300 transition-colors leading-snug">
                {FEATURED_POST.title}
              </h2>

              <p className="text-slate-300 text-sm leading-relaxed">
                {FEATURED_POST.excerpt}
              </p>

              <div className="pt-4 border-t border-cyan-500/20 flex items-center justify-between">
                <div className="text-xs text-slate-400 flex items-center gap-1.5">
                  <User size={13} className="text-cyan-400" />
                  <span>{FEATURED_POST.author}</span>
                </div>
                <button
                  onClick={() => setActiveArticle(FEATURED_POST)}
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-cyan-300 hover:text-white transition-colors"
                >
                  Read Full Interactive Article <ArrowRight size={14} className="text-amber-400 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>

            <div className="lg:col-span-6 relative aspect-[16/10] lg:h-full min-h-[300px] overflow-hidden">
              <Image
                src={FEATURED_POST.image}
                alt={FEATURED_POST.title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-[#0d203b] via-transparent to-transparent hidden lg:block" />
            </div>
          </div>
        </div>

        {/* ──── INTERACTIVE ERP ROI CALCULATOR WIDGET ──── */}
        <div className="glass rounded-3xl p-8 sm:p-10 border border-cyan-500/30 bg-gradient-to-r from-[#0c1c33] via-[#0e2444] to-[#0c1c33] mb-16 shadow-2xl">
          <div className="grid lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-6 space-y-4">
              <div className="flex items-center gap-2 text-xs font-bold text-amber-400 uppercase tracking-wider">
                <Calculator size={16} /> Interactive Institutional ROI Estimator
              </div>
              <h3 className="font-display font-bold text-2xl text-white">
                How Much Time &amp; Cost Will OnePlatform360 Save Your Institution?
              </h3>
              <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                Estimate the monthly hours recovered from paperwork, manual attendance tracking, fee recovery, and automated payroll calculations.
              </p>

              <div className="grid sm:grid-cols-2 gap-4 pt-2">
                <div>
                  <label className="block text-xs text-slate-300 mb-1.5 font-medium">Institution Profile</label>
                  <select
                    value={calcOrgType}
                    onChange={(e) => setCalcOrgType(e.target.value)}
                    className="form-input text-xs"
                  >
                    <option>School (500 - 2,000 Students)</option>
                    <option>College / Higher Education (2,000+)</option>
                    <option>Hospital / Medical OPD</option>
                    <option>Corporate Enterprise</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs text-slate-300 mb-1.5 font-medium">
                    Total Staff / Teachers: <span className="text-cyan-300 font-bold">{calcStaffCount}</span>
                  </label>
                  <input
                    type="range"
                    min={10}
                    max={500}
                    step={10}
                    value={calcStaffCount}
                    onChange={(e) => setCalcStaffCount(Number(e.target.value))}
                    className="w-full h-2 bg-[#091526] rounded-lg appearance-none cursor-pointer accent-cyan-400 mt-2"
                  />
                </div>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="grid grid-cols-2 gap-4 p-6 rounded-2xl bg-[#081220] border border-cyan-500/25 text-center">
                <div className="p-4 rounded-xl bg-[#0d223f] border border-cyan-500/20">
                  <div className="text-2xl sm:text-3xl font-extrabold font-display gradient-text">
                    {hoursSavedPerMonth} Hrs
                  </div>
                  <div className="text-[11px] text-slate-300 mt-1 font-semibold">Monthly Admin Hours Saved</div>
                  <div className="text-[9.5px] text-slate-400 mt-0.5">Automated workflows</div>
                </div>

                <div className="p-4 rounded-xl bg-[#0d223f] border border-cyan-500/20">
                  <div className="text-2xl sm:text-3xl font-extrabold font-display text-emerald-400">
                    ₹{(estimatedCostSaving / 1000).toFixed(0)}K+
                  </div>
                  <div className="text-[11px] text-slate-300 mt-1 font-semibold">Estimated Monthly Savings</div>
                  <div className="text-[9.5px] text-slate-400 mt-0.5">Paper, errors &amp; overhead</div>
                </div>

                <div className="col-span-2 pt-2">
                  <Link href="/demo" className="btn-primary text-xs w-full justify-center py-3">
                    Claim Your Custom Assessment &amp; Free Demo →
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Filter Bar & Search */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-10 pb-6 border-b border-cyan-500/20">
          <div className="flex flex-wrap gap-2">
            {CATEGORIES.map((c) => (
              <button
                key={c}
                onClick={() => setSelectedCat(c)}
                className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all ${
                  selectedCat === c
                    ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-lg shadow-blue-500/30'
                    : 'bg-[#0f223d] border border-cyan-500/20 text-slate-300 hover:border-cyan-500/40 hover:text-white'
                }`}
              >
                {c}
              </button>
            ))}
          </div>

          <div className="relative w-full md:w-72">
            <Search size={15} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search insights..."
              className="w-full bg-[#0f223d] border border-cyan-500/25 rounded-xl pl-9 pr-4 py-2 text-xs text-white placeholder:text-slate-400 outline-none focus:border-cyan-400 transition-all"
            />
          </div>
        </div>

        {/* Articles Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {filteredPosts.map((post) => (
            <article
              key={post.id}
              onClick={() => setActiveArticle(post)}
              className="glass rounded-2xl p-6 group cursor-pointer border border-cyan-500/25 hover:border-cyan-400/60 hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between bg-[#0d203b]"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-xl bg-cyan-500/15 border border-cyan-500/30 flex items-center justify-center text-xl shrink-0">
                    {post.icon}
                  </div>
                  <span className="badge text-[10px] bg-cyan-500/10 border-cyan-500/25 text-cyan-300">
                    {post.category}
                  </span>
                </div>
                <h3 className="font-display font-bold text-white text-base sm:text-lg leading-snug mb-2 group-hover:text-cyan-300 transition-colors">
                  {post.title}
                </h3>
                <p className="text-slate-300 text-xs sm:text-sm leading-relaxed mb-6">{post.excerpt}</p>
              </div>

              <div className="flex items-center justify-between text-xs text-slate-400 pt-4 border-t border-cyan-500/20">
                <span>{post.date} · {post.readTime}</span>
                <span className="text-cyan-300 group-hover:text-white font-semibold flex items-center gap-1">
                  Read Article <ArrowRight size={12} className="text-amber-400" />
                </span>
              </div>
            </article>
          ))}
        </div>

        {/* ──── FULL INTERACTIVE ARTICLE READER MODAL ──── */}
        {activeArticle && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fade-in">
            <div className="relative w-full max-w-3xl max-h-[85vh] overflow-y-auto rounded-3xl bg-[#0c1a30] border-2 border-cyan-400/60 p-7 sm:p-10 shadow-[0_25px_80px_rgba(0,0,0,0.95)]">
              {/* Close Button */}
              <button
                onClick={() => setActiveArticle(null)}
                className="absolute top-5 right-5 p-2 rounded-xl bg-[#091526] text-slate-300 hover:text-white hover:bg-white/10 transition-colors"
              >
                <X size={20} />
              </button>

              <div className="space-y-5">
                <div className="flex items-center gap-3">
                  <span className="badge bg-cyan-500/20 border-cyan-400/40 text-cyan-300 text-xs">
                    {activeArticle.category}
                  </span>
                  <span className="text-xs text-slate-400">
                    {activeArticle.date} · {activeArticle.readTime}
                  </span>
                </div>

                <h2 className="font-display font-extrabold text-2xl sm:text-3xl text-white leading-tight">
                  {activeArticle.title}
                </h2>

                <div className="p-4 rounded-xl bg-[#081220] border border-cyan-500/25 text-xs text-cyan-300 leading-relaxed font-medium">
                  {activeArticle.excerpt}
                </div>

                <div className="text-slate-200 text-sm leading-relaxed space-y-4 pt-2 whitespace-pre-line">
                  {activeArticle.content || `OnePlatform360's integrated cloud architecture unifies academic operations, workforce management, biometric attendance, and official WhatsApp Business APIs into a single operational pane.

By eliminating disparate point solutions and spreadsheets, educational institutes and enterprises across Delhi NCR achieve zero data redundancy, complete audit trails, and automatic regulatory reporting.`}
                </div>

                <div className="pt-6 border-t border-cyan-500/20 flex flex-wrap items-center justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <button
                      onClick={() => setLiked(!liked)}
                      className={`flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-semibold border transition-all ${
                        liked ? 'bg-cyan-500/20 border-cyan-400 text-cyan-300' : 'bg-[#091526] border-cyan-500/20 text-slate-300'
                      }`}
                    >
                      <ThumbsUp size={13} /> {liked ? 'Helpful (1)' : 'Helpful'}
                    </button>
                  </div>

                  <Link href="/demo" className="btn-primary text-xs py-2.5 px-5">
                    Schedule Live Institutional Demo →
                  </Link>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Newsletter Subscription */}
        <div className="glass rounded-3xl p-8 sm:p-12 text-center border border-cyan-500/30 bg-[#0c1a30]">
          <div className="text-3xl mb-3">📬</div>
          <h3 className="font-display font-bold text-xl sm:text-2xl text-white mb-2">Subscribe to OnePlatform360 Executive Insights</h3>
          <p className="text-slate-300 text-sm mb-6 max-w-md mx-auto">
            Weekly digest of cloud ERP strategies, AI automation playbooks, and institutional optimization benchmarks.
          </p>
          <div className="flex gap-3 max-w-md mx-auto">
            <input type="email" placeholder="Enter work email" className="form-input flex-1" />
            <button className="btn-primary text-xs sm:text-sm py-2.5 px-6 whitespace-nowrap shadow-lg shadow-blue-500/30">
              Subscribe
            </button>
          </div>
        </div>

      </div>
    </div>
  )
}
