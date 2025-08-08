"use client";

import { motion } from "framer-motion";
import { FaDownload, FaPhoneAlt } from "react-icons/fa";
import { useTranslation } from "react-i18next";
import { withTranslationReady } from "../utils/withTranslationReady";

const CallToActionSection = () => {
  const { t } = useTranslation("common");

  return (
    <section className="bg-white text-black py-24 px-6 md:px-32">
      <div className="max-w-4xl mx-auto text-center">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-12"
        >
          {t("cta.heading")}
        </motion.h2>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="flex flex-col md:flex-row justify-center gap-6"
        >

          {/* Call CTA */}
          <button className="flex items-center justify-center gap-3 border-2 border-[#d0181c] text-[#d0181c] hover:bg-[#d0181c] hover:text-white font-semibold text-lg px-8 py-4 rounded-full shadow-md transition-all duration-300 cursor-pointer">
            <FaPhoneAlt className="text-xl" /> {t("cta.consult")}
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default withTranslationReady(CallToActionSection, "common");
