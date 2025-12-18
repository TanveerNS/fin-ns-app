import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Icon from '../../../AppIcon';
import Button from '../../../ui/Button';
import Input from '../../../ui/Input';

const ROICalculator = () => {
  const [monthlyRevenue, setMonthlyRevenue] = useState(100000);
  const [hoursSpent, setHoursSpent] = useState(40);
  const [hourlyRate, setHourlyRate] = useState(50);
  const [results, setResults] = useState({
    timeSaved: 0,
    costSaved: 0,
    roiPercentage: 0,
    paybackMonths: 0
  });

  useEffect(() => {
    const timeSavedPerMonth = hoursSpent * 0.5;
    const costSavedPerMonth = timeSavedPerMonth * hourlyRate;
    const platformCost = 299;
    const roiPercentage = ((costSavedPerMonth - platformCost) / platformCost) * 100;
    const paybackMonths = platformCost / costSavedPerMonth;

    setResults({
      timeSaved: timeSavedPerMonth,
      costSaved: costSavedPerMonth,
      roiPercentage: Math.max(roiPercentage, 0),
      paybackMonths: Math.max(paybackMonths, 0.1)
    });
  }, [monthlyRevenue, hoursSpent, hourlyRate]);

  const formatCurrency = (value) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    })?.format(value);
  };

  return (
    <section className="py-20 bg-gradient-to-br from-primary/5 via-secondary/5 to-accent/5">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent/10 rounded-full mb-4">
              <Icon name="Calculator" size={16} color="var(--color-accent)" />
              <span className="text-sm font-medium text-accent">ROI Calculator</span>
            </div>
            <h2 className="text-3xl lg:text-5xl font-bold text-foreground mb-4">
              Calculate Your Potential Savings
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              See how much time and money you could save by automating your financial operations with FinTech Pro.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            <div className="bg-white rounded-2xl shadow-xl border border-border p-8 space-y-6">
              <h3 className="text-xl font-bold text-foreground mb-6">Your Business Metrics</h3>

              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Monthly Revenue
                  </label>
                  <Input
                    type="number"
                    value={monthlyRevenue}
                    onChange={(e) => setMonthlyRevenue(Number(e?.target?.value))}
                    min={0}
                    step={10000}
                  />
                  <input
                    type="range"
                    min={10000}
                    max={1000000}
                    step={10000}
                    value={monthlyRevenue}
                    onChange={(e) => setMonthlyRevenue(Number(e?.target?.value))}
                    className="w-full mt-2"
                  />
                  <div className="text-sm text-muted-foreground mt-1">
                    {formatCurrency(monthlyRevenue)}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Hours Spent on Financial Tasks (per month)
                  </label>
                  <Input
                    type="number"
                    value={hoursSpent}
                    onChange={(e) => setHoursSpent(Number(e?.target?.value))}
                    min={0}
                    step={5}
                  />
                  <input
                    type="range"
                    min={5}
                    max={200}
                    step={5}
                    value={hoursSpent}
                    onChange={(e) => setHoursSpent(Number(e?.target?.value))}
                    className="w-full mt-2"
                  />
                  <div className="text-sm text-muted-foreground mt-1">
                    {hoursSpent} hours
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Average Hourly Rate
                  </label>
                  <Input
                    type="number"
                    value={hourlyRate}
                    onChange={(e) => setHourlyRate(Number(e?.target?.value))}
                    min={0}
                    step={5}
                  />
                  <input
                    type="range"
                    min={20}
                    max={200}
                    step={5}
                    value={hourlyRate}
                    onChange={(e) => setHourlyRate(Number(e?.target?.value))}
                    className="w-full mt-2"
                  />
                  <div className="text-sm text-muted-foreground mt-1">
                    {formatCurrency(hourlyRate)}/hour
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-primary to-secondary rounded-2xl shadow-xl p-8 text-white space-y-6">
              <h3 className="text-xl font-bold mb-6">Your Potential Savings</h3>

              <div className="space-y-6">
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                  <div className="flex items-center gap-3 mb-2">
                    <Icon name="Clock" size={24} color="#FFFFFF" />
                    <span className="text-sm opacity-90">Time Saved Per Month</span>
                  </div>
                  <div className="text-4xl font-bold">{results?.timeSaved?.toFixed(0)} hours</div>
                </div>

                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                  <div className="flex items-center gap-3 mb-2">
                    <Icon name="DollarSign" size={24} color="#FFFFFF" />
                    <span className="text-sm opacity-90">Cost Saved Per Month</span>
                  </div>
                  <div className="text-4xl font-bold">{formatCurrency(results?.costSaved)}</div>
                </div>

                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                  <div className="flex items-center gap-3 mb-2">
                    <Icon name="TrendingUp" size={24} color="#FFFFFF" />
                    <span className="text-sm opacity-90">ROI Percentage</span>
                  </div>
                  <div className="text-4xl font-bold">{results?.roiPercentage?.toFixed(0)}%</div>
                </div>

                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                  <div className="flex items-center gap-3 mb-2">
                    <Icon name="Calendar" size={24} color="#FFFFFF" />
                    <span className="text-sm opacity-90">Payback Period</span>
                  </div>
                  <div className="text-4xl font-bold">{results?.paybackMonths?.toFixed(1)} months</div>
                </div>
              </div>

              <Link to="/pricing-calculator" className="block mt-6">
                <Button variant="outline" fullWidth className="bg-white text-primary hover:bg-white/90">
                  View Detailed Pricing
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ROICalculator;