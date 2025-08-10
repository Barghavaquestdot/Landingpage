// app/components/WhoNeeds.tsx
"use client";

import { motion } from "framer-motion";
import Button from "./ui/Button";
import { useTranslation } from "react-i18next";
import { FaCheck } from "react-icons/fa";
import AnimatedProblemBackground from "./AnimatedBackground"; // ← use your animated SVG here

const containerVariants = { hidden: {}, visible: { transition: { staggerChildren: 0.12 } } };
const itemVariants = { hidden: { opacity: 0, y: 8 }, visible: { opacity: 1, y: 0 } };

function AudienceCard({
  text,
  index,
  className = "",
}: {
  text: string;
  index: number;
  className?: string;
}) {
  const romans = ["I", "II", "III", "IV", "V", "VI"];
  const badge = romans[index % romans.length];

  return (
    <motion.div
      variants={itemVariants}
      whileHover={{ y: -2 }}
      transition={{ type: "spring", stiffness: 220, damping: 20 }}
      className={`relative ${className}`}
    >
      {/* Shelf shadow */}
      <div aria-hidden className="absolute -bottom-2 left-6 right-6 h-4 rounded-full bg-black/10 blur-md" />
      <div className="relative rounded-2xl bg-white shadow-[0_10px_30px_rgba(0,0,0,0.06)] ring-1 ring-black/5 overflow-hidden min-h-[84px]">
        <div className="absolute inset-y-0 left-0 w-1.5 bg-gradient-to-b from-red-600 to-red-500" />
        <div className="pl-5 pr-6 py-5 flex items-start gap-4">
          <div className="relative shrink-0 mt-0.5">
            <div className="w-9 h-9 rounded-full bg-black text-white grid place-items-center text-xs font-semibold shadow-sm">
              {badge}
            </div>
            <span className="absolute -bottom-1 -right-1 grid place-items-center w-5 h-5 rounded-full bg-red-600 text-white ring-2 ring-white">
              <FaCheck className="text-[10px]" />
            </span>
          </div>
          <p className="text-[15px] sm:text-base md:text-lg font-medium text-gray-800 leading-relaxed">
            {text}
          </p>
        </div>
      </div>
    </motion.div>
  );
}

export default function WhoNeeds() {
  const { t, ready } = useTranslation("common");
  if (!ready) return null;

  const raw = t("who.audience", { returnObjects: true });
  const audience: string[] = Array.isArray(raw) ? (raw as string[]) : [];

  return (
    <section className="relative w-full text-black py-28 px-6 md:px-24 lg:px-32 overflow-hidden">
      {/* Animated book-themed background */}
      <div className="absolute inset-0 pointer-events-none">
        <AnimatedProblemBackground opacity={0.22} speed={14} />
        {/* Soft veil so animations never compete with content */}
        <div className="absolute inset-0 bg-gradient-to-b from-white/60 via-white/20 to-white/60" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 6 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45 }}
          className="text-4xl md:text-5xl font-extrabold tracking-tight text-gray-900"
        >
          {t("who.title")}
        </motion.h2>

        <div className="mx-auto mt-3 mb-8 h-[3px] w-24 rounded-full bg-gradient-to-r from-red-600 via-red-400 to-red-600" />

        <motion.p
          initial={{ opacity: 0, y: 6 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.05, duration: 0.45 }}
          className="text-lg md:text-xl text-gray-600 mb-14 max-w-3xl mx-auto leading-8"
        >
          {t("who.description")}
        </motion.p>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="grid gap-8 md:grid-cols-2 text-left"
        >
          {audience.map((item, index) => (
            <AudienceCard
              key={index}
              index={index}
              text={item}
              className={index === 2 ? "md:col-span-2 mx-auto max-w-2xl" : ""}
            />
          ))}
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 6 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.05, duration: 0.45 }}
          className="text-lg md:text-xl text-gray-600 mt-12"
        >
          {t("who.footer")}
        </motion.p>

        <div className="mt-10">
          <Button size="lg">{t("who.cta")}</Button>
        </div>
      </div>
    </section>
  );
}
