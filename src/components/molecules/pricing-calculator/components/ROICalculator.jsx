import React, { useState, useEffect } from 'react';
import Icon from '../../../AppIcon';
import Input from '../../../ui/Input';
import Select from '../../../ui/Select';

const ROICalculator = ({ onCalculate }) => {
  const [inputs, setInputs] = useState({
    monthlyRevenue: '50000',
    transactionVolume: '500',
    currentToolsCost: '500',
    teamSize: '5',
    industry: 'ecommerce'
  });

  const [results, setResults] = useState(null);

  const industryOptions = [
    { value: 'ecommerce', label: 'E-commerce' },
    { value: 'saas', label: 'SaaS' },
    { value: 'retail', label: 'Retail' },
    { value: 'services', label: 'Professional Services' },
    { value: 'manufacturing', label: 'Manufacturing' }
  ];

  useEffect(() => {
    calculateROI();
  }, [inputs]);

  const calculateROI = () => {
    const revenue = parseFloat(inputs?.monthlyRevenue) || 0;
    const transactions = parseFloat(inputs?.transactionVolume) || 0;
    const currentCost = parseFloat(inputs?.currentToolsCost) || 0;
    const team = parseFloat(inputs?.teamSize) || 0;

    const platformCost = 299;
    const timeSaved = team * 10;
    const hourlyRate = 50;
    const timeSavingsValue = timeSaved * hourlyRate;
    const efficiencyGain = revenue * 0.05;
    const totalSavings = timeSavingsValue + efficiencyGain + (currentCost - platformCost);
    const roi = ((totalSavings / platformCost) * 100)?.toFixed(0);
    const paybackMonths = (platformCost / (totalSavings / 12))?.toFixed(1);

    setResults({
      monthlySavings: totalSavings?.toFixed(0),
      annualSavings: (totalSavings * 12)?.toFixed(0),
      roi: roi,
      paybackMonths: paybackMonths,
      timeSaved: timeSaved,
      efficiencyGain: efficiencyGain?.toFixed(0)
    });

    if (onCalculate) {
      onCalculate(results);
    }
  };

  const handleInputChange = (field, value) => {
    setInputs(prev => ({ ...prev, [field]: value }));
  };

  return (
    <div className="bg-card rounded-2xl border border-border p-8">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-12 h-12 rounded-xl bg-gradient-growth flex items-center justify-center">
          <Icon name="Calculator" size={24} color="#FFFFFF" strokeWidth={2} />
        </div>
        <div>
          <h3 className="text-xl font-bold text-foreground">ROI Calculator</h3>
          <p className="text-sm text-muted-foreground">Calculate your potential savings</p>
        </div>
      </div>
      <div className="space-y-4 mb-6">
        <Input
          label="Monthly Revenue"
          type="number"
          placeholder="50000"
          value={inputs?.monthlyRevenue}
          onChange={(e) => handleInputChange('monthlyRevenue', e?.target?.value)}
        />

        <Input
          label="Monthly Transactions"
          type="number"
          placeholder="500"
          value={inputs?.transactionVolume}
          onChange={(e) => handleInputChange('transactionVolume', e?.target?.value)}
        />

        <Input
          label="Current Tools Cost ($/month)"
          type="number"
          placeholder="500"
          value={inputs?.currentToolsCost}
          onChange={(e) => handleInputChange('currentToolsCost', e?.target?.value)}
        />

        <Input
          label="Team Size"
          type="number"
          placeholder="5"
          value={inputs?.teamSize}
          onChange={(e) => handleInputChange('teamSize', e?.target?.value)}
        />

        <Select
          label="Industry"
          options={industryOptions}
          value={inputs?.industry}
          onChange={(value) => handleInputChange('industry', value)}
        />
      </div>
      {results && (
        <div className="bg-gradient-to-br from-primary/5 to-secondary/5 rounded-xl p-6 space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-background/50 rounded-lg p-4">
              <p className="text-sm text-muted-foreground mb-1">Monthly Savings</p>
              <p className="text-2xl font-bold text-primary">${results?.monthlySavings}</p>
            </div>
            <div className="bg-background/50 rounded-lg p-4">
              <p className="text-sm text-muted-foreground mb-1">Annual Savings</p>
              <p className="text-2xl font-bold text-primary">${results?.annualSavings}</p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="bg-background/50 rounded-lg p-4">
              <p className="text-sm text-muted-foreground mb-1">ROI</p>
              <p className="text-2xl font-bold text-secondary">{results?.roi}%</p>
            </div>
            <div className="bg-background/50 rounded-lg p-4">
              <p className="text-sm text-muted-foreground mb-1">Payback Period</p>
              <p className="text-2xl font-bold text-accent">{results?.paybackMonths} months</p>
            </div>
          </div>

          <div className="pt-4 border-t border-border space-y-2">
            <div className="flex items-center justify-between text-sm">
              <span className="text-muted-foreground">Time Saved per Month</span>
              <span className="font-semibold text-foreground">{results?.timeSaved} hours</span>
            </div>
            <div className="flex items-center justify-between text-sm">
              <span className="text-muted-foreground">Efficiency Gain</span>
              <span className="font-semibold text-foreground">${results?.efficiencyGain}</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ROICalculator;