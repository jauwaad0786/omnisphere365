'use client'
import { BLOG_POSTS } from '../../lib/data'

const CATEGORIES = ['All', 'Education', 'AI & Tech', 'Business', 'Automation']

export default function BlogPage() {
  return (
    <div className="pt-28 pb-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-14">
          <div className="badge mb-4">Blog & Insights</div>
          <h1 className="font-display font-bold text-4xl sm:text-5xl text-slate-900">
            ERP <span className="gradient-text">Knowledge Hub</span>
          </h1>
          <p className="text-slate-500 mt-4 max-w-xl mx-auto">
            Insights, guides, and updates on ERP, AI automation, and digital transformation for Indian institutions.
          </p>
        </div>

        {/* Categories */}
        <div className="flex flex-wrap gap-2 justify-center mb-10">
          {CATEGORIES.map((c) => (
            <button key={c}
              className={`px-4 py-1.5 rounded-full text-sm border transition-all
                ${c === 'All'
                  ? 'bg-brand-600 border-brand-600 text-white'
                  : 'border-surface-border text-slate-500 hover:border-brand-300 hover:text-brand-700'}`}>
              {c}
            </button>
          ))}
        </div>

        {/* Posts grid */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {BLOG_POSTS.map((post) => (
            <article key={post.id} className="glass glass-hover rounded-2xl p-6 group cursor-pointer">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-10 h-10 rounded-xl bg-brand-50 border border-brand-100 flex items-center justify-center text-2xl shrink-0">
                  {post.icon}
                </div>
                <div>
                  <span className="badge text-[10px]">{post.category}</span>
                </div>
              </div>
              <h2 className="font-display font-bold text-slate-900 text-lg leading-snug mb-2 group-hover:text-brand-700 transition-colors">
                {post.title}
              </h2>
              <p className="text-slate-500 text-sm leading-relaxed mb-4">{post.excerpt}</p>
              <div className="flex items-center justify-between text-xs text-slate-400">
                <span>{post.date} · {post.readTime}</span>
                <span className="text-brand-600 group-hover:text-brand-700 font-medium">Read More →</span>
              </div>
            </article>
          ))}
        </div>

        {/* Newsletter */}
        <div className="glass rounded-2xl p-8 text-center">
          <div className="text-3xl mb-3">📬</div>
          <h3 className="font-display font-bold text-xl text-slate-900 mb-2">Get Weekly ERP Insights</h3>
          <p className="text-slate-500 text-sm mb-5 max-w-md mx-auto">
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
