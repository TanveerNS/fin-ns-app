import React from 'react';
import Icon from '../../../AppIcon';

const SecurityHero = () => {
  return (
    <section className="relative bg-gradient-to-br from-primary/5 via-secondary/5 to-background py-20 overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern opacity-5" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-success/10 rounded-full mb-6">
            <Icon name="ShieldCheck" size={20} color="var(--color-success)" />
            <span className="text-sm font-semibold text-success">Enterprise-Grade Security</span>
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
            Security & Compliance You Can Trust
          </h1>
          
          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            Built with bank-level security standards and comprehensive compliance certifications to protect your financial data and meet regulatory requirements.
          </p>
          
          <div className="flex flex-wrap items-center justify-center gap-4">
            <div className="flex items-center gap-2 px-4 py-2 bg-card rounded-lg border border-border">
              <Icon name="Lock" size={18} color="var(--color-primary)" />
              <span className="text-sm font-medium text-foreground">256-bit Encryption</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 bg-card rounded-lg border border-border">
              <Icon name="Shield" size={18} color="var(--color-primary)" />
              <span className="text-sm font-medium text-foreground">SOC 2 Type II</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 bg-card rounded-lg border border-border">
              <Icon name="FileCheck" size={18} color="var(--color-primary)" />
              <span className="text-sm font-medium text-foreground">GDPR Compliant</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 bg-card rounded-lg border border-border">
              <Icon name="CheckCircle" size={18} color="var(--color-primary)" />
              <span className="text-sm font-medium text-foreground">PCI DSS Level 1</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SecurityHero;