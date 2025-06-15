"use client"

import { useEffect, useState } from 'react'
import Link from 'next/link'

export default function Error() {
  const [locale, setLocale] = useState('ko')

  useEffect(() => {
    // 쿠키에서 언어 설정 확인
    const savedLocale = document.cookie
      .split('; ')
      .find(row => row.startsWith('NEXT_LOCALE='))
      ?.split('=')[1]

    if (savedLocale && ['ko', 'en'].includes(savedLocale)) {
      setLocale(savedLocale)
    }
  }, [])

  const messages = {
    ko: {
      title: "오류가 발생했습니다",
      description: "죄송합니다. 문제가 발생했습니다. 잠시 후 다시 시도해 주세요.",
      goHome: "메인페이지로 이동"
    },
    en: {
      title: "An error occurred",
      description: "Sorry, something went wrong. Please try again later.",
      goHome: "Go to main page"
    }
  }

  const dict = messages[locale as keyof typeof messages]

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-gray-100 to-gray-200">
      <div className="bg-white rounded-3xl shadow-[8px_8px_24px_#d1d9e6,-8px_-8px_24px_#ffffff] p-12 flex flex-col items-center gap-6">
        <h1 className="text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-yellow-500 to-pink-500 drop-shadow">500</h1>
        <p className="text-xl font-semibold text-gray-700 mb-2">{dict.title}</p>
        <p className="text-base text-gray-500 mb-4">{dict.description}</p>
        <Link href="/">
          <button className="px-8 py-3 rounded-xl bg-gradient-to-r from-blue-500 to-purple-500 text-white font-bold shadow-[8px_8px_24px_#d1d9e6,-8px_-8px_24px_#ffffff] hover:scale-105 transition">{dict.goHome}</button>
        </Link>
      </div>
    </div>
  )
} 