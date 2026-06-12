'use client'
import { BLOG_POSTS } from '../../lib/data'
import Link from 'next/link'

const CATEGORIES = ['All', 'Education', 'AI & Tech', 'Business', 'Automation']

export default function BlogPage() {
  return (
    <div className="pt-24 pb-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-14">
          <div className="badge mb-4">Blog & Insights</div>
          <h1 className="font-display font-bold text-4xl sm:text-5xl text-white">
            ERP <span className="gradient-text">Knowledge Hub</span>
          </h1>
          <p className="text-slate-400 mt-4 max-w-xl mx-auto">
            Insights, guides, and updates on ERP, AI automation, and digital transformation for Indian institutions.
          </p>
        </div>

        {/* Categories */}
        <div className="flex flex-wrap gap-2 justify-center mb-10">
          {CATEGORIES.map((c) => (
            <button key={c}
              className={`px-4 py-1.5 rounded-full text-sm border transition-all
                ${c === 'All'
                  ? 'bg-indigo-600 border-indigo-500 text-white'
                  : 'border-[#1e1e3a] text-slate-400 hover:border-indigo-500/50 hover:text-white'}`}>
              {c}
            </button>
          ))}
        </div>

        {/* Posts grid */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {BLOG_POSTS.map((post) => (
            <article key={post.id} className="glass glass-hover rounded-2xl p-6 group cursor-pointer">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-10 h-10 rounded-xl bg-indigo-500/15 border border-indigo-500/25 flex items-center justify-center text-2xl shrink-0">
                  {post.icon}
                </div>
                <div>
                  <span className="badge text-[10px]">{post.category}</span>
                </div>
              </div>
              <h2 className="font-display font-bold text-white text-lg leading-snug mb-2 group-hover:text-indigo-300 transition-colors">
                {post.title}
              </h2>
              <p className="text-slate-400 text-sm leading-relaxed mb-4">{post.excerpt}</p>
              <div className="flex items-center justify-between text-xs text-slate-500">
                <span>{post.date} · {post.readTime}</span>
                <span className="text-indigo-400 group-hover:text-indigo-300 font-medium">Read More →</span>
              </div>
            </article>
          ))}
        </div>

        {/* Newsletter */}
        <div className="glass rounded-2xl p-8 text-center">
          <div className="text-3xl mb-3">📬</div>
          <h3 className="font-display font-bold text-xl text-white mb-2">Get Weekly ERP Insights</h3>
          <p className="text-slate-400 text-sm mb-5 max-w-md mx-auto">
            Subscribe to our newsletter for the latest in ERP trends, AI automation, and digital transformation tips.
          </p>
          <div className="flex gap-3 max-w-sm mx-auto">
            <input type="email" placeholder="Your email address" className="form-input flex-1" />
            <button className="btn-primary text-sm py-2.5 px-5 whitespace-nowrap">Subscribe</button>
          </div>
        </div>
      </div>
    </div>
  )
}
