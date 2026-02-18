"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { GeneralIcon, HonorariosIcon, ProcessIcon, SpecializationIcon, ChatIcon } from "@/components/icons/LegalIcons";

const faqData = [
  {
    category: "General",
    icon: GeneralIcon,
    questions: [
      {
        q: "¿Cuánto cuesta la primera consulta?",
        a: "La primera consulta es completamente GRATUITA y sin compromiso. Durante esta reunión de 30-45 minutos, evaluaremos tu caso, te brindaremos una orientación inicial y te presentaremos nuestras opciones de servicio.",
      },
      {
        q: "¿En qué horarios atienden?",
        a: "Nuestro horario de atención es de lunes a viernes de 9:00 AM a 7:00 PM, y sábados de 9:00 AM a 1:00 PM. Para emergencias, contamos con un número de contacto 24/7 para clientes activos.",
      },
      {
        q: "¿Ofrecen consultas virtuales?",
        a: "Sí, ofrecemos consultas 100% virtuales vía Zoom, Google Meet o WhatsApp Video. También puedes visitarnos en nuestras oficinas en Lima. Tú decides la modalidad que más te convenga.",
      },
    ],
  },
  {
    category: "Honorarios",
    icon: HonorariosIcon,
    questions: [
      {
        q: "¿Cómo funcionan sus honorarios?",
        a: "Trabajamos con tres modalidades: (1) Tarifa por hora para consultas puntuales, (2) Tarifa fija para casos específicos con alcance definido, (3) Cuota de éxito para litigios (% del monto recuperado). Te presentamos opciones en la primera consulta.",
      },
      {
        q: "¿Aceptan planes de pago?",
        a: "Sí, entendemos que algunos casos pueden extenderse en el tiempo. Ofrecemos planes de pago flexibles ajustados a tu situación. También aceptamos Yape, Plin, transferencias bancarias y tarjetas de crédito.",
      },
      {
        q: "¿Hay costos ocultos?",
        a: "No. Todos nuestros honorarios y gastos son transparentes desde el inicio. Te entregaremos un contrato claro que detalla costos, alcances y cronograma. Sin sorpresas.",
      },
    ],
  },
  {
    category: "Proceso Legal",
    icon: ProcessIcon,
    questions: [
      {
        q: "¿Cuánto tiempo toma un caso típico?",
        a: "Depende del tipo de caso. Una consultoría corporativa puede resolverse en 2-4 semanas. Un arbitraje comercial puede tomar 6-12 meses. Un litigio civil puede extenderse 1-3 años. Te daremos un estimado realista en la primera consulta.",
      },
      {
        q: "¿Qué necesito para iniciar?",
        a: "Para la primera consulta, trae todos los documentos relevantes (contratos, correos, facturas, notificaciones, etc.). Si no los tienes todos, no hay problema, empezaremos con lo que tengas y solicitaremos el resto después.",
      },
      {
        q: "¿Puedo cambiar de abogado si ya tengo uno?",
        a: "Sí, tienes derecho a cambiar de representante legal en cualquier momento. Nosotros nos encargamos de la transición de forma profesional, solicitando los expedientes y poniéndonos al día rápidamente.",
      },
    ],
  },
  {
    category: "Especialización",
    icon: SpecializationIcon,
    questions: [
      {
        q: "¿Atienden casos fuera de Lima?",
        a: "Sí, atendemos casos en todo el Perú. Tenemos experiencia representando clientes en Arequipa, Cusco, Trujillo y otras ciudades. Para casos fuera de Lima, coordinamos viajes o trabajamos con corresponsales locales de confianza.",
      },
      {
        q: "¿Manejan casos internacionales?",
        a: "Sí, tenemos experiencia en arbitraje internacional, transacciones cross-border y casos con elementos extranjeros. Trabajamos con firmas aliadas en EE.UU., España y otros países cuando es necesario.",
      },
      {
        q: "¿Qué pasa si mi caso no es su especialidad?",
        a: "Te seremos honestos desde el inicio. Si tu caso requiere una especialización que no manejamos, te referiremos a colegas de confianza sin ningún costo. Tu interés es nuestra prioridad.",
      },
    ],
  },
];

export default function FAQ() {
  const { ref, controls } = useScrollAnimation(0.1);
  const [activeCategory, setActiveCategory] = useState(0);
  const [openQuestion, setOpenQuestion] = useState<string | number | null>(null);
  const [searchTerm, setSearchTerm] = useState("");

  // Filter questions based on search
  const filteredFAQ = searchTerm
    ? faqData.map((cat) => ({
      ...cat,
      questions: cat.questions.filter(
        (q) =>
          q.q.toLowerCase().includes(searchTerm.toLowerCase()) ||
          q.a.toLowerCase().includes(searchTerm.toLowerCase())
      ),
    })).filter((cat) => cat.questions.length > 0)
    : faqData;

  return (
    <section ref={ref} className="relative py-24 overflow-hidden bg-navy-900/30">
      <div className="max-w-6xl mx-auto px-6">
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
              Preguntas Frecuentes
            </span>
            <div className="w-6 sm:w-8 h-[1px] bg-gold-500" />
          </div>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light mb-4 sm:mb-6 text-center">
            ¿Tienes{" "}
            <span className="text-gold-500 font-semibold italic">dudas?</span>
          </h2>
          <p className="text-white/60 text-base sm:text-lg md:text-xl text-center w-full max-w-3xl px-4 mb-8">
            Aquí respondemos las preguntas más comunes. Si no encuentras tu respuesta,
            contáctanos directamente.
          </p>

          {/* Search Bar */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={controls}
            variants={{
              visible: {
                opacity: 1,
                y: 0,
                transition: { delay: 0.2, duration: 0.5 },
              },
            }}
            className="max-w-2xl mx-auto"
          >
            <div className="relative">
              <input
                type="text"
                placeholder="Busca tu pregunta..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full px-4 py-3 pl-12 bg-white/5 border border-white/10 rounded-full focus:border-gold-500 focus:ring-2 focus:ring-gold-500/20 outline-none transition-all placeholder:text-white/30"
              />
              <svg
                className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-white/40"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </div>
          </motion.div>
        </motion.div>

        {/* Category Tabs */}
        {!searchTerm && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={controls}
            variants={{
              visible: {
                opacity: 1,
                transition: { delay: 0.3, duration: 0.5 },
              },
            }}
            className="flex flex-wrap justify-center gap-3 mb-12"
          >
            {faqData.map((category, index) => (
              <button
                key={category.category}
                onClick={() => setActiveCategory(index)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 flex items-center gap-2 ${activeCategory === index
                  ? "bg-gold-500 text-navy-950"
                  : "bg-white/5 text-white/70 hover:bg-white/10 border border-white/10"
                  }`}
              >
                <category.icon size={20} className={activeCategory === index ? "text-navy-950" : "text-gold-500"} />
                {category.category}
              </button>
            ))}
          </motion.div>
        )}

        {/* Questions */}
        <div className="space-y-4">
          {(searchTerm ? filteredFAQ : [faqData[activeCategory]]).map(
            (category, catIndex) => (
              <div key={category.category}>
                {searchTerm && (
                  <h3 className="text-gold-500 font-semibold mb-4 flex items-center gap-2">
                    <category.icon size={24} />
                    {category.category}
                  </h3>
                )}
                {category.questions.map((item, qIndex) => {
                  const questionId = searchTerm
                    ? `${catIndex}-${qIndex}`
                    : qIndex;
                  const isOpen = openQuestion === questionId;

                  return (
                    <div
                      key={questionId}
                      style={{
                        backgroundColor: 'rgba(30, 41, 54, 0.8)',
                        border: '2px solid rgba(212, 175, 55, 0.3)',
                        borderRadius: '12px',
                        overflow: 'visible',
                        marginBottom: '12px',
                        opacity: 1
                      }}
                      className="transition-all shadow-xl"
                    >
                      {/* Question */}
                      <button
                        onClick={() => setOpenQuestion(isOpen ? null : questionId)}
                        className="w-full px-6 py-4 flex items-center justify-between text-left group"
                      >
                        <span className="font-semibold text-white group-hover:text-gold-500 transition-colors pr-4">
                          {item.q}
                        </span>
                        <motion.svg
                          animate={{ rotate: isOpen ? 180 : 0 }}
                          transition={{ duration: 0.3 }}
                          className="w-5 h-5 text-gold-500 flex-shrink-0"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M19 9l-7 7-7-7"
                          />
                        </motion.svg>
                      </button>

                      {/* Answer */}
                      {isOpen && (
                        <div
                          className="px-6 py-4 leading-relaxed text-sm sm:text-base text-white/90"
                          style={{
                            backgroundColor: '#1E2936',
                            borderTop: '2px solid #D4AF37',
                          }}
                        >
                          {item.a}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            )
          )}
        </div>

        {/* No Results */}
        {searchTerm && filteredFAQ.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-12"
          >
            <div className="mb-4 flex justify-center">
              <svg className="w-24 h-24 text-gold-500 filter drop-shadow-[0_0_25px_rgba(212,175,55,0.5)] animate-pulse" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
            <p className="text-white/60 mb-4">
              No encontramos respuestas para "{searchTerm}"
            </p>
            <button
              onClick={() => {
                const contactSection = document.getElementById("contacto");
                contactSection?.scrollIntoView({ behavior: "smooth" });
              }}
              className="text-gold-500 hover:text-gold-400 font-medium"
            >
              Contáctanos directamente →
            </button>
          </motion.div>
        )}

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={controls}
          variants={{
            visible: {
              opacity: 1,
              y: 0,
              transition: { delay: 0.6, duration: 0.5 },
            },
          }}
          className="mt-12 text-center backdrop-blur-md bg-white/10 border border-white/10 rounded-2xl p-8"
        >
          <h3 className="font-display text-2xl font-semibold mb-3">
            ¿No encontraste tu respuesta?
          </h3>
          <p className="text-white/60 mb-6">
            Estamos aquí para ayudarte. Agenda una consulta gratuita o escríbenos
            por WhatsApp.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => {
                const contactSection = document.getElementById("contacto");
                contactSection?.scrollIntoView({ behavior: "smooth" });
              }}
              className="px-8 py-3 bg-gold-500 hover:bg-gold-400 text-navy-950 font-semibold rounded-full transition-all"
            >
              Agendar Consulta Gratis
            </button>
            <a
              href="https://wa.me/51987654321?text=Hola,%20tengo%20una%20pregunta%20sobre..."
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3 bg-white/5 hover:bg-white/10 text-white border border-white/10 hover:border-gold-500/30 font-semibold rounded-full transition-all flex items-center justify-center gap-2"
            >
              <ChatIcon size={20} className="inline-block" /> WhatsApp
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
