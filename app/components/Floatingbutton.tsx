// app/components/FloatingConsultationButton.tsx
"use client";

import { FaPhoneAlt } from "react-icons/fa";
import Link from "next/link";

const FloatingConsultationButton = () => {
  return (
    <Link
      href="tel:+4989413291000" // You can change this to open a modal, form, WhatsApp, etc.
      className="fixed z-50 bottom-6 right-6 sm:bottom-8 sm:right-8 bg-red-600 hover:bg-red-700 text-white flex items-center gap-2 px-4 py-3 rounded-full shadow-lg transition-all duration-300"
    >
      <FaPhoneAlt className="text-white text-base sm:text-lg" />
      <span className="text-sm sm:text-base font-semibold hidden sm:inline">
        Consultation
      </span>
    </Link>
  );
};

export default FloatingConsultationButton;