'use client'

import Link from 'next/link'
import LanguageSelector from './LanguageSelector'
import QIcon from '../../public/Q.svg'

interface HeaderProps {
  currentLang: string;
  dict: any;
}

export default function Header({ currentLang, dict }: HeaderProps) {
  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-xl border-b border-gray-200/50 shadow-lg shadow-gray-900/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex justify-between items-center h-20">
          {/* 로고 */}
          <Link href="/" className="flex items-center group">
            <QIcon className="w-8 h-8"/>
            <div className="flex flex-col">
              <span className="text-2xl font-black bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">uickUtil</span>
            </div>
          </Link>

          {/* 중앙 홍보 문구 */}
          <div className="hidden md:flex items-center space-x-2 bg-gradient-to-r from-blue-50 to-purple-50 px-4 py-2 rounded-full
          ">
            <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full animate-pulse"></div>
            <span className="text-sm font-semibold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              {dict.header.slogan}
            </span>
            <div className="w-2 h-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full animate-pulse"></div>
          </div>

          {/* 언어 선택기 */}
          <div className="flex items-center space-x-4">
            <LanguageSelector currentLang={currentLang} />
          </div>
        </div>
      </div>
    </header>
  )
} 