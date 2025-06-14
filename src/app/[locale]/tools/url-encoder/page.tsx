'use client';

import { useTranslation } from "next-i18next";
import { useState } from "react";
import { CopyIcon, CheckIcon } from "@heroicons/react/outline";
import AdSense from "@/components/ads/AdSense";

export default function UrlEncoder() {
  const { t } = useTranslation("common");
  const [inputText, setInputText] = useState("");
  const [outputText, setOutputText] = useState("");
  const [isCopied, setIsCopied] = useState(false);
  const [component, setComponent] = useState("all");

  const encodeUrl = () => {
    try {
      if (component === "all") {
        setOutputText(encodeURIComponent(inputText));
      } else if (component === "query") {
        const query = new URLSearchParams(inputText);
        setOutputText(query.toString());
      } else if (component === "path") {
        const path = inputText.replace(/[^a-zA-Z0-9]/g, encodeURIComponent);
        setOutputText(path);
      }
    } catch (err) {
      setOutputText("");
      alert("Invalid URL component");
    }
  };

  const decodeUrl = () => {
    try {
      if (component === "all") {
        setOutputText(decodeURIComponent(inputText));
      } else if (component === "query") {
        const query = new URLSearchParams(inputText);
        setOutputText(Array.from(query.entries()).map(([key, value]) => `${key}=${value}`).join("&"));
      } else if (component === "path") {
        const path = inputText.replace(/%[0-9A-Fa-f]{2}/g, decodeURIComponent);
        setOutputText(path);
      }
    } catch (err) {
      setOutputText("");
      alert("Invalid URL encoding");
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
            {t("navigation.urlEncoder")}
          </h1>
          <p className="text-gray-600 dark:text-gray-400">
            Encode and decode URL components
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="neu-card p-6">
            <h2 className="text-xl font-semibold mb-4">Input</h2>
            <div className="space-y-4">
              <AdSense />
              <select
                value={component}
                onChange={(e) => setComponent(e.target.value)}
                className="w-full p-2 rounded-lg bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="all">All Components</option>
                <option value="query">Query String</option>
                <option value="path">Path Segment</option>
              </select>

              <textarea
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                rows={10}
                className="w-full p-4 rounded-lg bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter URL component here..."
              />

              <div className="flex justify-between items-center">
                <div className="flex space-x-4">
                  <button
                    onClick={encodeUrl}
                    className="neu-button hover:bg-blue-700 transition-colors"
                  >
                    Encode
                  </button>
                  <button
                    onClick={decodeUrl}
                    className="neu-button hover:bg-blue-700 transition-colors"
                  >
                    Decode
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
