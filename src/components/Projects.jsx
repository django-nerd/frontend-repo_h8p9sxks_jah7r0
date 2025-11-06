import { motion } from 'framer-motion';

const projects = [
  {
    title: 'Чаша из бетона с мозаикой',
    city: 'Санкт‑Петербург',
    img: 'https://images.unsplash.com/photo-1564584217132-2271feaeb3c5?q=80&w=1800&auto=format&fit=crop',
    specs: ['10×4 м', 'Глубина 1.6 м', 'Мозаика', 'Подсветка RGB'],
  },
  {
    title: 'Уличный бассейн с ПВХ‑мембраной',
    city: 'Выборг',
    img: 'https://images.unsplash.com/photo-1559595500-e15296bdb0d9?q=80&w=1800&auto=format&fit=crop',
    specs: ['8×3 м', 'Мембрана Alkorplan', 'Теплообменник', 'Противоток'],
  },
  {
    title: 'СПА‑зона с гидромассажем',
    city: 'Репино',
    img: 'https://images.unsplash.com/photo-1507103011901-e954d6ec0988?q=80&w=1800&auto=format&fit=crop',
    specs: ['6×3 м', 'Гидромассаж', 'Озонирование', 'Автоматизация pH'],
  },
];

export default function Projects() {
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
        <p className="mt-3 max-w-2xl text-slate-600">
          Несколько недавних объектов с краткими характеристиками.
        </p>

        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((p) => (
            <motion.article
              key={p.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="group overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm"
            >
              <div className="relative aspect-[16/10] overflow-hidden">
                <img
                  src={p.img}
                  alt={p.title}
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/40 via-black/0 to-transparent opacity-0 transition group-hover:opacity-100" />
              </div>
              <div className="p-5">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-semibold text-slate-900">{p.title}</h3>
                  <span className="text-sm text-slate-500">{p.city}</span>
                </div>
                <ul className="mt-3 flex flex-wrap gap-2 text-xs text-slate-700">
                  {p.specs.map((s) => (
                    <li key={s} className="rounded-full bg-slate-100 px-3 py-1">{s}</li>
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
