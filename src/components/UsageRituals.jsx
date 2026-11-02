import React from 'react';
import { Sun, UtensilsCrossed, Moon, Activity, AlertCircle } from 'lucide-react';
import { usageRituals } from '../data/siteConfig';

export default function UsageRituals() {
  const getIcon = (time) => {
    switch (time) {
      case 'Morning':
        return <Sun size={20} />;
      case 'Afternoon':
        return <UtensilsCrossed size={20} />;
      case 'Evening':
        return <Moon size={20} />;
      case 'Fitness':
        return <Activity size={20} />;
      default:
        return <Sun size={20} />;
    }
  };

  return (
    <section className="rituals-section wrap" id="rituals">
      <div className="section-header-center">
        <span className="section-pill">DAILY NOURISHMENT</span>
        <h2>Everyday rituals.<br /><em>Made a little more golden.</em></h2>
        <p className="section-subtext">
          Because Aadivan is 100% raw and unpasteurized, it retains the natural enzymes and antioxidants that elevate your wellness routine.
        </p>
      </div>

      <div className="rituals-cards-grid">
        {usageRituals.map((ritual, idx) => (
          <div className="ritual-box" key={idx}>
            <div className="ritual-box-top">
              <span className="ritual-icon-ring">{getIcon(ritual.time)}</span>
              <span className="ritual-time-tag">{ritual.time}</span>
            </div>
            <h3>{ritual.title}</h3>
            <p>{ritual.desc}</p>
            <div className="ritual-benefit-badge">
              <small>✨ {ritual.tempNote}</small>
            </div>
          </div>
        ))}
      </div>

      <div className="golden-tip-banner">
        <div className="golden-tip-icon">
          <AlertCircle size={22} />
        </div>
        <div>
          <strong>Important Tip For Raw Honey:</strong>
          <p>
            Never add raw honey to boiling water or piping hot milk! Temperatures above 45°C degrade beneficial enzymes and aromatic floral pollens. Wait until your drink is comfortably warm to touch before stirring in Aadivan Honey.
          </p>
        </div>
      </div>
    </section>
  );
}
