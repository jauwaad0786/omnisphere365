'use client'
import { useState } from 'react'
import { SERVICES } from '@/lib/data'
import { CheckCircle, CalendarDays } from 'lucide-react'

export default function DemoPage() {
  const [submitted, setSubmitted] = useState(false)
  const [form, setForm] = useState({
    name: '', company: '', email: '', phone: '', city: '', service: '', size: '', message: ''
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = (e: React.MouseEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <div className="pt-24 pb-20 min-h-screen flex items-center">
        <div className="max-w-lg mx-auto px-4 text-center">
          <div className="w-20 h-20 rounded-full bg-green-500/15 border border-green-500/30 flex items-center justify-center mx-auto mb-6">
            <CheckCircle size={36} className="text-green-400" />
          </div>
          <h2 className="font-display font-bold text-3xl text-white mb-3">Demo Booked! 🎉</h2>
          <p className="text-slate-400 text-base mb-2">
            Thank you, <span className="text-white font-medium">{form.name}</span>!
          </p>
          <p className="text-slate-400 text-sm mb-8">
            Our team will reach out to you at <span className="text-indigo-400">{form.email}</span> within 24 hours to schedule your personalized demo.
          </p>
          <div className="glass rounded-xl p-5 text-left space-y-3 mb-8">
            <div className="text-xs text-slate-500 uppercase tracking-wider font-medium mb-3">What happens next?</div>
            {['Our ERP consultant will call you within 24 hours', 'We will schedule a 30-min live demo at your preferred time', 'Free setup and onboarding included — no credit card needed'].map((step, i) => (
              <div key={i} className="flex items-start gap-3 text-sm text-slate-300">
                <div className="w-5 h-5 rounded-full bg-indigo-500/20 border border-indigo-500/40 flex items-center justify-center text-indigo-400 text-[10px] font-bold shrink-0 mt-0.5">{i+1}</div>
                {step}
              </div>
            ))}
          </div>
          <a href="https://wa.me/916207947958" className="btn-primary justify-center w-full text-sm">
            Chat on WhatsApp Now →
          </a>
        </div>
      </div>
    )
  }

  return (
    <div className="pt-24 pb-20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="grid lg:grid-cols-5 gap-12 items-start">

          {/* Left info */}
          <div className="lg:col-span-2 space-y-6">
            <div>
              <div className="badge mb-4 w-fit"><CalendarDays size={11} /> Book Free Demo</div>
              <h1 className="font-display font-bold text-3xl text-white mb-3">
                See OmniSphere 365 in Action
              </h1>
              <p className="text-slate-400 text-sm leading-relaxed">
                Book a 30-minute live demo with our ERP consultant. We&apos;ll walk you through the system tailored to your institution&apos;s needs.
              </p>
            </div>

            <div className="space-y-4">
              {[
                { icon: '🎯', title: 'Personalized Demo', desc: 'We configure the demo specifically for your school, hospital, or business type.' },
                { icon: '⚡', title: 'Free Setup', desc: 'If you sign up, onboarding and data migration are completely free.' },
                { icon: '🤝', title: 'No Pressure', desc: 'No obligation to buy. Our team is here to help, not to sell.' },
              ].map((item) => (
                <div key={item.title} className="flex gap-3">
                  <div className="text-xl shrink-0">{item.icon}</div>
                  <div>
                    <div className="text-white text-sm font-semibold">{item.title}</div>
                    <div className="text-slate-500 text-xs mt-0.5">{item.desc}</div>
                  </div>
                </div>
              ))}
            </div>

            <div className="glass rounded-xl p-4">
              <div className="text-xs text-slate-500 mb-2">Contact us directly</div>
              <div className="text-sm text-white font-medium">shaikhjauwaad@gmail.com</div>
              <div className="text-sm text-indigo-400">+91 62079 47958</div>
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-3">
            <div className="glass rounded-2xl p-7 space-y-5">
              <h2 className="font-display font-bold text-xl text-white">Request a Live Demo</h2>

              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs text-slate-400 mb-1.5">Full Name *</label>
                  <input name="name" value={form.name} onChange={handleChange} placeholder="Rahul Sharma" className="form-input" />
                </div>
                <div>
                  <label className="block text-xs text-slate-400 mb-1.5">School / Company Name *</label>
                  <input name="company" value={form.company} onChange={handleChange} placeholder="Delhi Public School" className="form-input" />
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs text-slate-400 mb-1.5">Email Address *</label>
                  <input name="email" type="email" value={form.email} onChange={handleChange} placeholder="admin@school.com" className="form-input" />
                </div>
                <div>
                  <label className="block text-xs text-slate-400 mb-1.5">Phone Number *</label>
                  <input name="phone" value={form.phone} onChange={handleChange} placeholder="+91 98765 43210" className="form-input" />
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs text-slate-400 mb-1.5">City</label>
                  <input name="city" value={form.city} onChange={handleChange} placeholder="Delhi" className="form-input" />
                </div>
                <div>
                  <label className="block text-xs text-slate-400 mb-1.5">Service Interested In</label>
                  <select name="service" value={form.service} onChange={handleChange} className="form-input">
                    <option value="">Select a service</option>
                    {SERVICES.map(s => <option key={s.id} value={s.id}>{s.shortTitle}</option>)}
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs text-slate-400 mb-1.5">Number of Students / Employees</label>
                <select name="size" value={form.size} onChange={handleChange} className="form-input">
                  <option value="">Select range</option>
                  <option>Less than 100</option>
                  <option>100 – 200</option>
                  <option>200 – 500</option>
                  <option>500 – 1000</option>
                  <option>1000+</option>
                </select>
              </div>

              <div>
                <label className="block text-xs text-slate-400 mb-1.5">Message (Optional)</label>
                <textarea name="message" value={form.message} onChange={handleChange}
                  placeholder="Tell us about your requirements..." rows={3} className="form-input resize-none" />
              </div>

              <button onClick={handleSubmit}
                className="btn-primary w-full justify-center text-base py-3">
                <CalendarDays size={16} /> Book Free Demo
              </button>

              <p className="text-xs text-slate-600 text-center">By submitting, you agree to our Terms. We never spam.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
