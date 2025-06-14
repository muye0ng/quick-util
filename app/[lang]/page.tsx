import { Metadata } from 'next'
import Link from 'next/link'
import { getDictionary } from '../i18n/utils'
import { ValidLocale } from '../i18n/settings'
import { 
  DocumentTextIcon,
  LockClosedIcon,
  QrCodeIcon,
  LinkIcon,
  FingerPrintIcon,
  HashtagIcon,
  KeyIcon,
  PhotoIcon,
  DocumentDuplicateIcon,
  DocumentIcon,
  CodeBracketIcon,
  ClockIcon,
  GlobeAltIcon,
  DocumentArrowDownIcon,
  PhotoIcon as PhotoIcon2,
  MusicalNoteIcon,
  VideoCameraIcon,
  DocumentTextIcon as DocumentTextIcon2,
  ArchiveBoxIcon
} from '@heroicons/react/24/outline'


export async function generateMetadata({ params }: { params: Promise<{ lang: ValidLocale }> }): Promise<Metadata> {
  const { lang } = await params
  const dict = await getDictionary(lang)
  return {
    title: dict.common.title,
    description: dict.common.description,
  }
}

export default async function Home({
  params
}: {
  params: Promise<{ lang: ValidLocale }>
}) {
  const { lang } = await params
  const dict = await getDictionary(lang)

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50">
      {/* Hero Section */}
      <section className="relative pt-48 pb-20 bg-gradient-to-br from-blue-50 via-white to-purple-50">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-50/30 to-transparent"></div>
        <div className="max-w-7xl mx-auto px-6 py-12 text-center relative">
          <h1 className="text-5xl lg:text-7xl font-black text-gray-900 mb-8 leading-tight">
            Quick<span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Util</span>
          </h1>
          <p className="text-xl lg:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            개발자를 위한 필수 유틸리티 도구들을 한 곳에서 빠르고 안전하게 사용하세요
          </p>
        </div>
      </section>

      {/* Tools Grid */}
      <section className="relative py-20 bg-gradient-to-br from-blue-50 via-white to-purple-50">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-50/30 to-transparent"></div>
        <div className="max-w-7xl mx-auto px-6 py-12 relative">
          <div className="text-center mb-20">
            <h2 className="text-4xl lg:text-5xl font-black text-gray-900 mb-6">
              모든 도구를 <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">한 곳에서</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              브라우저에서 바로 사용할 수 있는 강력한 개발 도구들
            </p>
          </div>
          
          {/* 데이터처리 */}
          <div className="mb-20">
            <div className="flex items-center min-h-[56px] pl-1 pr-1 mb-10">
              <div className="w-1 h-8 bg-gradient-to-b from-blue-500 to-blue-600 rounded-full mr-4"></div>
              <h3 className="text-2xl font-bold text-gray-900 py-2">데이터처리</h3>
              <div className="flex-1 h-px bg-gradient-to-r from-blue-200 to-transparent ml-6"></div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* JSON Formatter */}
              <Link href={`/${lang}/json-formatter`} className="group">
                <div className="bg-white border border-gray-300 rounded-lg p-6 hover:bg-gray-100 hover:shadow-lg hover:border-blue-500 transition-all duration-300">
                  <div className="flex items-start space-x-4">
                    <DocumentTextIcon className="w-6 h-6 text-gray-700 flex-shrink-0 group-hover:text-blue-600 transition-colors" style={{ width: '24px', height: '24px' }} />
                    <div className="flex-1 min-w-0">
                      <h3 className="text-lg font-semibold text-gray-900 mb-1 group-hover:text-blue-600 transition-colors">
                        JSON 포맷터
                      </h3>
                      <p className="text-gray-600 text-sm leading-relaxed">
                        JSON 데이터를 보기 좋게 정렬하고, 유효성을 검사하며, 압축/해제할 수 있습니다
                      </p>
                    </div>
                  </div>
                </div>
              </Link>

              {/* Base64 Encoder */}
              <Link href={`/${lang}/base64-encoder`} className="group">
                <div className="bg-white border border-gray-300 rounded-lg p-6 hover:bg-gray-100 hover:shadow-lg hover:border-green-500 transition-all duration-300">
                  <div className="flex items-start space-x-4">
                    <LockClosedIcon className="w-6 h-6 text-gray-700 flex-shrink-0 group-hover:text-green-600 transition-colors" style={{ width: '24px', height: '24px' }} />
                    <div className="flex-1 min-w-0">
                      <h3 className="text-lg font-semibold text-gray-900 mb-1 group-hover:text-green-600 transition-colors">
                        Base64 인코더
                      </h3>
                      <p className="text-gray-600 text-sm leading-relaxed">
                        텍스트와 이미지, 파일을 Base64로 인코딩하고 디코딩할 수 있습니다
                      </p>
                    </div>
                  </div>
                </div>
              </Link>

              {/* URL Encoder */}
              <Link href={`/${lang}/url-encoder`} className="group">
                <div className="bg-white border border-gray-300 rounded-lg p-6 hover:bg-gray-100 hover:shadow-lg hover:border-orange-500 transition-all duration-300">
                  <div className="flex items-start space-x-4">
                    <LinkIcon className="w-6 h-6 text-gray-700 flex-shrink-0 group-hover:text-orange-600 transition-colors" style={{ width: '24px', height: '24px' }} />
                    <div className="flex-1 min-w-0">
                      <h3 className="text-lg font-semibold text-gray-900 mb-1 group-hover:text-orange-600 transition-colors">
                        URL 인코더
                      </h3>
                      <p className="text-gray-600 text-sm leading-relaxed">
                        URL의 특수문자를 인코딩하고 디코딩하여 안전하게 사용할 수 있습니다
                      </p>
                    </div>
                  </div>
                </div>
              </Link>

              {/* CSV to JSON */}
              <Link href={`/${lang}/csv-to-json`} className="group">
                <div className="bg-white border border-gray-300 rounded-lg p-6 hover:bg-gray-100 hover:shadow-lg hover:border-blue-500 transition-all duration-300">
                  <div className="flex items-start space-x-4">
                    <DocumentDuplicateIcon className="w-6 h-6 text-gray-700 flex-shrink-0 group-hover:text-blue-600 transition-colors" style={{ width: '24px', height: '24px' }} />
                    <div className="flex-1 min-w-0">
                      <h3 className="text-lg font-semibold text-gray-900 mb-1 group-hover:text-blue-600 transition-colors">
                        CSV 변환기
                      </h3>
                      <p className="text-gray-600 text-sm leading-relaxed">
                        CSV 파일을 JSON으로 변환하고, JSON을 CSV로 내보낼 수 있습니다
                      </p>
                    </div>
                  </div>
                </div>
              </Link>

              {/* XML Formatter */}
              <Link href={`/${lang}/xml-formatter`} className="group">
                <div className="bg-white border border-gray-300 rounded-lg p-6 hover:bg-gray-100 hover:shadow-lg hover:border-blue-500 transition-all duration-300">
                  <div className="flex items-start space-x-4">
                    <DocumentTextIcon className="w-6 h-6 text-gray-700 flex-shrink-0 group-hover:text-blue-600 transition-colors" style={{ width: '24px', height: '24px' }} />
                    <div className="flex-1 min-w-0">
                      <h3 className="text-lg font-semibold text-gray-900 mb-1 group-hover:text-blue-600 transition-colors">
                        XML 포맷터
                      </h3>
                      <p className="text-gray-600 text-sm leading-relaxed">
                        XML 데이터를 보기 좋게 정렬하고, 유효성을 검사할 수 있습니다
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
              <h3 className="text-2xl font-bold text-gray-900 py-2">파일</h3>
              <div className="flex-1 h-px bg-gradient-to-r from-yellow-200 to-transparent ml-6"></div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* PDF Tools */}
              <Link href={`/${lang}/pdf-tools`} className="group">
                <div className="bg-white border border-gray-300 rounded-lg p-6 hover:bg-gray-100 hover:shadow-lg hover:border-yellow-500 transition-all duration-300">
                  <div className="flex items-start space-x-4">
                    <span className="w-6 h-6 flex-shrink-0 group-hover:text-yellow-600 transition-colors" style={{ display: 'inline-block' }}>
                      <img src="/pdficon.svg" alt="PDF 아이콘" width={24} height={24} style={{ display: 'block' }} />
                    </span>
                    <div className="flex-1 min-w-0">
                      <h3 className="text-lg font-semibold text-gray-900 mb-1 group-hover:text-yellow-600 transition-colors">
                        PDF 도구
                      </h3>
                      <p className="text-gray-600 text-sm leading-relaxed">
                        PDF 병합, 분할, 이미지 변환, 페이지 회전 등 다양한 PDF 작업을 할 수 있습니다
                      </p>
                    </div>
                  </div>
                </div>
              </Link>

              {/* Image Converter */}
              <Link href={`/${lang}/image-converter`} className="group">
                <div className="bg-white border border-gray-300 rounded-lg p-6 hover:bg-gray-100 hover:shadow-lg hover:border-yellow-500 transition-all duration-300">
                  <div className="flex items-start space-x-4">
                    <PhotoIcon2 className="w-6 h-6 text-gray-700 flex-shrink-0 group-hover:text-yellow-600 transition-colors" style={{ width: '24px', height: '24px' }} />
                    <div className="flex-1 min-w-0">
                      <h3 className="text-lg font-semibold text-gray-900 mb-1 group-hover:text-yellow-600 transition-colors">
                        이미지 변환기
                      </h3>
                      <p className="text-gray-600 text-sm leading-relaxed">
                        JPG, PNG, WebP, ICO, SVG 등 다양한 이미지 포맷을 변환하고 최적화할 수 있습니다
                      </p>
                    </div>
                  </div>
                </div>
              </Link>

              {/* Audio Converter */}
              <Link href={`/${lang}/audio-converter`} className="group">
                <div className="bg-white border border-gray-300 rounded-lg p-6 hover:bg-gray-100 hover:shadow-lg hover:border-yellow-500 transition-all duration-300">
                  <div className="flex items-start space-x-4">
                    <MusicalNoteIcon className="w-6 h-6 text-gray-700 flex-shrink-0 group-hover:text-yellow-600 transition-colors" style={{ width: '24px', height: '24px' }} />
                    <div className="flex-1 min-w-0">
                      <h3 className="text-lg font-semibold text-gray-900 mb-1 group-hover:text-yellow-600 transition-colors">
                        오디오 변환기
                      </h3>
                      <p className="text-gray-600 text-sm leading-relaxed">
                        MP3, WAV, OGG, AAC 등 다양한 오디오 포맷을 변환하고 품질을 조절할 수 있습니다
                      </p>
                    </div>
                  </div>
                </div>
              </Link>

              {/* Video Converter */}
              <Link href={`/${lang}/video-converter`} className="group">
                <div className="bg-white border border-gray-300 rounded-lg p-6 hover:bg-gray-100 hover:shadow-lg hover:border-yellow-500 transition-all duration-300">
                  <div className="flex items-start space-x-4">
                    <VideoCameraIcon className="w-6 h-6 text-gray-700 flex-shrink-0 group-hover:text-yellow-600 transition-colors" style={{ width: '24px', height: '24px' }} />
                    <div className="flex-1 min-w-0">
                      <h3 className="text-lg font-semibold text-gray-900 mb-1 group-hover:text-yellow-600 transition-colors">
                        비디오 변환기
                      </h3>
                      <p className="text-gray-600 text-sm leading-relaxed">
                        MP4, WebM, MOV 등 다양한 비디오 포맷을 변환하고 압축할 수 있습니다
                      </p>
                    </div>
                  </div>
                </div>
              </Link>

              {/* Document Converter */}
              <Link href={`/${lang}/document-converter`} className="group">
                <div className="bg-white border border-gray-300 rounded-lg p-6 hover:bg-gray-100 hover:shadow-lg hover:border-yellow-500 transition-all duration-300">
                  <div className="flex items-start space-x-4">
                    <DocumentTextIcon2 className="w-6 h-6 text-gray-700 flex-shrink-0 group-hover:text-yellow-600 transition-colors" style={{ width: '24px', height: '24px' }} />
                    <div className="flex-1 min-w-0">
                      <h3 className="text-lg font-semibold text-gray-900 mb-1 group-hover:text-yellow-600 transition-colors">
                        문서 변환기
                      </h3>
                      <p className="text-gray-600 text-sm leading-relaxed">
                        Word, Excel, PowerPoint, PDF 등 다양한 문서 포맷을 변환할 수 있습니다
                      </p>
                    </div>
                  </div>
                </div>
              </Link>

              {/* Archive Tools */}
              <Link href={`/${lang}/archive-tools`} className="group">
                <div className="bg-white border border-gray-300 rounded-lg p-6 hover:bg-gray-100 hover:shadow-lg hover:border-yellow-500 transition-all duration-300">
                  <div className="flex items-start space-x-4">
                    <ArchiveBoxIcon className="w-6 h-6 text-gray-700 flex-shrink-0 group-hover:text-yellow-600 transition-colors" style={{ width: '24px', height: '24px' }} />
                    <div className="flex-1 min-w-0">
                      <h3 className="text-lg font-semibold text-gray-900 mb-1 group-hover:text-yellow-600 transition-colors">
                        압축 도구
                      </h3>
                      <p className="text-gray-600 text-sm leading-relaxed">
                        ZIP, RAR, 7Z 등 다양한 압축 파일을 생성하고 압축을 풀 수 있습니다
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
              <h3 className="text-2xl font-bold text-gray-900 py-2">이미지</h3>
              <div className="flex-1 h-px bg-gradient-to-r from-purple-200 to-transparent ml-6"></div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* QR Code Generator */}
              <Link href={`/${lang}/qr-code-generator`} className="group">
                <div className="bg-white border border-gray-300 rounded-lg p-6 hover:bg-gray-100 hover:shadow-lg hover:border-purple-500 transition-all duration-300">
                  <div className="flex items-start space-x-4">
                    <QrCodeIcon className="w-6 h-6 text-gray-700 flex-shrink-0 group-hover:text-purple-600 transition-colors" style={{ width: '24px', height: '24px' }} />
                    <div className="flex-1 min-w-0">
                      <h3 className="text-lg font-semibold text-gray-900 mb-1 group-hover:text-purple-600 transition-colors">
                        QR코드 생성기
                      </h3>
                      <p className="text-gray-600 text-sm leading-relaxed">
                        URL, 텍스트, 연락처, WiFi 정보를 QR 코드로 변환하고 다운로드할 수 있습니다
                      </p>
                    </div>
                  </div>
                </div>
              </Link>

              {/* Image Format Converter */}
              <Link href={`/${lang}/image-converter`} className="group">
                <div className="bg-white border border-gray-300 rounded-lg p-6 hover:bg-gray-100 hover:shadow-lg hover:border-pink-500 transition-all duration-300">
                  <div className="flex items-start space-x-4">
                    <PhotoIcon className="w-6 h-6 text-gray-700 flex-shrink-0 group-hover:text-pink-600 transition-colors" style={{ width: '24px', height: '24px' }} />
                    <div className="flex-1 min-w-0">
                      <h3 className="text-lg font-semibold text-gray-900 mb-1 group-hover:text-pink-600 transition-colors">
                        이미지 변환기
                      </h3>
                      <p className="text-gray-600 text-sm leading-relaxed">
                        JPG, PNG, WebP, GIF 등 다양한 이미지 포맷을 변환하고 최적화할 수 있습니다
                      </p>
                    </div>
                  </div>
                </div>
              </Link>

              {/* Image Resizer */}
              <Link href={`/${lang}/image-resizer`} className="group">
                <div className="bg-white border border-gray-300 rounded-lg p-6 hover:bg-gray-100 hover:shadow-lg hover:border-indigo-500 transition-all duration-300">
                  <div className="flex items-start space-x-4">
                    <PhotoIcon className="w-6 h-6 text-gray-700 flex-shrink-0 group-hover:text-indigo-600 transition-colors" style={{ width: '24px', height: '24px' }} />
                    <div className="flex-1 min-w-0">
                      <h3 className="text-lg font-semibold text-gray-900 mb-1 group-hover:text-indigo-600 transition-colors">
                        이미지 리사이저
                      </h3>
                      <p className="text-gray-600 text-sm leading-relaxed">
                        이미지 크기를 조정하고, 비율을 유지하며, 품질을 조절할 수 있습니다
                      </p>
                    </div>
                  </div>
                </div>
              </Link>

              {/* Favicon Generator */}
              <Link href={`/${lang}/favicon-generator`} className="group">
                <div className="bg-white border border-gray-300 rounded-lg p-6 hover:bg-gray-100 hover:shadow-lg hover:border-yellow-500 transition-all duration-300">
                  <div className="flex items-start space-x-4">
                    <span className="w-6 h-6 flex-shrink-0 group-hover:text-yellow-600 transition-colors" style={{ display: 'inline-block' }}>
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                        <polygon points="12,2 15,9 22,9.5 17,14.5 18.5,22 12,18.5 5.5,22 7,14.5 2,9.5 9,9" />
                      </svg>
                    </span>
                    <div className="flex-1 min-w-0">
                      <h3 className="text-lg font-semibold text-gray-900 mb-1 group-hover:text-yellow-600 transition-colors">
                        파비콘 생성기
                      </h3>
                      <p className="text-gray-600 text-sm leading-relaxed">
                        다양한 아이콘을 파비콘(.ico)으로 변환하고, 웹사이트에 적용할 수 있는 파비콘을 생성합니다
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
              <h3 className="text-2xl font-bold text-gray-900 py-2">보안</h3>
              <div className="flex-1 h-px bg-gradient-to-r from-red-200 to-transparent ml-6"></div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Password Generator */}
              <Link href={`/${lang}/password-generator`} className="group">
                <div className="bg-white border border-gray-300 rounded-lg p-6 hover:bg-gray-100 hover:shadow-lg hover:border-red-500 transition-all duration-300">
                  <div className="flex items-start space-x-4">
                    <KeyIcon className="w-6 h-6 text-gray-700 flex-shrink-0 group-hover:text-red-600 transition-colors" style={{ width: '24px', height: '24px' }} />
                    <div className="flex-1 min-w-0">
                      <h3 className="text-lg font-semibold text-gray-900 mb-1 group-hover:text-red-600 transition-colors">
                        비밀번호 생성기
                      </h3>
                      <p className="text-gray-600 text-sm leading-relaxed">
                        특수문자, 숫자, 대소문자를 포함한 강력한 비밀번호를 생성할 수 있습니다
                      </p>
                    </div>
                  </div>
                </div>
              </Link>

              {/* Hash Generator */}
              <Link href={`/${lang}/hash-generator`} className="group">
                <div className="bg-white border border-gray-300 rounded-lg p-6 hover:bg-gray-100 hover:shadow-lg hover:border-red-500 transition-all duration-300">
                  <div className="flex items-start space-x-4">
                    <HashtagIcon className="w-6 h-6 text-gray-700 flex-shrink-0 group-hover:text-red-600 transition-colors" style={{ width: '24px', height: '24px' }} />
                    <div className="flex-1 min-w-0">
                      <h3 className="text-lg font-semibold text-gray-900 mb-1 group-hover:text-red-600 transition-colors">
                        해시 생성기
                      </h3>
                      <p className="text-gray-600 text-sm leading-relaxed">
                        MD5, SHA1, SHA256, SHA512 등 다양한 해시 알고리즘으로 변환할 수 있습니다
                      </p>
                    </div>
                  </div>
                </div>
              </Link>

              {/* UUID Generator */}
              <Link href={`/${lang}/uuid-generator`} className="group">
                <div className="bg-white border border-gray-300 rounded-lg p-6 hover:bg-gray-100 hover:shadow-lg hover:border-red-500 transition-all duration-300">
                  <div className="flex items-start space-x-4">
                    <FingerPrintIcon className="w-6 h-6 text-gray-700 flex-shrink-0 group-hover:text-red-600 transition-colors" style={{ width: '24px', height: '24px' }} />
                    <div className="flex-1 min-w-0">
                      <h3 className="text-lg font-semibold text-gray-900 mb-1 group-hover:text-red-600 transition-colors">
                        UUID 생성기
                      </h3>
                      <p className="text-gray-600 text-sm leading-relaxed">
                        UUID v1, v4 버전의 고유 식별자를 생성하고 대량으로 복사할 수 있습니다
                      </p>
                    </div>
                  </div>
                </div>
              </Link>

              {/* JWT Decoder */}
              <Link href={`/${lang}/jwt-decoder`} className="group">
                <div className="bg-white border border-gray-300 rounded-lg p-6 hover:bg-gray-100 hover:shadow-lg hover:border-red-500 transition-all duration-300">
                  <div className="flex items-start space-x-4">
                    <LockClosedIcon className="w-6 h-6 text-gray-700 flex-shrink-0 group-hover:text-red-600 transition-colors" style={{ width: '24px', height: '24px' }} />
                    <div className="flex-1 min-w-0">
                      <h3 className="text-lg font-semibold text-gray-900 mb-1 group-hover:text-red-600 transition-colors">
                        JWT 디코더
                      </h3>
                      <p className="text-gray-600 text-sm leading-relaxed">
                        JWT 토큰을 디코딩하고 헤더, 페이로드, 서명을 검증할 수 있습니다
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
              <h3 className="text-2xl font-bold text-gray-900 py-2">기타도구</h3>
              <div className="flex-1 h-px bg-gradient-to-r from-gray-200 to-transparent ml-6"></div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Validation Tools */}
              <Link href={`/${lang}/validation`} className="group">
                <div className="bg-white border border-gray-300 rounded-lg p-6 hover:bg-gray-100 hover:shadow-lg hover:border-gray-500 transition-all duration-300">
                  <div className="flex items-start space-x-4">
                    <DocumentIcon className="w-6 h-6 text-gray-700 flex-shrink-0 group-hover:text-gray-600 transition-colors" style={{ width: '24px', height: '24px' }} />
                    <div className="flex-1 min-w-0">
                      <h3 className="text-lg font-semibold text-gray-900 mb-1 group-hover:text-gray-600 transition-colors">
                        검증
                      </h3>
                      <p className="text-gray-600 text-sm leading-relaxed">
                        JSON 스키마, XML, YAML, CSV 등 다양한 데이터 형식의 유효성을 검사하고 오류를 찾을 수 있습니다
                      </p>
                    </div>
                  </div>
                </div>
              </Link>

              {/* Encoding Tools */}
              <Link href={`/${lang}/encoding`} className="group">
                <div className="bg-white border border-gray-300 rounded-lg p-6 hover:bg-gray-100 hover:shadow-lg hover:border-gray-500 transition-all duration-300">
                  <div className="flex items-start space-x-4">
                    <CodeBracketIcon className="w-6 h-6 text-gray-700 flex-shrink-0 group-hover:text-gray-600 transition-colors" style={{ width: '24px', height: '24px' }} />
                    <div className="flex-1 min-w-0">
                      <h3 className="text-lg font-semibold text-gray-900 mb-1 group-hover:text-gray-600 transition-colors">
                        인코딩
                      </h3>
                      <p className="text-gray-600 text-sm leading-relaxed">
                        HTML 엔티티, 유니코드, URL 컴포넌트 등 다양한 인코딩 방식으로 변환할 수 있습니다
                      </p>
                    </div>
                  </div>
                </div>
              </Link>

              {/* Time Tools */}
              <Link href={`/${lang}/time`} className="group">
                <div className="bg-white border border-gray-300 rounded-lg p-6 hover:bg-gray-100 hover:shadow-lg hover:border-gray-500 transition-all duration-300">
                  <div className="flex items-start space-x-4">
                    <ClockIcon className="w-6 h-6 text-gray-700 flex-shrink-0 group-hover:text-gray-600 transition-colors" style={{ width: '24px', height: '24px' }} />
                    <div className="flex-1 min-w-0">
                      <h3 className="text-lg font-semibold text-gray-900 mb-1 group-hover:text-gray-600 transition-colors">
                        시간
                      </h3>
                      <p className="text-gray-600 text-sm leading-relaxed">
                        Unix 타임스탬프 변환, 날짜 계산, 시간대 변환, 크론 표현식 생성 등을 할 수 있습니다
                      </p>
                    </div>
                  </div>
                </div>
              </Link>

              {/* Network Tools */}
              <Link href={`/${lang}/network`} className="group">
                <div className="bg-white border border-gray-300 rounded-lg p-6 hover:bg-gray-100 hover:shadow-lg hover:border-gray-500 transition-all duration-300">
                  <div className="flex items-start space-x-4">
                    <GlobeAltIcon className="w-6 h-6 text-gray-700 flex-shrink-0 group-hover:text-gray-600 transition-colors" style={{ width: '24px', height: '24px' }} />
                    <div className="flex-1 min-w-0">
                      <h3 className="text-lg font-semibold text-gray-900 mb-1 group-hover:text-gray-600 transition-colors">
                        네트워크
                      </h3>
                      <p className="text-gray-600 text-sm leading-relaxed">
                        IP 정보 조회, DNS 레코드 검사, SSL 인증서 확인, 포트 스캔 등을 할 수 있습니다
                      </p>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
} 