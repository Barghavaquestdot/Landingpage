"use client";
import { motion } from "framer-motion";
import { FaCogs, FaLeaf, FaSmile, FaListAlt, FaBolt } from "react-icons/fa";
import PulsingDataFlowNetwork from "./PulsingDataFlowNetwork";
import Image from "next/image";
import Button from "./ui/Button";
import { useTranslation } from "react-i18next";

type Advantage = { icon: keyof typeof iconMap; title: string };

const iconMap = {
  list: <FaListAlt className="text-red-500 text-3xl" />,
  cogs: <FaCogs className="text-red-500 text-3xl" />,
  leaf: <FaLeaf className="text-red-500 text-3xl" />,
  smile: <FaSmile className="text-red-500 text-3xl" />,
  bolt: <FaBolt className="text-red-500 text-3xl" />,
};

export default function SolutionSection() {
  const { t, ready } = useTranslation("common");
  if (!ready) return null;

  const raw = t("solution.advantages", { returnObjects: true });
  const advantages: Advantage[] = Array.isArray(raw)
    ? (raw as Advantage[]).filter((i) => typeof i.title === "string" && i.icon in iconMap)
    : [];

  return (
    <section className="relative bg-black text-white py-24 px-6 md:px-20 overflow-hidden">
      <div className="absolute inset-0 z-0 opacity-20 pointer-events-none">
        <PulsingDataFlowNetwork />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div className="text-center lg:text-left">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-3xl md:text-5xl font-extrabold mb-6"
          >
            {t("solution.title")}
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg md:text-xl text-white/90 max-w-2xl mb-10"
          >
            {t("solution.description")}
          </motion.p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-10">
            {advantages.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: idx * 0.08 }}
                className="flex items-start gap-4 bg-white/10 hover:bg-white/20 p-4 rounded-xl backdrop-blur transition"
              >
                <div>{iconMap[item.icon]}</div>
                <p className="text-white text-left text-base font-medium">{item.title}</p>
              </motion.div>
            ))}
          </div>

          <Button>{t("solution.cta")}</Button>
        </div>

        <div className="w-full flex justify-center">
          <div className="relative w-full max-w-[520px] h-[640px] md:h-[720px] rounded-xl overflow-hidden shadow-2xl">
            <Image
              src="/section3.jpg"
              alt={t("solution.imageAlt")}
              fill
              className="object-contain object-top"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
