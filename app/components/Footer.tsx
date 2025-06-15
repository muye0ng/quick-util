'use client'

import Link from 'next/link'
import QIcon from '../../public/Q.svg'
import Image from 'next/image'

interface FooterProps {
  currentLang: string;
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

export default function Footer({ currentLang, dict }: FooterProps) {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

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
            <p className="text-gray-600 text-sm mb-2">
              {currentLang === 'ko' ? '당신을 위한 필수 유틸리티 도구' : 'Essential utility tools for you'}
            </p>
          </div>
          {/* CONTACT */}
          <div>
            <h4 className="font-semibold mb-2">CONTACT</h4>
            <ul className="space-y-1 text-gray-600 text-sm">
              <li className="flex space-x-4">
                <button onClick={scrollToTop} className="hover:opacity-80 transition-opacity bg-transparent focus:outline-none">
                  <Image src="/github.svg" alt="GitHub" width={20} height={20} />
                </button>
                <button onClick={scrollToTop} className="hover:opacity-80 transition-opacity bg-transparent focus:outline-none">
                  <Image src="/threads.svg" alt="Threads" width={20} height={20} />
                </button>
                <button onClick={scrollToTop} className="hover:opacity-80 transition-opacity bg-transparent focus:outline-none">
                  <Image src="/x.svg" alt="X" width={20} height={20} />
                </button>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-4 pt-4 flex flex-col md:flex-row justify-between items-center text-sm text-gray-600">
          <div className="w-full text-center">
            © {new Date().getFullYear()} QuickUtil. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  )
} 