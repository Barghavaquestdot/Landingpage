"use client";
import { motion } from "framer-motion";
import { FaBook } from "react-icons/fa";
import Button from "./ui/Button";
import { useTranslation } from "react-i18next";
import { useEffect, useState } from "react";

export default function HeroSection() {
  const { t, ready } = useTranslation("common");
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  const title = ready ? t("hero.title") : " ";
  const quote = ready ? t("hero.quote") : " ";
  const subtitlePart1 = ready ? t("hero.subtitle.part1") : " ";
  const description = ready ? t("hero.description") : " ";
  const cta = ready ? t("hero.cta") : " ";

  return (
    <section className="relative text-white w-full min-h-[92vh] flex items-center justify-center px-4 md:px-10 lg:px-24 py-16 bg-black overflow-hidden">
      {/* Image backdrop */}
      <div
        aria-hidden
        className="absolute inset-0 bg-[url('/section1.jpg')] bg-cover bg-center opacity-40" // ↑ a touch more visible
      />

      {/* Accent glows (now sit under the scrim) */}
      <div aria-hidden className="absolute -top-32 -left-24 w-[28rem] h-[28rem] rounded-full bg-red-700/30 blur-3xl" />
      <div aria-hidden className="absolute -bottom-40 -right-24 w-[30rem] h-[30rem] rounded-full bg-red-500/15 blur-3xl" />

      {/* Scrim: fades to transparent at the bottom so the image shows through */}
      <div
        aria-hidden
        className="absolute inset-0 bg-gradient-to-b from-black/90 via-black/70 to-transparent"
      />

      {/* Floating wireframe accent */}
      <div aria-hidden className="pointer-events-none absolute inset-0 opacity-15">
        <svg viewBox="0 0 600 600" className="w-full h-full animate-pulse">
          <defs>
            <linearGradient id="g" x1="0" x2="1" y1="0" y2="1">
              <stop stopColor="#ef4444" offset="0%" />
              <stop stopColor="#ffffff" offset="100%" />
            </linearGradient>
          </defs>
          <g fill="none" stroke="url(#g)" strokeWidth="0.5">
            {Array.from({ length: 40 }).map((_, i) => (
              <circle key={i} cx="300" cy="300" r={10 + i * 7} />
            ))}
          </g>
        </svg>
      </div>

      {/* Brand */}
      <div className="absolute top-6 md:top-10 left-6 md:left-16 z-10 flex items-center gap-3">
        <FaBook className="text-2xl md:text-3xl text-white" />
        <span className="text-white font-bold text-base md:text-2xl tracking-wide">
          {title}
        </span>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center max-w-3xl mx-auto">
        <motion.h1
          initial={{ opacity: 0, y: -24 }}
          animate={mounted ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.9 }}
          className="font-extrabold font-serif text-red-500 text-3xl sm:text-4xl md:text-5xl mb-3"
        >
          {quote}
        </motion.h1>

        <motion.h3
          initial={{ opacity: 0, y: 16 }}
          animate={mounted ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="text-red-400 text-lg md:text-2xl mb-6"
        >
          {subtitlePart1}
        </motion.h3>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={mounted ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-white/90 text-base md:text-lg leading-relaxed md:leading-8"
        >
          {description}
        </motion.p>

        <div className="mt-8 flex justify-center">
          <Button>{cta}</Button>
        </div>
      </div>
    </section>
  );
}
