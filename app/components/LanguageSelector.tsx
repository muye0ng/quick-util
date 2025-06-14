'use client'

import { useState, useRef, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { ChevronDownIcon } from '@heroicons/react/24/outline'

const languages = [
  { code: 'ko', name: '한국어', flag: '🇰🇷' },
  { code: 'en', name: 'English', flag: '🇺🇸' },
  { code: 'fr', name: 'Français', flag: '🇫🇷' },
  { code: 'de', name: 'Deutsch', flag: '🇩🇪' },
  { code: 'id', name: 'Bahasa Indonesia', flag: '🇮🇩' },
  { code: 'ja', name: '日本語', flag: '🇯🇵' },
  { code: 'es', name: 'Español', flag: '🇪🇸' },
  { code: 'hi', name: 'हिन्दी', flag: '🇮🇳' },
  { code: 'zh', name: '中文', flag: '🇨🇳' },
  { code: 'vi', name: 'Tiếng Việt', flag: '🇻🇳' },
] as const

export default function LanguageSelector({ currentLang }: { currentLang: string }) {
  const [isOpen, setIsOpen] = useState(false)
  const [mounted, setMounted] = useState(false)
  const router = useRouter()
  const dropdownRef = useRef<HTMLDivElement>(null)

  const currentLanguage = languages.find(lang => lang.code === currentLang) || languages[0]

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  const handleLanguageChange = (langCode: string) => {
    if (!mounted) return
    
    const currentPath = window.location.pathname
    const newPath = currentPath.replace(/^\/[^/]+/, `/${langCode}`)
    router.push(newPath)
    setIsOpen(false)
  }

  if (!mounted) {
    return (
      <div className="w-32 h-10 bg-[var(--surface)] border border-[var(--border)] rounded-xl animate-pulse" />
    )
  }

  return (
    <div className="relative inline-flex flex-shrink-0 whitespace-nowrap w-max flex-nowrap" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="px-4 py-2 rounded-xl hover:bg-blue-50 hover:shadow-lg transition-all duration-200 w-max outline-none ring-0 focus:outline-none focus:ring-0 active:outline-none active:ring-0"
      >
        <span className="flex items-center">
          <span className="text-2xl leading-none align-middle">{currentLanguage.flag}</span>
          <ChevronDownIcon className={`w-4 h-4 ml-2 text-[var(--text-secondary)] transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} />
        </span>
      </button>

      {isOpen && (
        <div className="absolute top-full left-0 mt-2 w-48 rounded-xl shadow-lg z-50 py-2 bg-white">
          {languages.map((language) => (
            <button
              key={language.code}
              onClick={() => handleLanguageChange(language.code)}
              className={`w-full flex items-center px-4 py-3 text-left transition-colors duration-200 hover:bg-gray-100 hover:shadow`}
            >
              <span className="text-2xl">{language.flag}</span>
              <span className="ml-2 font-medium">{language.name}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  )
} 