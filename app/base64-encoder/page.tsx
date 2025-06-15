'use client'

import { useState, useEffect } from 'react'
import { DocumentDuplicateIcon, ArrowPathIcon } from '@heroicons/react/24/outline'
import Header from '../components/Header'
import Footer from '../components/Footer'

export default function Base64Encoder() {
  const [input, setInput] = useState('')
  const [output, setOutput] = useState('')
  const [activeTab, setActiveTab] = useState<'encode' | 'decode'>('encode')
  const [copied, setCopied] = useState(false)
  const [locale, setLocale] = useState('en')
  const [encoding, setEncoding] = useState<'utf8' | 'ascii'>('utf8')
  const [safeBase, setSafeBase] = useState(false)

  useEffect(() => {
    // 미들웨어에서 이미 설정한 쿠키를 사용
    const savedLocale = document.cookie
      .split('; ')
      .find(row => row.startsWith('NEXT_LOCALE='))
      ?.split('=')[1] || 'en'
    setLocale(savedLocale)
  }, [])

  const handleLocaleChange = (newLocale: string) => {
    document.cookie = `NEXT_LOCALE=${newLocale}; path=/; max-age=31536000`
    window.location.reload()
  }

  const handleEncode = () => {
    try {
      let encoded = ''
      if (encoding === 'utf8') {
        encoded = btoa(unescape(encodeURIComponent(input)))
      } else {
        encoded = btoa(input)
      }
      if (safeBase) {
        encoded = encoded.replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/, '')
      }
      setOutput(encoded)
    } catch {
      setOutput(locale === 'ko' ? '인코딩 중 오류가 발생했습니다.' : 'Error occurred while encoding.')
    }
  }

  const handleDecode = () => {
    try {
      let inputToDecode = input
      if (safeBase) {
        inputToDecode = input.replace(/-/g, '+').replace(/_/g, '/')
        while (inputToDecode.length % 4) {
          inputToDecode += '='
        }
      }
      const decoded = encoding === 'utf8' 
        ? decodeURIComponent(escape(atob(inputToDecode)))
        : atob(inputToDecode)
      setOutput(decoded)
    } catch {
      setOutput(locale === 'ko' ? '유효하지 않은 Base64 문자열입니다.' : 'Invalid Base64 string.')
    }
  }

  const handleConvert = () => {
    if (activeTab === 'encode') {
      handleEncode()
    } else {
      handleDecode()
    }
  }

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(output)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch (error) {
      console.error('복사 실패:', error)
    }
  }

  const handleClear = () => {
    setInput('')
    setOutput('')
  }

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]
    if (!file) return

    const reader = new FileReader()
    reader.onload = (e) => {
      const result = e.target?.result as string
      if (activeTab === 'encode') {
        setInput(result)
      } else {
        setInput(result.split(',')[1] || '')
      }
    }
    reader.readAsDataURL(file)
  }

  const messages = {
    ko: {
      description: "텍스트를 Base64로 인코딩하거나 Base64를 텍스트로 디코딩합니다.",
      tools: {
        title: "Base64 인코더/디코더",
        subtitle: "텍스트와 Base64 간의 변환을 쉽게 할 수 있습니다."
      },
      categories: {
        encoding: {
          title: "인코딩"
        }
      },
      title: "Base64 인코더/디코더",
      encode: "인코딩",
      decode: "디코딩",
      inputLabel: "텍스트 입력",
      outputLabel: "Base64 결과",
      base64InputLabel: "Base64 입력",
      textOutputLabel: "텍스트 결과",
      inputPlaceholder: "인코딩할 텍스트를 입력하세요",
      base64Placeholder: "디코딩할 Base64를 입력하세요",
      outputPlaceholder: "결과가 여기에 표시됩니다",
      copy: "복사",
      copied: "복사됨",
      clear: "초기화",
      whatIsBase64: "Base64란?",
      base64Description: "Base64는 바이너리 데이터를 ASCII 문자열로 표현하는 인코딩 방식입니다. 주로 이메일 첨부파일, 데이터 URL, API 통신 등에서 바이너리 데이터를 텍스트 형태로 전송해야 할 때 사용됩니다.",
      example: "예시",
      original: "원본",
      encoding: "인코딩 방식",
      utf8: "UTF-8",
      ascii: "ASCII",
      safeBase: "URL 안전 Base64",
      safeBaseDescription: "URL에서 안전하게 사용할 수 있도록 +, /, = 문자를 -, _, (제거)로 대체합니다."
    },
    en: {
      description: "Encode text to Base64 or decode Base64 to text.",
      tools: {
        title: "Base64 Encoder/Decoder",
        subtitle: "Easily convert between text and Base64."
      },
      categories: {
        encoding: {
          title: "Encoding"
        }
      },
      title: "Base64 Encoder/Decoder",
      encode: "Encode",
      decode: "Decode",
      inputLabel: "Text Input",
      outputLabel: "Base64 Result",
      base64InputLabel: "Base64 Input",
      textOutputLabel: "Text Result",
      inputPlaceholder: "Enter text to encode",
      base64Placeholder: "Enter Base64 to decode",
      outputPlaceholder: "Result will appear here",
      copy: "Copy",
      copied: "Copied",
      clear: "Clear",
      whatIsBase64: "What is Base64?",
      base64Description: "Base64 is an encoding scheme that represents binary data in ASCII string format. It is commonly used for transmitting binary data over text-based protocols such as email attachments, data URLs, and API communications.",
      example: "Example",
      original: "Original",
      encoding: "Encoding",
      utf8: "UTF-8",
      ascii: "ASCII",
      safeBase: "URL Safe Base64",
      safeBaseDescription: "Replaces +, /, = characters with -, _, (removed) for safe use in URLs."
    }
  }

  const dict = messages[locale as keyof typeof messages]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50">
      <Header onLocaleChange={handleLocaleChange} currentLocale={locale} dict={dict} />
      
      {/* Left Sidebar - Ad Space */}
      <div className="hidden lg:block fixed left-8 top-24 w-64 h-[600px] bg-gray-100 rounded-lg flex items-center justify-center">
        <span className="text-gray-400">광고 영역</span>
      </div>

      {/* Right Sidebar - Ad Space */}
      <div className="hidden lg:block fixed right-8 top-24 w-64 h-[600px] bg-gray-100 rounded-lg flex items-center justify-center">
        <span className="text-gray-400">광고 영역</span>
      </div>

      <div className="max-w-7xl mx-auto px-6">
        <div className="py-8 space-y-8">
          {/* Header */}
          <div>
            <h1 className="text-3xl font-extrabold mb-2 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent drop-shadow-lg">
              {dict.title}
            </h1>
            <p className="text-[var(--text-secondary)]">
              {dict.description}
            </p>
          </div>

          {/* Tabs */}
          <div className="flex space-x-4">
            <button
              onClick={() => setActiveTab('encode')}
              className={`px-6 py-3 rounded-lg text-lg font-semibold transition-all duration-300 focus:outline-none ${
                activeTab === 'encode'
                  ? 'bg-blue-600 text-white shadow-lg'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              {dict.encode}
            </button>
            <button
              onClick={() => setActiveTab('decode')}
              className={`px-6 py-3 rounded-lg text-lg font-semibold transition-all duration-300 focus:outline-none ${
                activeTab === 'decode'
                  ? 'bg-blue-600 text-white shadow-lg'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              {dict.decode}
            </button>
          </div>

          {/* Encoding Options */}
          <div className="flex flex-wrap gap-4 items-center mb-2">
            <div className="flex items-center space-x-2">
              <span className="text-sm font-medium text-gray-700">{dict.encoding}:</span>
              <select
                value={encoding}
                onChange={(e) => setEncoding(e.target.value as 'utf8' | 'ascii')}
                className="toss-select rounded-lg border border-gray-300 shadow-sm focus:ring-2 focus:ring-blue-400 focus:border-blue-400 transition"
              >
                <option value="utf8">{dict.utf8}</option>
                <option value="ascii">{dict.ascii}</option>
              </select>
            </div>
            <label className="flex items-center space-x-2">
              <input
                type="checkbox"
                checked={safeBase}
                onChange={(e) => setSafeBase(e.target.checked)}
                className="toss-checkbox rounded focus:ring-2 focus:ring-blue-400 focus:outline-none border-gray-300"
              />
              <span className="text-sm text-gray-700">{dict.safeBase}</span>
            </label>
          </div>
          <div className="text-xs text-gray-500 mb-4">
            {locale === 'ko'
              ? 'URL에서 안전하게 사용할 수 있도록 +, /, = 문자를 -, _, (제거)로 대체합니다.'
              : 'Replaces +, /, = characters with -, _, (removed) for safe use in URLs.'}
          </div>

          {/* Main Content - 카드 스타일 적용 */}
          <div className="grid md:grid-cols-2 gap-8">
            {/* Input Section */}
            <div className="bg-white rounded-2xl shadow-lg p-6 flex flex-col gap-4 border border-gray-100">
              <div className="flex items-center justify-between mb-1">
                <label className="text-base font-semibold text-[var(--text-primary)]">
                  {activeTab === 'encode' ? dict.inputLabel : dict.base64InputLabel}
                </label>
                <span className="text-xs text-[var(--text-tertiary)] font-mono bg-gray-100 px-2 py-0.5 rounded">
                  {encoding.toUpperCase()}{safeBase ? ' (Safe)' : ''}
                </span>
              </div>
              <textarea
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder={activeTab === 'encode' ? dict.inputPlaceholder : dict.base64Placeholder}
                className="toss-textarea h-64 font-mono text-sm rounded-lg border border-gray-200 focus:ring-2 focus:ring-blue-400 focus:border-blue-400 transition bg-gray-50"
              />
            </div>

            {/* Output Section */}
            <div className="bg-white rounded-2xl shadow-lg p-6 flex flex-col gap-4 border border-gray-100">
              <div className="flex items-center justify-between mb-1">
                <label className="text-base font-semibold text-[var(--text-primary)]">
                  {activeTab === 'encode' ? dict.outputLabel : dict.textOutputLabel}
                </label>
                <div className="flex items-center gap-2">
                  <span className="text-xs text-[var(--text-tertiary)] font-mono bg-gray-100 px-2 py-0.5 rounded">
                    {activeTab === 'encode' ? 'BASE64' : encoding.toUpperCase()}
                  </span>
                  <button
                    onClick={handleCopy}
                    disabled={!output}
                    className="flex items-center space-x-1 text-xs text-[var(--primary)] hover:text-[var(--primary-hover)] disabled:text-[var(--text-tertiary)] disabled:cursor-not-allowed transition-colors focus:outline-none bg-gray-50 hover:bg-blue-50 px-2 py-1 rounded-lg border border-gray-200"
                  >
                    <DocumentDuplicateIcon className="w-4 h-4" />
                    <span>{copied ? dict.copied : dict.copy}</span>
                  </button>
                </div>
              </div>
              <textarea
                value={output}
                readOnly
                placeholder={dict.outputPlaceholder}
                className="toss-textarea h-64 font-mono text-sm rounded-lg border border-gray-200 bg-gray-50"
              />
            </div>
          </div>

          {/* Action Buttons - 중앙 정렬, 트랜디 스타일 */}
          <div className="flex justify-center gap-4 mt-8">
            <button
              onClick={handleConvert}
              className="toss-button-primary flex items-center space-x-2 px-10 py-3 text-lg rounded-xl shadow focus:outline-none bg-gradient-to-r from-blue-500 to-blue-400 hover:from-blue-600 hover:to-blue-500 text-white font-bold transition"
            >
              <ArrowPathIcon className="w-5 h-5" />
              <span>{activeTab === 'encode' ? dict.encode : dict.decode}</span>
            </button>
            <button
              onClick={handleClear}
              className="toss-button px-10 py-3 text-lg rounded-xl shadow focus:outline-none bg-gray-100 hover:bg-gray-200 text-gray-700 font-bold transition"
            >
              {dict.clear}
            </button>
          </div>

          {/* Info Section */}
          <div className="space-y-6 border-t border-[var(--border)] pt-8">
            <div>
              <h2 className="text-lg font-semibold text-[var(--text-primary)] mb-3">{dict.whatIsBase64}</h2>
              <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                {dict.base64Description}
              </p>
            </div>

            <div>
              <h3 className="text-sm font-semibold text-[var(--text-primary)] mb-2">{dict.example}</h3>
              <div className="space-y-2">
                <div className="toss-card p-3">
                  <p className="text-xs text-[var(--text-tertiary)] mb-1">{dict.original}</p>
                  <code className="text-sm font-mono">Hello, World!</code>
                </div>
                <div className="toss-card p-3">
                  <p className="text-xs text-[var(--text-tertiary)] mb-1">Base64</p>
                  <code className="text-sm font-mono">SGVsbG8sIFdvcmxkIQ==</code>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Ad Space */}
          <div className="h-[120px] bg-gray-100 rounded-lg flex items-center justify-center">
            <span className="text-gray-400">광고 영역</span>
          </div>
        </div>
      </div>

      <Footer currentLang={locale} dict={dict} />
    </div>
  )
} 