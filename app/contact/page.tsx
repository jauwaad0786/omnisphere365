'use client'
import { useState } from 'react'
import { Mail, Phone, MapPin, CheckCircle, Sparkles, Send } from 'lucide-react'
import { submitLead } from '../../lib/api'

export default function ContactPage() {
  const [sent, setSent] = useState(false)
  const [sending, setSending] = useState(false)
  const [error, setError] = useState('')
  const [form, setForm] = useState({ name: '', email: '', phone: '', service: '', message: '' })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async () => {
    if (!form.name || !form.email || !form.message) {
      setError('Please provide your Name, Email, and Requirements.')
      return
    }
    setError('')
    setSending(true)
    const res = await submitLead({ lead_type: 'CONTACT', ...form })
    setSending(false)
    if (res.success) {
      setSent(true)
    } else {
      setError(res.error || 'Something went wrong. Please try again or reach out on WhatsApp.')
    }
  }

  if (sent) {
    return (
      <div className="pt-28 pb-20 min-h-screen flex items-center bg-[#070c1b]">
        <div className="max-w-md mx-auto px-4 text-center">
          <div className="w-16 h-16 rounded-full bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center mx-auto mb-5">
            <CheckCircle size={32} className="text-emerald-400" />
          </div>
          <h2 className="font-display font-bold text-2xl text-white mb-2">Message Dispatched!</h2>
          <p className="text-slate-300 text-sm">Our enterprise advisory team will respond within 24 hours. Or connect directly via WhatsApp for instant assistance.</p>
          <a href="https://wa.me/916207947958" className="btn-primary mt-6 text-sm inline-flex">Chat on WhatsApp →</a>
        </div>
      </div>
    )
  }

  return (
    <div className="pt-28 pb-20 bg-[#070c1b] min-h-screen">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="text-center mb-14">
          <div className="badge mb-4">
            <Sparkles size={12} className="text-blue-400" /> Get in Touch
          </div>
          <h1 className="font-display font-bold text-4xl sm:text-5xl text-white">
            Let&apos;s <span className="gradient-text">Talk Enterprise</span>
          </h1>
          <p className="text-slate-400 mt-3 max-w-xl mx-auto text-sm sm:text-base">
            Have questions about custom ERP modules, migration, or pricing? Our architects are ready to assist.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-10 items-start">

          {/* Contact info */}
          <div className="lg:col-span-2 space-y-5">
            {[
              { icon: Mail, label: 'Official Email', val: 'OnePlatform360@gmail.com', href: 'mailto:OnePlatform360@gmail.com', color: 'text-cyan-400' },
              { icon: Phone, label: 'Enterprise Line', val: '+91 62079 47958', href: 'tel:+916207947958', color: 'text-blue-400' },
              { icon: MapPin, label: 'Corporate Office', val: 'Delhi NCR, India', href: '#', color: 'text-purple-400' },
            ].map((c) => (
              <a key={c.label} href={c.href} className="flex items-center gap-4 glass glass-hover rounded-xl p-5 group border border-blue-500/20">
                <div className="feature-icon group-hover:bg-blue-600/20 transition-colors">
                  <c.icon size={20} className={c.color} />
                </div>
                <div>
                  <div className="text-slate-400 text-xs">{c.label}</div>
                  <div className="text-white text-sm font-semibold mt-0.5 group-hover:text-blue-300 transition-colors">{c.val}</div>
                </div>
              </a>
            ))}

            {/* WhatsApp */}
            <a
              href="https://wa.me/916207947958?text=Hi%2C%20I%27d%20like%20to%20know%20more%20about%20OnePlatform360."
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 rounded-xl p-5 bg-[#25d366]/10 border border-[#25d366]/30 group hover:bg-[#25d366]/20 transition-all"
            >
              <div className="w-12 h-12 rounded-xl bg-[#25d366]/20 flex items-center justify-center shrink-0">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="#25d366">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
              </div>
              <div>
                <div className="text-[#4ade80] text-sm font-semibold">Direct WhatsApp Support</div>
                <div className="text-slate-400 text-xs mt-0.5">Average response time: &lt; 5 minutes</div>
              </div>
            </a>
          </div>

          {/* Form */}
          <div className="lg:col-span-3">
            <div className="glass rounded-2xl p-7 sm:p-8 space-y-4 border border-blue-500/20">
              <h2 className="font-display font-bold text-xl text-white">Send Us a Direct Note</h2>

              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs text-slate-400 mb-1.5">Your Name *</label>
                  <input name="name" value={form.name} onChange={handleChange} placeholder="Rahul Sharma" className="form-input" />
                </div>
                <div>
                  <label className="block text-xs text-slate-400 mb-1.5">Official Email *</label>
                  <input name="email" type="email" value={form.email} onChange={handleChange} placeholder="rahul@institution.edu" className="form-input" />
                </div>
              </div>

              <div>
                <label className="block text-xs text-slate-400 mb-1.5">Contact Number *</label>
                <input name="phone" value={form.phone} onChange={handleChange} placeholder="+91 98765 43210" className="form-input" />
              </div>

              <div>
                <label className="block text-xs text-slate-400 mb-1.5">Primary Requirement</label>
                <select name="service" value={form.service} onChange={handleChange} className="form-input">
                  <option value="">Select a solution...</option>
                  <option>School & College ERP</option>
                  <option>Smart HRMS & Payroll</option>
                  <option>Hospital OPD & Clinic</option>
                  <option>Sales CRM & Billing</option>
                  <option>AI Automation & Workflows</option>
                  <option>WhatsApp Automation</option>
                  <option>Custom Cloud ERP</option>
                </select>
              </div>

              <div>
                <label className="block text-xs text-slate-400 mb-1.5">Project Scope / Message *</label>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Share approximate user count, modules required or current challenges..."
                  rows={4}
                  className="form-input resize-none"
                />
              </div>

              {error && (
                <p className="text-xs text-rose-400 text-center">{error}</p>
              )}

              <button
                onClick={handleSubmit}
                disabled={sending}
                className="btn-primary w-full justify-center text-sm py-3.5 disabled:opacity-60 shadow-lg shadow-blue-500/30"
              >
                {sending ? 'Sending Note...' : 'Send Message →'}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
