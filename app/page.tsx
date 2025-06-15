'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import Header from './components/Header'
import Footer from './components/Footer'
import { 
  CodeBracketSquareIcon,
  ArrowsUpDownIcon,
  LinkIcon,
  TableCellsIcon,
  DocumentTextIcon,
  DocumentDuplicateIcon,
  PhotoIcon,
  ArrowsPointingOutIcon,
  StarIcon,
  KeyIcon,
  HashtagIcon,
  IdentificationIcon,
  LockClosedIcon,
  CheckCircleIcon,
  ArrowPathIcon,
  ClockIcon,
  GlobeAltIcon,
} from '@heroicons/react/24/outline'

export default function Home() {
  const router = useRouter()
  const [locale, setLocale] = useState('ko')

  useEffect(() => {
    // 쿠키에서 언어 설정 확인
    const savedLocale = document.cookie
      .split('; ')
      .find(row => row.startsWith('NEXT_LOCALE='))
      ?.split('=')[1]

    if (savedLocale) {
      setLocale(savedLocale)
    } else {
      // 쿠키가 없으면 브라우저 언어 설정 사용
      const browserLang = navigator.language.startsWith('ko') ? 'ko' : 'en'
      setLocale(browserLang)
      document.cookie = `NEXT_LOCALE=${browserLang}; path=/; max-age=31536000`
    }
  }, [])

  const handleLocaleChange = (newLocale: string) => {
    setLocale(newLocale)
    document.cookie = `NEXT_LOCALE=${newLocale}; path=/; max-age=31536000`
    router.refresh()
  }

  const messages = {
    ko: {
      description: "모두를 위한 필수 유틸리티 도구들을 한 곳에서 빠르고 안전하게 사용하세요",
      tools: {
        title: "유용한 <span class='bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent font-bold'>도구들</span>",
        subtitle: "당신의 업무 효율을 200% 높여주는 20가지 필수 도구를 한 곳에서 만나보세요",
        jsonFormatter: {
          title: "JSON 포맷터",
          description: "JSON 데이터를 보기 좋게 정렬하고, 유효성을 검사하며, 압축/해제할 수 있습니다"
        },
        base64Encoder: {
          title: "Base64 인코더",
          description: "텍스트와 이미지, 파일을 Base64로 인코딩하고 디코딩할 수 있습니다"
        },
        urlEncoder: {
          title: "URL 인코더",
          description: "URL의 특수문자를 인코딩하고 디코딩하여 안전하게 사용할 수 있습니다"
        },
        csvConverter: {
          title: "CSV 변환기",
          description: "CSV 파일을 JSON으로 변환하고, JSON을 CSV로 내보낼 수 있습니다"
        },
        xmlFormatter: {
          title: "XML 포맷터",
          description: "XML 데이터를 보기 좋게 정렬하고, 유효성을 검사할 수 있습니다"
        },
        pdfTools: {
          title: "PDF 도구",
          description: "PDF 병합, 분할, 이미지 변환, 페이지 회전 등 다양한 PDF 작업을 할 수 있습니다"
        },
        imageConverter: {
          title: "이미지 변환기",
          description: "JPG, PNG, WebP, ICO, SVG 등 다양한 이미지 포맷을 변환하고 최적화할 수 있습니다"
        },
        documentConverter: {
          title: "문서 변환기",
          description: "Word, Excel, PowerPoint, PDF 등 다양한 문서 포맷을 변환할 수 있습니다"
        },
        imageResizer: {
          title: "이미지 리사이저",
          description: "이미지 크기를 조절하고 비율을 유지하며 품질을 조정할 수 있습니다"
        },
        favicon: {
          title: "파비콘 생성기",
          description: "다양한 아이콘을 favicon(.ico)으로 변환하고 웹사이트용 favicon을 생성할 수 있습니다"
        },
        password: {
          title: "비밀번호 생성기",
          description: "특수문자, 숫자, 대소문자를 포함한 강력한 비밀번호를 생성할 수 있습니다"
        },
        hash: {
          title: "해시 생성기",
          description: "MD5, SHA1, SHA256, SHA512 등 다양한 해시 알고리즘으로 변환할 수 있습니다"
        },
        uuid: {
          title: "UUID 생성기",
          description: "UUID v1, v4 고유 식별자를 생성하고 일괄 복사할 수 있습니다"
        },
        jwt: {
          title: "JWT 디코더",
          description: "JWT 토큰을 디코딩하고 검증할 수 있습니다"
        },
        validation: {
          title: "유효성 검사 도구",
          description: "이메일, 전화번호, URL 등 다양한 형식의 유효성을 검사할 수 있습니다"
        },
        encoding: {
          title: "인코딩 도구",
          description: "다양한 인코딩 형식(UTF-8, ASCII, Base64 등)을 변환할 수 있습니다"
        },
        time: {
          title: "시간 도구",
          description: "타임스탬프 변환, 날짜 계산, 시간대 변환 등 시간 관련 작업을 할 수 있습니다"
        },
        network: {
          title: "네트워크 도구",
          description: "IP 주소 확인, DNS 조회, 포트 스캔 등 네트워크 관련 작업을 할 수 있습니다"
        }
      },
      categories: {
        dataProcessing: {
          title: "데이터 처리"
        },
        file: {
          title: "파일"
        },
        image: {
          title: "이미지"
        },
        security: {
          title: "보안"
        },
        other: {
          title: "기타"
        }
      }
    },
    en: {
      description: "Essential utility tools for developers, all in one place",
      tools: {
        title: "Useful <span class='bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent font-bold'>Tools</span>",
        subtitle: "Boost your productivity by 200% with 20 essential tools in one place",
        jsonFormatter: {
          title: "JSON Formatter",
          description: "Format, validate, and compress/decompress JSON data"
        },
        base64Encoder: {
          title: "Base64 Encoder",
          description: "Encode and decode text, images, and files to/from Base64"
        },
        urlEncoder: {
          title: "URL Encoder",
          description: "Encode and decode special characters in URLs for safe use"
        },
        csvConverter: {
          title: "CSV Converter",
          description: "Convert CSV files to JSON and export JSON to CSV"
        },
        xmlFormatter: {
          title: "XML Formatter",
          description: "Format and validate XML data"
        },
        pdfTools: {
          title: "PDF Tools",
          description: "Merge, split, convert to images, rotate pages, and more PDF operations"
        },
        imageConverter: {
          title: "Image Converter",
          description: "Convert and optimize various image formats including JPG, PNG, WebP, ICO, SVG"
        },
        documentConverter: {
          title: "Document Converter",
          description: "Convert between various document formats including Word, Excel, PowerPoint, PDF"
        },
        imageResizer: {
          title: "Image Resizer",
          description: "Resize images while maintaining aspect ratio and adjusting quality"
        },
        favicon: {
          title: "Favicon Generator",
          description: "Convert various icons to favicon (.ico) format and generate favicons for websites"
        },
        password: {
          title: "Password Generator",
          description: "Generate strong passwords with special characters, numbers, and mixed case"
        },
        hash: {
          title: "Hash Generator",
          description: "Convert to various hash algorithms including MD5, SHA1, SHA256, SHA512"
        },
        uuid: {
          title: "UUID Generator",
          description: "Generate UUID v1, v4 unique identifiers and allow bulk copying"
        },
        jwt: {
          title: "JWT Decoder",
          description: "Decode and validate JWT tokens"
        },
        validation: {
          title: "Validation Tools",
          description: "Validate various formats including email, phone number, URL"
        },
        encoding: {
          title: "Encoding Tools",
          description: "Convert between various encoding formats (UTF-8, ASCII, Base64, etc.)"
        },
        time: {
          title: "Time Tools",
          description: "Timestamp conversion, date calculation, timezone conversion, and more"
        },
        network: {
          title: "Network Tools",
          description: "IP address lookup, DNS lookup, port scanning, and more network operations"
        }
      },
      categories: {
        dataProcessing: {
          title: "Data Processing"
        },
        file: {
          title: "Files"
        },
        image: {
          title: "Image"
        },
        security: {
          title: "Security"
        },
        other: {
          title: "Other"
        }
      }
    }
  }

  const dict = messages[locale as keyof typeof messages]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50">
      <Header onLocaleChange={handleLocaleChange} currentLocale={locale} dict={dict} />
      {/* Hero Section */}
      <section className="relative pt-48 pb-20 bg-gradient-to-br from-blue-50 via-white to-purple-50">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-50/30 to-transparent"></div>
        <div className="max-w-7xl mx-auto px-6 py-12 text-center relative">
          <h1 className="text-5xl lg:text-7xl font-black text-gray-900 mb-8 leading-tight">
            Quick<span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Util</span>
          </h1>
          <p className="text-xl lg:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            {dict.description}
          </p>
        </div>
      </section>

      {/* Tools Grid */}
      <section className="relative py-20 bg-gradient-to-br from-blue-50 via-white to-purple-50">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-50/30 to-transparent"></div>
        <div className="max-w-7xl mx-auto px-6 py-12 relative">
          <div className="text-center mb-20">
            <h2 className="text-4xl lg:text-5xl font-black text-gray-900 mb-6" dangerouslySetInnerHTML={{ __html: dict.tools.title }} />
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              {dict.tools.subtitle}
            </p>
          </div>
          
          {/* 데이터처리 */}
          <div className="mb-20">
            <div className="flex items-center min-h-[56px] pl-1 pr-1 mb-10">
              <div className="w-1 h-8 bg-gradient-to-b from-blue-500 to-blue-600 rounded-full mr-4"></div>
              <h3 className="text-2xl font-bold text-gray-900 py-2">{dict.categories.dataProcessing.title}</h3>
              <div className="flex-1 h-px bg-gradient-to-r from-blue-200 to-transparent ml-6"></div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* JSON Formatter */}
              <Link href="/json-formatter" className="group">
                <div className="bg-white border border-gray-300 rounded-lg p-6 hover:bg-gray-100 hover:shadow-lg hover:border-blue-500 transition-all duration-300">
                  <div className="flex items-start space-x-4">
                    <CodeBracketSquareIcon className="w-6 h-6 text-gray-700 flex-shrink-0 group-hover:text-blue-600 transition-colors" style={{ width: '24px', height: '24px' }} />
                    <div className="flex-1 min-w-0">
                      <h3 className="text-lg font-semibold text-gray-900 mb-1 group-hover:text-blue-600 transition-colors">
                        {dict.tools.jsonFormatter.title}
                      </h3>
                      <p className="text-gray-600 text-sm leading-relaxed">
                        {dict.tools.jsonFormatter.description}
                      </p>
                    </div>
                  </div>
                </div>
              </Link>

              {/* Base64 Encoder */}
              <Link href="/base64-encoder" className="group">
                <div className="bg-white border border-gray-300 rounded-lg p-6 hover:bg-gray-100 hover:shadow-lg hover:border-green-500 transition-all duration-300">
                  <div className="flex items-start space-x-4">
                    <LockClosedIcon className="w-6 h-6 text-gray-700 flex-shrink-0 group-hover:text-green-600 transition-colors" style={{ width: '24px', height: '24px' }} />
                    <div className="flex-1 min-w-0">
                      <h3 className="text-lg font-semibold text-gray-900 mb-1 group-hover:text-green-600 transition-colors">
                        {dict.tools.base64Encoder.title}
                      </h3>
                      <p className="text-gray-600 text-sm leading-relaxed">
                        {dict.tools.base64Encoder.description}
                      </p>
                    </div>
                  </div>
                </div>
              </Link>

              {/* URL Encoder */}
              <Link href="/url-encoder" className="group">
                <div className="bg-white border border-gray-300 rounded-lg p-6 hover:bg-gray-100 hover:shadow-lg hover:border-orange-500 transition-all duration-300">
                  <div className="flex items-start space-x-4">
                    <LinkIcon className="w-6 h-6 text-gray-700 flex-shrink-0 group-hover:text-orange-600 transition-colors" style={{ width: '24px', height: '24px' }} />
                    <div className="flex-1 min-w-0">
                      <h3 className="text-lg font-semibold text-gray-900 mb-1 group-hover:text-orange-600 transition-colors">
                        {dict.tools.urlEncoder.title}
                      </h3>
                      <p className="text-gray-600 text-sm leading-relaxed">
                        {dict.tools.urlEncoder.description}
                      </p>
                    </div>
                  </div>
                </div>
              </Link>

              {/* CSV to JSON */}
              <Link href="/csv-converter" className="group">
                <div className="bg-white border border-gray-300 rounded-lg p-6 hover:bg-gray-100 hover:shadow-lg hover:border-blue-500 transition-all duration-300">
                  <div className="flex items-start space-x-4">
                    <TableCellsIcon className="w-6 h-6 text-gray-700 flex-shrink-0 group-hover:text-blue-600 transition-colors" style={{ width: '24px', height: '24px' }} />
                    <div className="flex-1 min-w-0">
                      <h3 className="text-lg font-semibold text-gray-900 mb-1 group-hover:text-blue-600 transition-colors">
                        {dict.tools.csvConverter.title}
                      </h3>
                      <p className="text-gray-600 text-sm leading-relaxed">
                        {dict.tools.csvConverter.description}
                      </p>
                    </div>
                  </div>
                </div>
              </Link>

              {/* XML Formatter */}
              <Link href="/xml-formatter" className="group">
                <div className="bg-white border border-gray-300 rounded-lg p-6 hover:bg-gray-100 hover:shadow-lg hover:border-blue-500 transition-all duration-300">
                  <div className="flex items-start space-x-4">
                    <DocumentTextIcon className="w-6 h-6 text-gray-700 flex-shrink-0 group-hover:text-blue-600 transition-colors" style={{ width: '24px', height: '24px' }} />
                    <div className="flex-1 min-w-0">
                      <h3 className="text-lg font-semibold text-gray-900 mb-1 group-hover:text-blue-600 transition-colors">
                        {dict.tools.xmlFormatter.title}
                      </h3>
                      <p className="text-gray-600 text-sm leading-relaxed">
                        {dict.tools.xmlFormatter.description}
                      </p>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          </div>

          {/* 파일 */}
          <div className="mb-20">
            <div className="flex items-center min-h-[56px] pl-1 pr-1 mb-10">
              <div className="w-1 h-8 bg-gradient-to-b from-yellow-500 to-yellow-600 rounded-full mr-4"></div>
              <h3 className="text-2xl font-bold text-gray-900 py-2">{dict.categories.file.title}</h3>
              <div className="flex-1 h-px bg-gradient-to-r from-yellow-200 to-transparent ml-6"></div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* PDF Tools */}
              <Link href="/pdf-tools" className="group">
                <div className="bg-white border border-gray-300 rounded-lg p-6 hover:bg-gray-100 hover:shadow-lg hover:border-yellow-500 transition-all duration-300">
                  <div className="flex items-start space-x-4">
                    <DocumentDuplicateIcon className="w-6 h-6 text-gray-700 flex-shrink-0 group-hover:text-yellow-600 transition-colors" style={{ width: '24px', height: '24px' }} />
                    <div className="flex-1 min-w-0">
                      <h3 className="text-lg font-semibold text-gray-900 mb-1 group-hover:text-yellow-600 transition-colors">
                        {dict.tools.pdfTools.title}
                      </h3>
                      <p className="text-gray-600 text-sm leading-relaxed">
                        {dict.tools.pdfTools.description}
                      </p>
                    </div>
                  </div>
                </div>
              </Link>

              {/* Image Converter */}
              <Link href="/image-converter" className="group">
                <div className="bg-white border border-gray-300 rounded-lg p-6 hover:bg-gray-100 hover:shadow-lg hover:border-yellow-500 transition-all duration-300">
                  <div className="flex items-start space-x-4">
                    <PhotoIcon className="w-6 h-6 text-gray-700 flex-shrink-0 group-hover:text-yellow-600 transition-colors" style={{ width: '24px', height: '24px' }} />
                    <div className="flex-1 min-w-0">
                      <h3 className="text-lg font-semibold text-gray-900 mb-1 group-hover:text-yellow-600 transition-colors">
                        {dict.tools.imageConverter.title}
                      </h3>
                      <p className="text-gray-600 text-sm leading-relaxed">
                        {dict.tools.imageConverter.description}
                      </p>
                    </div>
                  </div>
                </div>
              </Link>

              {/* Document Converter */}
              <Link href="/document-converter" className="group">
                <div className="bg-white border border-gray-300 rounded-lg p-6 hover:bg-gray-100 hover:shadow-lg hover:border-yellow-500 transition-all duration-300">
                  <div className="flex items-start space-x-4">
                    <DocumentTextIcon className="w-6 h-6 text-gray-700 flex-shrink-0 group-hover:text-yellow-600 transition-colors" style={{ width: '24px', height: '24px' }} />
                    <div className="flex-1 min-w-0">
                      <h3 className="text-lg font-semibold text-gray-900 mb-1 group-hover:text-yellow-600 transition-colors">
                        {dict.tools.documentConverter.title}
                      </h3>
                      <p className="text-gray-600 text-sm leading-relaxed">
                        {dict.tools.documentConverter.description}
                      </p>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          </div>

          {/* 이미지 */}
          <div className="mb-20">
            <div className="flex items-center min-h-[56px] pl-1 pr-1 mb-10">
              <div className="w-1 h-8 bg-gradient-to-b from-purple-500 to-purple-600 rounded-full mr-4"></div>
              <h3 className="text-2xl font-bold text-gray-900 py-2">{dict.categories.image.title}</h3>
              <div className="flex-1 h-px bg-gradient-to-r from-purple-200 to-transparent ml-6"></div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Image Resizer */}
              <Link href="/image-resizer" className="group">
                <div className="bg-white border border-gray-300 rounded-lg p-6 hover:bg-gray-100 hover:shadow-lg hover:border-indigo-500 transition-all duration-300">
                  <div className="flex items-start space-x-4">
                    <ArrowsPointingOutIcon className="w-6 h-6 text-gray-700 flex-shrink-0 group-hover:text-indigo-600 transition-colors" style={{ width: '24px', height: '24px' }} />
                    <div className="flex-1 min-w-0">
                      <h3 className="text-lg font-semibold text-gray-900 mb-1 group-hover:text-indigo-600 transition-colors">
                        {dict.tools.imageResizer.title}
                      </h3>
                      <p className="text-gray-600 text-sm leading-relaxed">
                        {dict.tools.imageResizer.description}
                      </p>
                    </div>
                  </div>
                </div>
              </Link>

              {/* Favicon Generator */}
              <Link href="/favicon" className="group">
                <div className="bg-white border border-gray-300 rounded-lg p-6 hover:bg-gray-100 hover:shadow-lg hover:border-yellow-500 transition-all duration-300">
                  <div className="flex items-start space-x-4">
                    <StarIcon className="w-6 h-6 text-gray-700 flex-shrink-0 group-hover:text-yellow-600 transition-colors" style={{ width: '24px', height: '24px' }} />
                    <div className="flex-1 min-w-0">
                      <h3 className="text-lg font-semibold text-gray-900 mb-1 group-hover:text-yellow-600 transition-colors">
                        {dict.tools.favicon.title}
                      </h3>
                      <p className="text-gray-600 text-sm leading-relaxed">
                        {dict.tools.favicon.description}
                      </p>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          </div>

          {/* 보안 */}
          <div className="mb-20">
            <div className="flex items-center min-h-[56px] pl-1 pr-1 mb-10">
              <div className="w-1 h-8 bg-gradient-to-b from-red-500 to-red-600 rounded-full mr-4"></div>
              <h3 className="text-2xl font-bold text-gray-900 py-2">{dict.categories.security.title}</h3>
              <div className="flex-1 h-px bg-gradient-to-r from-red-200 to-transparent ml-6"></div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Password Generator */}
              <Link href="/password-generator" className="group">
                <div className="bg-white border border-gray-300 rounded-lg p-6 hover:bg-gray-100 hover:shadow-lg hover:border-red-500 transition-all duration-300">
                  <div className="flex items-start space-x-4">
                    <KeyIcon className="w-6 h-6 text-gray-700 flex-shrink-0 group-hover:text-red-600 transition-colors" style={{ width: '24px', height: '24px' }} />
                    <div className="flex-1 min-w-0">
                      <h3 className="text-lg font-semibold text-gray-900 mb-1 group-hover:text-red-600 transition-colors">
                        {dict.tools.password.title}
                      </h3>
                      <p className="text-gray-600 text-sm leading-relaxed">
                        {dict.tools.password.description}
                      </p>
                    </div>
                  </div>
                </div>
              </Link>

              {/* Hash Generator */}
              <Link href="/hash-generator" className="group">
                <div className="bg-white border border-gray-300 rounded-lg p-6 hover:bg-gray-100 hover:shadow-lg hover:border-red-500 transition-all duration-300">
                  <div className="flex items-start space-x-4">
                    <HashtagIcon className="w-6 h-6 text-gray-700 flex-shrink-0 group-hover:text-red-600 transition-colors" style={{ width: '24px', height: '24px' }} />
                    <div className="flex-1 min-w-0">
                      <h3 className="text-lg font-semibold text-gray-900 mb-1 group-hover:text-red-600 transition-colors">
                        {dict.tools.hash.title}
                      </h3>
                      <p className="text-gray-600 text-sm leading-relaxed">
                        {dict.tools.hash.description}
                      </p>
                    </div>
                  </div>
                </div>
              </Link>

              {/* UUID Generator */}
              <Link href="/uuid-generator" className="group">
                <div className="bg-white border border-gray-300 rounded-lg p-6 hover:bg-gray-100 hover:shadow-lg hover:border-red-500 transition-all duration-300">
                  <div className="flex items-start space-x-4">
                    <IdentificationIcon className="w-6 h-6 text-gray-700 flex-shrink-0 group-hover:text-red-600 transition-colors" style={{ width: '24px', height: '24px' }} />
                    <div className="flex-1 min-w-0">
                      <h3 className="text-lg font-semibold text-gray-900 mb-1 group-hover:text-red-600 transition-colors">
                        {dict.tools.uuid.title}
                      </h3>
                      <p className="text-gray-600 text-sm leading-relaxed">
                        {dict.tools.uuid.description}
                      </p>
                    </div>
                  </div>
                </div>
              </Link>

              {/* JWT Decoder */}
              <Link href="/jwt-decoder" className="group">
                <div className="bg-white border border-gray-300 rounded-lg p-6 hover:bg-gray-100 hover:shadow-lg hover:border-red-500 transition-all duration-300">
                  <div className="flex items-start space-x-4">
                    <CheckCircleIcon className="w-6 h-6 text-gray-700 flex-shrink-0 group-hover:text-red-600 transition-colors" style={{ width: '24px', height: '24px' }} />
                    <div className="flex-1 min-w-0">
                      <h3 className="text-lg font-semibold text-gray-900 mb-1 group-hover:text-red-600 transition-colors">
                        {dict.tools.jwt.title}
                      </h3>
                      <p className="text-gray-600 text-sm leading-relaxed">
                        {dict.tools.jwt.description}
                      </p>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          </div>

          {/* 기타도구 */}
          <div>
            <div className="flex items-center min-h-[56px] pl-1 pr-1 mb-10">
              <div className="w-1 h-8 bg-gradient-to-b from-gray-500 to-gray-600 rounded-full mr-4"></div>
              <h3 className="text-2xl font-bold text-gray-900 py-2">{dict.categories.other.title}</h3>
              <div className="flex-1 h-px bg-gradient-to-r from-gray-200 to-transparent ml-6"></div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Validation Tools */}
              <Link href="/validation" className="group">
                <div className="bg-white border border-gray-300 rounded-lg p-6 hover:bg-gray-100 hover:shadow-lg hover:border-gray-500 transition-all duration-300">
                  <div className="flex items-start space-x-4">
                    <CheckCircleIcon className="w-6 h-6 text-gray-700 flex-shrink-0 group-hover:text-gray-600 transition-colors" style={{ width: '24px', height: '24px' }} />
                    <div className="flex-1 min-w-0">
                      <h3 className="text-lg font-semibold text-gray-900 mb-1 group-hover:text-gray-600 transition-colors">
                        {dict.tools.validation.title}
                      </h3>
                      <p className="text-gray-600 text-sm leading-relaxed">
                        {dict.tools.validation.description}
                      </p>
                    </div>
                  </div>
                </div>
              </Link>

              {/* Encoding Tools */}
              <Link href="/encoding" className="group">
                <div className="bg-white border border-gray-300 rounded-lg p-6 hover:bg-gray-100 hover:shadow-lg hover:border-gray-500 transition-all duration-300">
                  <div className="flex items-start space-x-4">
                    <ArrowPathIcon className="w-6 h-6 text-gray-700 flex-shrink-0 group-hover:text-gray-600 transition-colors" style={{ width: '24px', height: '24px' }} />
                    <div className="flex-1 min-w-0">
                      <h3 className="text-lg font-semibold text-gray-900 mb-1 group-hover:text-gray-600 transition-colors">
                        {dict.tools.encoding.title}
                      </h3>
                      <p className="text-gray-600 text-sm leading-relaxed">
                        {dict.tools.encoding.description}
                      </p>
                    </div>
                  </div>
                </div>
              </Link>

              {/* Time Tools */}
              <Link href="/time" className="group">
                <div className="bg-white border border-gray-300 rounded-lg p-6 hover:bg-gray-100 hover:shadow-lg hover:border-gray-500 transition-all duration-300">
                  <div className="flex items-start space-x-4">
                    <ClockIcon className="w-6 h-6 text-gray-700 flex-shrink-0 group-hover:text-gray-600 transition-colors" style={{ width: '24px', height: '24px' }} />
                    <div className="flex-1 min-w-0">
                      <h3 className="text-lg font-semibold text-gray-900 mb-1 group-hover:text-gray-600 transition-colors">
                        {dict.tools.time.title}
                      </h3>
                      <p className="text-gray-600 text-sm leading-relaxed">
                        {dict.tools.time.description}
                      </p>
                    </div>
                  </div>
                </div>
              </Link>

              {/* Network Tools */}
              <Link href="/network" className="group">
                <div className="bg-white border border-gray-300 rounded-lg p-6 hover:bg-gray-100 hover:shadow-lg hover:border-gray-500 transition-all duration-300">
                  <div className="flex items-start space-x-4">
                    <GlobeAltIcon className="w-6 h-6 text-gray-700 flex-shrink-0 group-hover:text-gray-600 transition-colors" style={{ width: '24px', height: '24px' }} />
                    <div className="flex-1 min-w-0">
                      <h3 className="text-lg font-semibold text-gray-900 mb-1 group-hover:text-gray-600 transition-colors">
                        {dict.tools.network.title}
                      </h3>
                      <p className="text-gray-600 text-sm leading-relaxed">
                        {dict.tools.network.description}
                      </p>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </section>
      <Footer currentLang={locale} dict={dict} />
      
      {/* Quick Scroll Button */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="fixed right-8 bottom-24 z-50 p-3 rounded-full bg-white/80 backdrop-blur-sm border border-gray-200/50 shadow-lg hover:shadow-xl transition-all duration-300 hover:bg-white group"
      >
        <svg 
          className="w-6 h-6 text-gray-600 group-hover:text-blue-600 transition-colors" 
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24"
        >
          <path 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            strokeWidth={2} 
            d="M5 10l7-7m0 0l7 7m-7-7v18" 
          />
        </svg>
      </button>
    </div>
  )
} 
