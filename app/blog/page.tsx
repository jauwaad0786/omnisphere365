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
    <div className="pt-28 pb-20 bg-[#091526] min-h-screen text-slate-200">
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

        {/* 🌟 Featured Big Article in Crisp White Container 🌟 */}
        <div className="rounded-3xl overflow-hidden bg-white text-slate-900 border border-slate-200 mb-16 shadow-2xl group">
          <div className="grid lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-6 p-7 sm:p-10 space-y-4">
              <div className="flex items-center gap-3">
                <span className="text-[10px] font-bold uppercase tracking-wider bg-amber-50 text-amber-700 border border-amber-200 px-3 py-1 rounded-full">
                  Featured Deep Dive
                </span>
                <span className="text-xs text-slate-500 font-medium flex items-center gap-1">
                  <Clock size={13} /> {FEATURED_POST.readTime}
                </span>
              </div>

              <h2 className="font-display font-bold text-2xl sm:text-3xl text-slate-900 group-hover:text-blue-700 transition-colors leading-snug">
                {FEATURED_POST.title}
              </h2>

              <p className="text-slate-600 text-sm leading-relaxed">
                {FEATURED_POST.excerpt}
              </p>

              <div className="pt-4 border-t border-slate-200 flex items-center justify-between">
                <div className="text-xs text-slate-500 font-medium flex items-center gap-1.5">
                  <User size={13} className="text-blue-600" />
                  <span>{FEATURED_POST.author}</span>
                </div>
                <button
                  onClick={() => setActiveArticle(FEATURED_POST)}
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-900 group-hover:text-blue-700 transition-colors"
                >
                  Read Full Interactive Article <ArrowRight size={14} className="text-orange-500 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>

            <div className="lg:col-span-6 relative aspect-[16/10] lg:h-full min-h-[300px] overflow-hidden bg-slate-900">
              <Image
                src={FEATURED_POST.image}
                alt={FEATURED_POST.title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>
          </div>
        </div>

        {/* 🌟 Interactive ERP ROI Calculator Widget in Crisp White Container 🌟 */}
        <div className="rounded-3xl p-8 sm:p-10 bg-white text-slate-900 border border-slate-200 mb-16 shadow-2xl">
          <div className="grid lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-6 space-y-4">
              <div className="flex items-center gap-2 text-xs font-bold text-orange-600 uppercase tracking-wider font-mono">
                <Calculator size={16} /> Interactive Institutional ROI Estimator
              </div>
              <h3 className="font-display font-bold text-2xl sm:text-3xl text-slate-900">
                How Much Time &amp; Cost Will OnePlatform360 Save Your Institution?
              </h3>
              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                Estimate the monthly hours recovered from paperwork, manual attendance tracking, fee recovery, and automated payroll calculations.
              </p>

              <div className="grid sm:grid-cols-2 gap-4 pt-2">
                <div>
                  <label className="block text-xs text-slate-700 mb-1.5 font-semibold">Institution Profile</label>
                  <select
                    value={calcOrgType}
                    onChange={(e) => setCalcOrgType(e.target.value)}
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-2.5 text-xs text-slate-900 outline-none focus:border-blue-500 transition-all"
                  >
                    <option>School (500 - 2,000 Students)</option>
                    <option>College / Higher Education (2,000+)</option>
                    <option>Hospital / Medical OPD</option>
                    <option>Corporate Enterprise</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs text-slate-700 mb-1.5 font-semibold">
                    Total Staff / Teachers: <span className="text-blue-600 font-bold">{calcStaffCount}</span>
                  </label>
                  <input
                    type="range"
                    min={10}
                    max={500}
                    step={10}
                    value={calcStaffCount}
                    onChange={(e) => setCalcStaffCount(Number(e.target.value))}
                    className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-blue-600 mt-2"
                  />
                </div>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="grid grid-cols-2 gap-4 p-6 rounded-2xl bg-slate-50 border border-slate-200 text-center">
                <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-sm">
                  <div className="text-2xl sm:text-3xl font-extrabold font-display text-slate-900">
                    {hoursSavedPerMonth} Hrs
                  </div>
                  <div className="text-[11px] text-slate-800 mt-1 font-bold">Monthly Admin Hours Saved</div>
                  <div className="text-[9.5px] text-slate-500 mt-0.5">Automated workflows</div>
                </div>

                <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-sm">
                  <div className="text-2xl sm:text-3xl font-extrabold font-display text-emerald-600">
                    ₹{(estimatedCostSaving / 1000).toFixed(0)}K+
                  </div>
                  <div className="text-[11px] text-slate-800 mt-1 font-bold">Estimated Monthly Savings</div>
                  <div className="text-[9.5px] text-slate-500 mt-0.5">Paper, errors &amp; overhead</div>
                </div>

                <div className="col-span-2 pt-2">
                  <Link href="/demo" className="btn-primary text-xs w-full justify-center py-3.5 shadow-md">
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
                    : 'bg-white text-slate-800 border border-slate-200 hover:border-blue-400'
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
              className="w-full bg-white border border-slate-200 rounded-xl pl-9 pr-4 py-2 text-xs text-slate-900 placeholder:text-slate-400 outline-none focus:border-blue-500 shadow-sm transition-all"
            />
          </div>
        </div>

        {/* 🌟 Articles Grid in Crisp White Cards 🌟 */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {filteredPosts.map((post) => (
            <article
              key={post.id}
              onClick={() => setActiveArticle(post)}
              className="rounded-2xl p-6 group cursor-pointer bg-white text-slate-900 border border-slate-200 shadow-xl hover:shadow-2xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-xl bg-blue-50 border border-blue-200 flex items-center justify-center text-xl shrink-0">
                    {post.icon}
                  </div>
                  <span className="text-[10px] font-bold uppercase tracking-wider bg-blue-50 text-blue-700 border border-blue-200 px-2.5 py-0.5 rounded-full">
                    {post.category}
                  </span>
                </div>
                <h3 className="font-display font-bold text-slate-900 text-base sm:text-lg leading-snug mb-2 group-hover:text-blue-700 transition-colors">
                  {post.title}
                </h3>
                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-6">{post.excerpt}</p>
              </div>

              <div className="flex items-center justify-between text-xs text-slate-500 pt-4 border-t border-slate-100 font-medium">
                <span>{post.date} · {post.readTime}</span>
                <span className="text-slate-900 group-hover:text-blue-700 font-bold flex items-center gap-1">
                  Read Article <ArrowRight size={12} className="text-orange-500 group-hover:translate-x-1 transition-transform" />
                </span>
              </div>
            </article>
          ))}
        </div>

        {/* ──── FULL INTERACTIVE ARTICLE READER MODAL (Crisp White Window) ──── */}
        {activeArticle && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-fade-in">
            <div className="relative w-full max-w-3xl max-h-[85vh] overflow-y-auto rounded-3xl bg-white text-slate-900 border border-slate-200 p-7 sm:p-10 shadow-[0_30px_90px_rgba(0,0,0,0.4)]">
              {/* Close Button */}
              <button
                onClick={() => setActiveArticle(null)}
                className="absolute top-5 right-5 p-2 rounded-xl bg-slate-100 text-slate-700 hover:text-slate-900 hover:bg-slate-200 transition-colors"
              >
                <X size={20} />
              </button>

              <div className="space-y-5">
                <div className="flex items-center gap-3">
                  <span className="text-xs font-bold uppercase tracking-wider bg-blue-50 text-blue-700 border border-blue-200 px-3 py-1 rounded-full">
                    {activeArticle.category}
                  </span>
                  <span className="text-xs text-slate-500 font-medium">
                    {activeArticle.date} · {activeArticle.readTime}
                  </span>
                </div>

                <h2 className="font-display font-extrabold text-2xl sm:text-3xl text-slate-900 leading-tight">
                  {activeArticle.title}
                </h2>

                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-700 leading-relaxed font-medium">
                  {activeArticle.excerpt}
                </div>

                <div className="text-slate-700 text-sm leading-relaxed space-y-4 pt-2 whitespace-pre-line">
                  {activeArticle.content || `OnePlatform360's integrated cloud architecture unifies academic operations, workforce management, biometric attendance, and official WhatsApp Business APIs into a single operational pane.

By eliminating disparate point solutions and spreadsheets, educational institutes and enterprises across Delhi NCR achieve zero data redundancy, complete audit trails, and automatic regulatory reporting.`}
                </div>

                <div className="pt-6 border-t border-slate-200 flex flex-wrap items-center justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <button
                      onClick={() => setLiked(!liked)}
                      className={`flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-bold border transition-all ${
                        liked ? 'bg-blue-50 border-blue-300 text-blue-700' : 'bg-slate-50 border-slate-200 text-slate-700'
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

        {/* 🌟 Newsletter Subscription in Crisp White Container 🌟 */}
        <div className="rounded-3xl p-8 sm:p-12 text-center bg-white text-slate-900 border border-slate-200 shadow-2xl">
          <div className="text-3xl mb-3">📬</div>
          <h3 className="font-display font-bold text-xl sm:text-2xl text-slate-900 mb-2">Subscribe to OnePlatform360 Executive Insights</h3>
          <p className="text-slate-600 text-sm mb-6 max-w-md mx-auto">
            Weekly digest of cloud ERP strategies, AI automation playbooks, and institutional optimization benchmarks.
          </p>
          <div className="flex gap-3 max-w-md mx-auto">
            <input type="email" placeholder="Enter work email" className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-2.5 text-xs text-slate-900 placeholder:text-slate-400 outline-none focus:border-blue-500 focus:bg-white transition-all shadow-sm" />
            <button className="btn-primary text-xs sm:text-sm py-2.5 px-6 whitespace-nowrap shadow-lg shadow-blue-500/30">
              Subscribe
            </button>
          </div>
        </div>

      </div>
    </div>
  )
}
