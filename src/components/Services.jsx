import { CheckCircle2, Wrench, Ruler, Waves } from 'lucide-react';

const services = [
  {
    icon: <Ruler className="h-6 w-6 text-sky-600" />,
    title: 'Проектирование',
    desc: 'Индивидуальные проекты: бетонные, композитные, каркасные бассейны, SPA‑зоны.'
  },
  {
    icon: <Wrench className="h-6 w-6 text-sky-600" />,
    title: 'Монтаж и оборудование',
    desc: 'Фильтрация, подсветка, накрытия, противоток, подогрев и автоматика.'
  },
  {
    icon: <Waves className="h-6 w-6 text-sky-600" />,
    title: 'Отделка и пусконаладка',
    desc: 'Плитка, пленка ПВХ, мозаика. Пуск, настройка, обучение пользованию.'
  },
];

export default function Services() {
  return (
    <section id="services" className="bg-white py-16 md:py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-10 flex items-end justify-between">
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">Наши услуги</h2>
            <p className="mt-2 text-slate-600">Полный цикл работ — от идеи до обслуживания.</p>
          </div>
          <div className="hidden gap-2 md:flex">
            <div className="inline-flex items-center gap-2 rounded-full border border-sky-200 bg-sky-50 px-3 py-1 text-sm text-sky-700">
              <CheckCircle2 className="h-4 w-4" /> Сертифицированные специалисты
            </div>
          </div>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {services.map((s) => (
            <div key={s.title} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:shadow-lg">
              <div className="mb-4 flex items-center gap-3">
                {s.icon}
                <h3 className="text-xl font-semibold text-slate-900">{s.title}</h3>
              </div>
              <p className="text-slate-600">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
