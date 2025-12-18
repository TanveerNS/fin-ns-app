import React from 'react';
import Icon from '../../../AppIcon';

const SecurityTimeline = () => {
  const timeline = [
    {
      id: 1,
      date: "December 2024",
      title: "Enhanced Encryption Protocols",
      description: "Upgraded to TLS 1.3 and implemented quantum-resistant encryption algorithms to future-proof our security infrastructure.",
      icon: "Lock",
      status: "completed"
    },
    {
      id: 2,
      date: "November 2024",
      title: "SOC 2 Type II Recertification",
      description: "Successfully completed annual SOC 2 Type II audit with zero findings, demonstrating continued excellence in security controls.",
      icon: "Award",
      status: "completed"
    },
    {
      id: 3,
      date: "October 2024",
      title: "Zero Trust Architecture Implementation",
      description: "Deployed comprehensive zero trust security model with continuous verification and least-privilege access controls.",
      icon: "Shield",
      status: "completed"
    },
    {
      id: 4,
      date: "September 2024",
      title: "Advanced Threat Detection",
      description: "Implemented AI-powered threat detection system with real-time anomaly detection and automated response capabilities.",
      icon: "Eye",
      status: "completed"
    },
    {
      id: 5,
      date: "Q1 2025",
      title: "ISO 27001 Recertification",
      description: "Scheduled recertification audit for ISO 27001 information security management system compliance.",
      icon: "FileCheck",
      status: "upcoming"
    },
    {
      id: 6,
      date: "Q2 2025",
      title: "Enhanced Biometric Authentication",
      description: "Planned rollout of advanced biometric authentication options including facial recognition and fingerprint scanning.",
      icon: "Fingerprint",
      status: "upcoming"
    }
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Security Enhancement Timeline
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Our commitment to security is ongoing. Track our continuous improvements and upcoming security initiatives.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-border" />

            <div className="space-y-8">
              {timeline?.map((item, index) => (
                <div key={item?.id} className="relative pl-20">
                  <div className={`absolute left-0 w-16 h-16 rounded-full flex items-center justify-center ${
                    item?.status === 'completed' 
                      ? 'bg-success/10 border-2 border-success' :'bg-primary/10 border-2 border-primary'
                  }`}>
                    <Icon 
                      name={item?.icon} 
                      size={28} 
                      color={item?.status === 'completed' ? 'var(--color-success)' : 'var(--color-primary)'} 
                    />
                  </div>

                  <div className="bg-card border border-border rounded-xl p-6 hover:shadow-lg transition-all duration-300">
                    <div className="flex items-start justify-between mb-2">
                      <div>
                        <span className="text-sm font-medium text-muted-foreground">{item?.date}</span>
                        <h3 className="text-xl font-bold text-foreground mt-1">{item?.title}</h3>
                      </div>
                      <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                        item?.status === 'completed'
                          ? 'bg-success/10 text-success' :'bg-primary/10 text-primary'
                      }`}>
                        {item?.status === 'completed' ? 'Completed' : 'Upcoming'}
                      </span>
                    </div>
                    <p className="text-muted-foreground">{item?.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SecurityTimeline;