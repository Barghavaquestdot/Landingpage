"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Button from "./ui/Button";
import { useTranslation } from "react-i18next";
import { withTranslationReady } from "../utils/withTranslationReady";

const GuidePreview = () => {
  const { t, ready } = useTranslation("common");

  if (!ready) return null;

  const rawHighlights = t("guidePreview.highlights", { returnObjects: true });
  const highlights: { title: string; description: string }[] =
    Array.isArray(rawHighlights) && rawHighlights.every((item) => item.title && item.description)
      ? rawHighlights
      : [];

  return (
    <section className="relative bg-black text-white py-28 px-6 md:px-20 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute w-[420px] h-[420px] bg-red-400 opacity-10 rounded-full blur-3xl top-[-80px] left-[-80px] animate-pulse" />
        <div className="absolute w-[420px] h-[420px] bg-red-600 opacity-10 rounded-full blur-3xl bottom-[-80px] right-[-80px] animate-pulse" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto space-y-16">
        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-center"
        >
          📘 {t("guidePreview.title")}{" "}
          <span className="text-red-400">{t("guidePreview.highlight")}</span>
        </motion.h2>

        {/* Layout */}
        <div className="flex flex-col lg:flex-row items-center gap-20">
          {/* 📘 Book Image - Enlarged */}
          <div className="w-full lg:w-1/2 flex justify-center lg:justify-start">
            <div className="relative w-[320px] sm:w-[420px] md:w-[500px] lg:w-[560px] xl:w-[600px]">
               <Image
                    src="/guidesection.png"
                    alt={t("guidePreview.imageAlt")}
                   width={600}
                  height={800}
                  className="absolute -top-15 -left-22 object-contain rounded-xl shadow-2xl"
                   priority
               />
            </div>
          </div>

          {/* ✅ Text Content */}
          <div className="w-full lg:w-1/2 text-left">
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.7 }}
              className="text-md sm:text-lg text-gray-300 mb-10 max-w-xl"
            >
              {t("guidePreview.subtitle")}
            </motion.p>

            <div className="space-y-6 border-l border-red-500 pl-6">
              {highlights.map((item, index) => (
                <div key={index} className="space-y-1">
                  <h3 className="text-white text-lg md:text-xl font-semibold">
                    {index + 1}. {item.title}
                  </h3>
                  <p className="text-gray-400 leading-relaxed text-sm md:text-base">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-10">
              <Button>{t("guidePreview.cta")}</Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default withTranslationReady(GuidePreview, "common");
