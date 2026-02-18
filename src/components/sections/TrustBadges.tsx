"use client";

import { motion } from "framer-motion";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { ArbitrationIcon, AwardIcon, ChartIcon, LaborLawIcon } from "@/components/icons/LegalIcons";

const stats = [
  { number: "500+", label: "Casos Ganados", icon: ArbitrationIcon },
  { number: "25+", label: "Años de Experiencia", icon: AwardIcon },
  { number: "98%", label: "Tasa de Éxito", icon: ChartIcon },
  { number: "200+", label: "Clientes Satisfechos", icon: LaborLawIcon },
];

const certifications = [
  { name: "Chambers & Partners", rank: "Band 1" },
  { name: "Legal 500", rank: "Leading Firm" },
  { name: "Best Lawyers", rank: "Recognized" },
  { name: "Super Lawyers", rank: "Top Rated" },
];

export default function TrustBadges() {
  const { ref, controls } = useScrollAnimation(0.2);

  return (
    <section ref={ref} className="relative py-24 overflow-hidden bg-navy-900/50">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-r from-gold-500/5 via-transparent to-gold-500/5" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              animate={controls}
              variants={{
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: {
                    delay: index * 0.1,
                    duration: 0.5,
                  },
                },
              }}
              className="text-center"
            >
              <div className="backdrop-blur-md bg-white/5 border border-white/10 rounded-2xl p-6 hover:border-gold-500/30 transition-all duration-300 group">
                {/* Icon */}
                <div className="mb-3 text-gold-500 flex justify-center">
                  <stat.icon size={56} className="group-hover:scale-125 transition-all duration-300 filter drop-shadow-[0_0_20px_rgba(212,175,55,0.4)]" />
                </div>

                {/* Number with counter animation */}
                <motion.div
                  initial={{ scale: 0.5, opacity: 0 }}
                  animate={controls}
                  variants={{
                    visible: {
                      scale: 1,
                      opacity: 1,
                      transition: {
                        delay: index * 0.1 + 0.2,
                        duration: 0.5,
                        type: "spring",
                      },
                    },
                  }}
                  className="font-display text-3xl font-bold text-gold-500 mb-2"
                >
                  {stat.number}
                </motion.div>

                {/* Label */}
                <p className="text-white/70 text-sm font-medium">
                  {stat.label}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Certifications */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={controls}
          variants={{
            visible: {
              opacity: 1,
              y: 0,
              transition: {
                delay: 0.4,
                duration: 0.6,
              },
            },
          }}
        >
          <h3 className="text-center text-white/60 text-sm uppercase tracking-widest mb-8">
            Reconocido por las mejores instituciones legales
          </h3>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {certifications.map((cert, index) => (
              <motion.div
                key={cert.name}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={controls}
                variants={{
                  visible: {
                    opacity: 1,
                    scale: 1,
                    transition: {
                      delay: 0.5 + index * 0.1,
                      duration: 0.4,
                    },
                  },
                }}
                className="backdrop-blur-md bg-white/5 border border-white/10 rounded-xl p-4 text-center hover:bg-white/10 hover:border-gold-500/30 transition-all group"
              >
                <div className="text-gold-500 font-semibold text-sm mb-1 group-hover:scale-105 transition-transform">
                  {cert.name}
                </div>
                <div className="text-white/50 text-xs">
                  {cert.rank}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* ISO Certification Badge */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={controls}
          variants={{
            visible: {
              opacity: 1,
              transition: { delay: 0.9, duration: 0.5 },
            },
          }}
          className="mt-12 text-center"
        >
          <div className="inline-flex items-center gap-3 backdrop-blur-md bg-gold-500/10 border border-gold-500/30 rounded-full px-6 py-3">
            <AwardIcon size={32} className="text-gold-500 filter drop-shadow-[0_0_15px_rgba(212,175,55,0.5)]" />
            <div className="text-left">
              <div className="text-gold-500 font-semibold text-sm">
                ISO 9001:2015 Certified
              </div>
              <div className="text-white/50 text-xs">
                Gestión de Calidad Certificada
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
