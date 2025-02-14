import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono, Pacifico } from "next/font/google";
import "./globals.css";
import Navigation from "./components/Navigation";
import AnimatedBackground from "./components/AnimatedBackground";
import ScrollToTop from "./components/ScrollToTop";

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
  description: 'Ciclo exclusivo de música electrónica en Resistencia. Marzo y Abril 2024: Deep house, disco house y funky house en los mejores bares y restaurantes del Chaco.',
  keywords: [
    'DJ Diego Nelson', 
    'música electrónica Resistencia',
    'deep house Chaco',
    'disco house',
    'funky house',
    'evening sessions',
    'bar sessions Chaco',
    'restaurantes con música electrónica',
    'eventos exclusivos Chaco',
    'sunset sessions',
    'música en vivo Resistencia',
    'gastronomía y música',
    'marzo 2024 eventos',
    'abril 2024 eventos',
    'Clover Resistencia',
    'Conejo Negro bar',
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
    description: 'Ciclo exclusivo de música electrónica en Resistencia. Deep house, disco house y funky house en los mejores bares y restaurantes del Chaco. Marzo y Abril 2024.',
    siteName: 'Chill & Groove Sessions',
    images: [
      {
        url: '/chill-groove-sessions.webp',
        width: 1200,
        height: 630,
        alt: 'Chill & Groove Sessions - Música Electrónica en Resistencia',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Chill & Groove Sessions by Diego Nelson',
    description: 'Ciclo exclusivo de música electrónica en Resistencia. Deep house, disco house y funky house en los mejores bares y restaurantes del Chaco. Marzo y Abril 2024.',
    images: ['/chill-groove-sessions.webp'],
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
          <ScrollToTop />
        </div>
      </body>
    </html>
  );
}
