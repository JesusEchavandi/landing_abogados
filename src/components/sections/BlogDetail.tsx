"use client";

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useEffect } from "react";

interface BlogDetailProps {
  article: {
    id: number;
    title: string;
    excerpt: string;
    image: string;
    category: string;
    date: string;
    readTime: string;
    content?: string;
  };
  onClose: () => void;
}

export default function BlogDetail({ article, onClose }: BlogDetailProps) {
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
  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-navy-950/90 backdrop-blur-sm overflow-hidden"
        onClick={onClose}
      >
        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 50, scale: 0.95 }}
          transition={{ duration: 0.3 }}
          className="relative max-w-4xl w-full max-h-[90vh] backdrop-blur-glass bg-glass-medium border border-white/10 rounded-3xl flex flex-col overflow-hidden"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-6 right-6 z-10 w-10 h-10 bg-navy-900/80 border border-white/20 rounded-full flex items-center justify-center text-white/60 hover:text-white hover:border-gold-500/50 transition-colors"
            aria-label="Cerrar"
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          {/* Header Image - Fixed */}
          <div className="relative h-80 overflow-hidden rounded-t-3xl flex-shrink-0">
            <Image
              src={article.image}
              alt={article.title}
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-950/50 to-transparent" />
            
            <div className="absolute top-6 left-6 backdrop-blur-md bg-gold-500/20 border border-gold-500/30 rounded-full px-4 py-2 text-sm text-gold-500">
              {article.category}
            </div>
          </div>

          {/* Scrollable Content */}
          <div className="flex-1 overflow-y-auto p-8 md:p-12 custom-scrollbar">
            {/* Meta info */}
            <div className="flex items-center gap-4 text-sm text-white/50 mb-4">
              <span>{article.date}</span>
              <span>•</span>
              <span>{article.readTime} lectura</span>
            </div>

            {/* Title */}
            <h1 className="font-display text-responsive-3xl font-semibold mb-4 sm:mb-6">
              {article.title}
            </h1>

            {/* Content */}
            <div className="prose prose-invert prose-gold max-w-none">
              <p className="text-white/70 text-lg leading-relaxed mb-6">
                {article.excerpt}
              </p>
              
              <div className="space-y-4 text-white/70 leading-relaxed">
                <p>
                  En el cambiante panorama legal peruano, mantenerse actualizado con las últimas 
                  regulaciones y jurisprudencia es fundamental para tomar decisiones informadas. 
                  Este artículo profundiza en los aspectos más relevantes del tema.
                </p>
                
                <h2 className="text-responsive-2xl font-semibold text-white mt-6 sm:mt-8 mb-3 sm:mb-4">Contexto Legal</h2>
                <p>
                  La regulación actual presenta diversos desafíos y oportunidades para empresas 
                  y personas naturales. Nuestro equipo de expertos ha analizado los puntos clave 
                  que debes conocer para proteger tus intereses.
                </p>

                <h2 className="text-responsive-2xl font-semibold text-white mt-6 sm:mt-8 mb-3 sm:mb-4">Implicancias Prácticas</h2>
                <ul className="list-disc list-inside space-y-2 text-white/70">
                  <li>Cumplimiento normativo y mejores prácticas</li>
                  <li>Estrategias de mitigación de riesgos</li>
                  <li>Plazos y procedimientos a considerar</li>
                  <li>Documentación requerida</li>
                </ul>

                <h2 className="text-responsive-2xl font-semibold text-white mt-6 sm:mt-8 mb-3 sm:mb-4">Recomendaciones</h2>
                <p>
                  Basados en nuestra experiencia de más de 25 años, recomendamos una evaluación 
                  personalizada de cada caso. Nuestro equipo está disponible para brindarte 
                  asesoría especializada adaptada a tu situación particular.
                </p>

                <div className="mt-8 p-6 bg-gold-500/10 border border-gold-500/30 rounded-xl">
                  <p className="text-gold-500 font-semibold mb-2">¿Necesitas asesoría especializada?</p>
                  <p className="text-white/70 text-sm">
                    Agenda una consulta gratuita con nuestros expertos y obtén orientación 
                    personalizada sobre tu caso.
                  </p>
                </div>
              </div>
            </div>

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
                className="px-6 py-3 bg-gold-500 hover:bg-gold-400 text-navy-950 font-semibold rounded-xl transition-all"
              >
                Agendar Consulta Gratuita
              </button>
              <button 
                onClick={onClose}
                className="px-6 py-3 bg-white/5 hover:bg-white/10 border border-white/10 text-white font-semibold rounded-xl transition-all"
              >
                Ver Más Artículos
              </button>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
