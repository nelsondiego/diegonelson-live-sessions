import Image from "next/image";
import { Music4, MapPin, Calendar, Radio, Headphones, Clock, Sparkles } from "lucide-react";
import ShareButton from "./components/ShareButton";
import AnimatedBackground from "./components/AnimatedBackground";

const upcomingSessions = [
  {
    id: 1,
    title: "Clover",
    date: "Vie, 15 Mar",
    time: "20:00 - 01:00",
    location: "Clover",
    address: "Ayacucho 285",
    description: "Inaugura nuestra serie de eventos con una noche mágica bajo las estrellas y los mejores beats de house",
    status: "upcoming",
    image: "/places/clover.webp"
  },
  {
    id: 2,
    title: "Conejo Negro",
    date: "Sab, 30 Mar",
    time: "21:00 - 02:00",
    location: "Conejo Negro",
    address: "Liniers 22",
    description: "Una fusión única de gastronomía y música electrónica en el corazón histórico de la ciudad",
    status: "upcoming",
    image: "/places/conejonegro.webp"
  },
  {
    id: 3,
    title: "El Jardín Secreto",
    date: "Vie, 12 Abr",
    time: "19:00 - 00:00",
    location: "Garden Lounge",
    address: "Av. Wilde 185",
    description: "Descubre un oasis urbano donde la naturaleza y los ritmos electrónicos crean una experiencia inolvidable",
    status: "upcoming",
    image: "/utopia.webp"
  },
  {
    id: 4,
    title: "Vista Marina",
    date: "Sab, 27 Abr",
    time: "18:00 - 23:00",
    location: "Seafood Restaurant & Bar",
    address: "Costanera Norte 1200",
    description: "Cierra nuestra temporada con un sunset session frente al mar y la mejor selección musical",
    status: "upcoming",
    image: "/utopia.webp"
  },
  {
    id: 5,
    title: "Noche Bohemia",
    date: "Vie, 16 Feb",
    time: "20:00 - 01:00",
    location: "Café Cultural",
    address: "Güemes 565",
    description: "Una noche inolvidable de música electrónica fusionada con elementos acústicos en un ambiente íntimo y acogedor",
    status: "past",
    image: "/utopia.webp"
  },
  {
    id: 6,
    title: "Sunset Lounge",
    date: "Sab, 24 Feb",
    time: "18:00 - 23:00",
    location: "Sky Bar",
    address: "Juan B. Justo 1150, Piso 15",
    description: "Celebramos el atardecer con los mejores beats y una vista panorámica de la ciudad que te dejará sin aliento",
    status: "past",
    image: "/utopia.webp"
  },
  {
    id: 7,
    title: "Urban Beats",
    date: "Vie, 1 Mar",
    time: "21:00 - 02:00",
    location: "The Factory Club",
    address: "Av. Paraguay 750",
    description: "Una explosión de ritmos urbanos y electrónicos en el espacio industrial más cool de la ciudad",
    status: "past",
    image: "/utopia.webp"
  }
];


const sponsors = [
  {
    id: 1,
    name: "3 Lineas",
    logo: "/logos/3lineas.png"
  },
  {
    id: 2,
    name: "Rck FM",
    logo: "/logos/larcka.png"
  },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-950 overflow-x-hidden">
      <AnimatedBackground />
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-slate-900/50 backdrop-blur-sm border-b border-white/10 px-6 py-4">
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
            <div className="hidden md:flex items-center gap-8 text-white/80">
              <a href="#about" className="flex items-center gap-2 hover:text-neon-cyan transition-colors">
                <Radio className="w-5 h-5" />
                Sobre el Evento
              </a>
              <a href="#sessions" className="flex items-center gap-2 hover:text-neon-pink transition-colors">
                <Calendar className="w-5 h-5" />
                Sesiones
              </a>
              <a href="#sponsors" className="flex items-center gap-2 hover:text-neon-magenta transition-colors">
                <Sparkles className="w-5 h-5" />
                Auspiciantes
              </a>
            </div>
            <div className="flex items-center gap-4">
              <a href="https://www.youtube.com/@djdiegonelson" target="_blank" rel="noopener noreferrer" className="text-white hover:text-neon-pink transition-colors transform hover:scale-110">
                <svg className="w-7 h-7" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                </svg>
              </a>
              <a href="https://www.instagram.com/djdiegonelson" target="_blank" rel="noopener noreferrer" className="text-white hover:text-neon-cyan transition-colors transform hover:scale-110">
                <svg className="w-7 h-7" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
              <button className="md:hidden text-white hover:text-neon-cyan transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="relative w-full flex items-center justify-center min-h-screen pt-32">
        <div className="absolute inset-0 z-0">
          <Image
            src="/people-ambar.jpg"
            alt="Bar People Background"
            fill
            className="object-cover opacity-40"
            priority
          />
        </div>
        <div className="relative z-10 container mx-auto px-6">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-8xl font-bold text-white tracking-tight mb-6">
              <span className="font-pacifico font-normal">Chill & Groove</span> Sessions
            </h1>
            <p className="text-xl md:text-3xl text-red-500 font-semibold mb-12">
              Únete a la experiencia más relajada y groovy de música electrónica
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
                src="https://www.youtube.com/embed/nu1DWWjOwr0?si=9PQkPiqDugqMQ1Uw"
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
      <section id="about" className="py-24 px-4 md:px-8 relative overflow-hidden">
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-6xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-neon-pink via-neon-cyan to-neon-magenta animate-pulse">
              Chill & Groove Sessions
            </h2>
            <p className="text-xl text-white/80 max-w-4xl mx-auto animate-fade-in leading-relaxed">
              Embárcate en un viaje musical único donde el chill y el groove se fusionan 
              en los espacios más exclusivos de la ciudad.
              
              Durante marzo y abril, cada venue se transforma en un escenario perfecto 
              para disfrutar de los mejores beats.
              
              Nuestras sesiones ofrecen una atmósfera relajada y agradable, con ritmos 
              que invitan a disfrutar y sentir la música, creando una experiencia social 
              tranquila y placentera, ideal para disfrutar de una noche de verano en 
              nuestros exclusivos bares y restaurantes.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-zinc-900/50 backdrop-blur-sm p-8 rounded-xl border border-white/10 hover:border-neon-pink/50 transition-all duration-300 group hover:transform hover:-translate-y-2 hover:shadow-xl hover:shadow-neon-pink/20">
              <div className="relative">
                <Radio className="w-12 h-12 text-neon-pink mb-6 group-hover:scale-110 transition-transform duration-500 animate-pulse" />
                <div className="absolute -inset-1 bg-neon-pink/20 rounded-full blur-sm" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-neon-pink transition-colors">¡Música Electrizante!</h3>
              <p className="text-white/70 leading-relaxed group-hover:text-white/90 transition-colors">
                Desde deep house hasta progressive, cada noche presenta una cuidadosa selección musical que complementa perfectamente la personalidad única de cada venue
              </p>
            </div>
            <div className="bg-zinc-900/50 backdrop-blur-sm p-8 rounded-xl border border-white/10 hover:border-neon-cyan/50 transition-all duration-300 group hover:transform hover:-translate-y-2 hover:shadow-xl hover:shadow-neon-cyan/20">
              <div className="relative">
                <Headphones className="w-12 h-12 text-neon-cyan mb-6 group-hover:scale-110 transition-transform duration-500 animate-pulse" />
                <div className="absolute -inset-1 bg-neon-cyan/20 rounded-full blur-sm" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-neon-cyan transition-colors">¡Sonido Inmersivo!</h3>
              <p className="text-white/70 leading-relaxed group-hover:text-white/90 transition-colors">
                Experimenta el sonido envolvente de nuestro sistema personalizado, diseñado específicamente para cada espacio, garantizando una experiencia auditiva excepcional
              </p>
            </div>
            <div className="bg-zinc-900/50 backdrop-blur-sm p-8 rounded-xl border border-white/10 hover:border-neon-magenta/50 transition-all duration-300 group hover:transform hover:-translate-y-2 hover:shadow-xl hover:shadow-neon-magenta/20">
              <div className="relative">
                <Sparkles className="w-12 h-12 text-neon-magenta mb-6 group-hover:scale-110 transition-transform duration-500 animate-pulse" />
                <div className="absolute -inset-1 bg-neon-magenta/20 rounded-full blur-sm" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-neon-magenta transition-colors">¡Ambiente Mágico!</h3>
              <p className="text-white/70 leading-relaxed group-hover:text-white/90 transition-colors">
                Cada locación ofrece su propia magia visual, desde atardeceres naturales hasta iluminación arquitectónica que realza la belleza única de cada espacio
              </p>
            </div>
          </div>
        </div>
      </section>

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
                      <div className="text-white/90 flex items-center gap-2 text-base hover:text-neon-pink transition-colors">
                        <MapPin className="w-4 h-4" />
                        <div>
                          <span className="opacity-90 hover:opacity-100 transition-opacity block">
                            {session.location}
                          </span>
                          <span className="opacity-75 hover:opacity-100 transition-opacity text-sm block">
                            {session.address}
                          </span>
                        </div>
                      </div>
                    </div>
                    <p className="text-white/80 text-sm leading-relaxed hover:text-white/90 transition-colors">{session.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sponsors Section */}
      <section id="sponsors" className="py-20 px-4 md:px-8 relative">
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
          <div className="mt-16">
            
            <div className="mt-4 flex justify-center">
              <a
                href="https://wa.me/543624770039"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-8 py-4 text-lg font-semibold text-white bg-gradient-to-r from-green-500 to-green-600 rounded-full transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-green-500/50"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                Auspiciar Evento
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
