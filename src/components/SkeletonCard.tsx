"use client";

export default function SkeletonCard() {
  return (
    <div className="bg-white border border-zinc-200 rounded-2xl p-5 flex flex-col gap-4 animate-pulse">
      {/* Imagen Placeholder */}
      <div className="w-full h-48 rounded-xl bg-zinc-100" />

      {/* Categoría y Rating */}
      <div className="flex justify-between items-center">
        <div className="h-4 w-20 bg-zinc-100 rounded-full" />
        <div className="h-4 w-12 bg-zinc-100 rounded" />
      </div>

      {/* Título */}
      <div className="h-6 w-3/4 bg-zinc-100 rounded" />

      {/* Descripción corta */}
      <div className="space-y-2">
        <div className="h-3.5 w-full bg-zinc-100 rounded" />
        <div className="h-3.5 w-5/6 bg-zinc-100 rounded" />
      </div>

      {/* Separador */}
      <div className="border-t border-zinc-200/60 my-1" />

      {/* Footer (Precio y Duración) */}
      <div className="flex justify-between items-center mt-auto">
        <div className="flex flex-col gap-1.5">
          <div className="h-3 w-10 bg-zinc-100 rounded" />
          <div className="h-5 w-24 bg-zinc-100 rounded" />
        </div>
        <div className="h-8 w-20 bg-zinc-100 rounded-full" />
      </div>
    </div>
  );
}
