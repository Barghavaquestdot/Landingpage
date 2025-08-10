"use client";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

export default function LanguageSwitcher() {
  const { i18n } = useTranslation();
  const [mounted, setMounted] = useState(false);

  // Avoid SSR/CSR mismatch: render only after mount
  useEffect(() => setMounted(true), []);

  if (!mounted) {
    return <div className="inline-flex gap-2 rounded-full bg-white/5 p-1 border border-white/10" suppressHydrationWarning />;
  }

  const languages: Array<{ code: string; label: string }> = [
    { code: "en", label: "EN" },
    { code: "de", label: "DE" },
  ];

  return (
    <div className="inline-flex gap-2 rounded-full bg-white/5 p-1 border border-white/10" suppressHydrationWarning>
      {languages.map((lng) => (
        <button
          key={lng.code}
          onClick={() => i18n.changeLanguage(lng.code)}
          className={`px-3 py-1 rounded-full text-xs font-semibold transition ${
            i18n.language === lng.code
              ? "bg-red-600 text-white"
              : "text-white/80 hover:text-white hover:bg-white/10"
          }`}
          aria-pressed={i18n.language === lng.code}
        >
          {lng.label}
        </button>
      ))}
    </div>
  );
}
