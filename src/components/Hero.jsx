import React, { useState } from 'react';
import { ArrowUpRight, MessageCircle, ShieldCheck, TreePine, Droplets, Sparkles, CheckCircle2, Award, Camera } from 'lucide-react';
import { createOrderLink } from '../data/siteConfig';

const heroGallery = [
  {
    id: 'sunlit-200g',
    src: '/aadivan-honey-200g.jpg',
    label: 'Sunlit Jar (200g)',
    alt: 'Aadivan Pure Forest Honey 200g glass jar glowing in natural forest sunlight',
    badgeTop: {
      icon: TreePine,
      title: 'Deep Forest Harvest',
      sub: 'Wild biodiverse blossoms',
    },
    badgeBottom: {
      icon: Droplets,
      title: '100% Cold-Strained',
      sub: 'Live enzymes & pollen intact',
    },
    fit: 'cover',
  },
  {
    id: 'tree-canopy',
    src: '/aadivan-honey-tree.jpg',
    label: 'Tree Canopy Origin',
    alt: 'Aadivan Forest Honey jar perched naturally in forest tree branches',
    badgeTop: {
      icon: TreePine,
      title: 'High Forest Canopies',
      sub: 'Wild combs in protected reserves',
    },
    badgeBottom: {
      icon: Sparkles,
      title: 'Tribal Foraged',
      sub: 'Fair trade ethical harvest',
    },
    fit: 'cover',
  },
  {
    id: 'verified-label',
    src: '/aadivan-honey-grass.jpg',
    label: 'FSSAI Tested Label',
    alt: 'Aadivan Honey outdoor label showing FSSAI license and pure forest honey details',
    badgeTop: {
      icon: ShieldCheck,
      title: 'FSSAI Certified',
      sub: '100% Pure Forest Honey',
    },
    badgeBottom: {
      icon: CheckCircle2,
      title: 'Zero Added Sugar',
      sub: 'Authentic harvest promise',
    },
    fit: 'cover',
  },
];

export default function Hero() {
  const [activeIdx, setActiveIdx] = useState(0);
  const activeImage = heroGallery[activeIdx];
  const TopIcon = activeImage.badgeTop.icon;
  const BottomIcon = activeImage.badgeBottom.icon;

  return (
    <section className="hero-section wrap" id="home">
      <div className="hero-content">
        <div className="hero-badge">
          <Sparkles size={14} className="badge-sparkle" />
          <span>WILD HARVESTED · 100% RAW & UNHEATED</span>
        </div>

        <h1 className="hero-title">
          Pure Forest Honey.<br />
          <span className="hero-highlight">Untouched by heat or chemicals.</span>
        </h1>

        <p className="hero-description">
          100% raw, unheated forest honey foraged from wild tree canopies. Rich in natural floral pollens, active enzymes, and honest forest flavor.
        </p>

        {/* 4 Clean Value Pills */}
        <div className="hero-highlights-list">
          <div className="highlight-pill">
            <CheckCircle2 size={16} /> <span>Zero Added Sugar or Syrup</span>
          </div>
          <div className="highlight-pill">
            <CheckCircle2 size={16} /> <span>Never Heated (Live Enzymes Intact)</span>
          </div>
          <div className="highlight-pill">
            <CheckCircle2 size={16} /> <span>Sealed in Food-Grade Glass</span>
          </div>
          <div className="highlight-pill">
            <CheckCircle2 size={16} /> <span>Pan-India Doorstep Delivery</span>
          </div>
        </div>

        <div className="hero-actions-group">
          <a 
            className="button button-whatsapp-primary" 
            href={createOrderLink('200 g', 1, 300)} 
            target="_blank" 
            rel="noopener noreferrer"
          >
            <MessageCircle size={19} />
            <span>Order on WhatsApp (₹300 - ₹600)</span>
            <ArrowUpRight size={17} />
          </a>
          <a className="button button-ghost" href="#honey">
            Choose Your Jar Size <span>↓</span>
          </a>
        </div>

        <div className="hero-trust-bar">
          <div className="trust-stat">
            <strong>100%</strong>
            <small>Pure Forest Sourced</small>
          </div>
          <div className="trust-divider" />
          <div className="trust-stat">
            <strong>Zero</strong>
            <small>Heat or Pasteurization</small>
          </div>
          <div className="trust-divider" />
          <div className="trust-stat">
            <strong>24-48 hrs</strong>
            <small>Express Dispatch</small>
          </div>
        </div>
      </div>

      <div className="hero-visual-card">
        <div className="jar-display-wrapper">
          <div className="jar-hero-frame frame-cover">
            <img 
              key={activeImage.src}
              src={activeImage.src} 
              alt={activeImage.alt} 
              loading="eager"
            />
          </div>

          {/* Floating Badges corresponding to selected photo */}
          <div className="floating-badge badge-top">
            <TopIcon size={16} />
            <div>
              <strong>{activeImage.badgeTop.title}</strong>
              <small>{activeImage.badgeTop.sub}</small>
            </div>
          </div>

          <div className="floating-badge badge-bottom">
            <BottomIcon size={16} />
            <div>
              <strong>{activeImage.badgeBottom.title}</strong>
              <small>{activeImage.badgeBottom.sub}</small>
            </div>
          </div>
        </div>

        {/* Interactive Photo Selector Bar */}
        <div className="hero-gallery-tabs">
          <div className="gallery-tabs-label">
            <Camera size={13} />
            <span>Actual Harvest Photos:</span>
          </div>
          <div className="gallery-tabs-row">
            {heroGallery.map((item, index) => (
              <button
                key={item.id}
                type="button"
                className={`gallery-tab-btn ${index === activeIdx ? 'active' : ''}`}
                onClick={() => setActiveIdx(index)}
              >
                <img src={item.src} alt="" className="tab-thumb" />
                <span className="tab-title">{item.label}</span>
              </button>
            ))}
          </div>
        </div>

        <div className="visual-card-footer">
          <div className="product-quick-tag">
            <span className="dot-green" />
            <span>In Stock · Fresh Wild Forest Batch</span>
          </div>
          <a href="#honey" className="quick-shop-link">
            See Sizes & Prices <span>→</span>
          </a>
        </div>
      </div>
    </section>
  );
}
