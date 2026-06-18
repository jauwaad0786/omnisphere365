import type { Metadata } from 'next'
import './globals.css'
import Navbar from '../components/layout/Navbar'
import Footer from '../components/layout/Footer'
import WhatsAppBtn from '../components/ui/WhatsAppBtn'

export const metadata: Metadata = {
  title: 'OmniSphere 365 — The Business Operating System for Modern Organizations',
  description: "OmniSphere 365 unifies ERP, CRM, HRMS, AI & Automation on one cloud platform — for schools, hospitals, and growing enterprises across India and the Gulf.",
  keywords: 'Enterprise Cloud ERP, School ERP India, HRMS, CRM, Hospital ERP, AI Business Automation, Digital Transformation, ERP Delhi NCR',
  openGraph: {
    title: 'OmniSphere 365 — One Platform. Unlimited Business Solutions.',
    description: 'ERP, CRM, HRMS, AI & Automation — unified on one enterprise cloud platform.',
    type: 'website',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-white text-slate-700 font-sans">
        <Navbar />
        <main>{children}</main>
        <Footer />
        <WhatsAppBtn />
      </body>
    </html>
  )
}
