"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Button from "./ui/Button";
import { useTranslation } from "react-i18next";
import { withTranslationReady } from "../utils/withTranslationReady";

const AuthorSection = () => {
  const { t } = useTranslation("common");

  return (
    <section className="bg-gray-100 text-black py-20 px-6 md:px-32">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row-reverse items-center gap-16">
        {/* Author Image */}
        <motion.div
          initial={{ opacity: 0, rotate: -10, scale: 0.7 }}
          whileInView={{ opacity: 1, rotate: 0, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, type: "spring" }}
          className="flex-shrink-0"
        >
          <Image
            src="/author1.jpg"
            alt={t("author.imageAlt")}
            width={280}
            height={280}
            className="rounded-full shadow-2xl border-4 border-white"
          />
        </motion.div>

        {/* Author Content */}
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          className="text-left max-w-3xl"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4 text-center md:text-left">
            {t("author.title")}
          </h2>
          <h3 className="text-2xl md:text-3xl font-semibold text-red-600 mb-6 text-center md:text-left">
            {t("author.subtitle")}
          </h3>
          <p className="text-lg leading-relaxed text-gray-800 font-light">
            {t("author.description.part1")} <strong>eco2lot</strong>,{" "}
            {t("author.description.part2")} <strong>25%</strong>,{" "}
            {t("author.description.part3")}
          </p>

          <div className="mt-8">
            <Button>{t("author.cta")}</Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default withTranslationReady(AuthorSection, "common");
