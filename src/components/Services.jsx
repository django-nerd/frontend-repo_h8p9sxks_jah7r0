import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Wrench, Ruler, Layers, Droplets } from 'lucide-react';

const fallback = [
  {
    icon: Ruler,
    title: 'Проектирование',
    description: 'Архитектура, гидравлика, подбор оборудования и отделки под задачи и бюджет.',
  },
  {
    icon: Layers,
    title: 'Монтаж',
    description: 'Строительно-монтажные работы, армирование, гидроизоляция, пусконаладка.',
  },
  {
    icon: Droplets,
    title: 'Отделка и оснащение',
    description: 'Мозаика и ПВХ-мембрана, противотоки, водопады, подсветка, автоматизация.',
  },
  {
    icon: Wrench,
    title: 'Сервис и реконструкция',
    description: 'Регламентное обслуживание, замена оборудования, модернизация чаши.',
  },
];

function getApiBase() {
  return import.meta.env.VITE_BACKEND_URL || `${window.location.protocol}//${window.location.hostname}:8000`;
}

export default function Services() {
  const [items, setItems] = useState(fallback);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const load = async () => {
      try {
        const res = await fetch(`${getApiBase()}/api/services`);
        if (res.ok) {
          const data = await res.json();
          if (Array.isArray(data) && data.length) {
            const mapped = data.map((s, idx) => ({
              icon: fallback[idx % fallback.length].icon,
              title: s.title,
              description: s.description || '',
            }));
            setItems(mapped);
          }
        }
      } catch (e) {
        // ignore, keep fallback
      } finally {
        setLoading(false);
      }
    };
    load();
  }, []);

  return (
    <section id="services" className="relative py-20">
      <div className="mx-auto max-w-7xl px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl font-bold tracking-tight text-slate-900 md:text-4xl"
        >
          Наши услуги
        </motion.h2>
        <p className="mt-3 max-w-2xl text-slate-600">Полный цикл — от идеи и проекта до ввода в эксплуатацию и постоянного обслуживания.</p>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {(loading ? Array.from({ length: 4 }) : items).map((s, i) => (
            <motion.div
              key={s?.title || i}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:shadow-md"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-sky-50 text-sky-600">
                {loading ? (
                  <div className="h-6 w-6 animate-pulse rounded bg-sky-200" />
                ) : (
                  <s.icon className="h-6 w-6" />
                )}
              </div>
              <h3 className="mt-4 text-lg font-semibold text-slate-900">{loading ? 'Загрузка…' : s.title}</h3>
              <p className="mt-2 text-sm text-slate-600">{loading ? ' ' : s.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
