'use client';

import { useTranslation } from "next-i18next";
import { useState } from "react";
import AdSense from "@/components/ads/AdSense";
import { CheckIcon, DocumentDuplicateIcon as CopyIcon, ArrowUpTrayIcon as UploadIcon } from "@heroicons/react/24/outline";

export default function Base64Encoder() {
  const { t } = useTranslation("common");
  const [inputText, setInputText] = useState("");
  const [outputText, setOutputText] = useState("");
  const [file, setFile] = useState<File | null>(null);
  const [isCopied, setIsCopied] = useState(false);

  const encodeText = () => {
    if (inputText) {
      setOutputText(btoa(inputText));
    }
  };

  const decodeText = () => {
    if (outputText) {
      try {
        setOutputText(atob(outputText));
      } catch (error) {
        console.error("Invalid Base64 string");
      }
    }
  };

  const encodeFile = async () => {
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        if (e.target?.result) {
          setOutputText(btoa(e.target.result.toString()));
        }
      };
      reader.readAsBinaryString(file);
    }
  };

  const copyToClipboard = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy:", err);
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="space-y-8">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
            {t("navigation.base64Encoder")}
          </h1>
          <p className="text-gray-600 dark:text-gray-400">
            Encode and decode text using Base64 encoding
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="neu-card p-6">
            <h2 className="text-xl font-semibold mb-4">Input</h2>
            <div className="space-y-4">
              <AdSense />
              <textarea
                value={inputText}
                onChange={(e) => {
                  setInputText(e.target.value);
                  setFile(null);
                }}
                rows={10}
                className="w-full p-4 rounded-lg bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter text or Base64 string here..."
              />
              <div className="flex items-center space-x-4">
                <button
                  onClick={encodeText}
                  className="neu-button hover:bg-blue-700 transition-colors"
                >
                  Encode
                </button>
                <button
                  onClick={decodeText}
                  className="neu-button hover:bg-blue-700 transition-colors"
                >
                  Decode
                </button>
                <button
                  onClick={() => {
                    setInputText("");
                    setFile(null);
                  }}
                  className="neu-button hover:bg-blue-700 transition-colors"
                >
                  Clear
                </button>
              </div>

              <div className="mt-4">
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                  Upload File
                </label>
                <input
                  type="file"
                  onChange={(e) => {
                    const selectedFile = e.target.files?.[0];
                    if (selectedFile) {
                      setInputText("");
                      setFile(selectedFile);
                      encodeFile();
                    }
                  }}
                  className="mt-1 block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
                />
              </div>
            </div>
          </div>

          <div className="neu-card p-6">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-semibold">Output</h2>
              <button
                onClick={() => copyToClipboard(outputText)}
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
              value={outputText}
              readOnly
              rows={10}
              className="w-full p-4 rounded-lg bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
