import React from 'react';
import { ArrowUpRight, Leaf } from 'lucide-react';

export default function ClosingCTA() {
  return (
    <section className="closing" id="order-now">
      <div className="closing-flower" aria-hidden="true">✳</div>
      <p className="eyebrow">
        <span>A LITTLE HONEY · A LOT OF PURITY</span>
      </p>
      <h2>
        Bring home a jar of<br />
        <em>honest golden goodness.</em>
      </h2>
      <p className="closing-subtext">
        Harvested in small batches with respect for nature. Ready for your tea, sourdough, and quiet mornings.
      </p>
      <div className="closing-actions">
        <a className="button button-light" href="#honey">
          Choose Your Jar Size <ArrowUpRight size={17} />
        </a>
      </div>
      <div className="closing-guarantee">
        <span><Leaf size={14} /> 100% Raw Forest Honey</span>
        <span>•</span>
        <span>Zero Preservatives</span>
        <span>•</span>
        <span>Pan-India Delivery</span>
      </div>
    </section>
  );
}
