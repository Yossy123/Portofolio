import React, { useState, useRef, useEffect } from 'react';

export default function MusicPlayer() {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(0.3);
  const [showVolume, setShowVolume] = useState(false);
  const [hasInteracted, setHasInteracted] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);

  // Try to autoplay on first user interaction anywhere on the page
  useEffect(() => {
    const handleFirstInteraction = () => {
      if (!hasInteracted && audioRef.current) {
        setHasInteracted(true);
        audioRef.current.volume = volume;
        audioRef.current.play()
          .then(() => setIsPlaying(true))
          .catch(() => {});
      }
    };

    document.addEventListener('click', handleFirstInteraction, { once: true });
    document.addEventListener('scroll', handleFirstInteraction, { once: true });
    document.addEventListener('keydown', handleFirstInteraction, { once: true });

    return () => {
      document.removeEventListener('click', handleFirstInteraction);
      document.removeEventListener('scroll', handleFirstInteraction);
      document.removeEventListener('keydown', handleFirstInteraction);
    };
  }, [hasInteracted, volume]);

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

      {/* Floating Music Player */}
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
                [&::-webkit-slider-thumb]:shadow-[0_0_8px_rgba(232,115,74,0.5)]
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
              <p className="text-xs font-serif text-zen-sumi font-medium">Kimi no Nawa OST</p>
              <p className="text-[10px] text-zen-slate font-sans mt-0.5">Reze Arc</p>

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

        {/* "Click anywhere" hint for first-time visitors */}
        {!hasInteracted && (
          <div className="absolute -left-44 bottom-3 animate-pulse">
            <div className="bg-zen-card/90 backdrop-blur-xl border border-zen-border rounded-lg px-3 py-2 shadow-lg">
              <p className="text-[9px] font-mono text-zen-slate tracking-wider whitespace-nowrap flex items-center gap-1.5">
                <span className="text-zen-crimson">♪</span> Click anywhere to play BGM
              </p>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
