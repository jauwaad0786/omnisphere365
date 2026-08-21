'use client'
import { BLOG_POSTS } from '../../lib/data'
import { Sparkles, ArrowRight } from 'lucide-react'

const CATEGORIES = ['All', 'Education', 'AI & Tech', 'Business', 'Automation']

export default function BlogPage() {
  return (
    <div className="pt-28 pb-20 bg-[#070c1b] min-h-screen text-slate-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-14">
          <div className="badge mb-4">
            <Sparkles size={12} className="text-blue-400" /> Knowledge &amp; Insights
          </div>
          <h1 className="font-display font-bold text-4xl sm:text-5xl text-white">
            Enterprise <span className="gradient-text">Knowledge Hub</span>
          </h1>
          <p className="text-slate-400 mt-4 max-w-xl mx-auto text-sm sm:text-base">
            Expert insights, architecture breakdowns, and transformation playbooks for Indian institutions.
          </p>
        </div>

        {/* Categories */}
        <div className="flex flex-wrap gap-2 justify-center mb-12">
          {CATEGORIES.map((c) => (
            <button
              key={c}
              className={`px-4 py-1.5 rounded-full text-xs font-semibold border transition-all ${
                c === 'All'
                  ? 'bg-blue-600 border-blue-500 text-white shadow-lg shadow-blue-500/30'
                  : 'border-blue-500/20 bg-[#0c1527] text-slate-400 hover:border-blue-500/40 hover:text-white'
              }`}
            >
              {c}
            </button>
          ))}
        </div>

        {/* Posts grid */}
        <div className="grid md:grid-cols-2 gap-6 mb-16">
          {BLOG_POSTS.map((post) => (
            <article
              key={post.id}
              className="glass glass-hover rounded-2xl p-6 group cursor-pointer border border-blue-500/20 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center gap-2.5 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-blue-500/15 border border-blue-500/30 flex items-center justify-center text-2xl shrink-0">
                    {post.icon}
                  </div>
                  <div>
                    <span className="badge text-[10px] bg-blue-500/10 border-blue-500/20 text-blue-300">
                      {post.category}
                    </span>
                  </div>
                </div>
                <h2 className="font-display font-bold text-white text-lg leading-snug mb-2 group-hover:text-blue-300 transition-colors">
                  {post.title}
                </h2>
                <p className="text-slate-400 text-sm leading-relaxed mb-4">{post.excerpt}</p>
              </div>

              <div className="flex items-center justify-between text-xs text-slate-500 pt-4 border-t border-blue-500/15">
                <span>{post.date} · {post.readTime}</span>
                <span className="text-blue-400 group-hover:text-blue-300 font-semibold flex items-center gap-1">
                  Read Article <ArrowRight size={12} />
                </span>
              </div>
            </article>
          ))}
        </div>

        {/* Newsletter */}
        <div className="glass rounded-2xl p-8 text-center border border-blue-500/25">
          <div className="text-3xl mb-3">📬</div>
          <h3 className="font-display font-bold text-xl text-white mb-2">Get Weekly Enterprise ERP Insights</h3>
          <p className="text-slate-400 text-sm mb-5 max-w-md mx-auto">
            Subscribe for free guides on cloud ERP architectures, AI workflows, and digital operations.
          </p>
          <div className="flex gap-3 max-w-md mx-auto">
            <input type="email" placeholder="Enter work email" className="form-input flex-1" />
            <button className="btn-primary text-sm py-2.5 px-6 whitespace-nowrap shadow-lg shadow-blue-500/30">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
