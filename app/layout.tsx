import type { Metadata } from 'next'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: {
    default: 'Pavitra Securities & Services | Redefining Financial Services',
    template: '%s | Pavitra Securities & Services',
  },
  description:
    'Pavitra Securities and Services Pvt. Ltd. — Your trusted partner for Mutual Funds, SIPs, Fixed Deposits, Stock Broking, and Tax Planning since 1995.',
  keywords: [
    'mutual funds', 'SIP', 'fixed deposits', 'stock broking', 'tax planning',
    'ELSS', 'financial services', 'investment', 'Pavitra Securities', 'PGSL',
  ],
  metadataBase: new URL('https://pgsl.in'),
  openGraph: {
    title: 'Pavitra Securities & Services | Redefining Financial Services',
    description: 'Trusted investment guidance in Mutual Funds, SIPs, FDs, and Stock Broking since 1995.',
    url: 'https://pgsl.in',
    siteName: 'Pavitra Securities & Services',
    locale: 'en_IN',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col bg-white">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
