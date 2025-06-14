'use client'

import Link from 'next/link'
import QIcon from '../../public/Q.svg'

interface FooterProps {
  currentLang: string;
}

export default function Footer({ currentLang }: FooterProps) {
  return (
    <footer className="sticky bottom-0 z-50 bg-white/80 backdrop-blur-xl border-t border-gray-200/50 drop-shadow-[0_-8px_24px_rgba(0,0,0,0.12)]">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="grid grid-cols-1 md:grid-cols-6 gap-8 items-start">
          {/* QuickUtil+설명 */}
          <div>
            <div className="flex items-center">
              <QIcon className="w-2 h-2" style={{width:20, height:20}} />
              <span className="text-lg font-bold">uickUtil</span>
            </div>
            <p className="text-gray-600 text-sm mb-2">필수 유틸리티 도구 모음</p>
          </div>
          {/* CONTACT */}
        <div>
            <h4 className="font-semibold mb-2">CONTACT</h4>
            <ul className="space-y-1 text-gray-600 text-sm">
              <li>이메일: <a href="mailto:support@quickutil.com" className="hover:text-gray-900 transition-colors">support@quickutil.com</a></li>
              <li>전화: 010-1234-5678</li>
              <li>문의/소개 등</li>
            </ul>
          </div>
        </div>
        <div className="mt-4 pt-4 flex flex-col md:flex-row justify-between items-center text-sm text-gray-600">
          <div className="w-full text-center">
            © 2025 QuickUtil. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  )
} 