import Image from "next/image";
import {
  Music4,
  MapPin,
  Calendar,
  Headphones,
  Clock,
  Sparkles,
} from "lucide-react";
import ShareButton from "./components/ShareButton";
import AnimatedBackground from "./components/AnimatedBackground";
import UpcomingDates from "./components/UpcomingDates";
import MixcloudPlayer from "./components/MixcloudPlayer";
import Separator from "./components/Separator";
import { Session, Sponsor } from "./types";
const upcomingSessions: Session[] = [
  {
    id: 1,
    title: "Clover",
    date: "A confirmar",
    time: "",
    location: "Clover",
    address: "Ayacucho 285",
    description: "Espacio exclusivo con ambiente premium y beats elegantes",
    status: "upcoming",
    image: "/places/clover.webp",
  },
  {
    id: 2,
    title: "Conejo Negro",
    date: "A confirmar",
    time: "",
    location: "Conejo Negro",
    address: "Liniers 22",
    description: "Alta gastronomía y deep house en ambiente íntimo",
    status: "upcoming",
    image: "/places/conejonegro.webp",
  },
  {
    id: 3,
    title: "La Barra",
    date: "A confirmar",
    time: "",
    location: "La Barra",
    address: "Güemes 345",
    description: "Oasis urbano con ritmos electrónicos y ambiente natural",
    status: "upcoming",
    image: "/places/labarra.webp",
  },
  {
    id: 4,
    title: "Brews",
    date: "A confirmar",
    time: "",
    location: "Brews",
    address: "Av. Paraguay 24",
    description: "Mixología artesanal y beats cautivadores en ambiente moderno",
    status: "upcoming",
    image: "/places/brews.webp",
  },
  {
    id: 5,
    title: "Green Bar",
    date: "A confirmar",
    time: "",
    location: "Green Bar",
    address: "Av. Avalos 526",
    description:
      "Fusión de electrónica y elementos acústicos en espacio exclusivo",
    status: "upcoming",
    image: "/places/greenbar.webp",
  },
  {
    id: 6,
    title: "El Bosque Food Park",
    date: "A confirmar",
    time: "",
    location: "El Bosque",
    address: "Av Laprida 700",
    description: "Sunset sessions con gastronomía gourmet y beats electrónicos",
    status: "upcoming",
    image: "/places/elbosque.webp",
  },
];

const sponsors: Sponsor[] = [
  {
    id: 1,
    name: "3 Lineas",
    logo: "/logos/3lineas.png",
    tier: "platinum",
    active: true,
    url: "https://3lineas.com",
  },
  {
    id: 2,
    name: "La Rocka 89.5",
    logo: "/logos/larcka.png",
    tier: "gold",
    active: true,
    url: "https://rckfm.com",
  },
  {
    id: 3,
    name: "Dame Un Turno",
    logo: "/logos/dameunturno.png",
    tier: "gold",
    active: true,
    url: "https://dameunturno.com",
  },
];

export default function Home() {
  return (
    <>
      <div className="min-h-screen bg-slate-950 overflow-x-hidden">
        <AnimatedBackground />

        {/* Hero Section */}
        <div className="relative w-full min-h-screen flex items-center justify-center pt-32 ">
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
                    Música • Experiencias • Conexiones
                  </p>
                  <p className="text-lg md:text-xl text-white/70">
                    Descubre una experiencia sensorial única donde la música
                    electrónica premium se fusiona con la alta gastronomía
                    durante 8 noches exclusivas en 8 de los espacios más
                    prestigiosos de Resistencia
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
                <div className="relative w-full  rounded-xl overflow-hidden shadow-2xl shadow-neon-pink/20 border border-white/10">
                  <MixcloudPlayer />
                </div>
              </div>
            </div>
          </div>

          <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-slate-950 to-transparent z-10"></div>
        </div>

        <Separator />

        {/* About the Event Section */}
        <section
          id="about"
          className="py-24 px-4 md:px-8 relative overflow-hidden"
        >
          <div className="max-w-7xl mx-auto relative z-10">
            <div className="text-center mb-16">
              <h2 className="text-6xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-neon-pink via-neon-cyan to-neon-magenta animate-pulse">
                La Experiencia
              </h2>
              <div className="max-w-3xl mx-auto space-y-6 text-white/80">
                <p className="text-xl leading-relaxed">
                  Bienvenido a una revolución nocturna donde la música
                  electrónica cobra vida en los espacios más sofisticados de
                  Resistencia.
                </p>
                <p className="text-lg leading-relaxed">
                  Durante mayo, cada bar se transforma en un escenario
                  perfecto donde los beats, la gastronomía y las buenas vibras
                  se fusionan para crear momentos inolvidables.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-zinc-900/50 backdrop-blur-sm p-8 rounded-xl border border-white/10 hover:border-neon-pink/50 transition-all duration-300 group hover:-translate-y-2 hover:shadow-xl hover:shadow-neon-pink/20">
                <div className="relative mb-6 w-12 h-12 rounded-full bg-neon-pink/10 flex items-center justify-center group-hover:bg-neon-pink/20 transition-colors duration-500">
                  <Headphones className="w-6 h-6 text-neon-pink group-hover:scale-110 transition-transform duration-500" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-neon-pink transition-colors">
                  Experiencia Musical Elite
                </h3>
                <p className="text-white/70 leading-relaxed group-hover:text-white/90 transition-colors">
                  Sumérgete en una selección exquisita de deep house, disco
                  house y funky house, cuidadosamente curada para crear momentos
                  mágicos que elevarán tus sentidos a otro nivel.
                </p>
              </div>

              <div className="bg-zinc-900/50 backdrop-blur-sm p-8 rounded-xl border border-white/10 hover:border-neon-cyan/50 transition-all duration-300 group hover:-translate-y-2 hover:shadow-xl hover:shadow-neon-cyan/20">
                <div className="relative mb-6 w-12 h-12 rounded-full bg-neon-cyan/10 flex items-center justify-center group-hover:bg-neon-cyan/20 transition-colors duration-500">
                  <MapPin className="w-6 h-6 text-neon-cyan group-hover:scale-110 transition-transform duration-500" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-neon-cyan transition-colors">
                  Bares Extraordinarios
                </h3>
                <p className="text-white/70 leading-relaxed group-hover:text-white/90 transition-colors">
                  Descubre los espacios más exclusivos de la ciudad, donde cada
                  detalle está diseñado para ofrecerte una experiencia sensorial
                  incomparable en ambientes de lujo.
                </p>
              </div>

              <div className="bg-zinc-900/50 backdrop-blur-sm p-8 rounded-xl border border-white/10 hover:border-neon-magenta/50 transition-all duration-300 group hover:-translate-y-2 hover:shadow-xl hover:shadow-neon-magenta/20">
                <div className="relative mb-6 w-12 h-12 rounded-full bg-neon-magenta/10 flex items-center justify-center group-hover:bg-neon-magenta/20 transition-colors duration-500">
                  <Sparkles className="w-6 h-6 text-neon-magenta group-hover:scale-110 transition-transform duration-500" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-neon-magenta transition-colors">
                  Conexiones Premium
                </h3>
                <p className="text-white/70 leading-relaxed group-hover:text-white/90 transition-colors">
                  Vive momentos únicos en un ambiente selecto donde la música,
                  la gastronomía y las conexiones sociales se entrelazan para
                  crear experiencias que transformarán tus noches.
                </p>
              </div>
            </div>

            <div className="mt-16 text-center">
              <p className="text-white/60 text-lg max-w-2xl mx-auto">
                Únete a nosotros en esta experiencia única donde cada sesión es
                una oportunidad para disfrutar de los mejores momentos en los
                lugares más especiales de la ciudad.
              </p>
            </div>
          </div>
        </section>

        <Separator />

        {/* Upcoming Sessions */}
        <section
          id="sessions"
          className="py-24 px-4 md:px-8 relative overflow-hidden"
        >
          <div className="max-w-7xl mx-auto relative z-10">
            <div className="text-center mb-16">
              <h2 className="text-6xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-neon-pink via-neon-cyan to-neon-magenta animate-pulse">
                Próximas Sesiones
              </h2>
              <p className="text-xl text-white/80 max-w-2xl mx-auto">
                Descubre nuestros próximos eventos y reserva tu lugar en una
                experiencia musical única. Cada sesión está cuidadosamente
                curada para ofrecer los mejores momentos de música electrónica
                en locaciones exclusivas.
              </p>
            </div>

            {upcomingSessions.filter((session) => session.status === "upcoming")
              .length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {upcomingSessions.map((session) => (
                  <div
                    key={session.id}
                    className="bg-zinc-900/50 backdrop-blur-sm p-4 rounded-lg border border-white/10 hover:border-neon-cyan/50 transition-all duration-300 group hover:-translate-y-1 hover:shadow-lg hover:shadow-neon-cyan/20"
                  >
                    <div className="relative mb-4 w-8 h-8 rounded-full bg-neon-cyan/10 flex items-center justify-center group-hover:bg-neon-cyan/20 transition-colors duration-500">
                      <Calendar className="w-4 h-4 text-neon-cyan group-hover:scale-110 transition-transform duration-500" />
                    </div>

                    <div className="relative aspect-video mb-4 rounded-lg overflow-hidden">
                      <Image
                        src={session.image}
                        alt={session.title}
                        fill
                        className="object-cover"
                      />
                    </div>

                    <h3 className="text-lg font-bold text-white mb-2 group-hover:text-neon-cyan transition-colors">
                      {session.title}
                    </h3>

                    <div className="space-y-1 mb-2 text-sm">
                      <p className="text-white/90 flex items-center gap-1.5 hover:text-neon-cyan transition-colors">
                        <Calendar className="w-3.5 h-3.5" />
                        <span className="opacity-90 hover:opacity-100 transition-opacity">
                          {session.date} • {session.time}
                        </span>
                      </p>
                      <p className="text-white/90 flex items-center gap-1.5 hover:text-neon-pink transition-colors">
                        <MapPin className="w-3.5 h-3.5" />
                        <span className="opacity-90 hover:opacity-100 transition-opacity">
                          {session.address} • Rcia
                        </span>
                      </p>
                    </div>

                    <p className="text-white/70 text-sm leading-relaxed group-hover:text-white/90 transition-colors line-clamp-2">
                      {session.description}
                    </p>
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
                <div
                  key={sponsor.id}
                  className="flex flex-col justify-center gap-2"
                >
                  <div className="group w-full relative p-4 rounded-lg transform hover:scale-110 transition-all duration-300 bg-slate-800/30">
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
                  <a
                    href={sponsor.url ?? "#"}
                    className="text-white/60 hover:text-white transition-colors text-sm font-medium tracking-wide hover:bg-gradient-to-r hover:from-neon-pink hover:to-neon-cyan hover:bg-clip-text hover:text-transparent"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {sponsor.name}
                  </a>
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
                <ShareButton
                  title="Chill & Groove Sessions"
                  date="Mayo 2025"
                  time="Diferentes horarios"
                  location="Resistencia, Chaco"
                />
                <a
                  href="https://www.youtube.com/@djdiegonelson"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/50 hover:text-neon-pink transition-colors transform hover:scale-110"
                >
                  <svg
                    className="w-5 h-5"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                  </svg>
                </a>
                <a
                  href="https://www.instagram.com/diegonelson"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/50 hover:text-neon-cyan transition-colors transform hover:scale-110"
                >
                  <svg
                    className="w-5 h-5"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.073 1.689.073-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                </a>
              </div>
            </div>

            <div className="mt-4 text-center">
              <p className="text-white/30 text-xs">
                © {new Date().getFullYear()} Diego Nelson. Todos los derechos
                reservados.
              </p>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}
