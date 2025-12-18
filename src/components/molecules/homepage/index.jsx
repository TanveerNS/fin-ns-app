import React from 'react';
import Footer from '../../ui/Footer';
import Header from '../../ui/Header';
import Breadcrumbs from '../../ui/Breadcrumbs';
import HeroSection from './components/HeroSection';
import TrustSection from './components/TrustSection';
import FeaturesSection from './components/FeaturesSection';
import ROICalculator from './components/ROICalculator';
import TestimonialsSection from './components/TestimonialsSection';
import CTASection from './components/CTASection';

const HomepageWrap = () => {
  return (
    <>

      <Header />
      
      <main className="min-h-screen bg-background">
        <div className="container mx-auto px-4">
          <Breadcrumbs />
        </div>

        <HeroSection />
        <TrustSection />
        <FeaturesSection />
        <ROICalculator />
        <TestimonialsSection />
        <CTASection />
      </main>

      <Footer />
    </>
  );
};

export default HomepageWrap;