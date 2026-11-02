import React from 'react';

export default function Marquee() {
  const items = [
    'WILD HARVESTED',
    '100% RAW & UNHEATED',
    'DEEP FOREST SOURCED',
    'ZERO ADDED SUGAR',
    'NATURAL POLLEN INTACT',
    'ETHICAL FORAGING',
    'PAN-INDIA DISPATCH',
  ];

  return (
    <section className="marquee-wrapper" aria-label="Aadivan values and quality guarantees">
      <div className="marquee-track">
        {/* Render twice for continuous infinite seamless scroll */}
        <div className="marquee-content">
          {items.map((item, idx) => (
            <React.Fragment key={`m1-${idx}`}>
              <span>{item}</span>
              <span className="marquee-star">✳</span>
            </React.Fragment>
          ))}
        </div>
        <div className="marquee-content" aria-hidden="true">
          {items.map((item, idx) => (
            <React.Fragment key={`m2-${idx}`}>
              <span>{item}</span>
              <span className="marquee-star">✳</span>
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
}
