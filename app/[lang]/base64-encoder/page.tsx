'use client'

import { useState } from 'react'
import { DocumentDuplicateIcon, ArrowPathIcon } from '@heroicons/react/24/outline'

export default function Base64Encoder() {
  const [input, setInput] = useState('')
  const [output, setOutput] = useState('')
  const [activeTab, setActiveTab] = useState<'encode' | 'decode'>('encode')
  const [copied, setCopied] = useState(false)

  const handleEncode = () => {
    try {
      const encoded = btoa(unescape(encodeURIComponent(input)))
      setOutput(encoded)
    } catch {
      setOutput('인코딩 중 오류가 발생했습니다.')
    }
  }

  const handleDecode = () => {
    try {
      const decoded = decodeURIComponent(escape(atob(input)))
      setOutput(decoded)
    } catch {
      setOutput('유효하지 않은 Base64 문자열입니다.')
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

  return (
    <div className="max-w-4xl mx-auto py-8 space-y-8">
      {/* Header */}
      <div>
        <h1 className="text-2xl font-bold text-[var(--text-primary)] mb-2">
          Base64 인코더/디코더
        </h1>
        <p className="text-[var(--text-secondary)]">
          텍스트를 Base64로 인코딩하거나 Base64를 텍스트로 디코딩합니다.
        </p>
      </div>

      {/* Tabs */}
      <div className="flex space-x-1 p-1 bg-[var(--surface-hover)] rounded-lg w-fit">
        <button
          onClick={() => setActiveTab('encode')}
          className={activeTab === 'encode' ? 'toss-tab-active' : 'toss-tab'}
        >
          인코딩
        </button>
        <button
          onClick={() => setActiveTab('decode')}
          className={activeTab === 'decode' ? 'toss-tab-active' : 'toss-tab'}
        >
          디코딩
        </button>
      </div>

      {/* Main Content */}
      <div className="grid md:grid-cols-2 gap-6">
        {/* Input Section */}
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <label className="text-sm font-medium text-[var(--text-primary)]">
              {activeTab === 'encode' ? '텍스트 입력' : 'Base64 입력'}
            </label>
            <span className="text-xs text-[var(--text-tertiary)]">UTF-8</span>
          </div>
          <textarea
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder={activeTab === 'encode' ? '인코딩할 텍스트를 입력하세요' : '디코딩할 Base64를 입력하세요'}
            className="toss-textarea h-64 font-mono text-sm"
          />
        </div>

        {/* Output Section */}
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <label className="text-sm font-medium text-[var(--text-primary)]">
              {activeTab === 'encode' ? 'Base64 결과' : '텍스트 결과'}
            </label>
            <button
              onClick={handleCopy}
              disabled={!output}
              className="flex items-center space-x-1 text-xs text-[var(--primary)] hover:text-[var(--primary-hover)] disabled:text-[var(--text-tertiary)] disabled:cursor-not-allowed transition-colors"
            >
              <DocumentDuplicateIcon className="w-4 h-4" />
              <span>{copied ? '복사됨' : '복사'}</span>
            </button>
          </div>
          <textarea
            value={output}
            readOnly
            placeholder="결과가 여기에 표시됩니다"
            className="toss-textarea h-64 font-mono text-sm bg-[var(--surface-hover)]"
          />
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex justify-center space-x-3">
        <button
          onClick={handleConvert}
          className="toss-button-primary flex items-center space-x-2"
        >
          <ArrowPathIcon className="w-4 h-4" />
          <span>{activeTab === 'encode' ? '인코딩' : '디코딩'}</span>
        </button>
        <button
          onClick={handleClear}
          className="toss-button"
        >
          초기화
        </button>
      </div>

      {/* Info Section */}
      <div className="space-y-6 border-t border-[var(--border)] pt-8">
        <div>
          <h2 className="text-lg font-semibold text-[var(--text-primary)] mb-3">Base64란?</h2>
          <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
            Base64는 바이너리 데이터를 ASCII 문자열로 표현하는 인코딩 방식입니다. 
            주로 이메일 첨부파일, 데이터 URL, API 통신 등에서 바이너리 데이터를 
            텍스트 형태로 전송해야 할 때 사용됩니다.
          </p>
        </div>

        <div>
          <h3 className="text-sm font-semibold text-[var(--text-primary)] mb-2">예시</h3>
          <div className="space-y-2">
            <div className="toss-card p-3">
              <p className="text-xs text-[var(--text-tertiary)] mb-1">원본</p>
              <code className="text-sm font-mono">Hello, World!</code>
            </div>
            <div className="toss-card p-3">
              <p className="text-xs text-[var(--text-tertiary)] mb-1">Base64</p>
              <code className="text-sm font-mono">SGVsbG8sIFdvcmxkIQ==</code>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 