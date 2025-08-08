"use client";

import { motion } from "framer-motion";
import { FaBook } from "react-icons/fa";
import Button from "./ui/Button";
import { useTranslation } from "react-i18next";
import { useEffect, useState } from "react";

const HeroSection = () => {
  const { t, ready } = useTranslation("common");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const title = ready ? t("hero.title") : " ";
  const quote = ready ? t("hero.quote") : " ";
  const subtitlePart1 = ready ? t("hero.subtitle.part1") : " ";
  const description = ready ? t("hero.description") : " ";
  const cta = ready ? t("hero.cta") : " ";

  return (
    <section
      className="relative text-white w-full min-h-screen flex items-start justify-center px-6 md:px-24 pt-36 md:pt-44 lg:pt-48 pb-20 bg-black"
      style={{
        backgroundImage: "url('/section1.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/70 to-transparent z-0" />
      <div className="absolute w-96 h-96 bg-[#d0181c] opacity-30 rounded-full blur-3xl top-[-100px] left-[-100px] z-0" />

      {/* Top Left Logo & Title */}
      <div className="absolute top-6 left-6 md:left-16 z-20 flex items-center gap-2">
        <FaBook className="text-2xl md:text-3xl text-white" />
        <span className="text-white font-bold text-lg md:text-2xl">{title}</span>
      </div>

      <div className="relative z-10 text-center max-w-3xl w-full">
        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          animate={mounted ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1 }}
          className="text-2xl sm:text-3xl md:text-4xl font-extrabold leading-snug font-serif mt-[-40px] mb-4 sm:mb-6"
        >
          <span className="text-[#d0181c] block mb-3 md:text-4xl">{quote}</span>
          <span className="text-red-500 text-base sm:text-lg md:text-2xl">{subtitlePart1}</span>
        </motion.h1>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={mounted ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="text-white text-sm sm:text-base md:text-xl lg:text-xl font-light mb-8 sm:mb-10 leading-relaxed md:leading-loose max-w-2xl mx-auto px-2"
          style={{
            textShadow: "0 0 6px rgba(0,0,0,0.4)",
          }}
        >
          {description}
        </motion.p>

        {/* CTA Button */}
        <Button>{cta}</Button>
      </div>
    </section>
  );
};

export default HeroSection;