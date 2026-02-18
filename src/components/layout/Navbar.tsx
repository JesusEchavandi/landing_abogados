"use client";

import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

const navItems = [
  { name: "Inicio", id: "inicio" },
  { name: "Áreas", id: "areas" },
  { name: "Equipo", id: "equipo" },
  { name: "Casos", id: "casos" },
  { name: "Blog", id: "blog" },
  { name: "Portal", id: "portal" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("inicio");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { scrollY } = useScroll();
  const backgroundColor = useTransform(
    scrollY,
    [0, 100],
    ["rgba(10, 22, 40, 0)", "rgba(10, 22, 40, 0.95)"]
  );

  useEffect(() => {
    const unsubscribe = scrollY.on("change", (latest) => {
      setIsScrolled(latest > 50);
    });
    return () => unsubscribe();
  }, [scrollY]);

  // Detect active section
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "-20% 0px -70% 0px",
      threshold: 0,
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    navItems.forEach((item) => {
      const element = document.getElementById(item.id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setMobileMenuOpen(false);
    }
  };

  // Prevent scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  return (
    <>
      <motion.nav
        style={{ backgroundColor }}
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? "backdrop-blur-md border-b border-white/10 shadow-lg" : ""
          }`}
      >
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          {/* Logo - Responsive size */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="font-display font-bold cursor-pointer relative z-50 text-2xl"
            onClick={() => scrollToSection("inicio")}
          >
            <span className="text-white">Legal</span>
            <span className="text-gold-500">Studio</span>
          </motion.div>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center gap-1">
            {navItems.map((item, i) => (
              <motion.button
                key={item.name}
                onClick={() => scrollToSection(item.id)}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className={`relative px-4 py-2 font-medium transition-colors ${activeSection === item.id
                    ? "text-gold-500"
                    : "text-white/70 hover:text-white"
                  }`}
                aria-label={`Navegar a ${item.name}`}
                aria-current={activeSection === item.id ? "page" : undefined}
              >
                {item.name}
                {activeSection === item.id && (
                  <motion.div
                    layoutId="activeSection"
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-gold-500"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </motion.button>
            ))}
          </div>

          {/* Desktop CTA - Touch friendly */}
          <motion.button
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            onClick={() => scrollToSection("contacto")}
            className="hidden lg:block px-6 py-2 bg-gold-500 hover:bg-gold-400 text-navy-950 font-semibold rounded-full transition-all hover:scale-105 active:scale-95"
            aria-label="Agendar consulta legal"
          >
            Agendar
          </motion.button>

          {/* Mobile Menu Button - Touch friendly - HIDDEN on desktop */}
          <motion.button
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="flex lg:hidden relative z-50 flex-col items-center justify-center gap-1.5 p-2"
            aria-label={mobileMenuOpen ? "Cerrar menú" : "Abrir menú"}
            aria-expanded={mobileMenuOpen}
          >
            <motion.span
              animate={mobileMenuOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
              className="w-6 h-0.5 bg-white rounded-full transition-colors"
            />
            <motion.span
              animate={mobileMenuOpen ? { opacity: 0 } : { opacity: 1 }}
              className="w-6 h-0.5 bg-white rounded-full transition-colors"
            />
            <motion.span
              animate={mobileMenuOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
              className="w-6 h-0.5 bg-white rounded-full transition-colors"
            />
          </motion.button>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileMenuOpen(false)}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 lg:hidden"
            />

            {/* Menu Panel - Responsive width */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 30, stiffness: 300 }}
              className="fixed top-0 right-0 bottom-0 w-80 max-w-[85vw] bg-navy-900/95 backdrop-blur-xl border-l border-white/10 z-40 lg:hidden shadow-2xl"
            >
              <div className="flex flex-col h-full pt-20 sm:pt-24 pb-6 sm:pb-8 px-6 sm:px-8">
                {/* Navigation Items - Touch friendly spacing */}
                <nav className="flex-1 space-y-2 overflow-y-auto custom-scrollbar">
                  {navItems.map((item, i) => (
                    <motion.button
                      key={item.name}
                      onClick={() => scrollToSection(item.id)}
                      initial={{ opacity: 0, x: 50 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: 50 }}
                      transition={{ delay: i * 0.05 }}
                      className={`w-full text-left px-6 py-4 rounded-xl font-medium transition-all ${activeSection === item.id
                          ? "bg-gold-500/20 text-gold-500 border border-gold-500/30"
                          : "text-white/70 hover:bg-white/5 hover:text-white"
                        }`}
                    >
                      <span className="flex items-center justify-between">
                        {item.name}
                        {activeSection === item.id && (
                          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                        )}
                      </span>
                    </motion.button>
                  ))}
                </nav>

                {/* Mobile CTA - Touch friendly */}
                <motion.button
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  onClick={() => scrollToSection("contacto")}
                  className="w-full py-4 bg-gold-500 hover:bg-gold-400 text-navy-950 font-semibold rounded-xl transition-all active:scale-95"
                >
                  Agendar Consulta
                </motion.button>

                {/* Contact Info */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.4 }}
                  className="mt-6 pt-6 border-t border-white/10 space-y-3 text-sm"
                >
                  <a
                    href="tel:+51987654321"
                    className="flex items-center gap-3 text-white/60 hover:text-gold-500 transition-colors"
                  >
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    +51 987 654 321
                  </a>
                  <a
                    href="mailto:contacto@legalstudio.pe"
                    className="flex items-center gap-3 text-white/60 hover:text-gold-500 transition-colors"
                  >
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    contacto@legalstudio.pe
                  </a>
                </motion.div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
