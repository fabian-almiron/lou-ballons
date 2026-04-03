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
  title: 'Lou Balloons | Custom Balloon Decor Utah County & Salt Lake City',
  description: 'Custom balloon decor for Utah County & Salt Lake City. From arches to garlands, Lou Balloons styles unforgettable celebrations big and small with quick setup and pro-level service.',
  generator: 'v0.app',
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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable} ${bungeeShade.variable}`}>
      <body className="font-sans antialiased">
        <CartProvider>
          {children}
          <CartSidebar />
        </CartProvider>
        <Analytics />
      </body>
    </html>
  )
}
