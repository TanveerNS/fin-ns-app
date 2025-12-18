import React, { useState } from 'react';
import Icon from '../../../AppIcon';
import Image from '../../../AppImage';

const FeatureShowcase = () => {
  const [activeFeature, setActiveFeature] = useState(0);

  const features = [
  {
    id: 0,
    title: 'Real-Time Financial Dashboard',
    description: 'Monitor cash flow, revenue trends, and key financial metrics in real-time with customizable widgets and intelligent alerts that keep you informed of critical changes.',
    icon: 'LayoutDashboard',
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_1e0209a6b-1764676409002.png",
    imageAlt: 'Modern financial dashboard displaying colorful charts and graphs with revenue metrics on large computer monitor in bright office setting',
    benefits: [
    'Customizable widget layouts',
    'Real-time data synchronization',
    'Intelligent anomaly detection',
    'Mobile-responsive design']

  },
  {
    id: 1,
    title: 'Automated Reconciliation',
    description: 'Eliminate manual reconciliation work with AI-powered matching that automatically categorizes transactions and identifies discrepancies across all your financial accounts.',
    icon: 'GitCompare',
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_1cb2a7942-1765208481062.png",
    imageAlt: 'Business professional reviewing automated financial reconciliation reports with matching transactions highlighted on dual monitor setup',
    benefits: [
    'AI-powered transaction matching',
    'Multi-account reconciliation',
    'Automatic categorization',
    'Discrepancy alerts']

  },
  {
    id: 2,
    title: 'Predictive Cash Flow',
    description: 'Forecast future cash positions with machine learning models that analyze historical patterns, seasonal trends, and upcoming obligations to prevent cash shortages.',
    icon: 'TrendingUp',
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_1882d70e7-1764682194013.png",
    imageAlt: 'Detailed cash flow projection chart showing upward trending line graph with predictive analytics on professional business laptop screen',
    benefits: [
    'ML-powered forecasting',
    'Scenario planning tools',
    'Early warning system',
    'Historical trend analysis']

  },
  {
    id: 3,
    title: 'Smart Expense Management',
    description: 'Streamline expense tracking and approval workflows with automated receipt capture, policy enforcement, and real-time budget monitoring across departments.',
    icon: 'Receipt',
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_1c6944cf7-1765623946259.png",
    imageAlt: 'Mobile phone displaying expense management app with receipt scanning feature and categorized spending breakdown in modern office environment',
    benefits: [
    'Receipt OCR scanning',
    'Policy automation',
    'Multi-level approvals',
    'Budget tracking']

  }];


  return (
    <section className="py-16 lg:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold text-foreground mb-4">
            Platform Capabilities
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Comprehensive financial operations suite designed for modern businesses
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div className="space-y-4">
            {features?.map((feature, index) =>
            <div
              key={feature?.id}
              onClick={() => setActiveFeature(index)}
              className={`p-6 rounded-xl border-2 cursor-pointer transition-all duration-300 ${
              activeFeature === index ?
              'border-primary bg-primary/5 shadow-lg' :
              'border-border bg-card hover:border-primary/50'}`
              }>

                <div className="flex items-start gap-4">
                  <div className={`w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0 ${
                activeFeature === index ? 'bg-primary' : 'bg-muted'}`
                }>
                    <Icon
                    name={feature?.icon}
                    size={24}
                    color={activeFeature === index ? '#FFFFFF' : 'var(--color-foreground)'} />

                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-foreground mb-2">
                      {feature?.title}
                    </h3>
                    <p className="text-sm text-muted-foreground mb-4">
                      {feature?.description}
                    </p>
                    {activeFeature === index &&
                  <ul className="space-y-2">
                        {feature?.benefits?.map((benefit, idx) =>
                    <li key={idx} className="flex items-center gap-2 text-sm text-foreground">
                            <Icon name="Check" size={16} color="var(--color-primary)" />
                            <span>{benefit}</span>
                          </li>
                    )}
                      </ul>
                  }
                  </div>
                </div>
              </div>
            )}
          </div>

          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-border">
              <Image
                src={features?.[activeFeature]?.image}
                alt={features?.[activeFeature]?.imageAlt}
                className="w-full h-[500px] object-cover" />

              <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-primary rounded-full mb-2">
                  <Icon name="Zap" size={14} color="#FFFFFF" />
                  <span className="text-xs font-medium text-white">Live Demo Available</span>
                </div>
                <h4 className="text-xl font-bold text-foreground mb-2">
                  {features?.[activeFeature]?.title}
                </h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>);

};

export default FeatureShowcase;