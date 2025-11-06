import { Droplets, Phone, Shield } from 'lucide-react';

export default function Hero() {
  const handleCall = () => {
    window.location.href = 'tel:+78120000000';
  };

  const handleConsult = () => {
    const subject = encodeURIComponent('Консультация по строительству бассейна');
    const body = encodeURIComponent('Здравствуйте! Хочу получить консультацию по бассейну: размер, бюджет и сроки.');
    window.location.href = `mailto:info@kupi-bassein.ru?subject=${subject}&body=${body}`;
  };

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-sky-50 to-white">
      <div className="absolute inset-0 pointer-events-none" aria-hidden>
        <div className="absolute -top-40 -left-40 h-96 w-96 rounded-full bg-sky-200/40 blur-3xl" />
        <div className="absolute -bottom-40 -right-40 h-96 w-96 rounded-full bg-cyan-200/40 blur-3xl" />
      </div>
      <div className="mx-auto max-w-7xl px-6 py-24 md:py-28">
        <div className="flex flex-col items-start gap-8 md:flex-row md:items-center md:justify-between">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-sky-200 bg-white/60 px-3 py-1 text-sm text-sky-700 shadow-sm backdrop-blur">
              <Shield className="h-4 w-4" />
              Гарантия до 5 лет
            </div>
            <h1 className="mt-6 text-4xl font-extrabold leading-tight tracking-tight text-slate-900 md:text-5xl">
              Строительство бассейнов под ключ
            </h1>
            <p className="mt-4 text-lg leading-relaxed text-slate-600 md:text-xl">
              Проектирование, монтаж, отделка и сервис — создаём идеальные бассейны для дома,
              террасы и SPA. Современные технологии, точные сроки и прозрачная смета.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <button onClick={handleConsult} className="group inline-flex items-center gap-2 rounded-lg bg-sky-600 px-5 py-3 text-white shadow hover:bg-sky-700 focus:outline-none focus:ring-2 focus:ring-sky-400">
                <Droplets className="h-5 w-5" />
                Бесплатная консультация
              </button>
              <button onClick={handleCall} className="inline-flex items-center gap-2 rounded-lg border border-slate-200 bg-white px-5 py-3 text-slate-700 shadow-sm hover:bg-slate-50 focus:outline-none focus:ring-2 focus:ring-sky-400">
                <Phone className="h-5 w-5 text-sky-600" />
                +7 (812) 000-00-00
              </button>
            </div>
            <p className="mt-3 text-sm text-slate-500">Работаем по Санкт‑Петербургу и ЛО</p>
          </div>
          <div className="relative mt-10 w-full md:mt-0 md:w-[520px]">
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl shadow-2xl ring-1 ring-black/5">
              <img
                src="https://images.unsplash.com/photo-1567731640489-8d921cdf091e?q=80&w=1600&auto=format&fit=crop"
                alt="Современный бассейн во дворе частного дома"
                className="h-full w-full object-cover"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
