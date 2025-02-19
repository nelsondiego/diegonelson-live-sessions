"use client";

import Image from "next/image";
import { Music2, Clock } from 'lucide-react';

const EventSection = () => {
  return (
    <div className="w-full container mx-auto px-4 my-20 md:my-40">
      <div className="text-center mb-12">
        <h1 className="text-3xl md:text-5xl font-bold bg-gradient-to-r from-white via-neon-cyan to-white bg-clip-text text-transparent animate-gradient mb-6">La Nueva Era de la Música Electrónica</h1>
        <p className="text-xl text-white/80 max-w-3xl mx-auto">8 Noches Exclusivas • 8 Bares Premium • Experiencia Musical Única en Resistencia</p>
      </div>
      <div className="flex flex-col md:flex-row gap-12 items-start">
        <div className="w-full md:w-1/2">
          <div className="relative aspect-[4/3] w-full rounded-lg  group">
            <div className="absolute -inset-1 bg-gradient-to-r from-neon-cyan/50 via-neon-magenta/50 to-neon-cyan/50 rounded-lg blur-2xl group-hover:blur-3xl transition-all duration-500 opacity-70"></div>
            <Image
              src="/bar-vinyl.jpg"
              alt="Chill & Groove Sessions ambiente"
              fill
              className="object-cover rounded-lg"
              priority
            />
          </div>
        </div>

        <div className="w-full md:w-1/2 space-y-8">
          <h2 className="text-4xl font-bold bg-gradient-to-r from-white via-neon-cyan to-white bg-clip-text text-transparent animate-gradient flex items-center gap-3">
            <Music2 className="w-8 h-8 text-neon-cyan" />
            Chill & Groove Sessions
          </h2>
          
          <p className="text-white/90 leading-relaxed text-lg">
            Sé parte de la revolución musical que está transformando las noches de Resistencia. Descubre una experiencia sensorial única donde el deep house, disco house y funky house se fusionan en una cuidadosa selección musical que elevará tus sentidos. Durante 8 noches exclusivas, los venues más prestigiosos de la ciudad se convertirán en el epicentro de la cultura electrónica.
          </p>

          <div className="space-y-8">
            <div className="flex items-start gap-4 text-white/90">
              <Clock className="w-6 h-6 text-neon-cyan shrink-0 mt-1" />
              <div className="space-y-3">
                <span className="block text-xl font-medium text-white">Una Experiencia Premium Diseñada Para Ti</span>
                <ul className="space-y-3 ml-2">
                  <li>Sesiones exclusivas de 4 horas que fusionan la mejor selección musical con momentos memorables.</li>
                  <li>Sonido de clase mundial: deep house, disco house y funky house cuidadosamente seleccionados para crear la atmósfera perfecta.</li>
                  <li>Espacios VIP diseñados para networking, donde la música se convierte en el lenguaje universal de conexión.</li>
                  <li>Horarios premium after office: el momento perfecto para desconectar y vivir una experiencia única.</li>
                  <li>Fusión gastronómica exclusiva: cada venue ofrece una propuesta culinaria que complementa la experiencia musical.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventSection;