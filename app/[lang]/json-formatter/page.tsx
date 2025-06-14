'use client'

import { useState } from 'react'
import { useTranslations } from 'next-intl'

export default function JsonFormatter() {
  const t = useTranslations()
  const [input, setInput] = useState('')
  const [output, setOutput] = useState('')
  const [error, setError] = useState('')

  const formatJson = () => {
    try {
      const parsed = JSON.parse(input)
      const formatted = JSON.stringify(parsed, null, 2)
      setOutput(formatted)
      setError('')
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Invalid JSON')
    }
  }

  const minifyJson = () => {
    try {
      const parsed = JSON.parse(input)
      const minified = JSON.stringify(parsed)
      setOutput(minified)
      setError('')
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Invalid JSON')
    }
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="space-y-8">
        <div className="text-center">
          <h1 className="text-3xl font-bold mb-4">{t('tools.jsonFormatter.title')}</h1>
          <p className="text-gray-600">{t('tools.jsonFormatter.description')}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-4">
            <h2 className="text-xl font-semibold">{t('tools.jsonFormatter.input')}</h2>
            <textarea
              value={input}
              onChange={(e) => {
                setInput(e.target.value)
                setError('')
              }}
              rows={15}
              className="w-full p-4 rounded-lg bg-white border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter JSON data here..."
            />
          </div>

          <div className="space-y-4">
            <h2 className="text-xl font-semibold">{t('tools.jsonFormatter.output')}</h2>
            <textarea
              value={output}
              readOnly
              rows={15}
              className="w-full p-4 rounded-lg bg-white border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>

        <div className="flex space-x-4 justify-center bg-gray-50 p-4 rounded-lg">
          <button
            onClick={formatJson}
            className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
          >
            {t('tools.jsonFormatter.format')}
          </button>
          <button
            onClick={minifyJson}
            className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
          >
            {t('tools.jsonFormatter.minify')}
          </button>
          <button
            onClick={() => {
              setInput('')
              setOutput('')
              setError('')
            }}
            className="px-4 py-2 bg-gray-500 text-white rounded-lg hover:bg-gray-600 transition-colors"
          >
            {t('tools.jsonFormatter.clear')}
          </button>
        </div>

        {error && (
          <div className="bg-red-50 p-4 rounded-lg border border-red-200">
            <p className="text-red-700">{error}</p>
          </div>
        )}
      </div>
    </div>
  )
} 