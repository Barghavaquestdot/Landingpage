"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Button from "./ui/Button";
import { useTranslation } from "react-i18next";
import { withTranslationReady } from "../utils/withTranslationReady";

const AuthorSection = () => {
  const { t } = useTranslation("common");

  return (
    <section className="bg-gray-100 text-black py-20 sm:py-24 px-4 sm:px-6 md:px-16 lg:px-32 overflow-x-hidden">
      <div className="max-w-7xl mx-auto min-h-[300px] flex flex-col md:flex-row-reverse items-center md:items-start gap-10 md:gap-16">
        {/* Author Image */}
        <motion.div
          initial={{ opacity: 0, rotate: -10, scale: 0.7 }}
          whileInView={{ opacity: 1, rotate: 0, scale: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, type: "spring" }}
          className="flex-shrink-0 flex justify-center md:justify-end w-full md:w-auto"
        >
          <Image
            src="/author1.jpg"
            alt={t("author.imageAlt")}
            width={280}
            height={280}
            sizes="(max-width: 768px) 220px, 280px"
            className="rounded-full shadow-2xl border-4 border-white object-cover"
            priority
          />
        </motion.div>

        {/* Author Content */}
        <motion.div
          // Avoid horizontal slide on mobile to prevent overflow; use vertical lift instead
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          className="text-center md:text-left max-w-3xl w-full"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
            {t("author.title")}
          </h2>
          <h3 className="text-2xl md:text-3xl font-semibold text-red-600 mb-6">
            {t("author.subtitle")}
          </h3>
          <p className="text-lg leading-relaxed text-gray-800 font-light">
            {t("author.description.part1")} <strong>eco2lot</strong>,{" "}
            {t("author.description.part2")} <strong>25%</strong>,{" "}
            {t("author.description.part3")}
          </p>

          <div className="mt-8 flex justify-center md:justify-start">
            <Button>{t("author.cta")}</Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default withTranslationReady(AuthorSection, "common");