"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Button from "./ui/Button";
import SvgBackground from "./SvgBackground";
import { useTranslation } from "react-i18next";
import { withTranslationReady } from "../utils/withTranslationReady";

const ProblemSection = () => {
  const { t, ready } = useTranslation("common");

  if (!ready) return null;

  const maybePoints = t("problem.points", { returnObjects: true });
  const painPoints = Array.isArray(maybePoints) ? maybePoints : [];

  return (
    <section className="relative bg-gradient-to-br from-red-50 to-white py-24 px-6 md:px-24 overflow-hidden">
      {/* Animated Wave Background */}
      <SvgBackground />

      <div className="relative z-10 max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16">
        {/* Left: Illustration */}
        <motion.div
          className="w-full lg:w-1/2 flex justify-center"
          initial={{ opacity: 0, y: 20, scale: 0.9 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="relative w-[260px] sm:w-[320px] md:w-[380px] lg:w-[460px] aspect-[4/3] drop-shadow-2xl">
            <Image
              src="/problem.png"
              alt={t("problem.imageAlt")}
              fill
              className="object-contain"
              priority
            />
          </div>
        </motion.div>

        {/* Right: Text */}
        <div className="w-full lg:w-1/2 space-y-8">
          <motion.h2
            className="text-4xl md:text-5xl font-extrabold text-gray-900"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            {t("problem.title")}{" "}
            <span className="text-red-600">{t("problem.highlight")}</span>
          </motion.h2>

          <ul className="space-y-6">
            {painPoints.map((point, idx) => (
              <motion.li
                key={idx}
                className="flex items-start gap-4"
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: idx * 0.2, duration: 0.5 }}
              >
                <div className="flex-shrink-0 w-8 h-8 bg-[#d0181c] text-white rounded-full flex items-center justify-center font-semibold">
                  {idx + 1}
                </div>
                <p className="text-lg text-gray-700">{point}</p>
              </motion.li>
            ))}
          </ul>

          <motion.p
            className="text-xl font-semibold text-[#d0181c]"
            initial={{ opacity: 0 }}
            animate={{ opacity: [0, 1, 0] }}
            transition={{ duration: 4, repeat: Infinity }}
          >
            {t("problem.warning")}
          </motion.p>

          <div>
            <Button>{t("problem.cta")}</Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default withTranslationReady(ProblemSection, "common");
