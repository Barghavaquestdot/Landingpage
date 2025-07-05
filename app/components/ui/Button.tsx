"use client";

import { motion } from "framer-motion";
import React from "react";

type Props = {
  children: React.ReactNode;
  onClick?: () => void;
  variant?: "primary" | "outline";
  className?: string;
  type?: "button" | "submit" | "reset";
};

const Button = ({
  children,
  onClick,
  variant = "primary",
  className = "",
  type = "button",
}: Props) => {
  const baseStyles =
    "rounded-full px-6 py-3 md:px-8 md:py-4 font-semibold shadow-md transition duration-300 text-lg whitespace-nowrap";
  const variants = {
    primary: "bg-red-600 hover:bg-red-700 text-white",
    outline: "border-2 border-red-600 text-red-600 hover:bg-red-600 hover:text-white",
  };

  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={onClick}
      type={type}
      className={`${baseStyles} ${variants[variant]} ${className}`}
      suppressHydrationWarning
    >
      {children}
    </motion.button>
  );
};

export default Button;
