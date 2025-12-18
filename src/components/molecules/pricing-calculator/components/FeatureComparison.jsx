import React, { useState } from 'react';
import Icon from '../../../AppIcon';

const FeatureComparison = ({ plans }) => {
  const [expandedCategory, setExpandedCategory] = useState('core');

  const featureCategories = [
    {
      id: 'core',
      name: 'Core Features',
      features: [
        { name: 'Dashboard Analytics', starter: true, professional: true, enterprise: true },
        { name: 'Transaction Processing', starter: '100/mo', professional: '1,000/mo', enterprise: 'Unlimited' },
        { name: 'Payment Integrations', starter: '3', professional: '10', enterprise: 'Unlimited' },
        { name: 'Team Members', starter: '2', professional: '10', enterprise: 'Unlimited' },
        { name: 'API Access', starter: false, professional: true, enterprise: true }
      ]
    },
    {
      id: 'reporting',
      name: 'Reporting & Analytics',
      features: [
        { name: 'Basic Reports', starter: true, professional: true, enterprise: true },
        { name: 'Custom Reports', starter: false, professional: true, enterprise: true },
        { name: 'Real-time Analytics', starter: false, professional: true, enterprise: true },
        { name: 'Export Options', starter: 'CSV', professional: 'CSV, Excel', enterprise: 'All Formats' },
        { name: 'Scheduled Reports', starter: false, professional: true, enterprise: true }
      ]
    },
    {
      id: 'security',
      name: 'Security & Compliance',
      features: [
        { name: 'SSL Encryption', starter: true, professional: true, enterprise: true },
        { name: 'Two-Factor Authentication', starter: true, professional: true, enterprise: true },
        { name: 'Role-Based Access', starter: false, professional: true, enterprise: true },
        { name: 'Audit Logs', starter: false, professional: '90 days', enterprise: 'Unlimited' },
        { name: 'SOC 2 Compliance', starter: false, professional: false, enterprise: true }
      ]
    },
    {
      id: 'support',
      name: 'Support & Training',
      features: [
        { name: 'Email Support', starter: true, professional: true, enterprise: true },
        { name: 'Priority Support', starter: false, professional: true, enterprise: true },
        { name: 'Phone Support', starter: false, professional: false, enterprise: true },
        { name: 'Dedicated Account Manager', starter: false, professional: false, enterprise: true },
        { name: 'Onboarding Training', starter: false, professional: true, enterprise: true }
      ]
    }
  ];

  const renderFeatureValue = (value) => {
    if (value === true) {
      return (
        <div className="flex justify-center">
          <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center">
            <Icon name="Check" size={16} color="var(--color-primary)" strokeWidth={3} />
          </div>
        </div>
      );
    }
    if (value === false) {
      return (
        <div className="flex justify-center">
          <div className="w-6 h-6 rounded-full bg-muted flex items-center justify-center">
            <Icon name="X" size={16} color="var(--color-muted-foreground)" strokeWidth={2} />
          </div>
        </div>
      );
    }
    return <div className="text-center text-sm font-medium text-foreground">{value}</div>;
  };

  return (
    <div className="bg-card rounded-2xl border border-border overflow-hidden">
      <div className="p-6 border-b border-border">
        <h3 className="text-2xl font-bold text-foreground mb-2">Feature Comparison</h3>
        <p className="text-muted-foreground">Compare features across all plans</p>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead className="bg-muted/50">
            <tr>
              <th className="text-left p-4 font-semibold text-foreground">Features</th>
              <th className="text-center p-4 font-semibold text-foreground">Starter</th>
              <th className="text-center p-4 font-semibold text-foreground">Professional</th>
              <th className="text-center p-4 font-semibold text-foreground">Enterprise</th>
            </tr>
          </thead>
          <tbody>
            {featureCategories?.map((category) => (
              <React.Fragment key={category?.id}>
                <tr className="bg-muted/30">
                  <td colSpan="4" className="p-4">
                    <button
                      onClick={() => setExpandedCategory(expandedCategory === category?.id ? null : category?.id)}
                      className="flex items-center gap-2 w-full text-left font-semibold text-foreground hover:text-primary transition-colors"
                    >
                      <Icon
                        name={expandedCategory === category?.id ? 'ChevronDown' : 'ChevronRight'}
                        size={20}
                      />
                      <span>{category?.name}</span>
                    </button>
                  </td>
                </tr>
                {expandedCategory === category?.id &&
                  category?.features?.map((feature, index) => (
                    <tr key={index} className="border-t border-border hover:bg-muted/20 transition-colors">
                      <td className="p-4 text-sm text-foreground">{feature?.name}</td>
                      <td className="p-4">{renderFeatureValue(feature?.starter)}</td>
                      <td className="p-4">{renderFeatureValue(feature?.professional)}</td>
                      <td className="p-4">{renderFeatureValue(feature?.enterprise)}</td>
                    </tr>
                  ))}
              </React.Fragment>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default FeatureComparison;