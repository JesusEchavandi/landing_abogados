"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const testimonials = [
  {
    name: "María González",
    role: "CEO, TechCorp",
    content: "La asesoría legal que recibimos fue excepcional. Su conocimiento en derecho corporativo nos permitió cerrar una fusión compleja sin contratiempos. Altamente recomendados.",
    rating: 5,
    image: "/testimonials/client1.jpg",
  },
  {
    name: "Roberto Sánchez",
    role: "Director, Industrias ABC",
    content: "Profesionales de primer nivel. Nos representaron en un litigio internacional y lograron un resultado mejor del esperado. Su dedicación es incomparable.",
    rating: 5,
    image: "/testimonials/client2.jpg",
  },
  {
    name: "Ana Martínez",
    role: "Fundadora, Startup XYZ",
    content: "Como emprendedora, necesitaba asesoría confiable para proteger mi propiedad intelectual. El equipo fue claro, eficiente y siempre disponible. Excelente servicio.",
    rating: 5,
    image: "/testimonials/client3.jpg",
  },
  {
    name: "Carlos Ramírez",
    role: "Gerente RRHH, Corporación 123",
    content: "Resolvieron un caso laboral complejo con estrategia y profesionalismo. Su enfoque preventivo nos ayudó a evitar futuros problemas. Muy agradecido.",
    rating: 5,
    image: "/testimonials/client4.jpg",
  },
];

export default function Testimonials() {
  const { ref, controls } = useScrollAnimation(0.1);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  // Auto-advance
  useEffect(() => {
    const timer = setInterval(() => {
      setDirection(1);
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 6000);

    return () => clearInterval(timer);
  }, []);

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
    }),
  };

  const swipeConfidenceThreshold = 10000;
  const swipePower = (offset: number, velocity: number) => {
    return Math.abs(offset) * velocity;
  };

  const paginate = (newDirection: number) => {
    setDirection(newDirection);
    setCurrentIndex((prev) => {
      const next = prev + newDirection;
      if (next < 0) return testimonials.length - 1;
      if (next >= testimonials.length) return 0;
      return next;
    });
  };

  return (
    <section ref={ref} className="relative py-24 overflow-hidden bg-navy-900/20">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-gold-500/5 to-transparent" />

      <div className="relative max-w-6xl mx-auto px-6">
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
              Testimonios
            </span>
            <div className="w-6 sm:w-8 h-[1px] bg-gold-500" />
          </div>
          <h2 className="font-display text-4xl font-light mb-6 text-center">
            Lo que dicen{" "}
            <span className="text-gold-500 font-semibold italic">
              nuestros clientes
            </span>
          </h2>
        </motion.div>

        {/* Testimonial Slider */}
        <div className="relative">
          <div className="relative flex items-center justify-center" style={{ minHeight: 'clamp(320px, 55vh, 500px)' }}>
            <AnimatePresence initial={false} custom={direction}>
              <motion.div
                key={currentIndex}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  x: { type: "spring", stiffness: 300, damping: 30 },
                  opacity: { duration: 0.2 },
                }}
                drag="x"
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={1}
                onDragEnd={(e, { offset, velocity }) => {
                  const swipe = swipePower(offset.x, velocity.x);
                  if (swipe < -swipeConfidenceThreshold) {
                    paginate(1);
                  } else if (swipe > swipeConfidenceThreshold) {
                    paginate(-1);
                  }
                }}
                className="absolute w-full max-w-4xl"
              >
                <TestimonialCard testimonial={testimonials[currentIndex]} />
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={() => paginate(-1)}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 w-10 h-10 rounded-full backdrop-blur-md bg-white/10 border border-white/20 hover:bg-white/20 transition-all flex items-center justify-center group z-10"
            aria-label="Previous testimonial"
          >
            <svg
              className="w-6 h-6 group-hover:-translate-x-1 transition-transform"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <button
            onClick={() => paginate(1)}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 w-10 h-10 rounded-full backdrop-blur-md bg-white/10 border border-white/20 hover:bg-white/20 transition-all flex items-center justify-center group z-10"
            aria-label="Next testimonial"
          >
            <svg
              className="w-6 h-6 group-hover:translate-x-1 transition-transform"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Dots Navigation */}
          <div className="flex items-center justify-center gap-2 mt-8 sm:mt-10 md:mt-12">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setDirection(index > currentIndex ? 1 : -1);
                  setCurrentIndex(index);
                }}
                className={`h-2 rounded-full transition-all ${index === currentIndex
                  ? "w-8 bg-gold-500"
                  : "w-2 bg-white/30 hover:bg-white/50"
                  }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function TestimonialCard({ testimonial }: { testimonial: typeof testimonials[0] }) {
  return (
    <div className="relative backdrop-blur-md bg-white/10 border border-white/10 rounded-3xl p-8 lg:p-12 shadow-[0_8px_32px_0_rgba(0,0,0,0.4)]">
      {/* Quote icon - Responsive */}
      <div className="absolute top-4 sm:top-6 md:top-8 left-4 sm:left-6 md:left-8 text-gold-500/20 text-6xl sm:text-7xl md:text-8xl font-serif leading-none">
        "
      </div>

      {/* Content */}
      <div className="relative z-10">
        {/* Stars - Responsive */}
        <div className="flex gap-1 mb-4 sm:mb-5 md:mb-6 justify-center">
          {[...Array(testimonial.rating)].map((_, i) => (
            <svg
              key={i}
              className="w-5 h-5 sm:w-6 sm:h-6 text-gold-500"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
          ))}
        </div>

        {/* Testimonial text - Responsive */}
        <p className="text-white/90 text-base sm:text-lg md:text-xl lg:text-2xl font-light leading-relaxed text-center mb-6 sm:mb-7 md:mb-8 max-w-3xl mx-auto">
          {testimonial.content}
        </p>

        {/* Author info - Responsive */}
        <div className="flex flex-col items-center">
          <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-gradient-to-br from-gold-500/30 to-gold-400/10 mb-3 sm:mb-4 flex items-center justify-center overflow-hidden border-2 border-gold-500/30">
            <span className="text-xl sm:text-2xl font-display font-bold text-gold-500">
              {testimonial.name.charAt(0)}
            </span>
          </div>
          <div className="text-center">
            <h4 className="font-semibold text-base sm:text-lg">{testimonial.name}</h4>
            <p className="text-white/60 text-xs sm:text-sm">{testimonial.role}</p>
          </div>
        </div>
      </div>

      {/* Decorative elements - Responsive */}
      <div className="absolute bottom-0 right-0 w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 bg-gradient-to-tl from-gold-500/10 to-transparent rounded-tl-full" />
    </div>
  );
}
