'use client';

import { useTranslation } from "next-i18next";
import { useState } from "react";
import { CopyIcon, CheckIcon, EyeIcon, EyeOffIcon } from "@heroicons/react/outline";
import AdSense from "@/components/ads/AdSense";

export default function PasswordGenerator() {
  const { t } = useTranslation("common");
  const [length, setLength] = useState(12);
  const [useUppercase, setUseUppercase] = useState(true);
  const [useLowercase, setUseLowercase] = useState(true);
  const [useNumbers, setUseNumbers] = useState(true);
  const [useSymbols, setUseSymbols] = useState(true);
  const [password, setPassword] = useState("");
  const [isCopied, setIsCopied] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const generatePassword = () => {
    const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const lowercase = "abcdefghijklmnopqrstuvwxyz";
    const numbers = "0123456789";
    const symbols = "!@#$%^&*()_+-=[]{}|;:,.<>?";

    let chars = "";
    if (useUppercase) chars += uppercase;
    if (useLowercase) chars += lowercase;
    if (useNumbers) chars += numbers;
    if (useSymbols) chars += symbols;

    if (!chars) return;

    let result = "";
    for (let i = 0; i < length; i++) {
      result += chars.charAt(Math.floor(Math.random() * chars.length));
    }

    setPassword(result);
  };

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(password);
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy text: ", err);
    }
  };

  const getPasswordStrength = () => {
    const score = [
      useUppercase,
      useLowercase,
      useNumbers,
      useSymbols,
    ].filter(Boolean).length;

    if (score === 0) return "none";
    if (score === 1) return "weak";
    if (score === 2) return "medium";
    if (score === 3) return "strong";
    return "very-strong";
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="space-y-8">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
            {t("navigation.passwordGenerator")}
          </h1>
          <p className="text-gray-600 dark:text-gray-400">
            Generate strong passwords with customizable options
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="neu-card p-6">
            <h2 className="text-xl font-semibold mb-4">Password Generator</h2>
            <div className="space-y-4">
              <AdSense />
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Password Length
                </label>
                <div className="flex items-center space-x-4">
                  <input
                    type="number"
                    value={length}
                    onChange={(e) => setLength(parseInt(e.target.value))}
                    className="w-full p-4 rounded-lg bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    id="uppercase"
                    checked={useUppercase}
                    onChange={(e) => setUseUppercase(e.target.checked)}
                    className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                  />
                  <label htmlFor="uppercase" className="ml-2 text-sm text-gray-700 dark:text-gray-300">
                    Include Uppercase Letters
                  </label>
                </div>
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    id="lowercase"
                    checked={useLowercase}
                    onChange={(e) => setUseLowercase(e.target.checked)}
                    className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                  />
                  <label htmlFor="lowercase" className="ml-2 text-sm text-gray-700 dark:text-gray-300">
                    Include Lowercase Letters
                  </label>
                </div>
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    id="numbers"
                    checked={useNumbers}
                    onChange={(e) => setUseNumbers(e.target.checked)}
                    className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                  />
                  <label htmlFor="numbers" className="ml-2 text-sm text-gray-700 dark:text-gray-300">
                    Include Numbers
                  </label>
                </div>
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    id="symbols"
                    checked={useSymbols}
                    onChange={(e) => setUseSymbols(e.target.checked)}
                    className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                  />
                  <label htmlFor="symbols" className="ml-2 text-sm text-gray-700 dark:text-gray-300">
                    Include Symbols
                  </label>
                </div>
              </div>

              <div className="flex justify-between items-center">
                <button
                  onClick={generatePassword}
                  className="neu-button hover:bg-blue-700 transition-colors"
                >
                  Generate Password
                </button>
              </div>
            </div>
          </div>

          <div className="neu-card p-6">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-semibold">Generated Password</h2>
              <div className="flex space-x-4">
                <button
                  onClick={() => setShowPassword(!showPassword)}
                  className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                >
                  {showPassword ? (
                    <EyeOffIcon className="h-5 w-5" />
                  ) : (
                    <EyeIcon className="h-5 w-5" />
                  )}
                </button>
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
            </div>
            
            <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-4">
              <div className="flex items-center justify-between mb-2">
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  Password Strength:
                </p>
                <span
                  className={`px-2 py-1 rounded-full text-xs font-semibold ${
                    getPasswordStrength() === "none"
                      ? "bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-400"
                      : getPasswordStrength() === "weak"
                      ? "bg-red-100 dark:bg-red-900 text-red-800 dark:text-red-300"
                      : getPasswordStrength() === "medium"
                      ? "bg-yellow-100 dark:bg-yellow-900 text-yellow-800 dark:text-yellow-300"
                      : getPasswordStrength() === "strong"
                      ? "bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-300"
                      : "bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-300"
                  }`}
                >
                  {getPasswordStrength().replace("-", " ").toUpperCase()}
                </span>
              </div>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  value={password}
                  readOnly
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
