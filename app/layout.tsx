import type { Metadata } from 'next'
import { Playfair_Display, Inter, Bungee_Shade } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { CartProvider } from '@/lib/cart-context'
import { CartSidebar } from '@/components/cart-sidebar'
import './globals.css'

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: '--font-serif',
  display: 'swap',
});

const inter = Inter({
  subsets: ["latin"],
  variable: '--font-sans',
  display: 'swap',
});

const bungeeShade = Bungee_Shade({
  subsets: ["latin"],
  weight: "400",
  variable: '--font-display',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://lou-ballons.vercel.app'),
  title: 'Lou Balloons | Custom Balloon Decor Utah County & Salt Lake City',
  description: 'Custom balloon decor for Utah County & Salt Lake City. From arches to garlands, Lou Balloons styles unforgettable celebrations with quick setup and pro-level service.',
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Lou Balloons | Custom Balloon Decor Utah County & Salt Lake City',
    description: 'Custom balloon decor for Utah County & Salt Lake City. From arches to garlands, Lou Balloons styles unforgettable celebrations with quick setup and pro-level service.',
    url: 'https://lou-ballons.vercel.app',
    siteName: 'Lou Balloons',
    type: 'website',
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Lou Balloons — Custom Balloon Decor Utah County & Salt Lake City',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Lou Balloons | Custom Balloon Decor Utah County & Salt Lake City',
    description: 'Custom balloon decor for Utah County & Salt Lake City. From arches to garlands, Lou Balloons styles unforgettable celebrations with quick setup and pro-level service.',
    images: ['/images/og-image.jpg'],
  },
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'Lou Balloons',
  url: 'https://lou-ballons.vercel.app',
  description: 'Custom balloon decor for Utah County & Salt Lake City. From arches to garlands, Lou Balloons styles unforgettable celebrations big and small with quick setup and pro-level service.',
  areaServed: ['Utah County', 'Salt Lake City'],
  serviceType: 'Balloon Decoration',
  priceRange: '$$',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable} ${bungeeShade.variable}`}>
      <body className="font-sans antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
        <CartProvider>
          {children}
          <CartSidebar />
        </CartProvider>
        <Analytics />
      </body>
    </html>
  )
}
