import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const fallbackProjects = [
  {
    title: 'Чаша из бетона с мозаикой',
    city: 'Санкт‑Петербург',
    image: 'https://images.unsplash.com/photo-1564584217132-2271feaeb3c5?q=80&w=1800&auto=format&fit=crop',
    specs: ['10×4 м', 'Глубина 1.6 м', 'Мозаика', 'Подсветка RGB'],
  },
  {
    title: 'Уличный бассейн с ПВХ‑мембраной',
    city: 'Выборг',
    image: 'https://images.unsplash.com/photo-1681006129278-bbcb1e9bdf2e?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHwlRDAlQTMlRDAlQkIlRDAlQjglRDElODclRDAlQkQlRDElOEIlRDAlQjklMjAlRDAlQjElRDAlQjAlRDElODElRDElODElRDAlQjUlRDAlQjklRDAlQkQlMjAlRDElODElMjAlRDAlOUYlRDAlOTIlRDAlQTUlRTIlODAlOTElRDAlQkMlRDAlQjUlRDAlQkMlRDAlQjElRDElODAlRDAlQjAlRDAlQkQlRDAlQkUlRDAlQjl8ZW58MHwwfHx8MTc2MjQ1NjI5OXww&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80',
    specs: ['8×3 м', 'Мембрана Alkorplan', 'Теплообменник', 'Противоток'],
  },
  {
    title: 'СПА‑зона с гидромассажем',
    city: 'Репино',
    image: 'https://images.unsplash.com/photo-1507103011901-e954d6ec0988?q=80&w=1800&auto=format&fit=crop',
    specs: ['6×3 м', 'Гидромассаж', 'Озонирование', 'Автоматизация pH'],
  },
];

function getApiBase() {
  return import.meta.env.VITE_BACKEND_URL || `${window.location.protocol}//${window.location.hostname}:8000`;
}

export default function Projects() {
  const [projects, setProjects] = useState(fallbackProjects);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const load = async () => {
      try {
        const res = await fetch(`${getApiBase()}/api/projects`);
        if (res.ok) {
          const data = await res.json();
          if (Array.isArray(data) && data.length) {
            // normalize keys
            const normalized = data.map((p) => ({
              title: p.title || 'Проект',
              city: p.city || '',
              image: p.image || '',
              specs: Array.isArray(p.specs) ? p.specs : [],
            }));
            setProjects(normalized);
          }
        }
      } catch (e) {
        // fallback stays
      } finally {
        setLoading(false);
      }
    };
    load();
  }, []);

  return (
    <section id="projects" className="bg-slate-50 py-20">
      <div className="mx-auto max-w-7xl px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl font-bold tracking-tight text-slate-900 md:text-4xl"
        >
          Реализованные проекты
        </motion.h2>
        <p className="mt-3 max-w-2xl text-slate-600">Несколько недавних объектов с краткими характеристиками.</p>

        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {(loading ? Array.from({ length: 3 }) : projects).map((p, idx) => (
            <motion.article
              key={p?.title || idx}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="group overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm"
            >
              <div className="relative aspect-[16/10] overflow-hidden">
                {loading ? (
                  <div className="h-full w-full animate-pulse bg-slate-100" />
                ) : (
                  <img
                    src={p.image}
                    alt={p.title}
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                )}
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/40 via-black/0 to-transparent opacity-0 transition group-hover:opacity-100" />
              </div>
              <div className="p-5">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-semibold text-slate-900">{loading ? 'Загрузка…' : p.title}</h3>
                  {!loading && p.city ? <span className="text-sm text-slate-500">{p.city}</span> : null}
                </div>
                <ul className="mt-3 flex flex-wrap gap-2 text-xs text-slate-700">
                  {loading
                    ? Array.from({ length: 4 }).map((_, i) => (
                        <li key={i} className="h-6 w-20 animate-pulse rounded-full bg-slate-100" />
                      ))
                    : p.specs.map((s) => (
                        <li key={s} className="rounded-full bg-slate-100 px-3 py-1">
                          {s}
                        </li>
                      ))}
                </ul>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
