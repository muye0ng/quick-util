'use client';


import { useState } from 'react';
import AdSense from "@/components/ads/AdSense";
import { v1 as uuidv1, v4 as uuidv4 } from 'uuid';
import { CheckIcon, DocumentDuplicateIcon as CopyIcon } from "@heroicons/react/24/outline";

export default function UuidGenerator() {
    const [uuidVersion, setUuidVersion] = useState<string>('v4');
  const [uuidCount, setUuidCount] = useState<string>('1');
  const [uuidList, setUuidList] = useState<string[]>([]);
  const [isCopied, setIsCopied] = useState<boolean>(false);
  const [isSingleCopied, setIsSingleCopied] = useState<number | null>(null);

  const generateUuids = () => {
    const count = parseInt(uuidCount);
    if (isNaN(count) || count < 1) {
      return;
    }
    const generateUUID = (version: number): string => {
      if (version === 1) {
        return uuidv1();
      }
      return uuidv4();
    };
    const newUuids = Array(count).fill(null).map(() => {
      return uuidVersion === 'v4' ? generateUUID(4) : generateUUID(1);
    });
    setUuidList(newUuids);
  };

  const copyToClipboard = async () => {
    if (uuidList.length === 0) {
      return;
    }
    try {
      await navigator.clipboard.writeText(uuidList.join('\n'));
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  };

  const downloadUUIDs = () => {
    if (uuidList.length === 0) return;
    const text = uuidList.join('\n');
    const blob = new Blob([text], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `uuids_${Date.now()}.txt`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  const copySingleUuid = (uuid: string) => {
    navigator.clipboard.writeText(uuid);
    setIsSingleCopied(uuidList.indexOf(uuid));
    setTimeout(() => setIsSingleCopied(null), 2000);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="space-y-8">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
            UUID Generator          </h1>
          <p className="text-gray-600 dark:text-gray-400">
            Generate unique identifiers (UUIDs)
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="neu-card p-6">
            <h2 className="text-xl font-semibold mb-4">UUID Generator</h2>
            <div className="space-y-4">
              <AdSense />
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  UUID Version
                </label>
                <select
                  value={uuidVersion}
                  onChange={(e) => setUuidVersion(e.target.value)}
                  className="w-full p-2 rounded-lg bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="v4">Version 4 (Random)</option>
                  <option value="v1">Version 1 (Time-based)</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Number of UUIDs
                </label>
                <input
                  type="number"
                  value={uuidCount}
                  onChange={(e) => setUuidCount(e.target.value)}
                  className="w-full p-4 rounded-lg bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div className="flex justify-between items-center">
                <div className="flex space-x-4">
                  <button
                    onClick={generateUuids}
                    className="neu-button hover:bg-blue-700 transition-colors"
                  >
                    Generate
                  </button>
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
                    onClick={downloadUUIDs}
                    className="neu-button hover:bg-blue-700 transition-colors"
                  >
                    Download
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="neu-card p-6">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-semibold">Generated UUIDs</h2>
              <button
                onClick={() => setUuidList([])}
                className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              >
                Clear
              </button>
            </div>
            <div className="space-y-2">
              {uuidList.map((uuid, index) => (
                <div key={index} className="flex justify-between items-center">
                  <span className="text-sm">{uuid}</span>
                  <button
                    onClick={() => copySingleUuid(uuid)}
                    className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                  >
                    {isSingleCopied === index ? (
                      <CheckIcon className="h-5 w-5 text-green-500" />
                    ) : (
                      <CopyIcon className="h-5 w-5" />
                    )}
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
