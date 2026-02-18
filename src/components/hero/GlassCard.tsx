"use client";

import { motion } from "framer-motion";

export default function GlassCard() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
      className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12"
    >
      {/* Glow effect behind card */}
      <div className="absolute -inset-1 bg-gradient-to-r from-gold-500/20 to-gold-400/10 rounded-3xl blur-2xl opacity-50" />

      {/* Main Glass Card */}
      <div className="relative backdrop-blur-md bg-white/10 border border-white/10 rounded-2xl sm:rounded-3xl p-4 sm:p-6 md:p-8 lg:p-10 xl:p-16 shadow-[0_8px_32px_0_rgba(0,0,0,0.4)]">

        {/* Subtle top border highlight */}
        <div className="absolute top-0 left-1/4 w-1/2 h-[1px] bg-gradient-to-r from-transparent via-white/40 to-transparent" />

        {/* Eyebrow */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5 }}
          className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-5 md:mb-6"
        >
          <div className="w-8 sm:w-10 md:w-12 h-[1px] bg-gold-500" />
          <span className="text-gold-500 uppercase tracking-[0.2em] sm:tracking-[0.3em] text-xs sm:text-sm font-medium">
            Estudio Legal
          </span>
        </motion.div>

        {/* Main Headline - Asimetría intencional */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-light leading-[1.15] mb-4 sm:mb-6 md:mb-8 text-left"
        >
          Defendemos{" "}
          <span className="block text-transparent bg-clip-text bg-gradient-to-r from-white to-white/60">
            tus derechos
          </span>
          <span className="block text-gold-500 font-semibold italic mt-2 sm:mt-3">
            con excelencia
          </span>
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="text-white/70 text-base sm:text-lg md:text-xl lg:text-2xl max-w-3xl mb-8 sm:mb-10 md:mb-12 leading-relaxed text-left"
        >
          Más de 25 años de experiencia respaldando a empresas y personas
          en los momentos que más importan.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
          className="flex flex-col sm:flex-row gap-3 sm:gap-4"
        >
          {/* Primary CTA */}
          <button
            onClick={() => {
              const agendarSection = document.getElementById("agendar");
              agendarSection?.scrollIntoView({ behavior: "smooth" });
            }}
            className="group relative px-6 py-3 sm:px-8 sm:py-4 xl:px-10 xl:py-5 bg-gold-500 hover:bg-gold-400 transition-all duration-300 rounded-full font-medium text-sm sm:text-base xl:text-lg text-navy-950 overflow-hidden"
            aria-label="Agendar consulta legal gratuita"
          >
            <span className="relative z-10">Agendar Consulta</span>
            <div className="absolute inset-0 bg-gradient-to-r from-gold-400 to-gold-500 opacity-0 group-hover:opacity-100 transition-opacity" />
          </button>

          {/* Secondary CTA - Glass style */}
          <button
            onClick={() => {
              const areasSection = document.getElementById("areas");
              areasSection?.scrollIntoView({ behavior: "smooth" });
            }}
            className="group px-6 py-3 sm:px-8 sm:py-4 xl:px-10 xl:py-5 backdrop-blur-md bg-white/5 hover:bg-white/10 border border-white/20 hover:border-white/40 transition-all duration-300 rounded-full font-medium text-sm sm:text-base xl:text-lg"
            aria-label="Conocer más sobre nuestros servicios"
          >
            <span className="flex items-center gap-2">
              Conocer Más
              <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </span>
          </button>
        </motion.div>

        {/* Trust Indicators */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="flex flex-wrap items-center gap-4 sm:gap-6 md:gap-8 xl:gap-10 mt-6 sm:mt-8 md:mt-12 xl:mt-14 pt-6 sm:pt-8 xl:pt-10 border-t border-white/10"
        >
          <div className="flex items-center gap-2">
            <div className="text-2xl sm:text-3xl xl:text-4xl font-display font-bold text-gold-500">500+</div>
            <div className="text-xs sm:text-sm xl:text-base text-white/60">
              Casos<br />Ganados
            </div>
          </div>
          <div className="w-[1px] h-10 sm:h-12 xl:h-14 bg-white/10" />
          <div className="flex items-center gap-2">
            <div className="text-2xl sm:text-3xl xl:text-4xl font-display font-bold text-gold-500">25</div>
            <div className="text-xs sm:text-sm xl:text-base text-white/60">
              Años de<br />Experiencia
            </div>
          </div>
          <div className="w-[1px] h-10 sm:h-12 xl:h-14 bg-white/10" />
          <div className="flex items-center gap-2">
            <div className="text-2xl sm:text-3xl xl:text-4xl font-display font-bold text-gold-500">98%</div>
            <div className="text-xs sm:text-sm xl:text-base text-white/60">
              Tasa de<br />Éxito
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}
