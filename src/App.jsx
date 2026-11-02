import React from 'react';
import SplashScreen from './components/SplashScreen';
import AnnouncementBar from './components/AnnouncementBar';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Marquee from './components/Marquee';
import PurityPillars from './components/PurityPillars';
import Comparison from './components/Comparison';
import Products from './components/Products';
import Story from './components/Story';
import UsageRituals from './components/UsageRituals';
import CustomerReviews from './components/CustomerReviews';
import FAQ from './components/FAQ';
import ClosingCTA from './components/ClosingCTA';
import Footer from './components/Footer';
import FloatingWhatsApp from './components/FloatingWhatsApp';
import MobileStickyBar from './components/MobileStickyBar';

export default function App() {
  return (
    <div className="site-wrapper">
      {/* Honey Splash Screen Intro Loader */}
      <SplashScreen />

      {/* Top Value Banner */}
      <AnnouncementBar />

      {/* Clean Sticky Header */}
      <Navbar />

      <main>
        {/* High-Impact Hero with Immediate Price & Order Button */}
        <Hero />

        {/* Continuous Dynamic Values Marquee */}
        <Marquee />

        {/* 4 Core Purity Pillars */}
        <PurityPillars />

        {/* Market Honey vs Aadivan Comparison Table */}
        <Comparison />

        {/* Direct Shop & Pantry with Interactive Quantity & Pricing */}
        <Products />

        {/* Forest Sourcing & Tribal Harvest Story */}
        <Story />

        {/* Everyday Rituals & Usage Guide */}
        <UsageRituals />

        {/* Real Customer Reviews & Ratings */}
        <CustomerReviews />

        {/* Frequently Asked Questions */}
        <FAQ />

        {/* Forest Green Closing Call to Action */}
        <ClosingCTA />
      </main>

      {/* Clean Footer */}
      <Footer />

      {/* Floating WhatsApp Action Pill */}
      <FloatingWhatsApp />

      {/* Bottom Sticky Action Bar on Mobile */}
      <MobileStickyBar />
    </div>
  );
}
