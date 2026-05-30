import React from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import './App.css';

function App() {
  return (
    <div className="min-h-screen bg-zen-washi text-zen-sumi font-sans selection:bg-zen-crimson/10 selection:text-zen-crimson">

      {/* 1. STICKY ZEN NAVIGATION */}
      <Header />

      {/* 2. HERO GREETING SECTION */}
      <HeroSection />

      {/* 3. CAPABILITIES / SKILLS GRID */}
      <Skills />

      {/* 4. PROJECTS GRID SHOWCASE */}
      <Projects />

      {/* 5. CONTACT FORM & CALLIGRAPHY */}
      <Contact />

      {/* 6. AESTHETIC FOOTER */}
      <footer className="w-full bg-[#FCFAF7] py-12 text-center text-[10px] font-mono text-zen-slate border-t border-zen-border">
        <div className="max-w-7xl mx-auto px-8 sm:px-12 flex flex-col sm:flex-row justify-between items-center gap-4">
          <span className="tracking-widest uppercase">
            © 2026 YOSSY INDRA KUSUMA
          </span>
          <span className="text-zen-crimson tracking-[0.2em] font-medium">
            DESIGNED WITH YOSSY INDRA KUSUMA // ヨッシー・インドラ・クスマ
          </span>
        </div>
      </footer>

    </div>
  );
}

export default App;
