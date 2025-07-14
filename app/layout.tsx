import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { cookies } from 'next/headers'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Quick Util',
  description: 'A collection of useful web tools',
}

interface LayoutProps {
  children: React.ReactNode
}

export default async function RootLayout({ children }: LayoutProps) {
  const cookieStore = await cookies()
  const locale = cookieStore.get('NEXT_LOCALE')?.value || 'en'
  
  return (
    <html lang={locale}>
      <body className={inter.className}>
        {children}
        <script src="https://app.answerhq.co/widget.js" data-company-name="testtest" async></script>
      </body>
    </html>
  )
} 