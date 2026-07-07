# Catálogo de Servicios de Lujo - MILEA studio

Este proyecto es una interfaz moderna y premium construida con **Next.js 14+ (App Router)**, **Tailwind CSS**, **Framer Motion**, **Lucide React** e **TypeScript**, diseñada para presentar los servicios de curaduría de espacios, diseño de interiores y branding de **MILEA studio**.

---

## 🚀 Cómo Correr el Proyecto Localmente

Para iniciar el servidor de desarrollo en tu computadora, sigue estos sencillos pasos:

1. **Abre una terminal** en el directorio del proyecto:
   `c:\Users\HP\Documents\catalogo milea`

2. **Instala las dependencias** (si no lo has hecho aún):
   ```bash
   npm install
   ```

3. **Inicia el servidor de desarrollo**:
   ```bash
   npm run dev
   ```

4. **Abre tu navegador** e ingresa a:
   `http://localhost:3000`

---

## 🛠️ Estructura del Código

* **`src/app/page.tsx`**: Componente de página principal que centraliza el estado de los filtros de búsqueda, filtros de categorías, precios, ordenamientos, lógica de modo claro/oscuro, estadísticas animadas y el modal de detalles.
* **`src/components/Loader.tsx`**: Pantalla de carga (preloader) desacoplada con animaciones fluidas líquidas y cortinas teatrales de revelado.
* **`src/components/ServiceCard.tsx`**: Tarjetas individuales de servicios con badges y efectos de elevación tridimensional al pasar el cursor.
* **`src/components/ServiceDetailModal.tsx`**: Modal de detalle expandido con descripción detallada, galería de muestra y servicios recomendados relacionados.
* **`src/components/SkeletonCard.tsx`**: Tarjeta de carga "esqueleto" que se dispara con una animación pulsante al buscar o filtrar contenido.
* **`src/data/services.ts`**: Mock data estructurado y tipado en TypeScript conteniendo los servicios, categorías y estadísticas.
