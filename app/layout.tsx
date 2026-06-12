import type { Metadata } from 'next'
import './globals.css'
import Navbar from '../components/layout/Navbar'
import Footer from '../components/layout/Footer'
import WhatsAppBtn from '../components/ui/WhatsAppBtn'

export const metadata: Metadata = {
  title: 'OmniSphere 365 — Enterprise Cloud ERP & AI Automation Platform',
  description: "Transform your institution with OmniSphere 365 — India's most advanced School ERP, HRMS, Sales ERP, Hospital OPD, and AI Business Automation platform.",
  keywords: 'School ERP India, Cloud ERP, HRMS, Digital Transformation, WhatsApp Automation, Hospital OPD, AI Business Automation, ERP Delhi',
  openGraph: {
    title: 'OmniSphere 365 — Future-Ready Digital Transformation',
    description: 'Enterprise-grade ERP & AI automation for schools, hospitals, and businesses.',
    type: 'website',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="dark">
      <body className="bg-surface text-slate-200 font-sans">
        <Navbar />
        <main>{children}</main>
        <Footer />
        <WhatsAppBtn />
      </body>
    </html>
  )
}
