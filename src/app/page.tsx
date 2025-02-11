import Image from "next/image";
import { Music4, MapPin, Calendar, Radio, Headphones, Clock, Instagram, Sparkles, PartyPopper } from "lucide-react";
import ShareButton from "./components/ShareButton";
import AnimatedBackground from "./components/AnimatedBackground";

const upcomingSessions = [
  {
    id: 1,
    title: "Sky Bar & Lounge",
    date: "Vie, 21 Jun",
    time: "21:00 - 02:00",
    location: "Vibes en la Azotea",
    description: "¡La mejor vista de la ciudad con los mejores beats!"
  },
  {
    id: 2,
    title: "Club Underground",
    date: "Sab, 22 Jun",
    time: "22:00 - 04:00",
    location: "Noche de Electrónica",
    description: "Prepárate para una noche de música electrónica inolvidable"
  },
  {
    id: 3,
    title: "Beach Club Marina",
    date: "Dom, 23 Jun",
    time: "17:00 - 23:00",
    location: "Sunset Sessions",
    description: "Atardeceres mágicos con los mejores ritmos"
  }
];

const sponsors = [
  {
    id: 1,
    name: "Pioneer DJ",
    logo: "/sponsor-placeholder.png"
  },
  {
    id: 2,
    name: "Heineken",
    logo: "/sponsor-placeholder.png"
  },
  {
    id: 3,
    name: "Red Bull",
    logo: "/sponsor-placeholder.png"
  },
  {
    id: 4,
    name: "JBL Professional",
    logo: "/sponsor-placeholder.png"
  },
  {
    id: 5,
    name: "Corona",
    logo: "/sponsor-placeholder.png"
  },
  {
    id: 6,
    name: "Absolut",
    logo: "/sponsor-placeholder.png"
  }
];

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-950 overflow-x-hidden">
      <AnimatedBackground />
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-slate-950/90 backdrop-blur-sm border-b border-white/10 px-6 py-4">
        <div className="container mx-auto">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="relative group">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-neon-pink via-neon-cyan to-neon-magenta rounded-full opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt blur-sm"></div>
                <Image
                  src="/diegonelson_logo.png"
                  alt="Diego Nelson Logo"
                  width={80}
                  height={80}
                  className="relative w-16 h-16 md:w-20 md:h-20 rounded-full bg-black p-2 shadow-lg hover:scale-105 transition-transform duration-300 object-cover"
                />
              </div>
            </div>
            <div className="flex items-center gap-4">
              <a href="https://www.youtube.com/@djdiegonelson" target="_blank" rel="noopener noreferrer" className="text-white hover:text-neon-pink transition-colors transform hover:scale-110">
                <svg className="w-7 h-7" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="relative w-full flex items-center justify-center min-h-screen pt-32">
        <div className="absolute inset-0 z-0">
          <Image
            src="/club.webp"
            alt="Club Background"
            fill
            className="object-cover opacity-40"
            priority
          />
        </div>
        <div className="relative z-10 container mx-auto px-6">
          <div className="text-center max-w-4xl mx-auto">
            <div className="flex items-center justify-center gap-4 mb-6">
              <PartyPopper className="w-12 h-12 text-neon-pink animate-bounce" />
              <h1 className="text-5xl md:text-8xl font-bold text-white tracking-tight">
                ¡Vive La Música!
              </h1>
              <Sparkles className="w-12 h-12 text-neon-cyan animate-bounce" />
            </div>
            <p className="text-xl md:text-3xl text-red-500 font-semibold mb-12">
              Únete a la experiencia más electrizante de música en vivo
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-lg text-white/80">
              <span className="flex items-center gap-2">
                <Clock className="w-6 h-6 text-neon-pink" />
                Sesiones Únicas
              </span>
              <span className="flex items-center gap-2">
                <MapPin className="w-6 h-6 text-neon-cyan" />
                Locaciones Exclusivas
              </span>
              <span className="flex items-center gap-2">
                <Music4 className="w-6 h-6 text-neon-magenta" />
                Mejor Ambiente
              </span>
            </div>
            <div className="mt-8 relative w-full max-w-3xl mx-auto aspect-video rounded-lg overflow-hidden shadow-2xl shadow-neon-pink/20">
              <iframe
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/LRkn-_omEYI?si=UYGzNGCynnyaxNU6"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
                className="absolute inset-0"
              />
            </div>
          </div>
        </div>
      </div>

      {/* About the Event Section */}
      <section className="py-24 px-4 md:px-8 relative overflow-hidden">
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-6xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-neon-pink via-neon-cyan to-neon-magenta animate-pulse">
              La Experiencia
            </h2>
            <p className="text-xl text-white/80 max-w-2xl mx-auto">
              Sumérgete en una experiencia musical única donde la energía y el ritmo se fusionan
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-zinc-900/50 backdrop-blur-sm p-8 rounded-xl border border-white/10 hover:border-neon-pink/50 transition-all duration-300 group">
              <Radio className="w-12 h-12 text-neon-pink mb-6 group-hover:scale-110 transition-transform" />
              <h3 className="text-2xl font-bold text-white mb-4">Música Electrizante</h3>
              <p className="text-white/70 leading-relaxed">
                Desde house hasta techno, experimenta sets únicos que te mantendrán bailando toda la noche
              </p>
            </div>
            <div className="bg-zinc-900/50 backdrop-blur-sm p-8 rounded-xl border border-white/10 hover:border-neon-cyan/50 transition-all duration-300 group">
              <Headphones className="w-12 h-12 text-neon-cyan mb-6 group-hover:scale-110 transition-transform" />
              <h3 className="text-2xl font-bold text-white mb-4">Sonido Inmersivo</h3>
              <p className="text-white/70 leading-relaxed">
                Sistema de sonido de alta fidelidad que te envuelve en una experiencia auditiva incomparable
              </p>
            </div>
            <div className="bg-zinc-900/50 backdrop-blur-sm p-8 rounded-xl border border-white/10 hover:border-neon-magenta/50 transition-all duration-300 group">
              <Sparkles className="w-12 h-12 text-neon-magenta mb-6 group-hover:scale-110 transition-transform" />
              <h3 className="text-2xl font-bold text-white mb-4">Ambiente Único</h3>
              <p className="text-white/70 leading-relaxed">
                Iluminación espectacular y efectos visuales que crean una atmósfera mágica e inolvidable
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Upcoming Sessions */}
      <section className="py-24 px-4 md:px-8 relative overflow-hidden">
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-6xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-neon-pink via-neon-cyan to-neon-magenta animate-pulse">
              Próximas Sesiones
            </h2>
            <p className="text-xl text-white/80 max-w-2xl mx-auto">
              Descubre nuestros próximos eventos y reserva tu lugar en la experiencia musical más exclusiva
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {upcomingSessions.map((session) => (
              <div key={session.id} className="group relative">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-red-500 to-red-800 rounded-xl opacity-75 group-hover:opacity-100 transition duration-300"></div>
                <div className="relative bg-zinc-900/90 backdrop-blur-sm rounded-xl p-8 h-full transform hover:scale-[1.02] transition-all duration-300 border border-white/20 shadow-xl hover:shadow-neon-pink/20">
                  <div className="absolute top-0 right-0 mt-6 mr-6">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-r from-neon-pink/20 to-neon-cyan/20 flex items-center justify-center group-hover:bg-gradient-to-r group-hover:from-neon-pink/30 group-hover:to-neon-cyan/30 transition-all duration-300">
                      <Music4 className="w-6 h-6 text-white group-hover:text-neon-cyan transform group-hover:scale-110 transition-transform" />
                    </div>
                  </div>
                  <h3 className="text-3xl font-bold mb-4 bg-gradient-to-r from-white via-white to-neon-cyan bg-clip-text text-transparent">
                    {session.title}
                  </h3>
                  <div className="space-y-3 mb-6">
                    <p className="text-white/90 flex items-center gap-3 text-lg hover:text-neon-cyan transition-colors">
                      <Calendar className="w-5 h-5" />
                      <span className="opacity-90 hover:opacity-100 transition-opacity">
                        {session.date} • {session.time}
                      </span>
                    </p>
                    <p className="text-white/90 flex items-center gap-3 text-lg hover:text-neon-pink transition-colors">
                      <MapPin className="w-5 h-5" />
                      <span className="opacity-90 hover:opacity-100 transition-opacity">
                        {session.location}
                      </span>
                    </p>
                  </div>
                  <p className="text-white/80 mb-8 text-lg leading-relaxed hover:text-white/90 transition-colors">{session.description}</p>
                  <ShareButton
                    title={session.title}
                    date={session.date}
                    time={session.time}
                    location={session.location}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sponsors Section */}
      <section className="py-20 px-4 md:px-8 relative">
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <h2 className="text-5xl font-bold mb-8 text-transparent bg-clip-text bg-gradient-to-r from-neon-pink to-neon-cyan animate-pulse">
            Nuestros Auspiciantes
          </h2>
          <p className="text-2xl mb-12 text-white/80">
            Respaldados por las marcas más prestigiosas
          </p>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
            {sponsors.map((sponsor) => (
              <div key={sponsor.id} className="group relative p-4 rounded-lg transform hover:scale-110 transition-all duration-300">
                <div className="absolute inset-0 bg-gradient-to-r from-neon-pink/20 to-neon-cyan/20 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative aspect-square">
                  <Image
                    src={sponsor.logo}
                    alt={sponsor.name}
                    fill
                    className="object-contain p-4 filter brightness-75 group-hover:brightness-100 transition-all duration-300"
                  />
                </div>
              </div>
            ))}
          </div>
          <div className="mt-16">
            <a
              href="https://www.instagram.com/djdiegonelson"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-8 py-4 text-lg font-semibold text-white bg-gradient-to-r from-neon-pink to-neon-cyan rounded-full transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-neon-pink/50"
            >
              <Instagram className="w-6 h-6" />
              Síguenos @djdiegonelson
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
