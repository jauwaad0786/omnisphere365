// lib/api.ts
// OmniSphere 365 website se ERP backend (edu-ERP) ko Demo Request / Contact
// Message bhejne ka helper. ERP backend ka URL Vercel env var
// NEXT_PUBLIC_ERP_API_URL se aata hai (Vercel dashboard -> Project ->
// Settings -> Environment Variables me set karo), fallback me abhi wahi
// Render backend URL hai jo edu-ERP ke apne app/__init__.py ke CORS list
// me already whitelisted hai.

const ERP_API_URL =
  process.env.NEXT_PUBLIC_ERP_API_URL || 'https://edu-erp-backend-xoas.onrender.com'

export type LeadPayload = {
  lead_type: 'DEMO' | 'CONTACT'
  name: string
  company?: string
  email: string
  phone?: string
  city?: string
  service?: string
  size?: string
  message?: string
}

export async function submitLead(payload: LeadPayload): Promise<{ success: boolean; error?: string }> {
  try {
    const res = await fetch(`${ERP_API_URL}/api/public/leads`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ source: 'omnisphere365', ...payload }),
    })

    if (!res.ok) {
      const data = await res.json().catch(() => ({}))
      return { success: false, error: data.error || 'Submission failed' }
    }

    return { success: true }
  } catch (err) {
    return { success: false, error: 'Network error — please try again' }
  }
}
