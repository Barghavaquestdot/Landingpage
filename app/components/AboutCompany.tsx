// app/components/AboutCompany.tsx (or wherever your CompanySection lives)
"use client";
import { motion } from "framer-motion";
import Button from "./ui/Button";
import { useTranslation } from "react-i18next";
import { FaCheck } from "react-icons/fa";

/** Ultra-subtle animated SVG: soft grid drift + gentle red waves + tiny orbit */
function CompanyBackground({ opacity = 0.14, speed = 22 }: { opacity?: number; speed?: number }) {
  return (
    <svg
      className="absolute inset-0 w-full h-full"
      viewBox="0 0 1200 600"
      preserveAspectRatio="xMidYMid slice"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      <defs>
        {/* readability vignette */}
        <radialGradient id="vignette" cx="50%" cy="50%" r="70%">
          <stop offset="60%" stopColor="#000" stopOpacity="0" />
          <stop offset="100%" stopColor="#000" stopOpacity="0.12" />
        </radialGradient>
        {/* faint ink for lines */}
        <linearGradient id="ink" x1="0" x2="1" y1="0" y2="0">
          <stop offset="0%" stopColor="#0f172a" stopOpacity="0.08" />
          <stop offset="100%" stopColor="#0f172a" stopOpacity="0.04" />
        </linearGradient>
        {/* red wave gradient */}
        <linearGradient id="red" x1="0" x2="1" y1="0" y2="0">
          <stop offset="0%" stopColor="#ef4444" />
          <stop offset="100%" stopColor="#b91c1c" />
        </linearGradient>
        {/* blur for corner bloom */}
        <filter id="bloom" x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur stdDeviation="60" />
        </filter>
        {/* paths for gentle wave + orbit */}
        <path id="wave" d="M0,0 C120,-20 220,12 340,0 460,-12 560,18 700,0 840,-18 980,10 1200,0" />
        <path id="orbitPath" d="M0,0 A120,70 0 1,1 -0.01,0.01" />
      </defs>

      {/* soft red corner blooms to match theme */}
      <g opacity={opacity}>
        <circle cx="150" cy="120" r="260" fill="#ef4444" filter="url(#bloom)" />
        <circle cx="1080" cy="520" r="280" fill="#ef4444" filter="url(#bloom)" />
      </g>

      {/* fine grid with a very slow drift */}
      <g className="anim" opacity="0.06" stroke="url(#ink)" fill="none">
        {Array.from({ length: 32 }).map((_, i) => (
          <line key={`v-${i}`} x1={i * 40} y1="0" x2={i * 40} y2="600" />
        ))}
        {Array.from({ length: 16 }).map((_, i) => (
          <line key={`h-${i}`} x1="0" y1={i * 40} x2="1200" y2={i * 40} />
        ))}
        <animateTransform
          attributeName="transform"
          type="translate"
          values="0 0; 10 -6; 0 0"
          keyTimes="0; 0.5; 1"
          dur={`${speed * 1.6}s`}
          repeatCount="indefinite"
        />
      </g>

      {/* two gentle brand waves (very low opacity) */}
      <g className="anim" opacity="0.25" transform="translate(0, 140)">
        <use href="#wave" fill="none" stroke="url(#red)" strokeWidth="3" strokeOpacity="0.35" />
        <use
          href="#wave"
          fill="none"
          stroke="url(#red)"
          strokeWidth="3"
          strokeDasharray="8 14"
          strokeOpacity="0.55"
        >
          <animate attributeName="stroke-dashoffset" from="0" to="-300" dur={`${speed}s`} repeatCount="indefinite" />
        </use>
      </g>
      <g className="anim" opacity="0.18" transform="translate(0, 520) scale(1,-1)">
        <use href="#wave" fill="none" stroke="url(#red)" strokeWidth="3" />
        <use
          href="#wave"
          fill="none"
          stroke="url(#red)"
          strokeWidth="2"
          strokeDasharray="6 18"
        >
          <animate attributeName="stroke-dashoffset" from="0" to="-260" dur={`${speed * 0.9}s`} repeatCount="indefinite" />
        </use>
      </g>

      {/* tiny orbiting dot on the right (symbolizes continuous improvement) */}
      <g className="anim" transform="translate(980, 180)" opacity="0.5">
        <ellipse rx="120" ry="70" fill="none" stroke="url(#ink)" strokeWidth="1.5" />
        <circle r="4" fill="#ef4444">
          <animateMotion dur={`${speed * 1.3}s`} repeatCount="indefinite">
            <mpath href="#orbitPath" />
          </animateMotion>
        </circle>
      </g>

      {/* top vignette for legibility */}
      <rect width="1200" height="600" fill="url(#vignette)" />

      <style>{`
        @media (prefers-reduced-motion: reduce) {
          .anim { display: none; }
        }
      `}</style>
    </svg>
  );
}

export default function CompanySection() {
  const { t } = useTranslation("common");
  return (
    <section className="relative bg-white text-black py-20 px-6 md:px-12 overflow-hidden">
      {/* existing gradient wash */}
      <div className="absolute inset-0 bg-gradient-to-tr from-white via-red-50 to-white animate-[gradient_10s_linear_infinite] opacity-40 pointer-events-none" />
      {/* new SVG background (super subtle) */}
      <CompanyBackground opacity={0.12} speed={24} />

      <style jsx>{`
        @keyframes gradient {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
      `}</style>

      <div className="relative z-10 max-w-5xl mx-auto text-center flex flex-col items-center">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-3"
        >
          {t("company.title")}
        </motion.h2>

        <motion.h3
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-xl md:text-2xl font-semibold text-red-600 mb-8"
        >
          {t("company.subtitle")}
        </motion.h3>

        <motion.ul
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.7 }}
          className="space-y-6 mb-10 text-left w-full max-w-3xl"
        >
          {["part1", "part2", "part3"].map((key) => (
            <li key={key} className="flex items-start gap-4">
              <span className="flex items-center justify-center w-8 h-8 rounded-full bg-emerald-100 text-emerald-600 mt-1">
                <FaCheck />
              </span>
              <p className="text-base sm:text-lg text-gray-800">{t(`company.description.${key}`)}</p>
            </li>
          ))}
        </motion.ul>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.5 }}
        >
          <a href="https://www.bs-systeme.de/" target="_blank" rel="noopener noreferrer">
            <Button>{t("company.cta")}</Button>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
