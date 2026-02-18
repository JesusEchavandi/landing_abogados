"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function FloatingElements() {
  const [windowWidth, setWindowWidth] = useState(0);

  useEffect(() => {
    setWindowWidth(window.innerWidth);
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  if (windowWidth === 0) return null;

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Decorative lines */}
      {[...Array(3)].map((_, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, x: -100 }}
          animate={{ 
            opacity: [0.1, 0.3, 0.1],
            x: [-100, windowWidth + 100],
          }}
          transition={{
            duration: 15 + i * 5,
            repeat: Infinity,
            delay: i * 3,
            ease: "linear",
          }}
          className="absolute top-[20%] h-[1px] w-64 bg-gradient-to-r from-transparent via-gold-500/30 to-transparent"
          style={{ top: `${20 + i * 25}%` }}
        />
      ))}

      {/* Floating particles */}
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={`particle-${i}`}
          initial={{ 
            opacity: 0,
            x: Math.random() * windowWidth,
            y: typeof window !== "undefined" ? window.innerHeight + 20 : 800,
          }}
          animate={{
            opacity: [0, 0.6, 0],
            y: -20,
          }}
          transition={{
            duration: 8 + Math.random() * 10,
            repeat: Infinity,
            delay: Math.random() * 5,
            ease: "linear",
          }}
          className="absolute w-1 h-1 bg-white/40 rounded-full"
        />
      ))}
    </div>
  );
}
