import React, { useState, useEffect, useRef } from 'react';

function useCountUp(target, duration = 2000, startOnView = true) {
  const [count, setCount] = useState(0);
  const [hasStarted, setHasStarted] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    if (!startOnView) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasStarted) {
          setHasStarted(true);
        }
      },
      { threshold: 0.3 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [hasStarted, startOnView]);

  useEffect(() => {
    if (!hasStarted) return;

    let startTime = null;
    const step = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      // Ease-out cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * target));
      if (progress < 1) {
        requestAnimationFrame(step);
      }
    };

    requestAnimationFrame(step);
  }, [hasStarted, target, duration]);

  return { count, ref };
}

export default function Statistics() {
  const stats = [
    {
      value: 1200,
      suffix: '+',
      label: 'Total Visitors',
      sublabel: '総訪問者数',
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
          <circle cx="9" cy="7" r="4" />
          <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
          <path d="M16 3.13a4 4 0 0 1 0 7.75" />
        </svg>
      ),
      color: 'crimson',
    },
    {
      value: 8500,
      suffix: '+',
      label: 'Page Views',
      sublabel: 'ページビュー',
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
          <circle cx="12" cy="12" r="3" />
        </svg>
      ),
      color: 'sage',
    },
    {
      value: 5,
      suffix: '',
      label: 'Projects Completed',
      sublabel: '完了プロジェクト',
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="16 18 22 12 16 6" />
          <polyline points="8 6 2 12 8 18" />
          <line x1="14" y1="4" x2="10" y2="20" />
        </svg>
      ),
      color: 'crimson',
    },
    {
      value: 15000,
      suffix: '+',
      label: 'Lines of Code',
      sublabel: 'コード行数',
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
          <line x1="8" y1="21" x2="16" y2="21" />
          <line x1="12" y1="17" x2="12" y2="21" />
        </svg>
      ),
      color: 'sage',
    },
    {
      value: 10,
      suffix: '+',
      label: 'Automated Workflows',
      sublabel: '自動化ワークフロー',
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
        </svg>
      ),
      color: 'crimson',
    },
    {
      value: 99,
      suffix: '%',
      label: 'Uptime Rate',
      sublabel: '稼働率',
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
          <polyline points="22 4 12 14.01 9 11.01" />
        </svg>
      ),
      color: 'sage',
    },
  ];

  return (
    <section id="statistics" className="relative py-28 md:py-36 w-full bg-zen-surface border-t border-zen-border overflow-hidden">

      {/* Background Watermark */}
      <div className="absolute right-8 top-10 text-[10vw] font-serif text-zen-sumi/[0.03] select-none pointer-events-none tracking-widest font-light">
        統計
      </div>

      {/* Decorative glows */}
      <div className="absolute top-[15%] left-[10%] w-80 h-80 rounded-full bg-zen-crimson/[0.03] blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-[10%] right-[15%] w-72 h-72 rounded-full bg-zen-sage/[0.03] blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-8 sm:px-12 relative z-10">

        {/* Section Header */}
        <div className="mb-20 pb-8 border-b border-zen-border flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <span className="h-[1px] w-8 bg-zen-sage/80"></span>
              <span className="font-mono text-xs text-zen-sage tracking-[0.25em] uppercase font-semibold">
                04. Analytics // 分析データ
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-serif text-zen-sumi tracking-wide font-normal">
              Visitor Statistics
            </h2>
          </div>
          <p className="font-mono text-[11px] text-zen-slate tracking-widest uppercase">
            Real-time analytics overview
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {stats.map((stat, idx) => (
            <StatCard key={idx} stat={stat} index={idx} />
          ))}
        </div>

        {/* Bottom disclaimer */}
        <div className="mt-16 pt-8 border-t border-zen-border/40 text-center">
          <p className="font-mono text-[9px] text-zen-slate/50 tracking-widest uppercase">
            // statistics are illustrative — connect your analytics API for live data
          </p>
        </div>

      </div>
    </section>
  );
}

function StatCard({ stat, index }) {
  const { count, ref } = useCountUp(stat.value, 2000 + index * 200);
  const isCrimson = stat.color === 'crimson';

  const formatNumber = (num) => {
    if (num >= 1000) {
      return num.toLocaleString();
    }
    return num;
  };

  return (
    <div
      ref={ref}
      className={`group relative bg-zen-card border border-zen-border rounded-sm p-7 transition-all duration-500 ease-out hover:-translate-y-1 ${
        isCrimson
          ? 'hover:border-zen-crimson/50 hover:shadow-comet'
          : 'hover:border-zen-sage/50 hover:shadow-aurora'
      }`}
    >
      {/* Corner accent */}
      <span className={`absolute top-0 right-0 w-2.5 h-2.5 border-t border-r transition-colors duration-300 ${
        isCrimson ? 'border-zen-crimson/30 group-hover:border-zen-crimson/60' : 'border-zen-sage/30 group-hover:border-zen-sage/60'
      }`}></span>

      {/* Header: icon + sublabel */}
      <div className="flex items-center justify-between mb-5">
        <div className={`transition-colors duration-300 ${
          isCrimson ? 'text-zen-crimson/60 group-hover:text-zen-crimson' : 'text-zen-sage/60 group-hover:text-zen-sage'
        }`}>
          {stat.icon}
        </div>
        <span className="font-mono text-[9px] text-zen-slate/50 tracking-wider">
          {stat.sublabel}
        </span>
      </div>

      {/* Large number */}
      <div className="mb-2">
        <span className={`text-4xl font-serif font-light tracking-wide transition-colors duration-300 ${
          isCrimson ? 'text-zen-sumi group-hover:text-zen-crimson' : 'text-zen-sumi group-hover:text-zen-sage'
        }`}>
          {formatNumber(count)}
        </span>
        <span className={`text-2xl font-serif font-light ml-0.5 ${
          isCrimson ? 'text-zen-crimson/70' : 'text-zen-sage/70'
        }`}>
          {stat.suffix}
        </span>
      </div>

      {/* Label */}
      <p className="font-mono text-[10px] text-zen-slate tracking-[0.2em] uppercase">
        {stat.label}
      </p>

      {/* Bottom progress-like bar decoration */}
      <div className="mt-5 h-[2px] bg-zen-border/40 rounded-full overflow-hidden">
        <div
          className={`h-full rounded-full transition-all duration-1000 ease-out ${
            isCrimson
              ? 'bg-gradient-to-r from-zen-crimson/80 to-zen-crimson/20'
              : 'bg-gradient-to-r from-zen-sage/80 to-zen-sage/20'
          }`}
          style={{
            width: count > 0 ? '100%' : '0%',
            transitionDelay: `${index * 150}ms`,
          }}
        ></div>
      </div>
    </div>
  );
}
