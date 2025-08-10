// components/Floatingbutton.tsx
"use client";

import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { FaPhoneAlt } from "react-icons/fa";
import Button from "./ui/Button";

type Action = "tel" | "link" | "custom";

interface FloatingConsultationButtonProps {
  /** What should the button do when clicked? */
  action?: Action;                     // default: "tel"
  /** Used when action === "tel" */
  phoneNumber?: string;                // default: "+4989413291000"
  /** Used when action === "link" (e.g., Calendly/WhatsApp/web form) */
  href?: string;
  /** Used when action === "custom" */
  onClick?: () => void;
  /** Extra Tailwind classes for the Button */
  className?: string;
  /** Override label; falls back to t("floatingButton") */
  label?: string;
}

const FloatingConsultationButton = ({
  action = "tel",
  phoneNumber = "+4989413291000",
  href,
  onClick,
  className = "",
  label,
}: FloatingConsultationButtonProps) => {
  const { t } = useTranslation("common");

  const resolvedLabel = label ?? t("floatingButton"); // add "floatingButton" to your common.json

  const handleClick = () => {
    switch (action) {
      case "tel":
        // preserves the original behavior
        window.location.href = `tel:${phoneNumber}`;
        break;
      case "link":
        if (href) window.open(href, "_blank", "noopener,noreferrer");
        break;
      case "custom":
        onClick?.();
        break;
      default:
        break;
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.6, duration: 0.4 }}
      className="fixed bottom-6 right-6 sm:bottom-8 sm:right-8 z-50"
    >
      <Button
        onClick={handleClick}
        aria-label={resolvedLabel}
        className={`shadow-lg flex items-center gap-2 px-4 py-3 rounded-full ${className}`}
      >
        <FaPhoneAlt className="text-base sm:text-lg" />
        <span className="text-sm sm:text-base font-semibold hidden sm:inline">
          {resolvedLabel}
        </span>
      </Button>
    </motion.div>
  );
};

export default FloatingConsultationButton;
