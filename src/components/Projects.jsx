import React from 'react';

export default function Projects() {
  const projects = [
    {
      id: "01",
      name: "HRISync",
      desc: "Solusi digital modern yang dirancang untuk menyederhanakan dan mengintegrasikan seluruh ekosistem manajemen sumber daya manusia (HR). Aplikasi ini mengubah proses administrasi yang manual menjadi otomatis, cepat, dan efisien.",
      tech: [
        { name: "React.js", category: "frontend" },
        { name: "Laravel", category: "backend" },
        { name: "MySQL", category: "database" }
      ],
      link: "https://github.com/Ryandra-TI01/HRIS-frontend"
    },
    {
      id: "02",
      name: "n8n",
      desc: "Automation",
      tech: [
        { name: "n8n Workflows", category: "automation" },
        { name: "Supabase DB", category: "database" },
        { name: "API Webhooks", category: "automation" }
      ],
      link: "https://github.com/Yossy123/n8n-Auto-Posting-Pipeline"
    },

  ];

  const getBadgeStyles = (category) => {
    switch (category) {
      case 'frontend':
        return 'bg-[#2A1F1E] text-[#D4615A]'; // Dark crimson tint
      case 'automation':
        return 'bg-[#1E2A1F] text-[#7FA882]'; // Dark sage tint
      case 'backend':
      case 'database':
        return 'bg-[#1A2230] text-[#6B8FAD]'; // Dark slate-blue tint
      default:
        return 'bg-[#252320] text-[#9B9790]'; // Dark neutral tint
    }
  };

  return (
    <section id="projects" className="relative py-28 md:py-36 w-full bg-zen-washi border-t border-zen-border overflow-hidden">

      {/* Background Watermark: 作品集 (Selected Works) */}
      <div className="absolute right-12 bottom-8 text-[12vw] font-serif text-zen-sumi/[0.04] select-none pointer-events-none tracking-widest font-light">
        作品集
      </div>

      <div className="max-w-7xl mx-auto px-8 sm:px-12 relative z-10">

        {/* Section Header */}
        <div className="mb-20 pb-8 border-b border-zen-border flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <span className="h-[1px] w-8 bg-zen-crimson/80"></span>
              <span className="font-mono text-xs text-zen-crimson tracking-[0.25em] uppercase font-semibold">
                03. Selected Works // 制作実績
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-serif text-zen-sumi tracking-wide font-normal">
              Project Showcase
            </h2>
          </div>
          <p className="font-mono text-[11px] text-zen-slate tracking-widest uppercase">
            Total of {projects.length} Orchestrations
          </p>
        </div>

        {/* Responsive Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 max-w-5xl mx-auto">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-zen-card border border-zen-border rounded-sm p-8 flex flex-col justify-between min-h-[320px] transition-all duration-500 ease-out hover:border-zen-crimson hover:-translate-y-1 hover:shadow-[0_12px_24px_-10px_rgba(212,97,90,0.12)] group"
            >
              <div>
                <span className="block font-serif text-sm text-zen-crimson/65 italic font-light mb-4">
                  {project.id}.
                </span>

                <h3 className="text-xl font-serif text-zen-sumi tracking-wide mb-3 group-hover:text-zen-crimson transition-colors duration-300 font-medium">
                  {project.name}
                </h3>

                <p className="text-sm text-zen-slate font-sans leading-relaxed mb-6 line-clamp-2 group-hover:line-clamp-none transition-all duration-300">
                  {project.desc}
                </p>

                <div className="flex flex-wrap gap-2 mb-8">
                  {project.tech.map((t, idx) => (
                    <span
                      key={idx}
                      className={`px-2.5 py-1 text-[10px] font-mono tracking-wider rounded-sm uppercase font-medium transition-colors duration-300 ${getBadgeStyles(t.category)}`}
                    >
                      {t.name}
                    </span>
                  ))}
                </div>
              </div>

              <div className="border-t border-zen-border pt-5 mt-auto flex items-center justify-between">
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2.5 text-xs font-mono tracking-widest uppercase text-zen-sumi hover:text-zen-crimson transition-colors duration-300 group/btn"
                  aria-label={`View repository of ${project.name} on GitHub`}
                >
                  <svg
                    className="w-4 h-4 fill-current transition-transform duration-300 group-hover/btn:scale-110"
                    viewBox="0 0 16 16"
                  >
                    <path fillRule="evenodd" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z" />
                  </svg>
                  <span>Repository</span>
                  <span className="inline-block transform transition-transform duration-300 ease-out group-hover/btn:translate-x-1">
                    →
                  </span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
