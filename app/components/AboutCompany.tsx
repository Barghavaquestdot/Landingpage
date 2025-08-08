"use client";

import { motion } from "framer-motion";
import Button from "./ui/Button";
import { useTranslation } from "react-i18next";
import { withTranslationReady } from "../utils/withTranslationReady";
import { FaCheck } from "react-icons/fa";

const CompanySection = () => {
  const { t } = useTranslation("common");

  return (
    <section className="relative bg-white text-black py-20 px-6 md:px-12 overflow-hidden">
      {/* Subtle Background Animation */}
      <div className="absolute inset-0 bg-gradient-to-tr from-white via-red-50 to-white animate-gradient-x opacity-30 pointer-events-none" />

      <div className="relative z-10 max-w-5xl mx-auto text-center flex flex-col items-center">
        {/* Animated Title */}
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-3"
        >
          {t("company.title")}
        </motion.h2>

        <motion.h3
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-xl md:text-2xl font-semibold text-red-600 mb-8"
        >
          {t("company.subtitle")}
        </motion.h3>

        {/* Points List */}
        <motion.ul
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.7 }}
          className="space-y-6 mb-10 text-left w-full max-w-3xl"
        >
          {["part1", "part2", "part3"].map((key, idx) => (
            <li key={idx} className="flex items-start gap-4">
              <span className="flex items-center justify-center w-8 h-8 rounded-full bg-emerald-100 text-emerald-600 mt-1 shrink-0">
                <FaCheck />
              </span>
              <p className="text-base sm:text-lg text-gray-800">
                {t(`company.description.${key}`)}
              </p>
            </li>
          ))}
        </motion.ul>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.5 }}
        >
          <a href="https://www.bs-systeme.de/" target="_blank" rel="noopener noreferrer">
          <Button>{t("company.cta")}</Button>
        </a>
                </motion.div>
      </div>
    </section>
  );
};

export default withTranslationReady(CompanySection, "common");