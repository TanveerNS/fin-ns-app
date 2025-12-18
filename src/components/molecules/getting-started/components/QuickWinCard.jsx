import React from 'react';
import Icon from '../../../AppIcon';
import Button from '../../../ui/Button';

const QuickWinCard = ({ title, description, icon, action, onAction, completed }) => {
  return (
    <div
      className={`bg-card border rounded-xl p-6 transition-all duration-300 ${
        completed ? 'border-primary/50 bg-primary/5' : 'border-border hover:border-primary/30 hover:shadow-md'
      }`}
    >
      <div className="flex items-start gap-4">
        <div
          className={`flex-shrink-0 w-12 h-12 rounded-lg flex items-center justify-center transition-colors duration-300 ${
            completed
              ? 'bg-primary text-primary-foreground'
              : 'bg-muted text-muted-foreground'
          }`}
        >
          <Icon name={completed ? 'CheckCircle2' : icon} size={24} />
        </div>

        <div className="flex-1 min-w-0">
          <h3 className="text-lg font-semibold text-foreground mb-2">{title}</h3>
          <p className="text-sm text-muted-foreground mb-4">{description}</p>

          {!completed && (
            <Button variant="outline" size="sm" onClick={onAction} iconName="ArrowRight" iconPosition="right">
              {action}
            </Button>
          )}

          {completed && (
            <div className="flex items-center gap-2 text-sm font-medium text-primary">
              <Icon name="Check" size={16} />
              <span>Completed</span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default QuickWinCard;