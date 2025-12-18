import React from 'react';
import Icon from '../../../AppIcon';
import Image from '../../../AppImage';

const UseCaseScenarios = () => {
  const useCases = [
  {
    title: 'E-Commerce Growth',
    industry: 'Retail',
    challenge: 'Managing high transaction volumes across multiple payment providers while maintaining accurate financial records',
    solution: 'Automated reconciliation reduced manual work by 87% and eliminated payment discrepancies',
    results: [
    { metric: '87%', label: 'Time Saved' },
    { metric: '$45K', label: 'Annual Savings' },
    { metric: '99.9%', label: 'Accuracy Rate' }],

    icon: 'ShoppingCart',
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_122b22f9d-1764654516001.png",
    imageAlt: 'Modern e-commerce warehouse with organized inventory shelves and digital tracking systems showing efficient retail operations'
  },
  {
    title: 'SaaS Subscription Management',
    industry: 'Technology',
    challenge: 'Complex recurring revenue recognition and subscription lifecycle management across global markets',
    solution: 'Automated revenue recognition and subscription analytics provided real-time MRR insights',
    results: [
    { metric: '3x', label: 'Faster Reporting' },
    { metric: '100%', label: 'Compliance' },
    { metric: '24/7', label: 'Real-Time Data' }],

    icon: 'Repeat',
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_1e07ba8fa-1764669428299.png",
    imageAlt: 'Technology startup team collaborating around computer screens displaying SaaS subscription metrics and recurring revenue dashboards'
  },
  {
    title: 'Professional Services',
    industry: 'Consulting',
    challenge: 'Project-based billing complexity with multiple clients and varying payment terms',
    solution: 'Automated invoicing and payment tracking improved cash flow visibility and collection rates',
    results: [
    { metric: '42%', label: 'Faster Collections' },
    { metric: '95%', label: 'On-Time Payments' },
    { metric: '$120K', label: 'Recovered Revenue' }],

    icon: 'Briefcase',
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_169b73ffb-1764669848355.png",
    imageAlt: 'Professional consulting office with business advisors reviewing client project financials and billing reports on modern workstations'
  }];


  return (
    <section className="py-16 lg:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold text-foreground mb-4">
            Real-World Success Stories
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            See how businesses like yours transformed their financial operations
          </p>
        </div>

        <div className="space-y-12 lg:space-y-16">
          {useCases?.map((useCase, index) =>
          <div
            key={index}
            className={`grid lg:grid-cols-2 gap-8 lg:gap-12 items-center ${
            index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`
            }>

              <div className={`${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-secondary/10 rounded-full mb-4">
                  <Icon name={useCase?.icon} size={16} color="var(--color-secondary)" />
                  <span className="text-sm font-medium text-secondary">{useCase?.industry}</span>
                </div>
                
                <h3 className="text-2xl lg:text-3xl font-bold text-foreground mb-4">
                  {useCase?.title}
                </h3>
                
                <div className="space-y-4 mb-6">
                  <div>
                    <h4 className="text-sm font-semibold text-foreground mb-2 flex items-center gap-2">
                      <Icon name="AlertCircle" size={16} color="var(--color-error)" />
                      Challenge
                    </h4>
                    <p className="text-muted-foreground">{useCase?.challenge}</p>
                  </div>
                  
                  <div>
                    <h4 className="text-sm font-semibold text-foreground mb-2 flex items-center gap-2">
                      <Icon name="CheckCircle2" size={16} color="var(--color-success)" />
                      Solution
                    </h4>
                    <p className="text-muted-foreground">{useCase?.solution}</p>
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-4 mb-6">
                  {useCase?.results?.map((result, idx) =>
                <div key={idx} className="text-center p-4 rounded-lg bg-card border border-border">
                      <div className="text-2xl font-bold text-primary mb-1">{result?.metric}</div>
                      <div className="text-xs text-muted-foreground">{result?.label}</div>
                    </div>
                )}
                </div>
              </div>

              <div className={`${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-border">
                  <Image
                  src={useCase?.image}
                  alt={useCase?.imageAlt}
                  className="w-full h-[400px] object-cover" />

                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>);

};

export default UseCaseScenarios;