import { Cormorant_Garamond, Outfit } from 'next/font/google';
import type { Metadata } from 'next';
import './globals.css';
import SmoothScroll from '@/components/layout/SmoothScroll';
import ToastProvider from '@/components/ui/ToastProvider';

const cormorant = Cormorant_Garamond({
  weight: ['300', '400', '600', '700'],
  subsets: ['latin'],
  variable: '--font-cormorant',
  display: 'swap',
});

const outfit = Outfit({
  weight: ['300', '400', '500', '600'],
  subsets: ['latin'],
  variable: '--font-outfit',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Estudio Legal en Lima | Abogados Expertos 25+ Años | Consulta Gratis',
  description: '✓ 500+ casos ganados ✓ 98% tasa de éxito ✓ Primera consulta GRATIS ✓ Abogados especialistas en Lima: Corporativo, Litigios, Laboral, Tributario ✓ Atención 24/7 por WhatsApp',
  keywords: ['abogados lima', 'estudio legal perú', 'abogados especialistas', 'derecho corporativo lima', 'litigios arbitraje', 'abogados laborales', 'derecho tributario', 'consulta legal gratis', 'mejores abogados peru', 'estudio juridico'],
  authors: [{ name: 'Legal Studio' }],
  openGraph: {
    title: 'Estudio Legal | Abogados Especialistas en Lima',
    description: 'Defendemos tus derechos con excelencia y compromiso. 25 años de experiencia, 500+ casos ganados, 98% tasa de éxito.',
    url: 'https://legalstudio.com',
    siteName: 'Legal Studio',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Estudio Legal - Abogados Especialistas',
      },
    ],
    locale: 'es_PE',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Estudio Legal | Abogados Especialistas',
    description: 'Defendemos tus derechos con excelencia. 25 años de experiencia.',
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'tu-codigo-google-search-console',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className={`${cormorant.variable} ${outfit.variable}`}>
      <body className="font-body bg-navy-950 text-white antialiased">
        <SmoothScroll>
          {children}
        </SmoothScroll>
        <ToastProvider />
      </body>
    </html>
  );
}
