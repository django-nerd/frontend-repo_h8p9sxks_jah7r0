import { PhoneCall } from 'lucide-react';

export default function CTA() {
  const handleClick = () => {
    window.location.href = 'tel:+78120000000';
  };

  return (
    <section className="relative isolate overflow-hidden bg-gradient-to-r from-sky-600 to-cyan-600 py-14">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
          <div>
            <h3 className="text-2xl font-semibold text-white md:text-3xl">Готовы обсудить ваш бассейн?</h3>
            <p className="mt-2 text-sky-100">Позвоните — подскажем по стоимости, срокам и оптимальной конструкции.</p>
          </div>
          <button onClick={handleClick} className="inline-flex items-center gap-2 rounded-lg bg-white px-5 py-3 font-medium text-sky-700 shadow hover:bg-slate-50">
            <PhoneCall className="h-5 w-5" />
            +7 (812) 000-00-00
          </button>
        </div>
      </div>
    </section>
  );
}
