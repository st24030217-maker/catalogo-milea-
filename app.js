// --- BASE DE DATOS LOCAL (MOCK DATA) ---
const SERVICIOS = [
  {
    id: "invitaciones-premium",
    nombre: "Invitaciones Premium de Bodas & XV Años",
    categoria: "Papelería Social",
    descripcionCorta: "Invitaciones artesanales impresas en papeles finos con relieve, lacre y hot stamping.",
    descripcionLarga: "Diseño y producción totalmente personalizada de tus invitaciones sociales. Nos especializamos en técnicas tradicionales de alto impacto: letterpress (bajo relieve), hot stamping metálico (oro, plata, oro rosa), bordes pintados a mano y sellos de lacre personalizados. Empleamos papeles de algodón importados y papeles texturizados de alto gramaje para crear una experiencia sensorial única e inolvidable desde el primer contacto.",
    precioRango: "$4,500 - $15,000 MXN",
    precioBase: 4500,
    duracionEstimada: "4 - 6 semanas",
    icono: "heart",
    tags: ["Bodas", "XV Años", "Hot Stamping", "Papel de Algodón"],
    rating: 5.0,
    disponibilidad: "destacado",
    imagen: "portafolio-mileacards.jpg"
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
    icono: "globe",
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
    icono: "package",
    tags: ["Identidad de Marca", "Cajas & Empaques", "Tarjetas de Agradecimiento", "Tags"],
    rating: 4.9,
    disponibilidad: "destacado",
    imagen: "portafolio-lftech.jpg"
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
    icono: "book-open",
    tags: ["Agendas", "Planners", "Diseño Editorial", "Encuadernación"],
    rating: 4.7,
    disponibilidad: "disponible",
    imagen: "portafolio-agenda.png"
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
    icono: "sparkles",
    tags: ["Menús", "Seating Charts", "Letreros", "Detalles de Mesa"],
    rating: 4.9,
    disponibilidad: "disponible",
    imagen: "portafolio-globo.png"
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
    icono: "gift",
    tags: ["Regalos", "Tarjetas Personales", "Foil Metálico", "Tags Especiales"],
    rating: 4.8,
    disponibilidad: "agotado",
    imagen: "portafolio-souvenirs.jpg"
  }
];

const CATEGORIAS = ["Todos", "Papelería Social", "Invitaciones Digitales", "Branding & Empaque", "Diseño Editorial", "Papelería de Eventos"];

// --- ESTADO DE FILTROS ---
let searchQuery = "";
let selectedCategory = "Todos";
let maxPrice = 5000;
let sortBy = "featured";

document.addEventListener("DOMContentLoaded", () => {
    // Inicializar Lucide Icons
    lucide.createIcons();

    // Actualizar año del footer
    document.getElementById("current-year").textContent = new Date().getFullYear();

    // Elementos del DOM
    const counterElement = document.getElementById("counter-percent");
    const indicatorRing = document.getElementById("progress-indicator");
    const preloader = document.getElementById("preloader");
    
    const searchInput = document.getElementById("search-input");
    const priceSlider = document.getElementById("price-slider");
    const priceVal = document.getElementById("price-val");
    const sortSelect = document.getElementById("sort-select");
    const categoryContainer = document.getElementById("category-chips-row");
    const servicesGrid = document.getElementById("services-grid");
    const emptyState = document.getElementById("empty-state");
    const resetFiltersBtn = document.getElementById("reset-filters-btn");
    
    // Elementos del Modal
    const detailModal = document.getElementById("detail-modal");
    const modalCloseBackdrop = document.getElementById("modal-close-backdrop");
    const modalCloseBtn = document.getElementById("modal-close-btn");
    const btnModalContact = document.getElementById("btn-modal-contact");
    const btnModalWhatsApp = document.getElementById("btn-modal-whatsapp");

    // --- ANILLO SVG CARGA ---
    const ringCircumference = 2 * Math.PI * 110; // r=110
    indicatorRing.style.strokeDasharray = ringCircumference;
    indicatorRing.style.strokeDashoffset = ringCircumference;

    // --- MOUSE PARALLAX FONDO ---
    window.addEventListener("mousemove", (e) => {
        const mouseX = e.clientX / window.innerWidth - 0.5;
        const mouseY = e.clientY / window.innerHeight - 0.5;
        
        document.getElementById("blob-1").style.transform = `translate(${mouseX * 35}px, ${mouseY * 35}px)`;
        document.getElementById("blob-2").style.transform = `translate(${mouseX * 70}px, ${mouseY * 70}px)`;
        document.getElementById("blob-3").style.transform = `translate(${mouseX * 40}px, ${mouseY * 40}px)`;
    });



    // --- CARGA Y DISPARADOR ---
    let progress = 0;
    function simulateLoading() {
        const step = () => {
            if (progress >= 100) {
                if (counterElement) counterElement.textContent = "100%";
                indicatorRing.style.strokeDashoffset = 0;
                setTimeout(revealApp, 450);
                return;
            }
            
            let increment = 1;
            if (progress < 30) increment = Math.random() * 4 + 2;
            else if (progress >= 30 && progress < 70) increment = Math.random() * 1.5 + 0.3;
            else increment = Math.random() * 6 + 3;

            progress = Math.min(progress + increment, 100);
            if (counterElement) counterElement.textContent = `${Math.round(progress).toString().padStart(2, '0')}%`;
            indicatorRing.style.strokeDashoffset = ringCircumference - (progress / 100) * ringCircumference;

            let delay = Math.random() * 60 + 20;
            if (progress > 45 && progress < 65) delay = Math.random() * 120 + 40;

            setTimeout(step, delay);
        };
        step();
    }

    function revealApp() {
        preloader.classList.add("loaded");
        // Iniciar números ascendentes de estadísticas
        setTimeout(animateCounters, 300);
    }

    // --- CONTADORES ASCENDENTES ANIMADOS ---
    function animateCounters() {
        const stats = [
            { id: "stat-projects", target: 120, suffix: "+" },
            { id: "stat-clients", target: 85, suffix: "+" },
            { id: "stat-sat", target: 98, suffix: "%" },
            { id: "stat-allies", target: 30, suffix: "" }
        ];

        stats.forEach((s) => {
            const el = document.getElementById(s.id);
            if (!el) return;
            let current = 0;
            const increment = Math.ceil(s.target / 30); // 30 pasos de animación
            const timer = setInterval(() => {
                current += increment;
                if (current >= s.target) {
                    current = s.target;
                    clearInterval(timer);
                }
                el.textContent = `${current}${s.suffix}`;
            }, 35);
        });
    }

    // --- CARGAR CHIPS DE CATEGORÍAS ---
    function initCategoryChips() {
        categoryContainer.innerHTML = "";
        CATEGORIAS.forEach((cat) => {
            const btn = document.createElement("button");
            btn.className = `chip ${selectedCategory === cat ? "active" : ""}`;
            btn.textContent = cat;
            btn.addEventListener("click", () => {
                selectedCategory = cat;
                // Refrescar chips activos
                document.querySelectorAll(".chip").forEach(c => c.classList.remove("active"));
                btn.classList.add("active");
                triggerFilterLoading();
            });
            categoryContainer.appendChild(btn);
        });
    }

    // --- ESQUELETO DE CARGA (SKELETONS) ---
    function renderSkeletons() {
        servicesGrid.innerHTML = "";
        for (let i = 0; i < 6; i++) {
            const card = document.createElement("div");
            card.className = "skeleton-card sk-pulse";
            card.innerHTML = `
                <div class="sk-img"></div>
                <div class="sk-meta">
                    <div class="sk-cat"></div>
                    <div class="sk-rating"></div>
                </div>
                <div class="sk-title"></div>
                <div class="sk-desc-1"></div>
                <div class="sk-desc-2"></div>
                <div class="card-divider"></div>
                <div class="sk-footer">
                    <div class="sk-price"></div>
                    <div class="sk-dur"></div>
                </div>
            `;
            servicesGrid.appendChild(card);
        }
    }

    // --- RENDERIZAR CARTAS REALES ---
    function renderRealCatalog() {
        servicesGrid.innerHTML = "";
        emptyState.style.display = "none";

        // Filtrado
        const filtered = SERVICIOS.filter((s) => {
            const matchCat = selectedCategory === "Todos" || s.categoria === selectedCategory;
            const matchPrice = s.precioBase <= maxPrice;
            const matchSearch = s.nombre.toLowerCase().includes(searchQuery.toLowerCase()) || 
                                s.descripcionCorta.toLowerCase().includes(searchQuery.toLowerCase()) ||
                                s.tags.some(t => t.toLowerCase().includes(searchQuery.toLowerCase()));
            return matchCat && matchPrice && matchSearch;
        });

        // Ordenamiento
        filtered.sort((a, b) => {
            if (sortBy === "price-asc") return a.precioBase - b.precioBase;
            if (sortBy === "price-desc") return b.precioBase - a.precioBase;
            if (sortBy === "popular") return b.rating - a.rating;
            
            // featured
            const rank = (s) => {
                if (s.disponibilidad === "destacado") return 3;
                if (s.disponibilidad === "nuevo") return 2;
                return 1;
            };
            return rank(b) - rank(a);
        });

        if (filtered.length === 0) {
            emptyState.style.display = "flex";
            return;
        }

        // Renderizado
        filtered.forEach((s) => {
            const card = document.createElement("div");
            card.className = "service-card";
            
            // Badges
            let badgeHtml = "";
            if (s.disponibilidad === "destacado") badgeHtml = `<span class="badge-featured">Destacado</span>`;
            else if (s.disponibilidad === "nuevo") badgeHtml = `<span class="badge-new">Nuevo</span>`;
            else if (s.disponibilidad === "agotado") badgeHtml = `<span class="badge-soldout">Cupo Lleno</span>`;

            // Tags
            const tagsHtml = s.tags.slice(0, 3).map(t => `<span class="card-tag">#${t}</span>`).join("");

            card.innerHTML = `
                <div class="card-img-container">
                    <img src="${s.imagen}" alt="${s.nombre}">
                    <div class="card-gradient-overlay"></div>
                    <div class="card-badges">${badgeHtml}</div>
                    <div class="card-icon-floater">
                        <i data-lucide="${s.icono}"></i>
                    </div>
                </div>
                <div class="card-body">
                    <div class="card-meta">
                        <span class="card-cat">${s.categoria}</span>
                        <span class="card-rating">
                            <i data-lucide="star" class="fill-star"></i>
                            ${s.rating.toFixed(1)}
                        </span>
                    </div>
                    <h3 class="card-title">${s.nombre}</h3>
                    <p class="card-desc">${s.descripcionCorta}</p>
                    <div class="card-tags">${tagsHtml}</div>
                    <div class="card-divider"></div>
                    <div class="card-footer">
                        <div class="card-price-box">
                            <span class="price-label">Rango Estimado</span>
                            <span class="price-val">${s.precioRango.split(" ")[0]}</span>
                        </div>
                        <div class="card-duration">
                            <i data-lucide="clock" class="pink-icon-sm"></i>
                            <span>${s.duracionEstimada}</span>
                        </div>
                    </div>
                </div>
            `;

            card.addEventListener("click", () => openModal(s));
            servicesGrid.appendChild(card);
        });

        // Re-generar iconos Lucide para el HTML recién insertado
        lucide.createIcons();
    }

    // --- TRANSICIÓN DE BÚSQUEDA FLUIDA ---
    function triggerFilterLoading() {
        renderSkeletons();
        setTimeout(renderRealCatalog, 400); // 400ms esqueleto de carga
    }

    // --- DETALLE MODAL LOGIC ---
    function openModal(service) {
        document.getElementById("modal-img").src = service.imagen;
        document.getElementById("modal-img").alt = service.nombre;
        document.getElementById("modal-category").textContent = service.categoria;
        document.getElementById("modal-title").textContent = service.nombre;
        document.getElementById("modal-rating").textContent = `${service.rating.toFixed(1)} / 5.0`;
        document.getElementById("modal-duration").textContent = service.duracionEstimada;
        document.getElementById("modal-price").textContent = service.precioRango;
        document.getElementById("modal-desc-long").textContent = service.descripcionLarga;

        // Tags
        const tagsContainer = document.getElementById("modal-tags-container");
        tagsContainer.innerHTML = service.tags.map(t => `<span class="modal-tag-item">#${t}</span>`).join("");

        // Relacionados
        const relatedGrid = document.getElementById("modal-related-grid");
        const relatedSection = document.getElementById("modal-related-section");
        const related = SERVICIOS.filter(s => s.categoria === service.categoria && s.id !== service.id).slice(0, 2);

        if (related.length > 0) {
            relatedSection.style.display = "block";
            relatedGrid.innerHTML = "";
            related.forEach(rel => {
                const item = document.createElement("div");
                item.className = "related-card";
                item.innerHTML = `
                    <img src="${rel.imagen}" alt="${rel.nombre}" class="related-img">
                    <div class="related-info">
                        <span class="related-title">${rel.nombre}</span>
                        <span class="related-price">${rel.precioRango.split(" ")[0]}</span>
                    </div>
                `;
                item.addEventListener("click", () => {
                    openModal(rel);
                });
                relatedGrid.appendChild(item);
            });
        } else {
            relatedSection.style.display = "none";
        }

        btnModalWhatsApp.onclick = () => {
            const waPhone = "528712208801";
            const waText = encodeURIComponent(`Hola Milea Studio! Me interesa levantar un pedido/cotización para el servicio: ${service.nombre}`);
            window.open(`https://wa.me/${waPhone}?text=${waText}`, "_blank");
        };

        btnModalContact.onclick = () => {
            window.open("https://www.instagram.com/mileadesignstudio", "_blank");
        };

        // Mostrar
        detailModal.style.display = "flex";
        lucide.createIcons();
    }

    function closeModal() {
        detailModal.style.display = "none";
    }

    // Asignación de cierres
    modalCloseBtn.addEventListener("click", closeModal);
    modalCloseBackdrop.addEventListener("click", closeModal);

    // --- ACCIONES DE FILTRO ---
    searchInput.addEventListener("input", (e) => {
        searchQuery = e.target.value;
        triggerFilterLoading();
    });

    priceSlider.addEventListener("input", (e) => {
        maxPrice = parseInt(e.target.value);
        priceVal.textContent = `$${maxPrice.toLocaleString()}`;
        triggerFilterLoading();
    });

    sortSelect.addEventListener("change", (e) => {
        sortBy = e.target.value;
        triggerFilterLoading();
    });

    resetFiltersBtn.addEventListener("click", () => {
        searchQuery = "";
        selectedCategory = "Todos";
        maxPrice = 5000;
        sortBy = "featured";

        searchInput.value = "";
        priceSlider.value = 5000;
        priceVal.textContent = "$5,000 MXN";
        sortSelect.value = "featured";

        // Reset chips
        document.querySelectorAll(".chip").forEach(c => {
            if (c.textContent === "Todos") c.classList.add("active");
            else c.classList.remove("active");
        });

        triggerFilterLoading();
    });

    // Asegurar tema claro permanente
    document.body.classList.remove("dark-theme");
    localStorage.removeItem("theme");

    // --- INICIALIZACIÓN ---
    simulateLoading();
    initCategoryChips();
    renderRealCatalog();
});
