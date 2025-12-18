import React, { useState, useEffect } from 'react';
import Header from '../../ui/Header';
import Footer from '../../ui/Footer';
import Breadcrumbs from '../../ui/Breadcrumbs';
import Icon from '../../AppIcon';
import Button from '../../ui/Button';
import PricingCard from './components/PricingCard';
import ROICalculator from './components/ROICalculator';
import FeatureComparison from './components/FeatureComparison';
import FAQSection from './components/FAQSection';
import TestimonialCard from './components/TestimonialCard';
import AddOnCard from './components/AddOnCard';

const PricingCalculatorWrap = () => {
  const [billingCycle, setBillingCycle] = useState('monthly');
  const [selectedPlan, setSelectedPlan] = useState('professional');
  const [selectedAddons, setSelectedAddons] = useState([]);
  const [totalCost, setTotalCost] = useState(0);

  const pricingPlans = [
  {
    id: 'starter',
    name: 'Starter',
    description: 'Perfect for small businesses getting started',
    price: 99,
    annualPrice: 950,
    features: [
    'Up to 100 transactions per month',
    'Basic dashboard analytics',
    '3 payment integrations',
    '2 team members',
    'Email support',
    'Mobile app access',
    'Basic reporting',
    'SSL encryption'],

    limits: [
    { label: 'Transactions', value: '100/month' },
    { label: 'Team Members', value: '2' },
    { label: 'Integrations', value: '3' }]

  },
  {
    id: 'professional',
    name: 'Professional',
    description: 'For growing businesses with advanced needs',
    price: 299,
    annualPrice: 2870,
    features: [
    'Up to 1,000 transactions per month',
    'Advanced analytics & insights',
    '10 payment integrations',
    '10 team members',
    'Priority email & chat support',
    'Custom reporting',
    'API access',
    'Role-based permissions',
    'Automated workflows',
    'Real-time notifications'],

    limits: [
    { label: 'Transactions', value: '1,000/month' },
    { label: 'Team Members', value: '10' },
    { label: 'Integrations', value: '10' }]

  },
  {
    id: 'enterprise',
    name: 'Enterprise',
    description: 'Custom solutions for large organizations',
    price: 999,
    annualPrice: 9590,
    features: [
    'Unlimited transactions',
    'Enterprise-grade analytics',
    'Unlimited integrations',
    'Unlimited team members',
    '24/7 phone & email support',
    'Dedicated account manager',
    'Custom API development',
    'Advanced security features',
    'SLA guarantees',
    'White-label options',
    'Custom training',
    'Priority feature requests'],

    limits: [
    { label: 'Transactions', value: 'Unlimited' },
    { label: 'Team Members', value: 'Unlimited' },
    { label: 'Integrations', value: 'Unlimited' }]

  }];


  const addons = [
  {
    id: 'advanced-analytics',
    name: 'Advanced Analytics',
    description: 'Deep insights and custom dashboards',
    icon: 'BarChart3',
    price: 49,
    features: [
    'Custom dashboard builder',
    'Predictive analytics',
    'Export to all formats',
    'Scheduled reports']

  },
  {
    id: 'premium-support',
    name: 'Premium Support',
    description: '24/7 priority support with 1-hour SLA',
    icon: 'Headphones',
    price: 99,
    features: [
    '24/7 phone support',
    '1-hour response time',
    'Dedicated support engineer',
    'Monthly strategy calls']

  },
  {
    id: 'compliance-pack',
    name: 'Compliance Pack',
    description: 'Enhanced security and compliance features',
    icon: 'Shield',
    price: 149,
    features: [
    'SOC 2 Type II compliance',
    'Advanced audit logs',
    'Custom data retention',
    'Compliance reporting']

  },
  {
    id: 'white-label',
    name: 'White Label',
    description: 'Brand the platform as your own',
    icon: 'Palette',
    price: 199,
    features: [
    'Custom branding',
    'Custom domain',
    'Remove FinTech Pro branding',
    'Custom email templates']

  }];


  const testimonials = [
  {
    name: 'Sarah Mitchell',
    role: 'CFO',
    company: 'TechFlow Solutions',
    avatar: "https://img.rocket.new/generatedImages/rocket_gen_img_1ffde516e-1763293580273.png",
    avatarAlt: 'Professional woman with blonde hair in navy blazer smiling at camera in modern office',
    quote: 'Switching to FinTech Pro reduced our financial operations costs by 40% while improving accuracy. The ROI calculator helped us justify the investment to our board.',
    metrics: [
    { value: '40%', label: 'Cost Reduction' },
    { value: '3 months', label: 'Payback Period' }]

  },
  {
    name: 'Michael Chen',
    role: 'Founder & CEO',
    company: 'GrowthMetrics Inc',
    avatar: "https://img.rocket.new/generatedImages/rocket_gen_img_13a7a0e93-1763294048707.png",
    avatarAlt: 'Asian businessman with short black hair in gray suit smiling confidently in corporate setting',
    quote: 'The Professional plan gave us everything we needed to scale from 50 to 500 transactions per month. The pricing is transparent and the value is incredible.',
    metrics: [
    { value: '10x', label: 'Transaction Growth' },
    { value: '$50K', label: 'Annual Savings' }]

  },
  {
    name: 'Jennifer Rodriguez',
    role: 'Operations Director',
    company: 'RetailHub',
    avatar: "https://img.rocket.new/generatedImages/rocket_gen_img_1c0f48e8d-1763295027844.png",
    avatarAlt: 'Hispanic woman with long dark hair in professional attire smiling warmly in bright office space',
    quote: 'The feature comparison matrix made it easy to choose the right plan. We started with Starter and upgraded to Professional as we grew - seamless transition.',
    metrics: [
    { value: '15 hours', label: 'Time Saved/Week' },
    { value: '99.9%', label: 'Uptime' }]

  }];


  useEffect(() => {
    calculateTotalCost();
  }, [selectedPlan, billingCycle, selectedAddons]);

  const calculateTotalCost = () => {
    const plan = pricingPlans?.find((p) => p?.id === selectedPlan);
    if (!plan) return;

    const planCost = billingCycle === 'annual' ? plan?.annualPrice / 12 : plan?.price;
    const addonsCost = selectedAddons?.reduce((total, addonId) => {
      const addon = addons?.find((a) => a?.id === addonId);
      return total + (addon ? addon?.price : 0);
    }, 0);

    setTotalCost(planCost + addonsCost);
  };

  const handleAddonToggle = (addonId) => {
    setSelectedAddons((prev) =>
    prev?.includes(addonId) ?
    prev?.filter((id) => id !== addonId) :
    [...prev, addonId]
    );
  };

  const handlePlanSelect = (planId) => {
    setSelectedPlan(planId);
  };

  return (
    <>

      <Header />
      <main className="bg-background min-h-screen">
        <div className="container mx-auto px-4 py-8">
          <Breadcrumbs />

          <section className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full mb-6">
              <Icon name="Sparkles" size={20} color="var(--color-primary)" />
              <span className="text-sm font-semibold text-primary">Transparent Pricing</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Choose Your Growth Plan
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              Simple, transparent pricing that scales with your business. No hidden fees, no surprises. Calculate your ROI and see the value before you commit.
            </p>

            <div className="flex items-center justify-center gap-4 mb-8">
              <button
                onClick={() => setBillingCycle('monthly')}
                className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                billingCycle === 'monthly' ? 'bg-primary text-white shadow-brand' : 'bg-muted text-muted-foreground hover:bg-muted/80'}`
                }>

                Monthly
              </button>
              <button
                onClick={() => setBillingCycle('annual')}
                className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                billingCycle === 'annual' ? 'bg-primary text-white shadow-brand' : 'bg-muted text-muted-foreground hover:bg-muted/80'}`
                }>

                Annual
                <span className="ml-2 px-2 py-1 bg-success/20 text-success text-xs rounded-full">
                  Save 20%
                </span>
              </button>
            </div>
          </section>

          <section className="mb-16">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {pricingPlans?.map((plan, index) =>
              <PricingCard
                key={plan?.id}
                plan={plan}
                isPopular={index === 1}
                onSelect={handlePlanSelect}
                selectedPlan={selectedPlan} />

              )}
            </div>
          </section>

          <section className="mb-16">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <ROICalculator onCalculate={(roi) => console.log('ROI calculated:', roi)} />
              
              <div className="bg-gradient-to-br from-primary/5 to-secondary/5 rounded-2xl p-8 flex flex-col justify-center">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-gradient-growth flex items-center justify-center">
                    <Icon name="TrendingUp" size={24} color="#FFFFFF" strokeWidth={2} />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground">Your Investment Summary</h3>
                </div>

                <div className="space-y-6">
                  <div className="bg-background rounded-xl p-6">
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-muted-foreground">Selected Plan</span>
                      <span className="font-semibold text-foreground capitalize">{selectedPlan}</span>
                    </div>
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-muted-foreground">Billing Cycle</span>
                      <span className="font-semibold text-foreground capitalize">{billingCycle}</span>
                    </div>
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-muted-foreground">Add-ons</span>
                      <span className="font-semibold text-foreground">{selectedAddons?.length}</span>
                    </div>
                    <div className="pt-4 border-t border-border flex items-center justify-between">
                      <span className="text-lg font-semibold text-foreground">Total Monthly Cost</span>
                      <span className="text-3xl font-bold text-primary">${totalCost?.toFixed(2)}</span>
                    </div>
                  </div>

                  <Button variant="default" fullWidth iconName="ArrowRight" iconPosition="right">
                    Start Free Trial
                  </Button>

                  <div className="flex items-center justify-center gap-6 text-sm text-muted-foreground">
                    <div className="flex items-center gap-2">
                      <Icon name="Check" size={16} color="var(--color-primary)" />
                      <span>14-day free trial</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Icon name="Check" size={16} color="var(--color-primary)" />
                      <span>No credit card required</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="mb-16">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-4">Enhance Your Plan</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Add powerful features to customize your experience and unlock additional capabilities
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {addons?.map((addon) =>
              <AddOnCard
                key={addon?.id}
                addon={addon}
                onToggle={handleAddonToggle}
                isSelected={selectedAddons?.includes(addon?.id)} />

              )}
            </div>
          </section>

          <section className="mb-16">
            <FeatureComparison plans={pricingPlans} />
          </section>

          <section className="mb-16">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-4">What Our Customers Say</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                See how businesses like yours are achieving incredible ROI with FinTech Pro
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {testimonials?.map((testimonial, index) =>
              <TestimonialCard key={index} testimonial={testimonial} />
              )}
            </div>
          </section>

          <section className="mb-16">
            <FAQSection />
          </section>

          <section className="bg-gradient-to-br from-primary/10 to-secondary/10 rounded-3xl p-12 text-center">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold text-foreground mb-4">
                Still Have Questions?
              </h2>
              <p className="text-muted-foreground mb-8">
                Our team is here to help you choose the perfect plan for your business needs. Schedule a personalized demo or speak with our pricing specialists.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Button variant="default" iconName="Calendar" iconPosition="left">
                  Schedule Demo
                </Button>
                <Button variant="outline" iconName="MessageCircle" iconPosition="left">
                  Chat with Sales
                </Button>
              </div>
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </>);

};

export default PricingCalculatorWrap;