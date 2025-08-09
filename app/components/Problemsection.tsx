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

  const icons = [<FaRobot key="r" />, <FaCogs key="c" />, <FaEye key="e" />];

  return (
    <section
      className="relative py-24 px-4 sm:px-6 md:px-24 overflow-hidden"
      style={{
        backgroundImage: "linear-gradient(90deg, #ffe5e5, #ffffff, #ffe5e5)",
        backgroundSize: "300% 100%",
        backgroundPosition: "0% 0%",
        animation: "scrollBackground 15s linear infinite",
      }}
    >
      {/* Background anim (kept) */}
      <div aria-hidden className="absolute inset-0 z-0 will-change-transform">
        <AnimatedProblemBackground />
      </div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-5xl mx-auto text-center flex flex-col items-center gap-10 sm:gap-12">
        {/* Title */}
        <motion.h2
          className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 break-words"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
        >
          {t("problem.title")}
        </motion.h2>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6 w-full max-w-4xl">
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
          className="text-lg sm:text-xl font-semibold text-[#d0181c]"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          // keep the pulse but don't animate if user prefers reduced motion
          style={{ animation: "problemPulse 4s infinite" }}
        >
          {t("problem.warning")}
        </motion.p>

        {/* CTA Button with animation indicator (kept) */}
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
        @keyframes problemPulse {
          0%,
          100% {
            opacity: 0.4;
          }
          50% {
            opacity: 1;
          }
        }
        @media (prefers-reduced-motion: reduce) {
          /* Respect user motion settings without changing visuals */
          section[style*="scrollBackground"] {
            animation: none !important;
          }
          .animate-ping {
            animation: none !important;
          }
          p[style*="problemPulse"] {
            animation: none !important;
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
    <div className="w-full max-w-[min(20rem,100%)] mx-auto max-h-full">
      <div className="relative mb-4 select-none">
        <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-10 sm:w-12 h-1 bg-red-500 rounded-full" />
        <div style={{ perspective: 1000 }}>
          <div
            onClick={() => setIsFlipped((p) => !p)}
            className="relative w-full aspect-square rounded-2xl bg-white dark:bg-black/30 transition-transform duration-500 shadow-2xl hover:shadow-red-400/30 touch-manipulation"
            style={{
              transformStyle: "preserve-3d",
              transform: isFlipped ? "rotateY(180deg)" : "rotateY(0deg)",
              cursor: "pointer",
              willChange: "transform",
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
              <h3 className="text-base sm:text-lg md:text-xl font-medium text-black text-center break-words">
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