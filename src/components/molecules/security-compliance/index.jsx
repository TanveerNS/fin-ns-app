import React from 'react';
import Header from '../../ui/Header';
import Footer from '../../ui/Footer';
import Breadcrumbs from '../../ui/Breadcrumbs';
import SecurityHero from './components/SecurityHero';
import ComplianceCertifications from './components/ComplianceCertifications';
import SecurityFeatures from './components/SecurityFeatures';
import DataPrivacy from './components/DataPrivacy';
import SecurityTimeline from './components/SecurityTimeline';
import TrustCenter from './components/TrustCenter';
import SecurityFAQ from './components/SecurityFAQ';
import SecurityCTA from './components/SecurityCTA';

const SecurityComplianceWrap = () => {
  return (
    <>

      <Header />
      
      <main className="min-h-screen bg-background">
        <div className="container mx-auto px-4">
          <Breadcrumbs />
        </div>

        <SecurityHero />
        <ComplianceCertifications />
        <SecurityFeatures />
        <DataPrivacy />
        <SecurityTimeline />
        <TrustCenter />
        <SecurityFAQ />
        <SecurityCTA />
      </main>

      <Footer />
    </>
  );
};

export default SecurityComplianceWrap;