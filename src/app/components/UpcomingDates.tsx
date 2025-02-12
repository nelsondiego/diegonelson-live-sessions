import { Calendar } from 'lucide-react';

const UpcomingDates = () => {
  return (
    <div className="w-full max-w-4xl mx-auto p-6">
      <div className="relative group">
        <div className="absolute -inset-0.5 bg-gradient-to-r from-neon-cyan to-neon-magenta rounded-xl opacity-75 group-hover:opacity-100 transition duration-300 blur"></div>
        <div className="relative bg-zinc-900/90 backdrop-blur-sm rounded-xl p-8 shadow-xl text-center">
          <div className="mb-6 flex justify-center">
            <div className="w-16 h-16 rounded-full bg-gradient-to-r from-neon-pink/20 to-neon-cyan/20 flex items-center justify-center">
              <Calendar className="w-8 h-8 text-white" />
            </div>
          </div>
          
          <h3 className="text-3xl font-bold mb-4 bg-gradient-to-r from-white to-neon-cyan bg-clip-text text-transparent">
            Próximamente
          </h3>
          
          <p className="text-white/80 text-lg mb-6 max-w-2xl mx-auto">
            Estamos preparando una serie de sesiones únicas para Marzo y Abril 2024. 
            Música, amigos y los mejores lugares de Resistencia se fusionarán para crear momentos inolvidables.
          </p>

          <div className="text-white/60 text-sm">
            Seguinos en redes sociales para ser el primero en enterarte de las fechas confirmadas
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpcomingDates; 