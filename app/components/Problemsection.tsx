"use client";
import { motion } from "framer-motion";
import { FaRobot, FaCogs, FaEye } from "react-icons/fa";
import Button from "./ui/Button";
import { useTranslation } from "react-i18next";
import { useState } from "react";
import ProblemControlBackground from "./ProblemControlBackground";
import ProblemProfitLeakOverlay from "./ProblemProfitLeakOverlay";

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
    <div className="w-full max-w-xs mx-auto">
      {/* Mobile: fade swap (no 3D → no overlap) */}
      <div
        className="md:hidden relative rounded-2xl shadow-2xl overflow-hidden bg-white"
        onClick={() => setIsFlipped((p) => !p)}
        role="button"
        aria-pressed={isFlipped}
      >
        <motion.div
          key={isFlipped ? "back" : "front"}
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{ duration: 0.25 }}
          className="p-6"
        >
          {!isFlipped ? (
            <div className="flex flex-col items-center text-center gap-3 bg-[#111827] text-white rounded-2xl p-6">
              <span className="text-red-500 text-3xl">{icon}</span>
              <h3 className="text-base md:text-lg font-semibold">{frontText}</h3>
            </div>
          ) : (
            <div
              className="rounded-2xl p-6 text-center"
              style={{
                backgroundImage:
                  "linear-gradient(90deg, rgba(239,68,68,0.25) 80px, transparent 80px),repeating-linear-gradient(0deg, rgba(0,0,0,0.08), rgba(0,0,0,0.08) 1px, transparent 1px, transparent 28px)",
                backgroundColor: "#fff",
              }}
            >
              <p className="text-sm leading-relaxed text-red-700 font-medium px-2">
                {backText}
              </p>
            </div>
          )}
        </motion.div>
      </div>

      {/* Desktop/tablet: true 3D flip */}
      <div className="hidden md:block">
        <div className="relative group [perspective:1000px]">
          <div
            onClick={() => setIsFlipped((p) => !p)}
            className="relative aspect-square rounded-2xl transition-transform duration-500 shadow-2xl transform-gpu will-change-transform flip-3d"
            style={{
              transform: isFlipped ? "rotateY(180deg)" : "rotateY(0deg)",
              cursor: "pointer",
              contain: "layout paint",
              WebkitTransformStyle: "preserve-3d",
            }}
            aria-pressed={isFlipped}
          >
            {/* FRONT */}
            <div
              className="absolute inset-0 rounded-2xl overflow-hidden flip-face"
              style={{ transform: "rotateY(0deg)" }}
            >
              <div
                className="absolute inset-0"
                style={{
                  background:
                    "linear-gradient(180deg, rgba(0,0,0,0.06), rgba(0,0,0,0.08)), radial-gradient(100% 80% at 50% 0%, rgba(255,255,255,0.2), rgba(0,0,0,0) 70%), #111827",
                }}
              />
              <div
                className="absolute inset-0"
                style={{
                  background:
                    "linear-gradient(180deg, rgba(255,255,255,0.12), rgba(239,68,68,0.05))",
                  mixBlendMode: "overlay" as any,
                }}
              />
              <div className="absolute inset-3 rounded-xl border border-white/10 shadow-[inset_0_1px_0_rgba(255,255,255,0.08),inset_0_-1px_0_rgba(0,0,0,0.25)]" />
              <div className="absolute left-0 top-0 h-full w-2 rounded-l-2xl bg-red-600 shadow-[inset_-1px_0_0_rgba(0,0,0,0.3)]" />
              <div className="absolute -top-1 right-6 w-0 h-0 border-l-8 border-r-8 border-b-[14px] border-l-transparent border-r-transparent border-b-red-600 drop-shadow" />

              {/* content (no z-index to avoid Safari bleed-through) */}
              <div className="relative h-full flex flex-col items-center justify-center p-6 gap-3">
                <span className="text-red-500 text-3xl">{icon}</span>
                <h3 className="text-base md:text-lg font-semibold text-white/95 text-center">
                  {frontText}
                </h3>
              </div>
            </div>

            {/* BACK */}
            <div
              className="absolute inset-0 rounded-2xl p-6 flex items-center justify-center overflow-hidden flip-face"
              style={{
                transform: "rotateY(180deg)",
                backgroundImage:
                  "linear-gradient(90deg, rgba(239,68,68,0.25) 80px, transparent 80px),repeating-linear-gradient(0deg, rgba(0,0,0,0.08), rgba(0,0,0,0.08) 1px, transparent 1px, transparent 28px)",
                backgroundColor: "#fff",
              }}
            >
              <p className="text-sm md:text-base leading-relaxed text-red-700 font-medium text-center px-2">
                {backText}
              </p>
              <div className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-black/5 shadow-[inset_0_1px_0_rgba(255,255,255,0.6)]" />
            </div>
          </div>
        </div>
      </div>

      {/* Safari/iOS: force backface on children too */}
      <style jsx>{`
        .flip-3d,
        .flip-3d * {
          -webkit-transform-style: preserve-3d;
        }
        .flip-face,
        .flip-face * {
          backface-visibility: hidden;
          -webkit-backface-visibility: hidden;
          transform: translateZ(0);
        }
      `}</style>
    </div>
  );
}


export default function ProblemSection() {
  const { t, ready } = useTranslation("common");
  if (!ready) return null;

  const maybePoints = t("problem.points", { returnObjects: true });
  const painPoints = Array.isArray(maybePoints) ? (maybePoints as string[]) : [];
  const backs = [String(t("problem.point1")), String(t("problem.point2")), String(t("problem.point3"))];
  const icons = [<FaRobot key="r" />, <FaCogs key="c" />, <FaEye key="e" />];

  return (
    <section
      className="relative py-24 px-4 md:px-24 overflow-hidden bg-gradient-to-r from-white via-red-50 to-white"
    >
      <div aria-hidden className="absolute inset-0 opacity-40 pointer-events-none">
        <ProblemControlBackground opacity={0.22} speed={16} />
        <ProblemProfitLeakOverlay opacity={0.6} speed={14} position="below" />
      </div>

      <div className="relative z-10 w-full max-w-6xl mx-auto text-center flex flex-col items-center gap-10">
        <motion.h2
          className="text-3xl md:text-5xl font-extrabold text-gray-900"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
        >
          {t("problem.title")}
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-5xl">
          {painPoints.map((p, idx) => (
            <FlipSquare key={idx} frontText={String(p)} backText={backs[idx] ?? ""} icon={icons[idx]} />
          ))}
        </div>

        <motion.p
          className="text-lg md:text-xl font-semibold text-red-600"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          {t("problem.warning")}
        </motion.p>

        <Button>{t("problem.cta")}</Button>
      </div>
    </section>
  );
}
