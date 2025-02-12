import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono, Pacifico } from "next/font/google";
import "./globals.css";
import Navigation from "./components/Navigation";
import AnimatedBackground from "./components/AnimatedBackground";

const pacifico = Pacifico({
  weight: ['400'],
  subsets: ['latin'],
  variable: '--font-pacifico',
  display: 'swap',
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  themeColor: '#020617',
};

export const metadata: Metadata = {
  metadataBase: new URL('https://diegonelson.com'),
  title: 'Chill & Groove Sessions by Diego Nelson',
  description: 'Ciclo más exclusivo de música electrónica en Resistencia. Marzo y Abril 2024: Sesiones únicas donde amigos, gastronomía y los mejores beats se fusionan para crear momentos inolvidables en los mejores bares del Chaco.',
  keywords: [
    'DJ Diego Nelson', 
    'música electrónica Resistencia',
    'rooftop sessions',
    'bar sessions Chaco',
    'restaurantes con música electrónica',
    'deep house Resistencia',
    'eventos exclusivos Chaco',
    'sunset sessions',
    'música en vivo Resistencia',
    'gastronomía y música',
    'marzo 2024 eventos',
    'abril 2024 eventos',
    'terraza cielo Resistencia',
    'la bodega sessions',
    'garden lounge Chaco',
    'buenas vibras',
    'after office Resistencia',
    'encuentros con amigos'
  ],
  authors: [{ name: 'Diego Nelson' }],
  creator: 'Diego Nelson',
  publisher: 'Diego Nelson',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  icons: {
    icon: '/icon.svg',
    shortcut: '/icon.svg',
    apple: '/icon.svg',
    other: [
      {
        rel: 'apple-touch-icon-precomposed',
        url: '/icon.svg',
      },
    ],
  },
  manifest: '/manifest.json',
  openGraph: {
    type: 'website',
    locale: 'es_AR',
    url: 'https://diegonelson.com',
    title: 'Chill & Groove Sessions by Diego Nelson',
    description: 'Ciclo de sesiones imperdibles en Resistencia, Chaco. Marzo y Abril 2024: Donde los amigos, la buena música y la mejor gastronomía crean la atmósfera perfecta para momentos únicos.',
    siteName: 'Chill & Groove Sessions',
    images: [
      {
        url: '/diegonelson_logo.png',
        width: 512,
        height: 512,
        alt: 'Diego Nelson Logo',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Chill & Groove Sessions by Diego Nelson',
    description: 'Ciclo de sesiones imperdibles en Resistencia, Chaco. Marzo y Abril 2024: Donde los amigos, la buena música y la mejor gastronomía crean la atmósfera perfecta para momentos únicos.',
    images: ['/diegonelson_logo.png'],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es" className="scroll-smooth">
      <body className={`${geistSans.variable} ${geistMono.variable} ${pacifico.variable} antialiased`}>
        <div className="min-h-screen bg-slate-950 overflow-x-hidden">
          <AnimatedBackground />
          <Navigation />
          {children}
        </div>
      </body>
    </html>
  );
}
