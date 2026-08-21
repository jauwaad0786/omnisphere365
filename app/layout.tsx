import type { Metadata } from 'next'
import './globals.css'
import Navbar from '../components/layout/Navbar'
import Footer from '../components/layout/Footer'
import WhatsAppBtn from '../components/ui/WhatsAppBtn'

export const metadata: Metadata = {
  metadataBase: new URL('https://www.oneplatform360.com'),
  title: 'OnePlatform360 — One Platform. Unlimited Possibilities.',
  description: "OnePlatform360 unifies ERP, CRM, HRMS, AI & Automation on one cloud platform — for schools, hospitals, and growing enterprises across India and the Gulf.",
  keywords: 'Enterprise Cloud ERP, School ERP India, HRMS, CRM, Hospital ERP, AI Business Automation, Digital Transformation, ERP Delhi NCR',
  icons: {
    icon: '/favicon.ico',
  },
  openGraph: {
    title: 'OnePlatform360 — One Platform. Unlimited Possibilities.',
    description: 'ERP, CRM, HRMS, AI & Automation — unified on one enterprise cloud platform.',
    type: 'website',
    images: ['/og-image.png'],
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="dark">
      <body className="bg-[#070c1b] text-slate-200 font-sans min-h-screen selection:bg-brand-500/30 selection:text-white antialiased">
        <Navbar />
        <main>{children}</main>
        <Footer />
        <WhatsAppBtn />
      </body>
    </html>
  )
}
