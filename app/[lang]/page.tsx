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
    title: dict?.common?.title ?? 'QuickUtil',
    description: dict?.common?.description ?? '',
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
            {dict.main.description}
          </p>
        </div>
      </section>

      {/* Tools Grid */}
      <section className="relative py-20 bg-gradient-to-br from-blue-50 via-white to-purple-50">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-50/30 to-transparent"></div>
        <div className="max-w-7xl mx-auto px-6 py-12 relative">
          <div className="text-center mb-20">
            <h2 className="text-4xl lg:text-5xl font-black text-gray-900 mb-6">
              {dict.main.headline1}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                {dict.main.headline2}
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              {dict.main.subDescription}
            </p>
          </div>
          
          {/* 데이터처리 */}
          <div className="mb-20">
            <div className="flex items-center min-h-[56px] pl-1 pr-1 mb-10">
              <div className="w-1 h-8 bg-gradient-to-b from-blue-500 to-blue-600 rounded-full mr-4"></div>
              <h3 className="text-2xl font-bold text-gray-900 py-2">
                {dict.category.data}
              </h3>
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
              <Link href={`/${lang}/base64-encoder`} className="group">
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
              <Link href={`/${lang}/url-encoder`} className="group">
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
              <Link href={`/${lang}/csv-to-json`} className="group">
                <div className="bg-white border border-gray-300 rounded-lg p-6 hover:bg-gray-100 hover:shadow-lg hover:border-blue-500 transition-all duration-300">
                  <div className="flex items-start space-x-4">
                    <DocumentDuplicateIcon className="w-6 h-6 text-gray-700 flex-shrink-0 group-hover:text-blue-600 transition-colors" style={{ width: '24px', height: '24px' }} />
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
              <Link href={`/${lang}/xml-formatter`} className="group">
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
              <h3 className="text-2xl font-bold text-gray-900 py-2">{dict.category.file}</h3>
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
              <Link href={`/${lang}/image-converter`} className="group">
                <div className="bg-white border border-gray-300 rounded-lg p-6 hover:bg-gray-100 hover:shadow-lg hover:border-yellow-500 transition-all duration-300">
                  <div className="flex items-start space-x-4">
                    <PhotoIcon2 className="w-6 h-6 text-gray-700 flex-shrink-0 group-hover:text-yellow-600 transition-colors" style={{ width: '24px', height: '24px' }} />
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

              {/* Audio Converter */}
              <Link href={`/${lang}/audio-converter`} className="group">
                <div className="bg-white border border-gray-300 rounded-lg p-6 hover:bg-gray-100 hover:shadow-lg hover:border-yellow-500 transition-all duration-300">
                  <div className="flex items-start space-x-4">
                    <MusicalNoteIcon className="w-6 h-6 text-gray-700 flex-shrink-0 group-hover:text-yellow-600 transition-colors" style={{ width: '24px', height: '24px' }} />
                    <div className="flex-1 min-w-0">
                      <h3 className="text-lg font-semibold text-gray-900 mb-1 group-hover:text-yellow-600 transition-colors">
                        {dict.tools.audioConverter.title}
                      </h3>
                      <p className="text-gray-600 text-sm leading-relaxed">
                        {dict.tools.audioConverter.description}
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
                        {dict.tools.videoConverter.title}
                      </h3>
                      <p className="text-gray-600 text-sm leading-relaxed">
                        {dict.tools.videoConverter.description}
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
                        {dict.tools.documentConverter.title}
                      </h3>
                      <p className="text-gray-600 text-sm leading-relaxed">
                        {dict.tools.documentConverter.description}
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
                        {dict.tools.archiveTools.title}
                      </h3>
                      <p className="text-gray-600 text-sm leading-relaxed">
                        {dict.tools.archiveTools.description}
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
              <h3 className="text-2xl font-bold text-gray-900 py-2">{dict.category.image}</h3>
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
                        {dict.tools.qrCodeGenerator.title}
                      </h3>
                      <p className="text-gray-600 text-sm leading-relaxed">
                        {dict.tools.qrCodeGenerator.description}
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
                        {dict.tools.imageConverter.title}
                      </h3>
                      <p className="text-gray-600 text-sm leading-relaxed">
                        {dict.tools.imageConverter.description}
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
                        {dict.tools.faviconGenerator.title}
                      </h3>
                      <p className="text-gray-600 text-sm leading-relaxed">
                        {dict.tools.faviconGenerator.description}
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
              <h3 className="text-2xl font-bold text-gray-900 py-2">{dict.category.security}</h3>
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
                        {dict.tools.passwordGenerator.title}
                      </h3>
                      <p className="text-gray-600 text-sm leading-relaxed">
                        {dict.tools.passwordGenerator.description}
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
                        {dict.tools.hashGenerator.title}
                      </h3>
                      <p className="text-gray-600 text-sm leading-relaxed">
                        {dict.tools.hashGenerator.description}
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
                        {dict.tools.uuidGenerator.title}
                      </h3>
                      <p className="text-gray-600 text-sm leading-relaxed">
                        {dict.tools.uuidGenerator.description}
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
                        {dict.tools.jwtDecoder.title}
                      </h3>
                      <p className="text-gray-600 text-sm leading-relaxed">
                        {dict.tools.jwtDecoder.description}
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
              <h3 className="text-2xl font-bold text-gray-900 py-2">{dict.category.other}</h3>
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
              <Link href={`/${lang}/encoding`} className="group">
                <div className="bg-white border border-gray-300 rounded-lg p-6 hover:bg-gray-100 hover:shadow-lg hover:border-gray-500 transition-all duration-300">
                  <div className="flex items-start space-x-4">
                    <CodeBracketIcon className="w-6 h-6 text-gray-700 flex-shrink-0 group-hover:text-gray-600 transition-colors" style={{ width: '24px', height: '24px' }} />
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
              <Link href={`/${lang}/time`} className="group">
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
              <Link href={`/${lang}/network`} className="group">
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
    </div>
  )
} 