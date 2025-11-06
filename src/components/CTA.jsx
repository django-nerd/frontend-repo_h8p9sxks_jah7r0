import { motion } from 'framer-motion';
import { PhoneCall } from 'lucide-react';

export default function CTA() {
  return (
    <section className="relative py-20">
      <div className="absolute inset-0 -z-0 bg-gradient-to-r from-sky-50 via-cyan-50 to-teal-50" />
      <div className="mx-auto max-w-7xl px-6">
        <div className="relative overflow-hidden rounded-3xl border border-sky-100 bg-white p-8 md:p-12">
          <div className="pointer-events-none absolute -left-20 -top-20 h-64 w-64 rounded-full bg-sky-100 blur-2xl" />
          <div className="pointer-events-none absolute -bottom-24 -right-10 h-72 w-72 rounded-full bg-cyan-100 blur-2xl" />

          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl font-bold tracking-tight text-slate-900 md:text-4xl"
          >
            Готовы обсудить ваш бассейн?
          </motion.h2>
          <p className="mt-3 max-w-2xl text-slate-600">
            Мы рассчитаем стоимость, предложим оптимальную комплектацию и срок реализации.
          </p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-8"
          >
            <a
              href="tel:+78120000000"
              className="inline-flex items-center gap-2 rounded-xl bg-sky-600 px-6 py-3 text-white shadow-lg shadow-sky-600/20 transition hover:bg-sky-700"
            >
              <PhoneCall className="h-5 w-5" />
              Позвонить и получить консультацию
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
