"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import ParallaxBackground from "./ParallaxBackground";
import GlassCard from "./GlassCard";
import FloatingElements from "./FloatingElements";

export default function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.95]);

  return (
    <section
      ref={containerRef}
      className="relative w-full overflow-hidden"
      style={{ height: '100vh', minHeight: '100dvh' }}
    >
      {/* Parallax Background */}
      <ParallaxBackground scrollY={scrollYProgress} />

      {/* Grain Overlay for Cinematic Feel */}
      <div className="absolute inset-0 opacity-[0.03] mix-blend-overlay pointer-events-none">
        <div className="absolute inset-0 bg-[url('/noise.png')] bg-repeat" />
      </div>

      {/* Gradient Vignette */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-navy-950/80" />

      {/* Floating Decorative Elements */}
      <FloatingElements />

      {/* Main Content - Mobile First Padding */}
      <motion.div
        style={{ opacity, scale }}
        className="relative z-10 h-full flex items-center justify-center"
      >
        <GlassCard />
      </motion.div>

      {/* Scroll Indicator - Responsive sizing */}
      <motion.div
        style={{ opacity, bottom: 'clamp(2rem, 8vh, 4rem)' }}
        className="absolute left-1/2 -translate-x-1/2 z-20"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="rounded-full border-2 border-white/30 flex justify-center"
          style={{
            width: 'clamp(1.25rem, 4vw, 1.5rem)',
            height: 'clamp(2rem, 6vw, 2.5rem)',
            padding: '0.5rem'
          }}
        >
          <motion.div className="w-1 h-3 bg-gold-500 rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  );
}
