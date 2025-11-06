const projects = [
  {
    title: 'Бассейн у загородного дома',
    image: 'https://images.unsplash.com/photo-1496318447583-f524534e9ce1?q=80&w=1600&auto=format&fit=crop',
    spec: '6×3 м, подогрев, подсветка RGB'
  },
  {
    title: 'Компактный семейный бассейн',
    image: 'https://images.unsplash.com/photo-1534854638093-bada1813ca19?q=80&w=1600&auto=format&fit=crop',
    spec: '5×2,5 м, противоток, накрытие'
  },
  {
    title: 'SPA‑зона с гидромассажем',
    image: 'https://images.unsplash.com/photo-1542662565-7e4b66bae529?q=80&w=1600&auto=format&fit=crop',
    spec: '3×2 м, гидромассаж, мозаика'
  },
];

export default function Projects() {
  return (
    <section id="projects" className="bg-sky-50/50 py-16 md:py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-10">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">Реализованные проекты</h2>
          <p className="mt-2 text-slate-600">Вдохновляйтесь готовыми решениями.</p>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {projects.map((p) => (
            <figure key={p.title} className="group overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
              <div className="aspect-[4/3] overflow-hidden">
                <img src={p.image} alt={p.title} className="h-full w-full object-cover transition duration-500 group-hover:scale-105" loading="lazy" />
              </div>
              <figcaption className="p-5">
                <h3 className="text-lg font-semibold text-slate-900">{p.title}</h3>
                <p className="mt-1 text-slate-600">{p.spec}</p>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
