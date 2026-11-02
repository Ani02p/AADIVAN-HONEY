import React from 'react';
import { Leaf, MessageCircle, Heart } from 'lucide-react';
import { createGeneralChatLink } from '../data/siteConfig';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer-wrap">
      <div className="wrap footer-content">
        <div className="footer-brand-col">
          <a className="wordmark footer-mark" href="#home">
            <span className="brand-leaf"><Leaf size={22} /></span>
            <span>
              AADIVAN
              <small>H O N E Y</small>
            </span>
          </a>
          <p className="footer-tagline">
            Nature in every drop. 100% wild harvested, raw forest honey straight from indigenous forest canopies to your table.
          </p>
          <div className="fssai-box">
            <span className="fssai-label">FSSAI COMPLIANT</span>
            <small>FSSAI Reg. No. 21523000000000 (Artisanal Batch)</small>
          </div>
        </div>

        <div className="footer-links-col">
          <h5>EXPLORE</h5>
          <nav>
            <a href="#home">Home</a>
            <a href="#story">Our Story</a>
            <a href="#purity">Purity Standards</a>
            <a href="#honey">Honey Pantry</a>
            <a href="#rituals">Everyday Rituals</a>
            <a href="#faqs">FAQs</a>
          </nav>
        </div>

        <div className="footer-contact-col">
          <h5>DIRECT ORDERS</h5>
          <p>We take orders and answer questions directly on WhatsApp to ensure personalized care for every customer.</p>
          <a 
            className="footer-whatsapp-pill" 
            href={createGeneralChatLink()} 
            target="_blank" 
            rel="noopener noreferrer"
          >
            <MessageCircle size={16} /> Chat on WhatsApp
          </a>
          <div className="footer-delivery-promise">
            <span>🚚 Pan-India door delivery within 3-5 business days</span>
          </div>
        </div>
      </div>

      <div className="wrap footer-bottom">
        <p>© {currentYear} Aadivan Honey. All rights reserved.</p>
        <p className="credit-note">
          Crafted with care for natural living.
        </p>
      </div>
    </footer>
  );
}
