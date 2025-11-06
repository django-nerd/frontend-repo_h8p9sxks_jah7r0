import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const backendBase =
  import.meta.env.VITE_BACKEND_URL ||
  `${window.location.protocol}//${window.location.hostname}:8000`;

const fallbackProjects = [
  {
    title: 'Скай-Бассейн на террасе',
    city: 'Москва',
    image:
      'https://images.unsplash.com/photo-1546549039-49c0502c8e4f?q=80&w=1600&auto=format&fit=crop',
    specs: 'Переливной, с подогревом и автоматизацией',
  },
  {
    title: 'Чаша SPA во дворе',
    city: 'Санкт-Петербург',
    image:
      'https://images.unsplash.com/photo-1506126613408-eca07ce68773?q=80&w=1600&auto=format&fit=crop',
    specs: 'Соленая вода, противоток, подсветка RGB',
  },
  {
    title: 'Частный крытый бассейн',
    city: 'Казань',
    image:
      'https://images.unsplash.com/photo-1519710164239-da123dc03ef4?q=80&w=1600&auto=format&fit=crop',
    specs: 'Длина 12м, автоматическое покрывало',
  },
];

export default function Projects() {
  const [projects, setProjects] = useState(fallbackProjects);

  useEffect(() => {
    async function fetchProjects() {
      try {
        const res = await fetch(`${backendBase}/api/projects`);
        if (!res.ok) throw new Error('Failed to fetch projects');
        const data = await res.json();
        if (Array.isArray(data) && data.length > 0) {
          setProjects(
            data.map((p) => ({
              title: p.title || 'Проект',
              city: p.city || '',
              image: p.image || fallbackProjects[0].image,
              specs: p.specs || '',
              source_url: p.source_url,
            }))
          );
        }
      } catch (e) {
        // keep fallback
      }
    }
    fetchProjects();
  }, []);

  return (
    <div className="max-w-7xl mx-auto px-4">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6 }}
        className="text-center"
      >
        <h2 className="text-3xl md:text-4xl font-bold">Реализованные проекты</h2>
        <p className="mt-3 text-white/70">Подборка наших любимых работ.</p>
      </motion.div>

      <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((p, i) => (
          <motion.a
            key={i}
            href={p.source_url || '#'}
            target={p.source_url ? '_blank' : undefined}
            rel={p.source_url ? 'noopener noreferrer' : undefined}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.4, delay: i * 0.05 }}
            className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5"
          >
            <div className="aspect-[16/10] w-full overflow-hidden">
              <img
                src={p.image}
                alt={p.title}
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                loading="lazy"
              />
            </div>
            <div className="p-5">
              <div className="flex items-center justify-between gap-2">
                <h3 className="font-semibold leading-tight">{p.title}</h3>
                {p.city && <span className="text-xs text-white/60">{p.city}</span>}
              </div>
              {p.specs && (
                <p className="mt-2 text-sm text-white/70 line-clamp-2">{p.specs}</p>
              )}
            </div>
          </motion.a>
        ))}
      </div>
    </div>
  );
}
