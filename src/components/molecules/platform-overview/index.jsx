import React from 'react';
import Header from '../../ui/Header';
import Footer from '../../ui/Footer';
import Breadcrumbs from '../../ui/Breadcrumbs';
import HeroSection from './components/HeroSection';
import FeatureShowcase from './components/FeatureShowcase';
import InteractiveDemo from './components/InteractiveDemo';
import UseCaseScenarios from './components/UseCaseScenarios';
import ComparisonMatrix from './components/ComparisonMatrix';
import VideoTestimonials from './components/VideoTestimonials';
import CTASection from './components/CTASection';

const PlatformOverviewWrap = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main>
        <div className="container mx-auto px-4">
          <Breadcrumbs />
        </div>
        
        <HeroSection />
        <FeatureShowcase />
        <InteractiveDemo />
        <UseCaseScenarios />
        <ComparisonMatrix />
        <VideoTestimonials />
        <CTASection />
      </main>
      
      <Footer />
    </div>
  );
};

export default PlatformOverviewWrap;