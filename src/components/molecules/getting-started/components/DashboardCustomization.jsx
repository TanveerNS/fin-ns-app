import React, { useState } from 'react';
import Icon from '../../../AppIcon';
import Button from '../../../ui/Button';

const DashboardCustomization = ({ onComplete }) => {
  const [selectedWidgets, setSelectedWidgets] = useState(['revenue', 'expenses', 'cashflow']);

  const availableWidgets = [
    {
      id: 'revenue',
      title: 'Revenue Overview',
      description: 'Track your income streams and growth',
      icon: 'TrendingUp',
      category: 'Financial',
      recommended: true,
    },
    {
      id: 'expenses',
      title: 'Expense Tracking',
      description: 'Monitor spending and cost categories',
      icon: 'TrendingDown',
      category: 'Financial',
      recommended: true,
    },
    {
      id: 'cashflow',
      title: 'Cash Flow',
      description: 'Real-time cash position and forecasts',
      icon: 'DollarSign',
      category: 'Financial',
      recommended: true,
    },
    {
      id: 'invoices',
      title: 'Invoice Status',
      description: 'Track outstanding and paid invoices',
      icon: 'FileText',
      category: 'Operations',
      recommended: false,
    },
    {
      id: 'transactions',
      title: 'Recent Transactions',
      description: 'Latest financial activity feed',
      icon: 'Activity',
      category: 'Operations',
      recommended: false,
    },
    {
      id: 'analytics',
      title: 'Financial Analytics',
      description: 'Advanced metrics and insights',
      icon: 'BarChart3',
      category: 'Analytics',
      recommended: false,
    },
    {
      id: 'goals',
      title: 'Financial Goals',
      description: 'Track progress toward targets',
      icon: 'Target',
      category: 'Planning',
      recommended: false,
    },
    {
      id: 'reports',
      title: 'Quick Reports',
      description: 'Generate financial statements',
      icon: 'PieChart',
      category: 'Analytics',
      recommended: false,
    },
  ];

  const toggleWidget = (id) => {
    setSelectedWidgets((prev) =>
      prev?.includes(id) ? prev?.filter((item) => item !== id) : [...prev, id]
    );
  };

  const handleComplete = () => {
    onComplete(selectedWidgets);
  };

  return (
    <div className="space-y-6">
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-foreground mb-2">Customize Your Dashboard</h2>
        <p className="text-muted-foreground">
          Select the widgets you want to see on your dashboard. You can always change these later.
        </p>
      </div>
      <div className="bg-primary/10 border border-primary/20 rounded-lg p-4 flex items-start gap-3">
        <Icon name="Sparkles" size={20} color="var(--color-primary)" className="flex-shrink-0 mt-0.5" />
        <div>
          <p className="text-sm font-medium text-foreground mb-1">Smart Recommendations</p>
          <p className="text-xs text-muted-foreground">
            We've pre-selected the most popular widgets for your business type. Feel free to customize!
          </p>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {availableWidgets?.map((widget) => {
          const isSelected = selectedWidgets?.includes(widget?.id);

          return (
            <button
              key={widget?.id}
              onClick={() => toggleWidget(widget?.id)}
              className={`relative text-left p-5 rounded-xl border-2 transition-all duration-300 hover:shadow-md ${
                isSelected
                  ? 'border-primary bg-primary/5 shadow-lg'
                  : 'border-border bg-card hover:border-primary/50'
              }`}
            >
              {widget?.recommended && (
                <div className="absolute top-3 right-3">
                  <span className="inline-flex items-center gap-1 px-2 py-1 rounded-full bg-primary/20 text-primary text-xs font-medium">
                    <Icon name="Star" size={12} />
                    Popular
                  </span>
                </div>
              )}
              <div className="flex items-start gap-4 mb-3">
                <div
                  className={`flex-shrink-0 w-12 h-12 rounded-lg flex items-center justify-center transition-colors duration-300 ${
                    isSelected
                      ? 'bg-primary text-primary-foreground'
                      : 'bg-muted text-muted-foreground'
                  }`}
                >
                  <Icon name={widget?.icon} size={24} />
                </div>

                <div className="flex-1 min-w-0">
                  <h3 className="text-base font-semibold text-foreground mb-1">{widget?.title}</h3>
                  <span className="inline-block px-2 py-0.5 rounded text-xs bg-muted text-muted-foreground">
                    {widget?.category}
                  </span>
                </div>
              </div>
              <p className="text-sm text-muted-foreground mb-3">{widget?.description}</p>
              <div
                className={`flex items-center gap-2 text-sm font-medium transition-colors duration-300 ${
                  isSelected ? 'text-primary' : 'text-muted-foreground'
                }`}
              >
                {isSelected ? (
                  <>
                    <Icon name="CheckCircle2" size={16} />
                    <span>Added</span>
                  </>
                ) : (
                  <>
                    <Icon name="Plus" size={16} />
                    <span>Add Widget</span>
                  </>
                )}
              </div>
            </button>
          );
        })}
      </div>
      <div className="bg-card border border-border rounded-xl p-6">
        <h3 className="text-lg font-semibold text-foreground mb-4">Dashboard Preview</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {selectedWidgets?.slice(0, 6)?.map((widgetId) => {
            const widget = availableWidgets?.find((w) => w?.id === widgetId);
            return (
              <div key={widgetId} className="bg-muted rounded-lg p-4 flex items-center gap-3">
                <Icon name={widget?.icon} size={20} color="var(--color-primary)" />
                <span className="text-sm font-medium text-foreground">{widget?.title}</span>
              </div>
            );
          })}
        </div>
        {selectedWidgets?.length > 6 && (
          <p className="text-xs text-muted-foreground mt-3">
            +{selectedWidgets?.length - 6} more widget{selectedWidgets?.length - 6 !== 1 ? 's' : ''}
          </p>
        )}
      </div>
      <div className="flex items-center justify-between pt-6 border-t border-border">
        <p className="text-sm text-muted-foreground">
          {selectedWidgets?.length} widget{selectedWidgets?.length !== 1 ? 's' : ''} selected
        </p>
        <Button
          variant="default"
          onClick={handleComplete}
          disabled={selectedWidgets?.length === 0}
          iconName="ArrowRight"
          iconPosition="right"
        >
          Complete Setup
        </Button>
      </div>
    </div>
  );
};

export default DashboardCustomization;