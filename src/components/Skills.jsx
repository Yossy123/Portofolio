import React from 'react';

export default function Skills() {
  const webSkills = [
    { name: "React.js", desc: "Front-end modern dengan arsitektur modular dan performa tinggi." },
    { name: "Tailwind CSS", desc: "Desain antarmuka responsif dengan utilitas kelas yang bersih dan estetis." },
    { name: "Laravel", desc: "Backend tangguh berbasis MVC dengan keamanan tinggi dan API bersih." },
    { name: "Node.js", desc: "Runtime JavaScript berkinerja tinggi untuk layanan mikro dan skrip server." },
    { name: "MariaDB / MySQL", desc: "Basis data relasional open-source dengan performa tinggi dan query teroptimasi." }
  ];

  const automationSkills = [
    { name: "n8n Workflow Orchestration", desc: "Perancangan alur integrasi mandiri untuk otomatisasi proses bisnis secara menyeluruh." },
    { name: "API Integration & Webhooks", desc: "Koneksi data real-time antar layanan menggunakan protokol REST, JSON, dan webhook aktif." },
    { name: "Data Processing Pipelines", desc: "Transformasi, sinkronisasi, dan agregasi data otomatis tanpa hambatan di latar belakang." }
  ];

  return (
    <section id="skills" className="relative py-28 md:py-36 w-full bg-zen-surface border-t border-zen-border overflow-hidden">
      
      {/* Background Watermark: Kanji for 'Expertise' (技術 - Gijutsu) */}
      <div className="absolute left-8 top-12 text-[10vw] font-serif text-zen-sumi/[0.03] select-none pointer-events-none tracking-widest font-light">
        技術力
      </div>

      {/* Subtle aurora glow decoration */}
      <div className="absolute top-0 right-0 w-80 h-80 rounded-full bg-zen-sage/[0.03] blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-10 left-[20%] w-64 h-64 rounded-full bg-zen-crimson/[0.03] blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-8 sm:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="mb-20 pb-8 border-b border-zen-border flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <span className="h-[1px] w-8 bg-zen-sage/80"></span>
              <span className="font-mono text-xs text-zen-sage tracking-[0.25em] uppercase font-semibold">
                02. Capabilities // 技術スタック
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-serif text-zen-sumi tracking-wide font-normal">
              Technical Domain
            </h2>
          </div>
          <p className="font-mono text-[11px] text-zen-slate tracking-widest uppercase">
            React.js + Laravel + n8n automation
          </p>
        </div>

        {/* 2-Column Architectural Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start">
          
          {/* LEFT COLUMN: FULLSTACK WEB DEV (5 Columns) */}
          <div className="lg:col-span-5 space-y-10">
            <div className="space-y-2">
              <span className="font-mono text-[10px] text-zen-crimson tracking-widest uppercase font-semibold block">// RUNTIME & INTERFACES</span>
              <h3 className="text-2xl font-serif text-zen-sumi font-normal">Fullstack Web Developer</h3>
              <p className="text-sm text-zen-slate leading-relaxed font-sans">
                Mengintegrasikan arsitektur front-end yang responsif dengan mesin back-end yang andal, mengutamakan kemudahan navigasi dan kecepatan muat halaman.
              </p>
            </div>

            <div className="space-y-6 pt-4 border-t border-zen-border/40">
              {webSkills.map((skill, idx) => (
                <div key={idx} className="group">
                  <div className="flex items-baseline gap-3 mb-1">
                    <span className="text-[10px] font-mono text-zen-crimson">0{idx + 1}.</span>
                    <h4 className="text-base font-serif text-zen-sumi font-medium group-hover:text-zen-crimson transition-colors duration-300">
                      {skill.name}
                    </h4>
                  </div>
                  <p className="text-xs text-zen-slate leading-relaxed pl-6">
                    {skill.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* MIDDLE VERTICAL GRIDLINE (1 Column on Large Screens) */}
          <div className="hidden lg:col-span-2 lg:flex justify-center items-center h-full min-h-[400px]">
            <div className="w-[1px] h-96 bg-zen-border/60"></div>
          </div>

          {/* RIGHT COLUMN: n8n AUTOMATION (5 Columns) */}
          <div className="lg:col-span-5 space-y-10">
            <div className="space-y-2">
              <span className="font-mono text-[10px] text-zen-sage tracking-widest uppercase font-semibold block">// SYSTEM INTEGRATIONS</span>
              <h3 className="text-2xl font-serif text-zen-sumi font-normal">Automation Engineer</h3>
              <p className="text-sm text-zen-slate leading-relaxed font-sans">
                Menghubungkan API terpisah, merancang alur kerja cerdas menggunakan n8n, dan mereduksi tugas operasional manual secara drastis melalui otomatisasi terpusat.
              </p>
            </div>

            <div className="space-y-6 pt-4 border-t border-zen-border/40">
              {automationSkills.map((skill, idx) => (
                <div key={idx} className="group">
                  <div className="flex items-baseline gap-3 mb-1">
                    <span className="text-[10px] font-mono text-zen-sage">0{idx + 1}.</span>
                    <h4 className="text-base font-serif text-zen-sumi font-medium group-hover:text-zen-sage transition-colors duration-300">
                      {skill.name}
                    </h4>
                  </div>
                  <p className="text-xs text-zen-slate leading-relaxed pl-6">
                    {skill.desc}
                  </p>
                </div>
              ))}
            </div>

            {/* Quiet SVG n8n Workflow Visualization Deck */}
            <div className="bg-zen-washi border border-zen-border rounded-sm p-5 relative mt-8 group/flow">
              <span className="absolute top-2 left-3 font-mono text-[8px] text-zen-slate/50 tracking-wider">
                n8n_WORKFLOW_PIPELINE.json // AUTOMATION MONITOR
              </span>
              
              <div className="w-full h-32 flex justify-center items-center mt-3">
                <svg className="w-full h-full max-w-[280px]" viewBox="0 0 200 100">
                  {/* Grid Lines mockup */}
                  <line x1="10" y1="50" x2="190" y2="50" stroke="#1E3058" strokeWidth="0.5" strokeDasharray="3 3" />
                  <line x1="50" y1="10" x2="50" y2="90" stroke="#1E3058" strokeWidth="0.5" strokeDasharray="3 3" />
                  <line x1="150" y1="10" x2="150" y2="90" stroke="#1E3058" strokeWidth="0.5" strokeDasharray="3 3" />

                  {/* Webhook Node (Trigger) */}
                  <rect x="25" y="38" width="24" height="24" rx="2" fill="#152847" stroke="#C48AB8" strokeWidth="1" />
                  <circle cx="37" cy="50" r="3" fill="#C48AB8" className="animate-pulse" />
                  <text x="37" y="72" fontSize="5" fontFamily="monospace" fill="#8BA3C8" textAnchor="middle">Webhook</text>

                  {/* Connector 1 */}
                  <line x1="49" y1="50" x2="85" y2="50" stroke="#C48AB8" strokeWidth="0.75" strokeDasharray="2 1" />

                  {/* n8n Parser Node (Logic Node) */}
                  <rect x="85" y="38" width="30" height="24" rx="2" fill="#152847" stroke="#E89B3C" strokeWidth="1" />
                  <path d="M 97 45 L 103 50 L 97 55" fill="none" stroke="#E89B3C" strokeWidth="0.75" />
                  <text x="100" y="72" fontSize="5" fontFamily="monospace" fill="#8BA3C8" textAnchor="middle">n8n_Flow</text>

                  {/* Connector 2 */}
                  <line x1="115" y1="50" x2="151" y2="50" stroke="#C48AB8" strokeWidth="0.75" strokeDasharray="2 1" />

                  {/* Database Node (Output Node) */}
                  <rect x="151" y="38" width="24" height="24" rx="2" fill="#152847" stroke="#8BA3C8" strokeWidth="1" />
                  <rect x="157" y="44" width="12" height="4" rx="0.5" fill="#111F3A" stroke="#8BA3C8" strokeWidth="0.5" />
                  <rect x="157" y="50" width="12" height="4" rx="0.5" fill="#111F3A" stroke="#8BA3C8" strokeWidth="0.5" />
                  <text x="163" y="72" fontSize="5" fontFamily="monospace" fill="#8BA3C8" textAnchor="middle">Database</text>
                </svg>
              </div>

              <div className="flex justify-between items-center text-[9px] font-mono text-zen-slate/75 mt-2 border-t border-zen-border/40 pt-3">
                <span className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-zen-sage animate-ping"></span>
                  ORCHESTRATOR STATUS: IDLE
                </span>
                <span>LATENCY: 4ms</span>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
