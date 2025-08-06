// app/components/CompanySection.tsx
"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Button from "./ui/Button";
import { useTranslation } from "react-i18next";
import { withTranslationReady } from "../utils/withTranslationReady";
import { FaCheck } from "react-icons/fa";

const CompanySection = () => {
  const { t } = useTranslation("common");

  return (
    <section className="bg-white text-black py-20 px-6 md:px-32">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-16">
    

        {/* Company Content */}
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          className="text-left max-w-3xl"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-3 pl-5">
            {t("company.title")}
          </h2>

          <h3 className="text-xl md:text-2xl font-semibold text-red-600 mb-6">
            {t("company.subtitle")}
          </h3>

          {/* Points — line wise with tick mark in front */}
          <ul className="space-y-4 mb-6">
            <li className="flex items-start gap-3">
              <span
                className="flex items-center justify-center w-8 h-8 rounded-full bg-emerald-100 text-emerald-600 mt-1"
                aria-hidden
              >
                <FaCheck />
              </span>
              <p className="text-lg text-gray-800">
                {t("company.description.part1")}
              </p>
            </li>

            <li className="flex items-start gap-3">
              <span
                className="flex items-center justify-center w-8 h-8 rounded-full bg-emerald-100 text-emerald-600 mt-1"
                aria-hidden
              >
                <FaCheck />
              </span>
              <p className="text-lg text-gray-800">
                {t("company.description.part2")}
              </p>
            </li>

            <li className="flex items-start gap-3">
              <span
                className="flex items-center justify-center w-8 h-8 rounded-full bg-emerald-100 text-emerald-600 mt-1"
                aria-hidden
              >
                <FaCheck />
              </span>
              <p className="text-lg text-gray-800">
                {t("company.description.part3")}
              </p>
            </li>
          </ul>

          <div className="mt-4">
            <Button>{t("company.cta")}</Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default withTranslationReady(CompanySection, "common");
