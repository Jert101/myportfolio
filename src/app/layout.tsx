import type { Metadata, Viewport } from 'next'
import { Inter, Poppins } from 'next/font/google'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
  weight: ['300', '400', '500', '600', '700'],
})

const poppins = Poppins({
  subsets: ['latin'],
  variable: '--font-poppins',
  display: 'swap',
  weight: ['400', '500', '600', '700'],
})

export const metadata: Metadata = {
  title: 'GHL Specialist | High-Converting Funnels & Automations',
  description: 'Helping businesses turn leads into booked calls with smart GoHighLevel systems and automation. Funnel building, CRM setup, and automation workflows.',
  keywords: ['GoHighLevel', 'GHL', 'funnel building', 'automation', 'CRM', 'lead generation', 'marketing automation'],
  authors: [{ name: 'GHL Specialist' }],
  openGraph: {
    title: 'GHL Specialist | High-Converting Funnels & Automations',
    description: 'Helping businesses turn leads into booked calls with smart GoHighLevel systems and automation.',
    type: 'website',
  },
}

export const viewport: Viewport = {
  themeColor: '#0B3D2E',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${poppins.variable}`}>
      <body className="min-h-screen bg-secondary text-accent">
        {children}
      </body>
    </html>
  )
}