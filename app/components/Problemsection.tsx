// app/components/ProblemSection.tsx
"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Button from "./ui/Button";
import SvgBackground from "./SvgBackground";
import { useTranslation } from "react-i18next";
import { withTranslationReady } from "../utils/withTranslationReady";
import { useState } from "react";

const ProblemSection = () => {
  const { t, ready } = useTranslation("common");

  if (!ready) return null;

  const maybePoints = t("problem.points", { returnObjects: true });
  const painPoints = Array.isArray(maybePoints) ? maybePoints : [];

  // Get back-face translations from JSON keys: problem.point1 / point2 / point3
  const backPoints = [
    String(t("problem.point1")),
    String(t("problem.point2")),
    String(t("problem.point3")),
  ];

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
            {t("problem.title")}
          </motion.h2>

          {/* Grid of 2 square flip cards per row */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {painPoints.map((point, idx) => (
              <div key={idx}>
                <FlipSquare
                  frontText={String(point)}
                  backText={backPoints[idx] ?? ""}
                />
              </div>
            ))}
          </div>

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

/* -------------------------------
   FlipSquare component (internal)
   ------------------------------- */
function FlipSquare({ frontText, backText }: { frontText: string; backText: string }) {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div className="w-full max-w-xs mx-auto">
      {/* underline above card like your Card component */}
      <div className="relative mb-4">
        <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-10 sm:w-12 h-1 bg-red-500 rounded-full" />
        {/* square container with perspective */}
        <div style={{ perspective: 1000 }}>
          <div
            onClick={() => setIsFlipped((p) => !p)}
            className="relative w-full aspect-square rounded-2xl shadow-lg bg-white/10 dark:bg-black/30"
            style={{
              transformStyle: "preserve-3d",
              transition: "transform 0.5s",
              transform: isFlipped ? "rotateY(180deg)" : "rotateY(0deg)",
              cursor: "pointer",
            }}
          >
            {/* Front face (styled like your Card front) */}
            <div
              className="absolute inset-0 flex items-center justify-center p-4 sm:p-6 rounded-2xl"
              style={{
                backfaceVisibility: "hidden",
                WebkitBackfaceVisibility: "hidden",
                zIndex: 2,
              }}
            >
              <h3 className="text-base sm:text-lg md:text-xl font-medium text-black text-center">
                {frontText}
              </h3>
            </div>

            {/* Back face (pre-rotated so it shows upright after container rotates) */}
            <div
              className="absolute inset-0 p-4 sm:p-6 rounded-2xl flex items-center justify-center bg-white dark:bg-gray-800 overflow-auto"
              style={{
                backfaceVisibility: "hidden",
                WebkitBackfaceVisibility: "hidden",
                transform: "rotateY(180deg)",
              }}
            >
              <p className="text-sm sm:text-base leading-relaxed text-red-400 text-center">
                {backText}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}