import React, { useState } from 'react';
import Icon from '../../../AppIcon';
import Button from '../../../ui/Button';

const ComparisonMatrix = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', label: 'All Features' },
    { id: 'automation', label: 'Automation' },
    { id: 'analytics', label: 'Analytics' },
    { id: 'integration', label: 'Integration' },
    { id: 'security', label: 'Security' }
  ];

  const features = [
    {
      name: 'Real-Time Dashboard',
      category: 'analytics',
      basic: false,
      fintech: true,
      enterprise: true,
      description: 'Live financial metrics and KPI tracking'
    },
    {
      name: 'Automated Reconciliation',
      category: 'automation',
      basic: false,
      fintech: true,
      enterprise: true,
      description: 'AI-powered transaction matching'
    },
    {
      name: 'Predictive Cash Flow',
      category: 'analytics',
      basic: false,
      fintech: true,
      enterprise: true,
      description: 'ML-based financial forecasting'
    },
    {
      name: 'Multi-Currency Support',
      category: 'integration',
      basic: 'Limited',
      fintech: true,
      enterprise: true,
      description: 'Global payment processing'
    },
    {
      name: 'Custom Workflows',
      category: 'automation',
      basic: false,
      fintech: 'Limited',
      enterprise: true,
      description: 'Tailored automation rules'
    },
    {
      name: 'Advanced Reporting',
      category: 'analytics',
      basic: 'Basic',
      fintech: true,
      enterprise: true,
      description: 'Comprehensive financial reports'
    },
    {
      name: 'API Access',
      category: 'integration',
      basic: false,
      fintech: 'Limited',
      enterprise: true,
      description: 'Full platform integration'
    },
    {
      name: 'SOC 2 Compliance',
      category: 'security',
      basic: false,
      fintech: true,
      enterprise: true,
      description: 'Enterprise-grade security'
    },
    {
      name: 'Dedicated Support',
      category: 'security',
      basic: 'Email',
      fintech: 'Priority',
      enterprise: '24/7',
      description: 'Expert assistance when needed'
    },
    {
      name: 'Custom Integrations',
      category: 'integration',
      basic: false,
      fintech: false,
      enterprise: true,
      description: 'Bespoke system connections'
    }
  ];

  const filteredFeatures = selectedCategory === 'all' 
    ? features 
    : features?.filter(f => f?.category === selectedCategory);

  const renderFeatureValue = (value) => {
    if (value === true) {
      return <Icon name="Check" size={20} color="var(--color-success)" />;
    }
    if (value === false) {
      return <Icon name="X" size={20} color="var(--color-muted-foreground)" />;
    }
    return <span className="text-sm text-muted-foreground">{value}</span>;
  };

  return (
    <section className="py-16 lg:py-24 bg-card">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-5xl font-bold text-foreground mb-4">
            Feature Comparison
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            See how FinTech Pro compares to basic financial tools
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="flex flex-wrap gap-2 mb-8 justify-center">
            {categories?.map((category) => (
              <button
                key={category?.id}
                onClick={() => setSelectedCategory(category?.id)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                  selectedCategory === category?.id
                    ? 'bg-primary text-white' :'bg-background text-foreground hover:bg-muted'
                }`}
              >
                {category?.label}
              </button>
            ))}
          </div>

          <div className="bg-background rounded-2xl shadow-xl border border-border overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-border">
                    <th className="text-left p-6 text-foreground font-semibold">Feature</th>
                    <th className="text-center p-6 text-muted-foreground font-medium">Basic Tools</th>
                    <th className="text-center p-6 bg-primary/5">
                      <div className="flex flex-col items-center gap-1">
                        <span className="text-primary font-semibold">FinTech Pro</span>
                        <span className="text-xs text-muted-foreground">Recommended</span>
                      </div>
                    </th>
                    <th className="text-center p-6 text-foreground font-medium">Enterprise</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredFeatures?.map((feature, index) => (
                    <tr key={index} className="border-b border-border hover:bg-muted/50 transition-colors">
                      <td className="p-6">
                        <div>
                          <div className="font-medium text-foreground mb-1">{feature?.name}</div>
                          <div className="text-sm text-muted-foreground">{feature?.description}</div>
                        </div>
                      </td>
                      <td className="p-6 text-center">{renderFeatureValue(feature?.basic)}</td>
                      <td className="p-6 text-center bg-primary/5">{renderFeatureValue(feature?.fintech)}</td>
                      <td className="p-6 text-center">{renderFeatureValue(feature?.enterprise)}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="p-8 bg-muted/30 border-t border-border">
              <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-1">
                    Ready to experience the difference?
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Start your free trial and see all features in action
                  </p>
                </div>
                <Button variant="default" size="lg" iconName="ArrowRight" iconPosition="right">
                  Start Free Trial
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ComparisonMatrix;