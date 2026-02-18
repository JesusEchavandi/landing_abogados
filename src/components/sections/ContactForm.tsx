"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { useState } from "react";
import { useToast } from "@/hooks/useToast";
import { LocationIcon, ChatIcon } from "@/components/icons/LegalIcons";

const formSchema = z.object({
  name: z.string().min(2, "Nombre debe tener al menos 2 caracteres").max(100, "Nombre muy largo"),
  email: z.string().email("Email inválido"),
  phone: z.string().regex(/^[+]?[(]?[0-9]{1,4}[)]?[-\s./0-9]{8,}$/, "Teléfono inválido"),
  consultType: z.string().min(1, "Selecciona un área"),
  message: z.string().min(10, "Mensaje debe tener al menos 10 caracteres").max(1000, "Mensaje muy largo"),
});

type FormData = z.infer<typeof formSchema>;

interface InputFieldProps {
  label: string;
  name: keyof FormData;
  type?: string;
  placeholder?: string;
  register: any;
  error?: string;
  touched?: boolean;
  isValid?: boolean;
  required?: boolean;
}

function InputField({
  label,
  name,
  type = "text",
  placeholder,
  register,
  error,
  touched,
  isValid,
  required = true
}: InputFieldProps) {
  const showValidation = touched && !error;

  return (
    <div>
      <label htmlFor={name} className="block text-sm font-medium mb-2 text-white/80">
        {label} {required && <span className="text-gold-500">*</span>}
      </label>
      <div className="relative">
        <input
          id={name}
          type={type}
          {...register(name)}
          placeholder={placeholder}
          className={`w-full px-3 sm:px-4 py-2.5 sm:py-3 pr-10 sm:pr-12 bg-white/5 border rounded-lg sm:rounded-xl outline-none transition-all placeholder:text-white/30 text-sm sm:text-base ${error
            ? "border-red-500/50 focus:border-red-500 focus:ring-2 focus:ring-red-500/20"
            : showValidation
              ? "border-emerald-500/50 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20"
              : "border-white/10 focus:border-gold-500 focus:ring-2 focus:ring-gold-500/20"
            }`}
          aria-invalid={error ? "true" : "false"}
          aria-describedby={error ? `${name}-error` : undefined}
        />

        {/* Validation Icon */}
        <AnimatePresence>
          {showValidation && (
            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0, opacity: 0 }}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-emerald-500"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <AnimatePresence>
        {error && (
          <motion.p
            id={`${name}-error`}
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="text-red-400 text-sm mt-1 flex items-center gap-1"
            role="alert"
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
            </svg>
            {error}
          </motion.p>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const toast = useToast();

  const {
    register,
    handleSubmit,
    formState: { errors, touchedFields, isValid },
    reset,
    watch,
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
    mode: "onChange",
  });

  // Watch form values for character count
  const messageValue = watch("message") || "";
  const nameValue = watch("name") || "";

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);

    try {
      // Send data to API endpoint
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || 'Error al enviar el mensaje');
      }

      // Success!
      setSubmitSuccess(true);
      toast.success(
        "¡Consulta enviada con éxito!",
        "Nos pondremos en contacto contigo en las próximas 24 horas."
      );
      reset();

      // Reset success state after 5 seconds
      setTimeout(() => setSubmitSuccess(false), 5000);

    } catch (error) {
      console.error('Error sending form:', error);
      toast.error(
        "Error al enviar la consulta",
        "Por favor, intenta nuevamente o contáctanos directamente."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="relative py-24 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-navy-900 via-navy-950 to-black" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] sm:w-[600px] h-[300px] sm:h-[600px] bg-gold-500/10 rounded-full blur-[100px] sm:blur-[150px]" />

      <div className="relative max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center" style={{ minWidth: 0 }}>

        {/* Left side - Info */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="w-6 sm:w-8 h-[1px] bg-gold-500" />
            <span className="text-gold-500 uppercase tracking-widest text-xs sm:text-sm">
              Contacto
            </span>
          </div>

          <h2 className="font-display text-4xl font-light mb-6">
            Agenda tu{" "}
            <span className="text-gold-500 font-semibold italic">
              consulta
            </span>
          </h2>

          <p className="text-white/70 text-base sm:text-lg mb-6 sm:mb-8 leading-relaxed">
            Responderemos en menos de 24 horas. Primera consulta sin costo.
          </p>

          {/* Contact info cards */}
          <div className="space-y-3 sm:space-y-4">
            {[
              { icon: "📞", label: "Teléfono", value: "+51 987 654 321" },
              { icon: "📧", label: "Email", value: "contacto@estudio.com" },
              { icon: "location", label: "Ubicación", value: "Av. Principal 123, Lima" },
            ].map((item) => (
              <div
                key={item.label}
                className="flex items-center gap-3 sm:gap-4 p-3 sm:p-4 backdrop-blur-md bg-white/5 border border-white/10 rounded-xl hover:bg-white/10 transition-colors"
              >
                <div className="text-gold-500 flex-shrink-0">
                  {item.icon === "location" ? (
                    <LocationIcon size={32} className="sm:w-10 sm:h-10 filter drop-shadow-[0_0_15px_rgba(212,175,55,0.4)]" />
                  ) : (
                    <ChatIcon size={32} className="sm:w-10 sm:h-10 filter drop-shadow-[0_0_15px_rgba(212,175,55,0.4)]" />
                  )}
                </div>
                <div className="min-w-0">
                  <div className="text-xs sm:text-sm text-white/50">{item.label}</div>
                  <div className="font-medium text-sm sm:text-base break-words">{item.value}</div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Right side - Form */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="relative backdrop-blur-md bg-white/10 border border-white/10 rounded-3xl p-6 md:p-8 shadow-[0_8px_32px_0_rgba(0,0,0,0.4)]">

            {/* Top border accent */}
            <div className="absolute top-0 left-1/4 w-1/2 h-[1px] bg-gradient-to-r from-transparent via-gold-500/50 to-transparent" />

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 sm:space-y-5 md:space-y-6">
              {/* Progress Indicator */}
              <div className="mb-6 sm:mb-8">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm text-white/60">Progreso del formulario</span>
                  <span className="text-sm font-medium text-gold-500">
                    {Object.keys(touchedFields).length}/5 campos
                  </span>
                </div>
                <div className="h-1 bg-white/10 rounded-full overflow-hidden">
                  <motion.div
                    className="h-full bg-gradient-to-r from-gold-500 to-gold-400"
                    initial={{ width: 0 }}
                    animate={{ width: `${(Object.keys(touchedFields).length / 5) * 100}%` }}
                    transition={{ duration: 0.3 }}
                  />
                </div>
              </div>

              {/* Name */}
              <InputField
                label="Nombre completo"
                name="name"
                placeholder="Juan Pérez González"
                register={register}
                error={errors.name?.message}
                touched={touchedFields.name}
                isValid={!errors.name && touchedFields.name}
              />

              {/* Email & Phone */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <InputField
                  label="Email"
                  name="email"
                  type="email"
                  placeholder="juan@ejemplo.com"
                  register={register}
                  error={errors.email?.message}
                  touched={touchedFields.email}
                  isValid={!errors.email && touchedFields.email}
                />

                <InputField
                  label="Teléfono"
                  name="phone"
                  type="tel"
                  placeholder="+51 987 654 321"
                  register={register}
                  error={errors.phone?.message}
                  touched={touchedFields.phone}
                  isValid={!errors.phone && touchedFields.phone}
                />
              </div>

              {/* Consult Type */}
              <div>
                <label htmlFor="consultType" className="block text-sm font-medium mb-2 text-white/80">
                  Área de consulta <span className="text-gold-500">*</span>
                </label>
                <div className="relative">
                  <select
                    id="consultType"
                    {...register("consultType")}
                    className={`w-full px-3 sm:px-4 py-2.5 sm:py-3 pr-10 bg-white/5 border rounded-lg sm:rounded-xl outline-none transition-all appearance-none text-sm sm:text-base ${errors.consultType
                      ? "border-red-500/50 focus:border-red-500 focus:ring-2 focus:ring-red-500/20"
                      : touchedFields.consultType && !errors.consultType
                        ? "border-emerald-500/50 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20"
                        : "border-white/10 focus:border-gold-500 focus:ring-2 focus:ring-gold-500/20"
                      }`}
                  >
                    <option value="">Selecciona un área</option>
                    <option value="Derecho Corporativo">Derecho Corporativo</option>
                    <option value="Derecho Laboral">Derecho Laboral</option>
                    <option value="Derecho Civil">Derecho Civil</option>
                    <option value="Derecho Penal">Derecho Penal</option>
                    <option value="Derecho Familiar">Derecho Familiar</option>
                    <option value="Derecho Tributario">Derecho Tributario</option>
                  </select>
                  <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-white/40">
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </div>
                <AnimatePresence>
                  {errors.consultType && (
                    <motion.p
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="text-red-400 text-sm mt-1 flex items-center gap-1"
                    >
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                      </svg>
                      {errors.consultType.message}
                    </motion.p>
                  )}
                </AnimatePresence>
              </div>

              {/* Message */}
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2 text-white/80">
                  Mensaje <span className="text-gold-500">*</span>
                </label>
                <div className="relative">
                  <textarea
                    id="message"
                    {...register("message")}
                    rows={5}
                    className={`w-full px-3 sm:px-4 py-2.5 sm:py-3 bg-white/5 border rounded-lg sm:rounded-xl outline-none transition-all resize-none text-sm sm:text-base ${errors.message
                      ? "border-red-500/50 focus:border-red-500 focus:ring-2 focus:ring-red-500/20"
                      : touchedFields.message && !errors.message
                        ? "border-emerald-500/50 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20"
                        : "border-white/10 focus:border-gold-500 focus:ring-2 focus:ring-gold-500/20"
                      }`}
                    placeholder="Describe brevemente tu caso o consulta legal..."
                  />
                  <div className="absolute bottom-3 right-3 text-xs text-white/40">
                    {messageValue.length}/1000
                  </div>
                </div>
                <AnimatePresence>
                  {errors.message && (
                    <motion.p
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="text-red-400 text-sm mt-1 flex items-center gap-1"
                    >
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                      </svg>
                      {errors.message.message}
                    </motion.p>
                  )}
                </AnimatePresence>
              </div>

              {/* Submit Button */}
              <motion.button
                type="submit"
                disabled={isSubmitting || !isValid}
                whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
                className={`w-full py-4 font-semibold rounded-xl transition-all duration-300 relative overflow-hidden group text-base ${isSubmitting || !isValid
                  ? "bg-gold-500/50 text-navy-950/50 cursor-not-allowed"
                  : "bg-gold-500 hover:bg-gold-400 text-navy-950"
                  }`}
              >
                <span className="relative z-10 flex items-center justify-center gap-2">
                  {isSubmitting ? (
                    <>
                      <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                      </svg>
                      Enviando consulta...
                    </>
                  ) : submitSuccess ? (
                    <>
                      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      ¡Consulta enviada!
                    </>
                  ) : (
                    <>
                      Enviar Consulta
                      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                      </svg>
                    </>
                  )}
                </span>
                {!isSubmitting && !submitSuccess && (
                  <div className="absolute inset-0 bg-gradient-to-r from-gold-400 to-gold-500 opacity-0 group-hover:opacity-100 transition-opacity" />
                )}
              </motion.button>

              {/* Privacy Notice */}
              <p className="text-center text-white/50 text-xs leading-relaxed">
                Al enviar este formulario aceptas nuestra{" "}
                <a href="#" className="text-gold-500 hover:text-gold-400 underline">
                  política de privacidad
                </a>
                {" "}y{" "}
                <a href="#" className="text-gold-500 hover:text-gold-400 underline">
                  términos de servicio
                </a>
              </p>
            </form>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
