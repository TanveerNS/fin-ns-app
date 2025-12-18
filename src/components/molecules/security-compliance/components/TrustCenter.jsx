import React, { useState } from 'react';
import Icon from '../../../AppIcon';
import Button from '../../../ui/Button';

const TrustCenter = () => {
  const [activeCategory, setActiveCategory] = useState('reports');

  const categories = [
    { id: 'reports', label: 'Security Reports', icon: 'FileText' },
    { id: 'policies', label: 'Policies & Procedures', icon: 'BookOpen' },
    { id: 'certifications', label: 'Certifications', icon: 'Award' },
    { id: 'transparency', label: 'Transparency Reports', icon: 'Eye' }
  ];

  const documents = {
    reports: [
      {
        id: 1,
        title: "SOC 2 Type II Report",
        description: "Comprehensive audit report covering security, availability, and confidentiality controls",
        date: "November 2024",
        size: "2.4 MB",
        icon: "FileText",
        restricted: true
      },
      {
        id: 2,
        title: "Penetration Test Results",
        description: "Third-party security assessment and vulnerability testing results",
        date: "October 2024",
        size: "1.8 MB",
        icon: "Shield",
        restricted: true
      },
      {
        id: 3,
        title: "Security Architecture Overview",
        description: "High-level overview of our security infrastructure and controls",
        date: "September 2024",
        size: "3.2 MB",
        icon: "Database",
        restricted: false
      }
    ],
    policies: [
      {
        id: 4,
        title: "Information Security Policy",
        description: "Comprehensive policy governing information security practices and procedures",
        date: "Updated December 2024",
        size: "856 KB",
        icon: "FileText",
        restricted: false
      },
      {
        id: 5,
        title: "Data Protection Policy",
        description: "Guidelines for handling, processing, and protecting customer data",
        date: "Updated November 2024",
        size: "724 KB",
        icon: "Lock",
        restricted: false
      },
      {
        id: 6,
        title: "Incident Response Plan",
        description: "Procedures for detecting, responding to, and recovering from security incidents",
        date: "Updated October 2024",
        size: "1.1 MB",
        icon: "AlertCircle",
        restricted: true
      }
    ],
    certifications: [
      {
        id: 7,
        title: "ISO 27001 Certificate",
        description: "Information security management system certification",
        date: "Valid until August 2025",
        size: "512 KB",
        icon: "Award",
        restricted: false
      },
      {
        id: 8,
        title: "PCI DSS Attestation",
        description: "Payment Card Industry Data Security Standard compliance certificate",
        date: "Valid until October 2025",
        size: "648 KB",
        icon: "CreditCard",
        restricted: false
      },
      {
        id: 9,
        title: "GDPR Compliance Certificate",
        description: "European data protection regulation compliance documentation",
        date: "Valid until September 2025",
        size: "432 KB",
        icon: "Globe",
        restricted: false
      }
    ],
    transparency: [
      {
        id: 10,
        title: "Q4 2024 Transparency Report",
        description: "Quarterly report on security incidents, data requests, and system uptime",
        date: "December 2024",
        size: "1.5 MB",
        icon: "BarChart",
        restricted: false
      },
      {
        id: 11,
        title: "Annual Security Review 2024",
        description: "Comprehensive annual review of security posture and improvements",
        date: "December 2024",
        size: "4.2 MB",
        icon: "TrendingUp",
        restricted: false
      },
      {
        id: 12,
        title: "Subprocessor List",
        description: "Complete list of third-party service providers and their security status",
        date: "Updated December 2024",
        size: "324 KB",
        icon: "Users",
        restricted: false
      }
    ]
  };

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Trust Center & Documentation
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Access our comprehensive security documentation, compliance reports, and transparency information.
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="flex flex-wrap gap-2 mb-8 justify-center">
            {categories?.map((category) => (
              <button
                key={category?.id}
                onClick={() => setActiveCategory(category?.id)}
                className={`flex items-center gap-2 px-6 py-3 rounded-lg font-medium transition-all duration-200 ${
                  activeCategory === category?.id
                    ? 'bg-primary text-primary-foreground shadow-md'
                    : 'bg-card text-foreground border border-border hover:bg-muted'
                }`}
              >
                <Icon name={category?.icon} size={18} />
                <span>{category?.label}</span>
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {documents?.[activeCategory]?.map((doc) => (
              <div
                key={doc?.id}
                className="bg-card border border-border rounded-xl p-6 hover:shadow-lg transition-all duration-300"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Icon name={doc?.icon} size={24} color="var(--color-primary)" />
                  </div>
                  {doc?.restricted && (
                    <span className="px-2 py-1 bg-warning/10 text-warning text-xs font-medium rounded">
                      NDA Required
                    </span>
                  )}
                </div>

                <h3 className="text-lg font-bold text-foreground mb-2">{doc?.title}</h3>
                <p className="text-sm text-muted-foreground mb-4">{doc?.description}</p>

                <div className="flex items-center justify-between text-xs text-muted-foreground mb-4">
                  <span>{doc?.date}</span>
                  <span>{doc?.size}</span>
                </div>

                <Button
                  variant={doc?.restricted ? "outline" : "default"}
                  size="sm"
                  fullWidth
                  iconName={doc?.restricted ? "Lock" : "Download"}
                  iconPosition="left"
                >
                  {doc?.restricted ? "Request Access" : "Download"}
                </Button>
              </div>
            ))}
          </div>

          <div className="mt-12 bg-gradient-to-br from-primary/5 to-secondary/5 rounded-2xl p-8 border border-border text-center">
            <Icon name="Mail" size={48} color="var(--color-primary)" className="mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-foreground mb-3">Need Additional Documentation?</h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              For enterprise customers requiring additional security documentation, custom compliance reports, or specific certifications, our security team is here to help.
            </p>
            <Button variant="default" iconName="ArrowRight" iconPosition="right">
              Contact Security Team
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustCenter;