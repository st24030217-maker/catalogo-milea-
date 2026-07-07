"use client";

import { motion } from "framer-motion";
import * as Icons from "lucide-react";
import { Service } from "@/data/services";

interface ServiceDetailModalProps {
  service: Service | null;
  onClose: () => void;
  relatedServices: Service[];
  onSelectService: (service: Service) => void;
}

export default function ServiceDetailModal({
  service,
  onClose,
  relatedServices,
  onSelectService
}: ServiceDetailModalProps) {
  if (!service) return null;

  const IconComponent = (Icons as any)[service.icono] || Icons.HelpCircle;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 overflow-y-auto">
      {/* Backdrop */}
      <motion.div
        className="fixed inset-0 bg-black/70 backdrop-blur-md"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
      />

      {/* Modal Card */}
      <motion.div
        className="relative bg-white border border-zinc-200 w-full max-w-3xl rounded-3xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.15)] z-10 max-h-[90vh] flex flex-col"
        initial={{ scale: 0.93, opacity: 0, y: 15 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        exit={{ scale: 0.93, opacity: 0, y: 15 }}
        transition={{ type: "spring", damping: 25, stiffness: 220 }}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 w-8 h-8 rounded-full bg-black/50 backdrop-blur-sm border border-white/10 flex items-center justify-center text-white/80 hover:text-white hover:bg-black/80 transition-colors"
        >
          <Icons.X className="w-4 h-4" />
        </button>

        <div className="overflow-y-auto flex-grow">
          {/* Hero Image Section */}
          <div className="relative w-full h-64 sm:h-80 bg-zinc-100">
            <img
              src={service.imagen}
              alt={service.nombre}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-black/30" />
            
            {/* Categoría Flotante */}
            <div className="absolute bottom-6 left-6 flex flex-col gap-1.5">
              <span className="text-[0.68rem] font-black uppercase tracking-[0.2em] text-[#fc3584] bg-[#fc3584]/10 border border-[#fc3584]/30 px-3 py-1 rounded-full self-start backdrop-blur-sm">
                {service.categoria}
              </span>
              <h2 className="font-sans font-black text-2xl sm:text-3xl text-white mt-1 leading-tight drop-shadow-md">
                {service.nombre}
              </h2>
            </div>
          </div>

          {/* Content Info */}
          <div className="p-6 sm:p-8 flex flex-col gap-6">
            
            {/* Quick Metadata Row */}
            <div className="grid grid-cols-3 gap-4 border-b border-zinc-200 pb-6">
              <div className="flex flex-col">
                <span className="text-[0.65rem] font-bold uppercase tracking-wider text-zinc-400">
                  Calificación
                </span>
                <div className="flex items-center gap-1 text-[#e69d24] mt-1">
                  <Icons.Star className="w-4 h-4 fill-[#e69d24]" />
                  <span className="font-sans font-extrabold text-sm sm:text-base text-zinc-950">
                    {service.rating.toFixed(1)} / 5.0
                  </span>
                </div>
              </div>

              <div className="flex flex-col">
                <span className="text-[0.65rem] font-bold uppercase tracking-wider text-zinc-400">
                  Duración
                </span>
                <div className="flex items-center gap-1.5 text-zinc-800 mt-1">
                  <Icons.Clock className="w-4 h-4 text-[#fc3584]" />
                  <span className="font-sans font-bold text-sm sm:text-base text-zinc-950">
                    {service.duracionEstimada}
                  </span>
                </div>
              </div>

              <div className="flex flex-col">
                <span className="text-[0.65rem] font-bold uppercase tracking-wider text-zinc-400">
                  Precio Estimado
                </span>
                <div className="flex items-center gap-1 text-zinc-800 mt-1">
                  <span className="font-sans font-black text-sm sm:text-base text-[#e69d24]">
                    {service.precioRango}
                  </span>
                </div>
              </div>
            </div>

            {/* Descripción Larga */}
            <div className="space-y-4">
              <h4 className="text-xs font-black uppercase tracking-[0.2em] text-zinc-900">
                Acerca de este servicio
              </h4>
              <p className="text-sm leading-relaxed text-zinc-500 text-justify">
                {service.descripcionLarga}
              </p>
            </div>

            {/* Etiquetas (Tags) */}
            <div className="flex flex-wrap gap-1.5">
              {service.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-[0.68rem] px-3 py-1 rounded-full bg-zinc-100 text-zinc-500 border border-zinc-200 font-semibold"
                >
                  #{tag}
                </span>
              ))}
            </div>

            {/* Servicios Relacionados */}
            {relatedServices.length > 0 && (
              <div className="border-t border-zinc-200 pt-6 space-y-3">
                <h4 className="text-xs font-black uppercase tracking-[0.2em] text-zinc-900 mb-2">
                  Servicios sugeridos de {service.categoria}
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {relatedServices.map((rel) => (
                    <div
                      key={rel.id}
                      onClick={() => onSelectService(rel)}
                      className="group flex gap-3 p-3 bg-zinc-50 border border-zinc-200 rounded-xl cursor-pointer hover:border-[#fc3584]/30 hover:bg-zinc-100 transition-all"
                    >
                      <img
                        src={rel.imagen}
                        alt={rel.nombre}
                        className="w-12 h-12 object-cover rounded-lg bg-zinc-200"
                      />
                      <div className="flex flex-col justify-center overflow-hidden">
                        <span className="font-bold text-[0.8rem] text-zinc-900 group-hover:text-[#fc3584] transition-colors truncate">
                          {rel.nombre}
                        </span>
                        <span className="text-[0.68rem] text-zinc-500 font-medium">
                          {rel.precioRango.split(" ")[0]}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Action CTA Button */}
            <div className="border-t border-zinc-200 pt-6 flex flex-col sm:flex-row gap-3 items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#fc3584]/10 border border-[#fc3584]/20 flex items-center justify-center text-[#fc3584]">
                  <IconComponent className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-[0.62rem] font-bold uppercase tracking-wider text-zinc-400">¿Interesado?</div>
                  <div className="text-xs font-semibold text-zinc-500">Consulta y cotización gratuita.</div>
                </div>
              </div>
              
              <div className="flex flex-wrap sm:flex-nowrap gap-2 w-full sm:w-auto">
                <a
                  href={`https://wa.me/528712208801?text=${encodeURIComponent(`Hola Milea Studio! Me interesa levantar un pedido/cotización para el servicio: ${service.nombre}`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto bg-[#25d366] hover:bg-[#25d366]/90 text-white font-sans font-bold text-xs uppercase tracking-wider py-3.5 px-6 rounded-full shadow-[0_10px_20px_rgba(37,211,102,0.15)] flex items-center justify-center gap-2 hover:scale-[1.02] active:scale-[0.98] transition-all"
                >
                  <Icons.MessageCircle className="w-4 h-4" />
                  Levantar Pedido
                </a>
                <a
                  href="https://www.instagram.com/mileadesignstudio"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto bg-zinc-100 hover:bg-zinc-200 border border-zinc-200 text-zinc-800 font-sans font-bold text-xs uppercase tracking-wider py-3.5 px-6 rounded-full flex items-center justify-center gap-2 hover:scale-[1.02] active:scale-[0.98] transition-all"
                >
                  <svg className="w-4 h-4 text-[#fc3584] fill-none stroke-current" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
                  Enviar DM
                </a>
              </div>
            </div>

          </div>
        </div>
      </motion.div>
    </div>
  );
}
