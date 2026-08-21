'use client'
import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { WHY_US } from '../../lib/data'
import { Sparkles } from 'lucide-react'

export default function FeaturesSection() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section className="section-pad section-alt relative overflow-hidden" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <div className="badge mb-4">
            <Sparkles size={12} className="text-blue-400" /> Why OnePlatform360
          </div>
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-white">
            Built for <span className="gradient-text">Enterprise. Priced for Everyone.</span>
          </h2>
          <p className="text-slate-400 mt-4 max-w-2xl mx-auto text-sm sm:text-base">
            Enterprise-grade infrastructure, AI-first architecture, and 24/7 dedicated support — tailored for institutions across India.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {WHY_US.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.06, ease: [0.16, 1, 0.3, 1] }}
              className="glass glass-hover rounded-2xl p-6 flex gap-4 group transition-all duration-300 cursor-pointer border border-blue-500/15"
            >
              <div className="feature-icon text-2xl shrink-0 group-hover:bg-blue-600/20 group-hover:border-blue-500/40 group-hover:scale-110 transition-all duration-300">
                {item.icon}
              </div>
              <div>
                <h3 className="font-semibold text-white text-sm sm:text-base font-display mb-1.5 group-hover:text-blue-300 transition-colors">
                  {item.title}
                </h3>
                <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
