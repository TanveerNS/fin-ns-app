import React, { useState } from 'react';
import Icon from '../../../AppIcon';
import Button from '../../../ui/Button';
import Select from '../../../ui/Select';

const CompatibilityChecker = () => {
  const [selectedPlatform, setSelectedPlatform] = useState('');
  const [selectedProvider, setSelectedProvider] = useState('');
  const [checkResult, setCheckResult] = useState(null);

  const platforms = [
    { value: 'shopify', label: 'Shopify' },
    { value: 'woocommerce', label: 'WooCommerce' },
    { value: 'magento', label: 'Magento' },
    { value: 'bigcommerce', label: 'BigCommerce' },
    { value: 'custom', label: 'Custom Platform' }
  ];

  const providers = [
    { value: 'stripe', label: 'Stripe' },
    { value: 'paypal', label: 'PayPal' },
    { value: 'square', label: 'Square' },
    { value: 'braintree', label: 'Braintree' },
    { value: 'authorize', label: 'Authorize.net' }
  ];

  const handleCheck = () => {
    if (selectedPlatform && selectedProvider) {
      setCheckResult({
        compatible: true,
        setupTime: '15 minutes',
        features: ['One-click setup', 'Auto-sync', 'Real-time updates', 'Webhook support']
      });
    }
  };

  return (
    <div className="bg-gradient-to-br from-accent/5 to-secondary/5 rounded-2xl p-8 border border-accent/20">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-12 h-12 bg-accent rounded-lg flex items-center justify-center">
          <Icon name="CheckCircle2" size={24} color="#FFFFFF" />
        </div>
        <div>
          <h2 className="text-2xl font-bold text-foreground">Compatibility Checker</h2>
          <p className="text-muted-foreground">Verify integration compatibility with your platform</p>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
        <Select
          label="Your Platform"
          options={platforms}
          value={selectedPlatform}
          onChange={setSelectedPlatform}
          placeholder="Select your platform"
        />
        <Select
          label="Payment Provider"
          options={providers}
          value={selectedProvider}
          onChange={setSelectedProvider}
          placeholder="Select provider"
        />
      </div>
      <Button
        variant="default"
        iconName="Search"
        iconPosition="left"
        onClick={handleCheck}
        disabled={!selectedPlatform || !selectedProvider}
        fullWidth
      >
        Check Compatibility
      </Button>
      {checkResult && (
        <div className="mt-6 bg-background rounded-lg p-6 border border-success/20">
          <div className="flex items-center gap-3 mb-4">
            <Icon name="CheckCircle2" size={24} color="var(--color-success)" />
            <div>
              <h3 className="text-lg font-semibold text-foreground">Fully Compatible!</h3>
              <p className="text-sm text-muted-foreground">Estimated setup time: {checkResult?.setupTime}</p>
            </div>
          </div>

          <div className="space-y-2">
            <p className="text-sm font-medium text-foreground mb-2">Available Features:</p>
            {checkResult?.features?.map((feature, index) => (
              <div key={index} className="flex items-center gap-2 text-sm text-muted-foreground">
                <Icon name="Check" size={16} color="var(--color-success)" />
                <span>{feature}</span>
              </div>
            ))}
          </div>

          <div className="mt-4 pt-4 border-t border-border">
            <Button variant="outline" iconName="Download" iconPosition="left" fullWidth>
              Download Integration Guide
            </Button>
          </div>
        </div>
      )}
    </div>
  );
};

export default CompatibilityChecker;