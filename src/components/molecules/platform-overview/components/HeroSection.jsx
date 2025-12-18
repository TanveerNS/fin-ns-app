import React from 'react';
import Icon from '../../../AppIcon';
import Button from '../../../ui/Button';

const HeroSection = () => {
  return (
    <section className="relative bg-gradient-to-br from-primary/5 via-background to-secondary/5 py-16 lg:py-24 overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern opacity-5" />
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full mb-6">
            <Icon name="Sparkles" size={18} color="var(--color-primary)" />
            <span className="text-sm font-medium text-primary">Financial Intelligence Platform</span>
          </div>
          
          <h1 className="text-4xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
            Transform Financial Complexity Into
            <span className="bg-gradient-growth bg-clip-text text-transparent"> Competitive Advantage</span>
          </h1>
          
          <p className="text-lg lg:text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            Experience the complete financial operations platform that combines intelligent automation, real-time insights, and seamless integrations. Built for businesses that refuse to settle for basic.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button variant="default" size="lg" iconName="Play" iconPosition="left">
              Watch Platform Demo
            </Button>
            <Button variant="outline" size="lg" iconName="Calendar" iconPosition="left">
              Schedule Live Walkthrough
            </Button>
          </div>
          
          <div className="mt-12 grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {[
              { value: '10,000+', label: 'Active Businesses', icon: 'Building2' },
              { value: '$2.5B+', label: 'Processed Monthly', icon: 'TrendingUp' },
              { value: '99.9%', label: 'Uptime SLA', icon: 'Shield' },
              { value: '150+', label: 'Integrations', icon: 'Puzzle' }
            ]?.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-primary/10 mb-3">
                  <Icon name={stat?.icon} size={24} color="var(--color-primary)" />
                </div>
                <div className="text-2xl lg:text-3xl font-bold text-foreground mb-1">{stat?.value}</div>
                <div className="text-sm text-muted-foreground">{stat?.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;