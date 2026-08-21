'use client'
import { useState } from 'react'
import { SERVICES } from '../../lib/data'
import { submitLead } from '../../lib/api'
import { CheckCircle, CalendarDays, Sparkles, Clock, Shield, Check } from 'lucide-react'

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
      <div className="pt-28 pb-20 min-h-screen flex items-center bg-[#070c1b]">
        <div className="max-w-lg mx-auto px-4 text-center">
          <div className="w-20 h-20 rounded-full bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center mx-auto mb-6">
            <CheckCircle size={36} className="text-emerald-400" />
          </div>
          <h2 className="font-display font-bold text-3xl text-white mb-3">Demo Session Requested! 🎉</h2>
          <p className="text-slate-300 text-base mb-2">
            Thank you, <span className="text-white font-medium">{form.name}</span>!
          </p>
          <p className="text-slate-400 text-sm mb-8">
            Our enterprise solution team will reach out at <span className="text-blue-400">{form.email}</span> within 24 hours to conduct your personalized live walkthrough.
          </p>
          <div className="glass rounded-xl p-5 text-left space-y-3 mb-8 border border-blue-500/20">
            <div className="text-xs text-blue-300 uppercase tracking-wider font-semibold mb-3">What happens next?</div>
            {[
              'Dedicated ERP consultant contacts you to understand exact workflows',
              'We prepare a customized live sandbox with your institution profile',
              'Completely free onboarding & setup consultation included'
            ].map((step, i) => (
              <div key={i} className="flex items-start gap-3 text-sm text-slate-300">
                <div className="w-5 h-5 rounded-full bg-blue-500/20 border border-blue-400/40 flex items-center justify-center text-blue-400 text-[10px] font-bold shrink-0 mt-0.5">{i+1}</div>
                {step}
              </div>
            ))}
          </div>
          <a href="https://wa.me/916207947958" className="btn-primary justify-center w-full text-sm py-3.5">
            Chat with us on WhatsApp Now →
          </a>
        </div>
      </div>
    )
  }

  return (
    <div className="pt-28 pb-20 bg-[#070c1b] min-h-screen">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="grid lg:grid-cols-5 gap-12 items-start">

          {/* Left info */}
          <div className="lg:col-span-2 space-y-6">
            <div>
              <div className="badge mb-4 w-fit">
                <Sparkles size={11} className="text-blue-400" /> Free Live Session
              </div>
              <h1 className="font-display font-bold text-3xl sm:text-4xl text-white mb-3">
                Experience OnePlatform360 in Action
              </h1>
              <p className="text-slate-400 text-sm leading-relaxed">
                Book a 30-minute interactive demo tailored to your school, hospital, or enterprise operations.
              </p>
            </div>

            <div className="space-y-4">
              {[
                { icon: '🎯', title: 'Tailored Sandbox', desc: 'Customized preview showing modules relevant to your organization.' },
                { icon: '⚡', title: 'Free Onboarding', desc: 'Complimentary data migration, staff training, and initial configuration.' },
                { icon: '🤝', title: 'Direct Architecture Advice', desc: 'Consult directly with experienced cloud engineers and ERP experts.' },
              ].map((item) => (
                <div key={item.title} className="flex gap-3.5 p-3 rounded-xl bg-[#0c1527] border border-blue-500/15">
                  <div className="text-xl shrink-0">{item.icon}</div>
                  <div>
                    <div className="text-white text-sm font-semibold">{item.title}</div>
                    <div className="text-slate-400 text-xs mt-0.5">{item.desc}</div>
                  </div>
                </div>
              ))}
            </div>

            <div className="glass rounded-xl p-4 border border-blue-500/20">
              <div className="text-xs text-slate-400 mb-1">Direct Helpdesk</div>
              <div className="text-sm text-white font-medium">OnePlatform360@gmail.com</div>
              <div className="text-sm text-cyan-400 font-semibold mt-0.5">+91 62079 47958</div>
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-3">
            <div className="glass rounded-2xl p-7 sm:p-8 space-y-4 border border-blue-500/25">
              <h2 className="font-display font-bold text-xl text-white">Schedule Free Walkthrough</h2>

              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs text-slate-400 mb-1.5">Full Name *</label>
                  <input name="name" value={form.name} onChange={handleChange} placeholder="Rahul Sharma" className="form-input" />
                </div>
                <div>
                  <label className="block text-xs text-slate-400 mb-1.5">Organisation / School *</label>
                  <input name="company" value={form.company} onChange={handleChange} placeholder="Delhi Public Academy" className="form-input" />
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs text-slate-400 mb-1.5">Email Address *</label>
                  <input name="email" type="email" value={form.email} onChange={handleChange} placeholder="admin@dpa.edu.in" className="form-input" />
                </div>
                <div>
                  <label className="block text-xs text-slate-400 mb-1.5">Phone Number *</label>
                  <input name="phone" value={form.phone} onChange={handleChange} placeholder="+91 98765 43210" className="form-input" />
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs text-slate-400 mb-1.5">City</label>
                  <input name="city" value={form.city} onChange={handleChange} placeholder="Delhi NCR" className="form-input" />
                </div>
                <div>
                  <label className="block text-xs text-slate-400 mb-1.5">Primary Interest</label>
                  <select name="service" value={form.service} onChange={handleChange} className="form-input">
                    <option value="">Select a solution...</option>
                    {SERVICES.map(s => <option key={s.id} value={s.id}>{s.shortTitle}</option>)}
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs text-slate-400 mb-1.5">Student / Staff Volume</label>
                <select name="size" value={form.size} onChange={handleChange} className="form-input">
                  <option value="">Select approximate size...</option>
                  <option>Under 200 members</option>
                  <option>200 – 500 members</option>
                  <option>500 – 1,500 members</option>
                  <option>1,500 – 5,000 members</option>
                  <option>5,000+ Enterprise</option>
                </select>
              </div>

              <div>
                <label className="block text-xs text-slate-400 mb-1.5">Specific Needs (Optional)</label>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Mention current ERP challenges or custom feature requirements..."
                  rows={3}
                  className="form-input resize-none"
                />
              </div>

              {error && (
                <p className="text-xs text-rose-400 text-center">{error}</p>
              )}

              <button
                onClick={handleSubmit}
                disabled={submitting}
                className="btn-primary w-full justify-center text-sm sm:text-base py-3.5 disabled:opacity-60 shadow-lg shadow-blue-500/30"
              >
                <CalendarDays size={16} /> {submitting ? 'Scheduling Session...' : 'Confirm Live Demo Booking'}
              </button>

              <p className="text-[11px] text-slate-400 text-center">
                We respect your privacy. No promotional spam ever.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
