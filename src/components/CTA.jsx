import React from 'react';
import { Phone } from 'lucide-react';
import { motion } from 'framer-motion';

export default function CTA() {
  return (
    <div className="max-w-7xl mx-auto px-4">
      <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-cyan-500/10 via-sky-500/10 to-blue-600/10">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="p-8 md:p-12"
        >
          <h3 className="text-2xl md:text-3xl font-bold">
            Готовы обсудить ваш бассейн?
          </h3>
          <p className="mt-3 text-white/80 max-w-2xl">
            Подберём оптимальное решение под ваш участок, бюджет и сроки. Оставьте заявку
            или позвоните — мы на связи.
          </p>
          <div className="mt-6 flex flex-col sm:flex-row gap-3">
            <a
              href="tel:+79999999999"
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-cyan-500 px-5 py-3 font-medium text-slate-900 shadow-lg shadow-cyan-500/30 hover:bg-cyan-400 transition"
            >
              <Phone className="h-4 w-4" /> Позвонить сейчас
            </a>
            <a
              href="#contact-form"
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-white/10 px-5 py-3 font-medium text-white ring-1 ring-white/20 hover:bg-white/15 transition"
            >
              Оставить заявку
            </a>
          </div>
        </motion.div>
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-slate-950 to-transparent" />
      </div>
    </div>
  );
}
