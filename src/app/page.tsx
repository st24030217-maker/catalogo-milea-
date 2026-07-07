"use client";

import { useEffect, useState, useTransition } from "react";
import { motion, AnimatePresence } from "framer-motion";
import * as Icons from "lucide-react";
import Loader from "@/components/Loader";
import ServiceCard from "@/components/ServiceCard";
import ServiceDetailModal from "@/components/ServiceDetailModal";
import SkeletonCard from "@/components/SkeletonCard";
import { SERVICIOS, CATEGORIAS, ESTADISTICAS, Service } from "@/data/services";

function BlurUpImage({ src, alt, className = "", ...props }: { src: string; alt: string; className?: string; [key: string]: any }) {
  const [isLoaded, setIsLoaded] = useState(false);
  
  useEffect(() => {
    setIsLoaded(false);
  }, [src]);

  return (
    <img
      src={src}
      alt={alt}
      onLoad={() => setIsLoaded(true)}
      className={`${className} transition-all duration-700 ${
        isLoaded ? "blur-0 scale-100 opacity-100" : "blur-md scale-[1.04] opacity-35"
      }`}
      {...props}
    />
  );
}

// Componente para contador ascendente animado
function AnimatedCounter({ value, suffix = "", duration = 1.5 }: { value: number; suffix?: string; duration?: number }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const end = value;
    if (start === end) return;

    const totalMiliseconds = duration * 1000;
    const incrementTime = Math.abs(Math.floor(totalMiliseconds / end));
    
    const timer = setInterval(() => {
      start += 1;
      setCount(start);
      if (start === end) clearInterval(timer);
    }, incrementTime || 1);

    return () => clearInterval(timer);
  }, [value, duration]);

  return (
    <span className="font-sans font-black text-2xl sm:text-3xl text-zinc-900 dark:text-zinc-50">
      {count}
      {suffix}
    </span>
  );
}

const InstagramIcon = ({ className }: { className?: string }) => (
  <svg className={className} stroke="currentColor" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
  </svg>
);

const PROYECTOS = [
  {
    titulo: "Logotipo Caligráfico MILEA",
    categoria: "Diseño de Autor",
    acabado: "Caligrafía a Mano",
    descripcion: "Diseño de logotipo gestual creado mediante lettering y caligrafía digitalizada de alta resolución.",
    imagen: "/portafolio-caligrafia.png"
  },
  {
    titulo: "Tarjetas de Presentación MILEA",
    categoria: "Papelería Fina",
    acabado: "Papel Texturizado",
    descripcion: "Tarjetas de contacto oficiales del estudio impresas sobre papel mate fucsia texturizado de alto impacto.",
    imagen: "/portafolio-mileacards.jpg"
  },
  {
    titulo: "Boletos Holográficos Mercafest",
    categoria: "Diseño Gráfico",
    acabado: "Foil Holográfico",
    descripcion: "Diseño de boletos e impresión de seguridad con foil holográfico de estrellas y acabados metálicos láser.",
    imagen: "/portafolio-boletos.png"
  },
  {
    titulo: "Ramo Eterno 'Flores de Listón'",
    categoria: "Papelería Social",
    acabado: "Rosas de Satín",
    descripcion: "Arreglo de rosas eternas satinadas en rosa fucsia hechas a mano con detalles de mariposa calada dorada.",
    imagen: "/portafolio-flores1.jpg"
  },
  {
    titulo: "Agenda Lila 'Carmen'",
    categoria: "Diseño Editorial",
    acabado: "Grabado Personalizado",
    descripcion: "Agenda personalizada en vinipiel lavanda grabada con detalles de mariposas y nombre en tipografía cursiva.",
    imagen: "/portafolio-agenda.png"
  },
  {
    titulo: "Fotos Estilo Polaroid",
    categoria: "Papelería Creativa",
    acabado: "Detalles Creativos",
    descripcion: "Impresión y post-procesado digital de fotografías retro tipo Polaroid cortadas y terminadas a mano.",
    imagen: "/portafolio-fotos.png"
  }
];

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);
  
  // Estados de Filtros
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("Todos");
  const [maxPrice, setMaxPrice] = useState(5000);
  const [sortBy, setSortBy] = useState("featured");
  
  // Estado de Detalle (Modal)
  const [activeService, setActiveService] = useState<Service | null>(null);
  
  // Simulación de carga para filtros (Skeleton loaders)
  const [isPending, startTransition] = useTransition();
  const [isFiltering, setIsFiltering] = useState(false);

  // Asegurar Modo Claro Permanente
  useEffect(() => {
    document.documentElement.classList.add("light");
    document.documentElement.classList.remove("dark");
    localStorage.removeItem("theme");
  }, []);

  // Simular esqueleto de carga al cambiar filtros
  const handleFilterChange = (updater: () => void) => {
    setIsFiltering(true);
    updater();
    setTimeout(() => {
      setIsFiltering(false);
    }, 450); // Tiempo del esqueleto
  };

  // Filtrado y Ordenamiento
  const filteredServices = SERVICIOS.filter((service) => {
    const matchesCategory = selectedCategory === "Todos" || service.categoria === selectedCategory;
    const matchesSearch =
      service.nombre.toLowerCase().includes(searchQuery.toLowerCase()) ||
      service.descripcionCorta.toLowerCase().includes(searchQuery.toLowerCase()) ||
      service.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    const matchesPrice = service.precioBase <= maxPrice;
    
    return matchesCategory && matchesSearch && matchesPrice;
  }).sort((a, b) => {
    if (sortBy === "price-asc") return a.precioBase - b.precioBase;
    if (sortBy === "price-desc") return b.precioBase - a.precioBase;
    if (sortBy === "popular") return b.rating - a.rating;
    
    // Por defecto: destacados primero, luego nuevos, luego resto
    const rank = (s: Service) => {
      if (s.disponibilidad === "destacado") return 3;
      if (s.disponibilidad === "nuevo") return 2;
      return 1;
    };
    return rank(b) - rank(a);
  });

  // Limpiar Filtros
  const handleResetFilters = () => {
    handleFilterChange(() => {
      setSearchQuery("");
      setSelectedCategory("Todos");
      setMaxPrice(5000);
      setSortBy("featured");
    });
  };

  // Obtener sugeridos (misma categoría, excluyendo el actual)
  const getRelatedServices = (service: Service | null) => {
    if (!service) return [];
    return SERVICIOS.filter(
      (s) => s.categoria === service.categoria && s.id !== service.id
    ).slice(0, 2);
  };

  return (
    <>
      <AnimatePresence>
        {isLoading && <Loader onComplete={() => setIsLoading(false)} />}
      </AnimatePresence>

      {!isLoading && (
        <div className="min-h-screen w-full flex flex-col bg-white dark:bg-[#121212] text-zinc-900 dark:text-zinc-100 transition-colors duration-300">
          
          {/* HEADER */}
          <header className="sticky top-0 z-40 bg-white/80 dark:bg-[#121212]/80 backdrop-blur-md border-b border-zinc-200/60 dark:border-zinc-800/60 px-6 sm:px-12 py-4 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <img
                src="/logo-milea.png"
                alt="MILEA logo"
                className="w-8 h-8 rounded-full object-cover shadow-[0_0_12px_rgba(252,53,132,0.4)]"
              />
              <span className="font-sans font-medium text-xs tracking-[0.2em] uppercase text-zinc-900 dark:text-zinc-100">
                MILEA <span className="text-[#fc3584] font-serif lowercase italic">studio</span>
              </span>
            </div>
            
            {/* Nav links */}
            <div className="flex items-center gap-6">
              <nav className="hidden md:block">
                <ul className="flex gap-8 text-[0.72rem] font-bold uppercase tracking-[0.2em] text-zinc-500">
                  <li><a href="#" className="text-zinc-900 border-b border-[#fc3584] pb-1">Catálogo</a></li>
                  <li><a href="#" className="hover:text-zinc-900 transition-colors">Editorial</a></li>
                  <li><a href="#" className="hover:text-zinc-900 transition-colors">Estudio</a></li>
                </ul>
              </nav>
              <a href="https://wa.me/528712208801" target="_blank" rel="noopener noreferrer" className="text-zinc-500 hover:text-[#25d366] transition-all hover:scale-105" title="WhatsApp Pedidos">
                <Icons.MessageCircle className="w-5 h-5" />
              </a>
              <a href="https://www.instagram.com/mileadesignstudio" target="_blank" rel="noopener noreferrer" className="text-zinc-500 hover:text-[#fc3584] transition-all hover:scale-105" title="Instagram">
                <InstagramIcon className="w-5 h-5" />
              </a>
            </div>
          </header>

          {/* CONTENIDO PRINCIPAL */}
          <main className="flex-grow flex flex-col items-center px-6 sm:px-12 py-10 sm:py-16 max-w-6xl w-full mx-auto pb-24">
            
            {/* HERO SECTION ASIMÉTRICO EDITORIAL */}
            <section className="w-full grid grid-cols-1 lg:grid-cols-[1.2fr_0.8fr] gap-12 lg:gap-16 items-center text-center lg:text-left mb-12 sm:mb-16">
              {/* Columna Izquierda: Slogan, Stats */}
              <div className="flex flex-col items-center lg:items-start w-full">
                <motion.img
                  src="/logo-milea.png"
                  alt="MILEA logo"
                  className="w-18 h-18 rounded-full object-cover shadow-[0_4px_15px_rgba(252,53,132,0.35)] mb-4 mx-auto lg:mx-0"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                />
                <motion.span
                  className="text-[0.72rem] font-black uppercase tracking-[0.3em] text-[#fc3584] mb-3 block"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.15 }}
                >
                  Diseño Gráfico & Papelería Fina
                </motion.span>

                <motion.h1
                  className="font-serif text-3xl sm:text-4xl lg:text-[3.2rem] font-normal leading-[1.15] text-zinc-900 dark:text-zinc-100 max-w-3xl mb-8"
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                >
                  Diseño gráfico de identidad y papelería social & creativa con alma <span className="italic text-[#fc3584]">artesanal</span>.
                </motion.h1>

                {/* Estadísticas */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 w-full p-6 bg-zinc-50 dark:bg-zinc-900 border border-zinc-200/80 dark:border-zinc-800/80 rounded-3xl backdrop-blur-sm">
                  {ESTADISTICAS.map((stat, index) => (
                    <div key={index} className="flex flex-col items-center">
                      <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                      <span className="text-[0.62rem] font-bold uppercase tracking-wider text-zinc-500 mt-1 text-center">
                        {stat.label}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Columna Derecha: Collage Flotante */}
              <div className="relative w-full h-[240px] sm:h-[320px] lg:h-[400px] flex items-center justify-center mt-6 lg:mt-0">
                <motion.img
                  src="/portafolio-mileacards.jpg"
                  alt="Tarjetas MILEA Fucsia"
                  className="absolute w-[150px] sm:w-[220px] lg:w-[240px] h-[200px] sm:h-[290px] lg:h-[320px] rounded-3xl object-cover shadow-[0_15px_40px_rgba(0,0,0,0.12)] left-[10%] sm:left-[15%] lg:left-[10%] top-[5%] rotate-[-4deg] hover:z-10 hover:scale-[1.03] hover:rotate-[-2deg] transition-all duration-500 animate-float-1"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                />
                <motion.img
                  src="/portafolio-boletos.png"
                  alt="Boletos Holográficos Mercafest"
                  className="absolute w-[130px] sm:w-[190px] lg:w-[210px] h-[170px] sm:h-[250px] lg:h-[280px] rounded-3xl object-cover shadow-[0_15px_40px_rgba(0,0,0,0.12)] border border-zinc-200/80 dark:border-zinc-800/80 right-[10%] sm:right-[15%] lg:right-[5%] bottom-[5%] rotate-[6deg] hover:z-10 hover:scale-[1.03] hover:rotate-[4deg] transition-all duration-500 animate-float-2"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                />
              </div>
            </section>

            {/* CONTROLES DEL CATÁLOGO (Búsqueda, Filtros y Ordenamiento) */}
            <section className="w-full mb-8 flex flex-col gap-5 p-5 sm:p-6 bg-white border border-zinc-200 rounded-3xl shadow-sm">
              
              {/* Barra superior: Búsqueda y Ordenar */}
              <div className="flex flex-col md:flex-row gap-4 justify-between">
                {/* Búsqueda */}
                <div className="relative flex-grow max-w-md">
                  <Icons.Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-500" />
                  <input
                    type="text"
                    placeholder="Buscar servicios o etiquetas..."
                    value={searchQuery}
                    onChange={(e) => handleFilterChange(() => setSearchQuery(e.target.value))}
                    className="w-full bg-zinc-50 border border-zinc-200 text-zinc-900 text-sm py-2.5 pl-10 pr-4 rounded-xl focus:border-[#fc3584] focus:outline-none transition-colors"
                  />
                </div>

                {/* Filtro de Precio y Ordenamiento */}
                <div className="flex flex-wrap sm:flex-nowrap gap-4 items-center">
                  {/* Slider de Precio */}
                  <div className="flex items-center gap-3 bg-zinc-50 border border-zinc-200 px-4 py-2 rounded-xl flex-grow sm:flex-grow-0">
                    <Icons.SlidersHorizontal className="w-3.5 h-3.5 text-[#fc3584]" />
                    <span className="text-[0.68rem] font-bold text-[#8c868c] uppercase whitespace-nowrap">Precio máx:</span>
                    <input
                      type="range"
                      min="300"
                      max="5000"
                      step="100"
                      value={maxPrice}
                      onChange={(e) => handleFilterChange(() => setMaxPrice(parseInt(e.target.value)))}
                      className="w-24 sm:w-28 accent-[#fc3584] cursor-pointer"
                    />
                    <span className="text-xs font-bold text-zinc-900 min-w-[50px] text-right">
                      ${maxPrice.toLocaleString()} MXN
                    </span>
                  </div>

                  {/* Ordenamiento */}
                  <div className="flex items-center gap-2 bg-zinc-50 border border-zinc-200 px-3 py-2 rounded-xl">
                    <Icons.ArrowUpDown className="w-3.5 h-3.5 text-[#fc3584]" />
                    <select
                      value={sortBy}
                      onChange={(e) => handleFilterChange(() => setSortBy(e.target.value))}
                      className="bg-transparent text-xs font-bold text-zinc-700 focus:outline-none border-none pr-4 cursor-pointer"
                    >
                      <option value="featured">Destacados</option>
                      <option value="price-asc">Precio: Bajo a Alto</option>
                      <option value="price-desc">Precio: Alto a Bajo</option>
                      <option value="popular">Más Popular</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* Chips de Categorías */}
              <div className="flex items-center gap-2.5 overflow-x-auto pb-1.5 scrollbar-thin">
                {CATEGORIAS.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => handleFilterChange(() => setSelectedCategory(cat))}
                    className={`px-4 py-1.5 text-xs font-bold uppercase tracking-wider rounded-full transition-all duration-200 border whitespace-nowrap ${
                      selectedCategory === cat
                        ? "bg-[#fc3584] text-white border-[#fc3584] shadow-[0_0_10px_rgba(252,53,132,0.3)]"
                        : "bg-zinc-50 border-zinc-200 text-zinc-500 hover:text-zinc-900 hover:border-[#fc3584]/50"
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>

            </section>

            {/* GRILLA DE SERVICIOS */}
            <div className="w-full">
              {isFiltering ? (
                // SKELETON LOADERS
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {Array.from({ length: 6 }).map((_, idx) => (
                    <SkeletonCard key={idx} />
                  ))}
                </div>
              ) : filteredServices.length > 0 ? (
                // SERVICIOS FILTRADOS
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {filteredServices.map((service) => (
                    <ServiceCard
                      key={service.id}
                      service={service}
                      onClick={() => setActiveService(service)}
                    />
                  ))}
                </div>
              ) : (
                // ESTADO SIN RESULTADOS
                <motion.div
                  className="w-full p-12 bg-white border border-zinc-200 rounded-3xl text-center flex flex-col items-center gap-4 shadow-sm"
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                >
                  <div className="w-16 h-16 rounded-full bg-[#fc3584]/10 flex items-center justify-center text-[#fc3584]">
                    <Icons.SlidersHorizontal className="w-8 h-8" />
                  </div>
                  <h3 className="font-serif text-xl font-medium text-zinc-900">
                    No encontramos ningún servicio coincidente
                  </h3>
                  <p className="text-sm text-zinc-500 max-w-sm">
                    Intenta ajustar tus términos de búsqueda o restablecer los filtros para volver a ver el portafolio completo de Milea.
                  </p>
                  <button
                    onClick={handleResetFilters}
                    className="mt-2 bg-zinc-100 hover:bg-zinc-200 border border-zinc-200 text-zinc-900 font-bold text-xs uppercase tracking-wider py-2.5 px-6 rounded-full transition-colors"
                  >
                    Restablecer Filtros
                  </button>
                </motion.div>
              )}
            </div>

            {/* SECCIÓN MUESTRA DE TRABAJO */}
            <section className="w-full mt-16 pt-12 border-t border-zinc-200/80">
              <div className="text-center max-w-xl mx-auto mb-10">
                <span className="text-[0.68rem] font-bold text-[#fc3584] uppercase tracking-[0.25em] inline-block mb-2">
                  Portfolio de Autor
                </span>
                <h2 className="font-serif text-3xl font-normal text-zinc-900 mb-3">
                  Muestra de Trabajo
                </h2>
                <p className="text-sm text-zinc-500 leading-relaxed">
                  Una cuidada selección de creaciones físicas y proyectos terminados que exhiben nuestro nivel de detalle, texturas y acabados premium.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {PROYECTOS.map((proj, idx) => (
                  <motion.div
                    key={idx}
                    className="flex flex-col bg-white rounded-3xl overflow-hidden"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.5, delay: idx * 0.1 }}
                  >
                    <div className="relative w-full h-72 sm:h-80 rounded-3xl overflow-hidden bg-zinc-50 border border-zinc-100 group">
                      <BlurUpImage
                        src={proj.imagen}
                        alt={proj.titulo}
                        className="w-full h-full object-cover transition-all duration-700 group-hover:scale-105 group-hover:rotate-[0.5deg]"
                      />
                      <div className="absolute bottom-4 left-4 z-10">
                        <span className="bg-white/90 backdrop-blur-md text-zinc-800 font-sans font-bold text-[0.62rem] uppercase tracking-wider px-3.5 py-1.5 rounded-full border border-black/5">
                          {proj.acabado}
                        </span>
                      </div>
                    </div>
                    <div className="pt-4 px-2">
                      <span className="font-sans font-bold text-[0.65rem] uppercase tracking-wider text-zinc-400 block mb-1">
                        {proj.categoria}
                      </span>
                      <h3 className="font-serif text-xl font-normal text-zinc-950 mb-1.5">
                        {proj.titulo}
                      </h3>
                      <p className="text-xs text-zinc-500 leading-relaxed">
                        {proj.descripcion}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </section>

          </main>

          {/* PIE DE PÁGINA */}
          <footer className="bg-zinc-50 border-t border-zinc-200/60 py-10 px-6 sm:px-12 text-center text-[0.72rem] text-zinc-500 font-bold uppercase tracking-wider mt-auto flex flex-col items-center gap-3">
            <div className="flex gap-6 items-center flex-wrap justify-center">
              <a href="https://wa.me/528712208801" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 hover:text-zinc-900 transition-colors text-xs font-semibold lowercase">
                <Icons.MessageCircle className="w-4 h-4 text-[#25d366]" /> +52 871 220 8801
              </a>
              <a href="https://www.instagram.com/mileadesignstudio" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 hover:text-zinc-900 transition-colors text-xs font-semibold lowercase">
                <InstagramIcon className="w-4 h-4 text-[#fc3584]" /> @mileadesignstudio
              </a>
            </div>
            <p>© {new Date().getFullYear()} MILEA studio. Todos los derechos reservados.</p>
          </footer>

          {/* DETALLE MODAL */}
          <AnimatePresence>
            {activeService && (
              <ServiceDetailModal
                service={activeService}
                onClose={() => setActiveService(null)}
                relatedServices={getRelatedServices(activeService)}
                onSelectService={(relService) => setActiveService(relService)}
              />
            )}
          </AnimatePresence>

        </div>
      )}
    </>
  );
}
