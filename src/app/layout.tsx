import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "next-themes";
import { DefaultSeo } from "next-seo";
import { SEO_CONFIG } from "./seo-config";
import AnalyticsInit from "@/components/analytics/AnalyticsInit";

export const metadata: Metadata = {
  title: "QuickUtil - Developer Tools",
  description: "Fast & Modern Developer Utility Tools",
  keywords: "JSON formatter, Base64 encoder, QR code generator, URL encoder, UUID generator, hash generator, password generator",
  viewport: "width=device-width, initial-scale=1",
  themeColor: "#3B82F6",
  robots: "index, follow",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <DefaultSeo {...SEO_CONFIG} />
      <AnalyticsInit />
      <body className="antialiased">
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
