'use client'
import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { WHY_US } from '../../lib/data'

export default function FeaturesSection() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section className="section-pad section-alt" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <div className="badge mb-4">Why OnePlatform360</div>
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-slate-900">
            Built for <span className="gradient-text">Enterprise. Priced for Everyone.</span>
          </h2>
          <p className="text-slate-500 mt-4 max-w-2xl mx-auto">
            Enterprise-grade infrastructure, AI-first architecture, and 24/7 support — at a fraction of the cost of global ERP giants.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {WHY_US.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.06, ease: [0.16, 1, 0.3, 1] }}
              className="glass glass-hover rounded-2xl p-6 flex gap-4 group transition-all duration-300 cursor-pointer"
            >
              <div className="feature-icon text-2xl shrink-0 group-hover:bg-brand-100 group-hover:border-brand-200 group-hover:scale-110 transition-all duration-300">
                {item.icon}
              </div>
              <div>
                <h3 className="font-semibold text-slate-900 text-sm font-display mb-1.5 group-hover:text-brand-700 transition-colors">{item.title}</h3>
                <p className="text-slate-500 text-xs leading-relaxed">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
