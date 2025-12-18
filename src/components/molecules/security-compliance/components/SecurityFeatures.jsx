import React from 'react';
import Icon from '../../../AppIcon';

const SecurityFeatures = () => {
  const features = [
    {
      id: 1,
      icon: "Lock",
      title: "End-to-End Encryption",
      description: "All data is encrypted in transit using TLS 1.3 and at rest using AES-256 encryption, ensuring your financial information remains secure at every stage.",
      details: [
        "256-bit AES encryption at rest",
        "TLS 1.3 for data in transit",
        "Encrypted database backups",
        "Secure key management system"
      ]
    },
    {
      id: 2,
      icon: "Shield",
      title: "Multi-Factor Authentication",
      description: "Protect your account with multiple layers of authentication including SMS, authenticator apps, and biometric verification options.",
      details: [
        "SMS and email verification",
        "TOTP authenticator app support",
        "Biometric authentication",
        "Hardware security key support"
      ]
    },
    {
      id: 3,
      icon: "Eye",
      title: "Continuous Monitoring",
      description: "24/7 security monitoring with real-time threat detection and automated response systems to identify and neutralize potential security risks.",
      details: [
        "Real-time threat detection",
        "Automated security alerts",
        "Intrusion prevention systems",
        "Security incident response team"
      ]
    },
    {
      id: 4,
      icon: "Database",
      title: "Data Backup & Recovery",
      description: "Automated daily backups with point-in-time recovery capabilities ensure your financial data is never lost and can be restored quickly.",
      details: [
        "Automated daily backups",
        "Point-in-time recovery",
        "Geo-redundant storage",
        "99.99% data durability"
      ]
    },
    {
      id: 5,
      icon: "UserCheck",
      title: "Access Control",
      description: "Granular role-based access controls with audit trails ensure only authorized personnel can access sensitive financial information.",
      details: [
        "Role-based access control",
        "Principle of least privilege",
        "Session management",
        "Complete audit trails"
      ]
    },
    {
      id: 6,
      icon: "FileSearch",
      title: "Security Audits",
      description: "Regular third-party security audits and penetration testing to identify and address vulnerabilities before they can be exploited.",
      details: [
        "Annual penetration testing",
        "Quarterly security audits",
        "Vulnerability assessments",
        "Bug bounty program"
      ]
    }
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Enterprise Security Features
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Multi-layered security architecture designed to protect your financial data from unauthorized access, breaches, and cyber threats.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features?.map((feature) => (
            <div
              key={feature?.id}
              className="bg-card border border-border rounded-xl p-6 hover:shadow-lg transition-all duration-300"
            >
              <div className="w-14 h-14 bg-gradient-growth rounded-lg flex items-center justify-center mb-4">
                <Icon name={feature?.icon} size={28} color="#FFFFFF" strokeWidth={2.5} />
              </div>

              <h3 className="text-xl font-bold text-foreground mb-3">{feature?.title}</h3>
              <p className="text-muted-foreground mb-4">{feature?.description}</p>

              <ul className="space-y-2">
                {feature?.details?.map((detail, index) => (
                  <li key={index} className="flex items-start gap-2 text-sm">
                    <Icon name="Check" size={16} color="var(--color-success)" className="mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">{detail}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SecurityFeatures;