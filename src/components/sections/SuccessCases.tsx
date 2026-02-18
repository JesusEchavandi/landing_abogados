"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import Image from "next/image";

const cases = [
  {
    id: 1,
    area: "Derecho Corporativo",
    title: "Fusión Empresarial Exitosa",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&h=600&fit=crop&auto=format",
    challenge: "Asesorar en la fusión de dos empresas medianas del sector retail con complejas estructuras accionarias.",
    solution: "Due diligence exhaustivo, reestructuración corporativa, negociación de términos y aprobación regulatoria.",
    result: "Fusión completada en 4 meses, generando sinergias de $2M USD anuales.",
    impact: "$2M USD",
    duration: "4 meses",
  },
  {
    id: 2,
    area: "Litigios y Arbitraje",
    title: "Defensa en Disputa Comercial de Alto Valor",
    image: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=800&h=600&fit=crop&auto=format",
    challenge: "Cliente demandado por incumplimiento de contrato con reclamación de $5M USD.",
    solution: "Estrategia de defensa sólida, análisis contractual detallado, arbitraje internacional.",
    result: "Sentencia favorable, cliente eximido del 90% de la reclamación.",
    impact: "$4.5M USD",
    duration: "18 meses",
  },
  {
    id: 3,
    area: "Derecho Laboral",
    title: "Resolución de Conflicto Colectivo",
    image: "https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=800&h=600&fit=crop&auto=format",
    challenge: "Empresa con 200 empleados enfrentando huelga por reclamos salariales y condiciones laborales.",
    solution: "Mediación con sindicato, negociación colectiva, reestructuración de beneficios conforme a ley.",
    result: "Acuerdo satisfactorio para ambas partes, sin despidos ni sanciones.",
    impact: "200 empleados",
    duration: "3 meses",
  },
  {
    id: 4,
    area: "Derecho Tributario",
    title: "Recuperación de Crédito Fiscal",
    image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&h=600&fit=crop&auto=format",
    challenge: "SUNAT rechazó solicitud de devolución de IGV por $800K, iniciando fiscalización.",
    solution: "Sustentación técnica documentada, presentación de descargos, recurso de reclamación.",
    result: "Resolución favorable, devolución completa del crédito fiscal.",
    impact: "$800K",
    duration: "12 meses",
  },
];

export default function SuccessCases() {
  const { ref, controls } = useScrollAnimation(0.1);
  const [expandedCase, setExpandedCase] = useState<number | null>(null);

  return (
    <section ref={ref} className="relative py-24 bg-navy-950">
      <div className="max-w-7xl mx-auto px-6">
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
              Casos de Éxito
            </span>
            <div className="w-6 sm:w-8 h-[1px] bg-gold-500" />
          </div>
          <h2 className="font-display text-4xl font-light mb-6 text-center">
            Resultados que{" "}
            <span className="text-gold-500 font-semibold italic">Importan</span>
          </h2>
          <p className="text-white/60 text-base sm:text-lg text-center w-full max-w-2xl px-4">
            Casos reales que demuestran nuestra experiencia y compromiso con la excelencia
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {cases.map((caseItem, index) => (
            <CaseCard
              key={caseItem.id}
              caseItem={caseItem}
              index={index}
              isExpanded={expandedCase === caseItem.id}
              onToggle={() => setExpandedCase(expandedCase === caseItem.id ? null : caseItem.id)}
              controls={controls}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function CaseCard({ caseItem, index, isExpanded, onToggle, controls }: any) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={controls}
      variants={{
        visible: {
          opacity: 1,
          y: 0,
          transition: { delay: index * 0.1, duration: 0.6 },
        },
      }}
      className="backdrop-blur-md bg-white/5 border border-white/10 rounded-xl sm:rounded-2xl overflow-hidden hover:border-gold-500/30 transition-all group"
    >
      <div className="relative h-48 sm:h-56 md:h-64 overflow-hidden">
        <Image
          src={caseItem.image}
          alt={caseItem.title}
          fill
          className="object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-950/50 to-transparent" />

        <div className="absolute top-3 sm:top-4 left-3 sm:left-4 backdrop-blur-md bg-gold-500/20 border border-gold-500/30 rounded-full px-3 sm:px-4 py-1 text-xs sm:text-sm text-gold-500">
          {caseItem.area}
        </div>
      </div>

      <div className="p-4 sm:p-5 md:p-6">
        <h3 className="font-display text-2xl font-semibold mb-4">{caseItem.title}</h3>

        <div className="space-y-4">
          <div>
            <h4 className="text-gold-500 font-semibold text-sm mb-2">Desafío</h4>
            <p className="text-white/70 text-sm">{caseItem.challenge}</p>
          </div>

          <motion.div
            initial={false}
            animate={{ height: isExpanded ? "auto" : 0, opacity: isExpanded ? 1 : 0 }}
            className="overflow-hidden space-y-4"
          >
            <div>
              <h4 className="text-gold-500 font-semibold text-sm mb-2">Solución</h4>
              <p className="text-white/70 text-sm">{caseItem.solution}</p>
            </div>

            <div>
              <h4 className="text-gold-500 font-semibold text-sm mb-2">Resultado</h4>
              <p className="text-white/70 text-sm">{caseItem.result}</p>
            </div>

            <div className="flex gap-4 pt-2">
              <div className="backdrop-blur-md bg-white/5 rounded-lg px-4 py-2">
                <div className="text-xs text-white/50">Impacto</div>
                <div className="text-gold-500 font-semibold">{caseItem.impact}</div>
              </div>
              <div className="backdrop-blur-md bg-white/5 rounded-lg px-4 py-2">
                <div className="text-xs text-white/50">Duración</div>
                <div className="text-gold-500 font-semibold">{caseItem.duration}</div>
              </div>
            </div>
          </motion.div>
        </div>

        <button
          onClick={onToggle}
          className="mt-4 flex items-center gap-2 text-gold-500 hover:text-gold-400 text-sm font-semibold transition-all group"
        >
          <span>{isExpanded ? "Ver menos" : "Ver más detalles"}</span>
          <svg
            className={`w-4 h-4 transition-transform ${isExpanded ? 'rotate-180' : ''}`}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </button>
      </div>
    </motion.div>
  );
}
