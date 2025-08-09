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
      className="relative text-white w-full min-h-screen flex items-start justify-center px-4 sm:px-6 md:px-10 lg:px-24 pt-24 sm:pt-28 md:pt-40 lg:pt-44 pb-16 sm:pb-20 bg-black"
      style={{
        backgroundImage: "url('/section1.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Background overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/70 to-black/20 sm:from-black/70 sm:via-black/70 sm:to-transparent z-0" />

      {/* Red glow */}
      <div className="absolute w-64 sm:w-72 md:w-96 h-64 sm:h-72 md:h-96 bg-[#d0181c] opacity-30 rounded-full blur-3xl -top-20 -left-20 z-0" />

      {/* Logo and title */}
      <div className="absolute top-4 sm:top-6 left-4 sm:left-6 md:left-16 z-20 flex items-center gap-2">
        <FaBook className="text-xl sm:text-2xl md:text-3xl text-white shrink-0" />
        <span className="text-white font-bold text-base sm:text-lg md:text-2xl line-clamp-1">
          {title}
        </span>
      </div>

      {/* Main content */}
      <div className="relative z-10 text-center w-full max-w-[48rem] mx-auto">
        
        {/* Main Heading - Quote */}
        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          animate={mounted ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1 }}
          className="font-extrabold font-serif mb-3 sm:mb-4 leading-tight text-[#d0181c] text-3xl sm:text-4xl md:text-5xl lg:text-4xl"
        >
          {quote}
        </motion.h1>

        {/* Subtitle */}
        <motion.h3
          initial={{ opacity: 0, y: 15 }}
          animate={mounted ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="text-red-500 text-base sm:text-lg md:text-2xl mb-6 sm:mb-8"
        >
          {subtitlePart1}
        </motion.h3>

        {/* Description */}
        <motion.h4
          initial={{ opacity: 0, y: 15 }}
          animate={mounted ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="text-white text-sm sm:text-base md:text-lg lg:text-xl font-light mb-8 sm:mb-10 leading-relaxed md:leading-loose max-w-2xl mx-auto px-2 sm:px-3"
          style={{ textShadow: "0 0 6px rgba(0,0,0,0.4)" }}
        >
          {description}
        </motion.h4>

        {/* Call to action */}
        <div className="flex justify-center">
          <Button>{cta}</Button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;