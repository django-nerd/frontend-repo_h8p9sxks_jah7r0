import React, { useEffect, useRef, useState } from 'react';
import Spline from '@splinetool/react-spline';
import { motion } from 'framer-motion';
import { Waves, PhoneCall, ArrowRight } from 'lucide-react';

const backendBase =
  import.meta.env.VITE_BACKEND_URL ||
  `${window.location.protocol}//${window.location.hostname}:8000`;

export default function Hero() {
  const [allow3D, setAllow3D] = useState(false);
  const [loaded3D, setLoaded3D] = useState(false);
  const [forceFallback, setForceFallback] = useState(false);
  const timeoutRef = useRef(null);

  useEffect(() => {
    // Feature detect WebGL and reduced motion. Default to fallback if in doubt.
    let canWebGL = false;
    try {
      const canvas = document.createElement('canvas');
      const gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl');
      canWebGL = !!gl;
    } catch {
      canWebGL = false;
    }

    const prefersReduced =
      typeof window !== 'undefined' &&
      window.matchMedia &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (canWebGL && !prefersReduced) {
      setAllow3D(true);
      // Safety timeout: if the scene doesn't load quickly, switch to fallback to prevent black screen
      timeoutRef.current = window.setTimeout(() => {
        if (!loaded3D) setForceFallback(true);
      }, 3500);
    } else {
      setAllow3D(false);
      setForceFallback(true);
    }

    return () => {
      if (timeoutRef.current) window.clearTimeout(timeoutRef.current);
    };
  }, [loaded3D]);

  const showSpline = allow3D && !forceFallback;

  return (
    <div className="relative min-h-[80vh] md:min-h-[90vh] overflow-hidden bg-gradient-to-b from-slate-900 via-slate-950 to-slate-950">
      {/* 3D background or graceful fallback */}
      <div className="absolute inset-0">
        {showSpline ? (
          <Spline
            scene="https://prod.spline.design/6il3wWc9lV0eA-6v/scene.splinecode"
            style={{ width: '100%', height: '100%' }}
            onLoad={() => {
              setLoaded3D(true);
              if (timeoutRef.current) window.clearTimeout(timeoutRef.current);
            }}
          />
        ) : (
          <div className="h-full w-full bg-[radial-gradient(900px_500px_at_70%_-10%,rgba(34,211,238,0.25),transparent),radial-gradient(700px_400px_at_20%_120%,rgba(56,189,248,0.18),transparent)]" />
        )}
      </div>

      {/* Foreground content */}
      <div className="relative z-10">
        <div className="max-w-7xl mx-auto px-4 pt-24 md:pt-32 pb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl"
          >
            <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-sm text-white/80 ring-1 ring-white/20">
              <Waves className="h-4 w-4 text-cyan-300" />
              Инновационные бассейны под ключ
            </div>
            <h1 className="mt-6 text-4xl md:text-6xl font-bold tracking-tight">
              Создаём бассейны с эффектом вау
            </h1>
            <p className="mt-4 text-lg text-white/70">
              Проектирование, монтаж и обслуживание бассейнов любой сложности.
              Реализуем мечту о воде у вашего дома — современно, безопасно, надёжно.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <a
                href="#projects"
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-cyan-500 px-5 py-3 font-medium text-slate-900 shadow-lg shadow-cyan-500/30 hover:bg-cyan-400 transition"
              >
                Смотреть проекты <ArrowRight className="h-4 w-4" />
              </a>
              <a
                href="tel:+79999999999"
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-white/10 px-5 py-3 font-medium text-white ring-1 ring-white/20 hover:bg-white/15 transition"
              >
                <PhoneCall className="h-4 w-4" /> Заказать звонок
              </a>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Gradient fade so content is readable over 3D */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-slate-950 to-transparent" />
    </div>
  );
}
