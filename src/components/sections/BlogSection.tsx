"use client";

import { motion } from "framer-motion";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import Image from "next/image";
import { useState } from "react";
import BlogDetail from "./BlogDetail";

const articles = [
  {
    id: 1,
    title: "Nueva Ley de Teletrabajo en Perú: Lo que Debes Saber",
    excerpt: "Analizamos las implicancias de la nueva regulación del teletrabajo y cómo afecta a empleadores y trabajadores.",
    image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=800&h=600&fit=crop&auto=format",
    category: "Derecho Laboral",
    date: "15 Feb 2024",
    readTime: "5 min",
  },
  {
    id: 2,
    title: "Reforma Tributaria 2024: Cambios Clave para Empresas",
    excerpt: "Guía completa sobre las modificaciones fiscales que entrarán en vigencia este año y su impacto en las empresas.",
    image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&h=600&fit=crop&auto=format",
    category: "Derecho Tributario",
    date: "10 Feb 2024",
    readTime: "8 min",
  },
  {
    id: 3,
    title: "Arbitraje vs Litigio: Cuándo Elegir Cada Opción",
    excerpt: "Comparativa detallada de ambos mecanismos de resolución de conflictos y cuál conviene según tu caso.",
    image: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=800&h=600&fit=crop&auto=format",
    category: "Litigios",
    date: "5 Feb 2024",
    readTime: "6 min",
  },
  {
    id: 4,
    title: "Fusiones y Adquisiciones: Tendencias 2024 en Perú",
    excerpt: "Análisis del mercado de M&A en el país y las oportunidades para empresas en diversos sectores.",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&h=600&fit=crop&auto=format",
    category: "Corporativo",
    date: "1 Feb 2024",
    readTime: "7 min",
  },
  {
    id: 5,
    title: "Protección de Datos Personales: Guía Completa para Empresas",
    excerpt: "Todo lo que necesitas saber sobre la Ley de Protección de Datos y cómo implementar el cumplimiento en tu empresa.",
    image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&h=600&fit=crop&auto=format",
    category: "Derecho Digital",
    date: "28 Ene 2024",
    readTime: "10 min",
  },
  {
    id: 6,
    title: "Contratos Internacionales: Errores Comunes a Evitar",
    excerpt: "Los 10 errores más frecuentes en la negociación y redacción de contratos internacionales y cómo prevenirlos.",
    image: "https://images.unsplash.com/photo-1521791136064-7986c2920216?w=800&h=600&fit=crop&auto=format",
    category: "Derecho Internacional",
    date: "22 Ene 2024",
    readTime: "9 min",
  },
];

export default function BlogSection() {
  const { ref, controls } = useScrollAnimation(0.1);
  const [selectedArticle, setSelectedArticle] = useState<typeof articles[0] | null>(null);
  const [showAllArticles, setShowAllArticles] = useState(false);

  // Mostrar primeros 3 por defecto, todos los 6 cuando se hace click
  const displayedArticles = showAllArticles ? articles : articles.slice(0, 3);

  return (
    <section ref={ref} className="relative py-24 bg-navy-900/30">
      {selectedArticle && (
        <BlogDetail article={selectedArticle} onClose={() => setSelectedArticle(null)} />
      )}
      <div className="max-w-6xl mx-auto px-6">
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
              Blog Legal
            </span>
            <div className="w-6 sm:w-8 h-[1px] bg-gold-500" />
          </div>
          <h2 className="font-display text-4xl font-light mb-6 text-center">
            Recursos y{" "}
            <span className="text-gold-500 font-semibold italic">Actualizaciones</span>
          </h2>
          <p className="text-white/60 text-base sm:text-lg text-center w-full max-w-2xl px-4">
            Mantente informado con análisis, guías y noticias sobre derecho peruano
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
          {displayedArticles.map((article, index) => (
            <ArticleCard
              key={article.id}
              article={article}
              index={index}
              controls={controls}
              onClick={() => setSelectedArticle(article)}
            />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={controls}
          variants={{
            visible: { opacity: 1, y: 0, transition: { delay: 0.5, duration: 0.6 } },
          }}
          className="text-center mt-8 sm:mt-10 md:mt-12"
        >
          <button
            onClick={() => setShowAllArticles(!showAllArticles)}
            className="backdrop-blur-md bg-white/5 border border-white/10 hover:border-gold-500/50 px-5 py-2.5 sm:px-8 sm:py-3 rounded-full text-white hover:text-gold-500 transition-all inline-flex items-center gap-2 text-sm sm:text-base"
          >
            <span>{showAllArticles ? "Ver menos artículos" : "Ver todos los artículos"}</span>
            <span className="text-xs bg-gold-500/20 px-2 py-1 rounded-full">
              {showAllArticles ? "6" : `3 más`}
            </span>
          </button>
        </motion.div>
      </div>
    </section>
  );
}

function ArticleCard({ article, index, controls, onClick }: any) {
  return (
    <article
      onClick={onClick}
      style={{
        opacity: 1,
        backgroundColor: 'rgba(30, 41, 54, 0.8)',
        border: '2px solid rgba(212, 175, 55, 0.3)',
        borderRadius: '16px'
      }}
      className="overflow-hidden hover:border-gold-500/50 transition-all group cursor-pointer shadow-xl"
    >
      <div className="relative h-40 sm:h-44 md:h-48 overflow-hidden">
        <Image
          src={article.image}
          alt={article.title}
          fill
          className="object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-950/30 to-transparent" />

        <div className="absolute top-2 left-2 sm:top-4 sm:left-4 backdrop-blur-md bg-gold-500/20 border border-gold-500/30 rounded-full px-3 py-1 sm:px-4 sm:py-1.5 text-xs text-gold-500 font-semibold shadow-lg">
          {article.category}
        </div>
      </div>

      <div className="p-4 sm:p-5 md:p-6">
        <div className="flex items-center gap-2 sm:gap-3 md:gap-4 text-xs text-white/50 mb-2 sm:mb-3">
          <span>{article.date}</span>
          <span>•</span>
          <span>{article.readTime} lectura</span>
        </div>

        <h3 className="font-display text-base sm:text-lg md:text-xl font-semibold mb-2 sm:mb-3 line-clamp-2 group-hover:text-gold-500 transition-colors">
          {article.title}
        </h3>

        <p className="text-white/60 text-xs sm:text-sm line-clamp-2 sm:line-clamp-3 mb-3 sm:mb-4">
          {article.excerpt}
        </p>

        <div className="flex items-center text-gold-500 text-xs sm:text-sm font-semibold group-hover:gap-2 transition-all">
          <span>Leer más</span>
          <span className="inline-block transform group-hover:translate-x-1 transition-transform">→</span>
        </div>
      </div>
    </article>
  );
}
