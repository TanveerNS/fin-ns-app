import React from 'react';
import Icon from '../../../AppIcon';
import Image from '../../../AppImage';

const ComplianceCertifications = () => {
  const certifications = [
  {
    id: 1,
    name: "SOC 2 Type II",
    description: "Annual third-party audits verify our security controls and data protection practices meet the highest industry standards.",
    icon: "ShieldCheck",
    badge: "https://img.rocket.new/generatedImages/rocket_gen_img_1a8098a6b-1764655584180.png",
    badgeAlt: "Official SOC 2 Type II compliance certification badge with blue shield icon and security verification seal",
    status: "Active",
    lastAudit: "November 2024",
    nextAudit: "November 2025"
  },
  {
    id: 2,
    name: "PCI DSS Level 1",
    description: "Highest level of payment card industry compliance ensuring secure processing, storage, and transmission of cardholder data.",
    icon: "CreditCard",
    badge: "https://img.rocket.new/generatedImages/rocket_gen_img_10c389b41-1764672208077.png",
    badgeAlt: "PCI DSS Level 1 certification badge showing credit card security compliance with official payment card industry seal",
    status: "Active",
    lastAudit: "October 2024",
    nextAudit: "October 2025"
  },
  {
    id: 3,
    name: "GDPR Compliant",
    description: "Full compliance with European data protection regulations including data privacy, user rights, and cross-border data transfers.",
    icon: "Globe",
    badge: "https://img.rocket.new/generatedImages/rocket_gen_img_1803b52d2-1764669839249.png",
    badgeAlt: "GDPR compliance certification badge with European Union flag colors and data protection regulation verification",
    status: "Active",
    lastAudit: "September 2024",
    nextAudit: "September 2025"
  },
  {
    id: 4,
    name: "ISO 27001",
    description: "International standard for information security management systems demonstrating systematic approach to managing sensitive data.",
    icon: "Award",
    badge: "https://img.rocket.new/generatedImages/rocket_gen_img_195489c66-1764667420316.png",
    badgeAlt: "ISO 27001 certification badge displaying international information security management standard with official ISO seal",
    status: "Active",
    lastAudit: "August 2024",
    nextAudit: "August 2025"
  },
  {
    id: 5,
    name: "CCPA Compliant",
    description: "California Consumer Privacy Act compliance ensuring transparency and control over personal information for California residents.",
    icon: "FileText",
    badge: "https://img.rocket.new/generatedImages/rocket_gen_img_13a0d61ee-1764670064151.png",
    badgeAlt: "CCPA compliance badge showing California state outline with privacy protection verification and consumer rights seal",
    status: "Active",
    lastAudit: "July 2024",
    nextAudit: "July 2025"
  },
  {
    id: 6,
    name: "HIPAA Ready",
    description: "Healthcare data protection standards for handling protected health information with appropriate safeguards and controls.",
    icon: "Heart",
    badge: "https://img.rocket.new/generatedImages/rocket_gen_img_156d04b04-1764671100544.png",
    badgeAlt: "HIPAA compliance badge featuring medical cross symbol with healthcare data protection certification and security verification",
    status: "Active",
    lastAudit: "June 2024",
    nextAudit: "June 2025"
  }];


  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Compliance Certifications
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Our comprehensive compliance framework ensures your financial data meets the strictest regulatory requirements across multiple jurisdictions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certifications?.map((cert) =>
          <div
            key={cert?.id}
            className="bg-card border border-border rounded-xl p-6 hover:shadow-lg transition-all duration-300 hover:border-primary/50">

              <div className="flex items-start justify-between mb-4">
                <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center">
                  <Icon name={cert?.icon} size={32} color="var(--color-primary)" />
                </div>
                <div className="w-12 h-12 rounded-lg overflow-hidden border border-border">
                  <Image
                  src={cert?.badge}
                  alt={cert?.badgeAlt}
                  className="w-full h-full object-cover" />

                </div>
              </div>

              <h3 className="text-xl font-bold text-foreground mb-2">{cert?.name}</h3>
              <p className="text-sm text-muted-foreground mb-4">{cert?.description}</p>

              <div className="space-y-2 pt-4 border-t border-border">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-muted-foreground">Status:</span>
                  <span className="flex items-center gap-1 text-success font-medium">
                    <Icon name="CheckCircle" size={16} />
                    {cert?.status}
                  </span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-muted-foreground">Last Audit:</span>
                  <span className="text-foreground font-medium">{cert?.lastAudit}</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-muted-foreground">Next Audit:</span>
                  <span className="text-foreground font-medium">{cert?.nextAudit}</span>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>);

};

export default ComplianceCertifications;