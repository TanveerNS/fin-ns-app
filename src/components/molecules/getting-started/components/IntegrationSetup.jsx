import React, { useState } from 'react';
import Icon from '../../../AppIcon';
import Image from '../../../AppImage';
import Button from '../../../ui/Button';

const IntegrationSetup = ({ onComplete }) => {
  const [selectedIntegrations, setSelectedIntegrations] = useState([]);

  const integrations = [
  {
    id: 'stripe',
    name: 'Stripe',
    logo: "https://img.rocket.new/generatedImages/rocket_gen_img_1319cd744-1764673195622.png",
    logoAlt: 'Stripe payment processing platform logo with purple and white branding on modern tech background',
    description: 'Accept payments and manage subscriptions',
    category: 'Payment Processing',
    recommended: true
  },
  {
    id: 'quickbooks',
    name: 'QuickBooks',
    logo: "https://img.rocket.new/generatedImages/rocket_gen_img_10a6fd9ca-1764636341074.png",
    logoAlt: 'QuickBooks accounting software logo displayed on laptop screen with financial charts in background',
    description: 'Sync accounting data automatically',
    category: 'Accounting',
    recommended: true
  },
  {
    id: 'shopify',
    name: 'Shopify',
    logo: "https://img.rocket.new/generatedImages/rocket_gen_img_1f845ed31-1764635346347.png",
    logoAlt: 'Shopify e-commerce platform logo on green shopping bag with online retail storefront in background',
    description: 'Connect your online store',
    category: 'E-commerce',
    recommended: false
  },
  {
    id: 'paypal',
    name: 'PayPal',
    logo: "https://img.rocket.new/generatedImages/rocket_gen_img_183a97958-1764662429680.png",
    logoAlt: 'PayPal digital payment service logo with blue branding on smartphone screen showing payment interface',
    description: 'Alternative payment method',
    category: 'Payment Processing',
    recommended: false
  },
  {
    id: 'xero',
    name: 'Xero',
    logo: "https://img.rocket.new/generatedImages/rocket_gen_img_1498399a5-1764677122615.png",
    logoAlt: 'Xero cloud accounting software logo on computer monitor with financial dashboard and graphs visible',
    description: 'Cloud accounting solution',
    category: 'Accounting',
    recommended: false
  },
  {
    id: 'square',
    name: 'Square',
    logo: "https://img.rocket.new/generatedImages/rocket_gen_img_10ff446a5-1764636340546.png",
    logoAlt: 'Square point-of-sale system logo on tablet device with payment terminal in retail environment',
    description: 'Point of sale integration',
    category: 'Payment Processing',
    recommended: false
  }];


  const toggleIntegration = (id) => {
    setSelectedIntegrations((prev) =>
    prev?.includes(id) ? prev?.filter((item) => item !== id) : [...prev, id]
    );
  };

  const handleContinue = () => {
    onComplete(selectedIntegrations);
  };

  return (
    <div className="space-y-6">
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-foreground mb-2">Connect Your Tools</h2>
        <p className="text-muted-foreground">
          Select the integrations you'd like to set up. You can add more later from your dashboard.
        </p>
      </div>
      <div className="bg-primary/10 border border-primary/20 rounded-lg p-4 flex items-start gap-3">
        <Icon name="Lightbulb" size={20} color="var(--color-primary)" className="flex-shrink-0 mt-0.5" />
        <div>
          <p className="text-sm font-medium text-foreground mb-1">Recommended for you</p>
          <p className="text-xs text-muted-foreground">
            Based on your business type, we recommend starting with Stripe and QuickBooks for optimal workflow.
          </p>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {integrations?.map((integration) => {
          const isSelected = selectedIntegrations?.includes(integration?.id);

          return (
            <button
              key={integration?.id}
              onClick={() => toggleIntegration(integration?.id)}
              className={`relative text-left p-5 rounded-xl border-2 transition-all duration-300 hover:shadow-md ${
              isSelected ?
              'border-primary bg-primary/5 shadow-lg' :
              'border-border bg-card hover:border-primary/50'}`
              }>

              {integration?.recommended &&
              <div className="absolute top-3 right-3">
                  <span className="inline-flex items-center gap-1 px-2 py-1 rounded-full bg-primary/20 text-primary text-xs font-medium">
                    <Icon name="Star" size={12} />
                    Recommended
                  </span>
                </div>
              }
              <div className="flex items-start gap-4 mb-3">
                <div className="flex-shrink-0 w-12 h-12 rounded-lg overflow-hidden bg-muted">
                  <Image src={integration?.logo} alt={integration?.logoAlt} className="w-full h-full object-cover" />
                </div>

                <div className="flex-1 min-w-0">
                  <h3 className="text-base font-semibold text-foreground mb-1">{integration?.name}</h3>
                  <span className="inline-block px-2 py-0.5 rounded text-xs bg-muted text-muted-foreground">
                    {integration?.category}
                  </span>
                </div>
              </div>
              <p className="text-sm text-muted-foreground mb-3">{integration?.description}</p>
              <div className="flex items-center justify-between">
                <div
                  className={`flex items-center gap-2 text-sm font-medium transition-colors duration-300 ${
                  isSelected ? 'text-primary' : 'text-muted-foreground'}`
                  }>

                  {isSelected ?
                  <>
                      <Icon name="CheckCircle2" size={16} />
                      <span>Selected</span>
                    </> :

                  <>
                      <Icon name="Plus" size={16} />
                      <span>Add</span>
                    </>
                  }
                </div>
              </div>
            </button>);

        })}
      </div>
      <div className="flex items-center justify-between pt-6 border-t border-border">
        <p className="text-sm text-muted-foreground">
          {selectedIntegrations?.length} integration{selectedIntegrations?.length !== 1 ? 's' : ''} selected
        </p>
        <Button variant="default" onClick={handleContinue} iconName="ArrowRight" iconPosition="right">
          Continue Setup
        </Button>
      </div>
    </div>);

};

export default IntegrationSetup;