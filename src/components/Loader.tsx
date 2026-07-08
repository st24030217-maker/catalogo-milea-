"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface LoaderProps {
  onComplete: () => void;
}

export default function Loader({ onComplete }: LoaderProps) {
  const [progress, setProgress] = useState(0);
  const [isExiting, setIsExiting] = useState(false);

  useEffect(() => {
    let current = 0;
    const simulateProgress = () => {
      if (current >= 100) {
        setProgress(100);
        // Pequeña pausa dramática en 100% antes de iniciar la salida
        setTimeout(() => {
          setIsExiting(true);
        }, 500);
        return;
      }

      // Velocidad variable orgánica
      let increment = 1;
      if (current < 30) {
        increment = Math.floor(Math.random() * 5) + 2; // Carga inicial rápida
      } else if (current >= 30 && current < 75) {
        increment = Math.floor(Math.random() * 2) + 0.5; // Simula carga lenta de assets
      } else {
        increment = Math.floor(Math.random() * 8) + 4; // Carga final rápida
      }

      current = Math.min(current + increment, 100);
      setProgress(current);

      // Tiempo de refresco variable para añadir suspenso
      let delay = Math.random() * 70 + 30;
      if (current > 45 && current < 65) {
        delay = Math.random() * 150 + 80;
      }
      
      setTimeout(simulateProgress, delay);
    };

    simulateProgress();
  }, []);

  return (
    <AnimatePresence onExitComplete={onComplete}>
      {!isExiting && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center overflow-hidden bg-[#ffffff]"
          exit={{ opacity: [1, 1] }} // Se mantiene opaco mientras las cortinas se abren
          transition={{ duration: 1.2 }}
        >
          {/* Círculos de Fondo Fluido Difuminado */}
          <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
            {/* Círculos animados pesados solo en desktop */}
            <motion.div
              className="hidden sm:block absolute w-[350px] h-[350px] rounded-full bg-[#fc3584] blur-[120px] opacity-[0.2]"
              animate={{
                x: [0, 80, -40, 0],
                y: [0, 60, 90, 0],
                scale: [1, 1.15, 0.9, 1],
              }}
              transition={{
                duration: 15,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              style={{ top: "-10%", left: "-10%" }}
            />
            <motion.div
              className="hidden sm:block absolute w-[450px] h-[450px] rounded-full bg-[#fc3584] blur-[140px] opacity-[0.18]"
              animate={{
                x: [0, -90, 50, 0],
                y: [0, -70, -100, 0],
                scale: [1, 0.85, 1.1, 1],
              }}
              transition={{
                duration: 20,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              style={{ bottom: "-15%", right: "-10%" }}
            />
            {/* Gradiente radial ultraligero en móviles sin animaciones costosas */}
            <div className="sm:hidden absolute inset-0 bg-[radial-gradient(circle_at_10%_20%,rgba(252,53,132,0.08)_0%,transparent_50%),radial-gradient(circle_at_90%_80%,rgba(252,53,132,0.08)_0%,transparent_50%)]" />
          </div>

          {/* Cortina Izquierda */}
          <motion.div
            className="absolute top-0 left-0 w-1/2 h-full bg-[#ffffff] z-10 border-r border-[#fc3584]/5"
            animate={isExiting ? { x: "-100%" } : { x: 0 }}
            transition={{ duration: 1.2, ease: [0.85, 0, 0.15, 1] }}
          />

          {/* Cortina Derecha */}
          <motion.div
            className="absolute top-0 right-0 w-1/2 h-full bg-[#ffffff] z-10 border-l border-[#fc3584]/5"
            animate={isExiting ? { x: "100%" } : { x: 0 }}
            transition={{ duration: 1.2, ease: [0.85, 0, 0.15, 1] }}
          />

          {/* Contenido Central */}
          <motion.div
            className="relative z-20 flex flex-col items-center justify-center text-center"
            animate={isExiting ? { opacity: 0, scale: 1.1 } : { opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: [0.85, 0, 0.15, 1] }}
          >
            {/* SVG del Anillo y Logotipo */}
            <div className="relative w-[220px] h-[220px] flex items-center justify-center mb-6">
              {/* Anillo de Progreso */}
              <svg className="absolute top-0 left-0 -rotate-90 w-full h-full" viewBox="0 0 220 220">
                <circle
                  className="stroke-[#fc3584]/10"
                  strokeWidth="2"
                  fill="transparent"
                  r="100"
                  cx="110"
                  cy="110"
                />
                <motion.circle
                  className="stroke-[#fc3584]"
                  strokeWidth="3.5"
                  fill="transparent"
                  r="100"
                  cx="110"
                  cy="110"
                  strokeLinecap="round"
                  style={{
                    strokeDasharray: 2 * Math.PI * 100,
                    filter: "drop-shadow(0 0 8px #fc3584)",
                  }}
                  animate={{
                    strokeDashoffset: 2 * Math.PI * 100 * (1 - progress / 100),
                  }}
                  transition={{ ease: "linear" }}
                />
              </svg>

              <motion.img
                src="/logo-milea.png"
                alt="MILEA studio"
                className="relative w-[174px] h-[174px] rounded-full object-cover shadow-[0_0_35px_rgba(252,53,132,0.45)] animate-pulse-slow"
                initial={{ scale: 0.85, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
              />
            </div>

            {/* Bienvenidos a MILEA estudio */}
            <motion.div 
              className="flex flex-col items-center mt-4"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
            >
              <span className="font-serif italic text-2xl text-[#fc3584] tracking-wide drop-shadow-[0_2px_10px_rgba(252,53,132,0.15)]">
                Bienvenidos a MILEA estudio
              </span>
            </motion.div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
