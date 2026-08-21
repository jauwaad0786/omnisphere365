'use client'
import Link from 'next/link'
import Image from 'next/image'
import { SERVICES } from '../../lib/data'
import { ArrowRight, Sparkles } from 'lucide-react'

const SERVICE_IMAGES: Record<string, string> = {
  'school-erp': '/school-erp-showcase.jpg',
  'college-erp': '/school-erp-showcase.jpg',
  'hrms': '/hrms-showcase.jpg',
  'inventory': '/hero-showcase.jpg',
  'sales-erp': '/hero-presentation.jpg',
  'whatsapp-automation': '/whatsapp-showcase.jpg',
  'hospital-opd': '/hero-presentation.jpg',
  'website-development': '/ai-automation-showcase.jpg',
  'digital-transformation': '/hero-showcase.jpg',
  'custom-cloud-erp': '/hero-presentation.jpg',
  'payg-erp': '/school-erp-showcase.jpg',
  'ai-automation': '/ai-automation-showcase.jpg',
}

export default function ServicesPage() {
  return (
    <div className="pt-28 pb-24 bg-[#091526] min-h-screen text-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header (EXL Style) */}
        <div className="mb-14 max-w-3xl">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-10 h-1 bg-gradient-to-r from-amber-500 to-cyan-400 rounded-full" />
            <span className="text-xs font-bold uppercase tracking-widest text-cyan-300">
              Complete Enterprise Portfolio
            </span>
          </div>
          <h1 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl text-white leading-tight">
            Our <span className="gradient-text">Solutions &amp; Capabilities</span>
          </h1>
          <p className="text-slate-300 mt-4 text-sm sm:text-base leading-relaxed">
            Data, cloud, and artificial intelligence architectures purpose-built to streamline institutional operations, optimize workforce productivity, and accelerate growth.
          </p>
        </div>

        {/* Unified 12 Solutions Grid (EXL 4-Card Style with Clean High-Contrast Cards) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
          {SERVICES.map((s) => {
            const img = SERVICE_IMAGES[s.id] || '/school-erp-showcase.jpg'

            return (
              <div
                key={s.id}
                className="rounded-2xl overflow-hidden bg-white text-slate-900 border border-slate-200 shadow-xl hover:shadow-2xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  {/* Real Photo on Top */}
                  <div className="relative aspect-[16/10] overflow-hidden bg-slate-900">
                    <Image
                      src={img}
                      alt={s.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-108"
                    />
                    <div className="absolute top-3 left-3">
                      <span className="text-[10px] font-bold px-2.5 py-1 rounded-md bg-slate-950/85 backdrop-blur-md text-cyan-300 border border-cyan-500/30">
                        {s.category}
                      </span>
                    </div>
                  </div>

                  {/* Body Content */}
                  <div className="p-6">
                    <div className="text-[11px] font-bold uppercase tracking-wider text-orange-600 mb-1 font-mono">
                      {s.tagline}
                    </div>
                    <h3 className="font-display font-bold text-lg text-slate-900 mb-2.5 group-hover:text-blue-700 transition-colors leading-snug">
                      {s.title}
                    </h3>
                    <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-4">
                      {s.description}
                    </p>
                  </div>
                </div>

                {/* Bottom Learn More Link */}
                <div className="p-6 pt-0">
                  <Link
                    href={`/services/${s.id}`}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-900 group-hover:text-blue-600 transition-colors"
                  >
                    Learn more <ArrowRight size={14} className="text-orange-500 group-hover:translate-x-1.5 transition-transform" />
                  </Link>
                </div>
              </div>
            )
          })}
        </div>

      </div>
    </div>
  )
}
