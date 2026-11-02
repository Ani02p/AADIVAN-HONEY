import React from 'react';
import { Check, X, ShieldAlert, Sparkles, ArrowUpRight } from 'lucide-react';

export default function Comparison() {
  const comparisonData = [
    {
      feature: 'Origin & Hive',
      market: 'Commercial farm bee boxes (pesticide exposure)',
      aadivan: 'Deep wild forest canopies (zero pollution)',
    },
    {
      feature: 'Processing',
      market: 'Boiled past 65°C (kills beneficial enzymes)',
      aadivan: '100% Raw & Cold-Strained (live enzymes)',
    },
    {
      feature: 'Purity',
      market: 'Often blended with inverted corn/rice syrup',
      aadivan: '100% Pure Honey (Zero added sugar)',
    },
    {
      feature: 'Floral Pollen',
      market: 'Ultra-filtered out to look transparent',
      aadivan: 'Rich in natural pollen & bee propolis',
    },
    {
      feature: 'Packaging',
      market: 'Plastic bottles (chemical leaching risk)',
      aadivan: 'Food-grade recyclable glass jars',
    },
  ];

  return (
    <section className="comparison-section wrap" id="comparison">
      <div className="section-header-center">
        <span className="section-pill">PURITY COMPARISON</span>
        <h2>Why Aadivan is not like<br /><em>supermarket honey.</em></h2>
        <p className="section-subtext">
          Mass-market honey is heated, blended with syrups, and stripped of nutrients. Here is how real forest honey compares.
        </p>
      </div>

      <div className="comparison-table-wrapper">
        <div className="comparison-grid">
          {/* Market Honey Column */}
          <div className="comparison-col market-col">
            <div className="comparison-col-header">
              <div className="col-badge market-badge">
                <ShieldAlert size={14} /> Conventional
              </div>
              <h3>Supermarket Brands</h3>
              <p>Mass-processed for shelf life</p>
            </div>

            <div className="comparison-rows">
              {comparisonData.map((row, idx) => (
                <div className="comparison-row" key={idx}>
                  <div className="row-feature-title">{row.feature}</div>
                  <div className="row-value market-value">
                    <span className="icon-cross"><X size={15} /></span>
                    <span>{row.market}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Aadivan Honey Column */}
          <div className="comparison-col aadivan-col">
            <div className="best-choice-ribbon">
              <Sparkles size={13} /> 100% PURE & RAW
            </div>

            <div className="comparison-col-header">
              <div className="col-badge aadivan-badge">
                <Sparkles size={14} /> The Honest Choice
              </div>
              <h3>Aadivan Forest Honey</h3>
              <p>Wild-foraged from natural canopies</p>
            </div>

            <div className="comparison-rows">
              {comparisonData.map((row, idx) => (
                <div className="comparison-row" key={idx}>
                  <div className="row-feature-title">{row.feature}</div>
                  <div className="row-value aadivan-value">
                    <span className="icon-check"><Check size={16} /></span>
                    <span>{row.aadivan}</span>
                  </div>
                </div>
              ))}
            </div>

            <div className="col-cta-bottom">
              <a href="#honey" className="button button-green full-width">
                Taste The Real Difference <ArrowUpRight size={16} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
