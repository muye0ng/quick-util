'use client';

import { useTranslation } from "next-i18next";
import { useState, useRef } from "react";
import { CopyIcon, CheckIcon } from "@heroicons/react/outline";
import { QRCode } from 'qrcode.react';
import AdSense from "@/components/ads/AdSense";

export default function QrCodeGenerator() {
  const { t } = useTranslation("common");
  const [inputText, setInputText] = useState("");
  const [size, setSize] = useState(256);
  const [color, setColor] = useState("#000000");
  const [backgroundColor, setBackgroundColor] = useState("#ffffff");
  const qrRef = useRef<HTMLDivElement>(null);
  const [isCopied, setIsCopied] = useState(false);

  const downloadQR = () => {
    const canvas = qrRef.current?.querySelector('canvas');
    if (canvas) {
      const link = document.createElement('a');
      link.download = 'qrcode.png';
      link.href = canvas.toDataURL('image/png');
      link.click();
    }
  };

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(inputText);
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
            {t("navigation.qrCodeGenerator")}
          </h1>
          <p className="text-gray-600 dark:text-gray-400">
            Generate QR codes from text or URLs
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="neu-card p-6">
            <h2 className="text-xl font-semibold mb-4">Input</h2>
            <div className="space-y-4">
              <AdSense />
              <textarea
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                rows={4}
                className="w-full p-4 rounded-lg bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter text or URL here..."
              />
              
              <div className="flex justify-between items-center">
                <div className="flex space-x-4">
                  <button
                    onClick={copyToClipboard}
                    className="neu-button hover:bg-blue-700 transition-colors"
                  >
                    {isCopied ? (
                      <span className="flex items-center space-x-1">
                        <CheckIcon className="h-5 w-5 text-green-500" />
                        <span>Copied!</span>
                      </span>
                    ) : (
                      <span className="flex items-center space-x-1">
                        <CopyIcon className="h-5 w-5" />
                        <span>Copy</span>
                      </span>
                    )}
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
          </div>

          <div className="neu-card p-6">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-semibold">QR Code</h2>
              <div className="flex items-center space-x-4">
                <label className="text-sm font-medium text-gray-700 dark:text-gray-300">
                  Size
                </label>
                <input
                  type="number"
                  value={size}
                  onChange={(e) => setSize(parseInt(e.target.value))}
                  className="w-24 p-2 rounded-lg bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>
            <div className="flex justify-center">
              <QRCode
                value={inputText}
                size={size}
                bgColor={backgroundColor}
                fgColor={color}
              />
            </div>

            <div className="mt-4 flex justify-between items-center">
              <div className="flex space-x-4">
                <div className="flex flex-col">
                  <label className="text-sm font-medium text-gray-700 dark:text-gray-300">
                    Background Color
                  </label>
                  <input
                    type="color"
                    value={backgroundColor}
                    onChange={(e) => setBackgroundColor(e.target.value)}
                    className="w-full mt-1"
                  />
                </div>
                <div className="flex justify-center">
                  <button
                    onClick={downloadQR}
                    className="neu-button hover:bg-blue-700 transition-colors"
                  >
                    <span className="flex items-center space-x-1">
                      <CopyIcon className="w-5 h-5 ml-2" />
                      <span>Download PNG</span>
                    </span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
