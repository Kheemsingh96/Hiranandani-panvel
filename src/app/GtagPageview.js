"use client";

import { usePathname, useSearchParams } from "next/navigation";
import { useEffect } from "react";

export default function GtagPageview() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    if (typeof window !== "undefined" && window.gtag) {
      const fullPath =
        pathname + (searchParams.toString() ? `?${searchParams}` : "");
      window.gtag("config", "G-6YWY6HSWEY", { page_path: fullPath });
    }
  }, [pathname, searchParams]);

  return null;
}
