export interface Service {
  id: string;
  nombre: string;
  categoria: string;
  descripcionCorta: string;
  descripcionLarga: string;
  precioRango: string;
  precioBase: number;
  duracionEstimada: string;
  icono: string;
  tags: string[];
  rating: number;
  disponibilidad: "destacado" | "nuevo" | "disponible" | "agotado";
  imagen: string;
}

export const CATEGORIAS = [
  "Todos",
  "Papelería Social",
  "Invitaciones Digitales",
  "Branding & Empaque",
  "Diseño Editorial",
  "Papelería de Eventos"
];

export const SERVICIOS: Service[] = [
  {
    id: "invitaciones-premium",
    nombre: "Invitaciones Premium de Bodas & XV Años",
    categoria: "Papelería Social",
    descripcionCorta: "Invitaciones artesanales impresas en papeles finos con relieve, lacre y hot stamping.",
    descripcionLarga: "Diseño y producción totalmente personalizada de tus invitaciones sociales. Nos especializamos en técnicas tradicionales de alto impacto: letterpress (bajo relieve), hot stamping metálico (oro, plata, oro rosa), bordes pintados a mano y sellos de lacre personalizados. Empleamos papeles de algodón importados y papeles texturizados de alto gramaje para crear una experiencia sensorial única e inolvidable desde el primer contacto.",
    precioRango: "$4,500 - $15,000 MXN",
    precioBase: 4500,
    duracionEstimada: "4 - 6 semanas",
    icono: "Heart",
    tags: ["Bodas", "XV Años", "Hot Stamping", "Papel de Algodón"],
    rating: 5.0,
    disponibilidad: "destacado",
    imagen: "/portafolio-mileacards.jpg"
  },
  {
    id: "invitaciones-digitales",
    nombre: "Invitaciones Digitales Interactivas (Web RSVP)",
    categoria: "Invitaciones Digitales",
    descripcionCorta: "Invitaciones web completas con confirmación de asistencia en tiempo real, mapas y pases.",
    descripcionLarga: "Lleva tu evento al siguiente nivel digital. Desarrollamos invitaciones web interactivas totalmente adaptadas a dispositivos móviles. Incluye contador regresivo, galería de fotos, mapas integrados de Google Maps y Waze, sugerencias de código de vestimenta (dress code), mesa de regalos enlazada, confirmación de asistencia directa a tu WhatsApp o base de datos en tiempo real (RSVP) y pases digitales con código QR para tus invitados.",
    precioRango: "$1,800 - $3,500 MXN",
    precioBase: 1800,
    duracionEstimada: "1 - 2 semanas",
    icono: "Globe",
    tags: ["Digital", "RSVP en Vivo", "Mobile First", "Interactiva"],
    rating: 4.8,
    disponibilidad: "nuevo",
    imagen: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1000&auto=format&fit=crop"
  },
  {
    id: "branding-packaging",
    nombre: "Branding Comercial & Packaging de Autor",
    categoria: "Branding & Empaque",
    descripcionCorta: "Diseño de logotipos, empaques, etiquetas y tarjetería comercial para emprendedores y marcas.",
    descripcionLarga: "Creamos la identidad visual completa de tu proyecto con una estética elegante y minimalista. Diseñamos logotipos principales, alternativos, paletas de colores y tipografías curadas. Además, estructuramos tu sistema de empaques comerciales: cajas para envíos (unboxing), etiquetas autoadhesivas, fajas de papel vegetal, tarjetas de agradecimiento personalizadas y tags colgantes para que tus productos luzcan sumamente premium.",
    precioRango: "$3,200 - $8,500 MXN",
    precioBase: 3200,
    duracionEstimada: "3 - 4 semanas",
    icono: "Package",
    tags: ["Identidad de Marca", "Cajas & Empaques", "Tarjetas de Agradecimiento", "Tags"],
    rating: 4.9,
    disponibilidad: "destacado",
    imagen: "/portafolio-lftech.jpg"
  },
  {
    id: "agendas-planners",
    nombre: "Agendas, Planners & Bitácoras de Autor",
    categoria: "Diseño Editorial",
    descripcionCorta: "Planificadores anuales, libretas y agendas de alta costura personalizadas para marcas o individuos.",
    descripcionLarga: "Diseño editorial de cuadernos, agendas y planners a tu medida. Elige la estructura interior (semanal, diaria, mensual, de metas), portadas duras estampadas con hot stamping, interiores cosidos con apertura de 180°, hojas de alto gramaje que soportan tinta húmeda, separadores de listón satinado y elásticos de cierre coordinados. Ideal como obsequio corporativo premium o para uso diario con estilo.",
    precioRango: "$350 - $850 MXN",
    precioBase: 350,
    duracionEstimada: "2 - 3 semanas",
    icono: "BookOpen",
    tags: ["Agendas", "Planners", "Diseño Editorial", "Encuadernación"],
    rating: 4.7,
    disponibilidad: "disponible",
    imagen: "/portafolio-agenda.png"
  },
  {
    id: "papeleria-eventos",
    nombre: "Papelería Complementaria para el Día del Evento",
    categoria: "Papelería de Eventos",
    descripcionCorta: "Menús impresos, letreros de bienvenida, seating charts y detalles de mesa coordinados.",
    descripcionLarga: "Diseñamos y coordinamos la papelería del día del evento para mantener una estética unificada con tus invitaciones principales. Incluye: menús individuales de mesa impresos sobre papeles finos, tarjetas de asignación de mesa, números de mesa calados, letreros de bienvenida de gran formato, mapas de distribución de mesas (seating charts), misales de ceremonia impresos y etiquetas personalizadas para recuerdos.",
    precioRango: "$2,500 - $7,000 MXN",
    precioBase: 2500,
    duracionEstimada: "2 - 3 semanas",
    icono: "Sparkles",
    tags: ["Menús", "Seating Charts", "Letreros", "Detalles de Mesa"],
    rating: 4.9,
    disponibilidad: "disponible",
    imagen: "/portafolio-globo.png"
  },
  {
    id: "kits-tarjeteria",
    nombre: "Kits de Tarjetas Finas de Regalo & Tags",
    categoria: "Papelería Social",
    descripcionCorta: "Juegos de tarjetas personales para regalos y felicitaciones en caja de presentación.",
    descripcionLarga: "Un set elegante compuesto por tarjetas de regalo personales y familiares. Incluye sobres forrados a tono, tarjetas lisas o plegadas impresas con tu nombre en relieve seco o foil metálico brillante, y mini-tags perforados para atar a obsequios. Vienen empacadas en una caja rígida de conservación a tono con listón de tela. Excelente opción para regalar a seres queridos.",
    precioRango: "$850 - $1,800 MXN",
    precioBase: 850,
    duracionEstimada: "1 - 2 semanas",
    icono: "Gift",
    tags: ["Regalos", "Tarjetas Personales", "Foil Metálico", "Tags Especiales"],
    rating: 4.8,
    disponibilidad: "agotado",
    imagen: "/portafolio-souvenirs.jpg"
  }
];

export const ESTADISTICAS = [
  { value: 120, suffix: "+", label: "Pedidos Entregados" },
  { value: 85, suffix: "+", label: "Proyectos de Autor" },
  { value: 98, suffix: "%", label: "Clientes Felices" },
  { value: 30, suffix: "", label: "Marcas Creadas" }
];
