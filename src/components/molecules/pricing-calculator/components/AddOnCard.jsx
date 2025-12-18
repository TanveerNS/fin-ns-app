import React from 'react';
import Icon from '../../../AppIcon';
import Button from '../../../ui/Button';

const AddOnCard = ({ addon, onToggle, isSelected }) => {
  return (
    <div
      className={`bg-card rounded-xl border p-6 transition-all duration-300 ${
        isSelected ? 'border-primary shadow-brand' : 'border-border hover:border-primary/50'
      }`}
    >
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary/10 to-secondary/10 flex items-center justify-center">
            <Icon name={addon?.icon} size={24} color="var(--color-primary)" />
          </div>
          <div>
            <h4 className="font-semibold text-foreground">{addon?.name}</h4>
            <p className="text-sm text-muted-foreground">{addon?.description}</p>
          </div>
        </div>
      </div>
      <div className="flex items-baseline gap-1 mb-4">
        <span className="text-2xl font-bold text-foreground">${addon?.price}</span>
        <span className="text-muted-foreground text-sm">/month</span>
      </div>
      <ul className="space-y-2 mb-6">
        {addon?.features?.map((feature, index) => (
          <li key={index} className="flex items-start gap-2 text-sm text-foreground">
            <Icon name="Check" size={16} color="var(--color-primary)" className="flex-shrink-0 mt-0.5" />
            <span>{feature}</span>
          </li>
        ))}
      </ul>
      <Button
        variant={isSelected ? 'default' : 'outline'}
        fullWidth
        onClick={() => onToggle(addon?.id)}
      >
        {isSelected ? 'Remove' : 'Add to Plan'}
      </Button>
    </div>
  );
};

export default AddOnCard;