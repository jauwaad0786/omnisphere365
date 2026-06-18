'use client'
import { useState } from 'react'
import { Mail, Phone, MapPin, CheckCircle } from 'lucide-react'

export default function ContactPage() {
  const [sent, setSent] = useState(false)
  const [form, setForm] = useState({ name: '', email: '', phone: '', service: '', message: '' })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  if (sent) {
    return (
      <div className="pt-24 pb-20 min-h-screen flex items-center bg-white">
        <div className="max-w-md mx-auto px-4 text-center">
          <div className="w-16 h-16 rounded-full bg-success-50 border border-success-500/20 flex items-center justify-center mx-auto mb-5">
            <CheckCircle size={28} className="text-success-600" />
          </div>
          <h2 className="font-display font-bold text-2xl text-slate-900 mb-2">Message Sent!</h2>
          <p className="text-slate-500 text-sm">Our team will get back to you within 24 hours. Or reach us directly on WhatsApp for faster response.</p>
          <a href="https://wa.me/916207947958" className="btn-primary mt-5 text-sm inline-flex">Chat on WhatsApp →</a>
        </div>
      </div>
    )
  }

  return (
    <div className="pt-28 pb-20 bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="text-center mb-12">
          <div className="badge mb-4">Get in Touch</div>
          <h1 className="font-display font-bold text-4xl text-slate-900">
            Let&apos;s <span className="gradient-text">Talk Business</span>
          </h1>
          <p className="text-slate-500 mt-3 max-w-xl mx-auto text-sm">
            Have questions about our ERP solutions? Our team is here to help you find the right fit.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-10 items-start">

          {/* Contact info */}
          <div className="lg:col-span-2 space-y-5">
            {[
              { icon: Mail, label: 'Email Us', val: 'shaikhjauwaad@gmail.com', href: 'mailto:shaikhjauwaad@gmail.com', color: 'text-brand-600' },
              { icon: Phone, label: 'Call Us', val: '+91 62079 47958', href: 'tel:+916207947958', color: 'text-accent-600' },
              { icon: MapPin, label: 'Office', val: 'Delhi NCR, India', href: '#', color: 'text-success-600' },
            ].map((c) => (
              <a key={c.label} href={c.href} className="flex items-center gap-4 glass glass-hover rounded-xl p-5 group">
                <div className="feature-icon group-hover:bg-brand-100 transition-colors">
                  <c.icon size={20} className={c.color} />
                </div>
                <div>
                  <div className="text-slate-500 text-xs">{c.label}</div>
                  <div className="text-slate-900 text-sm font-medium mt-0.5">{c.val}</div>
                </div>
              </a>
            ))}

            {/* WhatsApp */}
            <a href="https://wa.me/916207947958?text=Hi%2C%20I%27d%20like%20to%20know%20more%20about%20OmniSphere%20365."
              target="_blank" rel="noopener noreferrer"
              className="flex items-center gap-4 rounded-xl p-5 bg-[#25d366]/10 border border-[#25d366]/25 group hover:bg-[#25d366]/15 transition-all">
              <div className="w-12 h-12 rounded-xl bg-[#25d366]/15 flex items-center justify-center shrink-0">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="#25d366">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
              </div>
              <div>
                <div className="text-[#1ba956] text-sm font-semibold">Chat on WhatsApp</div>
                <div className="text-slate-500 text-xs mt-0.5">Fastest response — usually within minutes</div>
              </div>
            </a>
          </div>

          {/* Form */}
          <div className="lg:col-span-3">
            <div className="glass rounded-2xl p-7 space-y-4">
              <h2 className="font-display font-bold text-lg text-slate-900">Send a Message</h2>

              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs text-slate-500 mb-1.5">Full Name</label>
                  <input name="name" value={form.name} onChange={handleChange} placeholder="Your name" className="form-input" />
                </div>
                <div>
                  <label className="block text-xs text-slate-500 mb-1.5">Email</label>
                  <input name="email" type="email" value={form.email} onChange={handleChange} placeholder="you@example.com" className="form-input" />
                </div>
              </div>

              <div>
                <label className="block text-xs text-slate-500 mb-1.5">Phone</label>
                <input name="phone" value={form.phone} onChange={handleChange} placeholder="+91 98765 43210" className="form-input" />
              </div>

              <div>
                <label className="block text-xs text-slate-500 mb-1.5">Interested In</label>
                <select name="service" value={form.service} onChange={handleChange} className="form-input">
                  <option value="">Select a service...</option>
                  <option>School ERP</option>
                  <option>HRMS</option>
                  <option>Hospital OPD</option>
                  <option>Sales ERP</option>
                  <option>Custom ERP</option>
                  <option>AI Automation</option>
                  <option>Other</option>
                </select>
              </div>

              <div>
                <label className="block text-xs text-slate-500 mb-1.5">Message</label>
                <textarea name="message" value={form.message} onChange={handleChange}
                  placeholder="Tell us about your requirements..." rows={4} className="form-input resize-none" />
              </div>

              <button onClick={() => setSent(true)} className="btn-primary w-full justify-center text-sm py-3">
                Send Message →
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
