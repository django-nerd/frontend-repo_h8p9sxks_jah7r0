import { motion } from 'framer-motion';
import Spline from '@splinetool/react-spline';
import { Phone, ArrowRight, Waves } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-[88vh] w-full overflow-hidden" aria-label="Главный экран">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/A3aGk3iQ7WNNbDk7/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/80 via-white/60 to-white" />

      <div className="relative z-10 mx-auto flex max-w-7xl flex-col items-start px-6 pb-24 pt-28">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="inline-flex items-center gap-2 rounded-full border border-sky-200 bg-white/70 px-3 py-1 text-sm text-sky-700 backdrop-blur"
        >
          <Waves className="h-4 w-4" />
          Строительство бассейнов под ключ
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.05, duration: 0.9 }}
          className="mt-6 max-w-3xl text-4xl font-extrabold leading-tight tracking-tight text-slate-900 md:text-6xl"
        >
          Современные бассейны для дома, террасы и SPA-зон
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15, duration: 0.9 }}
          className="mt-5 max-w-2xl text-lg text-slate-600 md:text-xl"
        >
          Проектирование, монтаж, отделка и обслуживание. Используем проверенные материалы и оборудование европейских брендов.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.25, duration: 0.9 }}
          className="mt-8 flex flex-wrap items-center gap-3"
        >
          <a
            href="tel:+78120000000"
            className="group inline-flex items-center gap-2 rounded-xl bg-sky-600 px-5 py-3 text-white shadow-lg shadow-sky-600/20 transition hover:bg-sky-700"
          >
            <Phone className="h-5 w-5" />
            Бесплатная консультация
          </a>
          <a
            href="#projects"
            className="inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-5 py-3 text-slate-900 transition hover:border-slate-300"
          >
            Посмотреть проекты
            <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" />
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.35, duration: 0.6 }}
          className="mt-10 grid w-full max-w-3xl grid-cols-2 gap-4 text-sm text-slate-700 md:grid-cols-4"
        >
          {[
            ['15+ лет', 'опыта'],
            ['120+', 'реализованных проектов'],
            ['5 лет', 'гарантии'],
            ['24/7', 'сервис']
          ].map(([a, b]) => (
            <div key={a} className="rounded-xl border border-slate-200 bg-white/80 p-4 backdrop-blur">
              <div className="text-lg font-semibold text-slate-900">{a}</div>
              <div className="text-slate-600">{b}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
