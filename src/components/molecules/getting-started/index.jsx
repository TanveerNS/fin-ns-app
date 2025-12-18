import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Icon from '../../AppIcon';
import Button from '../../ui/Button';
import Header from '../../ui/Header';
import Footer from '../../ui/Footer';
import Breadcrumbs from '../../ui/Breadcrumbs';
import ProgressIndicator from './components/ProgressIndicator';
import BusinessTypeSelector from './components/BusinessTypeSelector';
import IntegrationSetup from './components/IntegrationSetup';
import DataImportWizard from './components/DataImportWizard';
import DashboardCustomization from './components/DashboardCustomization';
import QuickWinCard from './components/QuickWinCard';
import SupportResources from './components/SupportResources';

const GettingStartedWrap = () => {
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState(0);
  const [setupData, setSetupData] = useState({
    businessType: '',
    integrations: [],
    importMethod: '',
    widgets: [],
  });
  const [isComplete, setIsComplete] = useState(false);

  const steps = [
    {
      id: 'business-type',
      title: 'Business Type',
      description: 'Tell us about your business',
    },
    {
      id: 'integrations',
      title: 'Connect Tools',
      description: 'Set up your integrations',
    },
    {
      id: 'data-import',
      title: 'Import Data',
      description: 'Bring in your financial data',
    },
    {
      id: 'customize',
      title: 'Customize Dashboard',
      description: 'Personalize your experience',
    },
  ];

  const quickWins = [
    {
      id: 'first-transaction',
      title: 'Record Your First Transaction',
      description: 'Add a sample transaction to see how the platform works',
      icon: 'DollarSign',
      action: 'Add Transaction',
      completed: false,
    },
    {
      id: 'invite-team',
      title: 'Invite Team Members',
      description: 'Collaborate with your team on financial management',
      icon: 'UserPlus',
      action: 'Invite Team',
      completed: false,
    },
    {
      id: 'explore-reports',
      title: 'Explore Financial Reports',
      description: 'See the insights available in your dashboard',
      icon: 'BarChart3',
      action: 'View Reports',
      completed: false,
    },
  ];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentStep]);

  const handleBusinessTypeSelect = (type) => {
    setSetupData((prev) => ({ ...prev, businessType: type }));
    setTimeout(() => {
      setCurrentStep(1);
    }, 500);
  };

  const handleIntegrationsComplete = (integrations) => {
    setSetupData((prev) => ({ ...prev, integrations }));
    setCurrentStep(2);
  };

  const handleDataImportComplete = (method) => {
    setSetupData((prev) => ({ ...prev, importMethod: method }));
    setCurrentStep(3);
  };

  const handleDashboardComplete = (widgets) => {
    setSetupData((prev) => ({ ...prev, widgets }));
    setIsComplete(true);
  };

  const handleFinishSetup = () => {
    navigate('/homepage');
  };

  const renderStepContent = () => {
    switch (currentStep) {
      case 0:
        return (
          <BusinessTypeSelector
            selectedType={setupData?.businessType}
            onSelect={handleBusinessTypeSelect}
          />
        );
      case 1:
        return <IntegrationSetup onComplete={handleIntegrationsComplete} />;
      case 2:
        return <DataImportWizard onComplete={handleDataImportComplete} />;
      case 3:
        return <DashboardCustomization onComplete={handleDashboardComplete} />;
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <Breadcrumbs />

        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-growth mb-4">
              <Icon name="Rocket" size={32} color="#FFFFFF" strokeWidth={2.5} />
            </div>
            <h1 className="text-4xl font-bold text-foreground mb-4">Welcome to FinTech Pro</h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Let's get you set up in just a few minutes. We'll guide you through connecting your tools and customizing your experience.
            </p>
          </div>

          {!isComplete ? (
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
              <div className="lg:col-span-4">
                <ProgressIndicator
                  currentStep={currentStep}
                  totalSteps={steps?.length}
                  steps={steps}
                />

                <div className="mt-6">
                  <SupportResources />
                </div>
              </div>

              <div className="lg:col-span-8">
                <div className="bg-card border border-border rounded-xl p-8 shadow-sm">
                  {renderStepContent()}
                </div>

                {currentStep > 0 && (
                  <div className="mt-6 flex justify-start">
                    <Button
                      variant="ghost"
                      onClick={() => setCurrentStep((prev) => prev - 1)}
                      iconName="ArrowLeft"
                      iconPosition="left"
                    >
                      Back
                    </Button>
                  </div>
                )}
              </div>
            </div>
          ) : (
            <div className="max-w-4xl mx-auto">
              <div className="bg-gradient-growth rounded-2xl p-12 text-center mb-8">
                <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-white/20 backdrop-blur-sm mb-6">
                  <Icon name="CheckCircle2" size={48} color="#FFFFFF" strokeWidth={2.5} />
                </div>
                <h2 className="text-3xl font-bold text-white mb-4">Setup Complete!</h2>
                <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
                  Your FinTech Pro account is ready to go. Here are some quick wins to help you get the most out of the platform.
                </p>
                <Button
                  variant="secondary"
                  size="lg"
                  onClick={handleFinishSetup}
                  iconName="ArrowRight"
                  iconPosition="right"
                >
                  Go to Dashboard
                </Button>
              </div>

              <div className="mb-8">
                <h3 className="text-2xl font-bold text-foreground mb-6">Quick Wins to Get Started</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {quickWins?.map((win) => (
                    <QuickWinCard
                      key={win?.id}
                      title={win?.title}
                      description={win?.description}
                      icon={win?.icon}
                      action={win?.action}
                      completed={win?.completed}
                      onAction={() => console.log(`Action: ${win?.id}`)}
                    />
                  ))}
                </div>
              </div>

              <div className="bg-card border border-border rounded-xl p-8">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                    <Icon name="Lightbulb" size={24} color="var(--color-primary)" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-foreground mb-2">Pro Tip</h3>
                    <p className="text-sm text-muted-foreground mb-4">
                      Take advantage of our interactive tutorials to learn advanced features. You can access them anytime from the help menu in your dashboard.
                    </p>
                    <Button variant="outline" size="sm" iconName="BookOpen" iconPosition="left">
                      View Tutorials
                    </Button>
                  </div>
                </div>
              </div>

              <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-card border border-border rounded-xl p-6 text-center">
                  <Icon name="Zap" size={32} color="var(--color-primary)" className="mx-auto mb-3" />
                  <h4 className="text-lg font-semibold text-foreground mb-2">Fast Setup</h4>
                  <p className="text-sm text-muted-foreground">
                    Average setup time: 5 minutes
                  </p>
                </div>

                <div className="bg-card border border-border rounded-xl p-6 text-center">
                  <Icon name="Shield" size={32} color="var(--color-primary)" className="mx-auto mb-3" />
                  <h4 className="text-lg font-semibold text-foreground mb-2">Bank-Level Security</h4>
                  <p className="text-sm text-muted-foreground">
                    Your data is encrypted and secure
                  </p>
                </div>

                <div className="bg-card border border-border rounded-xl p-6 text-center">
                  <Icon name="HeadphonesIcon" size={32} color="var(--color-primary)" className="mx-auto mb-3" />
                  <h4 className="text-lg font-semibold text-foreground mb-2">24/7 Support</h4>
                  <p className="text-sm text-muted-foreground">
                    We're here whenever you need help
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default GettingStartedWrap;