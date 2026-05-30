import React, { useState } from 'react';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (form.name && form.email && form.message) {
      setSent(true);
      setTimeout(() => {
        setSent(false);
        setForm({ name: '', email: '', message: '' });
      }, 3000);
    }
  };

  return (
    <section id="contact" className="relative py-28 md:py-36 w-full bg-zen-surface border-t border-zen-border overflow-hidden">

      {/* Background Watermark: Kanji for 'Encounter' (会 - Kai / Meet) */}
      <div className="absolute left-[8%] bottom-10 text-[15vw] font-serif text-zen-sumi/[0.03] select-none pointer-events-none tracking-widest font-light">
        一期一会
      </div>

      <div className="max-w-7xl mx-auto px-8 sm:px-12 relative z-10">

        {/* Section Header */}
        <div className="mb-20 pb-8 border-b border-zen-border flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <span className="h-[1px] w-8 bg-zen-crimson/80"></span>
              <span className="font-mono text-xs text-zen-crimson tracking-[0.25em] uppercase font-semibold">
                04. Contact // お問い合わせ
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-serif text-zen-sumi tracking-wide font-normal">
              Get In Touch
            </h2>
          </div>
          <p className="font-mono text-[11px] text-zen-slate tracking-widest uppercase">
            Let's build with silence
          </p>
        </div>

        {/* 2-Column Split: Form & Details */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start">

          {/* LEFT: Brief and Social Details (5 Columns) */}
          <div className="lg:col-span-5 space-y-8">
            <div className="space-y-4">
              <h3 className="text-2xl font-serif text-zen-sumi font-normal">Let's build something quiet and powerful together.</h3>
              <p className="text-sm text-zen-slate leading-relaxed font-sans">
                Apakah Anda ingin mengintegrasikan alur kerja otomatis n8n ke sistem Anda, atau membutuhkan pengembang web fullstack untuk membangun produk digital berkinerja tinggi? Mari terhubung dan diskusikan ide Anda.
              </p>
            </div>

            <div className="space-y-4 pt-6 border-t border-zen-border/40 font-mono text-xs text-zen-sumi">
              <div>
                <span className="text-zen-slate block mb-1">EMAIL:</span>
                <a href="mailto:yossy@example.com" className="hover:text-zen-crimson transition-colors duration-300">
                  yossykusuma01@gmail.com
                </a>
              </div>
              <div>
                <span className="text-zen-slate block mb-1">GITHUB:</span>
                <a href="https://github.com/Yossy123" target="_blank" rel="noreferrer" className="hover:text-zen-crimson transition-colors duration-300">
                  github.com/Yossy123
                </a>
              </div>
              <div>
                <span className="text-zen-slate block mb-1">LINKEDIN:</span>
                <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="hover:text-zen-crimson transition-colors duration-300">
                  linkedin.com/in/Yossy Indra Kusuma
                </a>
              </div>
            </div>
          </div>

          {/* RIGHT: Minimalist Ink Form (7 Columns) */}
          <div className="lg:col-span-7 bg-zen-card border border-zen-border rounded-sm p-8 sm:p-10 relative">
            {/* Soft decorative grid corner line */}
            <span className="absolute top-0 right-0 w-3 h-3 border-t border-r border-zen-crimson/40"></span>

            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="space-y-1">
                <label className="font-mono text-[10px] text-zen-slate tracking-widest uppercase">Name</label>
                <input
                  type="text"
                  required
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  placeholder="Yuki Tanaka"
                  className="w-full bg-transparent border-b border-zen-border py-2 text-sm text-zen-sumi focus:border-zen-crimson transition-colors duration-300 outline-none placeholder:text-zen-slate/40"
                />
              </div>

              <div className="space-y-1">
                <label className="font-mono text-[10px] text-zen-slate tracking-widest uppercase">Email Address</label>
                <input
                  type="email"
                  required
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  placeholder="yuki@example.com"
                  className="w-full bg-transparent border-b border-zen-border py-2 text-sm text-zen-sumi focus:border-zen-crimson transition-colors duration-300 outline-none placeholder:text-zen-slate/40"
                />
              </div>

              <div className="space-y-1">
                <label className="font-mono text-[10px] text-zen-slate tracking-widest uppercase">Message</label>
                <textarea
                  rows="4"
                  required
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  placeholder="Tell me about your orchestrations or fullstack needs..."
                  className="w-full bg-transparent border-b border-zen-border py-2 text-sm text-zen-sumi focus:border-zen-crimson transition-colors duration-300 outline-none resize-none placeholder:text-zen-slate/40"
                />
              </div>

              <button
                type="submit"
                className="w-full py-4 bg-zen-sumi text-zen-washi font-mono text-xs tracking-widest uppercase rounded-sm border border-zen-sumi hover:bg-transparent hover:text-zen-sumi transition-all duration-300 active:scale-[0.98]"
              >
                {sent ? 'Message Sent successfully // 送信完了' : 'Send Message // 送信する'}
              </button>
            </form>
          </div>

        </div>

        {/* Traditional Japanese philosophy quote at the very bottom */}
        <div className="mt-28 pt-12 border-t border-zen-border/40 text-center max-w-xl mx-auto space-y-4">
          <h4 className="text-3xl font-serif text-zen-sumi font-light tracking-[0.3em]">
            一期一会
          </h4>
          <p className="text-xs text-zen-slate italic leading-relaxed font-serif">
            "Ichigo Ichie — Setiap pertemuan adalah sekali seumur hidup. Mari kita hargai setiap kolaborasi dan membangun sistem yang membawa ketenangan."
          </p>
        </div>

      </div>
    </section>
  );
}
