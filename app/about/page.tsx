'use client'
import Link from 'next/link'
import { WHY_US } from '../../lib/data'
import { ArrowRight, Target, Sparkles, Shield, Award, Users } from 'lucide-react'
import { motion } from 'framer-motion'

export default function AboutPage() {
  return (
    <div className="pt-28 pb-20 bg-[#070c1b] min-h-screen text-slate-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Hero */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-center mb-20"
        >
          <div className="badge mb-4">
            <Sparkles size={12} className="text-blue-400" /> About OnePlatform360
          </div>
          <h1 className="font-display font-bold text-4xl sm:text-5xl text-white mb-5">
            We Build the <span className="gradient-text">Digital Future</span><br />for India&apos;s Institutions
          </h1>
          <p className="text-slate-400 text-base sm:text-lg max-w-3xl mx-auto leading-relaxed">
            OnePlatform360 was built with a single mission — make enterprise-grade ERP, HRMS, and AI automation affordable, modern, and accessible for every school, hospital, and growing enterprise.
          </p>
        </motion.div>

        {/* Stats Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-20"
        >
          {[
            { value: '500+', label: 'Institutions', sub: 'across India & Gulf' },
            { value: '1.2L+', label: 'Students & Staff', sub: 'managed daily' },
            { value: '99.9%', label: 'Uptime SLA', sub: 'enterprise guaranteed' },
            { value: '12+', label: 'ERP Modules', sub: 'one unified platform' },
          ].map((s) => (
            <div key={s.label} className="glass rounded-xl p-6 text-center border border-blue-500/20">
              <div className="text-3xl font-bold font-display gradient-text">{s.value}</div>
              <div className="text-white text-sm font-semibold mt-1">{s.label}</div>
              <div className="text-slate-400 text-xs">{s.sub}</div>
            </div>
          ))}
        </motion.div>

        {/* Vision & Mission */}
        <div className="grid md:grid-cols-2 gap-6 mb-20">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="glass rounded-2xl p-8 relative overflow-hidden border border-blue-500/20"
          >
            <div className="glow-orb w-40 h-40 bg-blue-500/10 -top-10 -right-10" />
            <div className="relative">
              <div className="w-12 h-12 rounded-xl bg-blue-500/15 border border-blue-500/30 flex items-center justify-center mb-4">
                <Target size={22} className="text-blue-400" />
              </div>
              <h3 className="font-display font-bold text-xl text-white mb-3">Our Vision</h3>
              <p className="text-slate-300 text-sm leading-relaxed">
                To be India&apos;s most trusted digital operating system partner — empowering every school, college, hospital, and business with AI-powered cloud ERP that drives operational excellence, cuts admin overhead, and unlocks long-term scalability.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="glass rounded-2xl p-8 relative overflow-hidden border border-blue-500/20"
          >
            <div className="glow-orb w-40 h-40 bg-cyan-500/10 -top-10 -right-10" />
            <div className="relative">
              <div className="w-12 h-12 rounded-xl bg-cyan-500/15 border border-cyan-500/30 flex items-center justify-center mb-4">
                <Sparkles size={22} className="text-cyan-400" />
              </div>
              <h3 className="font-display font-bold text-xl text-white mb-3">Our Mission</h3>
              <p className="text-slate-300 text-sm leading-relaxed">
                To simplify operations, eliminate paperwork, and accelerate digital modernization — by delivering enterprise-grade, accessible software built with automation, artificial intelligence, and human-centric design.
              </p>
            </div>
          </motion.div>
        </div>

        {/* Why Choose Us */}
        <div className="mb-20">
          <h2 className="font-display font-bold text-2xl text-white mb-8 text-center">Why Choose OnePlatform360</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {WHY_US.map((item) => (
              <div key={item.title} className="glass glass-hover rounded-xl p-5 flex gap-4 group border border-blue-500/15">
                <div className="feature-icon text-xl shrink-0 group-hover:bg-blue-600/20 group-hover:scale-110 transition-all">{item.icon}</div>
                <div>
                  <div className="text-white text-sm font-semibold mb-1">{item.title}</div>
                  <div className="text-slate-400 text-xs leading-relaxed">{item.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center bg-gradient-to-r from-[#0c162e] via-[#102046] to-[#0c162e] p-10 rounded-3xl border border-blue-500/30"
        >
          <h3 className="font-display font-bold text-2xl text-white mb-4">Ready to Transform Your Institution?</h3>
          <p className="text-slate-300 text-sm max-w-lg mx-auto mb-6">
            Join hundreds of institutes already saving time and accelerating growth with OnePlatform360.
          </p>
          <div className="flex justify-center gap-3">
            <Link href="/demo" className="btn-primary text-sm">
              Book Free Demo <ArrowRight size={14} />
            </Link>
            <Link href="/services" className="btn-secondary text-sm">
              Explore All Services
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
