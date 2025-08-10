"use client";
import { motion, AnimatePresence } from "framer-motion";
import { FaQuoteLeft, FaStar } from "react-icons/fa";
import { useTranslation } from "react-i18next";
import { useEffect, useState } from "react";

export default function TestimonialsSection() {
  const { t, ready } = useTranslation("common");
  const [currentIndex, setCurrentIndex] = useState(0);
  if (!ready) return null;

  const items = t("testimonials.items", { returnObjects: true }) as Array<{ text: string; company: string }>;

  useEffect(() => {
    if (!items?.length) return;
    const id = setInterval(() => setCurrentIndex((p) => (p + 1) % items.length), 5000);
    return () => clearInterval(id);
  }, [items]);

  if (!items?.length) return null;

  return (
    <section className="bg-black text-white py-24 px-6 md:px-20">
      <div className="max-w-4xl mx-auto text-center">
        <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="text-4xl md:text-5xl font-bold mb-6">
          {t("testimonials.title")}
        </motion.h2>

        <div className="flex justify-center gap-2 mb-10">
          {Array.from({ length: 5 }).map((_, i) => (
            <FaStar key={i} className="text-red-500 text-xl" />
          ))}
        </div>

        <div className="relative h-52 flex items-center justify-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.5 }}
              className="bg-white/10 backdrop-blur p-6 rounded-xl shadow-lg border-l-4 border-red-500 text-left relative w-full max-w-xl"
            >
              <FaQuoteLeft className="text-red-500 text-2xl absolute top-4 left-4 opacity-70" />
              <p className="text-lg font-medium pl-10 mb-4 text-white">{items[currentIndex].text}</p>
              <p className="text-sm font-semibold text-red-300 pl-10">— {items[currentIndex].company}</p>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
