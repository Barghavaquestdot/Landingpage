"use client";

import { motion } from "framer-motion";
import { FaBook } from "react-icons/fa";
import Button from "./ui/Button";
import { useTranslation } from "react-i18next";

const HeroSection = () => {
  const { t, ready } = useTranslation("common");

  if (!ready) return null;

  return (
    <section
      className="relative text-white w-full min-h-screen flex items-start justify-center px-6 md:px-24 pt-48 pb-20 bg-black"
      style={{
        backgroundImage: "url('/section1.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-transparent z-0" />
      <div className="absolute w-96 h-96 bg-[#d0181c] opacity-30 rounded-full blur-3xl top-[-100px] left-[-100px] z-0" />

      <div className="absolute top-6 left-6 md:left-16 z-20 flex items-center gap-2">
        <FaBook className="text-2xl md:text-3xl text-white" />
        <span className="text-white font-bold text-lg md:text-2xl">
          {t("hero.title")}
        </span>
      </div>

      <div className="relative z-10 text-center max-w-3xl">
        <motion.h1
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-3xl md:text-5xl font-extrabold leading-snug font-serif mb-6"
        >
          <span className="text-[#d0181c]">{t("hero.quote")}</span>
          <br />
          <span className="text-white">
            {t("hero.subtitle.part1")}{" "}
            <span className="text-[#d0181c]">{t("hero.subtitle.part2")}</span>
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="text-white/90 text-base md:text-xl font-light mb-10"
        >
          {t("hero.description")}
        </motion.p>

        <Button>{t("hero.cta")}</Button>
      </div>
    </section>
  );
};

export default HeroSection;
