// components/ui/Button.tsx
"use client";

import React, { forwardRef } from "react";
import { motion, type HTMLMotionProps } from "framer-motion";

type ButtonOwnProps = {
  variant?: "primary" | "ghost" | "outline";
  size?: "sm" | "md" | "lg";
};

type ButtonProps = HTMLMotionProps<"button"> & ButtonOwnProps;

const sizeMap: Record<NonNullable<ButtonOwnProps["size"]>, string> = {
  sm: "px-3 py-2 text-sm",
  md: "px-5 py-3 text-base",
  lg: "px-6 py-3.5 text-lg",
};

const variantMap: Record<NonNullable<ButtonOwnProps["variant"]>, string> = {
  primary:
    "bg-red-600 hover:bg-red-500 text-white shadow-lg shadow-red-600/20 focus:ring-2 focus:ring-red-400",
  ghost:
    "bg-transparent text-white hover:bg-white/10 border border-white/20 focus:ring-2 focus:ring-white/30",
  outline:
    "bg-transparent text-red-600 border border-red-600 hover:bg-red-600 hover:text-white focus:ring-2 focus:ring-red-400",
};

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ children, className = "", variant = "primary", size = "md", ...rest }, ref) => {
    return (
      <motion.button
        ref={ref}
        whileTap={{ scale: 0.98 }}
        className={`rounded-xl font-semibold tracking-wide transition ${sizeMap[size]} ${variantMap[variant]} ${className}`}
        {...rest}
      >
        {children}
      </motion.button>
    );
  }
);

Button.displayName = "Button";
export default Button;
