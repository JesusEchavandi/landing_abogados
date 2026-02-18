"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const team = [
  {
    name: "Dr. Carlos Mendoza",
    role: "Socio Fundador",
    specialty: "Derecho Corporativo",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=500&fit=crop&auto=format",
    bio: "25+ años de experiencia en M&A y reestructuraciones corporativas.",
  },
  {
    name: "Dra. María Fernández",
    role: "Socia Senior",
    specialty: "Litigios",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=500&fit=crop&auto=format",
    bio: "Especialista en arbitraje internacional y resolución de conflictos.",
  },
  {
    name: "Dr. Roberto Silva",
    role: "Socio",
    specialty: "Tributario",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&h=500&fit=crop&auto=format",
    bio: "Experto en planificación fiscal y defensa tributaria estratégica.",
  },
  {
    name: "Dra. Ana Torres",
    role: "Socia",
    specialty: "Laboral",
    image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=400&h=500&fit=crop&auto=format",
    bio: "Líder en derecho laboral preventivo y gestión de crisis.",
  },
];

export default function LegalTeam() {
  const { ref, controls } = useScrollAnimation(0.1);

  return (
    <section ref={ref} className="relative py-24 bg-navy-900/30">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={controls}
          variants={{
            visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
          }}
          className="flex flex-col items-center w-full mb-16"
        >
          <div className="flex items-center justify-center gap-2 sm:gap-3 mb-4">
            <div className="w-6 sm:w-8 h-[1px] bg-gold-500" />
            <span className="text-gold-500 uppercase tracking-widest text-xs sm:text-sm">
              Nuestro Equipo
            </span>
            <div className="w-6 sm:w-8 h-[1px] bg-gold-500" />
          </div>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light mb-4 sm:mb-6 text-center">
            Profesionales de{" "}
            <span className="text-gold-500 font-semibold italic">Excelencia</span>
          </h2>
          <p className="text-white/60 text-base sm:text-lg md:text-xl text-center w-full max-w-3xl px-4">
            Un equipo multidisciplinario con experiencia internacional
            y compromiso con resultados excepcionales.
          </p>
        </motion.div>

        {/* Team Grid - Responsive */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {team.map((member, index) => (
            <TeamCard
              key={member.name}
              member={member}
              index={index}
              controls={controls}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function TeamCard({ member, index, controls }: any) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={controls}
      variants={{
        visible: {
          opacity: 1,
          y: 0,
          transition: {
            delay: index * 0.15,
            duration: 0.6,
          },
        },
      }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      className="group relative"
    >
      {/* Card - Responsive */}
      <div className="relative backdrop-blur-md bg-white/5 border border-white/10 rounded-xl sm:rounded-2xl overflow-hidden transition-all duration-500 hover:border-gold-500/30">

        {/* Image Container - Responsive height */}
        <div className="relative overflow-hidden aspect-[3/4] sm:h-80">
          <Image
            src={member.image}
            alt={member.name}
            fill
            className="object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-500"
          />

          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-950/50 to-transparent" />

          {/* Specialty tag - Responsive */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: isHovered ? 1 : 0, y: isHovered ? 0 : 20 }}
            className="absolute top-3 sm:top-4 right-3 sm:right-4 backdrop-blur-md bg-gold-500/20 border border-gold-500/30 rounded-full px-3 sm:px-4 py-1 text-xs sm:text-sm text-gold-500"
          >
            {member.specialty}
          </motion.div>
        </div>

        {/* Content - Responsive padding */}
        <div className="p-4 sm:p-5 md:p-6">
          <h3 className="font-display text-xl sm:text-2xl font-semibold mb-1">
            {member.name}
          </h3>
          <p className="text-gold-500 text-xs sm:text-sm font-medium mb-2 sm:mb-3">
            {member.role}
          </p>
          <motion.p
            initial={{ height: 0, opacity: 0 }}
            animate={{
              height: isHovered ? "auto" : 0,
              opacity: isHovered ? 1 : 0,
            }}
            className="text-white/60 text-xs sm:text-sm leading-relaxed overflow-hidden"
          >
            {member.bio}
          </motion.p>
        </div>

        {/* Bottom accent line */}
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: isHovered ? "100%" : 0 }}
          className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-gold-500 to-transparent"
        />
      </div>
    </motion.div>
  );
}
