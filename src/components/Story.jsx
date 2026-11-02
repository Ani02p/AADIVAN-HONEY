import React from 'react';
import { ArrowUpRight, Compass, Sparkles, ShieldCheck } from 'lucide-react';

export default function Story() {
  return (
    <section className="story-banner-section" id="story">
      {/* Immersive Forest Photography Background */}
      <div className="story-banner-bg" aria-hidden="true" />
      <div className="story-banner-overlay" aria-hidden="true" />

      <div className="wrap story-banner-content">
        <span className="story-banner-pill">OUR PHILOSOPHY</span>
        
        <h2>
          From wild tree canopies.<br />
          <em>Straight to your morning ritual.</em>
        </h2>

        <p className="story-banner-lead">
          We don’t heat it. We don’t dilute it with syrups. We simply cold-strain natural wild bee harvest and seal it in glass jars.
        </p>

        {/* 3 Clean Stat Cards */}
        <div className="story-banner-stats">
          <div className="banner-stat-chip">
            <Compass size={18} className="stat-chip-icon" />
            <div>
              <strong>Deep Forest Combs</strong>
              <small>Wild biodiverse flora</small>
            </div>
          </div>

          <div className="banner-stat-chip">
            <Sparkles size={18} className="stat-chip-icon" />
            <div>
              <strong>100% Raw & Unheated</strong>
              <small>Live enzymes preserved</small>
            </div>
          </div>

          <div className="banner-stat-chip">
            <ShieldCheck size={18} className="stat-chip-icon" />
            <div>
              <strong>Food-Grade Glass</strong>
              <small>Zero plastic leaching</small>
            </div>
          </div>
        </div>

        <div className="story-banner-action">
          <a href="#honey" className="button button-gold">
            Shop Pure Forest Honey <ArrowUpRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
}
