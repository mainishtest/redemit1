import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Header } from '@/components/layout/header'
import { Footer } from '@/components/layout/footer'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

export const metadata: Metadata = {
  title: {
    default: 'Redemit One — Growth Marketing That Scales Revenue',
    template: '%s | Redemit One',
  },
  description:
    'We build and scale paid acquisition systems for brands ready to grow. Media buying, offer creation, and funnel strategy — engineered for ROI.',
  metadataBase: new URL('https://redemit1.com'),
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: '48x48' },
      { url: '/favicon.svg', type: 'image/svg+xml' },
    ],
    apple: '/apple-touch-icon.png',
  },
  openGraph: {
    title: 'Redemit One — Growth Marketing That Scales Revenue',
    description:
      'We build and scale paid acquisition systems for brands ready to grow. Media buying, offer creation, and funnel strategy — engineered for ROI.',
    url: 'https://redemit1.com',
    siteName: 'Redemit One',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Redemit One — Growth Marketing That Scales Revenue',
    description:
      'We build and scale paid acquisition systems for brands ready to grow.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="font-sans antialiased bg-surface-50 text-txt-primary">
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
