'use client'
import Link from 'next/link'
import { WHY_US } from '../../lib/data'
import { ArrowRight, Target, Sparkles, Shield, Award, Users } from 'lucide-react'
import { motion } from 'framer-motion'

export default function AboutPage() {
  return (
    <div className="pt-28 pb-20 bg-[#091526] min-h-screen text-slate-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Hero */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <div className="badge mb-4">
            <Sparkles size={12} className="text-cyan-300" /> About OnePlatform360
          </div>
          <h1 className="font-display font-extrabold text-4xl sm:text-5xl text-white mb-5 leading-tight">
            We Build the <span className="gradient-text">Digital Future</span><br />for India&apos;s Enterprises &amp; Institutions
          </h1>
          <p className="text-slate-300 text-base sm:text-lg max-w-3xl mx-auto leading-relaxed">
            OnePlatform360 was built with a single mission — make enterprise-grade Multi-Tenant ERP, HRMS, and AI automation affordable, modern, and accessible for schools, universities, hospitals, gyms, retail supply chains, and growing enterprises.
          </p>
        </motion.div>

        {/* Stats Grid in Crisp White Cards */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-16"
        >
          {[
            { value: '500+', label: 'Enterprises & Institutions', sub: 'across India' },
            { value: '2.5M+', label: 'Active Users & Members', sub: 'managed daily' },
            { value: '99.9%', label: 'Uptime SLA', sub: 'enterprise guaranteed' },
            { value: '15+', label: 'Multi-Tenant Modules', sub: 'one unified platform' },
          ].map((s) => (
            <div key={s.label} className="rounded-2xl p-6 text-center bg-white text-slate-900 border border-slate-200 shadow-xl">
              <div className="text-3xl font-extrabold font-display text-slate-900">{s.value}</div>
              <div className="text-blue-700 text-sm font-bold mt-1">{s.label}</div>
              <div className="text-slate-500 text-xs mt-0.5 font-medium">{s.sub}</div>
            </div>
          ))}
        </motion.div>

        {/* Vision & Mission in Crisp White Cards */}
        <div className="grid md:grid-cols-2 gap-6 mb-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-3xl p-8 bg-white text-slate-900 border border-slate-200 shadow-xl"
          >
            <div className="w-12 h-12 rounded-2xl bg-blue-50 border border-blue-200 flex items-center justify-center text-blue-600 mb-5">
              <Target size={24} />
            </div>
            <h2 className="font-display font-bold text-2xl text-slate-900 mb-3">Our Mission</h2>
            <p className="text-slate-600 text-sm leading-relaxed">
              To eliminate paper bureaucracy and fragmented software across Indian businesses, educational campuses, hospitals, gym chains, and retail supply networks by delivering a cohesive, cloud-first, multi-tenant operating system that works seamlessly out of the box.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-3xl p-8 bg-white text-slate-900 border border-slate-200 shadow-xl"
          >
            <div className="w-12 h-12 rounded-2xl bg-purple-50 border border-purple-200 flex items-center justify-center text-purple-600 mb-5">
              <Award size={24} />
            </div>
            <h2 className="font-display font-bold text-2xl text-slate-900 mb-3">Our Vision</h2>
            <p className="text-slate-600 text-sm leading-relaxed">
              To be the most versatile and trusted multi-tenant software platform in South Asia, empowering 10,000+ organizations with predictive intelligence, automated workflows, and world-class digital experiences for clients, patients, students, and employees.
            </p>
          </motion.div>
        </div>

        {/* Why Choose Us Grid */}
        <div className="mb-16">
          <div className="text-center mb-10">
            <span className="text-xs font-bold uppercase tracking-widest text-cyan-300">
              Core Principles
            </span>
            <h2 className="font-display font-bold text-3xl text-white mt-1">Why Enterprises &amp; Institutions Partner With Us</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {WHY_US.map((item) => (
              <div key={item.title} className="rounded-2xl p-6 bg-white text-slate-900 border border-slate-200 shadow-lg hover:shadow-xl transition-all">
                <div className="text-2xl mb-3">{item.icon}</div>
                <h3 className="font-bold text-slate-900 text-base mb-1">{item.title}</h3>
                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="rounded-3xl p-8 sm:p-12 text-center bg-white text-slate-900 border border-slate-200 shadow-2xl">
          <h2 className="font-display font-bold text-2xl sm:text-3xl text-slate-900 mb-3">Ready to Modernize Your Organisation?</h2>
          <p className="text-slate-600 text-sm sm:text-base max-w-xl mx-auto mb-6">
            Join 500+ enterprises and institutions running on OnePlatform360. Talk to our solution specialists today.
          </p>
          <div className="flex justify-center gap-3">
            <Link href="/demo" className="btn-primary text-xs sm:text-sm px-6 py-3">
              Book a Free Demo <ArrowRight size={14} />
            </Link>
            <Link href="/contact" className="px-6 py-3 rounded-xl bg-slate-100 text-slate-800 font-bold text-xs sm:text-sm hover:bg-slate-200 transition-colors">
              Contact Sales
            </Link>
          </div>
        </div>

      </div>
    </div>
  )
}
