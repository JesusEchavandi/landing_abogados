"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

export default function WhatsAppButton() {
  const [isHovered, setIsHovered] = useState(false);
  const [showMenu, setShowMenu] = useState(false);

  const quickMessages = [
    {
      icon: "⚖️",
      label: "Consulta Legal",
      message: "Hola, necesito asesoría legal sobre:",
    },
    {
      icon: "📅",
      label: "Agendar Cita",
      message: "Hola, quisiera agendar una cita para una consulta",
    },
    {
      icon: "💼",
      label: "Caso Corporativo",
      message: "Hola, tengo un caso de derecho corporativo",
    },
    {
      icon: "👥",
      label: "Caso Laboral",
      message: "Hola, necesito ayuda con un tema laboral",
    },
  ];

  // Detect business hours (Mon-Fri 9am-7pm, Sat 9am-1pm Lima time)
  const now = new Date();
  const day = now.getDay(); // 0 = Sunday, 6 = Saturday
  const hour = now.getHours();
  const isBusinessHours =
    (day >= 1 && day <= 5 && hour >= 9 && hour < 19) || // Mon-Fri 9am-7pm
    (day === 6 && hour >= 9 && hour < 13); // Sat 9am-1pm

  return (
    <>
      {/* Quick Message Menu */}
      <AnimatePresence>
        {showMenu && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            className="fixed bottom-24 sm:bottom-28 right-4 sm:right-6 md:right-8 z-50 space-y-2"
          >
            {quickMessages.map((msg, index) => (
              <motion.a
                key={msg.label}
                href={`https://wa.me/51987654321?text=${encodeURIComponent(msg.message)}`}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.05 }}
                className="flex items-center gap-2 sm:gap-3 backdrop-blur-md bg-navy-900/90 border border-white/10 hover:border-gold-500/30 rounded-lg sm:rounded-xl px-3 sm:px-4 py-2 sm:py-3 shadow-lg hover:shadow-xl transition-all group min-w-[180px] sm:min-w-[200px]"
              >
                <span className="text-2xl sm:text-3xl filter drop-shadow-[0_0_10px_rgba(34,197,94,0.4)]">{msg.icon}</span>
                <span className="text-xs sm:text-sm font-medium text-white group-hover:text-gold-500 transition-colors">
                  {msg.label}
                </span>
              </motion.a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main WhatsApp Button - Responsive positioning */}
      <div className="fixed bottom-6 right-6 z-50">
        {/* Status Badge */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5 }}
          className="absolute -top-2 sm:-top-3 -left-2 sm:-left-3 z-10"
        >
          <div className={`px-2 sm:px-3 py-0.5 sm:py-1 rounded-full text-[10px] sm:text-xs font-bold shadow-lg ${isBusinessHours
              ? "bg-green-500 text-white"
              : "bg-orange-500 text-white"
            }`}>
            {isBusinessHours ? "🟢 En línea" : "🟡 Fuera"}
          </div>
        </motion.div>

        <motion.div
          onHoverStart={() => setIsHovered(true)}
          onHoverEnd={() => setIsHovered(false)}
          className="relative"
        >
          {/* Tooltip - Hidden on mobile */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: isHovered && !showMenu ? 1 : 0, x: isHovered && !showMenu ? 0 : 20 }}
            className="hidden md:block absolute right-full mr-4 top-1/2 -translate-y-1/2 whitespace-nowrap backdrop-blur-md bg-navy-900/90 border border-white/10 rounded-xl px-4 py-2 text-sm font-medium shadow-lg pointer-events-none"
          >
            {isBusinessHours
              ? "¿Necesitas ayuda? Escríbenos ahora"
              : "Déjanos tu mensaje, te responderemos pronto"}
          </motion.div>

          {/* Button */}
          <div className="relative">
            {/* Pulse effect */}
            <motion.div
              animate={{ scale: [1, 1.3, 1], opacity: [0.5, 0, 0.5] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="absolute inset-0 bg-green-500 rounded-full"
            />

            {/* Main button - Responsive size and touch friendly */}
            <motion.button
              onClick={() => setShowMenu(!showMenu)}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="relative w-14 h-14 bg-green-500 hover:bg-green-400 rounded-full flex items-center justify-center shadow-[0_8px_30px_rgba(34,197,94,0.4)] transition-colors"
              style={{ width: 'clamp(56px, 15vw, 64px)', height: 'clamp(56px, 15vw, 64px)' }}
              aria-label="Abrir menú de WhatsApp"
            >
              <AnimatePresence mode="wait">
                {showMenu ? (
                  <motion.svg
                    key="close"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    className="w-5 h-5 sm:w-6 sm:h-6 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </motion.svg>
                ) : (
                  <motion.svg
                    key="whatsapp"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    className="w-7 h-7 sm:w-8 sm:h-8 text-white"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                  </motion.svg>
                )}
              </AnimatePresence>
            </motion.button>

            {/* Notification badge */}
            {!showMenu && (
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 2 }}
                className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 rounded-full flex items-center justify-center text-white text-xs font-bold shadow-lg"
              >
                1
              </motion.div>
            )}
          </div>
        </motion.div>
      </div>
    </>
  );
}
