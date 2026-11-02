import React, { useState, useEffect } from 'react';
import { ArrowUpRight } from 'lucide-react';

export default function MobileStickyBar() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show when scrolled past 350px
      if (window.scrollY > 350) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!visible) return null;

  return (
    <div className="mobile-sticky-order-bar" aria-label="Quick order bar">
      <div className="mobile-sticky-info">
        <span className="mobile-sticky-name">Aadivan Forest Honey</span>
        <span className="mobile-sticky-price">From ₹300 · 100% Raw</span>
      </div>
      <a href="#honey" className="mobile-sticky-btn">
        Order Now <ArrowUpRight size={14} />
      </a>
    </div>
  );
}
