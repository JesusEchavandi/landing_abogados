import HeroSection from "@/components/hero/HeroSection";
import TrustBadges from "@/components/sections/TrustBadges";
import PracticeAreas from "@/components/sections/PracticeAreas";
import SuccessCases from "@/components/sections/SuccessCases";
import LegalTeam from "@/components/sections/LegalTeam";
import Testimonials from "@/components/sections/Testimonials";
import FAQ from "@/components/sections/FAQ";
import LegalCalculator from "@/components/sections/LegalCalculator";
import AppointmentBooking from "@/components/sections/AppointmentBooking";
import BlogSection from "@/components/sections/BlogSection";
import ClientPortal from "@/components/sections/ClientPortal";
import ContactForm from "@/components/sections/ContactForm";
import WhatsAppButton from "@/components/ui/WhatsAppButton";
import FloatingCTA from "@/components/ui/FloatingCTA";
import TrustBanner from "@/components/ui/TrustBanner";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export default function Home() {
  return (
    <>
      {/* Skip to main content for accessibility */}
      <a 
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-gold-500 text-navy-950 px-4 py-2 rounded-lg z-[60] font-semibold"
      >
        Saltar al contenido principal
      </a>

      {/* Navbar */}
      <Navbar />

      {/* Main Content */}
      <main id="main-content" className="min-h-screen">
        <div id="inicio">
          <HeroSection />
        </div>
        
        {/* Trust & Credibility */}
        <TrustBadges />
        
        {/* Dynamic Trust Banner */}
        <TrustBanner />
        
        <div id="areas">
          <PracticeAreas />
        </div>
        
        {/* Success Cases */}
        <div id="casos">
          <SuccessCases />
        </div>
        
        <div id="equipo">
          <LegalTeam />
        </div>
        
        <div id="testimonios">
          <Testimonials />
        </div>
        
        {/* FAQ Section */}
        <div id="faq">
          <FAQ />
        </div>
        
        {/* Legal Calculator */}
        <div id="calculadora">
          <LegalCalculator />
        </div>
        
        {/* Appointment Booking */}
        <div id="agendar">
          <AppointmentBooking />
        </div>
        
        {/* Blog Section */}
        <div id="blog">
          <BlogSection />
        </div>
        
        {/* Client Portal */}
        <div id="portal">
          <ClientPortal />
        </div>
        
        <div id="contacto">
          <ContactForm />
        </div>
      </main>
      
      {/* Footer */}
      <Footer />

      {/* Floating WhatsApp Button */}
      <WhatsAppButton />
    </>
  );
}
