import React from 'react';
import Icon from '../../../AppIcon';

const BusinessTypeSelector = ({ selectedType, onSelect }) => {
  const businessTypes = [
    {
      id: 'ecommerce',
      title: 'E-commerce',
      description: 'Online retail and marketplace businesses',
      icon: 'ShoppingCart',
      features: ['Payment processing', 'Inventory sync', 'Order management'],
    },
    {
      id: 'saas',
      title: 'SaaS',
      description: 'Software as a Service companies',
      icon: 'Cloud',
      features: ['Subscription billing', 'Usage tracking', 'Revenue recognition'],
    },
    {
      id: 'professional',
      title: 'Professional Services',
      description: 'Consulting, agencies, and service providers',
      icon: 'Briefcase',
      features: ['Invoice management', 'Time tracking', 'Client billing'],
    },
    {
      id: 'retail',
      title: 'Retail',
      description: 'Physical stores and point-of-sale',
      icon: 'Store',
      features: ['POS integration', 'Cash flow tracking', 'Multi-location support'],
    },
  ];

  return (
    <div className="space-y-4">
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-foreground mb-2">What type of business do you run?</h2>
        <p className="text-muted-foreground">
          This helps us customize your experience and recommend the best features for your needs.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {businessTypes?.map((type) => (
          <button
            key={type?.id}
            onClick={() => onSelect(type?.id)}
            className={`text-left p-6 rounded-xl border-2 transition-all duration-300 hover:shadow-md ${
              selectedType === type?.id
                ? 'border-primary bg-primary/5 shadow-lg'
                : 'border-border bg-card hover:border-primary/50'
            }`}
          >
            <div className="flex items-start gap-4">
              <div
                className={`flex-shrink-0 w-12 h-12 rounded-lg flex items-center justify-center transition-colors duration-300 ${
                  selectedType === type?.id
                    ? 'bg-primary text-primary-foreground'
                    : 'bg-muted text-muted-foreground'
                }`}
              >
                <Icon name={type?.icon} size={24} />
              </div>

              <div className="flex-1 min-w-0">
                <h3 className="text-lg font-semibold text-foreground mb-1">{type?.title}</h3>
                <p className="text-sm text-muted-foreground mb-3">{type?.description}</p>

                <div className="space-y-1">
                  {type?.features?.map((feature, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <Icon
                        name="Check"
                        size={14}
                        color={selectedType === type?.id ? 'var(--color-primary)' : 'var(--color-muted-foreground)'}
                      />
                      <span className="text-xs text-muted-foreground">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {selectedType === type?.id && (
                <Icon name="CheckCircle2" size={24} color="var(--color-primary)" />
              )}
            </div>
          </button>
        ))}
      </div>
    </div>
  );
};

export default BusinessTypeSelector;