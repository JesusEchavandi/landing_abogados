"use client";

import { motion } from "framer-motion";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-navy-950 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">

          {/* Brand */}
          <div>
            <div className="font-display text-2xl font-bold mb-4">
              <span className="text-white">Legal</span>
              <span className="text-gold-500">Studio</span>
            </div>
            <p className="text-white/60 text-sm leading-relaxed mb-4">
              Defendemos tus derechos con excelencia y compromiso. Más de 25 años de experiencia.
            </p>
            <div className="flex gap-3">
              {[
                { icon: "linkedin", label: "LinkedIn" },
                { icon: "twitter", label: "Twitter" },
                { icon: "facebook", label: "Facebook" },
              ].map((social) => (
                <a
                  key={social.icon}
                  href="#"
                  aria-label={social.label}
                  className="w-10 h-10 rounded-full bg-white/5 hover:bg-gold-500/20 border border-white/10 hover:border-gold-500/30 flex items-center justify-center transition-all group"
                >
                  <span className="text-white/60 group-hover:text-gold-500 transition-colors">
                    {social.icon === "linkedin" && "in"}
                    {social.icon === "twitter" && "𝕏"}
                    {social.icon === "facebook" && "f"}
                  </span>
                </a>
              ))}
            </div>
          </div>

          {/* Areas */}
          <div>
            <h3 className="font-semibold text-white mb-3 sm:mb-4 text-sm sm:text-base">Áreas de Práctica</h3>
            <ul className="space-y-2">
              {[
                "Derecho Corporativo",
                "Litigios y Arbitraje",
                "Propiedad Intelectual",
                "Laboral",
                "Tributario",
                "Penal",
              ].map((area) => (
                <li key={area}>
                  <a
                    href="#"
                    className="text-white/60 hover:text-gold-500 text-sm transition-colors"
                  >
                    {area}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Links */}
          <div>
            <h3 className="font-semibold text-white mb-3 sm:mb-4 text-sm sm:text-base">Enlaces</h3>
            <ul className="space-y-2">
              {[
                "Nuestro Equipo",
                "Casos de Éxito",
                "Testimonios",
                "Blog Legal",
                "Preguntas Frecuentes",
                "Trabaja con Nosotros",
              ].map((link) => (
                <li key={link}>
                  <a
                    href="#"
                    className="text-white/60 hover:text-gold-500 text-sm transition-colors"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold text-white mb-3 sm:mb-4 text-sm sm:text-base">Contacto</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <span className="text-gold-500">📞</span>
                <div>
                  <a
                    href="tel:+51987654321"
                    className="text-white/60 hover:text-gold-500 text-xs sm:text-sm transition-colors"
                  >
                    +51 987 654 321
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-gold-500">📧</span>
                <div>
                  <a
                    href="mailto:contacto@estudio.com"
                    className="text-white/60 hover:text-gold-500 text-xs sm:text-sm transition-colors"
                  >
                    contacto@estudio.com
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-gold-500">📍</span>
                <div>
                  <span className="text-white/60 text-xs sm:text-sm">
                    Av. Principal 123<br />
                    Lima, Perú
                  </span>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-white/50 text-sm text-center sm:text-left">
            © {currentYear} Legal Studio. Todos los derechos reservados.
          </p>
          <div className="flex flex-wrap justify-center gap-3 sm:gap-6">
            <a href="#" className="text-white/50 hover:text-gold-500 text-sm transition-colors">
              Política de Privacidad
            </a>
            <a href="#" className="text-white/50 hover:text-gold-500 text-sm transition-colors">
              Términos y Condiciones
            </a>
            <a href="#" className="text-white/50 hover:text-gold-500 text-sm transition-colors">
              Aviso Legal
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
