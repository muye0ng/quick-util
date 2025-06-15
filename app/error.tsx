"use client"
import Link from 'next/link'

export default function Error() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-gray-100 to-gray-200">
      <div className="bg-white rounded-3xl shadow-neumorphism p-12 flex flex-col items-center gap-6">
        <h1 className="text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-yellow-500 to-pink-500 drop-shadow">500</h1>
        <p className="text-xl font-semibold text-gray-700 mb-2">문제가 발생했습니다</p>
        <p className="text-base text-gray-500 mb-4">죄송합니다. 잠시 후 다시 시도해 주세요.</p>
        <Link href="/">
          <button className="px-8 py-3 rounded-xl bg-gradient-to-r from-blue-500 to-purple-500 text-white font-bold shadow-neumorphism hover:scale-105 transition">메인페이지로 이동</button>
        </Link>
      </div>
      <style jsx global>{`
        .shadow-neumorphism {
          box-shadow: 8px 8px 24px #d1d9e6, -8px -8px 24px #ffffff;
        }
      `}</style>
    </div>
  )
} 