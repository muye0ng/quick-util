import { useTheme } from "next-themes";
import { usePathname, useRouter } from "next/navigation";
import Link from "next/link";
import {
  MoonIcon,
  SunIcon,
  LanguageIcon,
  Bars3Icon,
} from "@heroicons/react/24/outline";

export default function Header() {
  const { theme, setTheme } = useTheme();
    const router = useRouter();
const pathname = usePathname();

  const currentLang = pathname?.split("/")[1] || "en";

  const languages = {
    ko: "한국어",
    en: "English",
    es: "Español",
    zh: "中文",
  };

  const changeLanguage = (lang: string) => {
  const segments = pathname.split("/");
  segments[1] = lang;
  router.push(segments.join("/"));
};

  return (
    <header className="sticky top-0 z-50 bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-2">
              <span className="text-xl font-bold text-blue-600 dark:text-blue-400">
                QuickUtil
              </span>
            </Link>
          </div>

          <div className="flex items-center space-x-4">
            {/* Theme Toggle */}
            <button
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              aria-label={theme === "dark" ? "Light mode" : "Dark mode"}
            >
              {theme === "dark" ? (
                <SunIcon className="h-5 w-5" />
              ) : (
                <MoonIcon className="h-5 w-5" />
              )}
            </button>

            {/* Language Selector */}
            <div className="relative">
              <button
                className="flex items-center space-x-2 p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                aria-label="Language selector"
              >
                <LanguageIcon className="h-5 w-5" />
                <span className="text-sm">{languages[currentLang as keyof typeof languages]}</span>
              </button>
              
              <div className="absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-white dark:bg-gray-800 ring-1 ring-black ring-opacity-5">
                {Object.entries(languages).map(([key, value]) => (
                  <button
                    key={key}
                    onClick={() => changeLanguage(key)}
                    className="w-full px-4 py-2 text-left hover:bg-gray-100 dark:hover:bg-gray-700"
                  >
                    {value}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
