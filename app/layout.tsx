import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Observa - Shopify Web Vitals & Performance Monitoring',
  description: 'Monitor your Shopify store\'s web vitals, track conversions, and get instant alerts via email, WhatsApp, and Slack when performance drops.',
  keywords: 'Shopify, web vitals, performance monitoring, conversion tracking, alerts, ecommerce analytics',
  authors: [{ name: 'Observa Team' }],
  openGraph: {
    title: 'Observa - Shopify Web Vitals & Performance Monitoring',
    description: 'Monitor your Shopify store\'s web vitals, track conversions, and get instant alerts.',
    url: 'https://observa.app',
    siteName: 'Observa',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Observa - Shopify Web Vitals & Performance Monitoring',
    description: 'Monitor your Shopify store\'s web vitals, track conversions, and get instant alerts.',
    images: ['/og-image.png'],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
