import type { Metadata } from 'next'
import Header from '../components/Header'
import Footer from '../components/Footer'
import '../globals.css'

export const metadata: Metadata = {
  title: 'QuickUtil - Developer Tools',
  description: 'A collection of useful developer tools',
}

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode
  params: Promise<{ lang: string }>
}) {
  const { lang } = await params
  
  return (
    <html lang={lang} suppressHydrationWarning>
      <body className="min-h-screen" style={{ backgroundColor: '#f0f0f3', fontFamily: 'Outfit, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif' }}>
        <Header currentLang={lang} />
        <main>{children}</main>
        <Footer currentLang={lang} />
      </body>
    </html>
  )
} 