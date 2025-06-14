import type { Metadata } from 'next'
import Header from '../components/Header'
import Footer from '../components/Footer'
import '../globals.css'
import { getDictionary } from '../i18n/utils'
import { ValidLocale } from '../i18n/settings'

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
  const dict = await getDictionary(lang as ValidLocale)
  
  return (
    <html lang={lang}>
      <body className="antialiased">
        <div className="min-h-screen" style={{ backgroundColor: '#f0f0f3', fontFamily: 'Outfit, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, sans-serif' }}>
          <Header currentLang={lang} dict={dict} />
          <main>{children}</main>
          <Footer currentLang={lang} dict={dict} />
        </div>
      </body>
    </html>
  )
} 