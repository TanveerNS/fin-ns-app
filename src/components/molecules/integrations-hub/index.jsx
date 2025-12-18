import React, { useState, useMemo } from 'react';
import Header from '../../ui/Header';
import Footer from '../../ui/Footer';
import Breadcrumbs from '../../ui/Breadcrumbs';
import Icon from '../../AppIcon';
import Button from '../../ui/Button';
import IntegrationCard from './components/IntegrationCard';
import CategoryFilter from './components/CategoryFilter';
import SearchBar from './components/SearchBar';
import FeaturedIntegrations from './components/FeaturedIntegrations';
import APIDocumentation from './components/APIDocumentation';
import IntegrationStats from './components/IntegrationStats';
import CompatibilityChecker from './components/CompatibilityChecker';

const IntegrationsHubWrap = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState('popular');

  const integrations = [
  {
    id: 1,
    name: 'Stripe',
    category: 'Payment Gateway',
    logo: "https://img.rocket.new/generatedImages/rocket_gen_img_1319cd744-1764673195622.png",
    logoAlt: 'Stripe payment gateway logo with blue and white branding on modern gradient background',
    description: 'Accept payments online with Stripe\'s powerful and flexible payment processing platform. Support for 135+ currencies and multiple payment methods.',
    status: 'connected',
    features: ['Recurring billing', 'Fraud detection', 'Global payments'],
    users: '50K+',
    rating: '4.9',
    setupTime: '10 minutes'
  },
  {
    id: 2,
    name: 'PayPal',
    category: 'Payment Gateway',
    logo: "https://img.rocket.new/generatedImages/rocket_gen_img_183a97958-1764662429680.png",
    logoAlt: 'PayPal digital payment platform logo with iconic blue color scheme on clean white surface',
    description: 'Enable PayPal checkout and accept payments from millions of PayPal users worldwide. Instant setup with one-click integration.',
    status: 'available',
    features: ['Express checkout', 'Buyer protection', 'Mobile payments'],
    users: '45K+',
    rating: '4.8',
    setupTime: '5 minutes'
  },
  {
    id: 3,
    name: 'Square',
    category: 'Payment Gateway',
    logo: "https://img.rocket.new/generatedImages/rocket_gen_img_154c3d283-1764673194112.png",
    logoAlt: 'Square point of sale system logo with minimalist black design on modern tech background',
    description: 'Unified payment processing for online and in-person transactions. Perfect for omnichannel businesses with physical locations.',
    status: 'connected',
    features: ['POS integration', 'Inventory sync', 'Analytics'],
    users: '38K+',
    rating: '4.7',
    setupTime: '15 minutes'
  },
  {
    id: 4,
    name: 'QuickBooks',
    category: 'Accounting',
    logo: "https://img.rocket.new/generatedImages/rocket_gen_img_10a6fd9ca-1764636341074.png",
    logoAlt: 'QuickBooks accounting software logo with green branding on professional business setting background',
    description: 'Seamlessly sync financial data with QuickBooks for automated bookkeeping and real-time financial reporting.',
    status: 'available',
    features: ['Auto-sync', 'Tax reports', 'Invoice matching'],
    users: '42K+',
    rating: '4.8',
    setupTime: '20 minutes'
  },
  {
    id: 5,
    name: 'Xero',
    category: 'Accounting',
    logo: "https://img.rocket.new/generatedImages/rocket_gen_img_1498399a5-1764677122615.png",
    logoAlt: 'Xero cloud accounting platform logo with distinctive blue color on modern office workspace',
    description: 'Cloud-based accounting integration with automatic bank reconciliation and real-time financial insights.',
    status: 'connected',
    features: ['Bank feeds', 'Reconciliation', 'Multi-currency'],
    users: '35K+',
    rating: '4.7',
    setupTime: '15 minutes'
  },
  {
    id: 6,
    name: 'Shopify',
    category: 'E-commerce',
    logo: "https://img.rocket.new/generatedImages/rocket_gen_img_1f845ed31-1764635346347.png",
    logoAlt: 'Shopify e-commerce platform logo with green shopping bag icon on digital retail background',
    description: 'Connect your Shopify store for automated order processing, inventory management, and payment reconciliation.',
    status: 'available',
    features: ['Order sync', 'Inventory tracking', 'Customer data'],
    users: '52K+',
    rating: '4.9',
    setupTime: '10 minutes'
  },
  {
    id: 7,
    name: 'Salesforce',
    category: 'CRM',
    logo: "https://img.rocket.new/generatedImages/rocket_gen_img_1d247b0d2-1764635344800.png",
    logoAlt: 'Salesforce CRM platform logo with cloud icon and blue branding on corporate technology background',
    description: 'Integrate customer financial data with Salesforce CRM for comprehensive customer insights and automated workflows.',
    status: 'connected',
    features: ['Customer sync', 'Payment history', 'Automated workflows'],
    users: '28K+',
    rating: '4.6',
    setupTime: '25 minutes'
  },
  {
    id: 8,
    name: 'Slack',
    category: 'Communication',
    logo: "https://img.rocket.new/generatedImages/rocket_gen_img_103aa447c-1764658017289.png",
    logoAlt: 'Slack team communication platform logo with colorful hashtag symbol on collaborative workspace background',
    description: 'Receive real-time payment notifications and financial alerts directly in your Slack channels.',
    status: 'available',
    features: ['Real-time alerts', 'Custom notifications', 'Team collaboration'],
    users: '48K+',
    rating: '4.8',
    setupTime: '5 minutes'
  },
  {
    id: 9,
    name: 'Braintree',
    category: 'Payment Gateway',
    logo: "https://img.rocket.new/generatedImages/rocket_gen_img_1319cd744-1764673195622.png",
    logoAlt: 'Braintree payment processing logo with modern fintech design on digital payment background',
    description: 'PayPal-owned payment gateway with advanced fraud protection and support for digital wallets.',
    status: 'coming-soon',
    features: ['Vault payments', 'Fraud tools', 'Digital wallets'],
    users: '32K+',
    rating: '4.7',
    setupTime: '15 minutes'
  },
  {
    id: 10,
    name: 'Authorize.net',
    category: 'Payment Gateway',
    logo: "https://img.rocket.new/generatedImages/rocket_gen_img_104b51d4e-1764676502505.png",
    logoAlt: 'Authorize.net payment gateway logo with secure lock icon on trusted financial services background',
    description: 'Trusted payment gateway with robust security features and support for recurring billing.',
    status: 'available',
    features: ['Recurring billing', 'Fraud detection', 'Customer profiles'],
    users: '30K+',
    rating: '4.6',
    setupTime: '20 minutes'
  },
  {
    id: 11,
    name: 'Zapier',
    category: 'Automation',
    logo: "https://img.rocket.new/generatedImages/rocket_gen_img_127a9f142-1764636340877.png",
    logoAlt: 'Zapier workflow automation platform logo with orange lightning bolt on integration technology background',
    description: 'Connect FinTech Pro with 5,000+ apps through automated workflows and custom integrations.',
    status: 'connected',
    features: ['5000+ apps', 'Custom workflows', 'No-code automation'],
    users: '55K+',
    rating: '4.9',
    setupTime: '10 minutes'
  },
  {
    id: 12,
    name: 'HubSpot',
    category: 'CRM',
    logo: "https://img.rocket.new/generatedImages/rocket_gen_img_1249c84ab-1764648544874.png",
    logoAlt: 'HubSpot marketing and CRM platform logo with orange sprocket icon on business growth background',
    description: 'Sync customer payment data with HubSpot for enhanced marketing automation and customer insights.',
    status: 'available',
    features: ['Contact sync', 'Deal tracking', 'Marketing automation'],
    users: '26K+',
    rating: '4.7',
    setupTime: '15 minutes'
  }];


  const categories = [
  { id: 'all', name: 'All Integrations', icon: 'Grid', count: integrations?.length },
  { id: 'payment', name: 'Payment Gateways', icon: 'CreditCard', count: 6 },
  { id: 'accounting', name: 'Accounting', icon: 'Calculator', count: 2 },
  { id: 'ecommerce', name: 'E-commerce', icon: 'ShoppingCart', count: 1 },
  { id: 'crm', name: 'CRM', icon: 'Users', count: 2 },
  { id: 'automation', name: 'Automation', icon: 'Zap', count: 1 }];


  const stats = [
  {
    icon: 'Puzzle',
    value: '150+',
    label: 'Total Integrations',
    bgColor: 'bg-primary/10',
    iconColor: 'var(--color-primary)',
    trend: '+12%',
    trendIcon: 'TrendingUp',
    trendColor: 'text-success'
  },
  {
    icon: 'CheckCircle2',
    value: '98.9%',
    label: 'Uptime Guarantee',
    bgColor: 'bg-success/10',
    iconColor: 'var(--color-success)',
    trend: '+0.2%',
    trendIcon: 'TrendingUp',
    trendColor: 'text-success'
  },
  {
    icon: 'Zap',
    value: '< 15min',
    label: 'Avg Setup Time',
    bgColor: 'bg-accent/10',
    iconColor: 'var(--color-accent)',
    trend: '-5min',
    trendIcon: 'TrendingDown',
    trendColor: 'text-success'
  },
  {
    icon: 'Users',
    value: '500K+',
    label: 'Active Connections',
    bgColor: 'bg-secondary/10',
    iconColor: 'var(--color-secondary)',
    trend: '+18%',
    trendIcon: 'TrendingUp',
    trendColor: 'text-success'
  }];


  const featuredIntegrations = integrations?.filter((i) =>
  ['Stripe', 'PayPal', 'QuickBooks']?.includes(i?.name)
  );

  const filteredIntegrations = useMemo(() => {
    let filtered = integrations;

    if (activeCategory !== 'all') {
      const categoryMap = {
        payment: 'Payment Gateway',
        accounting: 'Accounting',
        ecommerce: 'E-commerce',
        crm: 'CRM',
        automation: 'Automation'
      };
      filtered = filtered?.filter((i) => i?.category === categoryMap?.[activeCategory]);
    }

    if (searchQuery) {
      filtered = filtered?.filter((i) =>
      i?.name?.toLowerCase()?.includes(searchQuery?.toLowerCase()) ||
      i?.category?.toLowerCase()?.includes(searchQuery?.toLowerCase()) ||
      i?.description?.toLowerCase()?.includes(searchQuery?.toLowerCase())
      );
    }

    const sortFunctions = {
      popular: (a, b) => parseFloat(b?.rating) - parseFloat(a?.rating),
      newest: (a, b) => b?.id - a?.id,
      name: (a, b) => a?.name?.localeCompare(b?.name),
      rating: (a, b) => parseFloat(b?.rating) - parseFloat(a?.rating)
    };

    return filtered?.sort(sortFunctions?.[sortBy] || sortFunctions?.popular);
  }, [activeCategory, searchQuery, sortBy, integrations]);

  const handleConnect = (integration) => {
    console.log('Connecting to:', integration?.name);
  };

  const handleViewDocs = (integration) => {
    console.log('Viewing docs for:', integration?.name);
  };

  return (
    <>

      <div className="min-h-screen bg-background">
        <Header />

        <main className="container mx-auto px-4 py-8">
          <Breadcrumbs />

          <div className="mb-12">
            <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 mb-8">
              <div className="flex-1">
                <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-4">
                  Integration Ecosystem
                </h1>
                <p className="text-lg text-muted-foreground max-w-3xl">
                  Connect FinTech Pro with your favorite tools and payment providers. Build a seamless financial workflow with one-click integrations and real-time data synchronization.
                </p>
              </div>
              <Button variant="default" size="lg" iconName="Plus" iconPosition="left">
                Request Integration
              </Button>
            </div>

            <IntegrationStats stats={stats} />
          </div>

          <div className="mb-12">
            <FeaturedIntegrations
              integrations={featuredIntegrations}
              onConnect={handleConnect} />

          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
            <div className="lg:col-span-2">
              <APIDocumentation />
            </div>
            <div>
              <CompatibilityChecker />
            </div>
          </div>

          <div className="mb-8">
            <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 mb-6">
              <h2 className="text-3xl font-bold text-foreground">All Integrations</h2>
              <SearchBar
                searchQuery={searchQuery}
                onSearchChange={setSearchQuery}
                sortBy={sortBy}
                onSortChange={setSortBy} />

            </div>

            <CategoryFilter
              categories={categories}
              activeCategory={activeCategory}
              onCategoryChange={setActiveCategory} />

          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {filteredIntegrations?.map((integration) =>
            <IntegrationCard
              key={integration?.id}
              integration={integration}
              onConnect={handleConnect}
              onViewDocs={handleViewDocs} />

            )}
          </div>

          {filteredIntegrations?.length === 0 &&
          <div className="text-center py-16">
              <Icon name="Search" size={48} color="var(--color-muted-foreground)" className="mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-foreground mb-2">No integrations found</h3>
              <p className="text-muted-foreground mb-6">
                Try adjusting your search or filter criteria
              </p>
              <Button variant="outline" onClick={() => {setSearchQuery('');setActiveCategory('all');}}>
                Clear Filters
              </Button>
            </div>
          }

          <div className="bg-gradient-to-r from-primary/10 via-secondary/10 to-accent/10 rounded-2xl p-8 lg:p-12 text-center border border-primary/20">
            <Icon name="Lightbulb" size={48} color="var(--color-primary)" className="mx-auto mb-4" />
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Can't find what you're looking for?
            </h2>
            <p className="text-lg text-muted-foreground mb-6 max-w-2xl mx-auto">
              We're constantly adding new integrations. Request a custom integration or suggest a provider you'd like to see supported.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="default" size="lg" iconName="MessageSquare" iconPosition="left">
                Request Integration
              </Button>
              <Button variant="outline" size="lg" iconName="Mail" iconPosition="left">
                Contact Support
              </Button>
            </div>
          </div>
        </main>

        <Footer />
      </div>
    </>);

};

export default IntegrationsHubWrap;