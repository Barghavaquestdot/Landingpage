"use client";

import { useTranslation } from "react-i18next";
import { useEffect, useState } from "react";
import { FaGlobe } from "react-icons/fa";

export default function LanguageSwitcher() {
  const { i18n } = useTranslation();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const toggleLanguage = () => {
    const newLang = i18n.language === "en" ? "de" : "en";
    i18n.changeLanguage(newLang);
  };

  if (!mounted) return null;

  return (
    <button
      onClick={toggleLanguage}
      className="fixed top-4 right-4 z-50 flex items-center gap-2 px-3 py-1.5 bg-black/80 hover:bg-[#d0181c] transition text-white text-sm font-semibold rounded-full shadow-lg border border-white/10 backdrop-blur-md"
      aria-label="Toggle Language"
    >
      <FaGlobe className="text-[#d0181c]" />
      {i18n.language === "en" ? "DE" : "EN"}
    </button>
  );
}
