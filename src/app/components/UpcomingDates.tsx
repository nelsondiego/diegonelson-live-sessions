import { Calendar } from 'lucide-react';

const UpcomingDates = () => {
  return (
    <div className="w-full max-w-4xl mx-auto">
      <div className="bg-zinc-900/50 backdrop-blur-sm p-8 rounded-xl border border-white/10 hover:border-neon-cyan/50 transition-all duration-300 group hover:-translate-y-2 hover:shadow-xl hover:shadow-neon-cyan/20">
        <div className="relative mb-6 w-12 h-12 rounded-full bg-neon-cyan/10 flex items-center justify-center group-hover:bg-neon-cyan/20 transition-colors duration-500">
          <Calendar className="w-6 h-6 text-neon-cyan group-hover:scale-110 transition-transform duration-500" />
        </div>
        
        <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-neon-cyan transition-colors">
          Próximamente
        </h3>
        
        <p className="text-white/70 leading-relaxed group-hover:text-white/90 transition-colors">
          Estamos preparando una serie de sesiones únicas para Marzo y Abril 2024. 
          Música, amigos y los mejores lugares de Resistencia se fusionarán para crear momentos inolvidables.
        </p>

        <p className="mt-4 text-white/70 leading-relaxed group-hover:text-white/90 transition-colors">
          Seguinos en redes sociales para ser el primero en enterarte de las fechas confirmadas
        </p>
      </div>
    </div>
  );
};

export default UpcomingDates; 