import React, { useState, useEffect } from 'react';
import { Leaf, Menu, X, ArrowUpRight, MessageCircle } from 'lucide-react';
import { createGeneralChatLink } from '../data/siteConfig';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Close drawer on resize or escape
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') setIsMenuOpen(false);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Prevent background scroll when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMenuOpen]);

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <>
      <header className="header wrap">
        <a className="wordmark" href="#home" aria-label="Aadivan Honey home" onClick={closeMenu}>
          <span className="brand-leaf"><Leaf size={22} /></span>
          <span>
            AADIVAN
            <small>H O N E Y</small>
          </span>
        </a>

        <nav className="desktop-nav" aria-label="Main navigation">
          <a href="#story">Our Story</a>
          <a href="#purity">Purity & Source</a>
          <a href="#honey">Our Honey</a>
          <a href="#rituals">Rituals</a>
          <a href="#faqs">FAQs</a>
        </nav>

        <div className="header-actions">
          <a className="header-cta" href="#honey">
            Shop Honey <ArrowUpRight size={16} />
          </a>
          <button 
            className="menu-button" 
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={isMenuOpen}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </header>

      {/* Mobile Menu Drawer Overlay */}
      <div 
        className={`mobile-drawer-backdrop ${isMenuOpen ? 'open' : ''}`} 
        onClick={closeMenu} 
        aria-hidden="true" 
      />

      {/* Mobile Menu Drawer */}
      <div className={`mobile-drawer ${isMenuOpen ? 'open' : ''}`} role="dialog" aria-modal="true" aria-label="Mobile Navigation">
        <div className="mobile-drawer-header">
          <a className="wordmark" href="#home" onClick={closeMenu}>
            <span className="brand-leaf"><Leaf size={20} /></span>
            <span>AADIVAN<small>H O N E Y</small></span>
          </a>
          <button className="drawer-close-btn" onClick={closeMenu} aria-label="Close menu">
            <X size={22} />
          </button>
        </div>

        <nav className="mobile-nav-links">
          <a href="#story" onClick={closeMenu}>
            <span>01</span> Our Story
          </a>
          <a href="#purity" onClick={closeMenu}>
            <span>02</span> Purity & Testing
          </a>
          <a href="#honey" onClick={closeMenu}>
            <span>03</span> The Pantry & Shop
          </a>
          <a href="#rituals" onClick={closeMenu}>
            <span>04</span> Everyday Rituals
          </a>
          <a href="#faqs" onClick={closeMenu}>
            <span>05</span> Frequently Asked
          </a>
        </nav>

        <div className="mobile-drawer-footer">
          <a className="button button-dark full-width" href="#honey" onClick={closeMenu}>
            View Honey Jars <ArrowUpRight size={17} />
          </a>
          <a 
            className="button button-outline full-width" 
            href={createGeneralChatLink()} 
            target="_blank" 
            rel="noopener noreferrer"
            onClick={closeMenu}
          >
            <MessageCircle size={16} /> Chat on WhatsApp
          </a>
          <p className="mobile-drawer-note">Wild Harvested · 100% Raw Forest Honey</p>
        </div>
      </div>
    </>
  );
}
