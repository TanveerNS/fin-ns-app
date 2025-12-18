import React, { useState } from 'react';
import Icon from '../../../AppIcon';
import Button from '../../../ui/Button';

const InteractiveDemo = () => {
  const [activeTab, setActiveTab] = useState('dashboard');

  const demoTabs = [
    { id: 'dashboard', label: 'Dashboard', icon: 'LayoutDashboard' },
    { id: 'analytics', label: 'Analytics', icon: 'BarChart3' },
    { id: 'reports', label: 'Reports', icon: 'FileText' },
    { id: 'automation', label: 'Automation', icon: 'Zap' }
  ];

  const demoData = {
    dashboard: {
      title: 'Financial Command Center',
      description: 'Your complete financial overview in one intelligent dashboard',
      metrics: [
        { label: 'Monthly Revenue', value: '$847,392', change: '+12.5%', trend: 'up' },
        { label: 'Operating Expenses', value: '$423,156', change: '-3.2%', trend: 'down' },
        { label: 'Net Profit Margin', value: '32.4%', change: '+2.1%', trend: 'up' },
        { label: 'Cash Position', value: '$1.2M', change: '+8.7%', trend: 'up' }
      ]
    },
    analytics: {
      title: 'Predictive Intelligence',
      description: 'AI-powered insights that drive strategic decisions',
      metrics: [
        { label: 'Revenue Forecast', value: '$9.8M', change: '+15.3%', trend: 'up' },
        { label: 'Customer LTV', value: '$12,450', change: '+7.8%', trend: 'up' },
        { label: 'Churn Risk', value: '2.3%', change: '-1.2%', trend: 'down' },
        { label: 'Growth Rate', value: '23.5%', change: '+4.2%', trend: 'up' }
      ]
    },
    reports: {
      title: 'Automated Reporting',
      description: 'Generate comprehensive financial reports in seconds',
      metrics: [
        { label: 'P&L Reports', value: '156', change: 'Generated', trend: 'neutral' },
        { label: 'Tax Documents', value: '89', change: 'Prepared', trend: 'neutral' },
        { label: 'Audit Trails', value: '100%', change: 'Complete', trend: 'up' },
        { label: 'Compliance Score', value: '98.5%', change: 'Excellent', trend: 'up' }
      ]
    },
    automation: {
      title: 'Workflow Automation',
      description: 'Eliminate manual tasks and accelerate operations',
      metrics: [
        { label: 'Time Saved', value: '847 hrs', change: 'This Month', trend: 'up' },
        { label: 'Auto-Reconciled', value: '12,450', change: 'Transactions', trend: 'up' },
        { label: 'Error Reduction', value: '94.2%', change: 'Improvement', trend: 'up' },
        { label: 'Active Rules', value: '67', change: 'Running', trend: 'neutral' }
      ]
    }
  };

  const currentDemo = demoData?.[activeTab];

  return (
    <section className="py-16 lg:py-24 bg-card">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-5xl font-bold text-foreground mb-4">
            Experience The Platform
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Interactive demo showcasing real platform capabilities
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="flex flex-wrap gap-2 mb-8 justify-center">
            {demoTabs?.map((tab) => (
              <button
                key={tab?.id}
                onClick={() => setActiveTab(tab?.id)}
                className={`flex items-center gap-2 px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                  activeTab === tab?.id
                    ? 'bg-primary text-white shadow-lg'
                    : 'bg-background text-foreground hover:bg-muted'
                }`}
              >
                <Icon name={tab?.icon} size={18} />
                <span>{tab?.label}</span>
              </button>
            ))}
          </div>

          <div className="bg-background rounded-2xl shadow-xl border border-border overflow-hidden">
            <div className="p-8 lg:p-12">
              <div className="mb-8">
                <h3 className="text-2xl lg:text-3xl font-bold text-foreground mb-3">
                  {currentDemo?.title}
                </h3>
                <p className="text-muted-foreground">
                  {currentDemo?.description}
                </p>
              </div>

              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                {currentDemo?.metrics?.map((metric, index) => (
                  <div key={index} className="p-6 rounded-xl bg-card border border-border hover:shadow-lg transition-shadow duration-300">
                    <div className="text-sm text-muted-foreground mb-2">{metric?.label}</div>
                    <div className="text-3xl font-bold text-foreground mb-2">{metric?.value}</div>
                    <div className={`flex items-center gap-1 text-sm font-medium ${
                      metric?.trend === 'up' ? 'text-success' : 
                      metric?.trend === 'down'? 'text-error' : 'text-muted-foreground'
                    }`}>
                      {metric?.trend === 'up' && <Icon name="TrendingUp" size={14} />}
                      {metric?.trend === 'down' && <Icon name="TrendingDown" size={14} />}
                      <span>{metric?.change}</span>
                    </div>
                  </div>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="default" size="lg" iconName="Play" iconPosition="left">
                  Start Interactive Tour
                </Button>
                <Button variant="outline" size="lg" iconName="Download" iconPosition="left">
                  Download Feature Guide
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InteractiveDemo;