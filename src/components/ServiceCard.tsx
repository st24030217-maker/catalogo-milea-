"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import * as Icons from "lucide-react";
import { Service } from "@/data/services";

interface ServiceCardProps {
  service: Service;
  onClick: () => void;
}

export default function ServiceCard({ service, onClick }: ServiceCardProps) {
  const [isLoaded, setIsLoaded] = useState(false);
  // Obtener icono dinámicamente de Lucide
  const IconComponent = (Icons as any)[service.icono] || Icons.HelpCircle;

  return (
    <motion.div
      onClick={onClick}
      className="group relative bg-white dark:bg-[#1a1a1a] border border-zinc-200 dark:border-zinc-800/80 rounded-2xl overflow-hidden cursor-pointer flex flex-col h-full shadow-[0_4px_15px_rgba(0,0,0,0.05)] transition-all duration-300 hover:shadow-[0_12px_35px_rgba(252,53,132,0.08)] dark:hover:shadow-[0_12px_35px_rgba(252,53,132,0.18)] hover:border-[#fc3584]/40"
      whileHover={{ y: -6, scale: 1.005 }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
    >
      {/* Imagen de Cabecera */}
      <div className="relative w-full h-48 overflow-hidden bg-zinc-100 dark:bg-zinc-800/50 shimmer-container">
        <img
          src={service.imagen}
          alt={service.nombre}
          onLoad={() => setIsLoaded(true)}
          className={`w-full h-full object-cover transition-all duration-700 group-hover:scale-105 group-hover:rotate-[0.5deg] ${
            isLoaded ? "blur-0 scale-100 opacity-100" : "blur-md scale-[1.04] opacity-30"
          }`}
        />
        
        {/* Capa de overlay degradada blanca/oscura */}
        <div className="absolute inset-0 bg-gradient-to-t from-white dark:from-[#1a1a1a] via-transparent to-transparent opacity-80" />

        {/* Badges de Disponibilidad */}
        <div className="absolute top-4 left-4 flex gap-1.5 z-10">
          {service.disponibilidad === "destacado" && (
            <span className="px-2.5 py-1 text-[0.62rem] font-black uppercase tracking-wider bg-[#fc3584] text-white rounded-full shadow-[0_0_10px_rgba(252,53,132,0.4)]">
              Destacado
            </span>
          )}
          {service.disponibilidad === "nuevo" && (
            <span className="px-2.5 py-1 text-[0.62rem] font-black uppercase tracking-wider bg-[#e69d24] text-white rounded-full shadow-[0_0_10px_rgba(230,157,36,0.3)]">
              Nuevo
            </span>
          )}
          {service.disponibilidad === "agotado" && (
            <span className="px-2.5 py-1 text-[0.62rem] font-black uppercase tracking-wider bg-zinc-100 dark:bg-zinc-800 text-zinc-500 dark:text-zinc-400 border border-zinc-200 dark:border-zinc-700 rounded-full">
              Cupo Completo
            </span>
          )}
        </div>

        {/* Icono Flotante */}
        <div className="absolute -bottom-3 right-5 w-10 h-10 rounded-full bg-[#fc3584] flex items-center justify-center text-white border-2 border-white dark:border-[#1a1a1a] shadow-lg group-hover:scale-110 transition-transform duration-300">
          <IconComponent className="w-5 h-5" strokeWidth={2.2} />
        </div>
      </div>

      {/* Contenido de la Tarjeta */}
      <div className="p-5 pt-6 flex flex-col flex-grow gap-3">
        {/* Categoría y Rating */}
        <div className="flex justify-between items-center text-xs">
          <span className="font-bold tracking-wider uppercase text-[#fc3584]">
            {service.categoria}
          </span>
          <div className="flex items-center gap-1 text-[#e69d24]">
            <Icons.Star className="w-3.5 h-3.5 fill-[#e69d24]" />
            <span className="font-bold">{service.rating.toFixed(1)}</span>
          </div>
        </div>

        {/* Nombre del Servicio */}
        <h3 className="font-sans font-bold text-[1.1rem] leading-tight text-zinc-900 dark:text-zinc-100 group-hover:text-[#fc3584] transition-colors">
          {service.nombre}
        </h3>

        {/* Descripción Corta */}
        <p className="text-[0.82rem] leading-relaxed text-zinc-500 dark:text-zinc-450 line-clamp-2">
          {service.descripcionCorta}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-1 mt-1">
          {service.tags.slice(0, 3).map((tag) => (
            <span
              key={tag}
              className="text-[0.65rem] px-2 py-0.5 rounded bg-zinc-100 dark:bg-zinc-800 text-zinc-500 dark:text-zinc-400 font-semibold"
            >
              #{tag}
            </span>
          ))}
        </div>

        {/* Divisor */}
        <div className="border-t border-zinc-200/60 dark:border-zinc-800/60 my-1.5" />

        {/* Footer (Precio y Duración) */}
        <div className="flex justify-between items-center mt-auto">
          <div className="flex flex-col">
            <span className="text-[0.65rem] uppercase tracking-wider text-zinc-400 dark:text-zinc-500 font-bold">
              Rango Estimado
            </span>
            <span className="font-sans font-extrabold text-[0.98rem] text-zinc-900 dark:text-zinc-100">
              {service.precioRango.split(" ")[0]}
            </span>
          </div>

          <div className="flex items-center gap-1 text-[0.72rem] text-zinc-500 dark:text-zinc-400 bg-zinc-50 dark:bg-zinc-900/50 px-3 py-1.5 rounded-full border border-zinc-200 dark:border-zinc-800">
            <Icons.Clock className="w-3.5 h-3.5 text-[#fc3584]" />
            <span className="font-semibold">{service.duracionEstimada}</span>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
