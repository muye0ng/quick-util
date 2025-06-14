'use client';

import { useTranslation } from "next-i18next";
import { useState } from "react";
import { CopyIcon, CheckIcon } from "@heroicons/react/outline";
import AdSense from "@/components/ads/AdSense";

export default function JsonFormatter() {
  const { t } = useTranslation("common");
  const [inputJson, setInputJson] = useState("");
  const [outputJson, setOutputJson] = useState("");
  const [error, setError] = useState("");
  const [isCopied, setIsCopied] = useState(false);

  const formatJson = () => {
    try {
      const parsed = JSON.parse(inputJson);
      const formatted = JSON.stringify(parsed, null, 2);
      setOutputJson(formatted);
      setError("");
    } catch (err) {
      setError(err instanceof Error ? err.message : "Invalid JSON");
    }
  };

  const minifyJson = () => {
    try {
      const parsed = JSON.parse(inputJson);
      const minified = JSON.stringify(parsed);
      setOutputJson(minified);
      setError("");
    } catch (err) {
      setError(err instanceof Error ? err.message : "Invalid JSON");
    }
  };

  const copyToClipboard = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy text: ", err);
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="space-y-8">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
            {t("navigation.jsonFormatter")}
          </h1>
          <p className="text-gray-600 dark:text-gray-400">
            Format, validate and minify JSON data
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="neu-card p-6">
            <h2 className="text-xl font-semibold mb-4">Input JSON</h2>
            <div className="space-y-4">
              <AdSense />
              <textarea
                value={inputJson}
                onChange={(e) => {
                  setInputJson(e.target.value);
                  setError("");
                }}
                rows={15}
                className="w-full p-4 rounded-lg bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter JSON data here..."
              />
            </div>
          </div>

          <div className="neu-card p-6">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-semibold">Output JSON</h2>
              <button
                onClick={() => copyToClipboard(outputJson)}
                className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              >
                {isCopied ? (
                  <CheckIcon className="h-5 w-5 text-green-500" />
                ) : (
                  <CopyIcon className="h-5 w-5" />
                )}
              </button>
            </div>
            <textarea
              value={outputJson}
              readOnly
              rows={15}
              className="w-full p-4 rounded-lg bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="flex space-x-4">
            <button
              onClick={formatJson}
              className="neu-button hover:bg-blue-700 transition-colors"
            >
              Format
            </button>
            <button
              onClick={minifyJson}
              className="neu-button hover:bg-blue-700 transition-colors"
            >
              Minify
            </button>
            <button
              onClick={() => {
                setInputJson("");
                setOutputJson("");
                setError("");
              }}
              className="neu-button hover:bg-blue-700 transition-colors"
            >
              Clear
            </button>
          </div>

          {error && (
            <div className="bg-red-50 dark:bg-red-900 p-4 rounded-lg border border-red-200 dark:border-red-800">
              <p className="text-red-700 dark:text-red-300">{error}</p>
            </div>
          )}
          <AdSense />
        </div>
      </div>
    </div>
  );
}
