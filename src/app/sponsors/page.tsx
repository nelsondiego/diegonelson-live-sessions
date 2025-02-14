import Image from "next/image";
import Link from "next/link";
import { Mail, Globe, Star, Zap, Home, MessageCircle, Clock, CheckCircle2, Image as ImageIcon, Share2, Newspaper, Radio, Flag, MapPin } from "lucide-react";
import AnimatedBackground from "../components/AnimatedBackground";

type VenueStatus = "en comunicacion" | "preconfirmado" | "confirmado";

interface Venue {
  name: string;
  status: VenueStatus;
  address: string;
  image: string;
}

const plans = [
  {
    name: "Básico",
    title: "Presencia Web",
    price: "50.000",
    icon: Globe,
    color: "neon-cyan",
    features: [
      {
        text: "Logotipo y mención de tu marca en la página web oficial: diegonelson.com",
        icon: ImageIcon
      }
    ]
  },
  {
    name: "Pro",
    title: "Alcance Amplificado",
    price: "175.000",
    icon: Star,
    color: "neon-pink",
    features: [
      {
        text: "Todo lo del plan básico",
        icon: CheckCircle2
      },
      {
        text: "Publicidad en redes sociales",
        icon: Share2
      },
      {
        text: "Inclusión de tu marca en la folletería del evento",
        icon: Newspaper
      }
    ]
  },
  {
    name: "Premium",
    title: "Máxima Exposición",
    price: "300.000",
    icon: Zap,
    color: "neon-magenta",
    features: [
      {
        text: "Todo lo de los planes anteriores",
        icon: CheckCircle2
      },
      {
        text: "Presencia en Radio La Rcka (segmento publicitario)",
        icon: Radio
      },
      {
        text: "Espacio para banner o banderín de tu marca en los eventos",
        icon: Flag
      }
    ]
  }
];

const benefits = [
  {
    title: "Visibilidad",
    description: "Asocia tu marca a un evento de alta calidad con gran convocatoria."
  },
  {
    title: "Conexión",
    description: "Llega a un público diverso y apasionado por la música."
  },
  {
    title: "Prestigio",
    description: "Refuerza tu imagen como una empresa que apoya la cultura y el entretenimiento local."
  }
];

const venues: Venue[] = [
  {
    name: "Conejo Negro",
    status: "preconfirmado",
    address: "Liniers 22",
    image: "/places/conejonegro.webp"
  },
  {
    name: "Clover",
    status: "confirmado",
    address: "Ayacucho 285",
    image: "/places/clover.webp"
  },
  {
    name: "La Barra",
    status: "confirmado",
    address: "Güemes 345",
    image: "/places/labarra.webp"
  },
  {
    name: "Brews",
    status: "confirmado",
    address: "Av. Paraguay 24",
    image: "/places/brews.webp"
  },
  {
    name: "Green Bar",
    status: "confirmado",
    address: "Av. Avalos 526",
    image: "/places/greenbar.webp"
  },
  {
    name: "Patagonia",
    status: "en comunicacion",
    address: "Av. Sarmiento 544",
    image: "/places/patagonia.webp"
  },
  {
    name: "Chalé",
    status: "en comunicacion",
    address: "Av. Sarmiento 350",
    image: "/places/chale.webp"
  },
  {
    name: "Utopia",
    status: "en comunicacion",
    address: "Av. Sarmiento 1991",
    image: "/places/utopia.webp"
  },
  {
    name: "Nebraska",
    status: "en comunicacion",
    address: "Av. Laprida 88,",
    image: "/places/nebraska.webp"
  },
  {
    name: "Queen Pizza",
    status: "en comunicacion",
    address: "Pellegrini 654",
    image: "/places/queen-pizza.webp"
  },
  {
    name: "Tiempo",
    status: "en comunicacion",
    address: "Arbo y Blanco 268",
    image: "/places/tiempo.webp"
  },
];

export default function SponsorsPage() {
  return (
    <>
      <AnimatedBackground />

      {/* Home Button */}
      <Link 
        href="/" 
        className="fixed top-6 left-6 z-50 flex items-center gap-2 px-4 py-2 text-white/50 hover:text-white bg-white/5 hover:bg-white/10 backdrop-blur-sm rounded-full transition-all duration-300 border border-white/10 hover:border-neon-cyan/30 hover:-translate-y-0.5"
      >
        <Home className="w-4 h-4" />
        <span className="text-sm font-medium">Ver detalles del evento</span>
      </Link>

      {/* Hero Section */}
      <div className="relative w-full min-h-[60vh] flex items-center justify-center pt-32">
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

        <div className="relative z-10 container mx-auto px-6 text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-white tracking-tight mb-8">
            <span className="font-pacifico font-normal bg-gradient-to-r from-neon-pink via-white to-neon-cyan bg-clip-text text-transparent">
              ¡Impulsa tu marca
            </span>
            <span className="block text-3xl md:text-5xl mt-2 font-light tracking-widest text-neon-cyan">
              al ritmo de la música!
            </span>
          </h1>

          <div className="max-w-3xl mx-auto mb-12">
            <p className="text-lg md:text-xl text-white/80 leading-relaxed">
              Te presentamos una oportunidad exclusiva para ser parte de Chill & Groove Sessions, un ciclo de eventos musicales únicos que se llevarán a cabo en los bares y restaurantes más destacados de la ciudad durante los meses de marzo y abril.
            </p>
          </div>
        </div>
      </div>

      {/* About Section */}
      <section className="py-24 px-4 md:px-8 relative">
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 text-white/80">
              <p className="text-lg leading-relaxed">
                Liderado por el reconocido DJ Diego Nelson, Chill & Groove Sessions combina elementos de smooth jazz, soul y funk con ritmos electrónicos y técnicas de producción, creando una atmósfera inigualable.
              </p>
              <p className="text-lg leading-relaxed">
                DJ Diego Nelson es programador, DJ y melómano.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {benefits.map((benefit, index) => (
                <div key={index} className="bg-zinc-900/50 backdrop-blur-sm p-6 rounded-xl border border-white/10 hover:border-neon-cyan/50 transition-all duration-300 group hover:-translate-y-1">
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-neon-cyan transition-colors">
                    {benefit.title}
                  </h3>
                  <p className="text-white/70 text-sm leading-relaxed group-hover:text-white/90 transition-colors">
                    {benefit.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Venues Section */}
      <section className="py-24 px-4 md:px-8 relative">
        <div className="max-w-7xl mx-auto relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-6 text-transparent bg-clip-text bg-gradient-to-r from-neon-pink via-neon-cyan to-neon-magenta">
            Locaciones
          </h2>
          <p className="text-center text-white/70 mb-4">
            Lista de bares y restaurantes participantes en Resistencia. Esta lista se irá actualizando conforme se confirmen nuevas locaciones.
          </p>
          <div className="max-w-2xl mx-auto mb-8 bg-zinc-900/50 backdrop-blur-sm rounded-xl border border-neon-magenta/30 hover:border-neon-pink/50 transition-all duration-300 p-4 group hover:shadow-2xl hover:shadow-purple-500/30 relative before:absolute before:inset-0 before:rounded-xl before:transition-opacity before:opacity-0 hover:before:opacity-100 before:bg-gradient-radial before:from-purple-500/20 before:to-pink-500/5 before:-z-10">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-neon-magenta/10 flex items-center justify-center group-hover:bg-neon-magenta/20 transition-colors duration-500">
                <MapPin className="w-5 h-5 text-neon-magenta group-hover:scale-110 transition-transform duration-500" />
              </div>
              <p className="text-base text-white/90 italic">
                ¡Próximamente segunda edición en Corrientes Capital!
              </p>
            </div>
          </div>

          <div className="space-y-12">
            {/* Confirmados */}
            <div>
              <h3 className="text-2xl font-bold mb-6 text-blue-300">Confirmados</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {venues
                  .filter(venue => venue.status === "confirmado")
                  .map((venue, index) => (
                    <div 
                      key={index}
                      className="bg-zinc-900/50 backdrop-blur-sm rounded-xl border border-white/10 hover:border-neon-cyan/50 transition-all duration-300 group overflow-hidden hover:shadow-2xl hover:shadow-cyan-500/30 relative before:absolute before:inset-0 before:rounded-xl before:transition-opacity before:opacity-0 hover:before:opacity-100 before:bg-gradient-radial before:from-cyan-500/20 before:to-blue-500/5 before:-z-10"
                    >
                      <div className="flex">
                        <div className="relative w-1/4 aspect-square">
                          <Image
                            src={venue.image}
                            alt={venue.name}
                            fill
                            className="object-cover"
                          />
                        </div>
                        <div className="flex-1 px-6 py-3">
                          <div className="flex items-center justify-between">
                            <h3 className="text-xl font-bold text-white group-hover:text-neon-cyan transition-colors">
                              {venue.name}
                            </h3>
                            <CheckCircle2 className="w-5 h-5 text-blue-300" />
                          </div>
                          <p className="text-sm text-white/50 mt-1">{venue.address}</p>
                          <span className="text-sm px-3 py-1 rounded-full bg-blue-500/20 text-blue-300 mt-3 inline-block">
                            {venue.status}
                          </span>
                        </div>
                      </div>
                    </div>
                  ))}
              </div>
            </div>

            {/* Preconfirmados */}
            <div>
              <h3 className="text-2xl font-bold mb-6 text-emerald-300">Preconfirmados</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {venues
                  .filter(venue => venue.status === "preconfirmado")
                  .map((venue, index) => (
                    <div 
                      key={index}
                      className="bg-zinc-900/50 backdrop-blur-sm rounded-xl border border-white/10 hover:border-neon-cyan/50 transition-all duration-300 group overflow-hidden hover:shadow-2xl hover:shadow-emerald-500/30 relative before:absolute before:inset-0 before:rounded-xl before:transition-opacity before:opacity-0 hover:before:opacity-100 before:bg-gradient-radial before:from-emerald-500/20 before:to-green-500/5 before:-z-10"
                    >
                      <div className="flex">
                        <div className="relative w-1/4 aspect-square">
                          <Image
                            src={venue.image}
                            alt={venue.name}
                            fill
                            className="object-cover"
                          />
                        </div>
                        <div className="flex-1 px-6 py-3">
                          <div className="flex items-center justify-between">
                            <h3 className="text-xl font-bold text-white group-hover:text-neon-cyan transition-colors">
                              {venue.name}
                            </h3>
                            <Clock className="w-5 h-5 text-emerald-300" />
                          </div>
                          <p className="text-sm text-white/50 mt-1">{venue.address}</p>
                          <span className="text-sm px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 mt-3 inline-block">
                            {venue.status}
                          </span>
                        </div>
                      </div>
                    </div>
                  ))}
              </div>
            </div>

            {/* En comunicación */}
            <div>
              <h3 className="text-2xl font-bold mb-6 text-amber-300">En comunicación</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {venues
                  .filter(venue => venue.status === "en comunicacion")
                  .map((venue, index) => (
                    <div 
                      key={index}
                      className="bg-zinc-900/50 backdrop-blur-sm rounded-xl border border-white/10 hover:border-neon-cyan/50 transition-all duration-300 group overflow-hidden hover:shadow-2xl hover:shadow-amber-500/30 relative before:absolute before:inset-0 before:rounded-xl before:transition-opacity before:opacity-0 hover:before:opacity-100 before:bg-gradient-radial before:from-amber-500/20 before:to-orange-500/5 before:-z-10"
                    >
                      <div className="flex">
                        <div className="relative w-1/4 aspect-square">
                          <Image
                            src={venue.image}
                            alt={venue.name}
                            fill
                            className="object-cover"
                          />
                        </div>
                        <div className="flex-1 px-6 py-3">
                          <div className="flex items-center justify-between">
                            <h3 className="text-xl font-bold text-white group-hover:text-neon-cyan transition-colors">
                              {venue.name}
                            </h3>
                            <MessageCircle className="w-5 h-5 text-amber-300" />
                          </div>
                          <p className="text-sm text-white/50 mt-1">{venue.address}</p>
                          <span className="text-sm px-3 py-1 rounded-full bg-amber-500/20 text-amber-300 mt-3 inline-block">
                            {venue.status}
                          </span>
                        </div>
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Plans Section */}
      <section className="py-24 px-4 md:px-8 relative">
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-neon-pink via-neon-cyan to-neon-magenta animate-pulse mb-4">
              Planes de patrocinio diseñados para cada necesidad
            </h2>
            <p className="text-white/60 text-lg">
              Aprovecha la oportunidad de participar en ambas ediciones: Resistencia y Corrientes Capital
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {plans.map((plan) => {
              const IconComponent = plan.icon;
              return (
                <div key={plan.name} className="bg-zinc-900/50 backdrop-blur-sm p-8 rounded-xl border border-white/10 hover:border-neon-cyan/50 transition-all duration-300 group hover:-translate-y-2 hover:shadow-xl hover:shadow-neon-cyan/20">
                  <div className={`relative mb-6 w-12 h-12 rounded-full bg-${plan.color}/10 flex items-center justify-center group-hover:bg-${plan.color}/20 transition-colors duration-500`}>
                    <IconComponent className={`w-6 h-6 text-${plan.color} group-hover:scale-110 transition-transform duration-500`} />
                  </div>

                  <div className="mb-6">
                    <h3 className="text-sm uppercase tracking-wider text-white/50 mb-1">Plan {plan.name}</h3>
                    <div className="text-2xl font-bold text-white group-hover:text-neon-cyan transition-colors">
                      {plan.title}
                    </div>
                    <div className="mt-2 text-3xl font-bold text-white/90">
                      ${plan.price}
                    </div>
                  </div>

                  <ul className="space-y-3">
                    {plan.features.map((feature, index) => {
                      const FeatureIcon = feature.icon;
                      return (
                        <li key={index} className="flex items-start gap-2 text-white/70 group-hover:text-white/90 transition-colors">
                          <FeatureIcon className="w-5 h-5 text-neon-cyan shrink-0 mt-0.5" />
                          <span className="text-sm">{feature.text}</span>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-24 px-4 md:px-8 relative">
        <div className="max-w-3xl mx-auto text-center relative z-10">
          <h2 className="text-3xl font-bold mb-8 text-white">
            ¡No dejes pasar esta oportunidad de hacer crecer tu marca!
          </h2>
          
          <p className="text-white/80 mb-12 text-lg">
            Contáctanos para personalizar un plan que se ajuste a tus objetivos y presupuesto. Eleva tu marca con el ambiente exclusivo y la música más innovadora en Chill & Groove Sessions!
          </p>

          <div className="flex flex-col md:flex-row items-center justify-center gap-6">
            <a
              href="https://diegonelson.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-3 text-white/80 hover:text-white bg-white/5 hover:bg-white/10 backdrop-blur-sm rounded-full transition-all duration-300 border border-white/10 hover:border-neon-cyan/30"
            >
              <Globe className="w-5 h-5 text-neon-cyan" />
              diegonelson.com
            </a>

            <a
              href="https://wa.me/543624770039"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-3 text-white/80 hover:text-white bg-white/5 hover:bg-white/10 backdrop-blur-sm rounded-full transition-all duration-300 border border-white/10 hover:border-neon-pink/30"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5 text-neon-pink"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              3624770039
            </a>

            <a
              href="mailto:hola@diegonelson.com"
              className="flex items-center gap-2 px-6 py-3 text-white/80 hover:text-white bg-white/5 hover:bg-white/10 backdrop-blur-sm rounded-full transition-all duration-300 border border-white/10 hover:border-neon-magenta/30"
            >
              <Mail className="w-5 h-5 text-neon-magenta" />
              hola@diegonelson.com
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 md:px-8 border-t border-white/10 bg-slate-900/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto text-center">
          <div className="relative w-20 h-20 mx-auto mb-4">
            <Image
              src="/diegonelson_logo.png"
              alt="Diego Nelson Logo"
              fill
              className="rounded-full object-cover opacity-50 hover:opacity-100 transition-opacity"
            />
          </div>
          <p className="text-white/30 text-sm">
            © {new Date().getFullYear()} Diego Nelson. Todos los derechos reservados.
          </p>
        </div>
      </footer>
    </>
  );
}