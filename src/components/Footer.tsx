import { useTranslation } from "next-i18next";
import Link from "next/link";

export default function Footer() {
  const { t } = useTranslation("common");

  return (
    <footer className="border-t border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="flex items-center space-x-4">
            <Link
              href="/"
              className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
            >
              {t("navigation.home")}
            </Link>
            <Link
              href="/tools"
              className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
            >
              {t("navigation.tools")}
            </Link>
          </div>

          <div className="text-sm text-gray-600 dark:text-gray-400">
            © {new Date().getFullYear()} QuickUtil. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}
