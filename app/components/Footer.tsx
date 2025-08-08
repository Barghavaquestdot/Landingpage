"use client";

import { motion } from "framer-motion";
import { FaEnvelope, FaGlobe, FaPhone, } from "react-icons/fa";
import { useTranslation } from "react-i18next";
import { withTranslationReady } from "../utils/withTranslationReady";
import Image from "next/image";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faLinkedin} from '@fortawesome/free-brands-svg-icons';
import { faGlobe } from '@fortawesome/free-solid-svg-icons'

const Footer = () => {
  const { t } = useTranslation("common");

  return (
    <footer className="relative bg-black text-white pt-16 px-6 md:px-24 overflow-hidden">
      {/* Subtle dotted animated background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle,_rgba(255,255,255,0.1)_1px,_transparent_1px)] [background-size:20px_20px] z-0 opacity-10 animate-pulse" />

      {/* Top wave SVG */}
      <div className="absolute -top-6 left-0 w-full overflow-hidden leading-none rotate-180 z-10">
        <svg
          className="block w-full h-6"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M321.39,56.22 C163.72,34.84 0,64.72 0,64.72 L0,0 L1200,0 L1200,64.72 C1200,64.72 1036.28,29.81 878.61,51.19 C721.06,72.55 528.18,77.6 321.39,56.22 Z"
            fill="#111827"
          />
        </svg>
      </div>

      {/* Main content */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="relative z-20 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12"
      >
        {/* Left side: Logo + tagline */}
        <div className="space-y-4 text-center md:text-left">
          <div className="flex items-center justify-center md:justify-start space-x-3">
            <Image
              src="/logo/logo-white.svg"
              alt="BS-Systeme GmbH"
              width={40}
              height={40}
            />
            <span className="text-2xl font-bold text-white">BS-Systeme GmbH</span>
          </div>
           <div className="flex justify-center md:justify-start space-x-4 pl-13">
            {/* LinkedIn */}
            <a
              href="https://de.linkedin.com/company/bs-systeme-gmbh"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition"
            >
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
            {/* Instagram */}
            <a
              href="https://www.instagram.com/bs_systeme_gmbh?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition"
            >
              <FontAwesomeIcon icon={faInstagram} />
            </a>
            {/* Website */}
            <a
              href="http://bs-syteme.de/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition"
            >
              <FontAwesomeIcon icon={faGlobe} />
            </a>
          </div>
        </div>

        {/* Right side: Contact info */}
        <div className="space-y-4 text-center md:text-right">
          <h4 className="text-lg font-semibold text-white">
            {t("footer.contact")}
          </h4>
          <div className="text-sm text-gray-300 space-y-2">
            <p className="flex items-center gap-2 justify-center md:justify-end">
              <FaEnvelope className="text-red-400" />
              <a href="mailto:info@bs-systeme.de" className="hover:text-white">
                info@bs-systeme.de
              </a>
            </p>
            <p className="flex items-center gap-2 justify-center md:justify-end">
              <FaGlobe className="text-red-400" />
              <a
                href="https://www.bs-systeme.de/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white"
              >
                www.bs-systeme.de
              </a>
            </p>
            <p className="flex items-center gap-2 justify-center md:justify-end">
              <FaPhone className="text-red-400" /> +49 89 413 291 000
            </p>
          </div>
        </div>
      </motion.div>

      {/* Divider */}
      <div className="relative z-20 max-w-7xl mx-auto px-6 mt-12 border-t border-dashed border-gray-700" />

      {/* Copyright */}
      <div className="relative z-20 max-w-7xl mx-auto px-6 py-6 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} BS-Systeme GmbH. {t("footer.rights")}
      </div>
    </footer>
  );
};

export default withTranslationReady(Footer, "common");
