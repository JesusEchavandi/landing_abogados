"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

export default function FloatingCTA() {
  const [isVisible, setIsVisible] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);

  useEffect(() => {
    // Check if user has dismissed the CTA before
    const dismissed = localStorage.getItem("cta-dismissed");
    if (dismissed) {
      const dismissedTime = parseInt(dismissed);
      const dayInMs = 24 * 60 * 60 * 1000;
      if (Date.now() - dismissedTime < dayInMs) {
        setIsDismissed(true);
        return;
      }
    }

    // Show CTA after user scrolls down a bit (engagement signal)
    const handleScroll = () => {
      const scrolled = window.scrollY;
      const windowHeight = window.innerHeight;

      // Show after scrolling past first section
      if (scrolled > windowHeight * 0.5 && !isDismissed) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isDismissed]);

  const handleDismiss = () => {
    setIsDismissed(true);
    setIsVisible(false);
    localStorage.setItem("cta-dismissed", Date.now().toString());
  };

  const scrollToContact = () => {
    const element = document.getElementById("contacto");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  if (isDismissed) return null;

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ type: "spring", damping: 25, stiffness: 300 }}
          className="fixed bottom-24 left-1/2 -translate-x-1/2 z-40 max-w-md w-full px-4"
        >
          <div className="relative backdrop-blur-xl bg-gradient-to-r from-navy-900/95 to-navy-800/95 border border-gold-500/30 rounded-xl sm:rounded-2xl p-3 sm:p-4 shadow-[0_8px_32px_rgba(212,175,55,0.3)]">
            {/* Dismiss button - Touch friendly */}
            <button
              onClick={handleDismiss}
              className="absolute -top-2 -right-2 w-6 h-6 bg-navy-900 border border-white/20 rounded-full flex items-center justify-center text-white/60 hover:text-white hover:border-gold-500/50 transition-colors"
              aria-label="Cerrar"
            >
              <svg className="w-3 h-3 sm:w-4 sm:h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {/* Content - Responsive */}
            <div className="flex items-center gap-2 sm:gap-3 md:gap-4">
              {/* Icon - Responsive size */}
              <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 bg-gold-500/20 rounded-lg sm:rounded-xl flex items-center justify-center">
                <svg className="w-5 h-5 sm:w-6 sm:h-6 text-gold-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>

              {/* Text - Responsive */}
              <div className="flex-1 min-w-0">
                <p className="font-semibold text-white text-xs sm:text-sm mb-0.5 sm:mb-1">
                  ¿Necesitas asesoría legal urgente?
                </p>
                <p className="text-white/70 text-[10px] sm:text-xs">
                  Primera consulta <span className="text-gold-500 font-semibold">100% GRATIS</span>
                </p>
              </div>

              {/* CTA Button - Touch friendly */}
              <motion.button
                onClick={scrollToContact}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex-shrink-0 px-4 py-2 bg-gold-500 hover:bg-gold-400 text-navy-950 font-semibold text-sm rounded-lg transition-colors"
              >
                Consultar
              </motion.button>
            </div>

            {/* Animated border glow */}
            <motion.div
              className="absolute inset-0 rounded-2xl"
              style={{
                background: "linear-gradient(90deg, transparent, rgba(212,175,55,0.3), transparent)",
                backgroundSize: "200% 100%",
              }}
              animate={{
                backgroundPosition: ["0% 0%", "100% 0%", "0% 0%"],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "linear",
              }}
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
