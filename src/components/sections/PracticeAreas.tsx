"use client";

import { motion } from "framer-motion";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { useState } from "react";
import PracticeAreaDetail from "./PracticeAreaDetail";
import {
  CorporateLawIcon,
  ArbitrationIcon,
  IPLawIcon,
  LaborLawIcon,
  TaxLawIcon,
  CriminalLawIcon,
} from "@/components/icons/LegalIcons";

const areas = [
  {
    title: "Derecho Corporativo",
    description: "Asesoría integral en fusiones, adquisiciones y compliance empresarial.",
    icon: CorporateLawIcon,
    size: "large", // Featured card
  },
  {
    title: "Litigios y Arbitraje",
    description: "Representación experta en conflictos comerciales y civiles complejos.",
    icon: ArbitrationIcon,
    size: "medium",
  },
  {
    title: "Propiedad Intelectual",
    description: "Protección de marcas, patentes y derechos de autor.",
    icon: IPLawIcon,
    size: "medium",
  },
  {
    title: "Laboral y RRHH",
    description: "Soluciones preventivas y contenciosas en relaciones laborales.",
    icon: LaborLawIcon,
    size: "small",
  },
  {
    title: "Tributario y Fiscal",
    description: "Planificación fiscal y defensa ante autoridades tributarias.",
    icon: TaxLawIcon,
    size: "small",
  },
  {
    title: "Derecho Penal",
    description: "Defensa estratégica en casos penales económicos y corporativos.",
    icon: CriminalLawIcon,
    size: "small",
  },
];

export default function PracticeAreas() {
  const { ref, controls } = useScrollAnimation(0.1);
  const [selectedArea, setSelectedArea] = useState<typeof areas[0] | null>(null);

  return (
    <section ref={ref} className="relative py-24 overflow-hidden">
      {selectedArea && (
        <PracticeAreaDetail area={selectedArea} onClose={() => setSelectedArea(null)} />
      )}
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-gold-500/5 to-transparent blur-3xl" />

      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header - Responsive */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={controls}
          variants={{
            visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
          }}
          className="mb-12 sm:mb-16 md:mb-20"
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="w-6 sm:w-8 h-[1px] bg-gold-500" />
            <span className="text-gold-500 uppercase tracking-widest text-xs sm:text-sm">
              Nuestras Especialidades
            </span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light text-left">
            Áreas de{" "}
            <span className="text-gold-500 font-semibold italic">Práctica</span>
          </h2>
        </motion.div>

        {/* Asymmetric Grid - Mobile First */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 sm:gap-5 md:gap-6">
          {areas.map((area, index) => (
            <AreaCard
              key={area.title}
              area={area}
              index={index}
              controls={controls}
              onClick={() => setSelectedArea(area)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function AreaCard({ area, index, controls, onClick }: any) {
  const gridClasses = {
    large: "md:col-span-8 md:row-span-2",
    medium: "md:col-span-4",
    small: "md:col-span-4",
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={controls}
      variants={{
        visible: {
          opacity: 1,
          y: 0,
          transition: {
            delay: index * 0.1,
            duration: 0.6,
            ease: [0.22, 1, 0.36, 1],
          },
        },
      }}
      onClick={onClick}
      className={`group relative cursor-pointer ${gridClasses[area.size as keyof typeof gridClasses]}`}
    >
      {/* Glass card - Responsive padding and min-height */}
      <div className="relative h-full backdrop-blur-md bg-white/5 hover:bg-white/10 border border-white/10 hover:border-gold-500/30 rounded-xl sm:rounded-2xl p-6 sm:p-8 transition-all duration-500 overflow-hidden flex flex-col">

        {/* Hover glow effect */}
        <div className="absolute inset-0 bg-gradient-to-br from-gold-500/0 group-hover:from-gold-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

        {/* Icon - Responsive size */}
        <motion.div
          whileHover={{ scale: 1.15, rotate: 5 }}
          transition={{ duration: 0.3 }}
          className="mb-4 sm:mb-6 text-gold-500"
        >
          <area.icon className="filter drop-shadow-[0_0_20px_rgba(212,175,55,0.5)] w-14 h-14 sm:w-16 sm:h-16 md:w-18 md:h-18" />
        </motion.div>

        {/* Content - Responsive typography */}
        <h3 className="font-display text-2xl font-semibold mb-3 sm:mb-4 group-hover:text-gold-500 transition-colors">
          {area.title}
        </h3>
        <p className="text-white/60 leading-relaxed mb-4 sm:mb-6 text-sm sm:text-base text-left">
          {area.description}
        </p>

        {/* CTA Link */}
        <div className="flex items-center gap-2 text-gold-500 font-medium group-hover:gap-4 transition-all mt-auto">
          <span>Ver más</span>
          <motion.svg
            animate={{ x: [0, 5, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-5 h-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </motion.svg>
        </div>

        {/* Decorative corner accent */}
        <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-gold-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-bl-full" />
      </div>
    </motion.div>
  );
}
