import React from 'react';
import { Link } from 'react-router-dom';
import Icon from '../../../AppIcon';
import Image from '../../../AppImage';
import Button from '../../../ui/Button';

const FeaturesSection = () => {
  const features = [
  {
    icon: "BarChart3",
    title: "Real-Time Financial Intelligence",
    description: "Live dashboards with AI-powered insights that turn complex financial data into actionable growth strategies. Monitor cash flow, revenue trends, and profitability metrics in real-time.",
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_1e0209a6b-1764676409002.png",
    imageAlt: "Interactive financial dashboard displaying colorful bar charts, line graphs, and key performance indicators with real-time data updates on modern interface",
    stats: [
    { value: "3x", label: "Faster Reporting" },
    { value: "99.9%", label: "Data Accuracy" }]

  },
  {
    icon: "Zap",
    title: "Intelligent Automation",
    description: "Eliminate manual data entry and reconciliation with smart automation that learns from your business patterns. Save 20+ hours per week on financial operations.",
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_17e90eb99-1764658951254.png",
    imageAlt: "Automated workflow visualization showing connected nodes and processes with lightning bolt symbols indicating speed and efficiency on digital interface",
    stats: [
    { value: "20+", label: "Hours Saved/Week" },
    { value: "95%", label: "Error Reduction" }]

  },
  {
    icon: "Shield",
    title: "Enterprise-Grade Security",
    description: "Bank-level encryption, SOC 2 Type II compliance, and multi-factor authentication protect your financial data. Trusted by businesses processing billions in transactions.",
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_1d95e33a9-1764665082646.png",
    imageAlt: "Digital security shield icon with lock symbol surrounded by encrypted data streams and security verification badges on dark professional background",
    stats: [
    { value: "256-bit", label: "Encryption" },
    { value: "100%", label: "Compliance" }]

  }];


  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-secondary/10 rounded-full mb-4">
            <Icon name="Sparkles" size={16} color="var(--color-secondary)" />
            <span className="text-sm font-medium text-secondary">Platform Capabilities</span>
          </div>
          <h2 className="text-3xl lg:text-5xl font-bold text-foreground mb-4">
            Your Business Intelligence, Amplified
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Transform financial complexity into competitive advantage with intelligent tools designed for growth-focused businesses.
          </p>
        </div>

        <div className="space-y-24">
          {features?.map((feature, index) =>
          <div
            key={index}
            className={`grid lg:grid-cols-2 gap-12 items-center ${
            index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`
            }>

              <div className={`space-y-6 ${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                  <Icon name={feature?.icon} size={32} color="#FFFFFF" />
                </div>
                
                <h3 className="text-2xl lg:text-3xl font-bold text-foreground">
                  {feature?.title}
                </h3>
                
                <p className="text-lg text-muted-foreground leading-relaxed">
                  {feature?.description}
                </p>

                <div className="flex gap-6 pt-4">
                  {feature?.stats?.map((stat, statIndex) =>
                <div key={statIndex} className="space-y-1">
                      <div className="text-3xl font-bold text-primary">{stat?.value}</div>
                      <div className="text-sm text-muted-foreground">{stat?.label}</div>
                    </div>
                )}
                </div>

                <Link to="/platform-overview">
                  <Button variant="outline" iconName="ArrowRight" iconPosition="right">
                    Learn More
                  </Button>
                </Link>
              </div>

              <div className={`relative ${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                <div className="absolute -inset-4 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-2xl blur-2xl" />
                <div className="relative bg-white rounded-2xl shadow-xl border border-border overflow-hidden">
                  <div className="aspect-video">
                    <Image
                    src={feature?.image}
                    alt={feature?.imageAlt}
                    className="w-full h-full object-cover" />

                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>);

};

export default FeaturesSection;