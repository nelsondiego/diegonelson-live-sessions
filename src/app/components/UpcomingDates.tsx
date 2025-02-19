import { Calendar } from 'lucide-react';

const UpcomingDates = () => {
  return (
    <div className="w-full max-w-4xl mx-auto">
      <div className="bg-zinc-900/50 backdrop-blur-sm p-8 rounded-xl border border-white/10 hover:border-neon-cyan/50 transition-all duration-300 group hover:-translate-y-2 hover:shadow-xl hover:shadow-neon-cyan/20">
        <div className="relative mb-6 w-12 h-12 rounded-full bg-neon-cyan/10 flex items-center justify-center group-hover:bg-neon-cyan/20 transition-colors duration-500">
          <Calendar className="w-6 h-6 text-neon-cyan group-hover:scale-110 transition-transform duration-500" />
        </div>
        
        <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-neon-cyan transition-colors">
          Reserva Tu Experiencia
        </h3>
        
        <p className="text-white/70 leading-relaxed group-hover:text-white/90 transition-colors">
          ¡Prepárate para vivir noches inolvidables! Marzo y Abril 2024 serán testigos de 8 sesiones exclusivas que redefinirán las noches de Resistencia. Cupos limitados para garantizar una experiencia íntima y premium en cada venue.
        </p>

        <p className="mt-4 text-white/70 leading-relaxed group-hover:text-white/90 transition-colors">
          No te pierdas la oportunidad de ser parte de esta revolución musical. Sé el primero en asegurar tu lugar siguiéndonos en redes sociales.
        </p>
      </div>
    </div>
  );
};

export default UpcomingDates;