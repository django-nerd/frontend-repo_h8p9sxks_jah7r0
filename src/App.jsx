import React from 'react';
import Hero from './components/Hero.jsx';
import Services from './components/Services.jsx';
import Projects from './components/Projects.jsx';
import CTA from './components/CTA.jsx';

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      {/* Header */}
      <header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-slate-950/60 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          <a href="#home" className="flex items-center gap-3">
            <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-cyan-500/20 text-cyan-300 font-bold">KB</span>
            <span className="text-lg font-semibold tracking-tight">kupi-bassein</span>
          </a>
          <nav className="hidden md:flex items-center gap-6 text-sm text-slate-300">
            <a href="#services" className="hover:text-white transition">Услуги</a>
            <a href="#projects" className="hover:text-white transition">Проекты</a>
            <a href="#contact" className="hover:text-white transition">Контакты</a>
          </nav>
        </div>
      </header>

      {/* Sections */}
      <main>
        <section id="home">
          <Hero />
        </section>
        <section id="services" className="py-20">
          <Services />
        </section>
        <section id="projects" className="py-20">
          <Projects />
        </section>
        <section id="contact" className="py-20">
          <CTA />
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 py-8 text-sm text-slate-400 flex flex-col md:flex-row gap-2 md:gap-0 items-center justify-between">
          <span>© {new Date().getFullYear()} kupi-bassein. Все права защищены.</span>
          <span className="text-slate-500">Сделано с любовью к воде.</span>
        </div>
      </footer>
    </div>
  );
}

export default App;
