import { TESTIMONIALS } from '../../lib/data'

export default function TestimonialsSection() {
  return (
    <section className="section-pad">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <div className="badge mb-4">Customer Stories</div>
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-white">
            Trusted by <span className="gradient-text">500+ Institutions</span>
          </h2>
          <p className="text-slate-400 mt-4">See what our customers say about OmniSphere 365.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {TESTIMONIALS.map((t) => (
            <div key={t.name} className="testimonial-card group hover:border-indigo-500/30 transition-all duration-300">
              {/* Stars */}
              <div className="flex gap-0.5 mb-4">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <svg key={i} width="14" height="14" viewBox="0 0 24 24" fill="#fbbf24"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
                ))}
              </div>

              <p className="text-slate-300 text-sm leading-relaxed mb-5">&ldquo;{t.text}&rdquo;</p>

              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-gradient-to-br from-indigo-500 to-sky-500 flex items-center justify-center text-white text-xs font-bold shrink-0">
                  {t.avatar}
                </div>
                <div>
                  <div className="text-white text-sm font-semibold">{t.name}</div>
                  <div className="text-slate-500 text-xs">{t.role}, {t.org}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Logos row */}
        <div className="mt-14 border-t border-[#1e1e3a] pt-10">
          <p className="text-center text-xs text-slate-600 uppercase tracking-widest mb-8 font-medium">Trusted by institutions across India</p>
          <div className="flex flex-wrap justify-center gap-6 opacity-40">
            {['Delhi Public Academy', 'Modern School Noida', 'EduTech Solutions', 'City Hospital', 'TechCorp India', 'LearnBase'].map((org) => (
              <div key={org} className="px-5 py-2.5 rounded-lg border border-[#1e1e3a] text-slate-400 text-xs font-medium">{org}</div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
