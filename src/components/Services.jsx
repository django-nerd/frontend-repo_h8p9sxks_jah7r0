import React, { useEffect, useState } from 'react';
import { Ruler, Layers, Droplets, Wrench } from 'lucide-react';
import { motion } from 'framer-motion';

const backendBase =
  import.meta.env.VITE_BACKEND_URL ||
  `${window.location.protocol}//${window.location.hostname}:8000`;

const staticServices = [
  {
    title: 'Проектирование',
    description: 'Инженерные расчёты, подбор оборудования и 3D-визуализация будущего бассейна.',
    icon: Ruler,
  },
  {
    title: 'Монтаж и отделка',
    description: 'Строительство чаши, гидроизоляция, облицовка и пусконаладка под ключ.',
    icon: Layers,
  },
  {
    title: 'Оборудование и вода',
    description: 'Фильтрация, подогрев, автоматизация, аттракционы и интеллектуальное управление.',
    icon: Droplets,
  },
  {
    title: 'Сервис и уход',
    description: 'Регламентное обслуживание, сезонная консервация и оперативные выезды.',
    icon: Wrench,
  },
];

export default function Services() {
  const [services, setServices] = useState(staticServices);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    async function fetchServices() {
      try {
        const res = await fetch(`${backendBase}/api/services`);
        if (!res.ok) throw new Error('Failed to fetch services');
        const data = await res.json();
        if (Array.isArray(data) && data.length > 0) {
          setServices(
            data.map((s) => ({
              title: s.title || 'Услуга',
              description: s.description || 'Описание будет добавлено.',
              icon: Droplets,
            }))
          );
        }
      } catch (e) {
        // fallback remains static
      } finally {
        setLoaded(true);
      }
    }
    fetchServices();
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
        <h2 className="text-3xl md:text-4xl font-bold">Услуги</h2>
        <p className="mt-3 text-white/70">Всё для идеального бассейна — от идеи до сервиса.</p>
      </motion.div>

      <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {services.map((s, i) => {
          const Icon = s.icon || Droplets;
          return (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="group rounded-2xl border border-white/10 bg-white/5 p-5 hover:bg-white/10 transition"
            >
              <div className="flex items-center gap-3">
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-cyan-500/20 text-cyan-300">
                  <Icon className="h-5 w-5" />
                </span>
                <h3 className="font-semibold">{s.title}</h3>
              </div>
              <p className="mt-3 text-sm text-white/70 leading-relaxed">{s.description}</p>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
