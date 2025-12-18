import React, { useState } from 'react';
import Icon from '../../../AppIcon';
import Button from '../../../ui/Button';

const APIDocumentation = () => {
  const [activeTab, setActiveTab] = useState('quickstart');
  const [copiedCode, setCopiedCode] = useState(false);

  const codeExample = `// Initialize FinTech Pro SDK
import { FinTechPro } from '@fintechpro/sdk';

const client = new FinTechPro({
  apiKey: process.env.FINTECHPRO_API_KEY,
  environment: 'production'
});

// Connect payment provider
const connection = await client.integrations.connect({
  provider: 'stripe',
  credentials: {
    publishableKey: 'pk_live_...',
    secretKey: 'sk_live_...'
  }
});

console.log('Connected:', connection.status);`;

  const handleCopyCode = () => {
    navigator.clipboard?.writeText(codeExample);
    setCopiedCode(true);
    setTimeout(() => setCopiedCode(false), 2000);
  };

  const tabs = [
    { id: 'quickstart', label: 'Quick Start', icon: 'Zap' },
    { id: 'authentication', label: 'Authentication', icon: 'Key' },
    { id: 'webhooks', label: 'Webhooks', icon: 'Webhook' },
    { id: 'examples', label: 'Examples', icon: 'Code' }
  ];

  const apiFeatures = [
    {
      icon: 'Shield',
      title: 'Secure Authentication',
      description: 'OAuth 2.0 and API key authentication with automatic token refresh'
    },
    {
      icon: 'Zap',
      title: 'Real-time Webhooks',
      description: 'Instant notifications for payment events and transaction updates'
    },
    {
      icon: 'FileCode',
      title: 'Comprehensive SDKs',
      description: 'Native libraries for JavaScript, Python, Ruby, PHP, and more'
    },
    {
      icon: 'TestTube',
      title: 'Sandbox Environment',
      description: 'Full-featured testing environment with mock data and scenarios'
    }
  ];

  return (
    <div className="bg-card rounded-2xl border border-border overflow-hidden">
      <div className="bg-gradient-to-r from-primary/10 via-secondary/10 to-accent/10 p-8">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center">
            <Icon name="Code" size={24} color="#FFFFFF" />
          </div>
          <div>
            <h2 className="text-2xl font-bold text-foreground">API Documentation</h2>
            <p className="text-muted-foreground">Build powerful integrations with our REST API</p>
          </div>
        </div>

        <div className="flex flex-wrap gap-2">
          {tabs?.map((tab) => (
            <button
              key={tab?.id}
              onClick={() => setActiveTab(tab?.id)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 flex items-center gap-2 ${
                activeTab === tab?.id
                  ? 'bg-background text-foreground shadow-md'
                  : 'text-muted-foreground hover:bg-background/50'
              }`}
            >
              <Icon name={tab?.icon} size={16} />
              <span>{tab?.label}</span>
            </button>
          ))}
        </div>
      </div>
      <div className="p-8">
        <div className="bg-muted rounded-lg p-6 mb-6 relative">
          <div className="flex items-center justify-between mb-4">
            <span className="text-sm font-medium text-muted-foreground">JavaScript</span>
            <Button
              variant="ghost"
              size="sm"
              iconName={copiedCode ? 'Check' : 'Copy'}
              iconPosition="left"
              onClick={handleCopyCode}
            >
              {copiedCode ? 'Copied!' : 'Copy'}
            </Button>
          </div>
          <pre className="text-sm text-foreground overflow-x-auto">
            <code>{codeExample}</code>
          </pre>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {apiFeatures?.map((feature, index) => (
            <div key={index} className="flex gap-4">
              <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                <Icon name={feature?.icon} size={20} color="var(--color-primary)" />
              </div>
              <div>
                <h3 className="text-base font-semibold text-foreground mb-1">{feature?.title}</h3>
                <p className="text-sm text-muted-foreground">{feature?.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 flex flex-col sm:flex-row gap-4">
          <Button variant="default" iconName="BookOpen" iconPosition="left" fullWidth>
            View Full Documentation
          </Button>
          <Button variant="outline" iconName="Play" iconPosition="left" fullWidth>
            Try in Sandbox
          </Button>
        </div>
      </div>
    </div>
  );
};

export default APIDocumentation;