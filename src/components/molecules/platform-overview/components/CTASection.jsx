import React from 'react';
import Icon from '../../../AppIcon';
import Button from '../../../ui/Button';

const CTASection = () => {
  return (
    <section className="py-16 lg:py-24 bg-gradient-to-br from-primary/10 via-background to-secondary/10">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="bg-card rounded-3xl shadow-2xl border border-border overflow-hidden">
            <div className="p-8 lg:p-12">
              <div className="text-center mb-8">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full mb-6">
                  <Icon name="Sparkles" size={18} color="var(--color-primary)" />
                  <span className="text-sm font-medium text-primary">Start Your Journey</span>
                </div>
                
                <h2 className="text-3xl lg:text-5xl font-bold text-foreground mb-4">
                  Ready to Transform Your Financial Operations?
                </h2>
                
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
                  Join 10,000+ businesses that trust FinTech Pro for their financial intelligence. Start your free trial today—no credit card required.
                </p>
              </div>

              <div className="grid sm:grid-cols-3 gap-6 mb-8">
                {[
                  { icon: 'Clock', label: '14-Day Free Trial', description: 'Full platform access' },
                  { icon: 'CreditCard', label: 'No Credit Card', description: 'Required to start' },
                  { icon: 'Headphones', label: 'Expert Support', description: 'Setup assistance' }
                ]?.map((feature, index) => (
                  <div key={index} className="text-center p-4 rounded-xl bg-muted/50">
                    <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-primary/10 mb-3">
                      <Icon name={feature?.icon} size={24} color="var(--color-primary)" />
                    </div>
                    <h3 className="font-semibold text-foreground mb-1">{feature?.label}</h3>
                    <p className="text-sm text-muted-foreground">{feature?.description}</p>
                  </div>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="default" size="lg" iconName="ArrowRight" iconPosition="right">
                  Start Free Trial
                </Button>
                <Button variant="outline" size="lg" iconName="Calendar" iconPosition="left">
                  Schedule Demo
                </Button>
              </div>

              <div className="mt-8 pt-8 border-t border-border">
                <div className="flex flex-wrap items-center justify-center gap-8">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Icon name="Shield" size={16} color="var(--color-success)" />
                    <span>Bank-Level Security</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Icon name="Award" size={16} color="var(--color-success)" />
                    <span>SOC 2 Certified</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Icon name="Users" size={16} color="var(--color-success)" />
                    <span>10,000+ Customers</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Icon name="Star" size={16} color="var(--color-success)" />
                    <span>4.9/5 Rating</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;