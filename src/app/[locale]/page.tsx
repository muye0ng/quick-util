'use client';

import { useTranslation } from "next-i18next";
import { usePathname, useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Home() {
  const { t } = useTranslation("common");
  const router = useRouter();

  useEffect(() => {
    const pathname = usePathname();
    const locale = pathname.split('/')[1];
    if (locale && locale.length === 2) {
      router.replace(`/${locale}`);
    }
  }, [router]);

  return null;
}
