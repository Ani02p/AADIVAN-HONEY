import React, { useState } from 'react';
import { MessageCircle, X } from 'lucide-react';
import { createGeneralChatLink } from '../data/siteConfig';

export default function FloatingWhatsApp() {
  const [showTooltip, setShowTooltip] = useState(true);

  return (
    <div className="floating-whatsapp-container">
      {showTooltip && (
        <div className="whatsapp-tooltip">
          <span>Need help or want to order? <strong>Chat with us</strong></span>
          <button 
            type="button" 
            className="tooltip-close" 
            onClick={() => setShowTooltip(false)}
            aria-label="Dismiss message"
          >
            <X size={12} />
          </button>
        </div>
      )}

      <a
        href={createGeneralChatLink()}
        target="_blank"
        rel="noopener noreferrer"
        className="floating-whatsapp-btn"
        aria-label="Order or chat with Aadivan Honey on WhatsApp"
      >
        <span className="pulse-ring" aria-hidden="true" />
        <MessageCircle size={26} className="whatsapp-icon" />
      </a>
    </div>
  );
}
