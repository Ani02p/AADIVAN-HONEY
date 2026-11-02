import React, { useState, useEffect } from 'react';
import { Sparkles } from 'lucide-react';

export default function SplashScreen() {
  const [phase, setPhase] = useState('active'); // 'active' -> 'exiting' -> 'hidden'

  useEffect(() => {
    // Start exit transition after 2 seconds
    const exitTimer = setTimeout(() => {
      setPhase('exiting');
    }, 2100);

    // Completely remove from DOM after fade-out transition finishes
    const hideTimer = setTimeout(() => {
      setPhase('hidden');
    }, 2700);

    return () => {
      clearTimeout(exitTimer);
      clearTimeout(hideTimer);
    };
  }, []);

  if (phase === 'hidden') return null;

  return (
    <div 
      className={`splash-screen-overlay ${phase === 'exiting' ? 'splash-exiting' : ''}`}
      role="status" 
      aria-label="Loading Aadivan Honey"
    >
      {/* Subtle Honeycomb Hexagon Background */}
      <div className="splash-honeycomb-bg" aria-hidden="true" />

      <div className="splash-content-box">
        {/* Animated Golden Honey Dripping SVG */}
        <div className="splash-honey-animation">
          <svg 
            className="honey-drop-svg" 
            viewBox="0 0 100 120" 
            fill="none" 
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <linearGradient id="splashHoneyGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#fef08a" />
                <stop offset="35%" stopColor="#f59e0b" />
                <stop offset="100%" stopColor="#b45309" />
              </linearGradient>

              <filter id="honeyGlow" x="-20%" y="-20%" width="140%" height="140%">
                <feDropShadow dx="0" dy="4" stdDeviation="6" floodColor="#f59e0b" floodOpacity="0.5" />
              </filter>
            </defs>

            {/* Honeycomb cell outline */}
            <polygon 
              points="50,6 88,28 88,72 50,94 12,72 12,28" 
              className="splash-hex-outline" 
            />

            {/* Ripple rings beneath drop */}
            <ellipse cx="50" cy="88" rx="20" ry="6" className="honey-ripple ring-1" />
            <ellipse cx="50" cy="88" rx="30" ry="8" className="honey-ripple ring-2" />

            {/* Dripping honey droplet */}
            <path 
              d="M50 26 C50 26 36 46 36 58 C36 67.5 42.2 74 50 74 C57.8 74 64 67.5 64 58 C64 46 50 26 50 26 Z" 
              fill="url(#splashHoneyGrad)" 
              filter="url(#honeyGlow)"
              className="falling-honey-drop"
            />

            {/* Inner droplet light reflection */}
            <path 
              d="M44 48 C42 53 43 59 45 61" 
              stroke="#ffffff" 
              strokeWidth="2.5" 
              strokeLinecap="round" 
              opacity="0.75" 
            />
          </svg>
        </div>

        {/* Brand Name & Tagline */}
        <div className="splash-brand-group">
          <div className="splash-pill-tag">
            <Sparkles size={12} className="tag-sparkle" />
            <span>100% WILD FOREST HARVEST</span>
          </div>

          <h1 className="splash-title">AADIVAN</h1>
          <p className="splash-subtitle">P U R E &nbsp; F O R E S T &nbsp; H O N E Y</p>
        </div>

        {/* Golden Liquid Filling Progress Bar */}
        <div className="splash-progress-track">
          <div className="splash-progress-fill" />
        </div>

        <p className="splash-loading-text">
          <span>Pouring nature's golden drops</span>
          <span className="splash-dots">...</span>
        </p>
      </div>

      {/* Instant Skip button for fast visitors */}
      <button 
        type="button" 
        className="splash-skip-btn" 
        onClick={() => setPhase('exiting')}
        aria-label="Skip intro and enter website"
      >
        Skip Intro →
      </button>
    </div>
  );
}

