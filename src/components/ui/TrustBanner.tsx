"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { ArbitrationIcon, ChartIcon, LaborLawIcon, AwardIcon } from "@/components/icons/LegalIcons";

const stats = [
  { icon: ArbitrationIcon, value: "500+", label: "Casos Ganados" },
  { icon: ChartIcon, value: "98%", label: "Tasa de Éxito" },
  { icon: LaborLawIcon, value: "1000+", label: "Clientes Satisfechos" },
  { icon: AwardIcon, value: "25+", label: "Años de Experiencia" },
];

export default function TrustBanner() {
  const [activeClients, setActiveClients] = useState(3);

  // Simulate active clients counter
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveClients(prev => (prev >= 8 ? 3 : prev + 1));
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="relative py-8 border-y border-white/10 bg-gradient-to-r from-transparent via-white/5 to-transparent"
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* Active users indicator */}
        <div className="flex items-center justify-center gap-2 mb-6">
          <div className="flex -space-x-2">
            {[1, 2, 3].map((i) => (
              <div
                key={i}
                className="w-8 h-8 rounded-full bg-gradient-to-br from-gold-500 to-gold-600 border-2 border-navy-950 flex items-center justify-center text-xs font-bold text-navy-950"
              >
                {String.fromCharCode(64 + i)}
              </div>
            ))}
          </div>
          <div className="flex flex-wrap items-center gap-2 text-sm text-center sm:text-left">
            <motion.div
              key={activeClients}
              initial={{ scale: 1.3, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"
            />
            <span className="text-white/70">
              <motion.span
                key={activeClients}
                initial={{ y: -10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                className="font-semibold text-emerald-500"
              >
                {activeClients}
              </motion.span>{" "}
              personas están consultando ahora
            </span>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="text-center"
            >
              <div className="mb-2 text-gold-500 flex justify-center">
                <stat.icon size={48} className="filter drop-shadow-[0_0_15px_rgba(212,175,55,0.4)]" />
              </div>
              <div className="font-display text-2xl font-bold text-gold-500 mb-1">
                {stat.value}
              </div>
              <div className="text-sm text-white/60">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
