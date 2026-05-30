import React from 'react';

export default function Header() {
  const handleScroll = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="sticky top-0 z-40 w-full bg-zen-washi/80 backdrop-blur-md border-b border-zen-border/40 py-6 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-8 sm:px-12 flex justify-between items-center">
        {/* Brand Logo in Serif */}
        <button 
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="text-2xl font-serif font-semibold text-zen-sumi tracking-wider hover:text-zen-crimson transition-colors duration-300"
        >
          Y.
        </button>

        {/* Elegant navigation links */}
        <nav className="flex items-center gap-8 sm:gap-12">
          <button 
            onClick={() => handleScroll('skills')} 
            className="font-mono text-[11px] text-zen-slate tracking-[0.25em] uppercase hover:text-zen-crimson transition-colors duration-300 relative group py-1"
          >
            Capabilities
            <span className="absolute bottom-0 left-0 w-full h-[1px] bg-zen-crimson origin-right scale-x-0 transition-transform duration-300 group-hover:scale-x-100 group-hover:origin-left"></span>
          </button>
          <button 
            onClick={() => handleScroll('projects')} 
            className="font-mono text-[11px] text-zen-slate tracking-[0.25em] uppercase hover:text-zen-crimson transition-colors duration-300 relative group py-1"
          >
            Works
            <span className="absolute bottom-0 left-0 w-full h-[1px] bg-zen-crimson origin-right scale-x-0 transition-transform duration-300 group-hover:scale-x-100 group-hover:origin-left"></span>
          </button>
          <button 
            onClick={() => handleScroll('contact')} 
            className="font-mono text-[11px] text-zen-slate tracking-[0.25em] uppercase hover:text-zen-crimson transition-colors duration-300 relative group py-1"
          >
            Contact
            <span className="absolute bottom-0 left-0 w-full h-[1px] bg-zen-crimson origin-right scale-x-0 transition-transform duration-300 group-hover:scale-x-100 group-hover:origin-left"></span>
          </button>
        </nav>
      </div>
    </header>
  );
}
