"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect } from "react";
import {
  CorporateLawIcon,
  ArbitrationIcon,
  IPLawIcon,
  LaborLawIcon,
  TaxLawIcon,
  CriminalLawIcon,
} from "@/components/icons/LegalIcons";

interface PracticeAreaDetailProps {
  area: {
    icon: React.ComponentType<any>;
    title: string;
    description: string;
    size: string;
  };
  onClose: () => void;
}

export default function PracticeAreaDetail({ area, onClose }: PracticeAreaDetailProps) {
  // Bloquear scroll de la página principal cuando el modal está abierto
  useEffect(() => {
    // Guardar el scroll actual
    const scrollY = window.scrollY;
    
    // Bloquear scroll y mantener posición
    document.body.style.position = 'fixed';
    document.body.style.top = `-${scrollY}px`;
    document.body.style.width = '100%';
    document.body.style.overflow = 'hidden';
    
    return () => {
      // Restaurar scroll
      document.body.style.position = '';
      document.body.style.top = '';
      document.body.style.width = '';
      document.body.style.overflow = '';
      window.scrollTo(0, scrollY);
    };
  }, []);
  const detailedInfo: Record<string, any> = {
    "Derecho Corporativo": {
      services: [
        "Constitución de empresas y estructuración corporativa",
        "Fusiones y adquisiciones (M&A)",
        "Contratos comerciales y acuerdos de confidencialidad",
        "Cumplimiento normativo y gobernanza corporativa",
        "Resolución de disputas societarias"
      ],
      benefits: [
        "Asesoría personalizada 24/7",
        "Respuesta en menos de 2 horas",
        "Equipo multidisciplinario",
        "Tecnología de vanguardia",
        "Costos transparentes",
        "Sin sorpresas en facturación"
      ],
      cases: "Más de 500 empresas asesoradas con 98% de satisfacción"
    },
    "Litigios y Arbitraje": {
      services: [
        "Representación en arbitrajes nacionales e internacionales",
        "Litigios comerciales y civiles complejos",
        "Mediación y resolución alternativa de conflictos (ADR)",
        "Ejecución de laudos arbitrales y sentencias",
        "Recursos de anulación y apelación",
        "Due diligence en controversias"
      ],
      benefits: [
        "Estrategia litigiosa basada en datos",
        "Equipo con experiencia en arbitraje CCI, CIADI y CAM",
        "Tasa de éxito del 92% en arbitrajes",
        "Análisis predictivo de casos",
        "Red de peritos internacionales",
        "Costos por resultado en casos seleccionados"
      ],
      cases: "Más de 200 arbitrajes ganados, recuperando S/150 millones para nuestros clientes"
    },
    "Propiedad Intelectual": {
      services: [
        "Registro y protección de marcas, patentes y diseños industriales",
        "Defensa contra infracciones y falsificaciones",
        "Contratos de licencia y transferencia de tecnología",
        "Derechos de autor y software",
        "Nombres de dominio y protección digital",
        "Auditorías de activos intangibles"
      ],
      benefits: [
        "Especialistas registrados ante INDECOPI",
        "Monitoreo continuo de marcas",
        "Protección internacional coordinada",
        "Estrategia de portfolio de PI",
        "Defensa agresiva contra piratas",
        "Valorización de activos intangibles"
      ],
      cases: "Más de 800 marcas registradas y protegidas exitosamente"
    },
    "Laboral y RRHH": {
      services: [
        "Despidos individuales y colectivos",
        "Elaboración de contratos de trabajo y reglamentos internos",
        "Negociación colectiva y gestión sindical",
        "Accidentes de trabajo y enfermedades ocupacionales",
        "Auditorías laborales y compliance",
        "Reestructuraciones empresariales"
      ],
      benefits: [
        "Equipo con experiencia en grandes empresas",
        "Prevención de contingencias laborales",
        "Defensa efectiva ante SUNAFIL",
        "Capacitación in-house incluida",
        "Protocolos de hostigamiento y discriminación",
        "Costos predecibles y transparentes"
      ],
      cases: "Más de 1,200 trabajadores y 300 empresas asesorados con éxito"
    },
    "Tributario y Fiscal": {
      services: [
        "Planificación tributaria y optimización fiscal",
        "Defensa ante SUNAT (fiscalizaciones, cobranzas coactivas)",
        "Precios de transferencia y operaciones internacionales",
        "Recursos de reclamación y apelación ante Tribunal Fiscal",
        "Due diligence tributario en M&A",
        "Regularización voluntaria y fraccionamientos"
      ],
      benefits: [
        "Especialistas ex-SUNAT en nuestro equipo",
        "Ahorro fiscal promedio del 30%",
        "Estrategia preventiva y litigiosa",
        "Tecnología para análisis de riesgos",
        "Red de corresponsales internacionales",
        "Éxito del 85% en recursos ante Tribunal Fiscal"
      ],
      cases: "Ahorro acumulado de S/80 millones en impuestos para nuestros clientes"
    },
    "Derecho Penal": {
      services: [
        "Defensa en procesos penales (delitos graves y leves)",
        "Representación en audiencias y juicios orales",
        "Recursos de apelación y casación",
        "Asesoría en delitos económicos y blanqueo de capitales",
        "Acompañamiento en investigaciones fiscales",
        "Compliance penal y programas de prevención"
      ],
      benefits: [
        "Disponibilidad 24/7 en emergencias",
        "Respuesta inmediata",
        "Estrategia de defensa personalizada",
        "Confidencialidad absoluta",
        "Red de peritos especializados",
        "Experiencia en altos tribunales"
      ],
      cases: "Absolución o reducción de penas en el 85% de los casos defendidos"
    }
  };

  const info = detailedInfo[area.title] || {};

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-navy-950/90 backdrop-blur-sm"
        onClick={onClose}
        style={{ overflow: 'hidden' }}
      >
        <motion.div
          initial={{ scale: 0.9, y: 20 }}
          animate={{ scale: 1, y: 0 }}
          exit={{ scale: 0.9, y: 20 }}
          onClick={(e) => e.stopPropagation()}
          className="relative w-full max-w-4xl max-h-[90vh] bg-navy-900 border border-gold-500/30 rounded-2xl shadow-2xl flex flex-col overflow-hidden"
        >
          {/* Header Fixed */}
          <div className="flex-shrink-0 p-8 pb-4 border-b border-white/10">
            {/* Close button */}
            <button
              onClick={onClose}
              className="absolute top-6 right-6 w-10 h-10 bg-navy-900/80 border border-white/20 rounded-full flex items-center justify-center text-white/60 hover:text-white hover:border-gold-500/50 transition-colors z-10"
              aria-label="Cerrar"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            <div className="mb-4 text-gold-500 flex justify-center">
              <area.icon className="filter drop-shadow-[0_0_30px_rgba(212,175,55,0.5)]" size={96} />
            </div>
            <h2 className="font-display text-responsive-3xl font-semibold mb-3 sm:mb-4">{area.title}</h2>
            <p className="text-white/70 text-lg">{area.description}</p>
          </div>

          {/* Scrollable Content */}
          <div className="flex-1 overflow-y-auto px-8 py-6 custom-scrollbar" style={{ overflowY: 'auto' }}>
            {/* Services */}
            {info.services && (
              <div className="mb-8">
                <h3 className="text-responsive-2xl font-semibold mb-3 sm:mb-4 text-gold-500">Servicios Especializados</h3>
                <ul className="space-y-3">
                  {info.services.map((service: string, index: number) => (
                    <li key={index} className="flex items-start gap-3">
                      <svg className="w-6 h-6 text-gold-500 flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span className="text-white/80">{service}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Benefits */}
            {info.benefits && (
              <div className="mb-8">
                <h3 className="text-responsive-2xl font-semibold mb-3 sm:mb-4 text-gold-500">Beneficios Clave</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {info.benefits.map((benefit: string, index: number) => (
                    <div key={index} className="flex items-start gap-3 bg-white/5 rounded-xl p-4 border border-white/10">
                      <svg className="w-5 h-5 text-gold-500 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-white/70 text-sm">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Track Record */}
            {info.cases && (
              <div className="mb-6 p-6 bg-gold-500/10 border border-gold-500/30 rounded-xl">
                <h3 className="text-xl font-semibold mb-2 text-gold-500">Nuestro Historial</h3>
                <p className="text-white/70">{info.cases}</p>
              </div>
            )}
          </div>

          {/* Footer Fixed */}
          <div className="flex-shrink-0 p-6 border-t border-white/10 bg-navy-900/50">
            <div className="flex gap-4">
              <button 
                onClick={() => {
                  onClose();
                  const agendarSection = document.getElementById("agendar");
                  agendarSection?.scrollIntoView({ behavior: "smooth" });
                }}
                className="flex-1 px-6 py-3 bg-gold-500 hover:bg-gold-400 text-navy-950 font-semibold rounded-xl transition-all"
              >
                Consulta Gratuita
              </button>
              <button 
                onClick={onClose}
                className="px-6 py-3 bg-white/5 hover:bg-white/10 border border-white/10 text-white font-semibold rounded-xl transition-all"
              >
                Cerrar
              </button>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
