import React from 'react';
import { Link } from 'react-router-dom';
import Icon from '../../../AppIcon';
import Button from '../../../ui/Button';

const CTASection = () => {
  const benefits = [
    { icon: "CheckCircle", text: "No credit card required" },
    { icon: "CheckCircle", text: "14-day free trial" },
    { icon: "CheckCircle", text: "Cancel anytime" },
    { icon: "CheckCircle", text: "Full feature access" }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-primary via-secondary to-accent relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(255,255,255,0.1),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,rgba(255,255,255,0.1),transparent_50%)]" />
      <div className="container mx-auto px-4 relative">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full mb-6">
            <Icon name="Zap" size={16} color="#FFFFFF" />
            <span className="text-sm font-medium text-white">Start Your Free Trial Today</span>
          </div>

          <h2 className="text-3xl lg:text-5xl font-bold text-white mb-6">
            Ready to Transform Your Financial Operations?
          </h2>

          <p className="text-lg lg:text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Join 15,000+ businesses who have already discovered the power of intelligent financial automation. Start your free trial today and see results within days.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Link to="/getting-started">
              <Button 
                variant="outline" 
                size="lg" 
                iconName="ArrowRight" 
                iconPosition="right"
                className="bg-white text-primary hover:bg-white/90 w-full sm:w-auto"
              >
                Start Free Trial
              </Button>
            </Link>
            <Link to="/platform-overview">
              <Button 
                variant="outline" 
                size="lg" 
                iconName="Play" 
                iconPosition="left"
                className="border-white text-white hover:bg-white/10 w-full sm:w-auto"
              >
                Watch Demo
              </Button>
            </Link>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 max-w-3xl mx-auto">
            {benefits?.map((benefit, index) => (
              <div
                key={index}
                className="flex items-center gap-2 justify-center bg-white/10 backdrop-blur-sm rounded-lg px-4 py-3"
              >
                <Icon name={benefit?.icon} size={20} color="#FFFFFF" />
                <span className="text-sm font-medium text-white">{benefit?.text}</span>
              </div>
            ))}
          </div>

          <div className="mt-12 pt-8 border-t border-white/20">
            <p className="text-white/80 text-sm">
              Questions? Contact our sales team at{' '}
              <a href="mailto:sales@fintechpro.com" className="text-white font-medium hover:underline">
                sales@fintechpro.com
              </a>
              {' '}or call{' '}
              <a href="tel:+18005551234" className="text-white font-medium hover:underline">
                1-800-555-1234
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;