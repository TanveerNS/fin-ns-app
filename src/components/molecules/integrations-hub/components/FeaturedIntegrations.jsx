import React from 'react';
import Image from '../../../AppImage';
import Icon from '../../../AppIcon';
import Button from '../../../ui/Button';

const FeaturedIntegrations = ({ integrations, onConnect }) => {
  return (
    <div className="bg-gradient-to-br from-primary/5 via-secondary/5 to-accent/5 rounded-2xl p-8 border border-primary/10">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="text-2xl font-bold text-foreground mb-2">Featured Integrations</h2>
          <p className="text-muted-foreground">Most popular payment providers trusted by thousands</p>
        </div>
        <Icon name="Star" size={32} color="var(--color-primary)" />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {integrations?.map((integration) => (
          <div
            key={integration?.id}
            className="bg-background rounded-xl p-6 border border-border hover:shadow-xl transition-all duration-300 group"
          >
            <div className="flex items-center gap-4 mb-4">
              <div className="w-14 h-14 bg-muted rounded-lg flex items-center justify-center overflow-hidden">
                <Image
                  src={integration?.logo}
                  alt={integration?.logoAlt}
                  className="w-10 h-10 object-contain"
                />
              </div>
              <div className="flex-1">
                <h3 className="text-lg font-semibold text-foreground">{integration?.name}</h3>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Icon name="Users" size={14} />
                  <span>{integration?.users}</span>
                </div>
              </div>
            </div>

            <p className="text-sm text-muted-foreground mb-4">{integration?.description}</p>

            <div className="flex items-center justify-between">
              <div className="flex items-center gap-1 text-sm">
                <Icon name="Star" size={16} color="var(--color-warning)" />
                <span className="font-medium text-foreground">{integration?.rating}</span>
              </div>
              <Button
                variant="default"
                size="sm"
                iconName="ArrowRight"
                iconPosition="right"
                onClick={() => onConnect(integration)}
              >
                Connect
              </Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturedIntegrations;