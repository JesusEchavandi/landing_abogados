"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { BriefcaseIcon } from "@/components/icons/LegalIcons";

export default function LegalCalculator() {
  const { ref, controls } = useScrollAnimation(0.1);
  const [activeCalc, setActiveCalc] = useState<string>("laboral");

  // Calculadora Laboral
  const [salarioMensual, setSalarioMensual] = useState<number>(0);
  const [antiguedad, setAntiguedad] = useState<number>(0);
  const [liquidacion, setLiquidacion] = useState<number>(0);

  const calcularLiquidacion = () => {
    // Fórmula simplificada: 1.5 salarios por año + vacaciones + gratificaciones
    const indemnizacion = salarioMensual * 1.5 * antiguedad;
    const vacaciones = (salarioMensual / 12) * antiguedad;
    const gratificaciones = (salarioMensual * 2) * antiguedad;
    const cts = (salarioMensual * 1.16) * antiguedad;

    const total = indemnizacion + vacaciones + gratificaciones + cts;
    setLiquidacion(total);
  };

  return (
    <section ref={ref} className="relative py-24 overflow-hidden bg-navy-900/30">
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
              Herramientas
            </span>
            <div className="w-6 sm:w-8 h-[1px] bg-gold-500" />
          </div>
          <h2 className="font-display text-4xl font-light mb-6 text-center">
            Calculadoras{" "}
            <span className="text-gold-500 font-semibold italic">Legales</span>
          </h2>
          <p className="text-white/60 text-base sm:text-lg text-center w-full max-w-2xl px-4">
            Obtén un estimado rápido de tus derechos laborales
          </p>
        </motion.div>

        {/* Calculadora Laboral */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={controls}
          variants={{
            visible: { opacity: 1, y: 0, transition: { delay: 0.2, duration: 0.6 } },
          }}
          className="backdrop-blur-md bg-white/10 border border-white/10 rounded-3xl p-8 md:p-12"
        >
          <div className="flex items-center gap-3 mb-8">
            <BriefcaseIcon size={56} className="text-gold-500 filter drop-shadow-[0_0_20px_rgba(212,175,55,0.4)]" />
            <div>
              <h3 className="text-2xl font-semibold">Calculadora de Liquidación Laboral</h3>
              <p className="text-white/60 text-sm">Estimado de beneficios sociales en Perú</p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div>
              <label className="block text-sm font-medium mb-2 text-white/80">
                Salario Mensual (S/)
              </label>
              <input
                type="number"
                value={salarioMensual || ""}
                onChange={(e) => setSalarioMensual(Number(e.target.value))}
                placeholder="3000"
                className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl focus:border-gold-500 focus:ring-2 focus:ring-gold-500/20 outline-none transition-all"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2 text-white/80">
                Años de Antigüedad
              </label>
              <input
                type="number"
                value={antiguedad || ""}
                onChange={(e) => setAntiguedad(Number(e.target.value))}
                placeholder="3"
                className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl focus:border-gold-500 focus:ring-2 focus:ring-gold-500/20 outline-none transition-all"
              />
            </div>
          </div>

          <button
            onClick={calcularLiquidacion}
            className="w-full py-4 bg-gold-500 hover:bg-gold-400 text-navy-950 font-semibold rounded-xl transition-all mb-6"
          >
            Calcular Liquidación
          </button>

          {liquidacion > 0 && (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="p-6 bg-gradient-to-br from-gold-500/20 to-gold-400/10 border border-gold-500/30 rounded-2xl"
            >
              <div className="text-center mb-4">
                <div className="text-sm text-white/60 mb-2">Liquidación Estimada</div>
                <div className="text-3xl font-bold text-gold-500 break-words">
                  S/ {liquidacion.toLocaleString('es-PE', { maximumFractionDigits: 2 })}
                </div>
              </div>

              <div className="text-xs text-white/50 text-center">
                * Este es un cálculo referencial. Cada caso es único y puede variar según circunstancias específicas.
              </div>

              <button
                onClick={() => {
                  const contactSection = document.getElementById("contacto");
                  contactSection?.scrollIntoView({ behavior: "smooth" });
                }}
                className="w-full mt-4 py-3 bg-white/10 hover:bg-white/20 border border-white/20 text-white font-medium rounded-xl transition-all"
              >
                Consulta con un Experto
              </button>
            </motion.div>
          )}

          <div className="mt-6 p-4 bg-white/5 rounded-xl">
            <h4 className="font-semibold mb-2 text-sm">📋 Incluye:</h4>
            <ul className="text-sm text-white/70 space-y-1">
              <li>• Indemnización por despido arbitrario</li>
              <li>• Vacaciones truncas</li>
              <li>• Gratificaciones proporcionales</li>
              <li>• CTS (Compensación por Tiempo de Servicios)</li>
            </ul>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
