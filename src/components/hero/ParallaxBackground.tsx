"use client";

import { motion, MotionValue, useTransform } from "framer-motion";

interface ParallaxBackgroundProps {
  scrollY: MotionValue<number>;
}

export default function ParallaxBackground({ scrollY }: ParallaxBackgroundProps) {
  const y = useTransform(scrollY, [0, 1], [0, 300]);
  const scale = useTransform(scrollY, [0, 1], [1, 1.1]);

  return (
    <>
      {/* Background Image Layer */}
      <motion.div
        style={{ y, scale }}
        className="absolute inset-0 w-full h-full"
      >
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=1920&h=1080&fit=crop&auto=format')",
          }}
        />
        {/* Dark overlay for readability */}
        <div className="absolute inset-0 bg-gradient-to-br from-navy-950/80 via-navy-900/70 to-navy-950/85" />
      </motion.div>

      {/* Animated gradient orbs (subtle) */}
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-gold-500/10 rounded-full blur-[120px] animate-float" />
      <div className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-blue-500/5 rounded-full blur-[100px] animate-float" style={{ animationDelay: "2s" }} />
    </>
  );
}
