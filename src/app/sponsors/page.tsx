import Image from "next/image";
import Link from "next/link";
import {
  Mail,
  Globe,
  Star,
  Zap,
  MessageCircle,
  Clock,
  CheckCircle2,
  Image as ImageIcon,
  Share2,
  Newspaper,
  Radio,
  Flag,
  Handshake,
  Disc3,
} from "lucide-react";
import AnimatedBackground from "../components/AnimatedBackground";
import EventSection from "../components/EventSection";
import Separator from "../components/Separator";

type BarStatus = "en comunicacion" | "preconfirmado" | "confirmado";

interface Bar {
  name: string;
  status: BarStatus;
  address: string;
  image: string;
}

const plans = [
  {
    name: "Básico",
    title: "Presencia Digital Estratégica",
    price: "50.000",
    icon: Globe,
    color: "neon-cyan",
    features: [
      {
        text: "Potencia tu marca en diegonelson.com - El epicentro digital del evento más exclusivo de música electrónica en Resistencia",
        icon: ImageIcon,
      },
    ],
  },
  {
    name: "Pro",
    title: "Impacto Multicanal",
    price: "175.000",
    icon: Star,
    color: "neon-pink",
    features: [
      {
        text: "Todos los beneficios del plan básico",
        icon: CheckCircle2,
      },
      {
        text: "Amplifica tu alcance con campañas estratégicas en nuestras redes sociales de alto engagement",
        icon: Share2,
      },
      {
        text: "Presencia premium en materiales impresos exclusivos del evento",
        icon: Newspaper,
      },
    ],
  },
  {
    name: "Premium",
    title: "Dominancia Total",
    price: "300.000",
    icon: Zap,
    color: "neon-magenta",
    features: [
      {
        text: "Accede a todos los beneficios de los planes anteriores",
        icon: CheckCircle2,
      },
      {
        text: "Maximiza tu visibilidad con spots publicitarios en Radio La Rcka - Líder en música electrónica",
        icon: Radio,
      },
      {
        text: "Destaca tu marca con presencia física premium en ubicaciones estratégicas de cada evento",
        icon: Flag,
      },
    ],
  },
];

const benefits = [
  {
    title: "Visibilidad Elite",
    description:
      "Posiciona tu marca en el epicentro de la escena electrónica, alcanzando a un público selecto y de alto poder adquisitivo.",
    icon: Star,
    color: "neon-cyan",
  },
  {
    title: "Networking Premium",
    description:
      "Conecta con líderes de opinión y una audiencia exclusiva que valora las experiencias de calidad y el lifestyle contemporáneo.",
    icon: Handshake,
    color: "neon-pink",
  },
  {
    title: "Prestigio & Innovación",
    description:
      "Eleva tu marca como pionera en el apoyo a la cultura vanguardista y el entretenimiento premium en la región.",
    icon: Globe,
    color: "neon-magenta",
  },
];

const bares: Bar[] = [
  {
    name: "Conejo Negro",
    status: "preconfirmado",
    address: "Liniers 22",
    image: "/places/conejonegro.webp",
  },
  {
    name: "Clover",
    status: "confirmado",
    address: "Ayacucho 285",
    image: "/places/clover.webp",
  },
  {
    name: "La Barra",
    status: "confirmado",
    address: "Güemes 345",
    image: "/places/labarra.webp",
  },
  {
    name: "Brews",
    status: "confirmado",
    address: "Av. Paraguay 24",
    image: "/places/brews.webp",
  },
  {
    name: "Green Bar",
    status: "confirmado",
    address: "Av. Avalos 526",
    image: "/places/greenbar.webp",
  },
  {
    name: "Patagonia",
    status: "en comunicacion",
    address: "Av. Sarmiento 544",
    image: "/places/patagonia.webp",
  },
  {
    name: "Chalé",
    status: "en comunicacion",
    address: "Av. Sarmiento 350",
    image: "/places/chale.webp",
  },
  {
    name: "Utopia",
    status: "en comunicacion",
    address: "Av. Sarmiento 1991",
    image: "/places/utopia.webp",
  },
  {
    name: "Nebraska",
    status: "en comunicacion",
    address: "Av. Laprida 88,",
    image: "/places/nebraska.webp",
  },
  {
    name: "Queen Pizza",
    status: "en comunicacion",
    address: "Pellegrini 654",
    image: "/places/queen-pizza.webp",
  },
  {
    name: "Tiempo",
    status: "en comunicacion",
    address: "Arbo y Blanco 268",
    image: "/places/tiempo.webp",
  },
  {
    name: "El Bosque",
    status: "confirmado",
    address: "Av Laprida 700",
    image: "/places/elbosque.webp",
  },
];

export default function SponsorsPage() {
  return (
    <main className="min-h-screen w-full">
      <div className="container mx-auto relative">
        <div className="absolute top-8 right-8 text-right mb-16">
          <h1 className="text-2xl md:text-4xl font-bold text-white tracking-tight mb-8">
            <span className="font-pacifico font-normal bg-gradient-to-r from-neon-pink via-white to-neon-cyan bg-clip-text text-transparent p-1">
              Chill & Groove
            </span>
            <span className="block text-xl md:text-2xl mt-2 font-light tracking-widest text-neon-cyan">
              SESSIONS
            </span>
          </h1>
        </div>
      </div>
      <AnimatedBackground />

      {/* Home Button */}
      <Link
        href="/"
        className="fixed top-6 left-6 z-50 flex items-center gap-2 px-4 py-2 text-white/50 hover:text-white bg-white/5 hover:bg-neon-cyan/10 backdrop-blur-sm rounded-full transition-all duration-300 border border-neon-magenta/30 hover:border-neon-cyan/30"
      >
        <Disc3 className="w-6 h-6" />
        <span className="text-sm font-medium">Ver detalles del evento</span>
      </Link>

      {/* Hero Section */}
      <div className="relative w-full min-h-screen flex items-center justify-start pt-32">
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
            <div>
              <p className="text-neon-cyan mb-4 text-sm md:text-base font-medium tracking-wider uppercase flex items-center gap-2">
                <span className="w-12 h-[1px] bg-neon-cyan inline-block"></span>
                <Disc3 className="w-5 h-5 text-gray-300 animate-spin-slow" />
                25 años con la música
              </p>

              <h1 className="text-5xl md:text-8xl font-bold text-white tracking-tight mb-6">
                <span className="font-pacifico font-normal bg-gradient-to-r from-neon-pink via-white to-neon-cyan bg-clip-text text-transparent">
                  ¡Impulsa tu marca
                </span>
                <span className="block text-2xl md:text-5xl mt-6 font-light tracking-widest text-neon-cyan">
                  al ritmo de la música!
                </span>
              </h1>

              <div className="mb-12">
                <p className="text-lg md:text-xl p-0 md:pr-40 text-white/80 leading-relaxed">
                  Sé parte de <strong>Chill & Groove Sessions</strong>, donde la música 
                  electrónica y las marcas premium convergen. <strong>8 noches</strong> exclusivas 
                  en los mejores bares de Resistencia.
                  <span className="block mt-2">
                    Mayo 2025: La nueva era del entretenimiento.
                  </span>
                </p>
              </div>

              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-12 py-3 text-white 
                bg-neon-cyan/20 hover:bg-neon-cyan/30
                backdrop-blur-sm rounded-2xl transition-all duration-500 
                border border-neon-cyan/50 hover:border-neon-cyan
                shadow-lg shadow-neon-cyan/20 hover:shadow-neon-cyan/40
                group hover:scale-[1.02]"
              >
                <Handshake className="w-5 h-5 text-neon-cyan group-hover:scale-110 transition-transform" />
                <span className="font-medium text-lg">¡Quiero Auspiciar!</span>
              </a>
            </div>
            <div className="relative h-[500px] w-full">
              <div className="absolute -inset-5 bg-gradient-to-tr from-cyan-200 via-neon-pink/30 to-neon-cyan blur-3xl rounded-xl"></div>
              <Image
                src="/people-tinted-left-2.webp"
                alt="People enjoying music"
                fill
                className="object-cover relative z-10 rounded-xl hidden md:block"
                priority
              />
              <Image
                src="/girl-look-up-2.webp"
                alt="People enjoying music"
                fill
                className="object-cover relative z-10 rounded-xl md:hidden block"
                priority
              />
            </div>
          </div>
        </div>
      </div>

      {/* About Section */}
      <section id="about" className=" my-20 md:my-40">
        <div className="container mx-auto px-4">
          <h2 className="md:text-5xl text-3xl p-1 font-bold bg-gradient-to-r from-white via-neon-cyan to-white bg-clip-text text-transparent animate-gradient text-center mb-4">
            Sé Parte de Algo Único
          </h2>
          <p className="text-xl text-white/80 text-center max-w-3xl mx-auto mb-16">
            Únete a nosotros como patrocinador y conecta tu marca con una
            audiencia apasionada por la música y las experiencias únicas
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="p-6 rounded-xl backdrop-blur-sm border border-white/10 hover:border-white/20 transition-all duration-300 group"
              >
                <div
                  className={`w-12 h-12 mb-4 rounded-lg flex items-center justify-center bg-${benefit.color}/10 group-hover:bg-${benefit.color}/20 transition-colors duration-300`}
                >
                  {<benefit.icon className={`w-6 h-6 text-${benefit.color}`} />}
                </div>
                <h3 className="text-xl font-bold mb-2 text-white/90 group-hover:text-white transition-colors duration-300">
                  {benefit.title}
                </h3>
                <p className="text-white/70 group-hover:text-white/80 transition-colors duration-300">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Separator />

      {/* Event Info Section */}
      <EventSection />

      <Separator />

      {/* Bares Section */}
      <section className="my-20 md:my-40 px-4 md:px-8 relative">
        <div className="container mx-auto relative z-10">
          <h2 className="text-3xl md:text-5xl font-bold text-center mb-4 text-transparent bg-clip-text bg-gradient-to-r from-neon-pink via-neon-cyan to-neon-magenta">
            Locaciones
          </h2>
          <p className="text-lg text-white/70 text-center mb-8">
            Lista de bares y restaurantes participantes en Resistencia. Esta
            lista se irá actualizando conforme se confirmen nuevas locaciones.
          </p>

          <div className="space-y-12">
            {/* Confirmados */}
            <div>
              <h3 className="text-xl md:text-2xl font-bold mb-6 text-blue-300">
                Confirmados
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {bares
                  .filter((bar) => bar.status === "confirmado")
                  .map((venue, index) => (
                    <div
                      key={index}
                      className="bg-zinc-900/50 backdrop-blur-sm rounded-xl border border-white/10 hover:border-neon-cyan/50 transition-all duration-300 group overflow-hidden hover:shadow-2xl hover:shadow-cyan-500/30"
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
                            <h4 className="text-lg font-bold text-white group-hover:text-neon-cyan transition-colors">
                              {venue.name}
                            </h4>
                            <CheckCircle2 className="w-5 h-5 text-blue-300" />
                          </div>
                          <p className="text-sm text-white/50 mt-1">
                            {venue.address}
                          </p>
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
              <h3 className="text-2xl font-bold mb-6 text-emerald-300">
                Preconfirmados
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {bares
                  .filter((bar) => bar.status === "preconfirmado")
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
                          <p className="text-sm text-white/50 mt-1">
                            {venue.address}
                          </p>
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
              <h3 className="text-2xl font-bold mb-6 text-amber-300">
                En comunicación
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {bares
                  .filter((bar) => bar.status === "en comunicacion")
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
                          <p className="text-sm text-white/50 mt-1">
                            {venue.address}
                          </p>
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

      <Separator />

      {/* Plans Section */}
      <section className="my-20 md:my-40 px-4 md:px-8 relative">
        <div className="container mx-auto relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl p-1 font-bold text-transparent bg-clip-text bg-gradient-to-r from-neon-pink via-neon-cyan to-neon-magenta animate-pulse mb-4">
              Planes de patrocinio diseñados para cada necesidad
            </h2>
            <p className="text-lg text-white/60">
              Aprovecha la oportunidad de participar en ambas ediciones:
              Resistencia y Corrientes Capital
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {plans.map((plan) => {
              const IconComponent = plan.icon;
              return (
                <div
                  key={plan.name}
                  className="bg-zinc-900/50 backdrop-blur-sm p-8 rounded-xl border border-white/10 hover:border-neon-cyan/50 transition-all duration-300 group hover:-translate-y-2 hover:shadow-xl hover:shadow-neon-cyan/20"
                >
                  <div
                    className={`relative mb-6 w-12 h-12 rounded-full bg-${plan.color}/10 flex items-center justify-center group-hover:bg-${plan.color}/20 transition-colors duration-500`}
                  >
                    <IconComponent
                      className={`w-6 h-6 text-${plan.color} group-hover:scale-110 transition-transform duration-500`}
                    />
                  </div>

                  <div className="mb-6">
                    <h3 className="text-base uppercase tracking-wider text-white/50 mb-1">
                      Plan {plan.name}
                    </h3>
                    <div className="text-xl md:text-2xl font-bold text-white group-hover:text-neon-cyan transition-colors">
                      {plan.title}
                    </div>
                    <div className="mt-2 text-2xl md:text-3xl font-bold text-white/90">
                      ${plan.price}
                    </div>
                  </div>

                  <ul className="space-y-3">
                    {plan.features.map((feature, index) => {
                      const FeatureIcon = feature.icon;
                      return (
                        <li
                          key={index}
                          className="flex items-start gap-2 text-white/70 group-hover:text-white/90 transition-colors"
                        >
                          <FeatureIcon className="w-5 h-5 text-neon-cyan shrink-0 mt-0.5" />
                          <span className="text-base">{feature.text}</span>
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

      <Separator />

      {/* Contact Section */}
      <section className="my-20 md:my-40 px-4 md:px-8 relative" id="contact">
        <div className="max-w-3xl mx-auto text-center relative z-10">
          <h2 className="text-3xl font-bold mb-8 text-white">
            Transforma tu Inversión en una Experiencia Inolvidable
          </h2>

          <p className="text-white/80 mb-12 text-lg">
            Únete a la revolución de la música electrónica en Resistencia.
            Nuestro equipo está listo para diseñar una estrategia de patrocinio
            que maximice el impacto de tu marca y genere conexiones
            significativas con tu audiencia ideal.
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
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
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
      <footer
        id="footer"
        className="py-8 px-4 md:px-8 border-t border-white/10 bg-slate-900/50 backdrop-blur-sm"
      >
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
            © {new Date().getFullYear()} Diego Nelson. Todos los derechos
            reservados.
          </p>
        </div>
      </footer>
    </main>
  );
}
