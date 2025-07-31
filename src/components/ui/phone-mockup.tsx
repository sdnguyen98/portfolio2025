"use client";

import React, { useEffect, useState } from "react";
import { motion, useAnimation, useMotionValue, useTransform } from "framer-motion";
import { cn } from "@/lib/utils";
import { useTheme } from "next-themes";

interface PhoneMockupProps {
  className?: string;
  imageUrl: string;
  alt?: string;
  glowColor?: string;
}

export default function PhoneMockup({
  className,
  imageUrl,
  alt = "Mobile screenshot",
  glowColor = "rgba(229, 62, 62, 0.3)",
}: PhoneMockupProps) {
  const { theme } = useTheme();
  const isDark = theme === "dark";
  const controls = useAnimation();
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const rotateX = useMotionValue(0);
  const rotateY = useMotionValue(0);
  const shadowX = useTransform(rotateY, [-15, 0, 15], [-25, 0, 25]);
  const shadowY = useTransform(rotateX, [-15, 0, 15], [25, 0, -25]);

  useEffect(() => {
    controls.start({
      y: [0, -10, 0],
      transition: {
        duration: 6,
        ease: "easeInOut",
        repeat: Infinity,
      },
    });
  }, [controls]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    const rotateXValue = ((e.clientY - centerY) / (rect.height / 2)) * 15;
    const rotateYValue = ((e.clientX - centerX) / (rect.width / 2)) * -15;

    rotateX.set(rotateXValue);
    rotateY.set(rotateYValue);
    setMousePosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    rotateX.set(0);
    rotateY.set(0);
    setIsHovered(false);
  };

  return (
    <motion.div
      className={cn("relative mx-auto w-full max-w-[320px] aspect-square rounded-2xl", className)}
      animate={controls}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        transformStyle: "preserve-3d",
        perspective: "1000px",
      }}
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.8,
          delay: 0.2,
          type: "spring",
          stiffness: 300,
          damping: 20,
        }}
        className="bg-background relative z-10 overflow-hidden rounded-2xl border-[10px] shadow-lg aspect-square"
        style={{
          transformStyle: "preserve-3d",
          perspective: "1000px",
          transform: `rotateX(${rotateX.get()}deg) rotateY(${rotateY.get()}deg) scale(${isHovered ? 1.03 : 1})`,
          transition: "transform 0.2s ease-out",
          boxShadow: isDark
            ? `0 0 0 1px rgba(255, 255, 255, 0.05), ${shadowX.get()}px ${shadowY.get()}px 40px rgba(0, 0, 0, 0.3), 0 0 20px rgba(120, 119, 198, 0.1)`
            : `0 0 0 1px rgba(229, 62, 62, 0.03), ${shadowX.get()}px ${shadowY.get()}px 40px rgba(0, 0, 0, 0.1), 0 0 20px rgba(229, 62, 62, 0.05)`,
        }}
      >
        <div className="relative aspect-square w-full overflow-hidden rounded-2xl">
          <motion.img
            src={imageUrl}
            alt={alt}
            className="h-full w-full object-cover rounded-2xl"
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{
              opacity: 1,
              scale: isHovered ? 1.02 : 1,
            }}
            transition={{
              duration: 0.8,
              delay: 0.4,
              scale: {
                type: "spring",
                stiffness: 300,
                damping: 20,
              },
            }}
          />
          {isHovered && (
            <motion.div
              className="absolute inset-0 rounded-2xl"
              style={{
                background: isDark
                  ? `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(255,255,255,0.1) 0%, transparent 60%)`
                  : `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(255,255,255,0.15) 0%, transparent 60%)`,
                mixBlendMode: "overlay",
              }}
            />
          )}
        </div>
      </motion.div>

      <motion.div
        className="bg-primary/20 absolute -top-8 -right-8 h-24 w-24 rounded-2xl blur-xl"
        animate={{
          opacity: [0.4, 0.7, 0.4],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
    </motion.div>
  );
}
