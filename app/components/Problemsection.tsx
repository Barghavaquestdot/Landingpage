"use client";

import { motion } from "framer-motion";
import Button from "./ui/Button";
// import SvgBackground from "./SvgBackground";
import { useTranslation } from "react-i18next";
import { withTranslationReady } from "../utils/withTranslationReady";
import { useState } from "react";
import { FaRobot, FaCogs, FaEye } from "react-icons/fa";
import AnimatedProblemBackground from "./AnimatedBackground";

const ProblemSection = () => {
  const { t, ready } = useTranslation("common");

  if (!ready) return null;

  const maybePoints = t("problem.points", { returnObjects: true });
  const painPoints = Array.isArray(maybePoints) ? maybePoints : [];

  const backPoints = [
    String(t("problem.point1")),
    String(t("problem.point2")),
    String(t("problem.point3")),
  ];

  const icons = [<FaRobot />, <FaCogs />, <FaEye />];

  return (
    <section
      className="relative py-24 px-6 md:px-24 overflow-hidden"
      style={{
        backgroundImage: "linear-gradient(90deg, #ffe5e5, #ffffff, #ffe5e5)",
        backgroundSize: "300% 100%",
        backgroundPosition: "0% 0%",
        animation: "scrollBackground 15s linear infinite",
      }}
    >
      <AnimatedProblemBackground/>

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto text-center flex flex-col items-center gap-12">
        {/* Title */}
        <motion.h2
          className="text-4xl md:text-5xl font-extrabold text-gray-900"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {t("problem.title")}
        </motion.h2>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-4xl w-full">
          {painPoints.map((point, idx) => (
            <div
              key={idx}
              className={`${
                painPoints.length % 2 !== 0 && idx === painPoints.length - 1
                  ? "sm:col-span-2 sm:mx-auto w-full sm:max-w-sm"
                  : ""
              }`}
            >
              <FlipSquare
                frontText={String(point)}
                backText={backPoints[idx] ?? ""}
                icon={icons[idx]}
              />
            </div>
          ))}
        </div>

        {/* Warning */}
        <motion.p
          className="text-xl font-semibold text-[#d0181c]"
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 1, 0] }}
          transition={{ duration: 4, repeat: Infinity }}
        >
          {t("problem.warning")}
        </motion.p>

        {/* CTA Button with animation indicator */}
        <div className="relative mt-2">
          <Button>{t("problem.cta")}</Button>
          <div className="absolute bottom-[-6px] left-1/2 -translate-x-1/2 w-4 h-0.5 rounded-full bg-[#d0181c] animate-ping opacity-30" />
        </div>
      </div>

      {/* ⬇️ Keyframes defined globally (Next.js styled-jsx) */}
      <style jsx global>{`
        @keyframes scrollBackground {
          0% {
            background-position: 200% 0%;
          }
          100% {
            background-position: -200% 0%;
          }
        }
      `}</style>
    </section>
  );
};

export default withTranslationReady(ProblemSection, "common");

/* -------------------------------
   FlipSquare component (internal)
   ------------------------------- */
function FlipSquare({
  frontText,
  backText,
  icon,
}: {
  frontText: string;
  backText: string;
  icon: React.ReactNode;
}) {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div className="w-full max-w-xs mx-auto max-h-full">
      <div className="relative mb-4">
        <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-10 sm:w-12 h-1 bg-red-500 rounded-full" />
        <div style={{ perspective: 1000 }}>
          <div
            onClick={() => setIsFlipped((p) => !p)}
            className="relative w-full aspect-square rounded-2xl bg-white dark:bg-black/30 transition-transform duration-500 shadow-2xl hover:shadow-red-400/30"
            style={{
              transformStyle: "preserve-3d",
              transform: isFlipped ? "rotateY(180deg)" : "rotateY(0deg)",
              cursor: "pointer",
            }}
          >
            {/* Front */}
            <div
              className="absolute inset-0 flex flex-col items-center justify-center p-4 sm:p-6 rounded-2xl space-y-3"
              style={{
                backfaceVisibility: "hidden",
                WebkitBackfaceVisibility: "hidden",
                zIndex: 2,
              }}
            >
              <span className="text-[#d0181c] text-3xl">{icon}</span>
              <h3 className="text-base sm:text-lg md:text-xl font-medium text-black text-center">
                {frontText}
              </h3>
            </div>

            {/* Back */}
            <div
              className="absolute inset-0 p-4 sm:p-6 rounded-2xl flex items-center justify-center bg-white dark:bg-gray-800 overflow-auto"
              style={{
                backfaceVisibility: "hidden",
                WebkitBackfaceVisibility: "hidden",
                transform: "rotateY(180deg)",
              }}
            >
              <p className="text-sm sm:text-base leading-relaxed text-red-700 font-medium text-center">
                {backText}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}