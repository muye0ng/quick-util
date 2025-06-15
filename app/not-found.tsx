import Link from 'next/link'
import { headers, cookies } from 'next/headers'

export default async function NotFound() {
  const headersList = await headers()
  const cookieStore = await cookies()
  
  // 쿠키에서 언어 설정 확인
  const savedLocale = cookieStore.get('NEXT_LOCALE')?.value
  if (savedLocale && ['ko', 'en'].includes(savedLocale)) {
    const locale = savedLocale
    const messages = {
      ko: {
        title: "페이지를 찾을 수 없습니다",
        description: "요청하신 페이지가 존재하지 않거나 이동되었을 수 있습니다.",
        goHome: "메인페이지로 이동"
      },
      en: {
        title: "Page Not Found",
        description: "The page you are looking for might have been removed or is temporarily unavailable.",
        goHome: "Go to main page"
      }
    }

    const dict = messages[locale as keyof typeof messages]

    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-gray-100 to-gray-200">
        <div className="bg-white rounded-3xl shadow-[8px_8px_24px_#d1d9e6,-8px_-8px_24px_#ffffff] p-12 flex flex-col items-center gap-6">
          <h1 className="text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-yellow-500 to-pink-500 drop-shadow">404</h1>
          <p className="text-xl font-semibold text-gray-700 mb-2">{dict.title}</p>
          <p className="text-base text-gray-500 mb-4">{dict.description}</p>
          <Link href="/">
            <button className="px-8 py-3 rounded-xl bg-gradient-to-r from-blue-500 to-purple-500 text-white font-bold shadow-[8px_8px_24px_#d1d9e6,-8px_-8px_24px_#ffffff] hover:scale-105 transition">{dict.goHome}</button>
          </Link>
        </div>
      </div>
    )
  }

  // 쿠키에 언어 설정이 없는 경우 브라우저 언어 확인
  const acceptLanguage = headersList.get('accept-language') || ''
  const preferredLocale = acceptLanguage.split(',')[0].split('-')[0]
  const locale = ['ko', 'en'].includes(preferredLocale) ? preferredLocale : 'ko'

  const messages = {
    ko: {
      title: "페이지를 찾을 수 없습니다",
      description: "요청하신 페이지가 존재하지 않거나 이동되었을 수 있습니다.",
      goHome: "메인페이지로 이동"
    },
    en: {
      title: "Page Not Found",
      description: "The page you are looking for might have been removed or is temporarily unavailable.",
      goHome: "Go to main page"
    }
  }

  const dict = messages[locale as keyof typeof messages]

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-gray-100 to-gray-200">
      <div className="bg-white rounded-3xl shadow-[8px_8px_24px_#d1d9e6,-8px_-8px_24px_#ffffff] p-12 flex flex-col items-center gap-6">
        <h1 className="text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-yellow-500 to-pink-500 drop-shadow">404</h1>
        <p className="text-xl font-semibold text-gray-700 mb-2">{dict.title}</p>
        <p className="text-base text-gray-500 mb-4">{dict.description}</p>
        <Link href="/">
          <button className="px-8 py-3 rounded-xl bg-gradient-to-r from-blue-500 to-purple-500 text-white font-bold shadow-[8px_8px_24px_#d1d9e6,-8px_-8px_24px_#ffffff] hover:scale-105 transition">{dict.goHome}</button>
        </Link>
      </div>
    </div>
  )
} 