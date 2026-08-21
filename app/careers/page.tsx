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
    <div className="pt-28 pb-20 bg-[#091526] min-h-screen text-slate-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-16">
          <div className="badge mb-4">
            <Sparkles size={12} className="text-cyan-300" /> Join Our Mission
          </div>
          <h1 className="font-display font-extrabold text-4xl sm:text-5xl text-white mb-4">
            Build the Future of <span className="gradient-text">Enterprise Cloud Software</span>
          </h1>
          <p className="text-slate-300 text-base sm:text-lg max-w-2xl mx-auto">
            Join a fast-moving enterprise SaaS company transforming operational software for institutions across India.
          </p>
        </div>

        {/* Culture section in Crisp White Container */}
        <div className="rounded-3xl p-8 sm:p-10 mb-14 bg-white text-slate-900 border border-slate-200 shadow-2xl">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <div className="text-xs font-bold uppercase tracking-wider text-orange-600 mb-1 font-mono">Work Culture</div>
              <h2 className="font-display font-bold text-2xl sm:text-3xl text-slate-900 mb-3">Life at OnePlatform360</h2>
              <p className="text-slate-700 text-sm leading-relaxed mb-4">
                We are a team of passionate engineers, product designers, and solution consultants building mission-critical operating systems. We move with speed and focus on real business impact.
              </p>
              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                Our technology stack: Next.js, React, TypeScript, Python, FastAPI, PostgreSQL, AWS &amp; AI-native tooling.
              </p>
              <div className="flex flex-wrap gap-2 mt-5">
                {['Next.js 14', 'React 18', 'TypeScript', 'Python', 'FastAPI', 'AWS Cloud', 'Docker', 'AI Workflows'].map(t => (
                  <span key={t} className="text-xs font-semibold px-3 py-1 rounded-full bg-slate-100 text-slate-800 border border-slate-200">{t}</span>
                ))}
              </div>
            </div>
            <div className="grid grid-cols-2 gap-3">
              {PERKS.map((p) => (
                <div key={p.title} className="bg-slate-50 rounded-xl p-4 border border-slate-200">
                  <div className="text-2xl mb-1.5">{p.icon}</div>
                  <div className="text-slate-900 text-xs font-bold">{p.title}</div>
                  <div className="text-slate-600 text-[11px] mt-0.5 leading-relaxed">{p.desc}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Open roles in Crisp White Cards */}
        <div className="mb-14">
          <div className="mb-6">
            <span className="text-xs font-bold uppercase tracking-widest text-cyan-300">
              Current Openings
            </span>
            <h2 className="font-display font-bold text-2xl sm:text-3xl text-white mt-1">Full-Time Positions</h2>
          </div>
          <div className="space-y-3.5">
            {fullTime.map((role) => (
              <div
                key={role.title}
                className="rounded-2xl p-5 sm:p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4 group bg-white text-slate-900 border border-slate-200 shadow-md hover:shadow-xl hover:border-blue-300 transition-all duration-300"
              >
                <div>
                  <div className="flex items-center gap-2 mb-1.5">
                    <h3 className="text-slate-900 font-bold text-base sm:text-lg group-hover:text-blue-700 transition-colors">{role.title}</h3>
                    <span className="text-[10px] px-2.5 py-0.5 rounded-full bg-blue-50 text-blue-700 border border-blue-200 font-bold uppercase">
                      {role.dept}
                    </span>
                  </div>
                  <div className="flex flex-wrap gap-3 text-xs text-slate-600 font-medium">
                    <span className="flex items-center gap-1"><Briefcase size={13} className="text-blue-600" /> {role.type}</span>
                    <span className="flex items-center gap-1"><MapPin size={13} className="text-purple-600" /> {role.location}</span>
                    <span className="text-slate-900 font-mono font-semibold">{role.stack}</span>
                  </div>
                </div>
                <Link
                  href={`mailto:OnePlatform360@gmail.com?subject=Application for ${role.title}`}
                  className="btn-primary text-xs py-2.5 px-5 whitespace-nowrap shadow-md"
                >
                  Apply Now <ArrowRight size={13} />
                </Link>
              </div>
            ))}
          </div>
        </div>

        {/* Internships in Crisp White Cards */}
        <div className="mb-14">
          <div className="mb-6">
            <span className="text-xs font-bold uppercase tracking-widest text-cyan-300">
              Students &amp; Freshers
            </span>
            <h2 className="font-display font-bold text-2xl sm:text-3xl text-white mt-1">Internship Programs</h2>
          </div>
          <div className="space-y-3.5">
            {internships.map((role) => (
              <div
                key={role.title}
                className="rounded-2xl p-5 sm:p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4 group bg-white text-slate-900 border border-slate-200 shadow-md hover:shadow-xl hover:border-blue-300 transition-all duration-300"
              >
                <div>
                  <div className="flex items-center gap-2 mb-1.5">
                    <h3 className="text-slate-900 font-bold text-base sm:text-lg group-hover:text-blue-700 transition-colors">{role.title}</h3>
                    <span className="text-[10px] px-2.5 py-0.5 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200 font-bold uppercase">
                      {role.dept}
                    </span>
                  </div>
                  <div className="flex flex-wrap gap-3 text-xs text-slate-600 font-medium">
                    <span className="flex items-center gap-1"><Briefcase size={13} className="text-blue-600" /> {role.type}</span>
                    <span className="flex items-center gap-1"><MapPin size={13} className="text-purple-600" /> {role.location}</span>
                    <span className="text-slate-900 font-mono font-semibold">{role.stack}</span>
                  </div>
                </div>
                <Link
                  href={`mailto:OnePlatform360@gmail.com?subject=Internship Application for ${role.title}`}
                  className="px-5 py-2.5 rounded-xl bg-slate-100 text-slate-900 font-bold text-xs hover:bg-slate-200 transition-colors"
                >
                  Apply for Internship →
                </Link>
              </div>
            ))}
          </div>
        </div>

        {/* Spontaneous Application Card in Crisp White */}
        <div className="rounded-3xl p-8 sm:p-12 text-center bg-white text-slate-900 border border-slate-200 shadow-2xl">
          <h2 className="font-display font-bold text-2xl text-slate-900 mb-2">Don&apos;t See Your Role Listed?</h2>
          <p className="text-slate-600 text-sm max-w-xl mx-auto mb-6">
            We are always looking for outstanding builders, engineers, and growth leaders. Send your resume directly to our founders.
          </p>
          <a
            href="mailto:OnePlatform360@gmail.com?subject=Spontaneous Application"
            className="btn-primary text-xs sm:text-sm px-7 py-3.5 inline-flex shadow-lg shadow-blue-500/30"
          >
            Email Your Resume to OnePlatform360@gmail.com →
          </a>
        </div>

      </div>
    </div>
  )
}
