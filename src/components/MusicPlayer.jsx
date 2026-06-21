import React, { useState, useRef, useEffect } from 'react';

export default function MusicPlayer() {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(0.3);
  const [showVolume, setShowVolume] = useState(false);
  const [showSplash, setShowSplash] = useState(true);
  const [splashFading, setSplashFading] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);

  // Update time progress
  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const updateTime = () => setCurrentTime(audio.currentTime);
    const updateDuration = () => setDuration(audio.duration);

    audio.addEventListener('timeupdate', updateTime);
    audio.addEventListener('loadedmetadata', updateDuration);

    return () => {
      audio.removeEventListener('timeupdate', updateTime);
      audio.removeEventListener('loadedmetadata', updateDuration);
    };
  }, []);

  // Enter site & start music
  const handleEnterSite = () => {
    setSplashFading(true);
    if (audioRef.current) {
      audioRef.current.volume = volume;
      audioRef.current.play()
        .then(() => setIsPlaying(true))
        .catch(() => {});
    }
    setTimeout(() => {
      setShowSplash(false);
    }, 800);
  };

  const togglePlay = () => {
    if (!audioRef.current) return;

    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      audioRef.current.volume = volume;
      audioRef.current.play()
        .then(() => setIsPlaying(true))
        .catch(() => {});
    }
  };

  const handleVolumeChange = (e) => {
    const newVol = parseFloat(e.target.value);
    setVolume(newVol);
    if (audioRef.current) {
      audioRef.current.volume = newVol;
    }
  };

  const formatTime = (time) => {
    if (!time || isNaN(time)) return '0:00';
    const mins = Math.floor(time / 60);
    const secs = Math.floor(time % 60).toString().padStart(2, '0');
    return `${mins}:${secs}`;
  };

  const progress = duration > 0 ? (currentTime / duration) * 100 : 0;

  return (
    <>
      {/* Hidden audio element */}
      <audio
        ref={audioRef}
        src="/reze-arc-ost.mp3"
        loop
        preload="auto"
      />

      {/* ====== SPLASH SCREEN OVERLAY ====== */}
      {showSplash && (
        <div
          className={`fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#070D1E] transition-all duration-700 ${
            splashFading ? 'opacity-0 scale-105' : 'opacity-100 scale-100'
          }`}
        >
          {/* Background stars */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {[...Array(30)].map((_, i) => (
              <div
                key={i}
                className="absolute rounded-full bg-white"
                style={{
                  width: `${Math.random() * 2 + 1}px`,
                  height: `${Math.random() * 2 + 1}px`,
                  top: `${Math.random() * 100}%`,
                  left: `${Math.random() * 100}%`,
                  opacity: Math.random() * 0.6 + 0.1,
                  animation: `twinkle ${Math.random() * 3 + 2}s ease-in-out infinite alternate`,
                  animationDelay: `${Math.random() * 3}s`,
                }}
              />
            ))}
            {/* Comet glow */}
            <div className="absolute top-[20%] right-[20%] w-96 h-96 rounded-full bg-[#D4944A]/[0.08] blur-3xl"></div>
            <div className="absolute bottom-[30%] left-[15%] w-72 h-72 rounded-full bg-[#B87DA0]/[0.05] blur-3xl"></div>
            {/* Twilight gradient at bottom */}
            <div className="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-[#15203A]/30 to-transparent"></div>
          </div>

          {/* Content */}
          <div className="relative z-10 flex flex-col items-center gap-8 text-center px-6">
            {/* Kanji watermark */}
            <p className="text-[clamp(60px,15vw,120px)] font-serif text-white/[0.04] absolute -top-20 select-none pointer-events-none tracking-[0.3em]">
              結び
            </p>

            {/* Main title */}
            <div className="space-y-3">
              <h1 className="text-3xl sm:text-4xl font-serif text-[#E8DDD0] font-light tracking-[0.15em]">
                YOSSY INDRA KUSUMA
              </h1>
              <div className="flex items-center justify-center gap-3">
                <span className="h-[1px] w-8 bg-[#D4944A]/60"></span>
                <span className="font-mono text-[10px] text-[#7B8FB8] tracking-[0.3em] uppercase">
                  ポートフォリオ
                </span>
                <span className="h-[1px] w-8 bg-[#D4944A]/60"></span>
              </div>
            </div>

            {/* Enter button */}
            <button
              onClick={handleEnterSite}
              className="group relative mt-6 px-10 py-4 rounded-full border border-[#D4944A]/40 bg-transparent hover:bg-[#D4944A]/10 hover:border-[#D4944A]/80 transition-all duration-500 active:scale-95"
            >
              {/* Glow behind button */}
              <div className="absolute -inset-1 rounded-full bg-[#D4944A]/10 blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              <div className="relative flex items-center gap-3">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" className="text-[#D4944A]">
                  <path d="M8 5.14v13.72a1 1 0 001.5.86l11.04-6.86a1 1 0 000-1.72L9.5 4.28a1 1 0 00-1.5.86z" fill="currentColor" />
                </svg>
                <span className="font-mono text-xs text-[#E8DDD0] tracking-[0.25em] uppercase">
                  Enter Site
                </span>
              </div>
            </button>

            {/* Music hint */}
            <p className="font-mono text-[9px] text-[#7B8FB8]/60 tracking-[0.2em] uppercase mt-2 animate-pulse">
              ♪ BGM will play automatically
            </p>
          </div>
        </div>
      )}

      {/* ====== FLOATING MUSIC PLAYER (visible after splash) ====== */}
      {!showSplash && (
        <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">

          {/* Volume Slider (appears above when toggled) */}
          <div
            className={`transition-all duration-300 ease-out ${
              showVolume
                ? 'opacity-100 translate-y-0 pointer-events-auto'
                : 'opacity-0 translate-y-2 pointer-events-none'
            }`}
          >
            <div className="bg-zen-card/90 backdrop-blur-xl border border-zen-border rounded-lg px-3 py-3 shadow-lg">
              <input
                type="range"
                min="0"
                max="1"
                step="0.01"
                value={volume}
                onChange={handleVolumeChange}
                className="w-24 h-1 appearance-none bg-zen-border rounded-full outline-none cursor-pointer accent-zen-crimson
                  [&::-webkit-slider-thumb]:appearance-none
                  [&::-webkit-slider-thumb]:w-3
                  [&::-webkit-slider-thumb]:h-3
                  [&::-webkit-slider-thumb]:rounded-full
                  [&::-webkit-slider-thumb]:bg-zen-crimson
                  [&::-webkit-slider-thumb]:shadow-[0_0_8px_rgba(212,148,74,0.5)]
                  [&::-webkit-slider-thumb]:cursor-pointer
                  [&::-webkit-slider-thumb]:transition-all
                  [&::-webkit-slider-thumb]:duration-200
                  [&::-webkit-slider-thumb]:hover:scale-125"
              />
              <div className="text-[8px] font-mono text-zen-slate text-center mt-1">
                {Math.round(volume * 100)}%
              </div>
            </div>
          </div>

          {/* Main Player Button */}
          <div className="relative group">
            {/* Outer glow ring when playing */}
            {isPlaying && (
              <div className="absolute -inset-1.5 rounded-full bg-zen-crimson/20 animate-pulse blur-sm"></div>
            )}

            <button
              onClick={togglePlay}
              onContextMenu={(e) => {
                e.preventDefault();
                setShowVolume(!showVolume);
              }}
              onMouseEnter={() => setShowVolume(true)}
              onMouseLeave={() => setTimeout(() => setShowVolume(false), 2000)}
              className="relative w-14 h-14 rounded-full bg-zen-card/80 backdrop-blur-xl border border-zen-border hover:border-zen-crimson/60 transition-all duration-500 flex items-center justify-center shadow-lg hover:shadow-comet group overflow-hidden"
              title={isPlaying ? 'Pause BGM' : 'Play BGM — Hover for volume'}
            >
              {/* Spinning disc background */}
              <div
                className={`absolute inset-1 rounded-full border border-zen-border/30 ${
                  isPlaying ? 'animate-spin' : ''
                }`}
                style={{ animationDuration: '4s' }}
              >
                {/* Disc grooves */}
                <div className="absolute inset-0 rounded-full">
                  <div className="absolute inset-[6px] rounded-full border border-zen-crimson/10"></div>
                  <div className="absolute inset-[10px] rounded-full border border-zen-sage/8"></div>
                  <div className="absolute inset-[14px] rounded-full border border-zen-crimson/10"></div>
                </div>
                {/* Center hole */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-2.5 h-2.5 rounded-full bg-zen-washi border border-zen-border/50"></div>
                </div>
              </div>

              {/* Play / Pause Icon */}
              <div className="relative z-10">
                {isPlaying ? (
                  /* Pause icon */
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" className="text-zen-crimson">
                    <rect x="6" y="4" width="4" height="16" rx="1" fill="currentColor" />
                    <rect x="14" y="4" width="4" height="16" rx="1" fill="currentColor" />
                  </svg>
                ) : (
                  /* Play icon */
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" className="text-zen-sumi group-hover:text-zen-crimson transition-colors duration-300 ml-0.5">
                    <path d="M8 5.14v13.72a1 1 0 001.5.86l11.04-6.86a1 1 0 000-1.72L9.5 4.28a1 1 0 00-1.5.86z" fill="currentColor" />
                  </svg>
                )}
              </div>
            </button>

            {/* Song info tooltip */}
            <div className="absolute bottom-full right-0 mb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
              <div className="bg-zen-card/95 backdrop-blur-xl border border-zen-border rounded-lg px-4 py-3 shadow-lg whitespace-nowrap min-w-[180px]">
                <div className="flex items-center gap-2 mb-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-zen-crimson" style={{ animation: isPlaying ? 'pulse 1.5s infinite' : 'none' }}></span>
                  <span className="font-mono text-[9px] text-zen-slate tracking-widest uppercase">
                    {isPlaying ? 'NOW PLAYING' : 'PAUSED'}
                  </span>
                </div>
                <p className="text-xs font-serif text-zen-sumi font-medium">Reze Arc OST</p>
                <p className="text-[10px] text-zen-slate font-sans mt-0.5">Chainsaw Man</p>

                {/* Mini progress bar */}
                <div className="mt-2 flex items-center gap-2">
                  <span className="text-[8px] font-mono text-zen-slate">{formatTime(currentTime)}</span>
                  <div className="flex-1 h-[2px] bg-zen-border rounded-full overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-zen-crimson to-zen-sage rounded-full transition-all duration-300"
                      style={{ width: `${progress}%` }}
                    ></div>
                  </div>
                  <span className="text-[8px] font-mono text-zen-slate">{formatTime(duration)}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
