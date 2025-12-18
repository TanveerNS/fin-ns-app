import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Icon from '../../../AppIcon';
import Image from '../../../AppImage';
import Button from '../../../ui/Button';

const HeroSection = () => {
  const [activeMetric, setActiveMetric] = useState(0);

  const metrics = [
  { value: "$2.4B+", label: "Transactions Processed", icon: "TrendingUp" },
  { value: "15,000+", label: "Growing Businesses", icon: "Users" },
  { value: "99.9%", label: "Platform Uptime", icon: "Shield" },
  { value: "47%", label: "Average ROI Increase", icon: "BarChart3" }];


  const dashboardPreview = {
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_1638d3f29-1764645307453.png",
    alt: "Modern financial dashboard interface showing real-time analytics with colorful charts, revenue graphs, and transaction metrics on clean white background with lime green accent highlights"
  };

  return (
    <section className="relative bg-gradient-to-br from-white via-gray-50 to-green-50 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(154,255,154,0.1),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(139,92,246,0.05),transparent_50%)]" />
      <div className="container mx-auto px-4 py-16 lg:py-24 relative">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full">
              <Icon name="Sparkles" size={16} color="var(--color-primary)" />
              <span className="text-sm font-medium text-primary">Trusted by 15,000+ businesses</span>
            </div>

            <h1 className="text-4xl lg:text-6xl font-bold text-foreground leading-tight">
              Financial Clarity That Drives{' '}
              <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
                Growth Decisions
              </span>
            </h1>

            <p className="text-lg lg:text-xl text-muted-foreground max-w-xl">
              Transform your financial operations with intelligent automation and real-time insights. Built for growth-focused businesses who refuse to settle for basic.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/getting-started">
                <Button variant="default" size="lg" iconName="ArrowRight" iconPosition="right" className="w-full sm:w-auto">
                  Start Free Trial
                </Button>
              </Link>
              <Link to="/platform-overview">
                <Button variant="outline" size="lg" iconName="Play" iconPosition="left" className="w-full sm:w-auto">
                  Watch Demo
                </Button>
              </Link>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-8">
              {metrics?.map((metric, index) =>
              <button
                key={index}
                onClick={() => setActiveMetric(index)}
                className={`p-4 rounded-lg border-2 transition-all duration-300 text-left ${
                activeMetric === index ?
                'border-primary bg-primary/5 shadow-md' :
                'border-border bg-white hover:border-primary/50'}`
                }>

                  <Icon
                  name={metric?.icon}
                  size={24}
                  color={activeMetric === index ? "var(--color-primary)" : "var(--color-muted-foreground)"} />

                  <div className="mt-2">
                    <div className="text-2xl font-bold text-foreground">{metric?.value}</div>
                    <div className="text-xs text-muted-foreground mt-1">{metric?.label}</div>
                  </div>
                </button>
              )}
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-2xl blur-3xl opacity-30" />
            <div className="relative bg-white rounded-2xl shadow-2xl border border-border overflow-hidden">
              <div className="p-4 border-b border-border flex items-center gap-2">
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500" />
                  <div className="w-3 h-3 rounded-full bg-green-500" />
                </div>
                <div className="flex-1 text-center text-sm text-muted-foreground font-medium">
                  Live Dashboard Preview
                </div>
              </div>
              <div className="aspect-video">
                <Image
                  src={dashboardPreview?.image}
                  alt={dashboardPreview?.alt}
                  className="w-full h-full object-cover" />

              </div>
            </div>
          </div>
        </div>
      </div>
    </section>);

};

export default HeroSection;