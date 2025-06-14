import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { ValidLocale } from './i18n/settings'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Quick Util',
  description: 'A collection of useful web tools',
}

interface LayoutProps {
  children: React.ReactNode
  params: Promise<{
    lang: ValidLocale
  }>
}

export default function RootLayout({ children, params }: LayoutProps) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/Q.ico" />
      </head>
      <body className={inter.className}>
        {children}
      </body>
    </html>
  )
} 