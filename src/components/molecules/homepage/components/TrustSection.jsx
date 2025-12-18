import React from 'react';
import Image from '../../../AppImage';

const TrustSection = () => {
  const partners = [
  {
    name: "Stripe",
    logo: "https://img.rocket.new/generatedImages/rocket_gen_img_1319cd744-1764673195622.png",
    alt: "Stripe payment processing logo with purple and white branding on clean background"
  },
  {
    name: "PayPal",
    logo: "https://img.rocket.new/generatedImages/rocket_gen_img_183a97958-1764662429680.png",
    alt: "PayPal digital payment platform logo featuring blue branding and recognizable design"
  },
  {
    name: "Square",
    logo: "https://img.rocket.new/generatedImages/rocket_gen_img_154c3d283-1764673194112.png",
    alt: "Square financial services logo with distinctive geometric design and modern styling"
  },
  {
    name: "Plaid",
    logo: "https://img.rocket.new/generatedImages/rocket_gen_img_17e3efb5f-1765906951249.png",
    alt: "Plaid financial technology logo with contemporary design and professional appearance"
  },
  {
    name: "QuickBooks",
    logo: "https://img.rocket.new/generatedImages/rocket_gen_img_1c51b1c2f-1764653657207.png",
    alt: "QuickBooks accounting software logo with green branding and trusted business appearance"
  },
  {
    name: "Xero",
    logo: "https://img.rocket.new/generatedImages/rocket_gen_img_1498399a5-1764677122615.png",
    alt: "Xero cloud accounting platform logo with blue branding and modern professional design"
  }];


  const certifications = [
  { icon: "Shield", label: "SOC 2 Type II" },
  { icon: "Lock", label: "PCI DSS Level 1" },
  { icon: "CheckCircle", label: "GDPR Compliant" },
  { icon: "Award", label: "ISO 27001" }];


  return (
    <section className="py-16 bg-card border-y border-border">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <p className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-4">
            Trusted by Industry Leaders
          </p>
          <h2 className="text-2xl lg:text-3xl font-bold text-foreground">
            Seamlessly Integrated with Your Favorite Tools
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 mb-16">
          {partners?.map((partner, index) =>
          <div
            key={index}
            className="flex items-center justify-center p-6 bg-white rounded-lg border border-border hover:border-primary/50 hover:shadow-md transition-all duration-300">

              <Image
              src={partner?.logo}
              alt={partner?.alt}
              className="w-full h-12 object-contain grayscale hover:grayscale-0 transition-all duration-300" />

            </div>
          )}
        </div>

        <div className="flex flex-wrap items-center justify-center gap-6">
          {certifications?.map((cert, index) =>
          <div
            key={index}
            className="flex items-center gap-2 px-4 py-2 bg-white rounded-lg border border-border">

              <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                <span className="text-primary text-xs font-bold">✓</span>
              </div>
              <span className="text-sm font-medium text-foreground">{cert?.label}</span>
            </div>
          )}
        </div>
      </div>
    </section>);

};

export default TrustSection;