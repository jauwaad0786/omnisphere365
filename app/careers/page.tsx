import Link from 'next/link'
import { OPEN_ROLES } from '@/lib/data'
import { MapPin, Briefcase, ArrowRight } from 'lucide-react'

const PERKS = [
  { icon: '🏠', title: 'Remote-friendly', desc: 'Work from anywhere — home, office, or a coffee shop.' },
  { icon: '🚀', title: 'Fast Growth', desc: 'Work on real products used by thousands. Grow with the company.' },
  { icon: '🤖', title: 'AI-first Culture', desc: 'Use cutting-edge AI tools every day in your workflow.' },
  { icon: '📚', title: 'Learning Budget', desc: 'Annual learning allowance for courses, books, and conferences.' },
  { icon: '💰', title: 'Competitive Pay', desc: 'Market-rate salaries + performance bonuses.' },
  { icon: '🎉', title: 'Great Team', desc: 'Collaborative, diverse, and genuinely fun team to work with.' },
]

export default function CareersPage() {
  const fullTime = OPEN_ROLES.filter(r => r.type === 'Full-time')
  const internships = OPEN_ROLES.filter(r => r.type === 'Internship')

  return (
    <div className="pt-24 pb-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-16">
          <div className="badge mb-4">We&apos;re Hiring</div>
          <h1 className="font-display font-bold text-4xl sm:text-5xl text-white mb-4">
            Build the Future of <span className="gradient-text">Enterprise ERP</span>
          </h1>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Join a fast-growing SaaS company transforming how schools and businesses operate in India. Work on real products. Grow fast.
          </p>
        </div>

        {/* Culture section */}
        <div className="glass rounded-2xl p-8 mb-14">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="font-display font-bold text-2xl text-white mb-3">Life at OmniSphere 365</h2>
              <p className="text-slate-400 text-sm leading-relaxed mb-4">
                We&apos;re a team of builders, designers, and problem-solvers who care deeply about the impact our work has on real institutions. We move fast, learn constantly, and support each other.
              </p>
              <p className="text-slate-400 text-sm leading-relaxed">
                Our tech stack is modern: React, Next.js, Python, FastAPI, MySQL — and we actively use AI tools like GitHub Copilot, Claude, and Gemini in our daily workflow.
              </p>
              <div className="flex flex-wrap gap-2 mt-4">
                {['React', 'Next.js', 'TypeScript', 'Python', 'FastAPI', 'MySQL', 'AWS', 'Figma'].map(t => (
                  <span key={t} className="badge text-[11px]">{t}</span>
                ))}
              </div>
            </div>
            <div className="grid grid-cols-2 gap-3">
              {PERKS.map((p) => (
                <div key={p.title} className="bg-[#0f0f1a] rounded-xl p-4 border border-[#1e1e3a]">
                  <div className="text-2xl mb-1.5">{p.icon}</div>
                  <div className="text-white text-xs font-semibold">{p.title}</div>
                  <div className="text-slate-500 text-[11px] mt-0.5 leading-relaxed">{p.desc}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Open roles */}
        <div className="mb-12">
          <h2 className="font-display font-bold text-2xl text-white mb-6">Open Positions</h2>
          <div className="space-y-3">
            {fullTime.map((role) => (
              <div key={role.title}
                className="glass glass-hover rounded-xl p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4 group">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <h3 className="text-white font-semibold">{role.title}</h3>
                    <span className="text-[10px] px-2 py-0.5 rounded-full bg-indigo-500/15 text-indigo-400 border border-indigo-500/25 font-medium">{role.dept}</span>
                  </div>
                  <div className="flex flex-wrap gap-3 text-xs text-slate-500">
                    <span className="flex items-center gap-1"><Briefcase size={11} /> {role.type}</span>
                    <span className="flex items-center gap-1"><MapPin size={11} /> {role.location}</span>
                    <span className="text-slate-600">{role.stack}</span>
                  </div>
                </div>
                <Link href={`mailto:shaikhjauwaad@gmail.com?subject=Application for ${role.title}`}
                  className="btn-secondary text-xs py-2 px-4 whitespace-nowrap group-hover:border-indigo-500/50">
                  Apply Now <ArrowRight size={12} />
                </Link>
              </div>
            ))}
          </div>
        </div>

        {/* Internships */}
        <div className="mb-12">
          <h2 className="font-display font-bold text-xl text-white mb-5">Internships</h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {internships.map((role) => (
              <div key={role.title} className="glass glass-hover rounded-xl p-5">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-white font-semibold text-sm">{role.title}</h3>
                  <span className="text-[10px] px-2 py-0.5 rounded-full bg-green-500/15 text-green-400 border border-green-500/25 font-medium">Internship</span>
                </div>
                <div className="text-xs text-slate-500 mb-3">{role.location} · {role.stack}</div>
                <Link href={`mailto:shaikhjauwaad@gmail.com?subject=Internship Application - ${role.title}`}
                  className="text-xs text-indigo-400 hover:text-indigo-300 font-medium flex items-center gap-1">
                  Apply <ArrowRight size={11} />
                </Link>
              </div>
            ))}
          </div>
        </div>

        {/* Spontaneous */}
        <div className="glass rounded-2xl p-7 text-center">
          <div className="text-3xl mb-3">💌</div>
          <h3 className="font-display font-bold text-xl text-white mb-2">Don&apos;t See a Fit?</h3>
          <p className="text-slate-400 text-sm mb-5">
            We&apos;re always looking for exceptional talent. Send us your CV and tell us how you&apos;d contribute.
          </p>
          <Link href="mailto:shaikhjauwaad@gmail.com?subject=Spontaneous Application - OmniSphere 365"
            className="btn-primary text-sm inline-flex">
            Send Spontaneous Application →
          </Link>
        </div>
      </div>
    </div>
  )
}
