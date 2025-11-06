import Hero from './components/Hero';
import Services from './components/Services';
import Projects from './components/Projects';
import CTA from './components/CTA';

function App() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <header className="sticky top-0 z-30 w-full border-b border-slate-200 bg-white/70 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <a href="#" className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-lg bg-sky-600" />
            <span className="text-lg font-semibold tracking-tight">kupi‑bassein</span>
          </a>
          <nav className="hidden items-center gap-6 md:flex">
            <a href="#services" className="text-sm text-slate-600 hover:text-slate-900">Услуги</a>
            <a href="#projects" className="text-sm text-slate-600 hover:text-slate-900">Проекты</a>
            <a href="#contacts" className="text-sm text-slate-600 hover:text-slate-900">Контакты</a>
          </nav>
          <a href="tel:+78120000000" className="rounded-lg bg-sky-600 px-3 py-2 text-sm font-medium text-white shadow hover:bg-sky-700">Позвонить</a>
        </div>
      </header>

      <main>
        <Hero />
        <Services />
        <Projects />
        <CTA />
      </main>

      <footer id="contacts" className="border-t border-slate-200 bg-white">
        <div className="mx-auto max-w-7xl px-6 py-10">
          <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
            <div>
              <p className="text-lg font-semibold">kupi‑bassein</p>
              <p className="mt-1 text-slate-600">Строительство бассейнов под ключ в Санкт‑Петербурге и ЛО.</p>
            </div>
            <div className="text-slate-600">
              <p>Телефон: <a className="text-sky-700 hover:underline" href="tel:+78120000000">+7 (812) 000‑00‑00</a></p>
              <p>Email: <a className="text-sky-700 hover:underline" href="mailto:info@kupi-bassein.ru">info@kupi-bassein.ru</a></p>
            </div>
          </div>
          <div className="mt-8 text-sm text-slate-500">© {new Date().getFullYear()} kupi‑bassein. Все права защищены.</div>
        </div>
      </footer>
    </div>
  );
}

export default App;
