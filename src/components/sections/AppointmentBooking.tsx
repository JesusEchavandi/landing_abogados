"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { BuildingIcon, VideoIcon, LawyerIcon, CalendarIcon, ClockIcon, LocationIcon } from "@/components/icons/LegalIcons";

const lawyers = [
  { id: 1, name: "Dr. Carlos Mendoza", specialty: "Corporativo", avatar: "👨‍⚖️" },
  { id: 2, name: "Dra. María Fernández", specialty: "Litigios", avatar: "👩‍⚖️" },
  { id: 3, name: "Dr. Roberto Silva", specialty: "Tributario", avatar: "👨‍💼" },
  { id: 4, name: "Dra. Ana Torres", specialty: "Laboral", avatar: "👩‍💼" },
];

const timeSlots = [
  "09:00 AM", "10:00 AM", "11:00 AM", "12:00 PM",
  "02:00 PM", "03:00 PM", "04:00 PM", "05:00 PM",
];

export default function AppointmentBooking() {
  const { ref, controls } = useScrollAnimation(0.1);
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    lawyer: "",
    date: "",
    time: "",
    type: "presencial",
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // Aquí se integraría con Calendly o tu sistema de agendamiento
    console.log("Cita agendada:", formData);
    alert("¡Cita agendada exitosamente! Recibirás un email de confirmación.");
    // Reset form
    setFormData({
      lawyer: "",
      date: "",
      time: "",
      type: "presencial",
      name: "",
      email: "",
      phone: "",
      message: "",
    });
    setStep(1);
  };

  const nextStep = () => setStep(step + 1);
  const prevStep = () => setStep(step - 1);

  return (
    <section ref={ref} className="relative py-24 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-navy-900 via-navy-950 to-black" />
      <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-gold-500/10 rounded-full blur-[150px]" />

      <div className="max-w-4xl mx-auto px-6 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={controls}
          variants={{
            visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
          }}
          className="flex flex-col items-center w-full mb-12"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-8 h-[1px] bg-gold-500" />
            <span className="text-gold-500 uppercase tracking-widest text-sm">
              Agendar Cita
            </span>
            <div className="w-8 h-[1px] bg-gold-500" />
          </div>
          <h2 className="font-display text-4xl font-light mb-6 text-center">
            Reserva tu{" "}
            <span className="text-gold-500 font-semibold italic">Consulta</span>
          </h2>
          <p className="text-white/60 text-lg">
            Primera consulta GRATUITA • Presencial o Virtual • Confirmación inmediata
          </p>
        </motion.div>

        {/* Progress Bar */}
        <div className="mb-8">
          <div className="flex justify-between mb-2">
            {[1, 2, 3].map((s) => (
              <div
                key={s}
                className={`text-sm font-medium ${step >= s ? "text-gold-500" : "text-white/40"
                  }`}
              >
                {s === 1 && "Seleccionar"}
                {s === 2 && "Fecha y Hora"}
                {s === 3 && "Tus Datos"}
              </div>
            ))}
          </div>
          <div className="h-2 bg-white/10 rounded-full overflow-hidden">
            <motion.div
              className="h-full bg-gradient-to-r from-gold-500 to-gold-400"
              initial={{ width: "0%" }}
              animate={{ width: `${(step / 3) * 100}%` }}
              transition={{ duration: 0.3 }}
            />
          </div>
        </div>

        {/* Form Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={controls}
          variants={{
            visible: { opacity: 1, y: 0, transition: { delay: 0.2, duration: 0.6 } },
          }}
          className="backdrop-blur-glass bg-glass-medium border border-white/10 rounded-3xl p-8 md:p-12"
        >
          <form onSubmit={handleSubmit}>
            {/* Step 1: Select Lawyer & Type */}
            {step === 1 && (
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
              >
                <h3 className="text-responsive-2xl font-semibold mb-4 sm:mb-6">Área de consulta</h3>
                <div className="mb-8">
                  <select
                    value={formData.lawyer}
                    onChange={(e) => setFormData({ ...formData, lawyer: e.target.value })}
                    className="w-full px-4 py-3 bg-navy-900 border border-white/20 rounded-xl focus:border-gold-500 focus:ring-2 focus:ring-gold-500/20 outline-none transition-all text-white"
                    style={{ colorScheme: 'dark' }}
                  >
                    <option value="" style={{ color: 'rgba(255, 255, 255, 0.5)' }}>Selecciona el área de consulta</option>
                    {lawyers.map((lawyer) => (
                      <option key={lawyer.id} value={lawyer.name}>
                        {lawyer.specialty} - {lawyer.name}
                      </option>
                    ))}
                  </select>
                </div>

                <h3 className="text-responsive-2xl font-semibold mb-4 sm:mb-6">Selecciona tu abogado</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                  {lawyers.map((lawyer) => (
                    <button
                      key={lawyer.id}
                      type="button"
                      onClick={() => setFormData({ ...formData, lawyer: lawyer.name })}
                      className={`p-6 rounded-xl border-2 transition-all text-left ${formData.lawyer === lawyer.name
                        ? "border-gold-500 bg-gold-500/10"
                        : "border-white/10 hover:border-white/30 bg-white/5"
                        }`}
                    >
                      <div className="flex items-center gap-4">
                        <div className="text-gold-500">
                          <LawyerIcon size={56} className="filter drop-shadow-[0_0_15px_rgba(212,175,55,0.4)] transition-transform group-hover:scale-110" />
                        </div>
                        <div>
                          <div className="font-semibold text-white">{lawyer.name}</div>
                          <div className="text-sm text-gold-500">{lawyer.specialty}</div>
                        </div>
                      </div>
                    </button>
                  ))}
                </div>

                <h3 className="text-responsive-2xl font-semibold mb-4 sm:mb-6">Modalidad de consulta</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                  {[
                    { value: "presencial", label: "Presencial", icon: "building", desc: "En nuestra oficina" },
                    { value: "virtual", label: "Virtual", icon: "video", desc: "Por videollamada" },
                  ].map((option) => (
                    <button
                      key={option.value}
                      type="button"
                      onClick={() => setFormData({ ...formData, type: option.value })}
                      className={`p-6 rounded-xl border-2 transition-all ${formData.type === option.value
                        ? "border-gold-500 bg-gold-500/10"
                        : "border-white/10 hover:border-white/30 bg-white/5"
                        }`}
                    >
                      <div className="mb-3 text-gold-500 flex justify-center">
                        {option.icon === "building" ? (
                          <BuildingIcon size={48} className="filter drop-shadow-[0_0_15px_rgba(212,175,55,0.4)] group-hover:scale-110 transition-transform" />
                        ) : (
                          <VideoIcon size={48} className="filter drop-shadow-[0_0_15px_rgba(212,175,55,0.4)] group-hover:scale-110 transition-transform" />
                        )}
                      </div>
                      <div className="font-semibold text-white mb-1">{option.label}</div>
                      <div className="text-sm text-white/60">{option.desc}</div>
                    </button>
                  ))}
                </div>

                <button
                  type="button"
                  onClick={nextStep}
                  disabled={!formData.lawyer}
                  className="w-full py-4 bg-gold-500 hover:bg-gold-400 disabled:bg-gold-500/30 disabled:cursor-not-allowed text-navy-950 font-semibold rounded-xl transition-all"
                >
                  Continuar
                </button>
              </motion.div>
            )}

            {/* Step 2: Date & Time */}
            {step === 2 && (
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
              >
                <h3 className="text-responsive-2xl font-semibold mb-4 sm:mb-6">Selecciona fecha y hora</h3>

                <div className="mb-6">
                  <label className="block text-sm font-medium mb-2 text-white/80">
                    Fecha
                  </label>
                  <input
                    type="date"
                    value={formData.date}
                    onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                    min={new Date().toISOString().split('T')[0]}
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl focus:border-gold-500 focus:ring-2 focus:ring-gold-500/20 outline-none transition-all"
                  />
                </div>

                <div className="mb-8">
                  <label className="block text-sm font-medium mb-2 text-white/80">
                    Hora disponible
                  </label>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                    {timeSlots.map((time) => (
                      <button
                        key={time}
                        type="button"
                        onClick={() => setFormData({ ...formData, time })}
                        className={`py-2 px-2 sm:px-3 rounded-lg border text-xs sm:text-sm font-medium transition-all ${formData.time === time
                          ? "border-gold-500 bg-gold-500/20 text-gold-500"
                          : "border-white/10 hover:border-white/30 text-white/70"
                          }`}
                      >
                        {time}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="flex gap-4">
                  <button
                    type="button"
                    onClick={prevStep}
                    className="flex-1 py-4 bg-white/5 hover:bg-white/10 border border-white/10 text-white font-semibold rounded-xl transition-all"
                  >
                    Atrás
                  </button>
                  <button
                    type="button"
                    onClick={nextStep}
                    disabled={!formData.date || !formData.time}
                    className="flex-1 py-4 bg-gold-500 hover:bg-gold-400 disabled:bg-gold-500/30 disabled:cursor-not-allowed text-navy-950 font-semibold rounded-xl transition-all"
                  >
                    Continuar
                  </button>
                </div>
              </motion.div>
            )}

            {/* Step 3: Contact Info */}
            {step === 3 && (
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
              >
                <h3 className="text-responsive-2xl font-semibold mb-4 sm:mb-6">Tus datos de contacto</h3>

                <div className="space-y-4 mb-8">
                  <div>
                    <label className="block text-sm font-medium mb-2 text-white/80">
                      Nombre completo
                    </label>
                    <input
                      type="text"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl focus:border-gold-500 focus:ring-2 focus:ring-gold-500/20 outline-none transition-all"
                      required
                    />
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium mb-2 text-white/80">
                        Email
                      </label>
                      <input
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl focus:border-gold-500 focus:ring-2 focus:ring-gold-500/20 outline-none transition-all"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2 text-white/80">
                        Teléfono
                      </label>
                      <input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl focus:border-gold-500 focus:ring-2 focus:ring-gold-500/20 outline-none transition-all"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2 text-white/80">
                      Describe brevemente tu caso (opcional)
                    </label>
                    <textarea
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      rows={3}
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl focus:border-gold-500 focus:ring-2 focus:ring-gold-500/20 outline-none transition-all resize-none"
                    />
                  </div>
                </div>

                {/* Summary */}
                <div className="mb-8 p-6 bg-white/5 rounded-xl border border-white/10">
                  <h4 className="font-semibold mb-3 text-gold-500">Resumen de tu cita:</h4>
                  <div className="space-y-2 text-sm text-white/70">
                    <p className="flex items-center gap-2"><LawyerIcon size={16} className="text-gold-500" /> Abogado: <span className="text-white font-medium">{formData.lawyer}</span></p>
                    <p className="flex items-center gap-2"><CalendarIcon size={16} className="text-gold-500" /> Fecha: <span className="text-white font-medium">{formData.date}</span></p>
                    <p className="flex items-center gap-2"><ClockIcon size={16} className="text-gold-500" /> Hora: <span className="text-white font-medium">{formData.time}</span></p>
                    <p className="flex items-center gap-2"><LocationIcon size={16} className="text-gold-500" /> Modalidad: <span className="text-white font-medium">{formData.type === 'presencial' ? 'Presencial' : 'Virtual'}</span></p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <button
                    type="button"
                    onClick={prevStep}
                    className="flex-1 py-4 bg-white/5 hover:bg-white/10 border border-white/10 text-white font-semibold rounded-xl transition-all"
                  >
                    Atrás
                  </button>
                  <button
                    type="submit"
                    className="flex-1 py-4 bg-gold-500 hover:bg-gold-400 text-navy-950 font-semibold rounded-xl transition-all shadow-[0_0_30px_rgba(212,175,55,0.3)]"
                  >
                    Confirmar Cita Gratuita
                  </button>
                </div>
              </motion.div>
            )}
          </form>
        </motion.div>
      </div>
    </section>
  );
}
