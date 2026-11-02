import React from 'react';
import { TreePine, Flame, ShieldCheck, GlassWater, CheckCircle2, ArrowUpRight, Sparkles } from 'lucide-react';

export default function PurityPillars() {
  const pillars = [
    {
      icon: <TreePine size={24} />,
      title: 'Wild Canopy Combs',
      desc: 'Gathered from ancient forest trees, completely free from agricultural pesticides.',
      pill: 'Zero Chemicals',
    },
    {
      icon: <Flame size={24} />,
      title: 'Never Heated (Raw)',
      desc: 'Cold-strained at room temperature so all natural living enzymes stay active.',
      pill: 'Live Enzymes',
    },
    {
      icon: <ShieldCheck size={24} />,
      title: 'Zero Added Sugar',
      desc: '100% natural bee harvest. No corn syrup, no artificial sweeteners or colors.',
      pill: '100% Pure',
    },
    {
      icon: <GlassWater size={24} />,
      title: 'Sealed in Glass',
      desc: 'Bottled in food-grade glass jars to preserve taste and avoid plastic leaching.',
      pill: 'Zero Plastic',
    },
  ];

  return (
    <section className="purity-section wrap" id="purity">
      <div className="section-header-center">
        <span className="section-pill">OUR STANDARDS</span>
        <h2>Honest honey.<br /><em>Made the way nature intended.</em></h2>
        <p className="section-subtext">
          Zero additives, zero processing shortcuts. Four clear commitments in every single jar.
        </p>
      </div>

      <div className="pillars-grid">
        {pillars.map((item, index) => (
          <div className="pillar-card" key={index}>
            <div className="pillar-header">
              <div className="pillar-icon-box">{item.icon}</div>
              <span className="pillar-pill">{item.pill}</span>
            </div>
            <h3>{item.title}</h3>
            <p>{item.desc}</p>
          </div>
        ))}
      </div>

      {/* Actual Jar Label Spotlight Card */}
      <div className="label-spotlight-card">
        <div className="spotlight-image-side">
          <img 
            src="/aadivan-honey-grass.jpg" 
            alt="Aadivan Honey 200g jar outdoor label close-up showing FSSAI licensed badge and ingredients" 
            loading="lazy" 
          />
          <div className="spotlight-badge">
            <Sparkles size={13} />
            <span>Actual Jar Label</span>
          </div>
        </div>

        <div className="spotlight-text-side">
          <span className="spotlight-kicker">PHYSICAL LABEL GUARANTEE</span>
          <h3>What you see on the jar is what you taste.</h3>
          <p className="spotlight-desc">
            No hidden syrup blends in fine print. Transparently labeled with clean-food credentials.
          </p>

          <div className="spotlight-points">
            <div className="spotlight-point">
              <CheckCircle2 size={18} className="point-icon" />
              <div>
                <strong>100% Pure Forest Honey</strong>
                <small>Wild tree comb foraging</small>
              </div>
            </div>

            <div className="spotlight-point">
              <CheckCircle2 size={18} className="point-icon" />
              <div>
                <strong>No Added Sugar</strong>
                <small>0% corn syrup or adulteration</small>
              </div>
            </div>

            <div className="spotlight-point">
              <CheckCircle2 size={18} className="point-icon" />
              <div>
                <strong>FSSAI Licensed & Tested</strong>
                <small>Strict hygiene & food standards</small>
              </div>
            </div>

            <div className="spotlight-point">
              <CheckCircle2 size={18} className="point-icon" />
              <div>
                <strong>Raw · Unprocessed · Natural</strong>
                <small>Natural floral pollens intact</small>
              </div>
            </div>
          </div>

          <a href="#honey" className="button button-green spotlight-btn">
            Taste The Purity <ArrowUpRight size={16} />
          </a>
        </div>
      </div>

      {/* Trust validation bar */}
      <div className="purity-badges-row">
        <div className="badge-item">
          <CheckCircle2 size={16} /> <span>NMR Tested Purity</span>
        </div>
        <div className="badge-item">
          <CheckCircle2 size={16} /> <span>100% Vegetarian</span>
        </div>
        <div className="badge-item">
          <CheckCircle2 size={16} /> <span>Rich in Bee Pollen & Propolis</span>
        </div>
        <div className="badge-item">
          <CheckCircle2 size={16} /> <span>FSSAI Compliant Facility</span>
        </div>
      </div>
    </section>
  );
}
