import React from 'react';
import { Star, CheckCircle, Quote } from 'lucide-react';
import { customerReviews } from '../data/siteConfig';

export default function CustomerReviews() {
  return (
    <section className="reviews-section wrap" id="reviews">
      <div className="reviews-header-row">
        <div>
          <span className="section-pill">CUSTOMER LOVE</span>
          <h2>Loved in kitchens & teacups<br /><em>across India.</em></h2>
        </div>

        <div className="reviews-aggregate-box">
          <div className="aggregate-stars">
            {[...Array(5)].map((_, i) => (
              <Star key={i} size={18} fill="#d97706" color="#d97706" />
            ))}
          </div>
          <strong>4.9 / 5.0 Average Rating</strong>
          <span>Based on verified WhatsApp customer orders</span>
        </div>
      </div>

      <div className="reviews-cards-row">
        {customerReviews.map((item) => (
          <div className="review-box-item" key={item.id}>
            <div className="review-top-bar">
              <div className="star-rating">
                {[...Array(item.rating)].map((_, i) => (
                  <Star key={i} size={15} fill="#d97706" color="#d97706" />
                ))}
              </div>
              <Quote size={20} className="review-quote-mark" />
            </div>

            <h4 className="review-headline">"{item.title}"</h4>
            <p className="review-content">{item.review}</p>

            <div className="review-user-footer">
              <div className="user-initial-badge">
                {item.name.charAt(0)}
              </div>
              <div className="user-meta">
                <strong>{item.name}</strong>
                <span>{item.city}</span>
              </div>
              <span className="user-verified-tag">
                <CheckCircle size={13} /> Verified
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
