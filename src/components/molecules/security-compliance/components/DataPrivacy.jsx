import React from 'react';
import Icon from '../../../AppIcon';

const DataPrivacy = () => {
  const privacyPrinciples = [
    {
      id: 1,
      icon: "UserX",
      title: "Data Minimization",
      description: "We collect only the data necessary to provide our services and never sell or share your information with third parties for marketing purposes."
    },
    {
      id: 2,
      icon: "Clock",
      title: "Retention Policies",
      description: "Clear data retention policies ensure your information is kept only as long as necessary and securely deleted when no longer needed."
    },
    {
      id: 3,
      icon: "Eye",
      title: "Transparency",
      description: "Complete transparency about what data we collect, how we use it, and who has access to it through our detailed privacy documentation."
    },
    {
      id: 4,
      icon: "UserCheck",
      title: "User Control",
      description: "Full control over your data with the ability to access, export, modify, or delete your information at any time through your account settings."
    },
    {
      id: 5,
      icon: "ShieldCheck",
      title: "Privacy by Design",
      description: "Privacy considerations are built into every feature from the ground up, not added as an afterthought or compliance checkbox."
    },
    {
      id: 6,
      icon: "AlertCircle",
      title: "Breach Notification",
      description: "Immediate notification protocols in the unlikely event of a data breach, with clear communication about impact and remediation steps."
    }
  ];

  const dataRights = [
    "Right to access your personal data",
    "Right to correct inaccurate information",
    "Right to delete your data (right to be forgotten)",
    "Right to data portability and export",
    "Right to restrict processing",
    "Right to object to automated decision-making",
    "Right to withdraw consent at any time",
    "Right to lodge a complaint with supervisory authorities"
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Data Privacy & Protection
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Your privacy is fundamental to our service. We implement comprehensive data protection measures and respect your rights over your personal information.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {privacyPrinciples?.map((principle) => (
            <div
              key={principle?.id}
              className="bg-card border border-border rounded-xl p-6 hover:border-primary/50 transition-all duration-300"
            >
              <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center mb-4">
                <Icon name={principle?.icon} size={24} color="var(--color-secondary)" />
              </div>
              <h3 className="text-lg font-bold text-foreground mb-2">{principle?.title}</h3>
              <p className="text-sm text-muted-foreground">{principle?.description}</p>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-br from-primary/5 to-secondary/5 rounded-2xl p-8 md:p-12 border border-border">
          <div className="max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-foreground mb-6 text-center">Your Data Rights</h3>
            <p className="text-muted-foreground mb-8 text-center">
              Under GDPR, CCPA, and other privacy regulations, you have comprehensive rights over your personal data:
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {dataRights?.map((right, index) => (
                <div key={index} className="flex items-start gap-3 bg-card rounded-lg p-4 border border-border">
                  <Icon name="CheckCircle" size={20} color="var(--color-primary)" className="flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-foreground">{right}</span>
                </div>
              ))}
            </div>

            <div className="mt-8 text-center">
              <p className="text-sm text-muted-foreground mb-4">
                To exercise any of these rights, contact our Data Protection Officer at privacy@fintechpro.com
              </p>
              <div className="flex flex-wrap items-center justify-center gap-4">
                <a
                  href="mailto:privacy@fintechpro.com"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors"
                >
                  <Icon name="Mail" size={18} />
                  <span className="font-medium">Contact Privacy Team</span>
                </a>
                <button className="inline-flex items-center gap-2 px-6 py-3 bg-card border border-border text-foreground rounded-lg hover:bg-muted transition-colors">
                  <Icon name="Download" size={18} />
                  <span className="font-medium">Download Privacy Policy</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DataPrivacy;