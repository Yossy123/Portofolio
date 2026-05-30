import React from 'react';

export default function HeroSection() {
  const handleScroll = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-[85vh] w-full flex items-center bg-zen-washi py-20 overflow-hidden">
      
      {/* Decorative vertical Kanji text watermark representing 'Silence & Action' (静と動) */}
      <div className="absolute right-12 top-24 writing-mode-vertical text-[6vw] font-serif text-zen-sumi/[0.06] select-none pointer-events-none tracking-[0.4em] font-light">
        静と動
      </div>

      {/* Decorative clean red circle representing the rising sun (Hinomaru) - highly muted and abstract */}
      <div className="absolute left-[8%] bottom-[15%] w-48 h-48 rounded-full bg-zen-crimson/[0.04] pointer-events-none blur-xl"></div>

      <div className="max-w-7xl mx-auto px-8 sm:px-12 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
        
        {/* Main Content (Spans 8 columns on desktop) */}
        <div className="lg:col-span-9 space-y-8">
          
          {/* Subheading with Crimson accent */}
          <div className="flex items-center gap-3">
            <span className="h-[1px] w-8 bg-zen-crimson/80"></span>
            <span className="font-mono text-xs text-zen-crimson tracking-[0.25em] uppercase font-semibold">
              Fullstack Web Dev & Workflow Automation
            </span>
          </div>

          {/* Large, breathing main heading */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif text-zen-sumi leading-[1.15] font-light tracking-wide">
            Orchestrating clean digital ecosystems <br className="hidden sm:inline" />
            with <span className="italic font-medium text-zen-crimson">precision</span> and <span className="italic font-medium text-zen-sage">silence</span>.
          </h1>

          {/* Dual-language Taglines */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-4 border-t border-zen-border/40">
            {/* English Description */}
            <p className="text-base text-zen-slate font-sans leading-relaxed">
              I build robust React & Laravel web solutions and connect them seamlessly to automated pipelines using n8n. I design quiet systems that reduce friction and do the hard work in the background.
            </p>
            {/* Japanese Description */}
            <div className="space-y-2">
              <p className="text-sm text-zen-sumi/80 font-serif leading-relaxed tracking-wide">
                「複雑さを削ぎ落とし, シンプルな設計を。ReactとLaravelによる洗練されたウェブ開発と, n8nによる自動化フローで業務プロセスを静かに最適化します。」
              </p>
              <p className="text-[10px] font-mono text-zen-slate tracking-widest uppercase">
                // Simplicity. Automation. Integrity.
              </p>
            </div>
          </div>

          {/* Call to Actions */}
          <div className="flex items-center gap-8 pt-8">
            <button 
              onClick={() => handleScroll('projects')}
              className="px-6 py-3 bg-zen-sumi text-zen-washi font-mono text-xs tracking-widest uppercase rounded-sm border border-zen-sumi hover:bg-transparent hover:text-zen-sumi transition-all duration-300 active:scale-[0.98]"
            >
              Explore Works
            </button>
            <button 
              onClick={() => handleScroll('contact')}
              className="px-6 py-3 bg-transparent text-zen-sumi font-mono text-xs tracking-widest uppercase rounded-sm border border-zen-border hover:border-zen-crimson hover:text-zen-crimson transition-all duration-300 active:scale-[0.98]"
            >
              Get in Touch
            </button>
          </div>

        </div>

        {/* Vertical line and subtle Zen graphic (Spans 3 columns on desktop) */}
        <div className="hidden lg:col-span-3 lg:flex flex-col items-center justify-center h-full">
          <div className="h-44 w-[1px] bg-gradient-to-b from-zen-border via-zen-crimson/50 to-transparent"></div>
          <span className="font-serif text-[10px] tracking-[0.5em] text-zen-slate/60 uppercase writing-mode-vertical my-6">
            SCROLL DOWN // スクロール
          </span>
          <div className="w-1.5 h-1.5 rounded-full bg-zen-crimson animate-bounce"></div>
        </div>

      </div>
    </section>
  );
}
