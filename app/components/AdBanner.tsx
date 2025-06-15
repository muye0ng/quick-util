import React from 'react'

export default function AdBanner({ position = 'bottom' }: { position?: 'bottom' | 'sidebar' }) {
  if (position === 'sidebar') {
    return (
      <aside className="hidden lg:block w-64 ml-8">
        <div className="bg-gray-100 border border-gray-200 rounded-xl p-4 text-center text-gray-500 text-sm shadow-sm">
          {/* 광고 영역 (사이드바) */}
          <span className="font-semibold">AD</span>
          <div className="mt-2">여기에 광고가 표시됩니다.</div>
        </div>
      </aside>
    )
  }
  // bottom
  return (
    <div className="w-full max-w-2xl mx-auto mt-8 mb-4">
      <div className="bg-gray-100 border border-gray-200 rounded-xl p-4 text-center text-gray-500 text-sm shadow-sm">
        {/* 광고 영역 (하단) */}
        <span className="font-semibold">AD</span>
        <div className="mt-2">여기에 광고가 표시됩니다.</div>
      </div>
    </div>
  )
} 