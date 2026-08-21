'use client'
import Link from 'next/link'
import { OPEN_ROLES } from '../../lib/data'
import { MapPin, Briefcase, ArrowRight, Sparkles } from 'lucide-react'

const PERKS = [
  { icon: '🏠', title: 'Remote-first', desc: 'Work from anywhere — hybrid setup with modern tools.' },
  { icon: '🚀', title: 'High Impact', desc: 'Build software impacting 500+ institutions and 1.2L+ users.' },
  { icon: '🤖', title: 'AI-first Culture', desc: 'Work directly with AI agents, LLMs, and autonomous tools.' },
  { icon: '📚', title: 'Learning Allowance', desc: 'Annual budget for courses, certifications, and conferences.' },
  { icon: '💰', title: 'Competitive Package', desc: 'Attractive salaries, milestone bonuses & fast promotions.' },
  { icon: '🎉', title: 'Great Culture', desc: 'Supportive, transparent, and innovative work environment.' },
]

export default function CareersPage() {
  const fullTime = OPEN_ROLES.filter(r => r.type === 'Full-time')
  const internships = OPEN_ROLES.filter(r => r.type === 'Internship')

  return (
    <div className="pt-28 pb-20 bg-[#070c1b] min-h-screen text-slate-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-16">
          <div className="badge mb-4">
            <Sparkles size={12} className="text-blue-400" /> Join Our Mission
          </div>
          <h1 className="font-display font-bold text-4xl sm:text-5xl text-white mb-4">
            Build the Future of <span className="gradient-text">Enterprise Cloud Software</span>
          </h1>
          <p className="text-slate-400 text-base sm:text-lg max-w-2xl mx-auto">
            Join a fast-moving enterprise SaaS company transforming operational software for institutions across India.
          </p>
        </div>

        {/* Culture section */}
        <div className="glass rounded-2xl p-8 mb-14 border border-blue-500/20">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="font-display font-bold text-2xl text-white mb-3">Life at OnePlatform360</h2>
              <p className="text-slate-300 text-sm leading-relaxed mb-4">
                We are a team of passionate engineers, product designers, and solution consultants building mission-critical operating systems. We move with speed and focus on real business impact.
              </p>
              <p className="text-slate-400 text-sm leading-relaxed">
                Our technology stack: Next.js, React, TypeScript, Python, FastAPI, PostgreSQL, AWS &amp; AI-native tooling.
              </p>
              <div className="flex flex-wrap gap-2 mt-5">
                {['Next.js 14', 'React 18', 'TypeScript', 'Python', 'FastAPI', 'AWS Cloud', 'Docker', 'AI Workflows'].map(t => (
                  <span key={t} className="badge text-[11px] bg-blue-500/10 border-blue-500/25 text-blue-300">{t}</span>
                ))}
              </div>
            </div>
            <div className="grid grid-cols-2 gap-3">
              {PERKS.map((p) => (
                <div key={p.title} className="bg-[#0c1527] rounded-xl p-4 border border-blue-500/15">
                  <div className="text-2xl mb-1.5">{p.icon}</div>
                  <div className="text-white text-xs font-semibold">{p.title}</div>
                  <div className="text-slate-400 text-[11px] mt-0.5 leading-relaxed">{p.desc}</div>
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
              <div
                key={role.title}
                className="glass glass-hover rounded-xl p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4 group border border-blue-500/15"
              >
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <h3 className="text-white font-semibold">{role.title}</h3>
                    <span className="text-[10px] px-2 py-0.5 rounded-full bg-blue-500/15 text-blue-300 border border-blue-500/30 font-medium">
                      {role.dept}
                    </span>
                  </div>
                  <div className="flex flex-wrap gap-3 text-xs text-slate-400">
                    <span className="flex items-center gap-1"><Briefcase size={11} /> {role.type}</span>
                    <span className="flex items-center gap-1"><MapPin size={11} /> {role.location}</span>
                    <span className="text-blue-400">{role.stack}</span>
                  </div>
                </div>
                <Link
                  href={`mailto:OnePlatform360@gmail.com?subject=Application for ${role.title}`}
                  className="btn-secondary text-xs py-2 px-4 whitespace-nowrap group-hover:border-blue-400"
                >
                  Apply Now <ArrowRight size={12} />
                </Link>
              </div>
            ))}
          </div>
        </div>

        {/* Internships */}
        <div className="mb-12">
          <h2 className="font-display font-bold text-xl text-white mb-5">Internship Programs</h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {internships.map((role) => (
              <div key={role.title} className="glass glass-hover rounded-xl p-5 border border-blue-500/15">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-white font-semibold text-sm">{role.title}</h3>
                  <span className="text-[10px] px-2 py-0.5 rounded-full bg-emerald-500/15 text-emerald-300 border border-emerald-500/30 font-medium">
                    Internship
                  </span>
                </div>
                <div className="text-xs text-slate-400 mb-3">{role.location} · {role.stack}</div>
                <Link
                  href={`mailto:OnePlatform360@gmail.com?subject=Internship Application - ${role.title}`}
                  className="text-xs text-blue-400 hover:text-blue-300 font-medium flex items-center gap-1"
                >
                  Apply via Email <ArrowRight size={11} />
                </Link>
              </div>
            ))}
          </div>
        </div>

        {/* Spontaneous Application */}
        <div className="glass rounded-2xl p-8 text-center border border-blue-500/25">
          <div className="text-3xl mb-3">💌</div>
          <h3 className="font-display font-bold text-xl text-white mb-2">Don&apos;t See Your Exact Role?</h3>
          <p className="text-slate-400 text-sm mb-5 max-w-md mx-auto">
            We are always seeking exceptional talent in engineering, design, and sales. Send your resume directly to our leadership team.
          </p>
          <Link
            href="mailto:OnePlatform360@gmail.com?subject=General Application - OnePlatform360"
            className="btn-primary text-sm inline-flex"
          >
            Send Resume to OnePlatform360@gmail.com →
          </Link>
        </div>

      </div>
    </div>
  )
}
