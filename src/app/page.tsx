import Image from "next/image";
import { Music4, MapPin, Calendar, Radio, Headphones, Clock, Sparkles, X } from "lucide-react";
import ShareButton from "./components/ShareButton";
import AnimatedBackground from "./components/AnimatedBackground";
import UpcomingDates from "./components/UpcomingDates";
import Navigation from "./components/Navigation";
import { Session, Sponsor } from "./types";
const upcomingSessions: Session[] = [
  // {
  //   id: 1,
  //   title: "Clover",
  //   date: "Vie, 15 Mar",
  //   time: "20:00 - 01:00",
  //   location: "Clover",
  //   address: "Ayacucho 285",
  //   description: "Inaugura nuestra serie de eventos con una noche mágica bajo las estrellas y los mejores beats de house",
  //   status: "upcoming",
  //   image: "/places/clover.webp"
  // },
  // {
  //   id: 2,
  //   title: "Conejo Negro",
  //   date: "Sab, 30 Mar",
  //   time: "21:00 - 02:00",
  //   location: "Conejo Negro",
  //   address: "Liniers 22",
  //   description: "Una fusión única de gastronomía y música electrónica en el corazón histórico de la ciudad",
  //   status: "upcoming",
  //   image: "/places/conejonegro.webp"
  // },
  // {
  //   id: 3,
  //   title: "El Jardín Secreto",
  //   date: "Vie, 12 Abr",
  //   time: "19:00 - 00:00",
  //   location: "Garden Lounge",
  //   address: "Av. Wilde 185",
  //   description: "Descubre un oasis urbano donde la naturaleza y los ritmos electrónicos crean una experiencia inolvidable",
  //   status: "upcoming",
  //   image: "/utopia.webp"
  // },
  // {
  //   id: 4,
  //   title: "Vista Marina",
  //   date: "Sab, 27 Abr",
  //   time: "18:00 - 23:00",
  //   location: "Seafood Restaurant & Bar",
  //   address: "Costanera Norte 1200",
  //   description: "Cierra nuestra temporada con un sunset session frente al mar y la mejor selección musical",
  //   status: "upcoming",
  //   image: "/utopia.webp"
  // },
  // {
  //   id: 5,
  //   title: "Noche Bohemia",
  //   date: "Vie, 16 Feb",
  //   time: "20:00 - 01:00",
  //   location: "Café Cultural",
  //   address: "Güemes 565",
  //   description: "Una noche inolvidable de música electrónica fusionada con elementos acústicos en un ambiente íntimo y acogedor",
  //   status: "past",
  //   image: "/utopia.webp"
  // },
  // {
  //   id: 6,
  //   title: "Sunset Lounge",
  //   date: "Sab, 24 Feb",
  //   time: "18:00 - 23:00",
  //   location: "Sky Bar",
  //   address: "Juan B. Justo 1150, Piso 15",
  //   description: "Celebramos el atardecer con los mejores beats y una vista panorámica de la ciudad que te dejará sin aliento",
  //   status: "past",
  //   image: "/utopia.webp"
  // },
  // {
  //   id: 7,
  //   title: "Urban Beats",
  //   date: "Vie, 1 Mar",
  //   time: "21:00 - 02:00",
  //   location: "The Factory Club",
  //   address: "Av. Paraguay 750",
  //   description: "Una explosión de ritmos urbanos y electrónicos en el espacio industrial más cool de la ciudad",
  //   status: "past",
  //   image: "/utopia.webp"
  // }
];


const sponsors: Sponsor[] = [
  {
    id: 1,
    name: "3 Lineas",
    logo: "/logos/3lineas.png",
    tier: "platinum",
    active: true
  },
  {
    id: 2,
    name: "Rck FM",
    logo: "/logos/larcka.png",
    tier: "gold",
    active: true
  },
];

export default function Home() {

  return (
    <div className="min-h-screen bg-slate-950 overflow-x-hidden">
      <AnimatedBackground />
      <Navigation />

      {/* Hero Section */}
      <div className="relative w-full min-h-screen flex items-center justify-center pt-32 mb-24">
        <div className="absolute inset-0 z-0">
          <Image
            src="/people-ambar.jpg"
            alt="Bar People Background"
            fill
            className="object-cover opacity-30"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/50 to-transparent"></div>
        </div>
        <div className="relative z-10 container mx-auto px-6">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-24">            
            <div className="flex-1 text-left lg:-mt-20">
              <h1 className="text-5xl md:text-8xl font-bold text-white tracking-tight mb-8">
                <span className="font-pacifico font-normal bg-gradient-to-r from-neon-pink via-white to-neon-cyan bg-clip-text text-transparent p-1">
                  Chill & Groove
                </span>
                <span className="block text-4xl md:text-6xl mt-2 font-light tracking-widest text-neon-cyan">
                  SESSIONS
                </span>
              </h1>

              <div className="max-w-xl mb-12">
                <p className="text-xl md:text-3xl text-white/90 font-medium mb-4">
                  Música • Amigos • Momentos
                </p>
                <p className="text-lg md:text-xl text-white/70">
                  Una experiencia única donde la mejor música electrónica se fusiona con la gastronomía en los espacios más exclusivos de Resistencia
                </p>
              </div>

              <div className="flex flex-wrap gap-4 text-lg text-white/80">
                <span className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 backdrop-blur-sm border border-white/10 hover:border-neon-pink/50 transition-colors">
                  <Clock className="w-5 h-5 text-neon-pink" />
                  Sesiones Únicas
                </span>
                <span className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 backdrop-blur-sm border border-white/10 hover:border-neon-cyan/50 transition-colors">
                  <MapPin className="w-5 h-5 text-neon-cyan" />
                  Locaciones Exclusivas
                </span>
                <span className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 backdrop-blur-sm border border-white/10 hover:border-neon-magenta/50 transition-colors">
                  <Music4 className="w-5 h-5 text-neon-magenta" />
                  Mejor Ambiente
                </span>
              </div>
            </div>

            <div className="flex-1 lg:-mt-20 w-full max-w-2xl mx-auto lg:max-w-none">
              <div className="relative w-full aspect-video rounded-xl overflow-hidden shadow-2xl shadow-neon-pink/20 border border-white/10">
                <div className="absolute -inset-1 bg-gradient-to-r from-neon-pink via-neon-cyan to-neon-magenta opacity-50 animate-pulse blur-md"></div>
                <iframe
                  width="100%"
                  height="100%"
                  src="https://www.youtube.com/embed/nu1DWWjOwr0?si=9PQkPiqDugqMQ1Uw"
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                  className="absolute inset-0 bg-black"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-slate-950 to-transparent z-10"></div>
      </div>

      {/* About the Event Section */}
      <section id="about" className="py-24 px-4 md:px-8 relative overflow-hidden">
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-6xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-neon-pink via-neon-cyan to-neon-magenta animate-pulse">
              La Experiencia
            </h2>
            <div className="max-w-3xl mx-auto space-y-6 text-white/80">
              <p className="text-xl leading-relaxed">
                Bienvenido a un concepto único donde la música electrónica cobra vida en los espacios más exclusivos de Resistencia.
              </p>
              <p className="text-lg leading-relaxed">
                Durante marzo y abril, cada venue se transforma en un escenario perfecto donde los beats, la gastronomía y las buenas vibras se fusionan para crear momentos inolvidables.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-zinc-900/50 backdrop-blur-sm p-8 rounded-xl border border-white/10 hover:border-neon-pink/50 transition-all duration-300 group hover:transform hover:-translate-y-2 hover:shadow-xl hover:shadow-neon-pink/20">
              <div className="relative mb-6">
                <Headphones className="w-12 h-12 text-neon-pink group-hover:scale-110 transition-transform duration-500" />
                <div className="absolute -inset-1 bg-neon-pink/20 rounded-full blur-sm" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-neon-pink transition-colors">Música Selecta</h3>
              <p className="text-white/70 leading-relaxed group-hover:text-white/90 transition-colors">
                Deep house, disco house y funky house cuidadosamente seleccionados para crear la atmósfera perfecta en cada sesión.
              </p>
            </div>

            <div className="bg-zinc-900/50 backdrop-blur-sm p-8 rounded-xl border border-white/10 hover:border-neon-cyan/50 transition-all duration-300 group hover:transform hover:-translate-y-2 hover:shadow-xl hover:shadow-neon-cyan/20">
              <div className="relative mb-6">
                <MapPin className="w-12 h-12 text-neon-cyan group-hover:scale-110 transition-transform duration-500" />
                <div className="absolute -inset-1 bg-neon-cyan/20 rounded-full blur-sm" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-neon-cyan transition-colors">Espacios Únicos</h3>
              <p className="text-white/70 leading-relaxed group-hover:text-white/90 transition-colors">
                Bares y restaurantes seleccionados por su ambiente exclusivo, donde cada rincón está pensado para vivir una experiencia especial.
              </p>
            </div>

            <div className="bg-zinc-900/50 backdrop-blur-sm p-8 rounded-xl border border-white/10 hover:border-neon-magenta/50 transition-all duration-300 group hover:transform hover:-translate-y-2 hover:shadow-xl hover:shadow-neon-magenta/20">
              <div className="relative mb-6">
                <Sparkles className="w-12 h-12 text-neon-magenta group-hover:scale-110 transition-transform duration-500" />
                <div className="absolute -inset-1 bg-neon-magenta/20 rounded-full blur-sm" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-neon-magenta transition-colors">Momentos Mágicos</h3>
              <p className="text-white/70 leading-relaxed group-hover:text-white/90 transition-colors">
                Cada sesión está diseñada para crear recuerdos inolvidables, donde amigos, música y gastronomía se encuentran en perfecta armonía.
              </p>
            </div>
          </div>

          <div className="mt-16 text-center">
            <p className="text-white/60 text-lg max-w-2xl mx-auto">
              Únete a nosotros en esta experiencia única donde cada sesión es una oportunidad para disfrutar de los mejores momentos en los lugares más especiales de la ciudad.
            </p>
          </div>
        </div>
      </section>

      {/* Separator */}
      <div className="w-full max-w-7xl mx-auto px-4 my-12">
        <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
      </div>

      {/* Upcoming Sessions */}
      <section id="sessions" className="py-24 px-4 md:px-8 relative overflow-hidden">
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-6xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-neon-pink via-neon-cyan to-neon-magenta animate-pulse">
              Próximas Sesiones
            </h2>
            <p className="text-xl text-white/80 max-w-2xl mx-auto">
              Descubre nuestros próximos eventos y reserva tu lugar en una experiencia musical única. Cada sesión está cuidadosamente curada para ofrecer los mejores momentos de música electrónica en locaciones exclusivas.
            </p>
          </div>
          
          {upcomingSessions.filter(session => session.status === 'upcoming').length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
              {upcomingSessions.map((session) => (
                <div key={session.id} className="group relative">
                  <div className={`absolute -inset-0.5 ${session.status === 'past' ? 'bg-gradient-to-r from-gray-500 to-gray-800' : 'bg-gradient-to-r from-neon-cyan to-neon-magenta'} rounded-xl opacity-75 group-hover:opacity-100 transition duration-300`}></div>
                  <div className="flex h-full">
                    <div className="w-1/4 relative overflow-hidden rounded-l-xl">
                      <Image
                        src={session.image}
                        alt={session.title}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className={`relative flex-1 ${session.status === 'past' ? 'bg-zinc-900/70' : 'bg-zinc-800/90'} backdrop-blur-sm rounded-r-xl p-4 shadow-xl hover:shadow-neon-cyan/20`}>
                      <div className="absolute top-0 right-0 mt-4 mr-4 flex items-center gap-3">
                        {session.status === 'past' && (
                          <div className="bg-gray-800 text-gray-400 px-3 py-1 rounded-full text-sm font-medium">
                            Evento Pasado
                          </div>
                        )}
                        <ShareButton
                          title={session.title}
                          date={session.date}
                          time={session.time}
                          location={session.location}
                        />
                      </div>
                      <div className="absolute top-0 left-0 mt-4 ml-4">
                        <div className="w-8 h-8 rounded-full bg-gradient-to-r from-neon-pink/20 to-neon-cyan/20 flex items-center justify-center group-hover:bg-gradient-to-r group-hover:from-neon-pink/30 group-hover:to-neon-cyan/30 transition-all duration-300">
                          <Music4 className="w-4 h-4 text-white group-hover:text-neon-cyan transform group-hover:scale-110 transition-transform" />
                        </div>
                      </div>
                      <h3 className="text-2xl font-bold mb-3 bg-gradient-to-r from-white via-white to-neon-cyan bg-clip-text text-transparent mt-12">
                        {session.title}
                      </h3>
                      <div className="space-y-2 mb-4">
                        <p className="text-white/90 flex items-center gap-2 text-base hover:text-neon-cyan transition-colors">
                          <Calendar className="w-4 h-4" />
                          <span className="opacity-90 hover:opacity-100 transition-opacity">
                            {session.date} • {session.time}
                          </span>
                        </p>
                        <p className="text-white/90 flex items-center gap-2 text-base hover:text-neon-pink transition-colors">
                          <MapPin className="w-4 h-4" />
                          <span className="opacity-90 hover:opacity-100 transition-opacity">
                            {session.location}
                          </span>
                        </p>
                      </div>
                      <p className="text-white/80 text-sm leading-relaxed hover:text-white/90 transition-colors">
                        {session.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <UpcomingDates />
          )}
        </div>
      </section>

      {/* Separator */}
      <div className="w-full max-w-7xl mx-auto px-4 my-12">
        <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
      </div>

      {/* Sponsors Section */}
      <section id="sponsors" className="py-24 px-4 md:px-8 relative">
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <h2 className="text-5xl font-bold mb-8 text-transparent bg-clip-text bg-gradient-to-r from-neon-pink to-neon-cyan animate-pulse">
            Nuestros Auspiciantes
          </h2>
          <p className="text-2xl mb-12 text-white/80">
            Respaldados por las marcas más prestigiosas
          </p>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
            {sponsors.map((sponsor) => (
              <div key={sponsor.id} className="group relative p-4 rounded-lg transform hover:scale-110 transition-all duration-300 bg-slate-800/30">
                <div className="absolute inset-0 bg-gradient-to-r from-neon-pink/20 to-neon-cyan/20 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative aspect-square">
                  <Image
                    src={sponsor.logo}
                    alt={sponsor.name}
                    fill
                    className="object-contain filter brightness-75 group-hover:brightness-100 transition-all duration-300"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 md:px-8 border-t border-white/10 bg-slate-900/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="relative w-10 h-10">
              <Image
                src="/diegonelson_logo.png"
                alt="Diego Nelson Logo"
                fill
                className="rounded-full object-cover opacity-50 hover:opacity-100 transition-opacity"
              />
            </div>

            <a
              href="https://wa.me/543624770039?text=Hola%20Diego,%20me%20interesa%20auspiciar%20un%20evento"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 text-sm text-white/70 hover:text-white bg-slate-800/50 hover:bg-slate-800/70 rounded-full transition-all duration-300 border border-white/10 hover:border-neon-cyan/30"
            >
              <Sparkles className="w-4 h-4 text-neon-cyan" />
              Auspiciar
            </a>

            <div className="flex items-center gap-4">
              <a href="https://www.youtube.com/@djdiegonelson" target="_blank" rel="noopener noreferrer" className="text-white/50 hover:text-neon-pink transition-colors transform hover:scale-110">
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                </svg>
              </a>
              <a href="https://www.instagram.com/djdiegonelson" target="_blank" rel="noopener noreferrer" className="text-white/50 hover:text-neon-cyan transition-colors transform hover:scale-110">
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.073 1.689.073-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
            </div>
          </div>

          <div className="mt-4 text-center">
            <p className="text-white/30 text-xs">
              © {new Date().getFullYear()} Diego Nelson. Todos los derechos reservados.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
