'use client'
import { useState } from 'react'
import { SERVICES } from '../../lib/data'
import { submitLead } from '../../lib/api'
import { CheckCircle, CalendarDays, Sparkles, Clock, Shield, Check, ArrowRight } from 'lucide-react'

export default function DemoPage() {
  const [submitted, setSubmitted] = useState(false)
  const [submitting, setSubmitting] = useState(false)
  const [error, setError] = useState('')
  const [form, setForm] = useState({
    name: '', company: '', email: '', phone: '', city: '', service: '', size: '', message: ''
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async (e: React.MouseEvent) => {
    e.preventDefault()
    if (!form.name || !form.company || !form.email || !form.phone) {
      setError('Please fill in your Name, Organisation, Email, and Phone Number.')
      return
    }
    setError('')
    setSubmitting(true)
    const res = await submitLead({ lead_type: 'DEMO', ...form })
    setSubmitting(false)
    if (res.success) {
      setSubmitted(true)
    } else {
      setError(res.error || 'Something went wrong. Please try again or connect via WhatsApp.')
    }
  }

  if (submitted) {
    return (
      <div className="pt-28 pb-20 min-h-screen flex items-center bg-[#091526]">
        <div className="max-w-lg mx-auto px-4 text-center">
          <div className="w-20 h-20 rounded-full bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center mx-auto mb-6">
            <CheckCircle size={36} className="text-emerald-400" />
          </div>
          <h2 className="font-display font-bold text-3xl text-white mb-3">Demo Session Requested! 🎉</h2>
          <p className="text-slate-300 text-base mb-2">
            Thank you, <span className="text-white font-medium">{form.name}</span>!
          </p>
          <p className="text-slate-300 text-sm mb-8">
            Our enterprise solution team will reach out at <span className="text-cyan-300 font-semibold">{form.email}</span> within 24 hours to conduct your personalized live walkthrough.
          </p>
          <div className="rounded-2xl p-6 bg-white text-slate-900 text-left space-y-3 mb-8 border border-slate-200 shadow-xl">
            <div className="text-xs text-orange-600 uppercase tracking-wider font-bold mb-3 font-mono">What happens next?</div>
            {[
              'Dedicated ERP consultant contacts you to understand exact workflows',
              'We prepare a customized live sandbox with your institution profile',
              'Completely free onboarding & setup consultation included'
            ].map((step, i) => (
              <div key={i} className="flex items-start gap-3 text-xs sm:text-sm text-slate-700 font-medium">
                <div className="w-5 h-5 rounded-full bg-blue-100 flex items-center justify-center text-blue-700 text-[10px] font-bold shrink-0 mt-0.5">{i+1}</div>
                {step}
              </div>
            ))}
          </div>
          <a href="/" className="btn-primary text-sm inline-flex">Return to Homepage</a>
        </div>
      </div>
    )
  }

  return (
    <div className="pt-28 pb-20 bg-[#091526] min-h-screen text-slate-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="text-center mb-14">
          <div className="badge mb-4">
            <Sparkles size={12} className="text-cyan-300" /> Live Walkthrough
          </div>
          <h1 className="font-display font-extrabold text-4xl sm:text-5xl text-white">
            Schedule a <span className="gradient-text">Personalized Demo</span>
          </h1>
          <p className="text-slate-300 mt-4 max-w-xl mx-auto text-sm sm:text-base">
            See how OnePlatform360 simplifies admissions, fees, payroll, and parent communication in real-time.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-10 items-start">

          {/* Left Info Column */}
          <div className="lg:col-span-5 space-y-6">
            <div className="rounded-3xl p-7 sm:p-8 bg-white text-slate-900 border border-slate-200 shadow-xl space-y-5">
              <h2 className="font-display font-bold text-2xl text-slate-900">What to Expect</h2>
              <div className="space-y-4">
                {[
                  { title: 'Interactive Live Walkthrough', desc: 'Real-time test run of student masters, fee reconciliation, and HRMS.' },
                  { title: 'Tailored to Your Workflow', desc: 'Demonstration customized to your institution scale and specific departments.' },
                  { title: 'Full ROI & Cost Assessment', desc: 'Transparent pricing breakdown with migration guidance from legacy tools.' },
                  { title: 'Q&A with Solution Architects', desc: 'Get technical and architectural questions answered by expert engineers.' },
                ].map((item) => (
                  <div key={item.title} className="flex gap-3 items-start">
                    <div className="w-5 h-5 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600 shrink-0 mt-0.5">
                      <Check size={13} />
                    </div>
                    <div>
                      <div className="text-slate-900 font-bold text-sm">{item.title}</div>
                      <div className="text-slate-600 text-xs mt-0.5 leading-relaxed">{item.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-2xl bg-white text-slate-900 border border-slate-200 p-5 shadow-lg flex items-center gap-4">
              <div className="w-10 h-10 rounded-xl bg-blue-50 border border-blue-200 flex items-center justify-center text-blue-600 shrink-0">
                <Shield size={20} />
              </div>
              <div>
                <div className="text-slate-900 text-xs font-bold">100% Free Consultation</div>
                <div className="text-slate-500 text-[11px] mt-0.5">No credit card or commitment required.</div>
              </div>
            </div>
          </div>

          {/* Right Form in Crisp White Container */}
          <div className="lg:col-span-7">
            <div className="rounded-3xl p-7 sm:p-9 bg-white text-slate-900 border border-slate-200 shadow-2xl space-y-4">
              <h2 className="font-display font-bold text-2xl text-slate-900">Request Institutional Access</h2>
              <p className="text-slate-500 text-xs">Fill out the details below to book your slot.</p>

              <div className="grid sm:grid-cols-2 gap-4 pt-2">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1.5">Full Name *</label>
                  <input name="name" value={form.name} onChange={handleChange} placeholder="Dr. Sameer Khan" className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-2.5 text-xs text-slate-900 placeholder:text-slate-400 outline-none focus:border-blue-500 focus:bg-white transition-all" />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1.5">Institution / Company *</label>
                  <input name="company" value={form.company} onChange={handleChange} placeholder="Delhi Public Academy" className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-2.5 text-xs text-slate-900 placeholder:text-slate-400 outline-none focus:border-blue-500 focus:bg-white transition-all" />
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1.5">Work Email *</label>
                  <input name="email" type="email" value={form.email} onChange={handleChange} placeholder="principal@dpa.edu.in" className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-2.5 text-xs text-slate-900 placeholder:text-slate-400 outline-none focus:border-blue-500 focus:bg-white transition-all" />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1.5">Phone Number *</label>
                  <input name="phone" value={form.phone} onChange={handleChange} placeholder="+91 98765 43210" className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-2.5 text-xs text-slate-900 placeholder:text-slate-400 outline-none focus:border-blue-500 focus:bg-white transition-all" />
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1.5">Primary Solution</label>
                  <select name="service" value={form.service} onChange={handleChange} className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-2.5 text-xs text-slate-900 outline-none focus:border-blue-500 focus:bg-white transition-all">
                    <option value="">Select a solution...</option>
                    {SERVICES.map((s) => (
                      <option key={s.id} value={s.title}>{s.title}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1.5">User / Student Scale</label>
                  <select name="size" value={form.size} onChange={handleChange} className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-2.5 text-xs text-slate-900 outline-none focus:border-blue-500 focus:bg-white transition-all">
                    <option value="">Select scale...</option>
                    <option>&lt; 200 Users</option>
                    <option>200 – 500 Users</option>
                    <option>500 – 2,000 Users</option>
                    <option>2,000+ Enterprise Scale</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1.5">City / Location</label>
                <input name="city" value={form.city} onChange={handleChange} placeholder="Delhi NCR" className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-2.5 text-xs text-slate-900 placeholder:text-slate-400 outline-none focus:border-blue-500 focus:bg-white transition-all" />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1.5">Notes / Custom Requirements</label>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Any specific modules or current ERP you want to migrate from..."
                  rows={3}
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl p-4 text-xs text-slate-900 placeholder:text-slate-400 outline-none focus:border-blue-500 focus:bg-white transition-all resize-none"
                />
              </div>

              {error && (
                <p className="text-xs text-rose-600 font-semibold text-center">{error}</p>
              )}

              <button
                onClick={handleSubmit}
                disabled={submitting}
                className="btn-primary w-full justify-center text-xs sm:text-sm py-3.5 disabled:opacity-60 shadow-lg shadow-blue-500/30"
              >
                {submitting ? 'Booking Slot...' : 'Confirm Demo Booking →'}
              </button>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}
