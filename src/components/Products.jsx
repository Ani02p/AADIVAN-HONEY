import React, { useState } from 'react';
import { ArrowUpRight, Plus, Minus, MessageCircle, Truck, ShieldCheck, Check, Sparkles } from 'lucide-react';
import { products, createOrderLink } from '../data/siteConfig';

export default function Products() {
  const [quantities, setQuantities] = useState({
    'jar-200': 1,
    'jar-500': 1,
    'jar-twin-500': 1,
  });

  const handleQtyChange = (productId, change) => {
    setQuantities((prev) => {
      const current = prev[productId] || 1;
      const next = Math.max(1, Math.min(10, current + change));
      return { ...prev, [productId]: next };
    });
  };

  return (
    <section className="shop-section" id="honey">
      <div className="wrap">
        <div className="section-header-center">
          <span className="section-pill">DIRECT FROM FOREST</span>
          <h2>Choose your jar.<br /><em>Pure goodness in every size.</em></h2>
          <p className="section-subtext">
            Harvested in small batches with zero heat treatment. Hand-strained and bottled in food-grade recyclable glass jars.
          </p>
        </div>

        <div className="products-container">
          <div className="cards-grid">
            {products.map((product) => {
              const qty = quantities[product.id] || 1;
              const totalAmount = product.unitPrice * qty;
              const formattedTotal = `₹${totalAmount.toLocaleString('en-IN')}`;

              return (
                <div 
                  className={`card-item ${product.isPopular ? 'featured-card' : ''}`} 
                  key={product.id}
                >
                  {product.isPopular && (
                    <div className="badge-featured">
                      <Sparkles size={12} /> MOST POPULAR
                    </div>
                  )}

                  {product.discount && (
                    <div className="badge-discount">{product.discount}</div>
                  )}

                  <div className="card-top">
                    <span className="card-size-label">{product.size}</span>
                    <span className="card-tag">{product.tag}</span>
                  </div>

                  <div className="card-media media-cover">
                    <img 
                      src={product.image || '/aadivan-honey-200g.jpg'} 
                      alt={`${product.size} Aadivan Forest Honey Glass Jar`} 
                      loading="lazy" 
                    />
                  </div>

                  <div className="card-body">
                    <div className="price-row">
                      <div className="price-tag">
                        {product.originalPrice && (
                          <span className="strikethrough">{product.originalPrice}</span>
                        )}
                        <span className="main-price">{product.priceFormatted}</span>
                      </div>
                      <span className="servings-text">{product.servings}</span>
                    </div>

                    <p className="card-description">{product.note}</p>

                    {/* Quantity Selector */}
                    <div className="stepper-box">
                      <span className="stepper-title">Select Quantity:</span>
                      <div className="stepper-controls">
                        <button 
                          type="button" 
                          onClick={() => handleQtyChange(product.id, -1)} 
                          disabled={qty <= 1}
                          aria-label="Decrease quantity"
                        >
                          <Minus size={14} />
                        </button>
                        <span className="stepper-count">{qty}</span>
                        <button 
                          type="button" 
                          onClick={() => handleQtyChange(product.id, 1)} 
                          disabled={qty >= 10}
                          aria-label="Increase quantity"
                        >
                          <Plus size={14} />
                        </button>
                      </div>
                    </div>

                    {/* Total calculation indicator */}
                    <div className="order-total-indicator">
                      <span>Total: <strong>{formattedTotal}</strong> {qty > 1 && `(${qty} jars)`}</span>
                      <span className="gst-inclusive">Tax & Packing Included</span>
                    </div>

                    {/* WhatsApp Buy CTA */}
                    <a 
                      className={`button full-width ${product.isPopular ? 'button-green' : 'button-whatsapp-dark'}`}
                      href={createOrderLink(product.size, qty, product.unitPrice)}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <MessageCircle size={18} />
                      <span>Order on WhatsApp</span>
                      <ArrowUpRight size={16} />
                    </a>

                    <div className="card-shipping-tag">
                      <Truck size={13} />
                      <span>{product.shippingNote}</span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Simple delivery reassurance bar */}
          <div className="delivery-perks-row">
            <div className="perk-box">
              <Truck size={20} className="perk-icon" />
              <div>
                <strong>Pan-India Doorstep Delivery</strong>
                <p>Dispatched within 24-48 hours via express courier</p>
              </div>
            </div>
            <div className="perk-box">
              <ShieldCheck size={20} className="perk-icon" />
              <div>
                <strong>100% Safe Transit Guarantee</strong>
                <p>Shockproof protective packaging for glass jars</p>
              </div>
            </div>
            <div className="perk-box">
              <MessageCircle size={20} className="perk-icon" />
              <div>
                <strong>Direct Human WhatsApp Support</strong>
                <p>Instant confirmation & real-time parcel tracking</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
