import React, { useState } from 'react';
import { ChevronDown, MessageCircle, HelpCircle } from 'lucide-react';
import { faqs, createGeneralChatLink } from '../data/siteConfig';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  const toggle = (i) => {
    setOpenIndex(openIndex === i ? -1 : i);
  };

  return (
    <section className="faq-section wrap" id="faqs">
      <div className="faq-container-grid">
        <div className="faq-sidebar">
          <span className="section-pill">COMMON QUESTIONS</span>
          <h2>Got questions?<br /><em>We have honest answers.</em></h2>
          <p>
            Real honey acts differently than processed supermarket honey. Here are the most helpful facts you need to know.
          </p>

          <div className="sidebar-chat-card">
            <HelpCircle size={22} className="chat-card-icon" />
            <h4>Have another question?</h4>
            <p>Our team responds promptly on WhatsApp with harvest information.</p>
            <a 
              className="button button-whatsapp-primary full-width" 
              href={createGeneralChatLink()} 
              target="_blank" 
              rel="noopener noreferrer"
            >
              <MessageCircle size={17} /> Ask us on WhatsApp
            </a>
          </div>
        </div>

        <div className="faq-accordion-list">
          {faqs.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <div 
                className={`accordion-item ${isOpen ? 'is-expanded' : ''}`} 
                key={index}
              >
                <button 
                  type="button" 
                  className="accordion-trigger" 
                  onClick={() => toggle(index)}
                  aria-expanded={isOpen}
                >
                  <span className="accordion-q-text">{item.question}</span>
                  <span className="accordion-arrow">
                    <ChevronDown size={18} />
                  </span>
                </button>

                <div className="accordion-body">
                  <p>{item.answer}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
