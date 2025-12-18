import React from 'react';
import { Link } from 'react-router-dom';
import Icon from '../../../AppIcon';
import Button from '../../../ui/Button';

const SecurityCTA = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-primary/10 via-secondary/10 to-background">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="bg-card border border-border rounded-2xl p-8 md:p-12 shadow-xl">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-success/10 rounded-full mb-6">
                  <Icon name="ShieldCheck" size={20} color="var(--color-success)" />
                  <span className="text-sm font-semibold text-success">Enterprise-Ready Security</span>
                </div>
                
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                  Ready to Experience Bank-Level Security?
                </h2>
                
                <p className="text-lg text-muted-foreground mb-6">
                  Join thousands of businesses who trust FinTech Pro to protect their financial data with enterprise-grade security and comprehensive compliance.
                </p>

                <div className="space-y-3 mb-8">
                  <div className="flex items-center gap-3">
                    <div className="w-6 h-6 bg-success/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <Icon name="Check" size={16} color="var(--color-success)" />
                    </div>
                    <span className="text-foreground">SOC 2 Type II & ISO 27001 certified</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-6 h-6 bg-success/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <Icon name="Check" size={16} color="var(--color-success)" />
                    </div>
                    <span className="text-foreground">256-bit encryption & multi-factor authentication</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-6 h-6 bg-success/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <Icon name="Check" size={16} color="var(--color-success)" />
                    </div>
                    <span className="text-foreground">24/7 security monitoring & incident response</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-6 h-6 bg-success/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <Icon name="Check" size={16} color="var(--color-success)" />
                    </div>
                    <span className="text-foreground">GDPR, CCPA & PCI DSS compliant</span>
                  </div>
                </div>

                <div className="flex flex-wrap gap-4">
                  <Link to="/getting-started">
                    <Button variant="default" size="lg" iconName="ArrowRight" iconPosition="right">
                      Start Free Trial
                    </Button>
                  </Link>
                  <Button variant="outline" size="lg" iconName="Calendar" iconPosition="left">
                    Schedule Security Demo
                  </Button>
                </div>
              </div>

              <div className="lg:pl-8">
                <div className="bg-gradient-to-br from-primary/5 to-secondary/5 rounded-xl p-6 border border-border">
                  <h3 className="text-xl font-bold text-foreground mb-4">Security Highlights</h3>
                  
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Icon name="Lock" size={20} color="var(--color-primary)" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground mb-1">End-to-End Encryption</h4>
                        <p className="text-sm text-muted-foreground">Military-grade encryption protects your data at rest and in transit</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Icon name="Eye" size={20} color="var(--color-primary)" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground mb-1">Continuous Monitoring</h4>
                        <p className="text-sm text-muted-foreground">Real-time threat detection with automated response systems</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Icon name="Shield" size={20} color="var(--color-primary)" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground mb-1">Compliance Ready</h4>
                        <p className="text-sm text-muted-foreground">Pre-built compliance frameworks for major regulations</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Icon name="Users" size={20} color="var(--color-primary)" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground mb-1">Expert Support</h4>
                        <p className="text-sm text-muted-foreground">Dedicated security team available 24/7 for assistance</p>
                      </div>
                    </div>
                  </div>

                  <div className="mt-6 pt-6 border-t border-border">
                    <p className="text-sm text-muted-foreground text-center">
                      Trusted by 10,000+ businesses worldwide
                    </p>
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

export default SecurityCTA;