'use client';

import { useTranslation } from "next-i18next";
import { useState } from "react";
import { CopyIcon, CheckIcon } from "@heroicons/react/outline";
import { createHash } from 'crypto';
import AdSense from "@/components/ads/AdSense";

export default function HashGenerator() {
  const { t } = useTranslation("common");
  const [inputText, setInputText] = useState("");
  const [hashType, setHashType] = useState("md5");
  const [outputHash, setOutputHash] = useState("");
  const [isCopied, setIsCopied] = useState(false);
  const [isUpperCase, setIsUpperCase] = useState(true);

  const hashTypes = [
    { value: "md5", label: "MD5" },
    { value: "sha1", label: "SHA1" },
    { value: "sha256", label: "SHA256" },
    { value: "sha512", label: "SHA512" },
  ];

  const generateHash = () => {
    const hash = createHash(hashType);
    hash.update(inputText);
    const result = hash.digest("hex");
    setOutputHash(isUpperCase ? result.toUpperCase() : result.toLowerCase());
  };

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(outputHash);
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy text: ", err);
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">{t("navigation.hashGenerator")}</h1>
      <div className="max-w-2xl mx-auto">
        <div className="space-y-4">
          <AdSense />
          <div className="space-y-4">
            <div className="neu-card p-6">
              <h2 className="text-xl font-semibold mb-4">Input</h2>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Hash Type
                  </label>
                  <select
                    value={hashType}
                    onChange={(e) => setHashType(e.target.value)}
                    className="w-full p-2 rounded-lg bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    {hashTypes.map((type) => (
                      <option key={type.value} value={type.value}>
                        {type.label}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="flex items-center space-x-4">
                  <input
                    type="checkbox"
                    id="uppercase"
                    checked={isUpperCase}
                    onChange={(e) => setIsUpperCase(e.target.checked)}
                    className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                  />
                  <label htmlFor="uppercase" className="text-sm text-gray-700 dark:text-gray-300">
                    Uppercase
                  </label>
                </div>

                <textarea
                  value={inputText}
                  onChange={(e) => setInputText(e.target.value)}
                  rows={10}
                  className="w-full p-4 rounded-lg bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter text to hash..."
                />
                
                <div className="flex items-center space-x-4">
                  <button
                    onClick={generateHash}
                    className="neu-button hover:bg-blue-700 transition-colors"
                  >
                    Generate Hash
                  </button>
                  <button
                    onClick={() => setInputText("")}
                    className="neu-button hover:bg-blue-700 transition-colors"
                  >
                    Clear
                  </button>
                </div>
              </div>
            </div>

            <div className="neu-card p-6">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-semibold">Output</h2>
                <button
                  onClick={copyToClipboard}
                  className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                >
                  {isCopied ? (
                    <CheckIcon className="h-5 w-5 text-green-500" />
                  ) : (
                    <CopyIcon className="h-5 w-5" />
                  )}
                </button>
              </div>
              <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-4">
                <p className="text-sm text-gray-700 dark:text-gray-300 mb-2">
                  {hashType.toUpperCase()} Hash:
                </p>
                <textarea
                  value={outputHash}
                  readOnly
                  rows={1}
                  className="w-full p-2 rounded bg-white dark:bg-gray-700 border border-gray-200 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
