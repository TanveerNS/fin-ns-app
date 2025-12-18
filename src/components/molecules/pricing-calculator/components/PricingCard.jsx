import React from 'react';
import Icon from '../../../AppIcon';
import Button from '../../../ui/Button';

const PricingCard = ({ plan, isPopular, onSelect, selectedPlan }) => {
  const isSelected = selectedPlan === plan?.id;

  return (
    <div
      className={`relative rounded-2xl p-8 transition-all duration-300 ${
        isPopular
          ? 'bg-gradient-to-br from-primary/10 to-secondary/10 border-2 border-primary shadow-brand-lg scale-105'
          : 'bg-card border border-border hover:border-primary/50 hover:shadow-brand'
      } ${isSelected ? 'ring-2 ring-primary' : ''}`}
    >
      {isPopular && (
        <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-gradient-growth rounded-full">
          <span className="text-sm font-semibold text-white">Most Popular</span>
        </div>
      )}
      <div className="text-center mb-6">
        <h3 className="text-2xl font-bold text-foreground mb-2">{plan?.name}</h3>
        <p className="text-muted-foreground text-sm">{plan?.description}</p>
      </div>
      <div className="text-center mb-6">
        <div className="flex items-baseline justify-center gap-1">
          <span className="text-4xl font-bold text-foreground">${plan?.price}</span>
          <span className="text-muted-foreground">/month</span>
        </div>
        {plan?.annualPrice && (
          <p className="text-sm text-primary mt-2">
            Save ${(plan?.price * 12 - plan?.annualPrice)?.toFixed(0)}/year with annual billing
          </p>
        )}
      </div>
      <div className="space-y-4 mb-8">
        {plan?.features?.map((feature, index) => (
          <div key={index} className="flex items-start gap-3">
            <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
              <Icon name="Check" size={14} color="var(--color-primary)" strokeWidth={3} />
            </div>
            <span className="text-sm text-foreground">{feature}</span>
          </div>
        ))}
      </div>
      {plan?.limits && (
        <div className="bg-muted/50 rounded-lg p-4 mb-6 space-y-2">
          {plan?.limits?.map((limit, index) => (
            <div key={index} className="flex items-center justify-between text-sm">
              <span className="text-muted-foreground">{limit?.label}</span>
              <span className="font-semibold text-foreground">{limit?.value}</span>
            </div>
          ))}
        </div>
      )}
      <Button
        variant={isPopular ? 'default' : 'outline'}
        fullWidth
        onClick={() => onSelect(plan?.id)}
        iconName="ArrowRight"
        iconPosition="right"
      >
        {isSelected ? 'Selected' : 'Choose Plan'}
      </Button>
    </div>
  );
};

export default PricingCard;