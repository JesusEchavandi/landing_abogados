"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { ChartIcon, BriefcaseIcon, ChatIcon } from "@/components/icons/LegalIcons";
import { useToast } from "@/hooks/useToast";

export default function ClientPortal() {
  const { ref, controls } = useScrollAnimation(0.1);
  const [isLoginMode, setIsLoginMode] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const toast = useToast();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    toast.info(
      "Portal en desarrollo",
      "Esta funcionalidad estará disponible próximamente. Por favor, contáctanos directamente."
    );
  };

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();
    toast.info(
      "Registro pendiente",
      "Para crear una cuenta, primero debes iniciar un caso con nosotros. Contáctanos para más información."
    );
  };

  return (
    <section ref={ref} className="relative py-24 overflow-hidden bg-navy-900/50">
      <div className="absolute top-1/4 left-1/3 w-96 h-96 bg-gold-500/10 rounded-full blur-[150px]" />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10 md:gap-12 items-center">
          {/* Left: Features */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={controls}
            variants={{
              visible: { opacity: 1, x: 0, transition: { duration: 0.6 } },
            }}
          >
            <div className="flex items-center gap-2 sm:gap-3 mb-4">
              <div className="w-6 sm:w-8 h-[1px] bg-gold-500" />
              <span className="text-gold-500 uppercase tracking-widest text-xs sm:text-sm">
                Portal del Cliente
              </span>
            </div>

            <h2 className="font-display text-4xl font-light mb-6">
              Gestiona tu{" "}
              <span className="text-gold-500 font-semibold italic">Caso</span>
            </h2>

            <p className="text-white/70 text-base sm:text-lg mb-6 sm:mb-8 leading-relaxed">
              Accede 24/7 a toda la información de tu caso legal desde cualquier dispositivo
            </p>

            <div className="space-y-4 sm:space-y-6">
              {[
                {
                  icon: "chart",
                  title: "Estado en Tiempo Real",
                  desc: "Seguimiento actualizado de todas las etapas de tu caso",
                },
                {
                  icon: "📁",
                  title: "Documentos Compartidos",
                  desc: "Acceso seguro a contratos, escritos y evidencias",
                },
                {
                  icon: "chat",
                  title: "Mensajería Segura",
                  desc: "Comunicación directa y confidencial con tu abogado",
                },
                {
                  icon: "💳",
                  title: "Pagos y Facturas",
                  desc: "Gestiona honorarios y consulta tu historial de pagos",
                },
              ].map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, x: -20 }}
                  animate={controls}
                  variants={{
                    visible: {
                      opacity: 1,
                      x: 0,
                      transition: { delay: index * 0.1, duration: 0.5 },
                    },
                  }}
                  className="flex gap-4 items-start"
                >
                  <div className="text-gold-500">
                    {feature.icon === "chart" ? (
                      <ChartIcon size={40} className="filter drop-shadow-[0_0_15px_rgba(212,175,55,0.4)] group-hover:scale-110 transition-transform" />
                    ) : feature.icon === "chat" ? (
                      <ChatIcon size={40} className="filter drop-shadow-[0_0_15px_rgba(212,175,55,0.4)] group-hover:scale-110 transition-transform" />
                    ) : (
                      <BriefcaseIcon size={40} className="filter drop-shadow-[0_0_15px_rgba(212,175,55,0.4)] group-hover:scale-110 transition-transform" />
                    )}
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">{feature.title}</h3>
                    <p className="text-white/60 text-sm">{feature.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right: Login/Register Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={controls}
            variants={{
              visible: { opacity: 1, x: 0, transition: { delay: 0.2, duration: 0.6 } },
            }}
          >
            <div className="backdrop-blur-glass bg-glass-medium border border-white/10 rounded-2xl sm:rounded-3xl p-5 sm:p-6 md:p-8">
              <div className="flex gap-2 mb-8">
                <button
                  onClick={() => setIsLoginMode(true)}
                  className={`flex-1 py-3 rounded-xl font-semibold transition-all ${isLoginMode
                    ? "bg-gold-500 text-navy-950"
                    : "bg-white/5 text-white/70 hover:bg-white/10"
                    }`}
                >
                  Iniciar Sesión
                </button>
                <button
                  onClick={() => setIsLoginMode(false)}
                  className={`flex-1 py-3 rounded-xl font-semibold transition-all ${!isLoginMode
                    ? "bg-gold-500 text-navy-950"
                    : "bg-white/5 text-white/70 hover:bg-white/10"
                    }`}
                >
                  Registrarse
                </button>
              </div>

              {isLoginMode ? (
                <form className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium mb-2 text-white/80">
                      Email o N° de Caso
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl focus:border-gold-500 focus:ring-2 focus:ring-gold-500/20 outline-none transition-all"
                      placeholder="usuario@email.com"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2 text-white/80">
                      Contraseña
                    </label>
                    <input
                      type="password"
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl focus:border-gold-500 focus:ring-2 focus:ring-gold-500/20 outline-none transition-all"
                      placeholder="••••••••"
                    />
                  </div>

                  <div className="flex items-center justify-between text-sm">
                    <label className="flex items-center gap-2 text-white/70">
                      <input type="checkbox" className="rounded" />
                      Recordarme
                    </label>
                    <a href="#" className="text-gold-500 hover:text-gold-400">
                      ¿Olvidaste tu contraseña?
                    </a>
                  </div>

                  <button
                    type="submit"
                    className="w-full py-4 bg-gold-500 hover:bg-gold-400 text-navy-950 font-semibold rounded-xl transition-all shadow-[0_0_30px_rgba(212,175,55,0.3)]"
                  >
                    Acceder al Portal
                  </button>
                </form>
              ) : (
                <form onSubmit={handleRegister} className="space-y-4 overflow-hidden">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="register-firstname" className="block text-sm font-medium mb-2 text-white/80">
                        Nombre <span className="text-gold-500">*</span>
                      </label>
                      <input
                        id="register-firstname"
                        type="text"
                        required
                        placeholder="Juan"
                        className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl focus:border-gold-500 focus:ring-2 focus:ring-gold-500/20 outline-none transition-all placeholder:text-white/30"
                      />
                    </div>
                    <div>
                      <label htmlFor="register-lastname" className="block text-sm font-medium mb-2 text-white/80">
                        Apellido <span className="text-gold-500">*</span>
                      </label>
                      <input
                        id="register-lastname"
                        type="text"
                        required
                        placeholder="Pérez"
                        className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl focus:border-gold-500 focus:ring-2 focus:ring-gold-500/20 outline-none transition-all placeholder:text-white/30"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="register-email" className="block text-sm font-medium mb-2 text-white/80">
                      Email <span className="text-gold-500">*</span>
                    </label>
                    <input
                      id="register-email"
                      type="email"
                      required
                      placeholder="juan@ejemplo.com"
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl focus:border-gold-500 focus:ring-2 focus:ring-gold-500/20 outline-none transition-all placeholder:text-white/30"
                    />
                  </div>

                  <div>
                    <label htmlFor="register-case" className="block text-sm font-medium mb-2 text-white/80">
                      N° de Caso <span className="text-gold-500">*</span>
                    </label>
                    <input
                      id="register-case"
                      type="text"
                      required
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl focus:border-gold-500 focus:ring-2 focus:ring-gold-500/20 outline-none transition-all placeholder:text-white/30"
                      placeholder="LS-2026-001"
                    />
                    <p className="mt-1 text-xs text-white/50">
                      Proporcionado por tu abogado al iniciar el caso
                    </p>
                  </div>

                  <div>
                    <label htmlFor="register-password" className="block text-sm font-medium mb-2 text-white/80">
                      Contraseña <span className="text-gold-500">*</span>
                    </label>
                    <div className="relative">
                      <input
                        id="register-password"
                        type={showPassword ? "text" : "password"}
                        required
                        minLength={8}
                        placeholder="Mínimo 8 caracteres"
                        className="w-full px-4 py-3 pr-12 bg-white/5 border border-white/10 rounded-xl focus:border-gold-500 focus:ring-2 focus:ring-gold-500/20 outline-none transition-all placeholder:text-white/30"
                      />
                      <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute right-3 top-1/2 -translate-y-1/2 text-white/40 hover:text-white/80 transition-colors"
                        aria-label={showPassword ? "Ocultar contraseña" : "Mostrar contraseña"}
                      >
                        {showPassword ? (
                          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21" />
                          </svg>
                        ) : (
                          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                          </svg>
                        )}
                      </button>
                    </div>
                  </div>

                  <motion.button
                    type="submit"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full py-4 bg-gold-500 hover:bg-gold-400 text-navy-950 font-semibold rounded-xl transition-all shadow-[0_0_30px_rgba(212,175,55,0.3)]"
                  >
                    Crear Cuenta
                  </motion.button>
                </form>
              )}

              <div className="mt-6 p-4 bg-white/5 rounded-xl text-center text-sm text-white/60">
                🔒 Tus datos están protegidos con encriptación de grado bancario
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
