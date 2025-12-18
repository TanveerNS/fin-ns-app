import React, { useState } from 'react';
import Icon from '../../../AppIcon';

const SecurityFAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      id: 1,
      question: "How is my financial data encrypted?",
      answer: "All financial data is encrypted using industry-standard AES-256 encryption at rest and TLS 1.3 encryption in transit. This means your data is protected both when stored in our databases and when transmitted between your device and our servers. We also implement additional encryption layers for particularly sensitive information such as bank account numbers and payment credentials."
    },
    {
      id: 2,
      question: "What happens if there's a security breach?",
      answer: "In the unlikely event of a security breach, we have a comprehensive incident response plan that includes immediate containment, forensic investigation, and notification to affected parties within 72 hours as required by GDPR. Our security team conducts regular breach simulation exercises to ensure rapid and effective response. We maintain cyber insurance and have legal partnerships to support affected customers."
    },
    {
      id: 3,
      question: "How often do you conduct security audits?",
      answer: "We conduct quarterly internal security audits and annual third-party penetration testing by certified security firms. Additionally, we maintain continuous automated security scanning and vulnerability assessments. Our SOC 2 Type II certification requires annual comprehensive audits by independent auditors, and we undergo regular compliance assessments for PCI DSS, ISO 27001, and other certifications."
    },
    {
      id: 4,
      question: "Can I control who has access to my financial data?",
      answer: "Yes, you have complete control over data access through our granular role-based access control system. You can define specific permissions for team members, set up approval workflows for sensitive operations, and review detailed audit logs of all data access. You can also enable additional security measures like IP whitelisting and device authorization for enhanced protection."
    },
    {
      id: 5,
      question: "Is my data backed up? How can I recover it?",
      answer: "We perform automated daily backups with point-in-time recovery capabilities, allowing restoration to any moment within the past 30 days. Backups are encrypted and stored in geographically distributed data centers for redundancy. You can initiate data recovery through your account settings or by contacting our support team. We guarantee 99.99% data durability and maintain backup retention for compliance requirements."
    },
    {
      id: 6,
      question: "What compliance standards do you meet?",
      answer: "We maintain compliance with SOC 2 Type II, PCI DSS Level 1, ISO 27001, GDPR, CCPA, and HIPAA standards. Our compliance framework is continuously monitored and updated to meet evolving regulatory requirements. We provide detailed compliance documentation and can support your organization's compliance needs with custom reports and certifications."
    },
    {
      id: 7,
      question: "How do you handle data privacy regulations?",
      answer: "We implement privacy by design principles, ensuring data protection is built into every feature. We comply with GDPR, CCPA, and other privacy regulations by providing transparent data collection practices, user consent management, data portability options, and the right to deletion. Our Data Protection Officer oversees all privacy matters and is available to address your concerns."
    },
    {
      id: 8,
      question: "What authentication methods do you support?",
      answer: "We support multiple authentication methods including password-based login with strong password requirements, multi-factor authentication via SMS and authenticator apps, biometric authentication (fingerprint and facial recognition), and hardware security keys. We also offer single sign-on (SSO) integration for enterprise customers and support SAML 2.0 and OAuth 2.0 protocols."
    }
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Security & Compliance FAQ
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Common questions about our security practices, compliance standards, and data protection measures.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="space-y-4">
            {faqs?.map((faq, index) => (
              <div
                key={faq?.id}
                className="bg-card border border-border rounded-xl overflow-hidden hover:border-primary/50 transition-all duration-300"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full flex items-center justify-between p-6 text-left"
                >
                  <span className="text-lg font-semibold text-foreground pr-4">{faq?.question}</span>
                  <Icon
                    name={openIndex === index ? "ChevronUp" : "ChevronDown"}
                    size={24}
                    color="var(--color-primary)"
                    className="flex-shrink-0"
                  />
                </button>
                
                {openIndex === index && (
                  <div className="px-6 pb-6">
                    <p className="text-muted-foreground leading-relaxed">{faq?.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="mt-12 bg-gradient-to-br from-primary/5 to-secondary/5 rounded-2xl p-8 border border-border text-center">
            <Icon name="HelpCircle" size={48} color="var(--color-primary)" className="mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-foreground mb-3">Still Have Questions?</h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Our security team is available to answer any additional questions about our security practices, compliance certifications, or data protection measures.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <button className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors">
                <Icon name="Mail" size={18} />
                <span className="font-medium">Email Security Team</span>
              </button>
              <button className="inline-flex items-center gap-2 px-6 py-3 bg-card border border-border text-foreground rounded-lg hover:bg-muted transition-colors">
                <Icon name="MessageCircle" size={18} />
                <span className="font-medium">Live Chat Support</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SecurityFAQ;