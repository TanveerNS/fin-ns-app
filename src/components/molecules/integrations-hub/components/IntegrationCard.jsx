import React from 'react';
import Image from '../../../AppImage';
import Icon from '../../../AppIcon';
import Button from '../../../ui/Button';

const IntegrationCard = ({ integration, onConnect, onViewDocs }) => {
  const getStatusColor = (status) => {
    switch (status) {
      case 'connected':
        return 'bg-success/10 text-success border-success/20';
      case 'available':
        return 'bg-primary/10 text-primary border-primary/20';
      case 'coming-soon':
        return 'bg-warning/10 text-warning border-warning/20';
      default:
        return 'bg-muted text-muted-foreground border-border';
    }
  };

  const getStatusIcon = (status) => {
    switch (status) {
      case 'connected':
        return 'CheckCircle2';
      case 'available':
        return 'Zap';
      case 'coming-soon':
        return 'Clock';
      default:
        return 'Circle';
    }
  };

  return (
    <div className="bg-card border border-border rounded-lg p-6 hover:shadow-lg transition-all duration-300 group">
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center gap-4">
          <div className="w-16 h-16 bg-muted rounded-lg flex items-center justify-center overflow-hidden">
            <Image
              src={integration?.logo}
              alt={integration?.logoAlt}
              className="w-12 h-12 object-contain"
            />
          </div>
          <div>
            <h3 className="text-lg font-semibold text-foreground mb-1">{integration?.name}</h3>
            <p className="text-sm text-muted-foreground">{integration?.category}</p>
          </div>
        </div>
        <div className={`px-3 py-1 rounded-full border text-xs font-medium flex items-center gap-1.5 ${getStatusColor(integration?.status)}`}>
          <Icon name={getStatusIcon(integration?.status)} size={14} />
          <span className="capitalize">{integration?.status?.replace('-', ' ')}</span>
        </div>
      </div>
      <p className="text-sm text-muted-foreground mb-4 line-clamp-2">{integration?.description}</p>
      <div className="flex flex-wrap gap-2 mb-4">
        {integration?.features?.map((feature, index) => (
          <span key={index} className="px-2 py-1 bg-muted rounded text-xs text-foreground">
            {feature}
          </span>
        ))}
      </div>
      <div className="flex items-center justify-between pt-4 border-t border-border">
        <div className="flex items-center gap-4 text-xs text-muted-foreground">
          <div className="flex items-center gap-1">
            <Icon name="Users" size={14} />
            <span>{integration?.users}</span>
          </div>
          <div className="flex items-center gap-1">
            <Icon name="Star" size={14} />
            <span>{integration?.rating}</span>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <Button
            variant="ghost"
            size="sm"
            iconName="FileText"
            iconPosition="left"
            onClick={() => onViewDocs(integration)}
          >
            Docs
          </Button>
          {integration?.status === 'available' && (
            <Button
              variant="default"
              size="sm"
              iconName="Plus"
              iconPosition="left"
              onClick={() => onConnect(integration)}
            >
              Connect
            </Button>
          )}
          {integration?.status === 'connected' && (
            <Button variant="outline" size="sm" iconName="Settings" iconPosition="left">
              Manage
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};

export default IntegrationCard;