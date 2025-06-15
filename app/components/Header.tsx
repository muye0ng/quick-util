'use client'

import Link from 'next/link'
import QIcon from '../../public/Q.svg'
import { useRouter } from 'next/navigation'

interface HeaderProps {
  currentLocale: string;
  onLocaleChange: (locale: string) => void;
  dict: {
    description: string;
    tools: {
      title: string;
      subtitle: string;
      [key: string]: any;
    };
    categories: {
      [key: string]: any;
    };
  };
}

export default function Header({ currentLocale, onLocaleChange, dict }: HeaderProps) {
  const router = useRouter()

  const toggleLanguage = () => {
    const newLang = currentLocale === 'ko' ? 'en' : 'ko'
    onLocaleChange(newLang)
  }

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
          <div className="hidden md:flex items-center space-x-2 bg-gradient-to-r from-blue-50 to-purple-50 px-4 py-2 rounded-full">
            <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full animate-pulse"></div>
            <span className="text-sm font-semibold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              {currentLocale === 'ko' ? '당신을 위한 필수 유틸리티 도구들' : 'Essential utility tools for you'}
            </span>
            <div className="w-2 h-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full animate-pulse"></div>
          </div>

          {/* 언어 선택기 */}
          <button
            onClick={toggleLanguage}
            className="flex items-center space-x-2 px-4 py-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors focus:outline-none"
          >
            <span className="text-sm font-medium text-gray-700">
              {currentLocale === 'ko' ? 'ENG' : 'KOR'}
            </span>
          </button>
        </div>
      </div>
    </header>
  )
} 