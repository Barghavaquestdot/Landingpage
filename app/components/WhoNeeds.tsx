"use client";

import { motion } from "framer-motion";
import { FaCheck } from "react-icons/fa";
import Button from "./ui/Button";
import { useTranslation } from "react-i18next";
import { withTranslationReady } from "../utils/withTranslationReady";

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.3 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const WhoNeeds = () => {
  const { t, ready } = useTranslation("common");
  if (!ready) return null;

  const rawAudience = t("who.audience", { returnObjects: true });
  const audience: string[] = Array.isArray(rawAudience) ? rawAudience : [];

  return (
    <section className="relative w-full bg-gradient-to-br from-white to-gray-100 text-black py-28 px-6 md:px-32 overflow-hidden">
      {/* ===== Visible, tasteful animated background (no content changes) ===== */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {/* Layer 1: animated soft red wash */}
        <div className="abs-fill animated-wash" />

        {/* Layer 2: breathing blurred halos */}
        <div className="abs-fill">
          <div className="halo halo-1" />
          <div className="halo halo-2" />
        </div>

        {/* Layer 3: diagonal sweep */}
        <div className="abs-fill sweep" />
      </div>

      {/* ===== Content (unchanged) ===== */}
      <div className="relative z-10 max-w-5xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-4xl md:text-5xl font-extrabold mb-6"
        >
          {t("who.title")}
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.7 }}
          className="text-lg md:text-xl text-gray-600 mb-14"
        >
          {t("who.description")}
        </motion.p>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid gap-8 md:grid-cols-2 text-left"
        >
          {audience.map((item, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className={`flex items-start gap-4 p-6 rounded-2xl bg-white shadow-md hover:shadow-lg hover:scale-[1.02] transition-transform ${
                index === 2 ? "md:col-span-2 mx-auto max-w-xl" : ""
              }`}
            >
              <FaCheck className="text-[#d0181c] text-xl mt-1" />
              <span className="text-lg font-medium text-gray-800">{item}</span>
            </motion.div>
          ))}
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.7 }}
          className="text-lg md:text-xl text-gray-600 mt-10"
        >
          {t("who.footer")}
        </motion.p>

        <div className="mt-12">
          <Button>{t("who.cta")}</Button>
        </div>
      </div>

    <style jsx>{`
        .abs-fill {
          position: absolute;
          inset: 0;
        }

        /* Pulsating Glow Layer */
        .pulsating-glow {
          position: absolute;
          inset: 0;
          background: radial-gradient(
            circle at center,
            rgba(208, 24, 28, 0.15) 0%,
            rgba(208, 24, 28, 0.05) 40%,
            transparent 70%
          );
          animation: pulseGlow 6s ease-in-out infinite;
        }
        @keyframes pulseGlow {
          0%, 100% { transform: scale(1); opacity: 0.6; }
          50% { transform: scale(1.15); opacity: 0.8; }
        }

        /* Floating Halos with slight drift */
        .halo {
          position: absolute;
          filter: blur(45px);
          border-radius: 999px;
          animation: drift 10s ease-in-out infinite alternate;
          pointer-events: none;
        }
        .halo-1 {
          width: 420px;
          height: 420px;
          left: -120px;
          top: -100px;
          background: radial-gradient(
            circle at 50% 50%,
            rgba(208, 24, 28, 0.28) 0%,
            rgba(208, 24, 28, 0.08) 60%,
            transparent 80%
          );
        }
        .halo-2 {
          width: 380px;
          height: 380px;
          right: -120px;
          bottom: -120px;
          background: radial-gradient(
            circle at 50% 50%,
            rgba(208, 24, 28, 0.25) 0%,
            rgba(208, 24, 28, 0.07) 60%,
            transparent 80%
          );
          animation-delay: 1.5s;
        }
        @keyframes drift {
          0% { transform: translate(0, 0) scale(1); }
          50% { transform: translate(20px, -15px) scale(1.05); }
          100% { transform: translate(-15px, 20px) scale(1); }
        }

        /* Subtle particle drift */
        .particles {
          position: absolute;
          inset: 0;
          background-image: radial-gradient(rgba(255, 255, 255, 0.15) 1px, transparent 1px);
          background-size: 3px 3px;
          animation: particleMove 30s linear infinite;
          opacity: 0.3;
        }
        @keyframes particleMove {
          from { transform: translateY(0) translateX(0); }
          to { transform: translateY(-20px) translateX(15px); }
        }
      `}</style>

      {/* Background layers */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="abs-fill pulsating-glow" />
        <div className="abs-fill halo halo-1" />
        <div className="abs-fill halo halo-2" />
        <div className="abs-fill particles" />
      </div>
    </section>
  );
};

export default withTranslationReady(WhoNeeds, "common");