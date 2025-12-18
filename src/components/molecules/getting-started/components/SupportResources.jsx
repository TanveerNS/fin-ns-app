import React from 'react';
import Icon from '../../../AppIcon';
import Button from '../../../ui/Button';

const SupportResources = () => {
  const resources = [
    {
      id: 'live-chat',
      title: 'Live Chat Support',
      description: 'Get instant help from our support team',
      icon: 'MessageCircle',
      action: 'Start Chat',
      available: true,
    },
    {
      id: 'knowledge-base',
      title: 'Knowledge Base',
      description: 'Browse articles and tutorials',
      icon: 'BookOpen',
      action: 'Browse Articles',
      available: true,
    },
    {
      id: 'video-tutorials',
      title: 'Video Tutorials',
      description: 'Watch step-by-step guides',
      icon: 'Video',
      action: 'Watch Videos',
      available: true,
    },
    {
      id: 'community',
      title: 'Community Forum',
      description: 'Connect with other users',
      icon: 'Users',
      action: 'Join Community',
      available: true,
    },
  ];

  return (
    <div className="bg-card border border-border rounded-xl p-6">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
          <Icon name="HelpCircle" size={20} color="var(--color-primary)" />
        </div>
        <div>
          <h3 className="text-lg font-semibold text-foreground">Need Help?</h3>
          <p className="text-sm text-muted-foreground">We're here to support you every step of the way</p>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {resources?.map((resource) => (
          <div
            key={resource?.id}
            className="bg-muted/50 rounded-lg p-4 hover:bg-muted transition-colors duration-200"
          >
            <div className="flex items-start gap-3 mb-3">
              <Icon name={resource?.icon} size={20} color="var(--color-primary)" className="flex-shrink-0 mt-0.5" />
              <div className="flex-1 min-w-0">
                <h4 className="text-sm font-semibold text-foreground mb-1">{resource?.title}</h4>
                <p className="text-xs text-muted-foreground">{resource?.description}</p>
              </div>
            </div>
            <Button variant="ghost" size="sm" fullWidth iconName="ExternalLink" iconPosition="right">
              {resource?.action}
            </Button>
          </div>
        ))}
      </div>
      <div className="mt-6 pt-6 border-t border-border">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Icon name="Clock" size={16} color="var(--color-muted-foreground)" />
            <span className="text-sm text-muted-foreground">Support available 24/7</span>
          </div>
          <Button variant="link" size="sm" iconName="Mail" iconPosition="left">
            Email Support
          </Button>
        </div>
      </div>
    </div>
  );
};

export default SupportResources;