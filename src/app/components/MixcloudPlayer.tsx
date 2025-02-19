'use client';
import { Music2 } from 'lucide-react';

const MixcloudPlayer = () => {
  return (
    <div className="w-full max-w-4xl mx-auto">
      <div className="bg-zinc-900/70 backdrop-blur-sm p-8 rounded-xl border border-white/10 hover:border-neon-cyan/50 transition-all duration-300 group hover:shadow-xl hover:shadow-neon-cyan/20">
        <div className="relative mb-6 w-12 h-12 rounded-full bg-neon-cyan/10 flex items-center justify-center group-hover:bg-neon-cyan/20 transition-colors duration-500">
          <Music2 className="w-6 h-6 text-neon-cyan group-hover:scale-110 transition-transform duration-500" />
        </div>
        
        <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-neon-cyan transition-colors">
          Anticipa la Experiencia Musical
        </h3>
        
        <p className="text-white/70 leading-relaxed group-hover:text-white/90 transition-colors mb-6">
          Déjate cautivar por el sonido exclusivo de las Chill & Groove Sessions. Sumérgete en una selección premium de funk house y disco house que transformará tus sentidos y te hará vibrar al ritmo de la mejor música electrónica.
        </p>
        <iframe 
          width="100%" 
          height="120" 
          src="https://player-widget.mixcloud.com/widget/iframe/?hide_cover=1&feed=%2Fdiegonelson%2Fchill-groove-sessions-preview-funk-house%2F" 
          frameBorder="0"
          className="rounded-lg"
          title="Chill & Groove Sessions Preview - Funk House by Diego Nelson"
        />
      </div>
    </div>
  );
};

export default MixcloudPlayer;