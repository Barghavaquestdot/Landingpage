"use client";

import { motion } from "framer-motion";
import { FaEnvelope, FaGlobe, FaPhone } from "react-icons/fa";
import { useTranslation } from "react-i18next";
import { withTranslationReady } from "../utils/withTranslationReady";

const Footer = () => {
  const { t } = useTranslation("common");

  return (
    <footer className="relative bg-black text-white py-16 px-6 md:px-24 overflow-hidden">
      {/* Subtle dotted animated background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle,_rgba(255,255,255,0.1)_1px,_transparent_1px)] [background-size:20px_20px] z-0 opacity-10 animate-pulse" />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12"
      >
        {/* Company Info */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left space-y-3">
          <h3 className="text-xl font-bold text-red-400">BS-Systeme GmbH</h3>
          <ul className="text-sm text-gray-400 space-y-1 leading-relaxed">
            <li>✓ {t("footer.experience")}</li>
            <li>✓ {t("footer.solutions")}</li>
            <li>✓ {t("footer.madeIn")}</li>
          </ul>
        </div>

        {/* Contact Info */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left space-y-4">
          <h4 className="text-lg font-semibold text-white">{t("footer.contact")}</h4>
          <div className="text-sm text-gray-300 space-y-2">
            <p className="flex items-center justify-center md:justify-start gap-2">
              <FaEnvelope className="text-red-400" />
              info@bs-systeme.de
            </p>
            <p className="flex items-center justify-center md:justify-start gap-2">
              <FaGlobe className="text-red-400" />
              <a
                href="https://www.bs-systeme.de/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-red-500 transition"
              >
                www.bs-systeme.de
              </a>
            </p>
            <p className="flex items-center justify-center md:justify-start gap-2">
              <FaPhone className="text-red-400" /> +49 89 413 291 000
            </p>
          </div>
        </div>

        {/* Copyright */}
        <div className="flex flex-col items-center md:items-end text-center md:text-right justify-center text-xs text-gray-500 space-y-1">
          <p>© {new Date().getFullYear()} BS-Systeme GmbH</p>
          <p>{t("footer.rights")}</p>
        </div>
      </motion.div>
    </footer>
  );
};

export default withTranslationReady(Footer, "common");
